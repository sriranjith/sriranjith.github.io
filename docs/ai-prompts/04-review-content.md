# Prompt: review content before publishing

Run this on every entry before setting `publishing.state: published`. It is the
last gate before a claim becomes something the site is asserting.

Ask for criticism, not approval. An assistant asked "is this good?" will say
yes.

---

## Prompt

> Review the paradox entry below as a **hostile but fair editor**. Your job is
> to find what is wrong with it, not to praise it. If you have no criticisms you
> have not looked hard enough.
>
> Read `docs/CONTENT_GUIDE.md` first for the editorial standard, and
> `content/paradoxes/monty-hall-problem.md` for the target quality.
>
> Report findings in these categories, in this order.
>
> ### 1. Factual errors
>
> Anything false, imprecise, or stated more confidently than the evidence
> supports. Quote the sentence and state the correction.
>
> ### 2. Unsupported claims
>
> Assertions with no citation that need one. Flag especially:
> - attributions ("X first proposed…") — these are wrong surprisingly often
> - dates and priority claims
> - "most philosophers think…" / "it is generally accepted…" — who, and where?
> - anecdotes presented as history
>
> ### 3. Misrepresented disagreement
>
> **The most important category.** Does the entry present a contested question
> as settled, or a settled one as contested? If competing positions exist, is
> each stated at its strongest, or is one built as a straw man? Does the
> `status` field match reality — `resolved`, `debated`, `open`?
>
> ### 4. Misclassification
>
> Check `nature` hardest. Is an impossibility theorem labelled a logical
> contradiction? Is a merely counterintuitive result labelled a paradox proper?
> Is a genuinely open question labelled resolved? Also check `difficulty`
> against the actual depth of the Deep Dive, and whether `domains` and `types`
> are complete.
>
> ### 5. Explanations that do not work
>
> - Does `## Discover` actually work for a ten-year-old? Read it as one.
>   Where does it first lose them?
> - Is `## Understand` complete and correct **on its own**, for a reader who
>   stops there?
> - Does any simplification cross into being wrong?
> - Is jargon used before it is defined?
> - Is `## Deep Dive` genuinely technical, or just the same explanation with
>   more words?
>
> ### 6. Common misconceptions left uncorrected
>
> Popular explanations of famous paradoxes are wrong in consistent ways. Does
> this entry repeat any of them, or fail to correct one a reader will arrive
> with? Examples of the shape: Gödel does not show minds beat machines; CAP is
> not "pick two of three"; the Twin Paradox is not caused by acceleration; the
> Barber is not a real paradox.
>
> ### 7. Missing references
>
> Which claims need a source and lack one? Is there a primary source? Does the
> bibliography include the standard book-length treatment?
>
> ### 8. Missing or wrong relationships
>
> Which other entries in `content/paradoxes/` should this link to and does not?
> Are the `note` fields substantive, or do they just restate that the two are
> related?
>
> ### 9. Writing
>
> Filler, hedging, padding, throat-clearing. Sentences that could be deleted
> with no loss. Flag "It is interesting to note that", "Perhaps surprisingly",
> "In today's world".
>
> ### Finally
>
> Give a verdict: **publish**, **publish after fixes** (list them), or
> **needs more research** (say what is missing).
>
> Then state the one change that would most improve the entry.

---

## Reviewing the whole collection

To audit rather than check one entry, replace the opening with:

> Review the collection in `content/paradoxes/` for consistency. Report:
> conflicting claims between entries; the same idea explained two different
> ways; inconsistent classification of similar paradoxes; entries that should be
> linked and are not; duplicate coverage under different names; and citation
> style that varies between entries.

---

## After running it

Not every finding is right — assistants also invent objections. Verify
corrections against sources before applying them, exactly as you would verify
the original claims.
