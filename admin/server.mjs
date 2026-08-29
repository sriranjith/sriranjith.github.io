#!/usr/bin/env node
import http from 'node:http';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

import { loadCatalog } from '../src/lib/catalog.js';
import { validateCatalog } from '../src/lib/validate.js';
import { contentHealth } from '../src/lib/health.js';
import { LAYERS, serialiseSections, parseSections } from '../src/lib/sections.js';
import { INTERACTIVE } from '../src/lib/interactive.js';
import { PUBLISH_STATES } from '../src/lib/schema.js';
import { PARADOX_DIR, PEOPLE_DIR, SOURCE_DIR, PATH_DIR, TAXONOMY_DIR, ROOT } from '../src/lib/paths.js';

// A local-only editor for the content files.
//
// It binds to 127.0.0.1 and is never deployed, which is why it needs no
// authentication, no session handling, and no user model. The published site is
// a folder of static files with no admin surface at all. See
// docs/decisions/0003-local-only-admin.md.

const HOST = '127.0.0.1';
const PORT = Number(process.env.ADMIN_PORT ?? 4322);
const UI_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), 'ui');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
};

const json = (res, status, body) => {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(body));
};

const readBody = (req) =>
  new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 4e6) reject(new Error('Request too large'));
    });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        reject(new Error('Body was not valid JSON'));
      }
    });
    req.on('error', reject);
  });

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Reject anything that could escape the content directory. */
function contentPath(dir, id, ext) {
  if (!SLUG_RE.test(id)) throw new Error(`"${id}" is not a valid id: use lowercase words joined by hyphens.`);
  const full = path.join(dir, `${id}${ext}`);
  if (!full.startsWith(dir + path.sep)) throw new Error('Refused: path escapes the content directory.');
  return full;
}

function slugify(text) {
  return String(text)
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70);
}

const today = () => new Date().toISOString().slice(0, 10);

/** Serialise front matter deterministically, so diffs stay small and reviewable. */
const FIELD_ORDER = [
  'title', 'slug', 'alternateNames', 'summary',
  'era', 'date', 'year', 'origin', 'people',
  'domains', 'types', 'nature', 'difficulty', 'status',
  'interactive', 'concepts', 'relationships',
  'references', 'furtherReading', 'publishing',
];

function writeParadoxFile(data, sections) {
  const ordered = {};
  for (const key of FIELD_ORDER) {
    const value = data[key];
    const empty =
      value == null ||
      value === '' ||
      (Array.isArray(value) && value.length === 0);
    if (!empty) ordered[key] = value;
  }

  const frontMatter = YAML.stringify(ordered, {
    lineWidth: 80,
    defaultStringType: 'QUOTE_DOUBLE',
    defaultKeyType: 'PLAIN',
    // Long prose becomes a folded block, which is what an author would write.
    blockQuote: 'folded',
  });

  return `---\n${frontMatter}---\n\n${serialiseSections(sections)}`;
}

// ---------------------------------------------------------------- API

