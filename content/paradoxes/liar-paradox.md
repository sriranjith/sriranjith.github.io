---
title: The Liar Paradox
slug: liar-paradox
alternateNames:
  - The Liar
  - Epimenides Paradox
  - The Cretan Paradox
  - Pseudomenos
summary: >-
  "This sentence is false." If it is true then it is false, and if it is false
  then it is true. Two and a half thousand years later there is still no agreed
  answer — only competing bills to pay, in logic, in language, or in common
  sense.
era: ancient
date: "c. 600 BCE (the Epimenides line); c. 350 BCE (Eubulides' paradox)"
year: -600
origin: >-
  Traditionally traced to Epimenides of Knossos, who is said to have written
  "Cretans are always liars" — but that sentence is not paradoxical. The paradox
  proper is credited by Diogenes Laertius to the Megarian logician Eubulides of
  Miletus, a contemporary of Aristotle.
people:
  - eubulides-of-miletus
  - epimenides
  - chrysippus
  - diogenes-laertius
  - alfred-tarski
  - saul-kripke
  - graham-priest
domains:
  - logic
  - philosophy
  - mathematics
types:
  - self-reference
  - knowledge
nature: logical-contradiction
difficulty: advanced
status: debated
concepts:
  - Self-reference
  - The T-schema
  - Semantic closure
  - Truth-value gaps and gluts
  - Object language and metalanguage
  - Fixed points
  - Paraconsistency
relationships:
  - kind: influences
    to: godels-incompleteness
    note: Gödel's undecidable sentence is the Liar with "true" swapped for "provable". Gödel said as much himself, and the swap is what turns a contradiction into a theorem.
  - kind: related
    to: russells-paradox
    note: Both are self-reference producing a genuine contradiction. Russell's is about which sets exist; the Liar is about which sentences have truth values. Russell arrived at his after studying this one.
  - kind: related
    to: berrys-paradox
    note: The same trouble in the vocabulary of definition rather than truth, and the reason Tarski's result about truth has a twin about definability.
  - kind: contrasts-with
    to: barber-paradox
    note: The Barber looks identical and is not. It shows only that no such barber exists, which costs nothing. Nobody can respond to the Liar by concluding that the sentence does not exist — it is written down right there.
  - kind: related
    to: halting-problem
    note: >-
      Turing's diagonal machine is the Liar made mechanical: a program that
      halts exactly when it is told it will not.
  - kind: related
    to: sorites-paradox
    note: Ancient sources credit both puzzles to the same man, Eubulides of Miletus, in the same list.
references:
  - source: diogenes-laertius-lives
    role: primary-source
    locator: "II.108 (Eubulides); VII.196–197 (Chrysippus' lost works on the Liar)"
    note: The earliest surviving attribution of the paradox to anybody.
  - source: tarski-1944-semantic-conception
    role: primary-source
    note: The hierarchy solution, in Tarski's own accessible presentation of results he first published in 1933.
  - source: kripke-1975-outline-theory-truth
    role: paper
    note: The fixed-point construction, and the objection that sank purely syntactic versions of the hierarchy.
  - source: priest-in-contradiction
    role: book
    note: The dialetheist case — that the Liar is simply both true and false, and that the price is worth paying.
  - source: gupta-belnap-revision-theory
    role: book
    note: Truth as a circular concept whose extension is revised rather than fixed.
  - source: barwise-etchemendy-the-liar
    role: book
    note: A contextual treatment, using situation semantics and non-well-founded sets.
  - source: kneale-development-of-logic
    role: academic-reference
    note: The standard history of the ancient and medieval careers of the paradox.
  - source: sep-liar-paradox
    role: encyclopedia
    note: The best map of the competing solutions and the tests each must survive.
  - source: sep-dialetheism
    role: encyclopedia
furtherReading:
  - title: Self-Reference — Stanford Encyclopedia of Philosophy
    url: https://plato.stanford.edu/entries/self-reference/
    note: Thomas Bolander on the general phenomenon, including Yablo's sequence and the diagonal lemma.
  - title: Insolubles — Stanford Encyclopedia of Philosophy
    url: https://plato.stanford.edu/entries/insolubles/
    note: The medieval treatments, which were far more sophisticated than the modern era gave them credit for.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Write this on a piece of paper:

