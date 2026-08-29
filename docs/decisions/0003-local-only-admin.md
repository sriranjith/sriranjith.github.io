# 0003 — The admin runs on localhost and is never deployed

**Status:** accepted · 2026-08-29

## Context

The requirement was explicit: *"maintaining the website should feel like managing
content, not maintaining software"*, with a real editing UI, validation, preview,
publishing and a health dashboard.

The reflex is to build that as a protected route on the deployed site. That
reflex is what this decision rejects.

## Decision

The admin is a standalone Node server (`npm run admin`) bound to `127.0.0.1`. It
is not part of the Astro build, is not in `dist/`, and cannot be deployed. It has
**no authentication, because it has no attack surface.**

## Why

**The security story becomes trivial.** No login, no sessions, no password
reset, no OAuth provider, no token rotation, no rate limiting, no CSRF, no
dependency on an auth vendor's uptime or pricing. The strongest defence against
an admin route being compromised is not having one on the internet.

The requirement said *"if the admin interface requires authentication, use an
established solution"*. The better answer was to remove the requirement.

**Hosting stays free and static.** A deployed admin needs a server runtime, a
write path to storage, and a way to commit back to Git. Locally, "write to
storage" is `fs.writeFile` and "commit" is `git commit`.

**Validation can be honest.** The admin runs the same `validateCatalog()` the
build runs, against the real files, with no serialisation boundary. Publishing
runs the full gate first and refuses on error — with the specific findings shown
in the panel.

**Preview is the real site.** `npm run dev` alongside it, and the editor links
straight to the actual page. No preview environment to build or keep in sync.

## Trade-offs accepted

- **Editing requires a checkout and Node.** For a single maintainer this is the
  same requirement as editing at all.
- **No editing from a phone.** The GitHub web editor remains available for a
  typo fix, and validation still runs in CI.
- **Not multi-user.** Deliberate. Two maintainers would use branches.

## Rejected

**Decap / Sveltia CMS.** Git-backed and genuinely good, but requires an OAuth
provider or a proxy, puts an editing surface on the public domain, and validation
is limited to what its config language expresses — no "did you mean…", no
publish gate, no coverage dashboard.

**A protected route on the deployed site.** Everything above, plus an auth system
to maintain forever.

## Implementation notes

- Binds to `127.0.0.1`, not `0.0.0.0`. Not reachable from the network.
- Every path goes through `contentPath()`, which enforces the slug pattern and
  verifies the resolved path stays inside `content/`.
- Front matter is written with a fixed field order so diffs stay small and
  reviewable.
- Zero dependencies beyond what the site already uses: Node's `http` and plain
  DOM. No Express, no framework, no build step.
