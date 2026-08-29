---
title: The Grandfather Paradox
slug: grandfather-paradox
alternateNames:
  - The grandfather killer
  - Auto-infanticide paradox
summary: >-
  Travel back in time and kill your grandfather before your parent is conceived,
  and you are never born — so you never travel back, so he lives. The scenario is
  not obviously impossible in general relativity, which is why physicists have
  spent decades explaining why it never happens.
era: twentieth-century
date: 1943 (Barjavel's novel), with antecedents from the 1920s
year: 1943
origin: >-
  The scenario is usually credited to René Barjavel's 1943 novel "Le Voyageur
  Imprudent", though similar arguments circulated in science fiction magazines
  and letter columns from the late 1920s.
people:
  - rene-barjavel
  - igor-novikov
  - kip-thorne
  - david-deutsch
  - stephen-hawking
domains:
  - physics
  - philosophy
  - logic
types:
  - causality
  - time
  - self-reference
nature: logical-contradiction
difficulty: intermediate
status: debated
concepts:
  - Closed timelike curves
  - Self-consistency
  - Causal loops
  - Bootstrap paradox
  - Chronology protection
  - Branching timelines
relationships:
  - kind: related
    to: liar-paradox
    note: Both generate a contradiction by feeding an output back into its own cause — one through reference, one through time.
  - kind: related
    to: epr-paradox
    note: Both press on whether influence can outrun ordinary causal order, and both end up policed by what can actually be signalled.
  - kind: related
    to: schrodingers-cat
    note: Deutsch's resolution of the grandfather paradox is built directly on the interpretation of quantum mechanics that the cat exposes.
  - kind: contrasts-with
    to: twin-paradox
    note: Both are relativity puzzles about time. The twin paradox is entirely resolved within special relativity; this one is not resolved at all.
  - kind: related
    to: unexpected-hanging-paradox
    note: Both turn on a prediction about the future that undermines the conditions that produced it.
  - kind: related
    to: russells-paradox
    note: The same self-undermining shape — a thing whose existence entails its own non-existence.
references:
  - source: barjavel-1943-voyageur
    role: primary-source
    note: The novel usually credited with the canonical version.
  - source: lewis-1976-time-travel
    role: paper
    note: The standard philosophical treatment; argues the paradox rests on an equivocation in "can".
  - source: morris-thorne-yurtsever-1988
    role: paper
    note: Made causality violation a mainstream physics problem again.
  - source: friedman-novikov-1990
    role: paper
    note: The technical statement of the self-consistency principle.
  - source: deutsch-1991-ctc
    role: primary-source
    note: The quantum fixed-point resolution.
  - source: hawking-1992-chronology
    role: primary-source
    note: The chronology protection conjecture.
  - source: sep-time-travel-physics
    role: encyclopedia
  - source: sep-time-travel
    role: encyclopedia
furtherReading:
  - title: "Time Travel and Modern Physics (Stanford Encyclopedia of Philosophy)"
    url: https://plato.stanford.edu/entries/time-travel-phys/
    note: The clearest survey of consistency constraints and what general relativity actually permits.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Suppose someone hands you a working time machine and one instruction: go back to
1935 and stop your grandfather from ever meeting your grandmother.

You arrive. You find him — young, alive, no idea who you are. You do the deed,
whatever it is. He never marries. Your mother is never born. You are never born.

But if you were never born, who went back to 1935?

Nobody. So your grandfather lives, meets your grandmother, and your mother is
born, and so are you. And you have a time machine and an instruction. So you go
back and stop him. So you are never born. So you go back. So you are never born.

The loop has no stable state. It is not that the story ends badly; it is that the
story cannot end at all. Every version contradicts the version that produced it.

The obvious response is: *well, that just proves time travel is impossible.* It
is a decent response. It is also not quite good enough, for a reason that has
kept physicists busy since 1988.

Einstein's general theory of relativity — the best theory of gravity we have,
confirmed to spectacular precision — does not straightforwardly forbid loops in
time. Solutions to its equations exist in which you can travel forward, always
forward, into your own past. They were found by Kurt Gödel in 1949 and by others
since. They may all be physically unrealistic. Nobody has been able to prove it.

So the question stops being "what a fun story" and becomes: **if the equations
allow the trip, what stops the murder?**

## Understand

### What kind of paradox this is

Notice that the grandfather paradox is not a puzzle about the strangeness of
time. It is a straightforward logical contradiction: a proposition and its
negation both follow. "Your grandfather dies childless in 1935" and "your
grandfather has children" cannot both be facts about the same history.

That already tells you something important. Whatever else is true,
**the contradictory history does not happen.** Contradictions are not events that
occur with low probability; they are not events at all. So the real question is
never "what happens if you succeed?" It is: *given that you cannot succeed, what
is the mechanism?*

Everything interesting is in that word "mechanism". Four serious answers are on
offer, and they disagree with one another substantially.

### Answer 1: You go back, and you fail

This is the **Novikov self-consistency principle**, named for the Russian
astrophysicist Igor Novikov and developed with Kip Thorne's group at Caltech in
the late 1980s.

The idea: if closed timelike curves exist, then the only histories that occur are
globally self-consistent ones. You can travel to 1935. You can try to kill your
grandfather. You will fail — not because a force field stops you, but because the
history in which you succeed is not a history. The gun jams. Your hand shakes.
You shoot the wrong man. You get the year wrong. You discover, mid-attempt, that
the man you shot was not your grandfather after all, and that your grandmother's
first husband died in exactly this way, which is family legend.

The philosopher David Lewis made the corresponding point in 1976. Can you kill
him? Relative to your skills, the loaded gun, and the clear line of sight — yes,
in exactly the sense in which anyone can do anything. Relative to the further
fact that he did not die then — no. Both are true, of different senses of "can".
There is no contradiction in a person who is able to do something and does not do
it. What is impossible is only the *conjunction* of the whole history.

The uncomfortable feature is the statistics. If you make a thousand attempts, all
thousand fail, and the failures will look like an implausible run of coincidence.
Consistency is enforced by improbable-looking accident. Novikov's response is
that improbable is not impossible, and that a constraint on global solutions is
no stranger than any other boundary condition in physics — no stranger, he
argued, than the fact that you cannot walk through a wall.

Friedman, Novikov, Thorne and colleagues gave this real technical support in
1990. They studied billiard balls sent through a wormhole time machine on
trajectories that would knock their earlier selves off course — the mechanical
version of grandfather murder. What they found was striking: for the initial
conditions they examined, self-consistent solutions always existed. Typically
*many* of them. A ball aimed to deflect itself instead receives a glancing blow
that sends it through the wormhole at just the angle needed to deliver that
glancing blow. The apparently paradoxical setups turned out to have consistent
completions, not none.

That result cuts both ways. It supports consistency, but it also means the
classical initial-value problem near a time machine has no unique answer — which
is its own kind of breakdown.

### Answer 2: You go back to a different history

Time travel takes you to a *branch*. You kill the grandfather of that branch's
version of you, who is now never born there. Your own history, in which your
grandfather survived, is untouched. You still exist, because you came from
somewhere else.

This dissolves the contradiction cleanly, because the two claims are now about
different histories. Nothing says P and not-P about the same world.

Two very different things are called "branching", and they are worth separating.

The **fiction version** is a free-floating multiverse in which the past is
alterable. It is the standard of countless films, and it has no support in any
current physical theory. It also throws away the thing that made time travel
interesting: you are no longer changing your past, merely visiting somebody
else's.

The **physics version** is Deutsch's, and it is more disciplined.

### Answer 3: Deutsch's quantum resolution

David Deutsch showed in 1991 that quantum mechanics changes the problem
substantially.

The classical difficulty is that a system on a closed timelike curve must arrive
in the same state it departed in, and grandfather-style dynamics have no such
state — a bit that goes back and flips itself has no fixed point among {0, 1}.

Quantum states are not restricted to 0 and 1. They can be *mixed* — a statistical
combination. And a general quantum operation on a finite-dimensional system
always has at least one fixed point among mixed states. Deutsch's condition is
that the density matrix of the system entering the closed timelike curve must
equal the density matrix coming out. For the grandfather circuit, the fixed point
is the even mixture: half of the time you exist and go back, half of the time you
do not. Self-consistency is restored, always, with no exceptions and no
coincidences required.

Deutsch reads this in Everettian terms: the traveller who emerges in the past is
in a different branch of the wave function from the one they left. You kill a
grandfather; the grandfather you kill is not the one who fathered you, because
"the one who fathered you" is in the branch you departed from. Nothing needs to
jam anyone's gun.

The proposal is not free of cost. Deutsch's condition makes closed-timelike-curve
computers implausibly powerful — Scott Aaronson and John Watrous showed in 2009
that they would let a classical or quantum computer solve every problem in
PSPACE, which most researchers regard as a warning rather than a feature. It
also introduces discontinuities: nearby input states can be forced to wildly
different fixed points, and the map from input to output is non-linear, which
sits badly with the rest of quantum mechanics. An alternative proposal by Seth
Lloyd and collaborators — post-selected teleportation, or "P-CTCs" — keeps
linearity but gives different answers, and is likewise unproven.

### Answer 4: The trip never happens

**Chronology protection.** Stephen Hawking's 1992 conjecture is that the laws of
physics conspire to prevent closed timelike curves from forming in the first
place, so that the question of what you would do in 1935 never arises.

The argument is a calculation, not a preference. As a spacetime approaches the
moment when a time machine would switch on — the **chronology horizon** — vacuum
fluctuations of quantum fields can circulate around the incipient loop, again and
again, each pass amplifying the last. Hawking found that the expectation value of
the stress-energy tensor diverges on the horizon. The back-reaction of that
energy on the geometry would destroy the machine at exactly the moment it was
about to work.

He put it memorably: chronology protection "makes the universe safe for
historians."

The conjecture is not proved. Establishing it in general appears to need a full
theory of quantum gravity, since the divergence occurs precisely where the
semiclassical approximation stops being trustworthy. Some models evade the
divergence. Hawking himself noted the strongest supporting evidence available:
"we have not been invaded by hordes of tourists from the future."

## Examples

**The bootstrap paradox — the paradox's mirror image.** A traveller takes a copy
of Shakespeare's plays to 1590 and gives them to a young William Shakespeare, who
copies them out. Where did the plays come from? Nobody wrote them. They are a
consistent loop — no contradiction anywhere — but information appears with no
origin.

This is instructive because it shows self-consistency is not sufficient for
comfort. Novikov's principle permits bootstrap loops; they violate no logic. What
they violate is a strong intuition that information and structure must be
produced somewhere. They also seem to violate the second law of thermodynamics in
spirit, since order appears without a source. Fully consistent, still deeply odd.

**The billiard ball, worked through.** A ball rolls towards a wormhole mouth. It
emerges from the other mouth three seconds earlier and strikes its younger self,
knocking it away from the entrance so it never enters.

Paradox — until you look for the consistent alternative. Suppose the emerging
ball delivers only a *glancing* blow, deflecting the younger ball onto a slightly
different path that still enters the wormhole, but at the angle needed to emerge
exactly where it must to deliver that glancing blow. Friedman, Novikov and
colleagues found such solutions for essentially every initial condition they
tried. Often infinitely many.

The lesson: what looks like "no possible history" is usually "a history you did
not think of". The classical worry is not that solutions fail to exist. It is
that they multiply.

**The self-consistent assassin.** You go back to kill Hitler in 1908. You wait in
Linz with a rifle. A bird startles you; the shot misses; the noise sends the
young man into a doorway where he meets someone who lends him a book. Every
element is a perfectly ordinary event. The improbability is not in any single
step but in the fact that some such chain must occur *every* time.

Novikov accepts this. His critics — including Hawking — find it a strange
picture of physical law: not a force preventing you, but reality's stubborn
refusal to be arranged the way you arranged it.

**A comparison.**

| Response | Can you go back? | Can you try? | What stops the contradiction | Status |
| --- | --- | --- | --- | --- |
| Novikov consistency | Yes | Yes | Only self-consistent global histories exist | Well-defined, technically supported, statistically odd |
| Deutsch quantum CTC | Yes | Yes, and you succeed | Fixed-point density matrix; you land in another branch | Well-defined, has awkward consequences |
| Chronology protection | No | — | Quantum back-reaction destroys the machine | Conjecture, unproven, needs quantum gravity |
| Fiction branching | Yes | Yes, and you succeed | Different timeline entirely | No physical support |

## Explore

### Where the disagreement really is

Everyone agrees that a contradictory history does not occur. That is not a
physics claim; it is logic. The dispute is about which of these is true:

1. Closed timelike curves exist, and consistency is enforced by the global
   structure of solutions. (Novikov)
2. Closed timelike curves exist, and consistency is enforced by quantum
   mechanics landing you elsewhere. (Deutsch)
3. Closed timelike curves do not form. (Hawking)

There is no consensus. Each position has serious defenders and unresolved
technical problems. This is why the entry's status is *debated* rather than
resolved.

### Does general relativity really permit this?

Yes, in the sense that exact solutions containing closed timelike curves are
known. Whether any of them describe anything that could exist is a different
question, and the honest answer is that we do not know.

- **The Gödel universe (1949).** Kurt Gödel, at Princeton and a friend of
  Einstein's, found a rotating cosmological solution in which closed timelike
  curves pass through every point. It requires a nonzero cosmological constant
  of a specific kind and a globally rotating universe. Our universe is not
  observed to rotate. Einstein's published reaction was that solutions like this
  might have to be excluded "on physical grounds".
- **Van Stockum dust (1937) and the Tipler cylinder (1974).** An infinitely long
  rotating cylinder of dust drags spacetime around enough to permit loops. The
  "infinitely long" is not decoration; Hawking later showed the finite versions
  do not work without exotic matter.
- **Kerr black holes.** The interior of a rotating black hole solution contains a
  region with closed timelike curves near the ring singularity. Whether that
  region is physical — the inner horizon is thought to be unstable to a
  mass-inflation instability — is unresolved.
- **Traversable wormholes (Morris, Thorne and Yurtsever, 1988).** The one that
  reopened the field. Hold a wormhole open, move one mouth at relativistic speed,
  bring it back, and the differential ageing of the two mouths produces a closed
  timelike curve. Kip Thorne came to this while helping Carl Sagan fix the
  interstellar travel in his novel *Contact*.

The universal catch: holding a wormhole open requires matter that violates the
averaged null energy condition — negative energy density along light rays.
Quantum field theory allows small, transient violations (the Casimir effect is
one), but quantum inequalities due to Ford and Roman sharply limit how much
negative energy can be assembled and for how long. Whether enough can be gathered
to hold open a macroscopic wormhole is unknown, and most estimates say no.

### Why "just say it's impossible" is not enough

You might reasonably think this is all overwrought. The paradox proves time
travel is impossible; done.

The trouble is that logic constrains *histories*, not *theories*. The
contradiction rules out the paradoxical history. It does not tell you that
general relativity has no solutions with closed timelike curves — because it
demonstrably does. So the argument that "the paradox refutes time travel" is
really the claim that some further physical principle rules out those solutions.
That principle is precisely what chronology protection is trying to be, and it
has not been proved.

Put differently: the grandfather paradox is not an argument. It is a demand for
one.

### The self-consistency statistics problem

The sharpest objection to Novikov concerns probability. On his picture,
paradox-generating attempts fail every time, through mechanisms that are
individually ordinary and collectively astronomically unlikely. Physics normally
does not work this way; low-probability events are supposed to be rare, not
systematically enforced.

Novikov's defence is that we are misreading the situation. Consistency is a
constraint on the space of allowed solutions, and once a constraint is imposed,
conditional probabilities within the allowed space are perfectly normal. It only
looks like a conspiracy from the outside. Compare: nothing conspires to stop you
seeing an event before it happens; the light cone structure simply does not
contain such a solution.

Critics reply that this makes physical law non-local and teleological in a way
that nothing else in physics is. The disagreement is genuine, and it is
philosophical as much as technical.

### Does Deutsch's answer really preserve the paradox's bite?

If the traveller arrives in a different branch, then in a strict sense they are
not visiting their own past. Some critics — including advocates of the Lloyd
post-selection alternative — argue this is branching-fiction dressed in quantum
formalism, and that it evades the paradox rather than resolving it. Deutsch's
reply is that on the Everett interpretation the branches are all equally real
parts of one physical world, so the traveller genuinely does move within a single
universe governed by one wave function. Whether that is a resolution or a
relabelling depends on how seriously you take many-worlds — which returns you to
Schrödinger's cat.

## History

**Antecedents (1920s–1930s).** The scenario predates its famous name. A 1929
letter by Charles Cloukey in *Amazing Stories* raises the difficulty; several
pulp stories of the period toy with killing an ancestor. The 1933 novel
*Ancestral Voices* by Nathaniel Schachner has a traveller kill a fifth-century
barbarian, erasing many of his descendants. None of these is a clean first
statement, and claims of a single origin should be treated with caution.

**1943.** René Barjavel publishes *Le Voyageur Imprudent*. Its traveller,
Pierre Saint-Menoux, kills one of his own ancestors during the Napoleonic era —
in the novel a great-grandfather, not a grandfather — and vanishes. This is the
version that gets cited, and "grandfather paradox" is the name that stuck, though
the popular label drifted from Barjavel's own text.

**1949.** Kurt Gödel presents his rotating-universe solution as a seventieth
birthday present to Einstein, demonstrating that general relativity permits
closed timelike curves. Einstein's response, published in the same volume,
concedes the point and suggests such solutions may need to be excluded on
physical grounds — but offers no principle for doing so.

**1976.** David Lewis publishes "The Paradoxes of Time Travel", giving the
standard philosophical treatment. His equivocation analysis of "can" remains the
reference point for the philosophical literature.

**1988.** Morris, Thorne and Yurtsever publish the wormhole time machine paper.
Causality violation becomes an active research area in mainstream physics for the
first time.

**1990.** Friedman, Morris, Novikov, Echeverria, Klinkhammer, Thorne and
Yurtsever publish the Cauchy problem paper, giving the self-consistency principle
its technical footing through the billiard-ball models.

**1991.** Deutsch publishes the quantum CTC condition.

**1992.** Hawking publishes the chronology protection conjecture. He and Thorne
had a running disagreement on the subject, of a piece with their other famous
bets.

**2009.** Aaronson and Watrous show that Deutsch's closed timelike curves would
make classical and quantum computation equally powerful, both equal to PSPACE.
Lloyd and colleagues propose the post-selected alternative, and report a
simulation of it with photons in 2011 — a simulation of the *circuit*, not of
actual time travel.

**2014 onwards.** Experimental groups simulate CTC-like circuits with photonic
systems, testing the mathematical structure of the proposals. These are analogue
studies of the equations; no closed timelike curve is involved.

## Why It Matters

**It is the reason causality is a live technical constraint rather than an
assumption.** Global hyperbolicity — the condition that a spacetime has a
well-posed initial-value problem — is now something relativists check and
argue about, and the chronology protection literature exists because someone took
the grandfather paradox seriously enough to ask what would enforce it.

**It generated real physics.** The 1988 wormhole paper, the energy conditions
literature, the quantum inequalities of Ford and Roman, Hawking's stress-tensor
calculations: all of this is downstream of a question first posed in pulp
fiction. Thorne has said openly that the work began as a favour to a novelist.

**It clarified what a paradox demands.** The grandfather paradox does not prove
time travel impossible. It proves that *if* time travel is possible, some
mechanism must prevent inconsistent histories — and then it forces you to name
the mechanism. That is a useful pattern: a contradiction never tells you which
premise to drop, only that one must go.

**It exposed how loose "can" is.** Lewis's analysis has application well beyond
time travel, to free will, to counterfactuals, and to any argument where an
ability is asserted relative to one set of facts and denied relative to another.

## Modern Relevance

**Closed timelike curves as a computational resource.** The most concrete modern
work treats CTCs as a hypothetical model of computation and asks what they would
buy. The answer — Deutsch's version collapses P, BQP and PSPACE together — is now
a standard entry in the complexity zoo, and functions as evidence against the
model. If a physical assumption implies you can solve PSPACE-complete problems
efficiently, that is usually taken as a reason to doubt the assumption.

**Consistency conditions in distributed systems.** The structure of the
grandfather paradox — an operation that invalidates its own precondition — shows
up in database transactions, in optimistic concurrency control, and in
event-sourced systems where a retroactive correction changes state that later
events already read. The engineering answer is Novikov's in miniature: reject any
history that is not globally consistent, and replay.

**Causal ordering in physics.** Work on indefinite causal order — the quantum
switch, causal-inequality violations — asks whether quantum mechanics permits
processes with no fixed order of events. These are not time machines and do not
produce grandfather paradoxes, but the conceptual toolkit for asking "which
histories are consistent" came from this literature.

**Fiction as a serious tell.** The branching-timeline convention now dominant in
film is the one option with no physical support, precisely because it is the only
one that lets a character change the past and matter. Novikov consistency makes
for fatalistic stories; chronology protection makes for no story at all. The
popularity of the physically weakest answer is a small case study in how
narrative needs shape what the public believes physics says.
