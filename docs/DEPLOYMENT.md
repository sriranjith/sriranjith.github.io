# Deployment

The output of `npm run build` is a folder of static files. Any host that can
serve a directory will serve this site, and most will do it free.

There is no server runtime, no database, no environment variables, and no
secrets. Deployment is a file copy.

---

## Before the first deploy

Set the canonical URL in `src/lib/site.js`:

```js
export const SITE = {
  url: 'https://your-domain.example',   // ← this one
  ...
};
```

It drives canonical tags, the sitemap, RSS and structured data. Everything else
works without it; those four will be wrong until it is set.

---

## The workflow

```
edit content  →  npm run validate  →  npm run dev (preview)
                                          ↓
                                    set publishing.state: published
                                          ↓
                                     git commit + push
                                          ↓
                            CI validates, builds, deploys
```

`npm run build` runs validation first. **A content error fails the build**, so a
broken entry cannot reach production — locally or in CI.

Drafts are excluded from the build entirely, so unfinished work can sit in the
repository indefinitely with no risk of leaking.

---

## GitHub Actions

`.github/workflows/build.yml` validates and builds every push and pull request.
`.github/workflows/deploy.yml` publishes to GitHub Pages from the default
branch.

For GitHub Pages, enable it in **Settings → Pages → Source → GitHub Actions**.

If the site is served from a subpath, add `base: '/repo-name'` to
`astro.config.mjs`.

## Other hosts

All of these need only: build command `npm run build`, output directory `dist`.

| Host | Notes |
| --- | --- |
| **Cloudflare Pages** | Generous free tier, fast global network. Set `NODE_VERSION=20`. |
| **Netlify** | Deploy previews per pull request are genuinely useful for prose review. |
| **Vercel** | Detects Astro automatically. |
| **Any object store + CDN** | S3/R2 + CloudFront/Cloudflare. `aws s3 sync dist/`. |

Because the site is fully static with no adapter, moving between these is
changing a DNS record.

---

## Cost

Zero on every free tier listed above, at any traffic level this site will
plausibly see. There is nothing running between deploys.

The build is ~2 seconds for 276 pages, so CI minutes are not a factor either.

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
npm run validate           # errors block; warnings are the to-do list
npm run validate -- --strict   # treat warnings as errors, for a clean-up push
npm run health             # coverage by domain, era and nature; what needs attention
```

`npm run health -- --json` is the input to the gap-analysis prompt in
[`ai-prompts/01-discover-gaps.md`](ai-prompts/01-discover-gaps.md).

## Analytics

None is configured, and `SITE.analytics` is `null`.

If page counts are ever genuinely wanted, prefer a cookieless, script-light
option (server-side log analysis, or Plausible/Fathom/Cloudflare Web Analytics)
over anything that needs a consent banner. The project measures learning, not
engagement — there is no metric here worth degrading the reading experience for.