> **This sentence is false.**

Now decide whether you have written something true or something false. There are
only two options, so it should be easy.

Start with true. If the sentence is true, then what it says is right — and what
it says is that it is false. So it is false. But we started by assuming it was
true, and now we have got that it is false. That cannot be.

Fine. Try the other one. If the sentence is false, then what it says is wrong.
What it says is "this sentence is false". If that is wrong, then the sentence is
*not* false — which means it is true. We started by assuming false and ended up
with true.

Go round again if you like. It does the same thing every time, forever, like a
light switch that flips itself the moment you let go.

Most puzzles have a hidden trick, and when someone shows it to you the puzzle
stops being a puzzle. This one has been sitting on the desk for two and a half
thousand years. The best logicians who ever lived have taken a run at it. They
all agree on the same one thing: something we believe about language has to be
given up.

They do not agree about what.

## Understand

The Liar looks like a word game. It is not. It is a demonstration that three
things we all believe cannot all be true at once.

Here they are.

**1. Every statement is either true or false.** Not both, not neither. This is
the principle of bivalence, and it feels less like an assumption than like part
of what "statement" means.

**2. Calling a statement true amounts to saying what the statement says.** If
someone tells you "'snow is white' is true", they have told you that snow is
white. Nothing more, nothing less. Say it the other way and it still holds: if
snow is white, then "snow is white" is true. This principle — that quoting a
sentence and calling it true gets you back to the sentence — is what makes the
word "true" useful at all. Without it, "true" would be an unrelated word that
happened to be spelled that way.

**3. Sentences can talk about themselves.** English has no rule against it. "This
sentence has five words" is perfectly grammatical and, as it happens, true.
"This sentence is written in Japanese" is grammatical and false. Neither one
causes any trouble.

Each of the three looks unarguable. Put them together and you get a sentence that
is true if and only if it is false, which is a flat contradiction.

That is the whole paradox. Everything else is the argument about which of the
three to sacrifice, and how much of the rest of language you break in the
process.

### Why the usual quick fixes do not work

**"It's meaningless, so it isn't a statement."** Tempting, and it was a popular
move in the twentieth century. But you have to say *why*. Self-reference cannot
be the reason: "this sentence has five words" is self-referential and perfectly
meaningful. And ruling out meaningless sentences by decree gives you no way to
tell in advance which sentences those are — which turns out to matter enormously,
for a reason given below.

**"It's neither true nor false — it falls in a gap."** This is a serious position
and a lot of good work has been built on it. But now look at what happens when
you say it out loud. If the sentence is neither true nor false, then in
particular it is **not true**. Now consider this sentence:

> This sentence is not true.

If it falls in the gap, then it is not true — which is exactly what it says, so
it is true after all. The gap has not removed the contradiction; it has moved it
one step along. This is called the **strengthened Liar**, and it is the test
every proposed solution has to pass.

**"No such sentence really exists."** This works for some paradoxes and not for
this one. The barber who shaves everyone who does not shave himself simply cannot
exist, and once you notice that, the puzzle evaporates and nothing is lost. But
the Liar sentence does exist. It is nine words long and you can write it on a
napkin. There is nothing to deny.

### What the candidate answers actually cost

Because all three principles look obvious, every solution has to break something
that people did not want broken. Roughly:

- **Break bivalence**: allow that some sentences are neither true nor false. Then
  face the strengthened Liar, and explain what "not true" means in your own
  theory.
- **Break the truth principle**: allow that "'P' is true" does not always amount
  to P. Then explain when it does, without making "true" a word with a
  different meaning in every context.
- **Break self-reference**: forbid a language from containing its own word for
  truth. This is Tarski's answer and it works cleanly for formal languages. But
  English does contain the word "true" and applies it to English sentences, so
  the answer says that English is inconsistent — which is a strange thing to
  conclude about a functioning language.
- **Break the ban on contradictions**: accept that the sentence really is both
  true and false, and change the logic so that a contradiction no longer implies
  everything. This is the dialetheist route, and its cost is a weaker logic
  everywhere.

