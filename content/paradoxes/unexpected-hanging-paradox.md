---
title: The Unexpected Hanging Paradox
slug: unexpected-hanging-paradox
alternateNames:
  - The Surprise Examination Paradox
  - The Prediction Paradox
  - The Unexpected Examination
  - The Hangman Paradox
summary: >-
  A judge sentences a prisoner to hang one weekday next week, and promises the day
  will come as a surprise. The prisoner proves the sentence cannot be carried out.
  On Wednesday the hangman arrives, and the prisoner is astonished.
era: twentieth-century
date: 1943 (in circulation), 1948 (first in print)
year: 1943
origin: >-
  Reported to have entered circulation through a Swedish civil defence broadcast
  during the Second World War, noticed by the mathematician Lennart Ekbom. Its
  first appearance in print is D. J. O'Connor's 1948 note in Mind.
people:
  - willard-van-orman-quine
  - timothy-chow
  - roy-sorensen
  - martin-gardner
domains:
  - philosophy
  - logic
types:
  - knowledge
  - self-reference
nature: logical-contradiction
difficulty: advanced
status: debated
concepts:
  - Backward induction
  - Self-reference
  - Epistemic closure
  - Knowledge retention
  - Blindspots
  - Moore-paradoxical sentences
  - The Knower paradox
relationships:
  - kind: related
    to: liar-paradox
    note: The decree talks about what can be deduced from the decree, which puts it in the Liar's family rather than among ordinary predictions.
  - kind: related
    to: godels-incompleteness
    note: Fitch built the judge's sentence by the diagonal lemma, turning the decree into an arithmetical fixed point that asserts its own unknowability.
  - kind: related
    to: prisoners-dilemma
    note: The finitely repeated game unravels by exactly the same backward induction from the last round, and real players ignore it just as thoroughly.
  - kind: related
    to: sorites-paradox
    note: Both are chains of individually irresistible steps whose accumulated conclusion is refuted by an obvious fact.
references:
  - source: oconnor-1948-pragmatic-paradoxes
    role: primary-source
    locator: "Mind 57, pp. 358–359"
    note: The first appearance in print, as a military blackout announcement.
  - source: quine-1953-so-called-paradox
    role: primary-source
    note: The classic dissolution — the prisoner's argument fails at its first step.
  - source: scriven-1951-paradoxical-announcements
    role: paper
  - source: shaw-1958-unexpected-examination
    role: paper
    note: First clear identification of the announcement as self-referential.
  - source: kaplan-montague-1960-paradox-regained
    role: paper
    note: A formal version in which the elimination argument is valid, so Quine's diagnosis cannot be the whole story.
  - source: fitch-goedelized-prediction-paradox
    role: paper
    note: The decree constructed as a Gödel fixed point.
  - source: fitch-1963-value-concepts
    role: paper
    note: Theorem 5, the knowability paradox — the general result that a true "p, unknown" cannot be known.
  - source: chow-1998-surprise-examination
    role: paper
    note: The standard survey, and the argument that there are two distinct paradoxes here.
  - source: sorensen-1988-blindspots
    role: book
    note: The decree as a proposition that is true but unbelievable by one particular person.
  - source: gardner-1969-unexpected-hanging
    role: book
    note: The essay that made the hanging version standard.
  - source: sep-epistemic-paradoxes
    role: encyclopedia
furtherReading:
  - title: Epistemic Paradoxes — Stanford Encyclopedia of Philosophy
    url: https://plato.stanford.edu/entries/epistemic-paradoxes/
    note: Places the surprise examination alongside Moore's paradox and the knowability paradox, which is where it belongs.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

A judge passes sentence on a prisoner.

"You will be hanged at noon on one of the five weekdays next week," says the
judge. "And I promise you this: you will not know which day it is until the
hangman knocks on your door that morning. It will come as a complete surprise."

The prisoner goes back to his cell. He thinks about it. Then he starts to smile.

*It can't be Friday*, he thinks. *Because if I'm still alive on Thursday evening,
there'd be only one day left. I'd know it was Friday. It wouldn't be a surprise.
So Friday is out.*

*And now that Friday is out, it can't be Thursday either. Because if I'm alive on
Wednesday evening, the only days left would be Thursday and Friday — and I've
already ruled out Friday. So I'd know it was Thursday. Not a surprise. Thursday
is out.*

The same argument knocks out Wednesday. Then Tuesday. Then Monday.

