# Deployment

The output of `npm run build` is a folder of static files. Any host that can
serve a directory will serve this site, and most will do it free.

There is no server runtime, no database, no environment variables, and no
secrets. Deployment is a file copy.

---

## One hard requirement: serve from a root domain

Every internal link on this site is root-absolute — `/browse/`,
`/paradox/liar-paradox/`. That is deliberate: it means no page, component,
script or JSON fetch has to know where the site is mounted, and nobody adding a
link in future has to remember a helper.

The cost is that **the site cannot be served from a subpath.** A host that puts
it at `example.com/paradox/` will 404 on every link.

This rules out GitHub Pages *project* sites (`user.github.io/repo/`), which is
why the recommended host below is Cloudflare Pages. A GitHub Pages **user** site
(`user.github.io`) or any custom domain works fine, because both serve at root.

If you ever must use a subpath, set `base` in `astro.config.mjs` and route all
~78 internal links, the search-index fetch in `src/pages/search.astro`, and the
inline scripts in `browse/index.astro` and `random.astro` through a
`BASE_URL`-aware helper. It is a contained change, but it is a permanent tax on
every link added afterwards. Prefer a root domain.

---

## Cloudflare Pages (recommended)

Free, unmetered bandwidth, fast, and serves at a root domain.

**One-time setup, in the Cloudflare dashboard:**

1. **Workers & Pages → Create → Pages → Connect to Git**
2. Select `sriranjith/paradox`
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy.

Node version comes from `.node-version` (24), which Cloudflare reads
automatically. If it ever ignores it, set a `NODE_VERSION` environment variable
to the same value.

You get `paradox.pages.dev`, plus a preview deployment for every pull request —
genuinely useful for reviewing prose changes.

**Then set the canonical URL** in `src/lib/site.js` to match:

```js
export const SITE = {
  url: 'https://paradox.pages.dev',   // ← or your custom domain
  ...
};
```

It drives canonical tags, the sitemap, RSS and structured data. Everything else
works without it; those four will be wrong until it is right.

---

## Other hosts

All need only: build command `npm run build`, output directory `dist`.

| Host | Notes |
| --- | --- |
| **Netlify** | Equivalent to Cloudflare Pages. Deploy previews per PR. |
| **Vercel** | Detects Astro automatically. |
| **GitHub Pages** | Only as a **user** site or with a custom domain — see the root-domain requirement above. |
| **S3/R2 + CDN** | `aws s3 sync dist/ s3://bucket --delete`. |

Because the site is fully static with no adapter, moving between these is
changing a DNS record.

---

## The workflow

```
edit content  →  npm run validate  →  npm run dev (preview)
                                          ↓
                                   publishing.state: published
                                          ↓
                                     git commit + push
                                          ↓
                    GitHub Actions validates · Cloudflare builds and deploys
```

`.github/workflows/build.yml` validates and builds every push and pull request —
the correctness gate. Cloudflare Pages does the actual deployment from the same
commit.

`npm run build` runs validation first. **A content error fails the build**, so a
broken entry cannot reach production, locally or in CI.

Drafts are excluded from the build entirely, so unfinished work can sit in the
repository indefinitely with no risk of leaking.

---

## Cost

Zero, at any traffic level this site will plausibly see. Nothing runs between
deploys. The build is ~2 seconds for 276 pages, so CI minutes are not a factor
either.

---

## What is never deployed

- `admin/` — binds to `127.0.0.1`, is not part of the Astro build, and is not in
  `dist/`. See [ADR 0003](decisions/0003-local-only-admin.md).
- `content/` — the source files. Their rendered output ships; they do not.
- Anything with `publishing.state` of `draft` or `review`.

## Rollback

`git revert` and push. The next build reproduces the previous site exactly —
static output is a pure function of the content in the commit.

---

## Health checks worth running

Not required by the build, but worth a periodic look:

```bash
npm run validate               # errors block; warnings are the to-do list
npm run validate -- --strict   # treat warnings as errors, for a clean-up push
npm run health                 # coverage by domain, era and nature
```

`npm run health -- --json` is the input to the gap-analysis prompt in
[`ai-prompts/01-discover-gaps.md`](ai-prompts/01-discover-gaps.md).

## Analytics

None is configured, and `SITE.analytics` is `null`.

If page counts are ever genuinely wanted, prefer a cookieless, script-light
option — Cloudflare Web Analytics is free and needs no consent banner. The
project measures learning, not engagement; there is no metric here worth
degrading the reading experience for.
