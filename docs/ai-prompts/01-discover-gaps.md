# Prompt: discover missing paradoxes

Use when deciding what to add next. Run `npm run health` first and paste the
coverage tables, or let a file-reading assistant inspect the repository.

---

## Prompt

> You are helping curate a reference collection of paradoxes. Your job right now
> is **gap analysis**: find significant omissions, not to write anything.
>
> ### Read first
>
> - `content/paradoxes/` — every entry currently in the collection. Read the
>   front matter of each; you need the titles, domains, eras and natures.
> - `content/taxonomy/` — the controlled vocabularies I classify against.
> - `docs/CONTENT_GUIDE.md` — the editorial standard, especially the section on
>   what `nature` means.
>
> Then produce a coverage assessment across:
>
> - **domain** (philosophy, logic, mathematics, probability, statistics,
>   physics, astronomy, biology, psychology, economics, society, computer
>   science, AI)
> - **era** (ancient, medieval, early modern, 19th century, 20th century,
>   contemporary)
> - **nature** (logical contradiction, apparent contradiction, counterintuitive
>   result, veridical, thought experiment, impossibility result, open problem)
> - **intellectual tradition** — I am aware the collection is heavily
>   Western-European. Say so plainly, and treat Indian, Chinese, Islamic and
>   other traditions as a first-class gap rather than an afterthought. Only
>   propose entries you can actually source.
>
> ### Then propose 10 to 15 candidates
>
> For each, give me exactly:
>
> 1. **Name** and any alternate names.
> 2. **One sentence** stating the paradox.
> 3. **Proposed classification**: domain(s), type(s), era, approximate year,
>    difficulty, nature, status.
> 4. **Why it belongs** — what it changed, who it influenced, why it is more
>    than a curiosity. Be concrete. "It is interesting" is not an argument.
> 5. **Which existing entries it would connect to**, using the exact slugs from
>    `content/paradoxes/`, and what the connection is.
> 6. **Two or three real references**, ideally including the primary source.
>    Give what you are confident of and say explicitly which details you are
>    unsure about.
> 7. **Honest classification note** — is this a genuine paradox, a
>    counterintuitive result, a thought experiment, an impossibility theorem, or
>    something popularly called a paradox that is not one? If it is the last,
>    say so and say whether it is still worth including for that reason.
>
> ### Rules
>
> - **No duplicates.** Check every proposal against the existing slugs *and*
>   against the `alternateNames` fields. Many paradoxes travel under several
>   names.
> - **Prefer significance over novelty.** A well-documented paradox that
>   redirected a field beats an obscure one with a catchy name.
> - **Distinguish paradoxes from fallacies and brainteasers.** A logical fallacy
>   is an error in reasoning; a paradox is valid-looking reasoning reaching an
>   unacceptable conclusion. Do not propose fallacies.
> - **Never invent a citation.** If you are not confident of a DOI, ISBN, page
>   number or year, omit it and say so. A missing field is fine; a fabricated
>   one is not.
> - **Flag your own uncertainty.** If you are unsure whether something is
>   genuinely significant or merely internet-famous, say which.
>
> ### Finally
>
> Rank the candidates by how much they would improve the collection, and say
> which single one you would add first and why.

---

## After running it

Do not batch-accept. For each candidate you like:

1. Verify the primary source exists and says what the assistant claims.
2. Check the slug is not already an `alternateNames` entry somewhere.
3. `npm run new -- "The Name"` to scaffold it.
4. Move on to `02-research-a-paradox.md`.
