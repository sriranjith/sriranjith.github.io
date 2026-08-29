import path from 'node:path';
import { zodIssues } from './schema.js';
import { LAYERS, LAYERS_BY_ID, REQUIRED_LAYERS } from './sections.js';
import { INTERACTIVE_IDS } from './interactive.js';

// All validation rules live here, and only here.
// The CLI, CI and the admin UI all call `validateCatalog`.
//
// Severity contract:
//   error   — blocks the build. Something is broken or wrong.
//   warning — blocks nothing, but the entry is not finished.
//   info    — a suggestion worth seeing on the dashboard.

const ERROR = 'error';
const WARNING = 'warning';
const INFO = 'info';

/** Levenshtein distance, used only to say "did you mean…". */
function distance(a, b) {
  const m = a.length;
  const n = b.length;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

function suggest(value, candidates) {
  const scored = candidates
    .map((c) => ({ c, d: distance(String(value).toLowerCase(), c.toLowerCase()) }))
    .sort((a, b) => a.d - b.d);
  const best = scored[0];
  return best && best.d <= Math.max(2, Math.round(best.c.length * 0.4)) ? best.c : null;
}

function makeReporter(list) {
  return (severity, entity, id, field, message, fix) => {
    list.push({ severity, entity, id, field, message, fix: fix ?? null });
  };
}

/** Check one taxonomy reference and report an actionable message. */
function checkTerm(report, tx, entity, id, field, kind, value) {
  if (value == null) return;
  if (tx.has(kind, value)) return;
  const options = tx.ids(kind);
  const guess = suggest(value, options);
  report(
    ERROR,
    entity,
    id,
    field,
    `"${value}" is not a valid ${kind.replace(/s$/, '')}.`,
    guess
      ? `Did you mean "${guess}"? Otherwise add it to content/taxonomy/, or pick one of: ${options.join(', ')}.`
      : `Valid values: ${options.join(', ')}.`
  );
}

const URL_OK = /^https?:\/\/[^\s"'<>]+$/;

/**
 * Validate the whole knowledge base.
 * @param {ReturnType<import('./catalog.js').loadCatalog>} catalog
 * @returns {{ findings: any[], errors: any[], warnings: any[], infos: any[], ok: boolean, byEntry: Map<string, any[]> }}
 */
export function validateCatalog(catalog) {
  /** @type {any[]} */
  const findings = [];
  const report = makeReporter(findings);
  const tx = catalog.taxonomy;

  // --- Load-time failures (malformed YAML / front matter / schema) ----------
  for (const problem of catalog.loadProblems) {
    const file = path.basename(problem.file);
    const id = file.replace(/\.(md|ya?ml)$/, '');
    if (problem.zod) {
      for (const issue of zodIssues(problem.zod)) {
        report(
          ERROR,
          problem.kind,
          id,
          issue.field,
          issue.message,
          `Fix the "${issue.field}" field in ${path.relative(process.cwd(), problem.file)}.`
        );
      }
    } else {
      report(ERROR, problem.kind, id, '(file)', problem.message, null);
    }
  }

  // --- Duplicate slugs -----------------------------------------------------
  const seenSlug = new Map();
  for (const p of catalog.allParadoxes) {
    if (seenSlug.has(p.slug)) {
      report(
        ERROR,
        'paradox',
        p.slug,
        'slug',
        `Duplicate slug, also used by ${path.basename(seenSlug.get(p.slug))}.`,
        'Slugs are URLs. Rename one file and its slug field.'
      );
    }
    seenSlug.set(p.slug, p._file);
  }

  // --- Near-duplicate titles (likely the same paradox entered twice) --------
  const titles = catalog.allParadoxes.map((p) => ({
    slug: p.slug,
    key: p.title.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(),
  }));
  for (let i = 0; i < titles.length; i++) {
    for (let j = i + 1; j < titles.length; j++) {
      const d = distance(titles[i].key, titles[j].key);
      if (d <= 2 && titles[i].key !== '') {
        report(
          WARNING,
          'paradox',
          titles[i].slug,
          'title',
          `Title is nearly identical to "${titles[j].slug}".`,
          'Confirm these are genuinely different paradoxes, not a duplicate entry.'
        );
      }
    }
  }

  // --- Alternate names must not collide with a real title ------------------
  const titleIndex = new Map(catalog.allParadoxes.map((p) => [p.title.toLowerCase(), p.slug]));
  for (const p of catalog.allParadoxes) {
    for (const alt of p.alternateNames) {
      const owner = titleIndex.get(alt.toLowerCase());
      if (owner && owner !== p.slug) {
        report(
          WARNING,
          'paradox',
          p.slug,
          'alternateNames',
          `"${alt}" is also the title of "${owner}".`,
          'Two entries claiming the same name will confuse search. Merge them or drop the alias.'
        );
      }
    }
  }

  // --- Per-paradox checks --------------------------------------------------
  for (const p of catalog.allParadoxes) {
    const id = p.slug;
    const published = p.publishing.state === 'published';
    // Draft entries get warnings where published entries get errors, so that
    // work in progress never blocks a build.
    const gate = published ? ERROR : WARNING;

    // taxonomy
    p.domains.forEach((d, i) => checkTerm(report, tx, 'paradox', id, `domains[${i}]`, 'domains', d));
    p.types.forEach((t, i) => checkTerm(report, tx, 'paradox', id, `types[${i}]`, 'types', t));
    checkTerm(report, tx, 'paradox', id, 'nature', 'natures', p.nature);
    checkTerm(report, tx, 'paradox', id, 'difficulty', 'difficulties', p.difficulty);
    checkTerm(report, tx, 'paradox', id, 'status', 'statuses', p.status);
    checkTerm(report, tx, 'paradox', id, 'era', 'eras', p.era);

    // era must agree with the sort year, or the timeline lies
    const era = tx.get('eras', p.era);
    if (era && (p.year < era.from || p.year >= era.to)) {
      const actual = tx.eraForYear(p.year);
      report(
        ERROR,
        'paradox',
        id,
        'year',
        `year ${p.year} falls outside era "${p.era}" (${era.from} to ${era.to}).`,
        actual
          ? `Either set era: ${actual.id}, or correct the year. The timeline is generated from year.`
          : 'Correct the year or the era.'
      );
    }

    // duplicated taxonomy values
    for (const [field, values] of [['domains', p.domains], ['types', p.types]]) {
      if (new Set(values).size !== values.length) {
        report(WARNING, 'paradox', id, field, `${field} contains a repeated value.`, 'Remove the duplicate.');
      }
    }

    // people
    for (const personId of p.people) {
      if (!catalog.personById.has(personId)) {
        const guess = suggest(personId, [...catalog.personById.keys()]);
        report(
          gate,
          'paradox',
          id,
          'people',
          `Unknown person "${personId}".`,
          guess
            ? `Did you mean "${guess}"?`
            : `Create content/people/${personId}.yml, or remove the reference.`
        );
      }
    }

    // relationships
    const seenEdge = new Set();
    p.relationships.forEach((rel, i) => {
      checkTerm(report, tx, 'paradox', id, `relationships[${i}].kind`, 'relationshipKinds', rel.kind);
      if (rel.to === id) {
        report(ERROR, 'paradox', id, `relationships[${i}].to`, 'A paradox cannot relate to itself.', 'Remove this relationship.');
      } else if (!catalog.allParadoxes.some((x) => x.slug === rel.to)) {
        const guess = suggest(rel.to, catalog.allParadoxes.map((x) => x.slug));
        report(
          ERROR,
          'paradox',
          id,
          `relationships[${i}].to`,
          `Broken relationship: no paradox with slug "${rel.to}".`,
          guess ? `Did you mean "${guess}"?` : 'Create that entry first, or remove the relationship.'
        );
      } else if (published) {
        const target = catalog.allParadoxes.find((x) => x.slug === rel.to);
        if (target.publishing.state !== 'published') {
          report(
            ERROR,
            'paradox',
            id,
            `relationships[${i}].to`,
            `Links to "${rel.to}", which is still a ${target.publishing.state}.`,
            `Publish "${rel.to}" as well, or remove the link — published pages must not link to unpublished ones.`
          );
        }
      }
      const key = `${rel.kind}:${rel.to}`;
      if (seenEdge.has(key)) {
        report(WARNING, 'paradox', id, `relationships[${i}]`, `Duplicate relationship "${key}".`, 'Remove the repeat.');
      }
      seenEdge.add(key);
    });

    if (published && p.relationships.length === 0 && (p.allRelationships?.length ?? 0) === 0) {
      report(
        WARNING,
        'paradox',
        id,
        'relationships',
        'No relationships. This entry is an island in the knowledge map.',
        'Link it to at least one neighbour — related, influenced-by, or contrasts-with.'
      );
    }

    // references
    p.references.forEach((ref, i) => {
      if (!catalog.sourceById.has(ref.source)) {
        const guess = suggest(ref.source, [...catalog.sourceById.keys()]);
        report(
          gate,
          'paradox',
          id,
          `references[${i}].source`,
          `Unknown source "${ref.source}".`,
          guess ? `Did you mean "${guess}"?` : `Create content/sources/${ref.source}.yml.`
        );
      }
      if (ref.role) checkTerm(report, tx, 'paradox', id, `references[${i}].role`, 'sourceTypes', ref.role);
    });

    p.furtherReading.forEach((link, i) => {
      if (!URL_OK.test(link.url)) {
        report(ERROR, 'paradox', id, `furtherReading[${i}].url`, `"${link.url}" is not a usable http(s) URL.`, 'Use a full absolute URL.');
      }
    });

    if (published && p.references.length === 0) {
      report(
        ERROR,
        'paradox',
        id,
        'references',
        'Published with no references.',
        'Cite at least one source. References are not optional on this site — add a primary source or an encyclopedia entry.'
      );
    }
    if (published && !p.references.some((r) => r.role === 'primary-source')) {
      report(
        WARNING,
        'paradox',
        id,
        'references',
        'No primary source cited.',
        'Where the original formulation is known, cite it with role: primary-source.'
      );
    }

    // content layers
    for (const layer of REQUIRED_LAYERS) {
      const text = (p.sections[layer.id] ?? '').trim();
      if (!text) {
        report(
          gate,
          'paradox',
          id,
          `## ${layer.heading}`,
          `Missing the "${layer.label}" section.`,
          layer.hint
        );
      } else if (text.length < 120) {
        report(
          WARNING,
          'paradox',
          id,
          `## ${layer.heading}`,
          `"${layer.label}" is only ${text.length} characters — too thin to be useful.`,
          layer.hint
        );
      }
    }

    const wantsDeepDive = p.difficulty === 'advanced' || p.difficulty === 'expert';
    if (wantsDeepDive && !(p.sections['deep-dive'] ?? '').trim()) {
      report(
        gate,
        'paradox',
        id,
        '## Deep Dive',
        `Difficulty is "${p.difficulty}" but there is no Deep Dive section.`,
        'An advanced reader arriving here has nowhere to go. Add the technical treatment, or lower the difficulty.'
      );
    }

    if (p.difficulty === 'beginner' && (p.sections.discover ?? '').length > 1400) {
      report(
        INFO,
        'paradox',
        id,
        '## Discover',
        'The Discover section is long for a beginner entry.',
        'Discover should be the hook. Move detail down into Understand.'
      );
    }

    for (const heading of p.unknownHeadings) {
      const guess = suggest(heading, LAYERS.map((l) => l.heading));
      report(
        ERROR,
        'paradox',
        id,
        `## ${heading}`,
        `"## ${heading}" is not a recognised section, so its content will not appear on the site.`,
        guess
          ? `Did you mean "## ${guess}"? Use ### for sub-headings inside a section.`
          : `Recognised sections: ${LAYERS.map((l) => `## ${l.heading}`).join(', ')}. Use ### for sub-headings.`
      );
    }

    // interactive island
    if (p.interactive && !INTERACTIVE_IDS.includes(p.interactive)) {
      report(
        ERROR,
        'paradox',
        id,
        'interactive',
        `No interactive component named "${p.interactive}".`,
        `Available: ${INTERACTIVE_IDS.join(', ') || '(none registered)'}.`
      );
    }

    // publishing metadata
    if (p.publishing.updated < p.publishing.created) {
      report(ERROR, 'paradox', id, 'publishing.updated', 'updated is earlier than created.', 'Correct the dates.');
    }

    // nature honesty check — the point of the site
    if (p.status === 'open' && p.nature !== 'open-problem' && p.nature !== 'thought-experiment') {
      report(
        INFO,
        'paradox',
        id,
        'nature',
        `status is "open" but nature is "${p.nature}".`,
        'If experts genuinely disagree, nature is usually open-problem. Confirm this is deliberate.'
      );
    }
  }

  // --- People --------------------------------------------------------------
  for (const person of catalog.people) {
    if (person.born != null && person.died != null && person.died < person.born) {
      report(ERROR, 'person', person.id, 'died', 'died is before born.', 'Correct the dates.');
    }
    if (person.paradoxes.length === 0) {
      report(INFO, 'person', person.id, '(usage)', 'Not referenced by any paradox.', 'Remove the file, or link it from the relevant entries.');
    }
    if (person.url && !URL_OK.test(person.url)) {
      report(ERROR, 'person', person.id, 'url', `"${person.url}" is not a usable URL.`, 'Use a full absolute URL.');
    }
  }

  // --- Sources -------------------------------------------------------------
  for (const source of catalog.sources) {
    checkTerm(report, tx, 'source', source.id, 'type', 'sourceTypes', source.type);
    if (source.url && !URL_OK.test(source.url)) {
      report(ERROR, 'source', source.id, 'url', `"${source.url}" is not a usable URL.`, 'Use a full absolute URL.');
    }
    if (source.type === 'paper' && !source.doi && !source.url) {
      report(WARNING, 'source', source.id, 'doi', 'A paper with neither a DOI nor a URL is hard to find.', 'Add a DOI where one exists.');
    }
    if (source.type === 'book' && !source.publisher) {
      report(INFO, 'source', source.id, 'publisher', 'No publisher recorded.', 'Add the publisher so the citation is complete.');
    }
    if (source.authors.length === 0 && source.type !== 'encyclopedia') {
      report(WARNING, 'source', source.id, 'authors', 'No authors recorded.', 'Add at least one author, or "Various".');
    }
    if (source.citedBy.length === 0) {
      report(INFO, 'source', source.id, '(usage)', 'Not cited by any paradox.', 'Cite it, or delete the file to keep the bibliography honest.');
    }
    if (source.doi && !/^10\.\d{4,9}\/\S+$/.test(source.doi)) {
      report(WARNING, 'source', source.id, 'doi', `"${source.doi}" does not look like a DOI.`, 'A DOI looks like 10.1234/abcd. Do not include the https://doi.org/ prefix.');
    }
  }

  // --- Learning paths ------------------------------------------------------
  for (const lp of catalog.paths) {
    checkTerm(report, tx, 'path', lp.id, 'difficulty', 'difficulties', lp.difficulty);
    lp.domains.forEach((d, i) => checkTerm(report, tx, 'path', lp.id, `domains[${i}]`, 'domains', d));
    const seen = new Set();
    lp.steps.forEach((step, i) => {
      const target = catalog.allParadoxes.find((p) => p.slug === step.paradox);
      if (!target) {
        const guess = suggest(step.paradox, catalog.allParadoxes.map((p) => p.slug));
        report(
          ERROR,
          'path',
          lp.id,
          `steps[${i}].paradox`,
          `Step ${i + 1} points at "${step.paradox}", which does not exist.`,
          guess ? `Did you mean "${guess}"?` : 'Create that paradox, or remove the step.'
        );
      } else if (target.publishing.state !== 'published') {
        report(
          ERROR,
          'path',
          lp.id,
          `steps[${i}].paradox`,
          `Step ${i + 1} points at "${step.paradox}", which is a ${target.publishing.state}.`,
          'A published path cannot contain unpublished steps. Publish it or remove the step.'
        );
      }
      if (seen.has(step.paradox)) {
        report(WARNING, 'path', lp.id, `steps[${i}]`, `"${step.paradox}" appears twice in this path.`, 'Remove the repeat.');
      }
      seen.add(step.paradox);
    });
  }

  // --- Taxonomy hygiene ----------------------------------------------------
  const usedDomains = new Set(catalog.paradoxes.flatMap((p) => p.domains));
  const usedTypes = new Set(catalog.paradoxes.flatMap((p) => p.types));
  for (const d of tx.domains) {
    if (!usedDomains.has(d.id)) {
      report(WARNING, 'taxonomy', d.id, 'domains', `Domain "${d.label}" has no published paradoxes.`, 'Its browse page will be empty. Add content or remove the domain.');
    }
  }
  for (const t of tx.types) {
    if (!usedTypes.has(t.id)) {
      report(INFO, 'taxonomy', t.id, 'types', `Type "${t.label}" is unused.`, 'Not a problem yet, but it points at a coverage gap.');
    }
  }
  for (const kind of ['relationshipKinds']) {
    for (const term of tx[kind]) {
      const inv = tx.inverseOf(term.id);
      if (!inv || !tx.has('relationshipKinds', inv)) {
        report(ERROR, 'taxonomy', term.id, 'inverse', `Relationship kind "${term.id}" has no valid inverse.`, 'Every relationship kind needs an inverse so back-links can be derived.');
      }
    }
  }

  const byEntry = new Map();
  for (const f of findings) {
    const key = `${f.entity}:${f.id}`;
    if (!byEntry.has(key)) byEntry.set(key, []);
    byEntry.get(key).push(f);
  }

  const errors = findings.filter((f) => f.severity === ERROR);
  const warnings = findings.filter((f) => f.severity === WARNING);
  const infos = findings.filter((f) => f.severity === INFO);

  return { findings, errors, warnings, infos, ok: errors.length === 0, byEntry };
}

/** Validation findings for one paradox, for the admin editor. */
export function validateParadox(catalog, slug) {
  const result = validateCatalog(catalog);
  return result.findings.filter((f) => f.entity === 'paradox' && f.id === slug);
}
