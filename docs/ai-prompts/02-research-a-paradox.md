# Prompt: research a paradox

Use once you have chosen a subject and before writing anything. The output is
research notes for a human to check — not content for the site.

---

## Prompt

> You are researching **[PARADOX NAME]** for a reference collection of
> paradoxes. Produce **research notes**, not finished prose. I will write the
> entry myself from your notes.
>
> Read `docs/CONTENT_GUIDE.md` first so you know what the entry will eventually
> need.
>
> ### The overriding rule
>
> **Separate what is established from what is disputed, and separate both from
> what is repeated without evidence.** Mark every substantive claim as one of:
>
> - `[ESTABLISHED]` — not seriously disputed by anyone qualified
> - `[DISPUTED]` — genuine expert disagreement; say who holds what
> - `[TRADITION]` — commonly repeated, poorly documented, may be apocryphal
> - `[UNCERTAIN]` — you are not confident and I should check
>
> Getting this wrong is worse than giving me less. A large number of famous
> origin stories in this field are `[TRADITION]` presented everywhere as fact.
>
> ### Cover these
>
> **1. Canonical formulation.** State the paradox as precisely as it can be
> stated. If there are materially different formulations, give each and say
> which is standard.
>
> **2. Origin.** Who, when, where, in what document. Distinguish:
> - who first *stated* it
> - who first *named* it
> - who made it *famous*
>
> These are frequently three different people, and the popular attribution is
> often to the third.
>
> **3. Primary source.** Exact title, date, and where the passage sits — book,
> chapter, section, page, theorem number. If the original is lost and survives
> only through a later commentator, say so explicitly and name the commentator.
>
> **4. Transmission.** How the idea travelled, who reformulated it, what it
> influenced.
>
> **5. Resolution and current status.** Is it resolved, explained, debated,
> dissolved, or open? If there are competing positions, present each at its
> strongest, with its main proponent and its main weakness. **Do not pick a
> winner where the field has not.**
>
> **6. Common misunderstandings.** This section is important. What do popular
> explanations get wrong? Be specific and correct each one. If there is a
> standard misquotation or a standard overreach, name it.
>
> **7. Worked examples.** Concrete cases with real numbers, real data, or real
> historical instances. If a well-known dataset illustrates it, give the actual
> figures.
>
> **8. The technical statement.** The formal version, for the Deep Dive layer:
> the proof sketch, the formalism, or the precise conditions.
>
> **9. Explaining it to a child.** What is the best concrete story, image or
> game for a ten-year-old? What is the most common *unhelpful* simplification —
> the one that makes it feel understood while making it wrong?
>
> **10. Modern relevance.** Where does it genuinely show up today? Be strict:
> omit strained connections rather than reaching. One real application beats
> four vague ones.
>
> **11. Related paradoxes.** Which others is it genuinely connected to, and how?
> Name the specific intellectual relationship — "both are about infinity" is
> weak; "Gödel's construction is this sentence with 'true' replaced by
> 'provable'" is useful.
>
> **12. References.** Primary sources, key papers, the best book-length
> treatment, and a good encyclopedia entry. For each give author, year, title,
> venue, and DOI/ISBN **only if you are confident it is correct**. Write
> `DOI: unverified` rather than guessing. A fabricated identifier is the single
> worst thing you can hand me.
>
> ### Finally
>
> List the three things you are least confident about, so I know where to check
> first.

---

## After running it

Verify before you write anything:

- Open the primary source. Confirm the passage says what the notes claim.
- Check every DOI resolves and every ISBN matches the stated edition.
- For anything marked `[TRADITION]`, decide whether the entry will repeat it —
  and if so, label it as tradition in the text.

Then go to `03-prepare-content.md`.
