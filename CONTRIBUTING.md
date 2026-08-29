# Contributing

The most valuable contribution to this project is **a correction with a source
attached.**

The content is a set of text files in version control, which makes being wrong
in public fixable rather than embarrassing. If an entry misattributes an idea,
overstates a consensus, repeats a legend as history, or explains something in a
way that is tidy but false — that is worth reporting, and worth reporting
precisely.

## Reporting an error

Open an issue with:

- the entry and the exact sentence
- what is wrong
- a source

The third one is what makes it actionable.

## Editing content

```bash
npm install
npm run admin      # http://localhost:4322 — editor with live validation
npm run dev        # http://localhost:4321 — preview the real page
npm run validate   # the same checks CI runs
```

Read [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md) first. The reference
implementation is
[`content/paradoxes/monty-hall-problem.md`](content/paradoxes/monty-hall-problem.md);
matching its shape is the fastest way to get an entry right.

Validation must pass with zero errors. Warnings are a to-do list, not a gate.

## Adding a paradox

```bash
npm run new -- "Newcomb's Paradox"
```

Then work through the sections. Two things decide whether it is any good:

**`## Discover` must work for a ten-year-old.** Not "simplified for" — actually
work. Tell it as a story. If a child would stop reading, it is not finished.

**`nature` must be right.** A theorem proving no solution exists is not a
logical contradiction. A correct-but-surprising answer is not a paradox proper.
Getting this field right is the main editorial job on this site, and getting it
wrong is the main way an entry misleads.

New entries start as `draft` and are excluded from the build until
`publishing.state` is set to `published`.

## Writing standards

- Direct and plain. Short sentences carry hard ideas better than long ones.
- Never simplify into something false. An honest hedge beats a clean error.
- Separate documented history from tradition. Say "traditionally attributed to"
  when that is what it is.
- Give real numbers.
- Name the person and the year on first mention of a claim or objection.
- Where experts disagree, present each position at its strongest and do not
  pick a winner the field has not.
- Never invent a DOI, ISBN, URL or page number. Omit the field.

## Code

The bar for adding software to this project is high, and deliberately so. Before
proposing a dependency or an abstraction, the question is:

> Will this make maintaining 500 paradoxes easier or harder?

Read [`docs/decisions/`](docs/decisions/) first — several attractive additions
have already been considered and rejected, with the reasoning written down.
