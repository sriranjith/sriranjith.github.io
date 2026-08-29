# Prompt: audit the classification

Run periodically — roughly every 20 new entries. Classification drifts quietly:
each entry is classified sensibly on its own, and the set slowly becomes
inconsistent.

The `nature` axis is the one that matters most, because it is the site's central
editorial claim.

---

## Prompt

> Audit the classification of the collection in `content/paradoxes/`.
>
> ### Read first
>
> - `content/taxonomy/*.yml` — the controlled vocabularies and what each term
>   means
> - the front matter of every entry in `content/paradoxes/`
> - `docs/CONTENT_GUIDE.md`, especially the section on `nature`
>
> ### 1. `nature` — audit this hardest
>
> This site's central claim is that "paradox" covers genuinely different things
> and that the difference matters. Check every entry:
>
> - **`logical-contradiction`** — do sound-looking premises really yield P and
>   not-P? Or does it merely feel contradictory?
> - **`apparent-contradiction`** — does it dissolve once a hidden assumption is
>   named? If it does not dissolve, it is misclassified.
> - **`counterintuitive-result`** / **`veridical`** — is the reasoning actually
>   fine and the answer simply surprising?
> - **`impossibility-result`** — is there a real theorem? Impossibility results
>   are frequently mislabelled as contradictions.
> - **`open-problem`** — do experts genuinely disagree *today*? Not "was once
>   debated".
> - **`thought-experiment`** — a probe rather than a proof.
>
> **List every entry you would reclassify, with the reason.** Flag any entry
> whose body text argues for a different `nature` than its front matter declares.
>
> ### 2. `status` against `nature`
>
> These must be consistent. An `open-problem` with status `resolved` is a
> contradiction in the metadata. A `logical-contradiction` marked `resolved`
> should point at what resolved it.
>
> ### 3. `difficulty` against actual depth
>
> - Entries marked `advanced` or `expert` must have a substantive `## Deep Dive`.
> - Entries marked `beginner` must be genuinely accessible — check the Discover
>   and Understand sections, not the subject matter.
> - Is the distribution sane? A collection with three beginner entries is not
>   usable by young readers.
>
> ### 4. `domains` and `types`
>
> - Are any entries under-classified — a genuinely cross-disciplinary paradox
>   tagged with one domain?
> - Are any over-classified, with a domain that is a stretch?
> - Are similar paradoxes classified consistently with each other?
> - Which `types` are unused, and does that indicate a coverage gap or a
>   vocabulary that needs pruning?
>
> ### 5. `era` and `year`
>
> Does `year` reflect the right event — first statement, naming, or fame? Where
> those differ the entry should say so in `date`. Flag any entry where the
> choice looks arbitrary.
>
> ### 6. The vocabularies themselves
>
> - Is any term ambiguous enough that entries land under it inconsistently?
> - Is any term doing too much work and worth splitting?
> - Is any distinction not earning its keep?
> - Is anything missing that entries are being forced into the wrong term for?
>
> ### 7. Relationships
>
> - Which pairs are obviously connected and not linked?
> - Are `kind` values used consistently — is `influences` reserved for real
>   documented influence, or used loosely for "these are similar"?
> - Are any `note` fields empty of content ("Related to X") where they should
>   explain the actual link?
>
> ### Output
>
> A table of proposed changes: entry · field · current value · proposed value ·
> reason. Ordered by how wrong the current value is.
>
> Then: any taxonomy term you would add, remove, split or rename, and what it
> would cost.

---

## After running it

Taxonomy changes are content changes — edit `content/taxonomy/*.yml`, no code
involved. But **renaming or removing a term id breaks every entry using it**, so:

```bash
npm run validate    # will list every entry pointing at a now-missing term
npm run health      # coverage before and after, to see the effect
```

Renaming a term id also changes its URL. Prefer editing a `label` over changing
an `id` once a term has been published.
