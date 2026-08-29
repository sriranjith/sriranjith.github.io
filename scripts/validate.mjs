#!/usr/bin/env node
import path from 'node:path';
import { loadCatalog } from '../src/lib/catalog.js';
import { validateCatalog } from '../src/lib/validate.js';
import { ROOT } from '../src/lib/paths.js';

// Runs before every build and in CI. Errors fail the build; warnings do not.
//   --strict   treat warnings as errors too
//   --quiet    only show errors
//   --json     machine-readable output

const args = new Set(process.argv.slice(2));
const strict = args.has('--strict');
const quiet = args.has('--quiet');
const asJson = args.has('--json');

const C = process.stdout.isTTY
  ? {
      red: (s) => `\x1b[31m${s}\x1b[0m`,
      yellow: (s) => `\x1b[33m${s}\x1b[0m`,
      blue: (s) => `\x1b[34m${s}\x1b[0m`,
      dim: (s) => `\x1b[2m${s}\x1b[0m`,
      bold: (s) => `\x1b[1m${s}\x1b[0m`,
      green: (s) => `\x1b[32m${s}\x1b[0m`,
    }
  : new Proxy({}, { get: () => (s) => s });

const catalog = loadCatalog({ fresh: true });
const result = validateCatalog(catalog);

if (asJson) {
  console.log(JSON.stringify(result.findings, null, 2));
  process.exit(result.ok && (!strict || result.warnings.length === 0) ? 0 : 1);
}

const SEVERITY = {
  error: { icon: '✗', paint: C.red, label: 'error' },
  warning: { icon: '!', paint: C.yellow, label: 'warning' },
  info: { icon: 'i', paint: C.blue, label: 'info' },
};

const shown = result.findings.filter((f) => (quiet ? f.severity === 'error' : f.severity !== 'info' || !quiet));

// Group by entry so the output reads like a to-do list per file.
const grouped = new Map();
for (const f of shown) {
  const key = `${f.entity}:${f.id}`;
  if (!grouped.has(key)) grouped.set(key, []);
  grouped.get(key).push(f);
}

const rank = { error: 0, warning: 1, info: 2 };
const sortedKeys = [...grouped.keys()].sort((a, b) => {
  const worst = (k) => Math.min(...grouped.get(k).map((f) => rank[f.severity]));
  return worst(a) - worst(b) || a.localeCompare(b);
});

console.log('');
for (const key of sortedKeys) {
  const findings = grouped.get(key).sort((a, b) => rank[a.severity] - rank[b.severity]);
  const [entity, id] = key.split(/:(.*)/);

  const source =
    entity === 'paradox'
      ? `content/paradoxes/${id}.md`
      : entity === 'person'
        ? `content/people/${id}.yml`
        : entity === 'source'
          ? `content/sources/${id}.yml`
          : entity === 'path'
            ? `content/paths/${id}.yml`
            : `content/taxonomy/`;

  console.log(C.bold(source));
  for (const f of findings) {
    const s = SEVERITY[f.severity];
    console.log(`  ${s.paint(s.icon)} ${C.dim(f.field)}  ${f.message}`);
    if (f.fix) console.log(`      ${C.dim('→ ' + f.fix)}`);
  }
  console.log('');
}

const totals = [
  result.errors.length ? C.red(`${result.errors.length} errors`) : null,
  result.warnings.length ? C.yellow(`${result.warnings.length} warnings`) : null,
  result.infos.length && !quiet ? C.blue(`${result.infos.length} suggestions`) : null,
].filter(Boolean);

const published = catalog.allParadoxes.filter((p) => p.publishing.state === 'published').length;

console.log(
  C.dim('─'.repeat(50)) +
    `\n${catalog.allParadoxes.length} paradoxes (${published} published) · ` +
    `${catalog.sources.length} sources · ${catalog.people.length} people · ${catalog.paths.length} paths`
);

if (totals.length === 0) {
  console.log(C.green('✓ Everything checks out.\n'));
} else {
  console.log(totals.join(C.dim(' · ')) + '\n');
}

if (!result.ok) {
  console.log(C.red('Build blocked: fix the errors above.\n'));
  process.exit(1);
}
if (strict && result.warnings.length > 0) {
  console.log(C.yellow('--strict: warnings are being treated as errors.\n'));
  process.exit(1);
}