const api = {
  async 'GET /api/state'() {
    const catalog = loadCatalog({ fresh: true });
    const health = contentHealth(catalog);
    const tx = catalog.taxonomy;

    return {
      health,
      layers: LAYERS,
      interactive: INTERACTIVE,
      publishStates: PUBLISH_STATES,
      taxonomy: {
        domains: tx.domains,
        types: tx.types,
        natures: tx.natures,
        difficulties: tx.difficulties,
        statuses: tx.statuses,
        eras: tx.eras,
        relationshipKinds: tx.relationshipKinds,
        sourceTypes: tx.sourceTypes,
      },
      paradoxes: catalog.allParadoxes.map((p) => ({
        slug: p.slug,
        title: p.title,
        summary: p.summary,
        state: p.publishing.state,
        domains: p.domains,
        difficulty: p.difficulty,
        era: p.era,
        year: p.year,
        updated: p.publishing.updated,
      })),
      people: catalog.people.map((p) => ({ id: p.id, name: p.name, uses: p.paradoxes.length })),
      sources: catalog.sources.map((s) => ({
        id: s.id,
        title: s.title,
        type: s.type,
        authors: s.authors,
        year: s.year,
        uses: s.citedBy.length,
      })),
      paths: catalog.paths.map((p) => ({ id: p.id, title: p.title, steps: p.steps.length })),
    };
  },

  async 'GET /api/paradox'(_body, query) {
    const catalog = loadCatalog({ fresh: true });
    const paradox = catalog.allParadoxes.find((p) => p.slug === query.get('slug'));
    if (!paradox) throw Object.assign(new Error('No such paradox.'), { status: 404 });

    const findings = validateCatalog(catalog).findings.filter(
      (f) => f.entity === 'paradox' && f.id === paradox.slug
    );

    const { _file, sections, body, unknownHeadings, allRelationships, paths, readingMinutes, ...front } = paradox;
    return { front, sections, findings, file: path.relative(ROOT, _file) };
  },

  async 'POST /api/paradox'(body) {
    const { front, sections, previousSlug } = body;
    if (!front?.slug) throw new Error('A slug is required.');

    const file = contentPath(PARADOX_DIR, front.slug, '.md');

    // Renaming a slug renames the file, because the filename is the URL.
    if (previousSlug && previousSlug !== front.slug) {
      const old = contentPath(PARADOX_DIR, previousSlug, '.md');
      if (fs.existsSync(file)) throw new Error(`"${front.slug}" already exists.`);
      if (fs.existsSync(old)) await fsp.rename(old, file);
    } else if (!previousSlug && fs.existsSync(file)) {
      throw new Error(`"${front.slug}" already exists.`);
    }

    front.publishing = {
      state: front.publishing?.state ?? 'draft',
      created: front.publishing?.created ?? today(),
      updated: today(),
      ...(front.publishing?.notes ? { notes: front.publishing.notes } : {}),
    };

    await fsp.writeFile(file, writeParadoxFile(front, sections ?? {}), 'utf8');

    const catalog = loadCatalog({ fresh: true });
    return {
      saved: front.slug,
      file: path.relative(ROOT, file),
      findings: validateCatalog(catalog).findings.filter(
        (f) => f.entity === 'paradox' && f.id === front.slug
      ),
    };
  },

  async 'POST /api/paradox/new'(body) {
    const title = String(body.title ?? '').trim();
    if (!title) throw new Error('A title is required.');

    const slug = body.slug ? slugify(body.slug) : slugify(title);
    const file = contentPath(PARADOX_DIR, slug, '.md');
    if (fs.existsSync(file)) throw new Error(`"${slug}" already exists.`);

    const catalog = loadCatalog({ fresh: true });
    const tx = catalog.taxonomy;

    const front = {
      title,
      slug,
      alternateNames: [],
      summary: 'One or two sentences that make a reader want to click. Write this last.',
      era: body.era ?? tx.eras.at(-1).id,
      date: body.date ?? String(new Date().getFullYear()),
      year: Number(body.year ?? new Date().getFullYear()),
      origin: '',
      people: [],
      domains: body.domains?.length ? body.domains : [tx.domains[0].id],
      types: body.types?.length ? body.types : [tx.types[0].id],
      nature: body.nature ?? 'counterintuitive-result',
      difficulty: body.difficulty ?? 'intermediate',
      status: body.status ?? 'explained',
      concepts: [],
      relationships: [],
      references: [],
      furtherReading: [],
      publishing: { state: 'draft', created: today(), updated: today() },
    };

    // Seed each section with its authoring hint, so a new file is self-documenting.
    const sections = {};
    for (const layer of LAYERS) {
      if (layer.required) sections[layer.id] = `<!-- ${layer.hint} -->`;
    }

    await fsp.writeFile(file, writeParadoxFile(front, sections), 'utf8');
    return { created: slug, file: path.relative(ROOT, file) };
  },

  async 'POST /api/paradox/state'(body) {
    const { slug, state } = body;
    if (!PUBLISH_STATES.includes(state)) throw new Error(`Unknown state "${state}".`);

    const catalog = loadCatalog({ fresh: true });
    const paradox = catalog.allParadoxes.find((p) => p.slug === slug);
    if (!paradox) throw new Error('No such paradox.');

    // Publishing runs the full validation gate first. This is the one place
    // where the admin is allowed to say no.
    if (state === 'published') {
      const trial = { ...paradox, publishing: { ...paradox.publishing, state: 'published' } };
      const trialCatalog = {
        ...catalog,
        allParadoxes: catalog.allParadoxes.map((p) => (p.slug === slug ? trial : p)),
      };
      const blocking = validateCatalog(trialCatalog).findings.filter(
        (f) => f.severity === 'error' && f.entity === 'paradox' && f.id === slug
      );
      if (blocking.length > 0) {
        return { blocked: true, findings: blocking };
      }
    }

    const { _file, sections } = paradox;
    const raw = await fsp.readFile(_file, 'utf8');
    const updated = raw
      .replace(/^(\s*state:\s*)\S+/m, `$1${state}`)
      .replace(/^(\s*updated:\s*)\S+/m, `$1${today()}`);
    await fsp.writeFile(_file, updated, 'utf8');

    return { slug, state };
  },

  async 'DELETE /api/paradox'(_body, query) {
    const file = contentPath(PARADOX_DIR, query.get('slug'), '.md');
    if (!fs.existsSync(file)) throw new Error('No such paradox.');
    await fsp.unlink(file);
    return { deleted: query.get('slug') };
  },

  async 'GET /api/record'(_body, query) {
    const dir = { person: PEOPLE_DIR, source: SOURCE_DIR, path: PATH_DIR }[query.get('kind')];
    if (!dir) throw new Error('Unknown record kind.');
    const file = contentPath(dir, query.get('id'), '.yml');
    if (!fs.existsSync(file)) throw Object.assign(new Error('Not found.'), { status: 404 });
    return { data: YAML.parse(await fsp.readFile(file, 'utf8')), file: path.relative(ROOT, file) };
  },

  async 'POST /api/record'(body) {
    const dir = { person: PEOPLE_DIR, source: SOURCE_DIR, path: PATH_DIR }[body.kind];
    if (!dir) throw new Error('Unknown record kind.');

    const data = body.data ?? {};
    if (!data.id) throw new Error('An id is required.');

    const file = contentPath(dir, data.id, '.yml');
    if (body.previousId && body.previousId !== data.id) {
      const old = contentPath(dir, body.previousId, '.yml');
      if (fs.existsSync(old)) await fsp.rename(old, file);
    }

    // Strip empty values so files stay readable rather than full of nulls.
    const clean = Object.fromEntries(
      Object.entries(data).filter(
        ([, v]) => v != null && v !== '' && !(Array.isArray(v) && v.length === 0)
      )
    );

    await fsp.writeFile(file, YAML.stringify(clean, { lineWidth: 80, blockQuote: 'folded' }), 'utf8');
    return { saved: data.id, file: path.relative(ROOT, file) };
  },

  async 'DELETE /api/record'(_body, query) {
    const dir = { person: PEOPLE_DIR, source: SOURCE_DIR, path: PATH_DIR }[query.get('kind')];
    if (!dir) throw new Error('Unknown record kind.');
    const file = contentPath(dir, query.get('id'), '.yml');
    if (!fs.existsSync(file)) throw new Error('Not found.');
    await fsp.unlink(file);
    return { deleted: query.get('id') };
  },

  async 'GET /api/taxonomy'(_body, query) {
    const file = path.join(TAXONOMY_DIR, `${query.get('file')}`);
    if (!file.startsWith(TAXONOMY_DIR + path.sep) || !file.endsWith('.yml')) {
      throw new Error('Refused.');
    }
    return { text: await fsp.readFile(file, 'utf8') };
  },

  async 'POST /api/taxonomy'(body) {
    const file = path.join(TAXONOMY_DIR, `${body.file}`);
    if (!file.startsWith(TAXONOMY_DIR + path.sep) || !file.endsWith('.yml')) {
      throw new Error('Refused.');
    }
    const parsed = YAML.parse(body.text);
    if (!Array.isArray(parsed)) throw new Error('A taxonomy file must be a YAML list.');
    for (const term of parsed) {
      if (!term?.id || !SLUG_RE.test(term.id)) throw new Error(`Bad id: ${JSON.stringify(term?.id)}`);
      if (!term.label) throw new Error(`Term "${term.id}" has no label.`);
    }
    await fsp.writeFile(file, body.text, 'utf8');
    return { saved: body.file, terms: parsed.length };
  },
};

