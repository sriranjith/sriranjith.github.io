#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { PARADOX_DIR, ROOT } from '../src/lib/paths.js';
import { LAYERS } from '../src/lib/sections.js';
import { loadTaxonomy } from '../src/lib/taxonomy.js';

// Scaffolds a valid draft. `npm run new -- "Newcomb's Paradox"`
// The file it writes passes validation as a draft and tells you what to fill in.

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('\n  Usage: npm run new -- "The Name Of The Paradox"\n');
  process.exit(1);
}

const slug = title
  .normalize('NFKD')
  .replace(/[̀-ͯ]/g, '')
  .toLowerCase()
  .replace(/['’]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

const file = path.join(PARADOX_DIR, `${slug}.md`);
if (fs.existsSync(file)) {
  console.error(`\n  ${slug}.md already exists.\n`);
  process.exit(1);
}

const tx = loadTaxonomy();
const today = new Date().toISOString().slice(0, 10);
const year = new Date().getFullYear();

const list = (kind) => tx.ids(kind).join(' | ');

const body = LAYERS.map(
  (layer) =>
    `## ${layer.heading}\n\n<!-- ${layer.required ? 'REQUIRED. ' : 'Optional. '}${layer.hint} -->\n`
).join('\n');

const content = `---
title: ${title}
slug: ${slug}
alternateNames: []
# 40–320 characters. Appears in cards, search results and meta tags. Write it last.
summary: >-
  TODO — one or two sentences that make someone want to click.

# ${list('eras')}
era: contemporary
date: "${year}"
year: ${year}
origin: >-
  TODO — one or two sentences on where this came from.
# ids from content/people/
people: []

# ${list('domains')}
domains:
  - philosophy
# ${list('types')}
types:
  - knowledge
# ${list('natures')}  — think hardest about this one
nature: counterintuitive-result
# ${list('difficulties')}
difficulty: intermediate
# ${list('statuses')}
status: explained

concepts: []

# kinds: ${list('relationshipKinds')}
relationships: []
#  - kind: related
#    to: some-other-slug
#    note: Why they are connected — this note is the useful part.

# ids from content/sources/. At least one is required to publish.
references: []
#  - source: some-source-id
#    role: primary-source

furtherReading: []

publishing:
  state: draft
  created: ${today}
  updated: ${today}
---

${body}`;

fs.mkdirSync(PARADOX_DIR, { recursive: true });
fs.writeFileSync(file, content, 'utf8');

console.log(`
  Created ${path.relative(ROOT, file)}

  Next:
    npm run admin     edit it in a browser with live validation
    npm run dev       preview at http://localhost:4321/paradox/${slug}/
    npm run validate  check it from the terminal

  It is a draft, so it will not appear on the public site until you
  set publishing.state to published.
`);