Each of these has serious, credentialed defenders working today. That is what
"debated" means on this site: not that the problem is neglected, but that four
communities of experts have each paid a different price and each thinks the
others paid too much.

## Examples

**The two-sided card.** Some people find the single sentence too slippery to
hold. Take a card and write on the front:

> The sentence on the other side of this card is true.

and on the back:

> The sentence on the other side of this card is false.

Neither sentence mentions itself. Each is about a different sentence, on a
different piece of card, in someone else's handwriting if you like. The
contradiction appears anyway. This matters: it shows that the trouble is
*circularity*, not literal self-mention, and it rules out any fix that only bans
sentences containing the word "this".

**The no-no pair.** Now change one word. Front: "the sentence on the other side
is false." Back: "the sentence on the other side is false." No contradiction —
you can consistently call the front one true and the back one false, or the other
way round. But there is nothing whatever to choose between them, so no assignment
is any more correct than its mirror image. The pair is consistent and still
defective, which suggests that consistency was never quite the right test.

**The Liar that depends on the news.** Kripke's example, from 1975. Jones says:

> Everything Nixon says about Watergate is false.

Whether that sentence is paradoxical has nothing to do with its grammar. If Nixon
said several things about Watergate and at least one of them was plainly true,
Jones' sentence is simply false and no trouble arises. But suppose the only thing
Nixon ever said about Watergate was "everything Jones says about Watergate is
true". Now the two sentences form a loop and the contradiction is back.

Nothing about the *form* of Jones' sentence tells you which situation you are in.
You have to go and find out what Nixon said. This example is why you cannot
quarantine paradox by inspecting sentences, and it is the reason the simplest
version of Tarski's fix cannot be applied to ordinary language.

**Curry's sentence, which does not use "false" at all.** Consider:

> If this sentence is true, then every number is prime.

Suppose the "if" part holds — that is, suppose the sentence is true. Then, since
it is true and it says that if it is true then every number is prime, every
number is prime. So we have shown: if the sentence is true, then every number is
prime. But that is precisely what the sentence says, so the sentence is true. And
therefore every number is prime.

Substitute anything you like for "every number is prime". There is no negation
anywhere in the argument. Any proposed cure for the Liar that works by fiddling
with negation or with falsity has not touched this, and Curry's paradox is
therefore the second test that every solution must pass.

**Yablo's sequence, with no loop at all.** Stephen Yablo (1993) lined up
infinitely many sentences:

- S₁: all of S₂, S₃, S₄, … are untrue.
- S₂: all of S₃, S₄, S₅, … are untrue.
- S₃: all of S₄, S₅, S₆, … are untrue.
- and so on.

No sentence refers to itself and no sentence refers to any earlier one, so there
is no circle anywhere. Yet suppose some Sₙ is true. Then everything after it is
untrue — including Sₙ₊₁, whose untruth means that something after *it* is true,
contradicting Sₙ. So no Sₙ can be true. But if all of them are untrue, then what
S₁ says is exactly right, so S₁ is true. Contradiction again.

Whether this really escapes circularity is disputed — Graham Priest argued in
1997 that the circularity is hidden in the "all" rather than removed. Either way,
the sequence shows that the diagnosis "the problem is self-reference" is at best
incomplete.

## Explore

There are four main families of response alive today, plus a fifth that has been
gaining ground. It is worth seeing each on its own terms, because each is
coherent and each is expensive.

### Tarski: stratify the language

Alfred Tarski (1933, and in accessible form 1944) diagnosed the problem as
**semantic closure**: the Liar arises in any language that contains its own
truth predicate, can refer to its own sentences, and obeys classical logic.
Remove any one and the contradiction goes. Tarski removed the first.

On his account, a language cannot consistently contain "true-in-that-same-
language". Truth for a language is defined in a stronger **metalanguage** that
sits above it. There is no single predicate "true" but an unbounded hierarchy:
true₀, true₁, true₂ … Every sentence lives at some level, and each level's truth
predicate applies only to sentences below it. The Liar cannot be written, because
"this sentence is false" would need a truth predicate of its own level.

