# 0002 — Read content with our own loader, not Astro's content collections

**Status:** accepted · 2026-08-29

## Context

Astro ships content collections: a `glob()` loader with Zod schemas, designed
for exactly this shape of project. Using it is the obvious default.

We do not use it.

## Decision

`src/lib/catalog.js` reads `content/` directly with `fs`, `gray-matter` and
`yaml`, validates with Zod, and returns a plain object. Astro is used purely as
a static renderer and router.

## Why

**The CLI and the admin need the same data.** `npm run validate`, `npm run
health` and the admin server all have to read and understand content. Astro's
content API is only available inside an Astro build. Using it would have meant
writing a *second* loader for everything outside the site — two code paths to
keep in sync, and validation rules that could disagree with what the site
actually renders.

With our own loader there is exactly one way to read content, and a rule written
once holds everywhere.

**The content API has churned.** Content collections changed substantially
between Astro 4, 5 and 6 — `type: 'content'` deprecated in favour of loaders,
`z` moved from `astro:content` to `astro/zod`, loader `schema` functions
replaced by `createSchema()`. Each of those is a migration for a project whose
whole premise is not needing migrations. The parts of Astro we do rely on —
file-based routing, `getStaticPaths`, static output — have been stable across
every major.

**Section splitting is ours anyway.** One Markdown file becomes eight
independently-rendered layers. The framework's body pipeline does not do that,
so we render sections with `marked` regardless.

## Trade-offs accepted

- **No incremental content caching.** Reading 58 files takes ~40ms; the whole
  build is 2 seconds. Irrelevant until it isn't.
- **No auto-generated `.d.ts` for entries.** JSDoc plus Zod inference gives good
  enough editor support.
- **We maintain ~150 lines of loader.** It is simple, it is tested by every
  build, and it is the reason validation is trustworthy.

## Consequence discovered in practice

Astro bundles imported modules into `dist/.prerender/`, which relocates
`import.meta.url`. `src/lib/paths.js` therefore locates the project root by
walking up from the working directory looking for `package.json` alongside
`content/taxonomy/`, rather than resolving relative to its own file. Worth
knowing before adding another path helper.
