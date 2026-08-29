# 0001 — Content lives in Git as Markdown and YAML

**Status:** accepted · 2026-08-29

## Context

The knowledge base needs to grow from dozens to hundreds of entries, maintained
by one person over years. The realistic failure mode is not that the software
breaks — it is that maintaining it becomes tedious enough to stop.

## Decision

`content/` is the source of truth: one Markdown file per paradox, YAML files for
people, sources, learning paths and taxonomy. No database, no CMS, no
content API.

## Why

**Diffs are reviewable.** A content change shows up as a text diff. Prose edits
can be reviewed like code, and reverting a bad edit is `git revert`.

**No service to run.** No backups, no migrations, no uptime, no bill, no
end-of-life announcement.

**Any tool works.** A text editor, the admin UI, the GitHub web editor, or an
AI assistant that reads and writes files. Nothing is locked behind a proprietary
schema.

**Migration is trivial.** If this stack is ever abandoned, the content is
already in the most portable formats there are.

## Trade-offs accepted

- **No concurrent editing.** With one maintainer this is not a cost. With five
  it would be, and it would be solved with branches rather than software.
- **Non-technical editors need the admin UI.** Which is why one exists.
- **Every build reads every file.** At 500 files this is roughly 50ms.

## Rejected

**A headless CMS** (Contentful, Sanity, Strapi). Adds an account, an API key, a
network dependency at build time, a vendor, and a bill — to manage files Git
already versions better. The editorial workflow gained is one this project's
admin UI provides locally.

**A database.** Migrations and backups for a few hundred documents that are
never queried at runtime.
