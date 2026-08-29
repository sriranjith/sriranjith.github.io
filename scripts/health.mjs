#!/usr/bin/env node
import { loadCatalog } from '../src/lib/catalog.js';
import { contentHealth } from '../src/lib/health.js';

// A terminal view of the same data the admin dashboard shows.
// `npm run health -- --json` feeds the AI research prompts in docs/ai-prompts/.

const args = new Set(process.argv.slice(2));
const health = contentHealth(loadCatalog({ fresh: true }));

if (args.has('--json')) {
  console.log(JSON.stringify(health, null, 2));
  process.exit(0);
}

const C = process.stdout.isTTY
  ? {
      bold: (s) => `\x1b[1m${s}\x1b[0m`,
      dim: (s) => `\x1b[2m${s}\x1b[0m`,
      red: (s) => `\x1b[31m${s}\x1b[0m`,
      yellow: (s) => `\x1b[33m${s}\x1b[0m`,
      green: (s) => `\x1b[32m${s}\x1b[0m`,
    }
  : new Proxy({}, { get: () => (s) => s });

const paint = (rank, text) =>
  [C.dim, C.red, C.yellow, (s) => s, C.green][rank](text);

const pad = (s, n) => String(s).padEnd(n);

console.log(`\n${C.bold('Content health')}\n`);

const t = health.totals;
console.log(
  `  ${C.bold(t.paradoxes)} paradoxes  ` +
    `${C.green(t.published + ' published')}  ` +
    `${t.review} in review  ${t.draft} drafts`
);
console.log(
  `  ${t.sources} sources · ${t.people} people · ${t.paths} paths · ${t.words.toLocaleString()} words`
);
console.log(
  `  ${health.validation.errors ? C.red(health.validation.errors + ' errors') : C.green('0 errors')}  ` +
    `${health.validation.warnings ? C.yellow(health.validation.warnings + ' warnings') : '0 warnings'}  ` +
    `avg completeness ${health.averageScore}%\n`
);

console.log(C.bold('Coverage by domain'));
for (const d of health.coverage.domains) {
  const bar = '█'.repeat(Math.min(d.count, 24));
  console.log(`  ${pad(d.label, 18)} ${pad(d.count, 4)} ${paint(d.strength.rank, pad(d.strength.label, 10))} ${C.dim(bar)}`);
}

console.log(`\n${C.bold('Coverage by era')}`);
for (const e of health.coverage.eras) {
  console.log(`  ${pad(e.label, 18)} ${pad(e.count, 4)} ${paint(e.strength.rank, e.strength.label)}`);
}

console.log(`\n${C.bold('Coverage by nature')}  ${C.dim('(a blind spot here is an editorial failure)')}`);
for (const n of health.coverage.natures) {
  console.log(`  ${pad(n.label, 24)} ${pad(n.count, 4)} ${paint(n.strength.rank, n.strength.label)}`);
}

if (health.gaps.length) {
  console.log(`\n${C.bold('Gaps worth researching')}`);
  for (const gap of health.gaps.slice(0, 10)) {
    console.log(`  ${C.yellow('•')} ${gap.suggestion}`);
  }
}

if (health.attention.length) {
  console.log(`\n${C.bold('Needs attention')}`);
  for (const entry of health.attention.slice(0, 12)) {
    const flags = [
      entry.errors ? C.red(`${entry.errors}e`) : null,
      entry.warnings ? C.yellow(`${entry.warnings}w`) : null,
    ]
      .filter(Boolean)
      .join(' ');
    console.log(`  ${pad(entry.slug, 34)} ${pad(entry.score + '%', 6)} ${flags}`);
    if (entry.missingRequired.length) {
      console.log(C.dim(`      missing: ${entry.missingRequired.join(', ')}`));
    }
  }
}

if (health.orphans.length) {
  console.log(`\n${C.bold('Unconnected')}  ${C.dim('(islands in the knowledge map)')}`);
  console.log('  ' + health.orphans.map((o) => o.slug).join(', '));
}

console.log('');