Tarski was explicit that this makes natural language, which does contain "true"
and does apply it to itself, inconsistent. He was untroubled by that: his target
was formal languages, where the hierarchy is exactly right, and the resulting
account of truth became the foundation of modern formal semantics.

**Cost:** it does not describe how anyone actually speaks. And Kripke's Nixon
example shows the hierarchy cannot be imposed by inspecting sentences, since
whether a sentence is safe depends on contingent facts about the world.

### Kripke: one language, partial truth

Saul Kripke (1975) kept a single language containing its own truth predicate, and
made the predicate **partial** — defined for some sentences and undefined for
others.

Start with a truth predicate that applies to nothing. Now feed in every sentence
whose truth you can settle without using the predicate: "snow is white" gets in.
Then feed in everything settled by *that*: "'snow is white' is true" gets in. Keep
going, transfinitely. The process only ever adds, never retracts, so it reaches a
point where nothing further can be added — a **fixed point**.

Sentences that get a value along the way are called **grounded**. The Liar is
never reached at any stage, so it stays undefined forever. It is not true, it is
not false, it simply never enters the process. That is a principled account of the
gap, rather than a stipulation, and it is why Kripke's construction is the single
most influential technical contribution to the subject.

**Cost:** the strengthened Liar. Inside the fixed-point language you cannot say
"the Liar sentence is not true", because "not true" in that language means "false"
and the Liar is not false either. To say the thing Kripke's own theory says about
the Liar, you have to step outside into a stronger language. Kripke saw this
perfectly clearly and wrote that "the ghost of the Tarski hierarchy is still with
us".

### Priest and the dialetheists: some contradictions are true

Graham Priest's position, defended since the late 1970s, is the one most people
find outrageous and hardest to refute. The Liar sentence is **both true and
false**. It is a *dialetheia*, a true contradiction. There is no error in the
reasoning; the reasoning is sound and its conclusion should be accepted.

The obvious objection is that from a contradiction everything follows, so the
theory proves that the moon is a biscuit. Priest's answer is that this principle —
*ex contradictione quodlibet* — is the thing that should go. In a
**paraconsistent** logic such as his Logic of Paradox, a sentence can take the
value "both", contradictions do not spread, and inference remains useful.

**Cost:** the logic is weaker everywhere, not just at the Liar. Disjunctive
syllogism fails: from "P or Q" and "not P" you may no longer infer Q. That rule is
used constantly in ordinary and mathematical reasoning, and giving it up in
general to accommodate a handful of pathological sentences strikes most logicians
as a bad trade. Priest replies that the rule is not truth-preserving in the
presence of dialetheias, and that noticing this is progress.

### Gupta, Herzberger and Belnap: truth as revision

A fourth approach denies that truth has a fixed extension at all. On the
**revision theory** (Anil Gupta and Hans Herzberger, both 1982; developed with
Nuel Belnap in 1993), "true" is a *circular* concept, like a definition that
mentions itself. You cannot evaluate such a definition; you can only iterate it.

Start with any arbitrary guess about which sentences are true. Apply the truth
rules once and you get a revised guess. Apply again, and again, transfinitely.
Ordinary sentences settle down after a step or two and never move again — they are
**stable**. The Liar flips at every single stage and never settles. Its
instability is not a failure of the theory; it *is* the theory's account of what
the Liar is.

**Cost:** you get a rich description of the Liar's behaviour, but "true" is no
longer a property a sentence simply has, which many find too high a price for a
concept this central.

### Contextualists and paracompletes

Two further lines deserve naming. **Contextualists** — Charles Parsons, Tyler
Burge, Jon Barwise and John Etchemendy (1987), Michael Glanzberg — argue that when
we step back and pronounce the Liar "not true", we are speaking in a shifted
context, about a different situation from the one the original sentence was
about. The strengthened Liar is then not a contradiction but an equivocation
across contexts. **Paracomplete** theorists, most prominently Hartry Field in
*Saving Truth from Paradox* (2008), keep the full unrestricted truth principle
and give up the law of excluded middle for pathological sentences, adding a new
conditional carefully built to survive Curry.

