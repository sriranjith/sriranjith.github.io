---
title: Buridan's Ass
slug: buridans-ass
alternateNames:
  - The Ass of Buridan
  - Buridan's Donkey
summary: >-
  A donkey stands exactly midway between two identical bales of hay. Having no
  reason to prefer either, it starves. The story is named after a man who never
  told it, and it is really a question about what a reason is for.
hook: >-
  A donkey stands exactly halfway between two identical bales of hay. With no
  reason on earth to prefer either, does it starve?
era: medieval
date: c. 1340 (the attribution; the example is far older)
year: 1340
origin: >-
  Attached to the Parisian logician John Buridan by later critics of his account
  of the will. The oldest version of the example is in Aristotle's De Caelo; the
  earliest surviving text to name Buridan appears in 1597.
people:
  - john-buridan
  - aristotle
  - al-ghazali
  - baruch-spinoza
  - leslie-lamport
domains:
  - philosophy
  - psychology
types:
  - decision-making
nature: thought-experiment
difficulty: beginner
status: explained
renown: known
concepts:
  - Free will
  - Liberty of indifference
  - Principle of sufficient reason
  - Symmetry breaking
  - Picking versus choosing
  - Tie-breaking
relationships:
  - kind: related
    to: paradox-of-choice
    note: One donkey paralysed by two identical options, one shopper paralysed by twenty-four different ones — the paralysis has opposite causes.
  - kind: related
    to: allais-paradox
    note: Both probe what rational choice requires when the axioms of preference stop giving guidance.
  - kind: related
    to: two-envelopes-problem
    note: Both begin from a perfect symmetry between two options and ask what a rational agent is entitled to do with it.
references:
  - source: aristotle-de-caelo
    role: primary-source
    locator: "II.13, 295b32"
    note: The oldest surviving version — a man equally hungry and thirsty, equidistant from food and drink.
  - source: ghazali-incoherence
    role: primary-source
    locator: First Discussion
    note: The two identical dates, used to argue the will can select without a differentiating reason.
  - source: dante-paradiso
    role: primary-source
    locator: "IV.1–9"
    note: A free man between two equally tempting foods would starve — written around 1321.
  - source: schonlin-1597-logicae-assertiones
    role: primary-source
    note: The earliest recorded text to attach Buridan's name to the example.
  - source: spinoza-1677-ethics
    role: primary-source
    locator: "Part II, prop. 49, scholium"
    note: Spinoza accepts that a man in perfect equilibrium would starve, and says he should be reckoned an ass.
  - source: rescher-1960-choice-without-preference
    role: paper
    note: The standard history, which documents the absence of the donkey from Buridan's works.
  - source: zupko-2003-john-buridan
    role: book
    note: What Buridan actually held about the will.
  - source: sep-buridan
    role: encyclopedia
  - source: lamport-2012-buridans-principle
    role: paper
    note: The donkey restated as a theorem about physical decision-making devices.
furtherReading:
  - title: John Buridan — Stanford Encyclopedia of Philosophy
    url: https://plato.stanford.edu/entries/buridan/
    note: The actual philosopher, who deserves better than the donkey.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

A donkey is standing in a field, and it is very hungry.

To its left, exactly ten metres away, is a bale of hay. To its right, exactly ten
metres away, is another bale of hay. The two bales are the same size, the same
smell, the same freshness, the same everything. There is no breeze. There is no
slope. The donkey is not left-handed.

The donkey looks left. Good hay.

The donkey looks right. Equally good hay.

It has no reason at all to go left rather than right. And it has no reason at all
to go right rather than left. Whatever argument you could make for one bale works
word for word for the other.

So the donkey stands there. And stands there. And — in the story — starves to
death, in a field, between two perfectly good meals.

Now, obviously that is not what a real donkey does. A real donkey eats. But
before you dismiss the whole thing, try to say exactly what it is that makes the
donkey move. Not "it just would" — say what *reason* it has. Because if it moves
without a reason, then something has just happened for no reason at all, and that
is a much stranger thing than a hungry donkey.

## Understand

The donkey is not really the point. The donkey is a trap set for a particular
theory of how decisions work.

The theory is this: **you always do what you judge to be best.** Your mind
weighs the options, one comes out ahead, and your will follows the verdict. It is
a tidy picture, it feels right, and versions of it were standard in medieval
philosophy and are standard in modern decision theory.

