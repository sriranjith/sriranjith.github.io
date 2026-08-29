// Site-wide configuration. Change the URL here before the first deploy.
export const SITE = {
  name: 'Paradox',
  tagline: 'Ideas that argue with your intuition',
  description:
    'A curated, carefully sourced collection of the paradoxes that shaped how we think — explained for every age, from a first story to the original papers.',
  // Must be a ROOT domain, not a subpath. Every internal link on this site is
  // root-absolute (`/browse/`), which is what keeps the codebase free of
  // base-path plumbing — see docs/DEPLOYMENT.md.
  url: 'https://sriranjith.github.io',
  locale: 'en',
  // Set to null to ship no analytics at all. See docs/DEPLOYMENT.md.
  analytics: null,
};

export const NAV = [
  { href: '/browse/', label: 'Browse' },
  { href: '/timeline/', label: 'Timeline' },
  { href: '/paths/', label: 'Learning paths' },
  { href: '/map/', label: 'Map' },
  { href: '/about/', label: 'About' },
];

/** Canonical URL builders. Every internal link goes through these. */
export const url = {
  paradox: (slug) => `/paradox/${slug}/`,
  domain: (id) => `/domain/${id}/`,
  type: (id) => `/type/${id}/`,
  era: (id) => `/era/${id}/`,
  difficulty: (id) => `/difficulty/${id}/`,
  nature: (id) => `/nature/${id}/`,
  status: (id) => `/status/${id}/`,
  person: (id) => `/person/${id}/`,
  path: (id) => `/path/${id}/`,
  sources: () => '/sources/',
  browse: () => '/browse/',
  search: () => '/search/',
};

/** The five browsable classification axes, used to generate pages and filters. */
export const AXES = [
  { key: 'domains', kind: 'domains', field: 'domains', label: 'Domain', plural: 'Domains', build: url.domain, multi: true },
  { key: 'types', kind: 'types', field: 'types', label: 'Type', plural: 'Types', build: url.type, multi: true },
  { key: 'eras', kind: 'eras', field: 'era', label: 'Era', plural: 'Eras', build: url.era, multi: false },
  { key: 'difficulties', kind: 'difficulties', field: 'difficulty', label: 'Difficulty', plural: 'Difficulty', build: url.difficulty, multi: false },
  { key: 'natures', kind: 'natures', field: 'nature', label: 'Nature', plural: 'Nature', build: url.nature, multi: false },
  { key: 'statuses', kind: 'statuses', field: 'status', label: 'Status', plural: 'Status', build: url.status, multi: false },
];
