# Paradox

A static knowledge base of the ideas that argue with human intuition — written
so a curious ten-year-old and a working researcher can read the same page and
both get something from it.

**58 paradoxes · 329 sources · 152 people · 5 learning paths · 276 pages · zero
runtime dependencies.**

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321  — the website
npm run admin      # http://localhost:4322  — the editor (local only)
```

That is the whole setup. No database, no containers, no services, no API keys.

## The commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Live-reloading website |
| `npm run admin` | Local content editor and health dashboard |
| `npm run validate` | Check every content rule; `--strict` fails on warnings too |
| `npm run health` | Coverage report and what needs attention |
| `npm run new -- "Title"` | Scaffold a valid draft |
| `npm run build` | Validate, then build to `dist/` |
| `npm run preview` | Serve the production build |

`npm run build` runs validation first, so a broken content file cannot ship.

---

## How it works

```
content/          ← the source of truth. Markdown + YAML. Edit this.
  paradoxes/*.md
  people/*.yml
  sources/*.yml
  paths/*.yml
  taxonomy/*.yml

src/lib/          ← the domain layer. One loader, one schema, one validator,
                    used identically by the site, the CLI and the admin.
src/pages/        ← routes. Almost all are generated from content.
admin/            ← the local editor. Never deployed.
scripts/          ← validate, health, scaffold.
docs/             ← how to write content, and the AI research prompts.
```

**Adding a paradox is a content operation, not a coding one.** Write the file,
validate, publish. The browse pages, filters, timeline, search index, sitemap,
knowledge map, bibliography and taxonomy pages all regenerate themselves. Adding
the 1st and the 500th entry are the same five commands.

Start with [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md). The reference
implementation is
[`content/paradoxes/monty-hall-problem.md`](content/paradoxes/monty-hall-problem.md).

---

## The two ideas the whole thing is built on

**1. One page, many depths.** Every entry is layered — `Discover` (a story, no
background needed) → `Understand` (plain language, complete on its own) →
`Explore` / `History` / `Why It Matters` → `Deep Dive` (the formal treatment) →
`Research` (primary sources). A reader stops wherever they like, and everything
above that point is *true*. Nothing is simplified into something misleading.

**2. "Paradox" is used precisely.** Most collections call everything surprising
a paradox, which destroys real distinctions. Here every entry declares its
`nature`: a *logical contradiction* is not an *impossibility result* is not a
*counterintuitive result* is not an *open problem*. The site says plainly when
something popularly called a paradox is not one.

---

## What is deliberately not here

No chatbot, no runtime LLM calls, no vector database, no embeddings, no
recommendation model, no accounts, no comments, no analytics beyond nothing.

"Where to go next" is computed from relationships a human wrote and explained —
every suggestion shows its reason. The product works completely without AI.

AI *is* used privately by the maintainer as a research assistant, with prompts
stored in [`docs/ai-prompts/`](docs/ai-prompts/). Nothing reaches the site
without a person checking it against a real source and publishing it explicitly.

---

## Documentation

| | |
| --- | --- |
| [Content guide](docs/CONTENT_GUIDE.md) | How to write and classify an entry |
| [Architecture](docs/ARCHITECTURE.md) | How the system is put together, and why |
| [Deployment](docs/DEPLOYMENT.md) | Publishing, hosting, CI |
| [Decisions](docs/decisions/) | The architectural choices, with their trade-offs |
| [AI prompts](docs/ai-prompts/) | Research and review prompts for the maintainer |

## Requirements

Node 22.12 or later — the version in `.nvmrc` (24) is what CI uses. Nothing else.