The donkey shows the tidy picture has a hole in it. If the will only ever follows
the verdict of the intellect, then when the intellect returns *a tie*, the will
gets no instruction. Nothing tells it to go left. Nothing tells it to go right.
And so, on that theory, nothing happens.

Real animals eat, so the theory must be missing something. The interesting
question is what.

### The three ways out

**One: the will can act without a reason.** Perhaps deciding is not just obeying
the intellect. Perhaps you have the power to simply *plump* for one option, with
no justification, and this is not a defect but the very thing that makes you
free. This is the position al-Ghazali took around 1095, using two identical dates
instead of hay: the will's job is precisely to break ties that reason cannot.

The worry is that a choice made for no reason looks less like freedom and more
like a coin flip happening inside you.

**Two: the tie never actually happens.** Perhaps perfect balance is impossible.
The bales differ by a few blades of grass. The donkey's left eye is a fraction
sharper. A stray thought about last Tuesday tips it. Leibniz argued exactly this:
nothing in the world is ever perfectly balanced, so the case is a fantasy and
proves nothing about real decisions.

The worry is that this saves the theory by luck. If the theory only works because
the universe happens to be untidy, it is not much of a theory.

**Three: ties are fine, and you break them at random.** Perhaps the rational
thing to do, when the options are exactly equal, is to grab one — the nearest, the
left one, whichever your hoof lands on. Nothing is lost, because they are equal.
The philosophers Edna Ullmann-Margalit and Sidney Morgenbesser named this in
1977: *choosing* is what you do when the reasons point one way, *picking* is what
you do when they do not, and picking is not a failure of rationality but a
separate and perfectly respectable operation.

This is almost certainly the right answer for donkeys. It leaves a residue,
though: a decision procedure that only outputs "best option" is incomplete. It
needs a rule for what to do when nothing is best, and that rule cannot itself be
justified by the reasons, or you have not escaped anything.

### Why it is not silly

You can feel the pull of the third answer and still notice that the problem is
real, because it happens to machines.

A digital circuit that has to decide which of two signals arrived first has the
donkey's problem in its purest form. When the two signals arrive close enough
together, the circuit can sit in an undecided state — not zero, not one — and
there is no design that guarantees it will resolve within a fixed time. This is
called metastability, it is a genuine and well-measured phenomenon, and engineers
do not eliminate it. They budget for it.

So the story is not simply a medieval joke. It is a first, crude statement of a
constraint on anything that has to convert a continuous world into a discrete
decision.

## Examples

**Two job offers.** Same salary, same city, same commute, both employers
pleasant. People in this position report not calm indifference but agony — and
what usually breaks the deadlock is inventing a reason, or noticing which one you
were quietly hoping to be able to justify. The reason arrives after the decision.

**The supermarket shelf.** Two identical tins of the same soup, side by side. You
take one. You have never once experienced this as a philosophical crisis, which
is worth noticing: for trivial ties, picking is so automatic that you cannot even
catch yourself doing it.

**Aristotle's version.** In *De Caelo*, the case is not about hay. A man is
equally hungry and thirsty and stands equally distant from food and from drink,
and so must stay where he is. Aristotle raises it while criticising
Anaximander's argument that the earth stays still because it is equidistant from
everything — he is attacking an argument from symmetry, not endorsing paralysis.

**Dante's version.** *Paradiso* IV opens with a man between two foods, equally
distant and equally tempting, who would starve before getting either to his
teeth. Dante uses it to describe his own state, caught between two questions he
wants to ask Beatrice. This was written around 1321 — before any date at which
Buridan could have been teaching.

**A coin.** The cleanest tie-break ever invented, and the clearest evidence that
people do not really believe reasons must decide everything. Nobody thinks
flipping a coin over two equal options is irrational. Everybody thinks flipping a
coin over two unequal options is.

## Explore

The disagreement is about what freedom of the will consists in, and the donkey
was manufactured to embarrass one side of it.

**Intellectualism** holds that the will necessarily follows the intellect's last
practical judgement. Freedom, on this view, is not the ability to act against
your best judgement — it is the ability to deliberate well and to suspend action
while you do. This is broadly the position associated with Buridan and, before
him, with a strand of Aristotelian and Thomist psychology.

