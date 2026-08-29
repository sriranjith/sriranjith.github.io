# 0004 — A generated JSON index instead of a search library

**Status:** accepted · 2026-08-29

## Context

The site needs two different things people call "search":

1. **Faceted filtering** — combine domain, type, era, difficulty, nature and
   status. "Beginner + probability". "Ancient + philosophy".
2. **Text search** — over names, alternate names, concepts, people, books and
   summaries.

Pagefind is the standard answer for static sites, and Astro's own docs use it.

## Decision

Neither a search library nor a service.

**Filtering:** the browse page renders every row server-side with its facets in
`data-` attributes, and about 60 lines of JS toggles `hidden`. State is mirrored
into the URL, so a filtered view is shareable.

**Text search:** `/search-index.json` is generated at build from the canonical
catalog. About 130 lines of client JS does field-weighted scoring — exact title
match beats prefix match beats keyword beats summary beats body.

## Why

**The corpus is small.** 58 entries produce a 120 KB index; 500 would produce
roughly 1 MB, which is fetched once, on the first keystroke, and only for people
who actually search.

**Faceted filtering is not text search.** Pagefind supports filters, but the
combination the requirements ask for — arbitrary AND across six axes, OR within
each — is a `Set.has()` loop. Adding a search engine to do set intersection is
backwards.

**It cannot drift.** The index is generated from `loadCatalog()`, the same
function that renders the pages. There is no separate index to rebuild,
invalidate or forget.

**Zero dependencies.** No postbuild step, no dev-mode workaround for an index
that only exists after a production build, no WASM payload, no version to track.

**Ranking is ours.** A paradox outranks a source record; an exact title match
dominates. That is a five-line tweak here and a configuration exercise in a
library.

## Trade-offs accepted

- **Search does not cover full body text.** It indexes metadata plus a
  600-character excerpt of Discover and Understand. Searching a phrase that
  appears only in a Deep Dive will not find it.
- **The browse page ships every row.** ~180 KB of HTML at 58 entries. Mitigated
  with `content-visibility: auto`.
- **No stemming or fuzzy matching.** "Godel" does not match "Gödel" — handled by
  putting variants in `alternateNames`, which is better content anyway.

## When to revisit

If full-text search over deep content becomes a real need, add
`astro-pagefind`. It is a build-time integration; it does not touch the content
model, and this decision does not have to be undone to adopt it.

If browse exceeds ~500 entries, paginate or switch it to fetch the same JSON
index the search page already uses.
