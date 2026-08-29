---
title: Bertrand's Box Paradox
slug: bertrands-box-paradox
alternateNames:
  - Bertrand's Box Problem
  - The Three Boxes Paradox
summary: >-
  Three boxes, two drawers each: two gold coins, two silver, one of each. You
  open a drawer and find gold. The chance the other drawer in that box is also
  gold is 2/3, not 1/2 — and this is exactly the Monty Hall problem, posed a
  century earlier.
hook: >-
  You reach into one of three boxes and pull out a gold coin. The chance the
  other coin in that box is gold is not one half.
era: nineteenth-century
date: "1889"
year: 1889
origin: >-
  Posed and solved by Joseph Bertrand in the opening pages of his 1889 textbook
  Calcul des probabilités, as a warning that a probability question is not
  answerable until the procedure that generated the evidence is specified.
people:
  - joseph-bertrand
domains:
  - probability
  - mathematics
types:
  - probability
  - knowledge
nature: veridical
difficulty: beginner
status: resolved
renown: specialist
concepts:
  - Conditional probability
  - Sample space selection
  - Bayes' theorem
  - Reductio ad absurdum
relationships:
  - kind: influences
    to: boy-or-girl-paradox
    note: Gardner's two-children problem is Bertrand's box with a fourth box added — and that extra box is where the ambiguity creeps in.
  - kind: related
    to: sleeping-beauty-problem
    note: Both turn on which sample space an observation was actually drawn from, rather than on any disputed arithmetic.
references:
  - source: bertrand-1889-calcul
    role: primary-source
    locator: "Chapter I, §2"
    note: The original statement, together with Bertrand's own proof by contradiction.
  - source: rosenhouse-monty-hall-problem
    role: book
    locator: "Chapter 2"
    note: Traces the line from Bertrand's boxes through the Three Prisoners problem to Monty Hall.
  - source: sep-monty-hall
    role: encyclopedia
    note: The general conditionalisation framework the box problem is an instance of.
  - source: grinstead-snell-probability
    role: academic-reference
    locator: "Chapter 4"
furtherReading:
  - title: Literal and liberal translations of Bertrand's box paradox
    url: https://www.bayesianspectacles.org/literal-and-liberal-translations-of-bertrands-box-paradox/
    note: Bertrand's French text side by side with English renderings, including his 300-box scaling argument.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Three wooden boxes sit on a table. Each has two little drawers, and each drawer
holds one coin.

- The first box holds **two gold coins**.
- The second box holds **two silver coins**.
- The third box holds **one gold and one silver**.

The boxes look identical from the outside. You cannot tell which is which.

You pick a box at random, pull open one of its two drawers, and out comes a
**gold coin**.

Good news: you now know you are not holding the silver-silver box. It is either
the gold-gold box or the mixed box. Two possibilities left.

So — what is the chance the *other* drawer of your box also holds gold?

Everybody says one half. Two boxes it could be, one of them all gold. Half.

It is two-thirds.

## Understand

The mistake is subtle and it is the same mistake almost everybody makes. You
counted the **boxes** when you should have counted the **coins**.

Forget boxes for a moment. Label the six coins:

- Box A: gold **G1**, gold **G2**
- Box B: silver S1, silver S2
- Box C: gold **G3**, silver S3

You opened a drawer at random and found gold. Which gold coin are you looking
at? There are exactly three gold coins in the whole setup, and — because you
chose the box at random and then the drawer at random — you were equally likely
to end up staring at any one of them.

So you are looking at G1, G2 or G3, each with probability one third.

Now ask what is behind the *other* drawer in each case:

- If you are looking at **G1**, the other drawer holds G2. **Gold.**
- If you are looking at **G2**, the other drawer holds G1. **Gold.**
- If you are looking at **G3**, the other drawer holds S3. **Silver.**

Two of the three cases give gold. Two-thirds.

### Why "one half" feels right and is wrong

The intuitive argument says: there are two boxes it could be, so it is 50/50.
That would be correct only if the two surviving boxes were *equally likely to
have produced what you saw*.

They are not. The gold-gold box has **two ways** of showing you a gold coin. The
mixed box has only **one**. So seeing gold is twice as good evidence for the
gold-gold box as it is for the mixed one, and the odds shift from 1:1 to 2:1.