**Voluntarism** holds that the will has a power of its own, and can select among
options the intellect has left level. Al-Ghazali argued for something like this
in *The Incoherence of the Philosophers*, using two identical dates: if the will
could not differentiate without a reason, then God could not have created a world
at one moment rather than another, and the whole argument for the world's
eternity would go through. The stakes were theological, not agricultural.

The donkey story is a weapon manufactured by voluntarists against
intellectualists. It says: your theory implies starvation, and starvation is
absurd, so your theory is false.

**Buridan's actual answer** is more careful than the caricature allows. He held
that when the intellect finds no decisive reason, the will's proper response is
to *defer* — to withhold assent and send the intellect back to look again. This
is a real freedom: the freedom not to act yet. It is also, applied to a starving
donkey with two identical bales and no further evidence to gather, exactly the
behaviour the story mocks. The caricature is unfair but it is not unmotivated.

**Spinoza** does the unexpected thing and concedes. In the scholium to *Ethics*
II, proposition 49, he grants that a man in perfect equilibrium between food and
drink would indeed perish, and remarks that such a person should be reckoned an
ass rather than a man. For Spinoza, who denies free will altogether, there is no
embarrassment: a system with exactly balanced causes produces no motion, and that
is simply what determinism looks like at a symmetry point.

**Leibniz** denies the case can arise. The principle of sufficient reason
guarantees that everything has an explanation, and a perfect tie would be a state
of affairs with none. He argues in the *Theodicy* (1710) that the universe never
presents two exactly equal options, since no two things are ever exactly alike,
and that the donkey is therefore an impossible object rather than a
counterexample.

**Modern decision theory** meets the donkey as the problem of indifference.
Standard axioms of preference are stated over a *complete* ordering, and
indifference is permitted: if $a$ and $b$ are indifferent, both are optimal, and
the theory says take an optimal one. That is a coherent instruction, and the
donkey is not paralysed — it just has two correct answers. But this exposes what
the theory cannot supply: a *selection function* that turns "these are optimal"
into "do this one". Every real implementation needs a tie-break, and the
tie-break is arbitrary by construction.

The residual philosophical question is whether an arbitrary tie-break is a
rational act or merely a physical event that happens in the vicinity of a
rational agent. Ullmann-Margalit and Morgenbesser's answer — that picking is a
distinct and legitimate species of act — is the most widely adopted, and is
essentially a proposal to stop demanding that reasons explain everything.

## History

The honest version of this story is that almost nothing about it is what its name
suggests.

**c. 350 BCE — the oldest surviving version.** Aristotle, *On the Heavens* II.13
at 295b32, describes a man who is equally hungry and thirsty and equally far from
food and from drink, and who must therefore remain where he is. The context is a
criticism of Anaximander, who had argued that the earth stays at the centre of
the cosmos because, being equidistant from everything, it has no reason to move
one way rather than another. Aristotle thinks that argument is bad, and the
starving man is his illustration of how bad.

**c. 1095 — the case enters the argument about the will.** Al-Ghazali, in *The
Incoherence of the Philosophers*, uses a man facing two indistinguishable dates
to argue that the will genuinely can select without a differentiating reason. The
Arabic tradition passes the example into Latin scholasticism, where it becomes a
standard test case.

**c. 1321 — Dante.** *Paradiso* IV opens with the example in its familiar form:
between two equally distant and equally attractive foods, a free man would starve
before eating either. Dante's poem is finished before Buridan's career is well
under way, which by itself shows the example is not Buridan's invention.

**c. 1340 — Buridan, who does not tell the story.** Jean Buridan was a secular
master of arts at Paris, twice its rector, and the leading logician of his
generation. He wrote extensively on the freedom of the will and defended the
position that the will may defer choice when reason finds no decisive ground.
**The donkey appears nowhere in his surviving writings.** Nicholas Rescher's
1959–60 study of the problem's history, which remains the standard treatment,
found no such passage, and none has been produced since. Claims that Buridan told
the story with a dog, or that he told it at all, do not trace to any text of his.

