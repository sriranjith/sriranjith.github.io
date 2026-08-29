import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Locating the content directory has one awkward constraint: this module is
// imported both by plain Node scripts and by Astro, which bundles it into
// dist/.prerender/. After bundling, `import.meta.url` no longer points anywhere
// near the source tree, so it cannot be the primary strategy.
//
// Instead: walk up from the working directory looking for the marker that
// actually matters — a `content/taxonomy` directory next to a `package.json`.

function looksLikeRoot(dir) {
  return (
    fs.existsSync(path.join(dir, 'package.json')) &&
    fs.existsSync(path.join(dir, 'content', 'taxonomy'))
  );
}

function findRoot() {
  const candidates = [process.cwd(), path.resolve(fileURLToPath(new URL('.', import.meta.url)), '../..')];

  for (const start of candidates) {
    let dir = start;
    for (let i = 0; i < 8; i++) {
      if (looksLikeRoot(dir)) return dir;
      const parent = path.dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }
  }

  throw new Error(
    'Could not locate the project root. Expected a directory containing both ' +
      'package.json and content/taxonomy/. Run commands from the repository root.'
  );
}

export const ROOT = findRoot();

export const CONTENT_DIR = path.join(ROOT, 'content');
export const PARADOX_DIR = path.join(CONTENT_DIR, 'paradoxes');
export const PEOPLE_DIR = path.join(CONTENT_DIR, 'people');
export const SOURCE_DIR = path.join(CONTENT_DIR, 'sources');
export const PATH_DIR = path.join(CONTENT_DIR, 'paths');
export const TAXONOMY_DIR = path.join(CONTENT_DIR, 'taxonomy');
