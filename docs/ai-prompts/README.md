# AI prompts for the administrator

The website contains no AI. These prompts are for the *maintainer*, to be pasted
into whatever AI research assistant you use, outside the product.

The rule this whole directory exists to enforce:

> **AI drafts. A human decides.**
>
> Nothing an assistant produces reaches the site without being read, checked
> against a real source, and explicitly published by a person.

## The workflow

```
1. Find a gap          → 01-discover-gaps.md
2. Research it         → 02-research-a-paradox.md
3. Turn it into a file → 03-prepare-content.md
4. Have it criticised  → 04-review-content.md
5. Read it yourself, fix it, publish
```

Every prompt starts by making the assistant read the actual repository, so it
argues with real content rather than inventing a plausible catalogue.

## Getting the current state

Most of these prompts want to know what already exists. Two commands produce it:

```bash
npm run health -- --json > /tmp/health.json     # coverage, gaps, per-entry scores
npm run validate -- --json > /tmp/findings.json # every open issue
```

Paste the relevant part, or point a file-reading assistant at the repository.

## Why the prompts are shaped this way

Three failure modes turned up repeatedly and each prompt is built to block them:

**Fabricated citations.** Assistants produce DOIs, ISBNs and page numbers that
look exactly right and do not exist. Every prompt says: omit rather than guess,
and mark anything unverified.

**Flattened uncertainty.** Assistants prefer a tidy resolved story. For a site
whose central distinction is between resolved, debated, and open, that is the
worst possible bias. Every prompt asks for the disagreement explicitly.

**Confident nonsense about what things mean.** Gödel does not show minds beat
machines; CAP is not "pick two of three"; the Twin Paradox is not caused by
acceleration. Popular explanations are wrong in consistent, well-known ways, and
the prompts ask for those errors to be named and corrected rather than repeated.

## Files

| Prompt | Use it when |
| --- | --- |
| [`01-discover-gaps.md`](01-discover-gaps.md) | Deciding what to add next |
| [`02-research-a-paradox.md`](02-research-a-paradox.md) | You have chosen a subject |
| [`03-prepare-content.md`](03-prepare-content.md) | Turning research into a file |
| [`04-review-content.md`](04-review-content.md) | Before publishing anything |
| [`05-find-references.md`](05-find-references.md) | An entry is thin on sources |
| [`06-check-taxonomy.md`](06-check-taxonomy.md) | Periodic classification audit |
