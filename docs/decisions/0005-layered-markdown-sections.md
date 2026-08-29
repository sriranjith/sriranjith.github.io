# 0005 — Progressive depth as `## ` sections in one Markdown body

**Status:** accepted · 2026-08-29

## Context

The core product requirement: one page must serve a ten-year-old and a
specialist. That means named, ordered layers of increasing depth, each
individually validatable ("this advanced entry has no Deep Dive", "this Discover
section is too thin").

Three ways to represent that were considered.

## Decision

YAML front matter for metadata; the Markdown body split by `## ` headings that
map to canonical layer ids. `parseSections()` splits, `serialiseSections()`
rebuilds in canonical order.

Unrecognised `## ` headings are collected and reported as errors — never
silently dropped.

## Why

**It is ordinary Markdown.** The file renders correctly in any editor, in a
GitHub preview, and in a diff. An author writing prose is writing prose, not
filling in a data structure.

**It is still strictly validatable.** Splitting on headings gives a section map,
so per-layer rules are as easy as if each layer were its own field.

**It round-trips safely.** The admin form is one textarea per section;
serialisation restores canonical order, so editing through the UI never reorders
or loses content.

**Typos fail loudly.** `## Modern relevence` is caught with a "did you mean…"
suggestion rather than quietly vanishing from the site — the failure mode that
would otherwise be invisible until a reader noticed.

## Rejected

**Markdown blocks inside front matter** (`content: { discover: | … }`). Cleanly
per-field, but produces enormous unreadable YAML, breaks editor Markdown
support, renders as nothing on GitHub, and makes diffs painful. It optimises for
the machine at the author's expense.

**Custom fence syntax** (`::: discover … :::`). A new syntax to learn, to
document, to parse, and to keep working in every tool. `##` already exists and
already means "section".

**One file per layer** (`zenos-dichotomy/discover.md`, …). Eight files per
paradox, 464 files at current size. Editing one entry means opening eight
things.

## Consequence

Since sections are rendered independently, `marked` renders them rather than
Astro's Markdown pipeline. `src/lib/markdown.js` clamps heading levels to h3–h6
so nothing inside a section competes with the `<h2>` the section itself owns.

## Layer contract

`src/lib/sections.js` is the single definition — heading, label, reading depth,
whether it is required, whether it opens by default, and the authoring hint
shown in the admin editor. Adding or renaming a layer is one entry in that
array; the paradox page, the depth rail, validation and the admin form all read
from it.