### Where this leaves things

There is no consensus. The nearest thing to agreement is negative and it is
worth stating: **no proposal is free.** Every route pays in something — in
expressive power, in logical strength, in the simplicity of the word "true", or
in the claim that ordinary language is consistent. Judging the paradox now means
judging which currency you would rather spend, and reasonable experts differ.

That is why this entry's status is *debated* rather than *resolved*, and why its
nature is *logical contradiction* rather than *apparent contradiction*. There is
no hidden equivocation waiting to be exposed. The premises are individually
compelling and jointly inconsistent, and something genuinely has to go.

## Deep Dive

### The derivation

Let $L$ be the language, and let $T$ be a one-place predicate of $L$ intended to
mean "is true", applying to names of sentences of $L$. Write $\ulcorner \varphi \urcorner$
for the name of $\varphi$. The governing principle is the **T-schema**, Tarski's
Convention T:

$$T(\ulcorner \varphi \urcorner) \leftrightarrow \varphi \qquad \text{for every sentence } \varphi \text{ of } L$$

Suppose $L$ contains a sentence $\lambda$ such that

$$\lambda \leftrightarrow \neg T(\ulcorner \lambda \urcorner)$$

Instantiating the T-schema at $\lambda$ and chaining gives

$$T(\ulcorner \lambda \urcorner) \leftrightarrow \lambda \leftrightarrow \neg T(\ulcorner \lambda \urcorner)$$

so $T(\ulcorner \lambda \urcorner) \leftrightarrow \neg T(\ulcorner \lambda \urcorner)$,
and in classical logic every sentence follows.

The existence of $\lambda$ is not a hypothesis to be waved at. By the **diagonal
lemma**, in any theory that can represent its own syntax — Robinson arithmetic
suffices — for every formula $\varphi(x)$ there is a sentence $\sigma$ with

$$\vdash \sigma \leftrightarrow \varphi(\ulcorner \sigma \urcorner)$$

Take $\varphi(x) := \neg T(x)$ and $\lambda$ exists as a matter of arithmetic. No
demonstrative pronoun, no cards, no pointing: self-reference is a *theorem* about
any language rich enough to do elementary number theory.

The ingredients are therefore exactly four: (i) classical logic, (ii) the
unrestricted T-schema, (iii) enough syntactic power for diagonalisation, and (iv)
a truth predicate for the language within the language. Every known response
gives up one of them.

### Tarski's undefinability theorem

Tarski's positive result is the sharpest thing anyone has proved here.

> **Theorem (Tarski, 1933/1936).** Let $\mathcal{T}$ be a consistent theory
> interpreting sufficient arithmetic, in a language $L$. Then there is no formula
> $\mathrm{Tr}(x)$ of $L$ such that for every sentence $\varphi$ of $L$,
> $\mathcal{T} \vdash \mathrm{Tr}(\ulcorner \varphi \urcorner) \leftrightarrow \varphi$.

Equivalently: the set of Gödel numbers of true sentences of arithmetic is not
arithmetically definable. Truth for a language always requires a strictly
stronger language.

The relationship to Gödel's first incompleteness theorem (1931) is exact and
instructive. Gödel diagonalises on **provability**, not truth, obtaining $G$ with
$G \leftrightarrow \neg \mathrm{Prov}(\ulcorner G \urcorner)$. Because provability
*is* definable in the language — unlike truth — no contradiction follows. What
follows instead is that $G$ is unprovable and true. The Liar's engine, redirected
one notch, produces a theorem rather than a catastrophe. Gödel remarked on the
analogy himself.

### Kripke's construction

Kripke's fixed points are built as follows. Interpret $T$ **partially**: a
partial interpretation is a pair $(S_1, S_2)$ of disjoint sets of sentences, the
extension and the anti-extension. Evaluate compound sentences using the Strong
Kleene scheme, in which a sentence is undefined when the classical rules give no
answer.

