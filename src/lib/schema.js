import { z } from 'zod';

// Shape and type validation only.
// Taxonomy membership, cross-references and content-quality rules live in
// validate.js, where they can produce actionable, suggestion-bearing messages.

const slug = z
  .string()
  .min(2)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'must be lowercase words joined by hyphens');

const trimmed = z.string().trim().min(1);

// YAML is helpful in ways we do not want: it turns `1946` into a number and
// `2026-08-29` into a Date. Both are legitimate things for an author to write,
// so the schema normalises them rather than making the author quote everything.
const looseText = z.preprocess(
  (v) => (typeof v === 'number' ? String(v) : v instanceof Date ? v.toISOString().slice(0, 10) : v),
  trimmed
);

const isoDate = z.preprocess(
  (v) => (v instanceof Date ? v.toISOString().slice(0, 10) : v),
  z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'use YYYY-MM-DD')
);

export const PUBLISH_STATES = ['draft', 'review', 'published'];

const relationship = z.object({
  kind: trimmed,
  to: slug,
  note: z.string().trim().optional(),
});

const referenceLink = z.object({
  source: slug,
  role: trimmed.optional(),
  note: z.string().trim().optional(),
  locator: z.string().trim().optional(),
});

const externalLink = z.object({
  title: trimmed,
  url: z.string().url(),
  note: z.string().trim().optional(),
});

export const paradoxSchema = z.object({
  // identity
  title: trimmed,
  slug: slug,
  alternateNames: z.array(trimmed).default([]),
  summary: trimmed
    .min(40, 'summary is too short to be useful in listings and search results')
    .max(320, 'summary should fit in a card — move detail into Discover'),

  // The unresolved question the entry opens with. This is what a reader meets
  // on a card, so it has to state the gap without closing it.
  hook: trimmed
    .min(15, 'a hook needs to actually pose something')
    .max(150, 'a hook has to fit on two lines of a card')
    .optional(),

  // history
  era: trimmed,
  date: looseText,
  // Signed year used for sorting and the timeline. Negative = BCE.
  year: z.number().int().min(-3000).max(2200),
  origin: z.string().trim().optional(),
  people: z.array(slug).default([]),

  // classification
  domains: z.array(trimmed).min(1, 'every paradox needs at least one domain'),
  types: z.array(trimmed).min(1, 'every paradox needs at least one type'),
  nature: trimmed,
  difficulty: trimmed,
  status: trimmed,

  // Whether this entry is a paradox, law, effect, principle, theorem, or puzzle.
  kind: z.enum(['paradox', 'law', 'effect', 'principle', 'theorem', 'puzzle']).default('paradox'),

  // How likely a reader is to have heard of this already. Decides what leads a
  // listing. Defaults to the middle tier, so omitting it never promotes an
  // entry it should not.
  renown: trimmed.default('known'),

  // connections
  relationships: z.array(relationship).default([]),
  concepts: z.array(trimmed).default([]),

  // references
  references: z.array(referenceLink).default([]),
  furtherReading: z.array(externalLink).default([]),

  // an optional interactive island, by component id
  interactive: z.string().trim().optional(),

  // publishing
  publishing: z
    .object({
      state: z.enum(PUBLISH_STATES),
      created: isoDate,
      updated: isoDate,
      notes: z.string().trim().optional(),
    })
    .strict(),
});

export const personSchema = z.object({
  id: slug,
  name: trimmed,
  born: z.number().int().optional(),
  died: z.number().int().optional(),
  tradition: z.string().trim().optional(),
  bio: trimmed.min(20, 'give at least one full sentence'),
  url: z.string().url().optional(),
});

export const sourceSchema = z.object({
  id: slug,
  type: trimmed,
  title: trimmed,
  authors: z.array(trimmed).default([]),
  year: looseText.optional(),
  publisher: z.string().trim().optional(),
  journal: z.string().trim().optional(),
  volume: z.string().trim().optional(),
  pages: z.string().trim().optional(),
  doi: z.string().trim().optional(),
  isbn: z.string().trim().optional(),
  url: z.string().url().optional(),
  notes: z.string().trim().optional(),
});

export const learningPathSchema = z.object({
  id: slug,
  title: trimmed,
  summary: trimmed.min(30),
  difficulty: trimmed,
  domains: z.array(trimmed).default([]),
  steps: z
    .array(
      z.object({
        paradox: slug,
        why: trimmed.min(15, 'explain why this step follows the previous one'),
      })
    )
    .min(2, 'a path needs at least two steps'),
  order: z.number().int().default(100),
});

/**
 * Flatten a Zod error into `{ path, message }` pairs.
 * @param {import('zod').ZodError} err
 */
export function zodIssues(err) {
  return err.issues.map((i) => ({
    field: i.path.join('.') || '(root)',
    message: i.message,
  }));
}
