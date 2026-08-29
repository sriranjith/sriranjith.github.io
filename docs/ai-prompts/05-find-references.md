# Prompt: find references for an entry

Use when `npm run validate` reports an entry with no primary source, or when the
bibliography is thin.

References are a core part of this product. A weak reference list is a defect,
not a cosmetic issue.

---

## Prompt

> Find references for **[PARADOX NAME]** for a reference collection of
> paradoxes.
>
> The entry currently cites:
>
> ```
> [paste the existing `references:` block, or "nothing"]
> ```
>
> ### What I need
>
> **1. The primary source.** The original text where this was first stated.
> Give author, exact title, year, publication venue, and the precise location —
> chapter, section, page, theorem number, letter. If the original is lost and
> survives only through a later commentator, say so and name the commentator.
> If the attribution is traditional rather than documented, say that explicitly.
>
> **2. The canonical modern treatment.** The paper or book that established how
> the field now discusses it.
>
> **3. The best book-length treatment**, if one exists — noting whether it is
> popular or scholarly.
>
> **4. An encyclopedia entry.** Stanford Encyclopedia of Philosophy, Internet
> Encyclopedia of Philosophy, or a field-standard reference work.
>
> **5. Two or three key papers** covering the major positions, including ones
> that disagree with each other.
>
> **6. Accessible further reading** for a reader continuing on their own.
>
> ### Format
>
> Output ready-to-save `content/sources/<id>.yml` files:
>
> ```yaml
> id: author-year-shorttitle
> type: primary-source | book | paper | academic-reference | encyclopedia | further-reading
> title: ""
> authors: []
> year: 
> publisher: ""      # books
> journal: ""        # papers
> volume: ""
> doi: ""            # bare, no https://doi.org/ prefix
> isbn: ""
> url: ""
> notes: >-
>   Why this source matters and what it is good for. Not a summary of the work.
> ```
>
> Then give the `references:` block to paste into the paradox file, with a
> `role`, a `locator` where useful, and a `note` on each.
>
> ### Rules — read these twice
>
> - **Never invent an identifier.** Do not produce a DOI, ISBN, page number,
>   volume or URL you are not confident is correct. Omit the field. A missing
>   DOI is a warning; a fabricated one is a lie the site will repeat.
> - **Mark every uncertain field.** Write `# UNVERIFIED` beside anything you are
>   guessing at, so I know exactly what to check.
> - **Prefer stable links.** DOIs over publisher URLs, publisher URLs over blogs.
>   For out-of-copyright primary sources, archive.org is often the best link.
> - **Do not pad.** Six real references beat twelve where four are invented.
> - **Say what you could not find.** If there is no accessible primary source,
>   say so rather than substituting something adjacent.
>
> ### Finally
>
> List every field I must verify before publishing, in priority order.

---

## After running it

Verify **every** DOI resolves and **every** ISBN matches the stated edition
before committing. This is not optional — it is the one step the whole citation
system depends on.

Then:

```bash
npm run validate    # catches malformed DOIs and unknown source ids
```