Define the jump operator $\Phi$ that maps $(S_1, S_2)$ to the pair obtained by
putting into the extension every sentence that comes out true under
$(S_1, S_2)$, and into the anti-extension every sentence that comes out false.
Strong Kleene is **monotone**: enlarging the interpretation never overturns a
verdict already reached. By the Knaster–Tarski theorem, a monotone operator on
this lattice has a least fixed point, reached by iterating $\Phi$ from
$(\emptyset, \emptyset)$ through the ordinals:

$$(S_1^{0}, S_2^{0}) = (\emptyset,\emptyset), \qquad (S_1^{\alpha+1}, S_2^{\alpha+1}) = \Phi(S_1^{\alpha}, S_2^{\alpha}), \qquad \text{unions at limits}$$

Sentences entering at some stage are **grounded**. The Liar never enters:
$\lambda \notin S_1^{\alpha} \cup S_2^{\alpha}$ for every $\alpha$. It is
ungrounded, and undefined at the least fixed point.

There are many fixed points, not one. The least is distinguished by containing
only grounded sentences; other fixed points can assign a value to, for instance,
the truth-teller "this sentence is true", which is consistent either way and
therefore genuinely underdetermined.

**The residual problem.** In the fixed-point language, $\neg T(\ulcorner \lambda \urcorner)$
is itself undefined, so the theory cannot assert its own central claim about
$\lambda$. Kripke's own verdict on the situation is the sentence quoted earlier
about the ghost of the hierarchy. The construction converts a contradiction into
an expressive limitation, which is progress, but the limitation is exactly where
the strengthened Liar lives.

### Paraconsistency

Priest's **Logic of Paradox** (1979) takes three values $\{t, b, f\}$ — true,
both, false — with $\{t, b\}$ designated. Negation maps $t \mapsto f$,
$f \mapsto t$, and $b \mapsto b$. Conjunction and disjunction are the Kleene
tables read on the ordering $f < b < t$.

Explosion fails: assign $b$ to $P$ and $f$ to $Q$, and $P \wedge \neg P$ is
designated while $Q$ is not. So $\lambda$ can consistently — or rather,
non-trivially — take the value $b$, satisfying the T-schema, without the theory
collapsing.

The costs are structural rather than incidental. Disjunctive syllogism fails on
the same valuation. The material conditional does not detach: modus ponens for
$\supset$ defined as $\neg A \vee B$ fails when $A$ is $b$ and $B$ is $f$, which
forces the addition of a primitive conditional. And that conditional must then be
built so as not to validate contraction, $A \to (A \to B) \vdash A \to B$, or
Curry's paradox reintroduces triviality without ever using negation. Curry is the
binding constraint on this entire family of theories.

### Revision

Gupta and Herzberger (1982) treat the T-schema not as a truth condition but as a
**rule of revision**. Given a hypothesis $h$ about the extension of $T$, the rule
delivers $\delta(h)$, the set of sentences true when $T$ is interpreted by $h$.
Iterate through the ordinals with a limit rule for stages after $\omega$.

A sentence is **stably true** in a revision sequence if it belongs to every
hypothesis beyond some stage, and **categorically true** if stably true in every
revision sequence. Ordinary arithmetic sentences are categorical. The truth-teller
is stable in some sequences and stably false in others, matching the intuition
that it is arbitrary. And $\lambda$ is **paradoxical**: for every $h$, it is in
$\delta(h)$ if and only if it is not in $h$, so it flips at every stage and is
stable in no sequence at all.

The theory delivers a fine-grained taxonomy of pathology, at the price of
abandoning the idea that $T$ has an extension.

### What any solution must survive

Three benchmarks are standard, and a proposal that passes only the first is not
taken seriously:

1. **The Liar**, $\lambda \leftrightarrow \neg T(\ulcorner \lambda \urcorner)$.
2. **The strengthened Liar**: the theory must be able to state its own verdict on
   $\lambda$ in its own language, or explain principledly why it cannot.
3. **Curry**: with $\kappa \leftrightarrow (T(\ulcorner \kappa \urcorner) \to \bot)$,
   the T-schema plus contraction and modus ponens yield $\bot$ with no negation
   used. Any restriction aimed at negation leaves this untouched.

