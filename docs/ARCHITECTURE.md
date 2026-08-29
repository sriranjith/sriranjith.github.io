# Architecture

The design goal was not "a good website". It was: **the system should scale in
content volume, not in technical complexity.** Going from 58 paradoxes to 500
should change nothing about how the software works or how much attention it
needs.

Everything below follows from that.

---

## The shape

```
┌─────────────────────────────────────────────────────────┐
│  content/           Git. Markdown + YAML. Source of truth│
└────────────────────────────┬────────────────────────────┘
                             │
                ┌────────────▼────────────┐
                │  src/lib/  domain layer │
                │  catalog · schema ·     │
                │  validate · graph ·     │
                │  health · taxonomy      │
                └──┬──────────┬──────────┬┘
                   │          │          │
        ┌──────────▼──┐  ┌────▼─────┐  ┌─▼──────────────┐
        │ Astro build │  │ CLI      │  │ admin/ (local) │
        │ → dist/     │  │ validate │  │ editor +       │
        │   276 pages │  │ health   │  │ dashboard      │
        └──────┬──────┘  └──────────┘  └────────────────┘
               │
        ┌──────▼──────┐
        │ Static CDN  │   No server. No database. No runtime.
        └─────────────┘
```

The important property: **there is exactly one way to read content.** The
website, the validator and the admin all call `loadCatalog()`. There is no
second code path that can drift out of sync, and a validation rule written once
applies everywhere.

---

## The stack

| Layer | Choice | Why |
| --- | --- | --- |
| Content | Markdown + YAML in Git | Diffable, reviewable, editable in any tool, no vendor |
| Site generator | Astro 7, `output: 'static'` | Best-in-class static generation, ships zero JS by default, islands where needed |
| Schema | Zod | Runtime validation *and* editor types from one definition |
| Markdown | `marked` | Sections are rendered individually, so the framework's pipeline is not usable |
| Search | Build-generated JSON + ~150 lines of vanilla JS | See ADR 0004 |
| Admin | Node `http` + plain DOM | See ADR 0003 |
| Hosting | Any static CDN | Free tier, no maintenance |

Six runtime dependencies total. `npm install` takes about 35 seconds.

**Everything is plain JavaScript with JSDoc types, not TypeScript.** `src/lib/`
is imported by Astro *and* run directly by Node scripts and the admin server.
TypeScript would mean a compile step for the CLI and the admin — a build system
to maintain in exchange for types the editor already infers from Zod.

---

## Content model

```
content/paradoxes/<slug>.md     ← filename IS the URL
  ├── YAML front matter          identity, history, classification,
  │                              relationships, references, publishing
  └── Markdown body              split by `## ` into named layers

content/people/<id>.yml          reusable, cited from many entries
content/sources/<id>.yml         reusable bibliography — one record, many citers
content/paths/<id>.yml           curated sequences
content/taxonomy/*.yml           the controlled vocabularies
```

**Layers.** The body is split by `## ` headings into `Discover`, `Understand`,
`Examples`, `Explore`, `History`, `Why It Matters`, `Modern Relevance`,
`Deep Dive`. Unrecognised headings are *flagged*, never silently dropped. This
keeps authoring in ordinary Markdown — it renders correctly in any editor and on
GitHub — while still being strictly validatable per-section.

**Relationships are written once.** Each kind declares an `inverse` in
`taxonomy/relationship-kinds.yml`, so an author writes the edge on whichever
side reads better and the reverse link is derived. Half the bookkeeping,
none of the drift.

**Sources are records, not strings.** One `sources/*.yml` file per work, cited
by id with an optional `locator` and `note`. Fixing a citation fixes it on every
page at once, and the bibliography page is complete by construction.

---

## What is generated, and therefore never maintained by hand

Adding one content file automatically produces or updates:

- its own page, with layered disclosure and structured metadata
- entries on **six** classification axes (domain, type, era, difficulty, nature, status)
- its position on the timeline, from `year`
- its node and edges on the knowledge map
- its rows in browse and in every matching filter combination
- its documents in the search index
- reverse relationship links on every entry it points at
- its citations on the bibliography page and on each person's page
- sitemap and RSS entries
- the coverage and health dashboards

None of these has a hand-written page. This is the single biggest reason the
system does not get harder to run as content grows.

---

## Taxonomy is data

Six controlled vocabularies live in `content/taxonomy/*.yml`. Adding a term
creates its browse page, adds it to every filter, and adds it to the coverage
dashboard — with no code change. `src/lib/site.js` declares the axes once and
six three-line route files consume them.

The `nature` vocabulary is the editorial heart of the project: it forces every
entry to declare whether it is a logical contradiction, an apparent
contradiction, a counterintuitive result, a veridical paradox, a thought
experiment, an impossibility result, or an open problem.

---

## Validation

`src/lib/validate.js` is the contract, and the only place rules live. Three
severities: **error** blocks the build, **warning** is the to-do list, **info**
is a suggestion.

It catches missing or thin sections, mistyped `## ` headings, invalid taxonomy
values *with a "did you mean…" suggestion*, broken relationships, published
pages linking to unpublished ones, duplicate slugs, near-identical titles,
`year` contradicting `era`, advanced entries with no Deep Dive, published
entries with no references or no primary source, malformed DOIs, and sources or
people that nothing cites.

Messages are written to be actionable — the finding and the fix, not just the
complaint:

```
content/paradoxes/liar-paradox.md
  ✗ (file)  Front matter is malformed. incomplete explicit mapping pair …
      → This is almost always an unquoted value containing a colon followed
        by a space. Wrap the value in a `>-` block, or put it in quotes.
```

---

## Performance and accessibility

Static HTML from a CDN. **No JavaScript at all** on most pages. The paradox
page uses `<details>` for progressive disclosure, so layering works with JS
disabled and is keyboard-accessible for free. Interactive demonstrations are
declared per-entry in front matter and load only on those pages. The search
index downloads on the first keystroke, so visitors who never search never
fetch it. The browse page renders all rows server-side and filters by toggling
`hidden`, so it works, and is indexable, without JS.

Semantic landmarks, skip link, visible focus rings, `prefers-reduced-motion`,
`prefers-color-scheme`, and a responsive layout from 320px up.

---

## The rejected alternatives

Recorded properly in [`decisions/`](decisions/), briefly:

- **A CMS or database** — a service to run, back up, migrate and pay for, to
  manage files that Git already versions better.
- **A hosted admin with authentication** — an internet-facing write path and an
  auth system to maintain. The admin runs on localhost instead and has no attack
  surface at all.
- **Astro's content collections** — would couple the content model to a
  framework API that has changed shape across three majors, and would give the
  CLI and admin no way to reuse it.
- **A search service, or Pagefind** — a dependency and an index to keep in sync,
  for a corpus where a generated JSON file is 120 KB.
- **A graph database** — the relationships are a few hundred edges in YAML.

---

## Where this would need rework

Honest limits, so nobody discovers them the hard way:

- **Browse renders every row.** Fine to ~500 entries. Beyond that, paginate or
  move to a fetched index.
- **Search is metadata plus a 600-character body excerpt.** If full-text search
  over Deep Dive sections is ever wanted, add Pagefind — it slots in as a build
  step without touching the content model.
- **The knowledge map is a build-time SVG.** Legible to roughly 150 nodes.
  Beyond that it needs filtering or a real layout.
- **Validation is O(n²)** over titles for near-duplicate detection. Around a
  second at 500 entries; noticeable at 5,000.

Each is a contained change, and none of them requires touching `content/`.
