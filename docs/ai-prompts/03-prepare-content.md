# Prompt: turn research into a content file

Use after research notes have been checked by a human. Produces a draft file in
the site's schema.

---

## Prompt

> Turn the approved research below into a content file for this site.
>
> ### Read first — non-negotiable
>
> 1. `docs/CONTENT_GUIDE.md` — the full schema and editorial standard.
> 2. `content/paradoxes/monty-hall-problem.md` — the reference implementation.
>    Match its depth, its voice, and its structure.
> 3. `content/taxonomy/*.yml` — you may only use ids that exist in these files.
>
> ### Output
>
> One complete file, ready to save as `content/paradoxes/<slug>.md`.
>
> ### The layered structure is the whole point
>
> The same page serves a ten-year-old and a specialist. Write each section for
> its own audience and do not let them bleed:
>
> - **`## Discover`** — a story, image or puzzle needing zero background. No
>   jargon, no notation, no hedging. End on the surprise, not the resolution.
>   Two to five short paragraphs. If a ten-year-old would stop reading, rewrite it.
> - **`## Understand`** — what is actually going on, in plain language. This must
>   be **complete and correct on its own**, because most readers stop here. Still
>   no notation. If you need a caveat for accuracy, write the caveat in ordinary
>   words.
> - **`## Examples`** — worked cases with real numbers. Tables are good.
> - **`## Explore`** — competing interpretations, hidden assumptions, the shape
>   of the disagreement. Name who holds which position.
> - **`## History`** — origin and transmission. Mark tradition as tradition.
> - **`## Why It Matters`** — what concretely changed. Not "profound
>   implications". What became possible, what became impossible, who changed
>   their mind.
> - **`## Modern Relevance`** — only real connections. Omit rather than strain.
> - **`## Deep Dive`** — the technical treatment. Required if difficulty is
>   `advanced` or `expert`. Use `$inline$` and `$$display$$` for maths.
>
> Only these `##` headings are recognised. Anything else is dropped by the build
> and flagged by validation. Use `###` for sub-headings inside a section.
>
> ### Front matter rules
>
> - `slug` must equal the filename.
> - `summary` must be 40–320 characters.
> - `year` is a single signed integer and must fall inside the `era` bounds in
>   `content/taxonomy/eras.yml`. Negative is BCE.
> - Every value in `domains`, `types`, `nature`, `difficulty`, `status`, `era`
>   must be an existing taxonomy id.
> - **`nature` is the field to think hardest about.** A theorem proving no
>   solution exists is `impossibility-result`, not `logical-contradiction`. A
>   surprising-but-correct answer is `counterintuitive-result` or `veridical`.
>   Genuine expert disagreement is `open-problem`. If you find yourself wanting
>   to write "this is not really a paradox" in the body, you have the wrong
>   `nature` — fix the field.
> - `relationships` may only point at slugs that exist in `content/paradoxes/`.
>   **Write a `note` on every relationship** explaining the actual intellectual
>   link. The note is the content; the edge alone is not.
> - `references` may only point at ids that exist in `content/sources/`. If a
>   source you need is missing, output the `content/sources/<id>.yml` file too.
> - Set `publishing.state: draft`. I decide when it publishes.
>
> ### YAML trap
>
> Any value containing a colon followed by a space **must** be a `>-` folded
> block or quoted, or the file will not parse. This is the most common way these
> files break.
>
> ### Writing standards
>
> - Direct and plain. Short sentences carry hard ideas better than long ones.
> - Real numbers, not vague quantities.
> - Name the person and year on first mention of any claim or objection.
> - Delete filler: "It is interesting to note that", "Perhaps surprisingly",
>   "In today's world". If a sentence survives its own deletion, delete it.
> - Never simplify into something false. An honest hedge beats a clean error.
> - **Never invent a citation, DOI, ISBN, URL or page number.** Omit the field.

---

## After running it

```bash
npm run validate     # fix every error, read every warning
npm run dev          # look at the actual rendered page
npm run admin        # publish from the editor once you are happy
```

Then run `04-review-content.md` **before** publishing.
