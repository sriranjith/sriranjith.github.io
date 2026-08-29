// The layered-depth model.
//
// A paradox body is plain Markdown split by `## ` headings. Each heading maps
// to one canonical layer. This keeps authoring in ordinary Markdown that renders
// correctly in any editor or on GitHub, while still being strictly validatable.

/**
 * @typedef {object} LayerDef
 * @property {string} id
 * @property {string} heading   Canonical `## ` heading in the Markdown body.
 * @property {string} label     Shown to readers.
 * @property {string} depth     Which reading depth this belongs to.
 * @property {boolean} required Must exist on every published paradox.
 * @property {boolean} openByDefault
 * @property {string} hint      Shown to authors in the admin editor.
 */

/** Reading depths, in order. Drives the on-page depth rail. */
export const DEPTHS = [
  {
    id: 'discover',
    label: 'Discover',
    tagline: 'The hook',
    description: 'A short story or puzzle. No background needed.',
  },
  {
    id: 'understand',
    label: 'Understand',
    tagline: 'The explanation',
    description: 'What is actually going on, in everyday language.',
  },
  {
    id: 'explore',
    label: 'Explore',
    tagline: 'The context',
    description: 'Where it came from, why it matters, where it still shows up.',
  },
  {
    id: 'deep-dive',
    label: 'Deep Dive',
    tagline: 'The technical account',
    description: 'The formal, mathematical or philosophical treatment.',
  },
  {
    id: 'research',
    label: 'Research',
    tagline: 'The sources',
    description: 'Primary texts, books, papers and where to go next.',
  },
];

/** @type {LayerDef[]} */
export const LAYERS = [
  {
    id: 'discover',
    heading: 'Discover',
    label: 'Discover',
    depth: 'discover',
    required: true,
    openByDefault: true,
    hint: 'A story, image or puzzle an eight-year-old can follow. No jargon, no formulas. End on the surprise, not the answer.',
  },
  {
    id: 'understand',
    heading: 'Understand',
    label: 'Understand',
    depth: 'understand',
    required: true,
    openByDefault: true,
    hint: 'Plain-language explanation of what is really happening. Accurate, but no notation. This is where most readers stop.',
  },
  {
    id: 'examples',
    heading: 'Examples',
    label: 'Examples',
    depth: 'understand',
    required: false,
    openByDefault: true,
    hint: 'Concrete worked cases or everyday analogies. Optional, but the single biggest comprehension win.',
  },
  {
    id: 'explore',
    heading: 'Explore',
    label: 'Explore',
    depth: 'explore',
    required: true,
    openByDefault: false,
    hint: 'Competing interpretations, implications, and the shape of the disagreement. Name who holds which view.',
  },
  {
    id: 'history',
    heading: 'History',
    label: 'Historical context',
    depth: 'explore',
    required: true,
    openByDefault: false,
    hint: 'Origin, the people involved, and how the idea travelled. Say what is documented and what is legend.',
  },
  {
    id: 'why-it-matters',
    heading: 'Why It Matters',
    label: 'Why it matters',
    depth: 'explore',
    required: true,
    openByDefault: false,
    hint: 'What changed because of this. Be specific about consequences, not vague about importance.',
  },
  {
    id: 'modern-relevance',
    heading: 'Modern Relevance',
    label: 'Modern relevance',
    depth: 'explore',
    required: false,
    openByDefault: false,
    hint: 'Where this shows up today. Only include if there is a real, non-strained connection.',
  },
  {
    id: 'deep-dive',
    heading: 'Deep Dive',
    label: 'Deep dive',
    depth: 'deep-dive',
    required: false,
    openByDefault: false,
    hint: 'The technical treatment: proof sketch, formalism, or the precise statement. Required for advanced and expert entries.',
  },
];

export const LAYERS_BY_ID = new Map(LAYERS.map((l) => [l.id, l]));
export const REQUIRED_LAYERS = LAYERS.filter((l) => l.required);

const headingToId = new Map(LAYERS.map((l) => [l.heading.toLowerCase(), l.id]));

/**
 * Split a Markdown body into its layer sections.
 * Unrecognised `## ` headings are collected so validation can flag typos
 * instead of silently dropping an author's work.
 *
 * @param {string} body
 * @returns {{ sections: Record<string,string>, unknownHeadings: string[], preamble: string }}
 */
export function parseSections(body) {
  /** @type {Record<string,string>} */
  const sections = {};
  const unknownHeadings = [];
  const lines = (body ?? '').split(/\r?\n/);

  let current = null;
  let preamble = [];
  /** @type {string[]} */
  let buffer = [];
  let inFence = false;

  const flush = () => {
    if (current) sections[current] = buffer.join('\n').trim();
    else preamble = buffer.slice();
    buffer = [];
  };

  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;

    const match = !inFence && /^##\s+(.+?)\s*$/.exec(line);
    if (match) {
      flush();
      const key = match[1].toLowerCase();
      const id = headingToId.get(key);
      if (id) {
        current = id;
      } else {
        current = null;
        unknownHeadings.push(match[1]);
      }
      continue;
    }
    buffer.push(line);
  }
  flush();

  return { sections, unknownHeadings, preamble: preamble.join('\n').trim() };
}

/**
 * Rebuild a Markdown body from a section map, in canonical layer order.
 * Used by the admin editor so a round-trip through the form never reorders
 * or loses content.
 * @param {Record<string,string>} sections
 */
export function serialiseSections(sections) {
  return (
    LAYERS.filter((l) => (sections[l.id] ?? '').trim())
      .map((l) => `## ${l.heading}\n\n${sections[l.id].trim()}\n`)
      .join('\n') + ''
  );
}

/** Rough reading time for a section map. */
export function readingMinutes(sections) {
  const words = Object.values(sections ?? {}).join(' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
