import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import YAML from 'yaml';

import { PARADOX_DIR, PEOPLE_DIR, SOURCE_DIR, PATH_DIR } from './paths.js';
import { paradoxSchema, personSchema, sourceSchema, learningPathSchema } from './schema.js';
import { parseSections, readingMinutes } from './sections.js';
import { loadTaxonomy } from './taxonomy.js';

// One loader, used by the website build, the validate CLI and the admin server.
// There is deliberately no second way to read content.

// By far the most common authoring mistake is an unquoted value containing
// ": " — YAML reads it as a nested key. Say so, rather than repeating the
// parser's own wording.
function explainYamlError(message) {
  const hint =
    /mapping|key node|scalar|implicit keys/i.test(message)
      ? ' This is almost always an unquoted value containing a colon followed by a space. Wrap the value in a `>-` block, or put it in quotes.'
      : '';
  return `${message.split('\n')[0]}${hint}`;
}

function listFiles(dir, ext) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(ext) && !f.startsWith('.') && !f.startsWith('_'))
    .sort()
    .map((f) => path.join(dir, f));
}

function readYamlDir(dir, schema, kind) {
  const items = [];
  const problems = [];
  for (const file of [...listFiles(dir, '.yml'), ...listFiles(dir, '.yaml')].sort()) {
    let raw;
    try {
      raw = YAML.parse(fs.readFileSync(file, 'utf8'));
    } catch (e) {
      problems.push({ file, kind, fatal: true, message: `YAML is malformed. ${explainYamlError(e.message)}` });
      continue;
    }
    const parsed = schema.safeParse(raw ?? {});
    if (!parsed.success) {
      problems.push({ file, kind, fatal: true, zod: parsed.error, data: raw });
      continue;
    }
    const expectedId = path.basename(file).replace(/\.ya?ml$/, '');
    if (parsed.data.id !== expectedId) {
      problems.push({
        file,
        kind,
        fatal: true,
        message: `id "${parsed.data.id}" must match the filename "${expectedId}"`,
      });
      continue;
    }
    items.push({ ...parsed.data, _file: file });
  }
  return { items, problems };
}

function readParadoxes() {
  const items = [];
  const problems = [];

  for (const file of listFiles(PARADOX_DIR, '.md')) {
    const rel = path.relative(PARADOX_DIR, file);
    let parsedFile;
    try {
      parsedFile = matter(fs.readFileSync(file, 'utf8'));
    } catch (e) {
      problems.push({
        file,
        kind: 'paradox',
        fatal: true,
        message: `Front matter is malformed. ${explainYamlError(e.message)}`,
      });
      continue;
    }

    const result = paradoxSchema.safeParse(parsedFile.data ?? {});
    if (!result.success) {
      problems.push({ file, kind: 'paradox', fatal: true, zod: result.error, data: parsedFile.data });
      continue;
    }

    const expectedSlug = rel.replace(/\.md$/, '');
    if (result.data.slug !== expectedSlug) {
      problems.push({
        file,
        kind: 'paradox',
        fatal: true,
        message: `slug "${result.data.slug}" must match the filename "${expectedSlug}.md" so URLs stay stable`,
      });
      continue;
    }

    const { sections, unknownHeadings } = parseSections(parsedFile.content);

    items.push({
      ...result.data,
      sections,
      unknownHeadings,
      body: parsedFile.content,
      readingMinutes: readingMinutes(sections),
      _file: file,
    });
  }
  return { items, problems };
}

/**
 * Attach derived, read-only projections that pages and the admin both need.
 * Everything here is a pure function of the content on disk.
 */
