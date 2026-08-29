import { publicCatalog } from './catalog.js';
import { AXES } from './site.js';

/**
 * Build the static paths for one classification axis.
 * Used by the six thin route files under src/pages/. A new taxonomy term
 * automatically gets a page; no route file changes.
 * @param {string} axisKey
 */
export function termPaths(axisKey) {
  const axis = AXES.find((a) => a.key === axisKey);
  if (!axis) throw new Error(`Unknown axis "${axisKey}"`);

  const catalog = publicCatalog();
  const terms = catalog.taxonomy[axis.kind];

  const withCounts = terms.map((term) => ({
    ...term,
    count: catalog.paradoxes.filter((p) =>
      axis.multi ? p[axis.field].includes(term.id) : p[axis.field] === term.id
    ).length,
  }));

  return withCounts
    // Do not publish empty classification pages — they are low-value for search
    // engines and readers alike. They reappear the moment content exists.
    .filter((term) => term.count > 0)
    .map((term) => ({
      params: { id: term.id },
      props: {
        term,
        axis,
        siblings: withCounts.filter((t) => t.count > 0),
        paradoxes: catalog.paradoxes
          .filter((p) => (axis.multi ? p[axis.field].includes(term.id) : p[axis.field] === term.id))
          .sort((a, b) => a.year - b.year),
      },
    }));
}
