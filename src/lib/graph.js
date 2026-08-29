// Relationships and recommendations.
//
// Deliberately deterministic and explainable: every suggestion can be traced to
// a rule below. No embeddings, no model, nothing to retrain. If a reader asks
// "why am I being shown this?", the answer is a sentence we can print.

const WEIGHT = {
  explicitRelationship: 12,
  sharedPath: 8,
  sharedType: 4,
  sharedDomain: 3,
  sharedPerson: 5,
  sharedConcept: 3,
  sameEra: 1,
  sameNature: 1,
};

function overlap(a = [], b = []) {
  const set = new Set(b);
  return a.filter((x) => set.has(x));
}

/**
 * Ranked neighbours of a paradox, with a human-readable reason for each.
 * @param {ReturnType<import('./catalog.js').loadCatalog>} catalog
 * @param {object} paradox
 * @param {number} limit
 */
export function relatedParadoxes(catalog, paradox, limit = 6) {
  const tx = catalog.taxonomy;
  const scores = new Map();

  const bump = (slug, points, reason) => {
    if (slug === paradox.slug) return;
    if (!catalog.bySlug.has(slug)) return;
    const entry = scores.get(slug) ?? { slug, score: 0, reasons: [] };
    entry.score += points;
    if (reason) entry.reasons.push(reason);
    scores.set(slug, entry);
  };

  for (const rel of paradox.allRelationships ?? []) {
    bump(rel.to, WEIGHT.explicitRelationship, tx.label('relationshipKinds', rel.kind));
  }

  for (const { path: lp, index } of paradox.paths ?? []) {
    for (const [i, step] of lp.steps.entries()) {
      if (i === index) continue;
      bump(step.paradox, Math.max(2, WEIGHT.sharedPath - Math.abs(i - index)), `Also in “${lp.title}”`);
    }
  }

  for (const other of catalog.paradoxes) {
    if (other.slug === paradox.slug) continue;

    const types = overlap(paradox.types, other.types);
    if (types.length) {
      bump(other.slug, WEIGHT.sharedType * types.length, `Also about ${types.map((t) => tx.label('types', t).toLowerCase()).join(' and ')}`);
    }

    const domains = overlap(paradox.domains, other.domains);
    if (domains.length) bump(other.slug, WEIGHT.sharedDomain * domains.length, null);

    const people = overlap(paradox.people, other.people);
    if (people.length) {
      const name = catalog.personById.get(people[0])?.name ?? people[0];
      bump(other.slug, WEIGHT.sharedPerson * people.length, `Also involves ${name}`);
    }

    const concepts = overlap(
      paradox.concepts.map((c) => c.toLowerCase()),
      other.concepts.map((c) => c.toLowerCase())
    );
    if (concepts.length) bump(other.slug, WEIGHT.sharedConcept * concepts.length, `Shares the idea of ${concepts[0]}`);

    if (other.era === paradox.era) bump(other.slug, WEIGHT.sameEra, null);
    if (other.nature === paradox.nature) bump(other.slug, WEIGHT.sameNature, null);
  }

  return [...scores.values()]
    .sort((a, b) => b.score - a.score || a.slug.localeCompare(b.slug))
    .slice(0, limit)
    .map((entry) => ({
      paradox: catalog.bySlug.get(entry.slug),
      score: entry.score,
      // De-duplicate reasons, keep the strongest two.
      reason: [...new Set(entry.reasons)].slice(0, 2).join(' · ') || 'Nearby in the same field',
    }));
}

/**
 * Ranked picks for a set of interests, used by the interest-based discovery page.
 * @param {ReturnType<import('./catalog.js').loadCatalog>} catalog
 * @param {{domains?: string[], types?: string[], difficulty?: string}} interests
 */
export function recommendFor(catalog, interests, limit = 12) {
  const wantDomains = new Set(interests.domains ?? []);
  const wantTypes = new Set(interests.types ?? []);

  return catalog.paradoxes
    .map((p) => {
      let score = 0;
      score += p.domains.filter((d) => wantDomains.has(d)).length * 5;
      score += p.types.filter((t) => wantTypes.has(t)).length * 3;
      if (interests.difficulty && p.difficulty === interests.difficulty) score += 4;
      return { paradox: p, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.paradox.title.localeCompare(b.paradox.title))
    .slice(0, limit);
}

/**
 * Nodes and edges for the knowledge map. Emitted as plain data so a future
 * visual map needs no change to the content model.
 */
export function knowledgeGraph(catalog) {
  const nodes = catalog.paradoxes.map((p) => ({
    id: p.slug,
    title: p.title,
    domain: p.domains[0],
    domains: p.domains,
    era: p.era,
    year: p.year,
    difficulty: p.difficulty,
    degree: (p.allRelationships ?? []).length,
  }));

  const seen = new Set();
  const edges = [];
  for (const p of catalog.paradoxes) {
    for (const rel of p.relationships) {
      if (!catalog.bySlug.has(rel.to)) continue;
      const key = [p.slug, rel.to].sort().join('|') + '|' + rel.kind;
      if (seen.has(key)) continue;
      seen.add(key);
      edges.push({ from: p.slug, to: rel.to, kind: rel.kind });
    }
  }
  return { nodes, edges };
}

/** Paradoxes with no connection to anything — the map's loose ends. */
export function orphans(catalog) {
  return catalog.paradoxes.filter((p) => (p.allRelationships ?? []).length === 0);
}

/**
 * Listing order: recognisable first, then approachable.
 *
 * The second key matters more than it looks. Sorting famous entries
 * alphabetically puts Gödel — expert, twenty-five minutes — in the first slot
 * on the homepage, which is an excellent entry and a terrible front door.
 */
export function byRenown(a, b) {
  return (
    a.renownRank - b.renownRank ||
    a.difficultyRank - b.difficultyRank ||
    a.title.localeCompare(b.title)
  );
}

/**
 * What to lead a page with. Most recognisable first, but capped per field so
 * the opening row is not six physics problems. A visitor who recognises nothing
 * leaves; a visitor who sees one subject assumes that is all there is.
 *
 * @param {object[]} paradoxes
 * @param {number} limit
 * @param {number} perDomain Most entries allowed to share a primary field.
 */
export function headline(paradoxes, limit = 6, perDomain = 2) {
  const sorted = [...paradoxes].sort(byRenown);
  const used = new Map();
  const picked = [];

  for (const p of sorted) {
    if (picked.length >= limit) break;
    const domain = p.domains[0];
    const count = used.get(domain) ?? 0;
    if (count >= perDomain) continue;
    used.set(domain, count + 1);
    picked.push(p);
  }

  // If the per-field cap starved the list, top up in plain renown order.
  const chosen = new Set(picked.map((p) => p.slug));
  for (const p of sorted) {
    if (picked.length >= limit) break;
    if (!chosen.has(p.slug)) picked.push(p);
  }
  return picked;
}

/**
 * A stable "random" pick that changes per build rather than per request,
 * so the page can stay fully static.
 */
export function shuffleStable(items, seed = 1) {
  const arr = [...items];
  let s = seed;
  const rand = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