Add a fourth if you take Yablo (1993) to be non-circular: the diagnosis cannot be
that circularity is the culprit. Priest (1997) contests that reading, arguing the
circularity has moved into the quantifier rather than disappeared, and the
question remains open.

## History

**A note on the date.** This entry is filed at 600 BCE because that is where
tradition puts it, attached to Epimenides. The paradox proper is at least two
centuries younger, and the tradition is wrong. Both facts are worth having in
front of you.

### The misattribution

Epimenides of Knossos was a Cretan seer and poet of the seventh or sixth century
BCE, wrapped in legend — including a fifty-seven-year sleep in a cave. A line
attributed to him says, in effect, **"Cretans are always liars."** It reaches most
modern readers through the Epistle to Titus (1:12), whose author quotes it
approvingly and adds "this testimony is true" — apparently without noticing
anything odd. The same half-line appears in Callimachus' *Hymn to Zeus*.

Here is the thing everybody skips: **that sentence is not paradoxical.** Suppose
a Cretan says all Cretans are always liars. If the sentence is true, then this
Cretan is a liar, so the sentence is false — a contradiction, so it is not true.
Therefore it is false. And "false" here means only that *some* Cretan, at some
moment, said something true. That is not merely consistent, it is almost
certainly the actual state of affairs. The argument terminates cleanly with a
false statement and no contradiction. At most it is a sentence that cannot be
true, which is a curiosity, not a paradox.

To get the paradox you need the negation to bite exactly, which requires a
sentence about itself alone, and the Epimenides line is a sentence about all
Cretans.

Why the misattribution stuck is not mysterious. It has a name, a date, a
picturesque setting and a biblical citation, and the modern era passed it along:
Russell listed "the Epimenides" in 1908 as the oldest contradiction of its kind,
and Douglas Hofstadter's *Gödel, Escher, Bach* (1979) fixed the label for a
generation of readers. Ancient sources do not connect Epimenides with the
paradox at all.

### The documented origin

The earliest surviving attribution of the paradox to a person is in Diogenes
Laërtius (II.108), who credits it to **Eubulides of Miletus**, a Megarian
logician and a contemporary and critic of Aristotle, working around the middle of
the fourth century BCE. Diogenes lists it alongside several other puzzles
credited to Eubulides — the Sorites or heap, the Hooded Man, the Horned Man, the
Bald Man — which is a rather remarkable haul for one person, and suggests the
Megarians were running a systematic programme of finding places where ordinary
predicates break.

Whether Eubulides invented it or merely compiled it cannot be established.
Diogenes wrote around 500 years later and is not a careful historian. What can be
said is that the fourth-century BCE Megarian school is the earliest context in
which anyone is recorded as having posed the paradox, and that the attribution to
Epimenides has no ancient support whatever. The Kneales' *Development of Logic*
(1962) is the standard reference for this correction.

### Antiquity and the Middle Ages

The Stoics took it extremely seriously. Diogenes Laërtius' catalogue of the lost
works of **Chrysippus** (VII.196–197) lists at least six titles on the Liar. None
survive, so we know that the leading logician of the ancient world spent years on
the problem and not what he concluded. Cicero refers to the puzzle in the
*Academica*. A tradition reports that the poet-scholar Philetas of Cos wasted away
from studying it, and that his epitaph said so; the story is charming and should
be treated as a story.

Medieval logicians classified the Liar among the *insolubilia* and produced a
genuinely sophisticated literature on it in the fourteenth century. Thomas
Bradwardine argued that every sentence implicitly asserts its own truth, so the
Liar asserts both its truth and its falsity and is simply false. Jean Buridan
developed a related account and constructed a family of variants, including cases
where paradox depends on contingent circumstance — anticipating Kripke's Nixon
example by six hundred years. Paul of Venice surveyed fifteen distinct solutions.
This work was largely forgotten and then rediscovered in the twentieth century,
and modern commentators have not been kind to the assumption that nothing
happened between Chrysippus and Russell.

### The modern era