Bertrand's own way of putting it: the question "is the other coin gold?" is
really the question "did I pick the first box?" — and that question was settled
before you opened anything.

### Bertrand's proof that 1/2 is impossible

Bertrand did not just give the right answer; he showed the wrong one is
self-defeating, and the argument takes four lines.

Suppose the answer really were 1/2. Then:

- If you see gold, the chance the box is same-metal is 1/2.
- If you see silver, by the identical argument, the chance is also 1/2.

But you must see one or the other. So *before* opening any drawer, the chance
that your box is a same-metal box would be 1/2.

And that is plainly false. Two of the three boxes are same-metal, so the chance
is 2/3.

Something you have not yet observed cannot depend on an observation you have not
yet made. The assumption of 1/2 contradicts a fact you already knew, so it must
go. Run the same argument with 2/3 and everything agrees.

## Examples

**Bertrand's own scaling illustration.** He asks you to imagine three hundred
boxes instead of three: 100 gold-gold, 100 silver-silver, 100 mixed. Open one
drawer of every box. You are now looking at 300 coins.

| Boxes | How many | Coin you see |
| --- | ---: | --- |
| Gold-gold | 100 | gold, always |
| Silver-silver | 100 | silver, always |
| Mixed | 100 | gold about 50 times, silver about 50 times |

Count the gold coins on display: 100 from the gold-gold boxes and about 50 from
the mixed ones. **150 gold coins, of which 100 sit in a box whose other drawer
is also gold.**

$100/150 = 2/3$. No conditional probability notation required — just a tally.

**The complete sample space.** Every equally likely outcome of "pick a box, pick
a drawer":

| Box | Drawer opened | Coin seen | Other coin |
| --- | --- | --- | --- |
| A (GG) | 1 | Gold | Gold |
| A (GG) | 2 | Gold | Gold |
| B (SS) | 1 | Silver | Silver |
| B (SS) | 2 | Silver | Silver |
| C (GS) | 1 | Gold | Silver |
| C (GS) | 2 | Silver | Gold |

Six rows, each with probability 1/6. Cross out the three where you saw silver.
Of the three remaining, two have gold behind the other drawer.

**Do it with playing cards.** Take three cards: one red on both sides, one black
on both sides, one red on one side and black on the other. Shuffle them in a bag,
draw one, and slap it on the table without looking at the underside. If the face
up is red, bet even money that the underside is red too. Over 30 rounds you will
win about 20 of them. This version is sometimes sold as the "three-card swindle",
and it works because the mark counts cards instead of faces.

## Explore

**What Bertrand was actually arguing.** The box paradox is not presented in
*Calcul des probabilités* as a curiosity. It opens the book, and it opens it as a
methodological warning: a probability problem is not well posed until you have
said how the evidence was generated. The same volume contains the far more famous
"Bertrand paradox" about the length of a random chord in a circle, where three
different and perfectly reasonable readings of "at random" give three different
answers — 1/2, 1/3 and 1/4. The two problems make the same point from opposite
directions. In the chord case the procedure is genuinely ambiguous and no answer
is uniquely correct. In the box case the procedure *is* specified, and readers
still get it wrong.

**The procedure matters here too.** The 2/3 answer depends on a detail that is
easy to skim past: you opened a drawer **at random**, and reported what was in
it. Change that and the answer changes.

- Suppose instead someone who can see inside deliberately opens a drawer
  containing gold whenever one is available. Then seeing gold tells you only
  that your box is not the silver-silver box — the gold-gold and mixed boxes were
  both certain to produce this display — and the answer drops to 1/2.
- Suppose you are told merely "this box contains at least one gold coin", with no
  account of how anyone came to say that. Then the answer is genuinely
  indeterminate, and you have walked into the [boy or girl
  paradox](/paradox/boy-or-girl-paradox/).

**A dissenting note.** Some commentators have argued that although Bertrand
reached the right answer, his reductio is right for the wrong reason — that it
establishes the inconsistency of the 1/2 answer without isolating the actual
error, which is the failure to weight the boxes by how many gold coins they
contain. The criticism is fair as far as it goes, but Bertrand's argument has an
advantage the modern one lacks: it needs no formal machinery at all.

