import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { TAXONOMY_DIR } from './paths.js';

// Every controlled vocabulary lives in content/taxonomy/*.yml.
// Adding a term is a content edit. Nothing here needs changing.

const FILES = {
  domains: 'domains.yml',
  types: 'types.yml',
  natures: 'natures.yml',
  difficulties: 'difficulties.yml',
  statuses: 'statuses.yml',
  eras: 'eras.yml',
  relationshipKinds: 'relationship-kinds.yml',
  sourceTypes: 'source-types.yml',
};

function readList(file) {
  const full = path.join(TAXONOMY_DIR, file);
  const raw = YAML.parse(fs.readFileSync(full, 'utf8')) ?? [];
  if (!Array.isArray(raw)) throw new Error(`${file} must contain a YAML list`);
  return raw
    .map((t, i) => ({ order: (i + 1) * 10, ...t }))
    .sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
}

function build() {
  /** @type {Record<string, any[]>} */
  const lists = {};
  for (const [key, file] of Object.entries(FILES)) lists[key] = readList(file);

  const index = {};
  for (const [key, list] of Object.entries(lists)) {
    index[key] = new Map(list.map((t) => [t.id, t]));
  }

  return {
    ...lists,
    /** Look up a single term. */
    get(kind, id) {
      return index[kind]?.get(id);
    },
    /** Label for a term, falling back to the raw id so pages never render blank. */
    label(kind, id) {
      return index[kind]?.get(id)?.label ?? id;
    },
    /** Map several ids to their full terms, dropping unknown ones. */
    many(kind, ids) {
      return (ids ?? []).map((id) => index[kind]?.get(id)).filter(Boolean);
    },
    has(kind, id) {
      return index[kind]?.has(id) ?? false;
    },
    ids(kind) {
      return lists[kind].map((t) => t.id);
    },
    /** The inverse of a relationship kind, used to derive back-links. */
    inverseOf(kindId) {
      return index.relationshipKinds.get(kindId)?.inverse ?? null;
    },
    /** Which era a year falls into. */
    eraForYear(year) {
      if (year == null) return null;
      return lists.eras.find((e) => year >= e.from && year < e.to) ?? null;
    },
  };
}

let cached = null;

/** @returns {ReturnType<typeof build>} */
export function loadTaxonomy({ fresh = false } = {}) {
  if (!cached || fresh) cached = build();
  return cached;
}

export const KINDS = Object.keys(FILES);