The prisoner sits back, enormously relieved. **The judge's sentence cannot be
carried out.** There is no day of the week on which he can be hanged by surprise,
so he cannot be hanged at all. He sleeps well all weekend.

On Wednesday morning, the hangman knocks.

And the prisoner is astonished. Which is exactly what the judge said would
happen.

## Understand

Two things went wrong, and only one of them is obvious.

The obvious one is that the prisoner is dead. His argument concluded that
something could not happen, and then it happened, so the argument was wrong
somewhere.

The non-obvious one — and this is the whole paradox — is that **nobody has ever
produced an account of where it went wrong that everyone accepts.** The argument
is short, it uses no exotic principles, and each step feels like the previous
step. Seventy-five years of philosophers have gone at it, and the field is still
split.

### Why this is not an ordinary bad prediction

Notice what the judge's sentence is actually about. It is not just about the
world — the date of a hanging. It is about **the prisoner's mind**: what he will
be able to work out, and when.

That is what makes it dangerous. A statement about the world sits there and
either matches the world or does not. A statement about what you can deduce
becomes part of what you are deducing from. The moment the prisoner takes the
decree seriously, the decree is inside his reasoning, changing what he knows,
changing what would count as a surprise.

Compare the one-day version, which is where the strangeness is easiest to see.
The judge says: *"You will be hanged tomorrow, and you do not know it."*

That sentence can be perfectly true. The hangman does come tomorrow, and right
now the prisoner does not know it. But the prisoner cannot *accept* the sentence,
because accepting it would mean knowing the thing he is being told he does not
know. It is a true statement that this one person cannot believe. Roy Sorensen
calls such a statement a **blindspot**: consistent, possibly true, and
unbelievable by a particular believer.

The judge's five-day decree is a blindspot with a week's worth of scaffolding
around it.

### Quine's answer: the first step is already wrong

Willard Van Orman Quine's two-page note of 1953 is the most widely taught
response, and it targets the Friday step — the one everybody waves through.

The prisoner reasons: *if I'm alive on Thursday evening, I'll know it must be
Friday, so it can't be Friday.* Look at what he assumes. He assumes that on
Thursday evening he will still **know** the judge's decree is true.

But by then he will have spent four days constructing an argument that the decree
is *false*. If he is alive on Thursday evening and he believes his own argument,
then what he actually knows is: the judge said something, and it may well have
been untrue. He does not know he will hang on Friday. He does not know he will
not. He knows nothing about tomorrow.

And that is precisely the state of mind in which being hanged on Friday would be
a surprise.

Quine's point is that the prisoner is entitled to only one of the two conclusions
he wants — either the decree holds and he cannot predict the day, or he can
predict the day and the decree does not hold. He helps himself to the decree to
rule out each day, and then uses the ruled-out days to reject the decree. The
argument saws off the branch it is sitting on, and then complains that it has
fallen.

Put plainly: **the prisoner's real mistake is assuming he is going to know what
happens.** He never had grounds for that.

### Why that is not the end of it

If Quine were the whole answer, this entry would be filed under *apparent
contradiction* and you would be reading a shorter page.

The trouble is that the announcement can be rebuilt so that the prisoner's
reasoning is airtight. David Kaplan and Richard Montague did this in 1960, and
Frederic Fitch did it again with the machinery Gödel used for the incompleteness
theorems: you can construct a sentence that refers to itself and says, in effect,
"the event will occur, and this very sentence will not be known by you
beforehand." For such a sentence the elimination argument goes through validly,
and the contradiction survives.

So there appear to be two different things wearing the same costume. One is a
story about a prisoner who reasons carelessly. The other is a genuine logical
antinomy about self-referential claims involving knowledge — a close relative of
the Liar, and of Gödel's theorem. Timothy Chow's 1998 survey argues exactly this,
and it is why the entry is classified as a logical contradiction rather than a
puzzle about human error.

## Examples

**The week, as the prisoner sees it.**

| If he is alive on the evening of | Days still possible | What he claims to conclude |
| --- | --- | --- |
| Thursday | Friday only | He would know — so not Friday |
| Wednesday | Thursday, Friday | Friday already ruled out — so not Thursday |
| Tuesday | Wed, Thu, Fri | Thu and Fri already ruled out — so not Wednesday |
| Monday | Tue–Fri | and so on |
| Sunday | Mon–Fri | No day survives |

Each row is a step of backward induction, and each row leans on every row below
it having been settled.