**Why this counts as veridical.** Nothing here is contradictory, and nothing
dissolves under analysis. The reasoning is elementary, a formal demonstration
exists, and the surprising answer is simply the true one. That is Quine's
definition of a veridical paradox, and Bertrand's box is about as clean an
example as exists.

## History

**1889.** Joseph Bertrand published *Calcul des probabilités* with
Gauthier-Villars in Paris. He was 67, permanent secretary of the Académie des
Sciences, and had spent decades teaching at the École Polytechnique and the
Collège de France. The box problem appears near the very start, in his original
framing as three identical chests each with two drawers, each drawer holding one
coin.

Bertrand posed it, gave the 2/3 answer, supplied the reductio, and added the
300-box illustration. There is no mystery about the origin of this one: it is
signed, dated and solved in a single place.

**1959.** Martin Gardner published the Three Prisoners problem in *Scientific
American*. Three prisoners, one to be pardoned; A asks the warden to name one of
the other two who will be executed, and the warden names B. Does A's chance
improve from 1/3 to 1/2? It does not — it stays at 1/3, while C's rises to 2/3.
This is Bertrand's box with the coins replaced by pardons and a warden supplying
the observation. Gardner's readers reacted much as Bertrand's had.

**1975.** Steve Selvin posed the same structure again in terms of a television
game show, and it acquired the name it now carries. The
[Monty Hall problem](/paradox/monty-hall-problem/) has three objects, one of
which is revealed by a rule-following agent, and probability 2/3 landing on the
option you did not initially choose. Bertrand got there 86 years earlier.

**The line of descent is real, not decorative.** Boxes with two drawers, then
prisoners and a warden, then doors and a host: the same conditional structure,
restated three times, each time provoking the same public disbelief. That
recurrence is the most interesting historical fact about the problem. Each
generation encountered it as new.

## Why It Matters

Bertrand's box is the ancestor of the most argued-about puzzle in probability,
and it is much the better teaching example — because it strips away everything
that makes Monty Hall contentious.

With Monty Hall, arguments stall on the host's motives. Does he always open a
door? Does he know where the car is? Would he have offered the switch if you had
picked differently? Those questions are legitimate and they are also a
distraction, because they let a reader who has not grasped the conditioning
believe the disagreement is about game-show trivia.

Bertrand's boxes have no host. There is nobody to have motives. The drawer opens
at random. And the answer is still 2/3, still for the same reason. Whatever is
going on, it is not about Monty.

The transferable lesson is a rule about evidence:

> When evidence could have arisen in several ways, weight each hypothesis by
> **how many ways it could have produced exactly what you saw** — not by how many
> hypotheses survive.

Counting surviving hypotheses gives 1/2. Counting the ways they could have
generated your observation gives 2/3. That difference is the entire content of
the likelihood term in Bayes' theorem, and Bertrand demonstrated it decades
before anyone was routinely teaching Bayes' theorem to undergraduates.

## Modern Relevance

**Teaching Bayesian reasoning.** The box problem is standard in introductory
probability courses precisely because the sample space is small enough to write
out completely. A student who can enumerate six equally likely rows and cross
out three of them has performed a Bayesian update without needing the formula,
and can then be shown that the formula agrees.

**Diagnostic testing.** A positive result should be weighted by how likely each
condition was to produce that particular result — not merely by which conditions
remain possible. Clinicians shown "the test is 99% accurate" routinely give the
box-paradox answer, and the corrective is the same: count the ways the
observation could have arisen.

**Forensic and genetic evidence.** A DNA profile, a fibre match or a partial
fingerprint is evidence whose strength depends on how many sources could have
generated it. The prosecutor's fallacy — treating "this evidence is unlikely if
innocent" as "innocence is unlikely given this evidence" — is the 1/2 answer in
a courtroom.

**Machine learning and class imbalance.** A classifier's posterior depends on
both the likelihood and the prior. Models trained on rebalanced data implicitly
change the prior, and calibrating them back is the same arithmetic as
re-weighting Bertrand's boxes by their coin counts.

**Anywhere a system reports partial state.** A monitoring system that says "at
least one replica is unhealthy" tells you something different depending on
whether it checked a random replica or searched for an unhealthy one. That is
Bertrand's distinction between a random drawer and a deliberately chosen one, and
it is why observability tooling documents its sampling policy.
