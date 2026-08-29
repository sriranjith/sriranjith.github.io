# Content guide

Everything on this site is a file in `content/`. There is no database and no CMS
account. If you can edit a text file, you can maintain this site.

```
content/
  paradoxes/<slug>.md      one file per paradox — the main thing
  people/<id>.yml          reusable, cited from many paradoxes
  sources/<id>.yml         reusable bibliography
  paths/<id>.yml           curated learning paths
  taxonomy/*.yml           the controlled vocabularies
```

**The filename is the URL.** `content/paradoxes/liar-paradox.md` becomes
`/paradox/liar-paradox/`. The `slug` field inside must match the filename;
validation enforces this so URLs never silently break.

---

## The one rule that matters

> Every paradox must be understandable by a curious ten-year-old at the top of
> the page, and still worth an expert's time at the bottom.

Not two versions. One page, read to different depths. A reader stops when they
have had enough, and everything above where they stopped was true.

**Never simplify into something false.** If a claim needs a caveat to be
accurate, either include the caveat in plain language or leave the claim out.
"Roughly" and "in most cases" are cheap and honest.

---

## Anatomy of a paradox file

A paradox is YAML front matter (the metadata) followed by Markdown (the content),
split into sections by `## ` headings.

Read [`content/paradoxes/monty-hall-problem.md`](../content/paradoxes/monty-hall-problem.md)
first. It is the reference implementation. Copying its shape is the fastest way
to get a new entry right.

### Front matter fields

| Field | Required | Notes |
| --- | --- | --- |
| `title` | ✅ | The name a reader would recognise. |
| `slug` | ✅ | Must equal the filename. Lowercase, hyphenated. Never change it after publishing. |
| `alternateNames` | | Other names it goes by. Fed into search. |
| `summary` | ✅ | 40–320 characters. Describes the entry, for search results and meta tags. Write it last. |
| `hook` | (to publish) | Up to 150 characters. The open question a card shows. See below. |
| `era` | ✅ | One id from `taxonomy/eras.yml`. |
| `date` | ✅ | Free text for humans: `c. 450 BCE`, `1931`, `1975 (posed), 1990 (famous)`. |
| `year` | ✅ | A single signed integer for sorting and the timeline. Negative is BCE. Must fall inside `era`. |
| `origin` | | One or two sentences on where it came from. |
| `people` | | Ids from `content/people/`. |
| `domains` | ✅ | One or more ids from `taxonomy/domains.yml`. |
| `types` | ✅ | One or more ids from `taxonomy/types.yml`. |
| `nature` | ✅ | One id from `taxonomy/natures.yml`. **Think hardest about this one.** |
| `difficulty` | ✅ | How deep the deepest layer goes — *not* how hard the entry point is. |
| `status` | ✅ | One id from `taxonomy/statuses.yml`. |
| `renown` | | One id from `taxonomy/renown.yml`. Decides what leads a listing. Defaults to `known`. |
| `interactive` | | A component id from `src/lib/interactive.js`, if one fits. |
| `concepts` | | Free-text ideas. Used for search and to find neighbours. |
| `relationships` | | See below. |
| `references` | ✅ (to publish) | Ids from `content/sources/`. |
| `furtherReading` | | External links with a title. |
| `publishing` | ✅ | `state` is `draft`, `review` or `published`, plus `created` and `updated` dates. |

### `hook` — the only thing most people will ever read

Every card, every listing row and the top of the entry itself shows the hook.
It is the sentence that decides whether anyone reads the other four thousand
words, so it gets written with more care per character than anything else here.

A hook states the gap and stops. It does not resolve it, and it does not
describe the entry from outside.

| | |
| --- | --- |
| ✅ | *"Three doors, one car. The host opens a losing door and offers you the swap. Does it make any difference whether you take it?"* |
| ❌ | *"An explanation of the famous Monty Hall probability puzzle."* — describes the entry instead of opening anything. |
| ❌ | *"Switching doors doubles your chances of winning the car."* — answers it. Nothing left to find out. |
| ❌ | *"You won't BELIEVE what happens with these three doors."* — promises a feeling rather than a question. The gap has to be real. |

Concrete beats abstract. "A hotel with infinitely many rooms is completely full,
and one more guest arrives" works; "a puzzle about the nature of infinite sets"
does not. Use the reader's own words — no notation, no jargon, no field terms.

### `renown` — what a first-time visitor already recognises

This ranks familiarity, not importance. Several of the most consequential
results here are `specialist`, and a couple of household names are minor.

It exists so that a listing can lead with something the reader has met before.
Recognition is what earns the second click; a page of unfamiliar names gets
abandoned. Be honest about it — marking everything `landmark` destroys the
ordering for everything else.

### `nature` — the field this site exists for