**The surprise examination.** A teacher announces an exam next week that will
surprise the class. Students run the same argument and conclude there will be no
exam. There is an exam on Tuesday. This is the version most people meet, and it
is the one the philosophical literature usually uses, because a classroom is
easier to reason about than a gallows.

**Gardner's eggs.** Martin Gardner's version uses ten boxes in a row. You are
told an egg is in one of them, and that you will not be able to deduce which
before opening it. The elimination runs from box ten downwards. Then you open box
five and there is the egg. Same structure, no mortality.

**The one-day version.** "You will be hanged tomorrow and you do not know it."
This is a Moore-paradoxical sentence: *p, and you do not believe p*. There is
nothing wrong with the world it describes. There is something wrong with your
believing it. Strip everything else away and this is what the paradox is made of.

**Where it stops working.** If the judge says "you will be hanged next week and
you will not know the day", and the prisoner is a stone, the decree is trivially
true. If the prisoner is told the day, the decree is false. The paradox needs an
agent who reasons well enough to run the argument and not so well that he
notices the argument is self-undermining. That target is disconcertingly close to
where most of us live.

## Explore

The positions divide on a prior question: is this a defect in the prisoner's
reasoning, or a defect in the notion of a self-referential claim about knowledge?

**Self-refutation** (D. J. O'Connor, 1948). The original diagnosis. The
announcement is pragmatically self-defeating: making it destroys the conditions
under which it could be true, like saying "I am not speaking". Its fatal problem
is empirical. The hanging happened, on Wednesday, and it *was* a surprise. The
decree was true. A statement that turns out true cannot be self-refuting.

**Invalid elimination** (Quine, 1953). Set out above. The prisoner's argument
requires that he retain knowledge of the decree throughout an argument whose
whole purpose is to undermine it. Quine's four-case analysis of the last day
shows he has smuggled in the assumption that he will know the outcome in advance,
which is the very thing in dispute. Widely regarded as correct about the story as
usually told, and widely regarded as insufficient.

**Self-reference** (Michael Scriven, 1951; R. Shaw, 1958). Shaw's contribution is
the observation that the decree quantifies over what the prisoner will deduce
*from that decree*. That is a fixed-point construction, not a prediction, and it
places the puzzle in the Liar's family. Everything technical that followed builds
on this identification.

**Paradox regained** (David Kaplan and Richard Montague, 1960). The decisive
technical intervention. They construct the *Designated Student* paradox — a finite,
fully formal version in which the elimination argument is valid and the
contradiction is real. This kills the hope that the problem is merely the
prisoner's sloppiness, and it forces the question of which epistemic principle
must be abandoned.

**Gödelisation** (Frederic Fitch). Fitch builds the announcement as a
self-referential sentence in the style of Gödel's diagonal lemma, so the decree
literally asserts its own unknowability. His 1963 paper on value concepts proves
the general result behind all of this: if every truth is knowable, then every
truth is known — because "p, and p is unknown" is a truth that cannot be known.
That theorem, credited by Fitch to an anonymous referee later identified as
Alonzo Church, is the paradox's permanent residue.

**Blindspots** (Roy Sorensen, 1988). The reconciling move. The decree is
consistent and true; it is simply not knowable *by the prisoner*. Everyone else in
the prison knows it. The prisoner's own epistemic position is what makes it
inaccessible to him, and there is no contradiction in a truth that one person
cannot rationally accept. This explains how the judge can be right and the
prisoner reasonable at the same time.

**Two paradoxes, not one** (Timothy Chow, 1998). Chow's survey sorts the
literature and concludes that the epistemological version — about what a rational
agent should believe, where retention of knowledge is the failing assumption —
and the logical version — a self-referential sentence generating a genuine
antinomy — are different problems that happen to share a story. Most apparent
disagreements in the literature are two authors solving different ones.

**The game theorists' version.** Backward induction misbehaves elsewhere in
exactly this way. The finitely repeated Prisoner's Dilemma unravels to universal
defection from the last round backwards; Reinhard Selten's chain-store paradox
(1978) and Robert Rosenthal's centipede game (1981) produce equally
counterintuitive predictions by the same route. In every case the induction
requires reasoning about behaviour at nodes that the induction has already
declared unreachable, and in every case laboratory subjects decline to cooperate
with the theory. The connection is structural, not decorative: the prisoner's
Thursday-evening reasoning is a decision node that his own argument says will
never be reached.

## Deep Dive

### Setting up the decree

Let the candidate days be $d_1, \dots, d_n$. Let $H_i$ mean the hanging occurs on
$d_i$, with exactly one $H_i$ true. Let $K_i(\phi)$ mean the prisoner knows
$\phi$ on the eve of $d_i$ — that is, after $d_1, \dots, d_{i-1}$ have passed
without a hanging.

The judge's decree is

$$D \;\equiv\; \bigvee_{i=1}^{n} \Big( H_i \wedge \neg K_i(H_i) \Big)$$

together with the exclusivity of the $H_i$. In words: the hanging falls on some
day, and on the eve of that day the prisoner does not know it.

### The backward induction

*Base step ($i = n$).* Suppose $\neg H_1 \wedge \cdots \wedge \neg H_{n-1}$ and
suppose $K_n(D)$. From $D$ and the failure of the earlier days, $H_n$ follows;
since the prisoner knows both, closure gives $K_n(H_n)$. But $D$ asserts
$\neg K_n(H_n)$. Contradiction, so $\neg H_n$.

*Inductive step.* Assume $\neg H_j$ for every $j > i$. Suppose the prisoner
survives to the eve of $d_i$ and $K_i(D)$ holds. Then $H_i$ follows, so
$K_i(H_i)$, contradicting $D$. Hence $\neg H_i$.

Descending from $i = n$ to $i = 1$ gives $\neg H_i$ for every $i$, contradicting
the first conjunct of $D$. So $D$ is false — and yet the judge carries it out.

### The four assumptions the induction needs

The derivation is not principle-free. It requires, at minimum:

1. **Retention.** $K_i(D)$ for every $i$ — the prisoner still knows the decree on
   every eve.
2. **Closure.** $K_i(\phi)$ and $K_i(\phi \rightarrow \psi)$ jointly give $K_i(\psi)$.
3. **Factivity.** $K_i(\phi) \rightarrow \phi$.
4. **Availability.** The prisoner knows the conclusions of his own earlier
   reasoning, so that $\neg H_j$ for $j > i$ is available to him as knowledge at
   stage $i$, not merely as a truth.

Quine's objection is aimed at the interaction of (1) and (4). The step that
eliminates $d_i$ uses $\neg H_{i+1}, \dots, \neg H_n$ as *known*. But those were
derived from $K(D)$, and the argument's own conclusion is that $D$ is false —
which by factivity means $D$ was never known. The prisoner is using $K(D)$ to
derive $\neg D$, and then continuing to use $K(D)$.

Written out, what the argument actually establishes is not $\neg D$ but the
conditional

$$K(D) \;\rightarrow\; \neg D$$

By factivity $K(D) \rightarrow D$, so the two together give $\neg K(D)$. That is
not a contradiction. It is the statement that **the prisoner cannot know the
decree** — and it is entirely compatible with the decree being true. This is
Sorensen's blindspot in one line: $D \wedge \neg K_{\text{prisoner}}(D)$ is
consistent, so a proposition may be true, publicly announced, and rationally
unbelievable by exactly one person in the room.

Quine's own presentation makes the same point through the last day's four cases:

| | Prisoner knows the outcome | Prisoner does not |
| --- | --- | --- |
| $H_n$ | ruled out by $D$ | **consistent with $D$** |
| $\neg H_n$ | consistent | consistent |

The prisoner eliminates the top-left cell and then proceeds as though the bottom
row were empty. But the top-right cell is exactly what happens: he is hanged on
the last day, unexpectedly, *because* he has convinced himself he cannot be.

### The knower, and why Quine is not enough

Kaplan and Montague's move is to treat knowledge not as an operator on sentences
but as a **predicate** $K(\ulcorner \phi \urcorner)$ applied to Gödel codes. Once
knowledge is a predicate of the object language, the diagonal lemma applies: for
any formula there is a sentence asserting that the formula holds of its own code.

Take $\kappa$ with

$$\vdash\; \kappa \;\leftrightarrow\; \neg K(\ulcorner \kappa \urcorner)$$

— "this sentence is not known". Assume the standard epistemic principles:

- **(T)** $K(\ulcorner \phi \urcorner) \rightarrow \phi$
- **(K)** $K(\ulcorner \phi \rightarrow \psi \urcorner) \rightarrow (K(\ulcorner \phi \urcorner) \rightarrow K(\ulcorner \psi \urcorner))$
- **(N)** if $\vdash \phi$ then $\vdash K(\ulcorner \phi \urcorner)$

Suppose $K(\ulcorner \kappa \urcorner)$. By (T), $\kappa$; by the fixed point,
$\neg K(\ulcorner \kappa \urcorner)$ — contradiction. So $\neg K(\ulcorner \kappa \urcorner)$,
hence $\kappa$, and since we have just *proved* $\kappa$, (N) gives
$K(\ulcorner \kappa \urcorner)$. Contradiction again.

This is the **Knower paradox**. It is the epistemic twin of Montague's theorem
and of Tarski's undefinability of truth, and its structure is Löb's: the system
cannot consistently contain a factive predicate that applies to its own theorems.
Fitch's Gödelized formulation writes the judge's decree as such a fixed point, so
that the decree asserts its own unknowability directly. Kaplan and Montague's
Designated Student paradox is the finite, weekday-shaped version of the same
construction, and in it the elimination argument is valid.

The consequence is decisive for the classification of this entry. When the
announcement is a genuine self-referential fixed point, no amount of care about
the prisoner's psychology helps. One of (T), (K), (N) or the object-language
treatment of knowledge must be given up — the same menu that Tarski's hierarchy,
paracomplete logics and paraconsistent logics offer for the Liar.

Fitch's general theorem states the loss cleanly. Let $\Diamond$ be possibility
and suppose every truth is knowable, $\phi \rightarrow \Diamond K\phi$. Apply it
to $p \wedge \neg Kp$ for some unknown truth $p$. Then
$\Diamond K(p \wedge \neg Kp)$. But distribution gives $Kp \wedge K\neg Kp$, and
factivity turns the second conjunct into $\neg Kp$ — a contradiction, so
$K(p \wedge \neg Kp)$ is impossible. Hence there is no unknown truth: if all
truths are knowable, all truths are known. The judge's decree is one instance of
this impossible conjunction, addressed to one prisoner.

### The relation to backward induction generally

Strip out the epistemic vocabulary and the skeleton is this: a finite sequence of
decision points, solved from the last backwards, where the solution at each point
assumes the solutions at all later points are common knowledge, and where
reaching a given point is evidence that some earlier assumption failed.

The finitely repeated Prisoner's Dilemma has exactly this shape, and unravels to
defection in every round. Selten's chain-store paradox and Rosenthal's centipede
game have it too, and produce predictions that experimental subjects contradict
immediately and consistently. In every case the induction requires the players to
condition on being at a node the induction says cannot be reached, and to keep
believing in the rationality that got them there. The prisoner's Thursday evening
is that node. His argument tells him he will never see it, so it tells him
nothing about what to believe if he does.

## History

**1943–1944.** The paradox appears to have entered general circulation through a
Swedish radio broadcast during the war, announcing a civil defence exercise in
the coming week whose date would not be known in advance. The mathematician
Lennart Ekbom noticed the logical problem and passed it to students in Stockholm,
from where it spread by word of mouth. The account is reported by Martin Gardner
and repeated by Timothy Chow; the broadcast itself has not been independently
verified, so this origin should be read as well-attested tradition rather than
documented fact.

**1948.** D. J. O'Connor publishes "Pragmatic Paradoxes" in *Mind* — the first
appearance in print. His version is a military commander announcing a class A
blackout that will occur in the coming week on a day the men cannot deduce in
advance. O'Connor concludes the announcement is self-refuting.

**1951–1952.** Michael Scriven ("Paradoxical Announcements") and Paul Weiss ("The
Prediction Paradox") continue the exchange in *Mind*, insisting the problem is
genuine rather than a slip.

**1953.** Quine's "On a So-called Paradox" appears in *Mind*. Two pages, no
formalism, and it sets the terms for everything that follows. The title carries
the verdict.

**1958.** R. Shaw's "The Paradox of the Unexpected Examination" identifies the
self-referential structure explicitly, moving the problem out of the psychology
of prediction and into the logic of self-reference.

**1960.** Kaplan and Montague publish "A Paradox Regained" in the *Notre Dame
Journal of Formal Logic*. The Designated Student construction shows the
contradiction survives formalisation, and the title answers Quine directly.

**1963–1964.** Fitch's "A Logical Analysis of Some Value Concepts" (1963) proves
the knowability paradox; his "Goedelized Formulation of the Prediction Paradox"
applies the diagonal lemma to the announcement itself. The second paper is dated
1963 in some bibliographies and 1964 in others.

**1963, 1969.** Martin Gardner devotes a *Scientific American* column to the
paradox and later makes it the title essay of *The Unexpected Hanging and Other
Mathematical Diversions*. This fixes the hanging version as the canonical telling
and delivers the problem to a general readership. Gardner's own assessment is
that no proposed solution had yet commanded agreement.

**1988.** Roy Sorensen's *Blindspots* supplies the framework in which the decree
can be true, publicly announced, and unknowable by its subject.

**1998.** Timothy Chow's survey in the *American Mathematical Monthly* maps five
decades of proposals and argues that the field has been arguing about two
different paradoxes. It remains the standard reference and the sensible place to
start.

Since then the centre of gravity has moved into dynamic epistemic logic, where
announcements that change the truth of what they announce are a studied class of
object rather than an embarrassment.

## Why It Matters

**It is the reason epistemic logic distinguishes operators from predicates.**
Kaplan and Montague's construction shows that treating "knows" as a predicate of
sentences in a language capable of arithmetic makes contradiction available by
diagonalisation. Modal epistemic logic — knowledge as an operator, with a
hierarchy or a restricted language — is the standard response, and it exists in
its present form partly because of this puzzle.

**It gave us the knowability paradox.** Fitch's theorem is not a curiosity: it is
a standing obstacle for any anti-realist who wants to identify truth with what
can in principle be known. If every truth is knowable, every truth is known, and
almost nobody wants that. Verificationist theories of truth have had to be
rewritten around it.

**It shows that public announcements are not neutral.** Telling someone something
changes what is true about what they know, and some sentences become false by
being announced. This sounds obvious and its consequences are not: a security
policy, an audit schedule or an inspection regime whose contents are published
can be defeated by the publication. Formal work on public announcement logic
divides formulas into those that survive being announced and those that do not,
and the judge's decree is the standard example of the second kind.

**It is the clearest case of backward induction failing.** Any process reasoned
out from a terminal condition backwards inherits the prisoner's difficulty:
the reasoning at each step is conditional on states the reasoning itself declares
impossible. Economists working on the chain-store paradox and the centipede game
arrived at the same structure independently, and the persistent gap between
backward-induction predictions and experimental behaviour is one of the better
documented failures in game theory.

**It sets a real constraint on surprise.** If you want an event to be genuinely
unpredictable to a competent reasoner, you cannot get there by cleverness about
scheduling — a sufficiently good reasoner will unravel any deterministic scheme
whose rules are known. You need actual randomness. Surprise inspections,
random drug testing, audit sampling and treaty verification regimes are all
designed on this principle, and the paradox is a proof that the principle is not
optional.

## Modern Relevance

**Randomised audit and inspection design.** Tax authorities, safety inspectorates
and arms-control regimes all face the judge's problem: they must announce that
inspections will occur and keep the timing unpredictable. The solution adopted
everywhere is publicly committed randomisation — announce the distribution, not
the draw. That is a direct concession that no deterministic schedule can be both
published and surprising.

**Dynamic epistemic logic.** Public announcement logic studies exactly what the
judge did: an update operator $[\phi]$ that revises an agent's information state
by the announcement of $\phi$. Sentences that are true before the announcement
and false after are called unsuccessful, and Moore sentences of the form
$p \wedge \neg Kp$ are the canonical case. The paradox is now a worked example in
a textbook chapter rather than an open wound, though the underlying knower
paradox is not thereby solved.

**Security and unpredictability.** Kerckhoffs's principle says a system must be
secure even when everything about it except the key is public. The unexpected
hanging is the epistemological argument for why that key has to be random: any
structure an adversary can reconstruct from public rules is a structure they can
run the elimination argument on.

**Evaluating AI systems.** A model that can infer when it is being tested can
behave differently under evaluation, and publishing an evaluation protocol makes
that inference easier. The mitigation proposed in practice — unannounced
evaluations drawn at random, held-out sets never described in public — is the
judge's problem taken seriously, and it inherits the judge's difficulty: the
policy of randomising is itself public.

**Deadlines and unravelling.** Markets with a fixed terminal date unravel
backwards — job offers made earlier and earlier, bids submitted at the last
possible instant, cooperation collapsing in the final rounds. The remedy adopted
in practice is to make the endpoint uncertain, which is the same fix in different
clothes: remove the last day and the induction has nowhere to start.
