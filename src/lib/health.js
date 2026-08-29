import { validateCatalog } from './validate.js';
import { LAYERS, REQUIRED_LAYERS } from './sections.js';
import { orphans } from './graph.js';

// Content health and coverage. Answers two questions:
//   1. What is broken or unfinished right now?
//   2. Where is the collection thin?
// Nothing here is a business metric.

/** Turn a raw count into a coverage label. Thresholds are tuned for a ~100-entry target. */
export function strengthOf(count) {
  if (count === 0) return { label: 'None', rank: 0 };
  if (count <= 2) return { label: 'Emerging', rank: 1 };
  if (count <= 5) return { label: 'Weak', rank: 2 };
  if (count <= 10) return { label: 'Moderate', rank: 3 };
  return { label: 'Strong', rank: 4 };
}

function countBy(items, pick) {
  const counts = new Map();
  for (const item of items) {
    for (const key of [].concat(pick(item) ?? [])) {
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }
  return counts;
}

/**
 * @param {ReturnType<import('./catalog.js').loadCatalog>} catalog
 */
export function contentHealth(catalog) {
  const tx = catalog.taxonomy;
  const all = catalog.allParadoxes;
  const published = all.filter((p) => p.publishing.state === 'published');
  const validation = validateCatalog(catalog);

  const byState = {
    published: published.length,
    review: all.filter((p) => p.publishing.state === 'review').length,
    draft: all.filter((p) => p.publishing.state === 'draft').length,
  };

  // --- Coverage by each axis ----------------------------------------------
  const axis = (terms, pick) =>
    terms.map((term) => {
      const count = published.filter((p) => [].concat(pick(p) ?? []).includes(term.id)).length;
      return { ...term, count, strength: strengthOf(count) };
    });

  const coverage = {
    domains: axis(tx.domains, (p) => p.domains),
    types: axis(tx.types, (p) => p.types),
    eras: axis(tx.eras, (p) => p.era),
    difficulties: axis(tx.difficulties, (p) => p.difficulty),
    natures: axis(tx.natures, (p) => p.nature),
    statuses: axis(tx.statuses, (p) => p.status),
  };

  // --- Domain x era matrix: where the real holes hide ----------------------
  const matrix = tx.domains.map((domain) => ({
    domain,
    cells: tx.eras.map((era) => ({
      era,
      count: published.filter((p) => p.domains.includes(domain.id) && p.era === era.id).length,
    })),
    total: published.filter((p) => p.domains.includes(domain.id)).length,
  }));

  // --- Per-entry completeness ---------------------------------------------
  const entries = all.map((p) => {
    const present = LAYERS.filter((l) => (p.sections[l.id] ?? '').trim());
    const missingRequired = REQUIRED_LAYERS.filter((l) => !(p.sections[l.id] ?? '').trim());
    const findings = validation.byEntry.get(`paradox:${p.slug}`) ?? [];
    const wantsDeepDive = p.difficulty === 'advanced' || p.difficulty === 'expert';

    // Completeness is a checklist, not a vibe.
    const checks = [
      { id: 'required-sections', ok: missingRequired.length === 0, label: 'All required sections' },
      { id: 'references', ok: p.references.length > 0, label: 'Has references' },
      { id: 'primary-source', ok: p.references.some((r) => r.role === 'primary-source'), label: 'Cites a primary source' },
      { id: 'relationships', ok: (p.allRelationships ?? []).length > 0, label: 'Connected to other entries' },
      { id: 'people', ok: p.people.length > 0, label: 'Attributed to people' },
      { id: 'examples', ok: Boolean((p.sections.examples ?? '').trim()), label: 'Has worked examples' },
      { id: 'modern', ok: Boolean((p.sections['modern-relevance'] ?? '').trim()), label: 'Has modern relevance' },
      { id: 'deep-dive', ok: !wantsDeepDive || Boolean((p.sections['deep-dive'] ?? '').trim()), label: 'Depth matches difficulty' },
    ];
    const score = Math.round((checks.filter((c) => c.ok).length / checks.length) * 100);

    return {
      slug: p.slug,
      title: p.title,
      state: p.publishing.state,
      difficulty: p.difficulty,
      domains: p.domains,
      updated: p.publishing.updated,
      words: Object.values(p.sections).join(' ').split(/\s+/).filter(Boolean).length,
      sections: { present: present.length, total: LAYERS.length },
      missingRequired: missingRequired.map((l) => l.label),
      checks,
      score,
      errors: findings.filter((f) => f.severity === 'error').length,
      warnings: findings.filter((f) => f.severity === 'warning').length,
    };
  });

  // --- Attention list: what to work on next, ordered -----------------------
  const attention = [...entries]
    .filter((e) => e.errors > 0 || e.warnings > 0 || e.score < 100)
    .sort((a, b) => b.errors - a.errors || b.warnings - a.warnings || a.score - b.score)
    .slice(0, 40);

  const unusedSources = catalog.sources.filter((s) => s.citedBy.length === 0);
  const unusedPeople = catalog.people.filter((p) => p.paradoxes.length === 0);

  const gaps = [];
  for (const d of coverage.domains) {
    if (d.strength.rank <= 2) {
      gaps.push({
        axis: 'domain',
        id: d.id,
        label: d.label,
        count: d.count,
        strength: d.strength.label,
        suggestion: `${d.label} has ${d.count} published ${d.count === 1 ? 'entry' : 'entries'}. Research candidates before adding elsewhere.`,
      });
    }
  }
  for (const e of coverage.eras) {
    if (e.strength.rank <= 2) {
      gaps.push({
        axis: 'era',
        id: e.id,
        label: e.label,
        count: e.count,
        strength: e.strength.label,
        suggestion: `Only ${e.count} entries from the ${e.label} period.`,
      });
    }
  }
  for (const n of coverage.natures) {
    if (n.count === 0) {
      gaps.push({
        axis: 'nature',
        id: n.id,
        label: n.label,
        count: 0,
        strength: 'None',
        suggestion: `Nothing classified as "${n.label}". The distinction is a core promise of this site.`,
      });
    }
  }

  return {
    totals: {
      paradoxes: all.length,
      ...byState,
      people: catalog.people.length,
      sources: catalog.sources.length,
      paths: catalog.paths.length,
      words: entries.reduce((n, e) => n + e.words, 0),
    },
    validation: {
      ok: validation.ok,
      errors: validation.errors.length,
      warnings: validation.warnings.length,
      infos: validation.infos.length,
      findings: validation.findings,
    },
    coverage,
    matrix,
    entries,
    attention,
    gaps: gaps.sort((a, b) => a.count - b.count),
    orphans: orphans(catalog).map((p) => ({ slug: p.slug, title: p.title })),
    unusedSources: unusedSources.map((s) => ({ id: s.id, title: s.title })),
    unusedPeople: unusedPeople.map((p) => ({ id: p.id, name: p.name })),
    averageScore: entries.length
      ? Math.round(entries.reduce((n, e) => n + e.score, 0) / entries.length)
      : 0,
  };
}