function derive(catalog) {
  const tx = catalog.taxonomy;
  const bySlug = new Map(catalog.paradoxes.map((p) => [p.slug, p]));

  // Numeric renown, so listings can sort on it. Unknown values sort last rather
  // than throwing, because a listing is not the place to surface a content bug.
  const renownOrder = new Map(tx.renowns.map((r, i) => [r.id, i]));
  const difficultyOrder = new Map(tx.difficulties.map((d, i) => [d.id, i]));
  for (const p of catalog.allParadoxes) {
    p.renownRank = renownOrder.get(p.renown) ?? renownOrder.size;
    p.difficultyRank = difficultyOrder.get(p.difficulty) ?? difficultyOrder.size;
  }

  // Reverse relationships. An author writes an edge once, on whichever side
  // reads more naturally; the other side is generated.
  /** @type {Map<string, Array<{kind:string,to:string,note?:string,derived:boolean}>>} */
  const incoming = new Map();
  for (const p of catalog.paradoxes) {
    for (const rel of p.relationships) {
      const inverse = tx.inverseOf(rel.kind);
      if (!inverse || !bySlug.has(rel.to)) continue;
      const list = incoming.get(rel.to) ?? [];
      // Skip if the target already declares the edge explicitly.
      const target = bySlug.get(rel.to);
      const declared = target.relationships.some((r) => r.to === p.slug && r.kind === inverse);
      if (!declared) list.push({ kind: inverse, to: p.slug, note: rel.note, derived: true });
      incoming.set(rel.to, list);
    }
  }
  for (const p of catalog.paradoxes) {
    p.allRelationships = [
      ...p.relationships.map((r) => ({ ...r, derived: false })),
      ...(incoming.get(p.slug) ?? []),
    ].filter((r) => bySlug.has(r.to));
  }

  // Which learning paths include each paradox.
  for (const p of catalog.paradoxes) p.paths = [];
  for (const lp of catalog.paths) {
    lp.steps.forEach((step, i) => {
      const target = bySlug.get(step.paradox);
      if (target) target.paths.push({ path: lp, index: i });
    });
  }

  // Which paradoxes cite each source, and which mention each person.
  const citedBy = new Map();
  for (const p of catalog.paradoxes) {
    for (const r of p.references) {
      if (!citedBy.has(r.source)) citedBy.set(r.source, []);
      citedBy.get(r.source).push(p.slug);
    }
  }
  for (const s of catalog.sources) s.citedBy = citedBy.get(s.id) ?? [];

  const personTo = new Map();
  for (const p of catalog.paradoxes) {
    for (const id of p.people) {
      if (!personTo.has(id)) personTo.set(id, []);
      personTo.get(id).push(p.slug);
    }
  }
  for (const person of catalog.people) person.paradoxes = personTo.get(person.id) ?? [];

  catalog.bySlug = bySlug;
  catalog.personById = new Map(catalog.people.map((x) => [x.id, x]));
  catalog.sourceById = new Map(catalog.sources.map((x) => [x.id, x]));
  catalog.pathById = new Map(catalog.paths.map((x) => [x.id, x]));
  return catalog;
}

/**
 * Read the whole knowledge base from disk.
 * @param {{ publishedOnly?: boolean, fresh?: boolean }} [opts]
 */
export function loadCatalog(opts = {}) {
  const taxonomy = loadTaxonomy({ fresh: opts.fresh });

  const paradoxes = readParadoxes();
  const people = readYamlDir(PEOPLE_DIR, personSchema, 'person');
  const sources = readYamlDir(SOURCE_DIR, sourceSchema, 'source');
  const paths = readYamlDir(PATH_DIR, learningPathSchema, 'path');

  let list = paradoxes.items;
  if (opts.publishedOnly) list = list.filter((p) => p.publishing.state === 'published');

  const catalog = {
    taxonomy,
    paradoxes: list.sort((a, b) => a.title.localeCompare(b.title)),
    allParadoxes: paradoxes.items,
    people: people.items.sort((a, b) => a.name.localeCompare(b.name)),
    sources: sources.items.sort((a, b) => a.title.localeCompare(b.title)),
    paths: paths.items.sort((a, b) => a.order - b.order || a.title.localeCompare(b.title)),
    loadProblems: [...paradoxes.problems, ...people.problems, ...sources.problems, ...paths.problems],
  };

  return derive(catalog);
}

/**
 * The catalog as the public site sees it: published entries only.
 * Cached, because Astro builds hundreds of pages from it.
 */
let publicCache = null;
export function publicCatalog() {
  if (!publicCache) publicCache = loadCatalog({ publishedOnly: true });
  return publicCache;
}