// ---------------------------------------------------------------- server

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url, `http://${HOST}:${PORT}`);
  const route = `${req.method} ${requestUrl.pathname}`;

  if (api[route]) {
    try {
      const body = ['POST', 'PUT', 'DELETE'].includes(req.method) ? await readBody(req) : {};
      json(res, 200, await api[route](body, requestUrl.searchParams));
    } catch (error) {
      json(res, error.status ?? 400, { error: error.message });
    }
    return;
  }

  // Static UI.
  const rel = requestUrl.pathname === '/' ? '/index.html' : requestUrl.pathname;
  const file = path.join(UI_DIR, rel);
  if (!file.startsWith(UI_DIR) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
    return;
  }
  res.writeHead(200, {
    'Content-Type': MIME[path.extname(file)] ?? 'application/octet-stream',
    'Cache-Control': 'no-store',
  });
  fs.createReadStream(file).pipe(res);
});

server.listen(PORT, HOST, () => {
  const catalog = loadCatalog({ fresh: true });
  const result = validateCatalog(catalog);
  console.log(`\n  Paradox admin  →  http://${HOST}:${PORT}`);
  console.log(`  ${catalog.allParadoxes.length} paradoxes · ${result.errors.length} errors · ${result.warnings.length} warnings`);
  console.log(`  Editing files in ${path.relative(process.cwd(), PARADOX_DIR)} — commit when you are happy.`);
  console.log('  Local only. Not exposed, not deployed.\n');
});