**1597 — the name is attached.** The earliest recorded text linking Buridan's
name to the example is Schönlin's *Logicae Assertiones*. That is more than two
hundred years after Buridan's death, and roughly two thousand years after
Aristotle's version. The label "Buridan's ass" is therefore late, external and
hostile: a nickname given by critics to a doctrine, not a title given by an
author to an argument.

**1677 — Spinoza concedes the case** in the *Ethics*, and jokes about it.

**1710 — Leibniz rejects the case** in the *Theodicy*, on the grounds that
perfect symmetry never occurs.

**1959–60 — the history is written.** Rescher's "Choice Without Preference"
traces the transmission from Aristotle through the Arabic and Latin traditions,
and establishes the attribution as a misattribution.

**1977 — picking is separated from choosing.** Ullmann-Margalit and
Morgenbesser's paper gives the modern vocabulary.

**1984 / 2012 — the donkey becomes a theorem.** Leslie Lamport writes "Buridan's
Principle", arguing that a discrete decision based on a continuous input cannot
be made in bounded time, and connecting the story to arbiter metastability in
digital hardware. Repeatedly rejected by reviewers who found the physical claim
too strong, it was finally published in *Foundations of Physics* in 2012.

Nearly seven centuries of a philosopher's reputation resting on a farm animal he
never mentioned is, in its own way, a better illustration of how ideas travel
than anything in the story.

## Why It Matters

**It found a real hole in a good theory.** "Do whatever you judge best" is not a
complete instruction, because it says nothing about what to do when nothing is
best. Every workable account of rational action — medieval, modern, human or
mechanical — has had to bolt on a rule for ties, and the bolt is always
unjustifiable by the theory's own lights. That is a genuine structural finding,
and it came out of a joke about a donkey.

**It marks the limit of the principle of sufficient reason.** If everything that
happens has a reason, then the donkey cannot move. If the donkey moves, then
something happened without a sufficient reason. Leibniz saw the force of this
clearly enough to deny the premise, and the choice he faced — abandon the
principle or deny that ties occur — is still the choice on offer.

**It is why real systems have arbitrary tie-breaks written into them.** Sorting
algorithms specify stability. Voting systems specify how to resolve an exact tie,
usually by lot, and elections have genuinely been decided by drawing names.
Distributed systems break symmetry with unique identifiers, precisely so that
identical processes can never face identical evidence. In each case the designer
has decided, explicitly, that arbitrariness is preferable to deadlock.

**It gave engineering a real constraint.** Lamport's version is not a metaphor.
Any device converting a continuous input into a discrete output has a set of
inputs on which its decision time is unbounded, and no cleverness removes it. The
practical consequence is that synchroniser circuits are designed to reduce the
probability of an unresolved state to something acceptable — a mean time between
failures — rather than to zero. The donkey was right that there is a problem; it
was wrong only about how long the hesitation lasts.

## Modern Relevance

**Metastability in hardware.** Every time a signal crosses from one clock domain
to another, a flip-flop must decide which side of the clock edge the signal fell
on. When the timing is close enough, the flip-flop can enter a metastable state
whose resolution time has no upper bound. Chip designers compute a mean time
between failures from the settling time they can afford and add
synchroniser stages until the number is large enough. This is Buridan's ass with
a datasheet.

**Leader election and symmetry breaking.** In a network of identical processes
running identical code, no deterministic algorithm can elect a leader — the
symmetry is unbreakable from inside. Real systems break it by handing every node
a distinct identifier or by using randomisation. Distributed computing takes the
donkey's problem as a design premise rather than a puzzle.

**Recommendation and ranking systems.** When two items score identically, the
system must still order them, and the tie-break — item id, insertion time,
alphabetical order — becomes a real and often unnoticed source of bias.
Alphabetical tie-breaking in candidate lists has measurable effects on election
results, which is an arbitrary rule leaking into the world.

**Choice paralysis.** Psychologists studying decision difficulty find that near
ties, not clear differences, produce the longest deliberation and the most
post-decision regret. The observed pattern is that people manufacture a
differentiating reason after the fact and then report having acted on it — which
is precisely the voluntarist answer, arrived at empirically.

**Automated vehicles.** A control system facing two options it evaluates as
equally bad must still emit one command. The engineering answer is a
deterministic tie-break, chosen in advance and documented, because a vehicle that
hesitates is worse than a vehicle that arbitrarily picks. The donkey's field now
has lane markings.