The paradox re-entered mathematics through the crisis in foundations. Russell
discovered his own paradox in 1901 while examining Cantor's work, recognised the
Liar as its semantic cousin, and grouped both under his theory of types in 1908.
Gödel's incompleteness theorems (1931) turned the diagonal construction into a
positive result. **Tarski** published the definition of truth and the
undefinability theorem in Polish in 1933, in German in 1935, and in a
non-technical English presentation in 1944, and for roughly forty years the
hierarchy was the answer.

**Kripke's** 1975 paper broke that consensus and reopened the field. **Priest**
put dialetheism on the table with "The Logic of Paradox" in 1979 and *In
Contradiction* in 1987. **Gupta** and **Herzberger** independently published the
revision theory in 1982. **Barwise and Etchemendy's** *The Liar* appeared in
1987, **Yablo's** sequence in 1993, **Field's** paracomplete theory in 2008. The
literature has grown in every decade since Kripke's paper and shows no sign of
converging.

## Why It Matters

**It produced the modern theory of truth.** Tarski's work on the Liar is the
origin of formal semantics: the idea that you specify what a language's sentences
mean by giving satisfaction conditions in a metalanguage. That method is now the
standard apparatus of model theory, of the semantics of programming languages,
and of formal linguistics. It was built to escape a paradox.

**It produced a theorem about the limits of every formal system.** Tarski's
undefinability result — no sufficiently strong consistent language can define its
own truth predicate — is not a piece of philosophy but a permanent constraint. It
is a sibling of Gödel's incompleteness theorems and of Turing's undecidability of
the halting problem, and all three run on the same diagonal argument that the
Liar embodies. The Liar is the informal ancestor of the three most important
limitative results of twentieth-century logic.

**It showed that "true" is not innocent.** Before the Liar was taken seriously it
was natural to think of truth as a transparent device that adds nothing: saying a
sentence is true is just saying it again. The paradox proves that this cannot be
right without qualification, because the transparent reading is precisely what
generates the contradiction. Anything you say about truth now has to specify how
it avoids that.

**It is the reason self-reference gets designed for rather than banned.** The
distinction between object language and metalanguage, the stratification of
levels, and the careful controls on reflection in proof assistants and type
theories all descend from the recognition that a system talking about itself is
dangerous in a specific, characterisable way.

**It is a working test case for non-classical logic.** Paraconsistent and
paracomplete logics are not curiosities; they have applications in databases,
belief revision and automated reasoning. Much of their development was motivated
by, and is still evaluated against, the Liar.

## Modern Relevance

**Incompleteness and undecidability.** Gödel's theorems and Turing's halting
result are the Liar with the semantic predicate replaced by a syntactic or
computational one. This is not a loose analogy: all three use the diagonal lemma,
and the proofs are close enough that each is routinely taught as a variant of the
others. Every impossibility result in computability theory that proceeds by
self-application traces to this argument.

**Type theory and proof assistants.** Curry's paradox is the direct reason that
dependently typed languages must control recursion and universe levels. Girard
showed in 1972 that allowing a type of all types makes the system inconsistent,
and a Curry-style fixed point is the mechanism. Coq, Lean and Agda all maintain
an unbounded hierarchy of universes for exactly the reason Tarski maintained an
unbounded hierarchy of languages, and a paper proposing to collapse the hierarchy
is a paper proposing to reinvent the Liar.

**Reflection and self-modelling systems.** Any system that reasons about its own
outputs — a prover reasoning about its own provability, a planner evaluating its
own plans, a model asked about its own reliability — is operating in the region
the Liar maps. Löb's theorem, a direct descendant, says that a consistent system
that can prove "if I can prove P, then P" can already prove P, which places real
limits on how much a formal system can trust itself. Designers of self-referential
architectures rediscover these constraints regularly.

**Inconsistency-tolerant computing.** Real databases and knowledge bases contain
contradictory records, and classical logic's response to a contradiction is to
license every conclusion, which is useless. Paraconsistent logics developed in the
course of the Liar debate are used to reason usefully in the presence of
inconsistency without repairing it first.

**Everyday self-undermining claims.** "This rule has no exceptions." "Never trust
anything you read." "There are no absolute truths." Each is a small Liar, and the
diagnosis in each case is the same one Tarski gave: the sentence is trying to
apply a rule to itself from inside a level where it does not reach.