Most places treat every surprising thing as "a paradox". This site does not.
Choosing this field correctly is the main editorial job.

- **`logical-contradiction`** — sound-looking premises genuinely yield P and not-P. Something must be given up. *Russell's paradox. The Liar.*
- **`apparent-contradiction`** — dissolves once you name a hidden assumption. *The Twin Paradox. The Barber.*
- **`counterintuitive-result`** — the reasoning is fine and the answer is just surprising. *The Birthday Problem.*
- **`veridical`** — Quine's term: the absurd conclusion is demonstrably true. *Monty Hall.*
- **`thought-experiment`** — a probe, not a proof. Its value is the disagreement it exposes. *The Ship of Theseus.*
- **`impossibility-result`** — a theorem saying no solution exists. *Arrow. FLP. The Halting Problem.*
- **`open-problem`** — experts genuinely disagree today. *Sleeping Beauty. Fermi.*

If you are tempted to write "this is not really a paradox" in the body, that is a
signal you have the wrong `nature`. Fix the field instead.

### Relationships

Write each connection **once**, on whichever side reads more naturally. The
reverse link is generated automatically from the `inverse` in
`taxonomy/relationship-kinds.yml`.

```yaml
relationships:
  - kind: influences
    to: godels-incompleteness
    note: Gödel's construction is the Liar sentence made arithmetical.
```

The `note` is the best part. "Related to X" tells a reader nothing; *why* they
are related is the actual content. Write notes on the important edges.

### References

References are structured records in `content/sources/`, reused across entries —
not strings pasted into each file.

```yaml
references:
  - source: godel-1931
    role: primary-source
    locator: "Theorem VI"
    note: The original proof.
```

A published paradox must cite at least one source. Where the original
formulation exists and is identifiable, cite it with `role: primary-source`.

---

## The content sections

Each `## ` heading is one layer. Only these headings are recognised — anything
else is flagged by validation rather than silently dropped. Use `###` for
sub-headings inside a section.

| Heading | Required | What belongs here |
| --- | --- | --- |
| `## Discover` | ✅ | The hook. A story, image or puzzle needing zero background. End on the surprise, not the resolution. 2–5 short paragraphs. |
| `## Understand` | ✅ | What is actually going on, in plain language. No notation. **Most readers stop here, so this must be complete on its own.** |
| `## Examples` | | Worked cases, tables, analogies. Optional, but the biggest single comprehension win. |
| `## Explore` | ✅ | Competing interpretations, hidden assumptions, the shape of the disagreement. Name who holds which view. |
| `## History` | ✅ | Origin and transmission. Separate what is documented from what is legend. |
| `## Why It Matters` | ✅ | What actually changed because of this. Be concrete; avoid "profound implications". |
| `## Modern Relevance` | | Where it shows up today. Omit rather than strain for a connection. |
| `## Deep Dive` | Conditional | The technical treatment. **Required when `difficulty` is `advanced` or `expert`.** |

Maths uses `$inline$` and `$$display$$`.

---

## Writing standards

**Voice.** Direct and plain. Second person for the reader. Short sentences carry
hard ideas better than long ones.

**Accuracy over tidiness.** Where scholarship is uncertain, say so: "traditionally
attributed to", "the earliest surviving statement", "commonly repeated but
poorly documented". A hedge that is true beats a clean claim that is not.

**Numbers.** Give the real figure. `2/3`, `99/100`, `23 people`, `50.7%`.

**No filler.** Delete "It is interesting to note that", "Perhaps surprisingly",
"In today's fast-paced world". If a sentence survives its own deletion, delete it.

**Attribution.** Name the person and the year on first mention of any claim,
result or objection.

---

## Adding a paradox

```bash
npm run new -- "Newcomb's Paradox"   # scaffolds a valid draft file
npm run admin                        # edit it in a browser, with live validation
npm run validate                     # or check from the terminal
npm run dev                          # preview the real page
```

Set `publishing.state` to `published` when it is ready. Commit. CI validates and
deploys. Adding the 1st paradox and the 500th are the same five commands.

Drafts are never built into the public site, so an unfinished entry can sit in
the repository indefinitely without any risk of leaking.

---

## Validation

`npm run validate` is the contract. It catches, among other things:

- missing required sections, and sections too thin to be useful
- a `## Heading` that does not match any known layer (usually a typo)
- taxonomy values that do not exist, **with a "did you mean…" suggestion**
- relationships pointing at paradoxes that do not exist
- a published page linking to an unpublished one
- duplicate slugs, and near-identical titles
- `year` that contradicts `era`
- `advanced`/`expert` entries with no Deep Dive
- published entries with no references, or with no primary source
- sources and people that nothing cites

Errors block the build. Warnings do not — they are the to-do list, and
`npm run health` ranks them.
