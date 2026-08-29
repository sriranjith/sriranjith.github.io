---
title: Schrödinger's Cat
slug: schrodingers-cat
alternateNames:
  - Schrödinger's Katze
  - The cat paradox
summary: >-
  A cat in a sealed box, its fate tied to a single radioactive atom, is
  supposedly both alive and dead until someone looks. Schrödinger invented the
  scene to show that this way of talking is ridiculous — and physics has been
  arguing about why ever since.
era: twentieth-century
date: 1935
year: 1935
origin: >-
  Devised by Erwin Schrödinger in his 1935 essay "Die gegenwärtige Situation in
  der Quantenmechanik", as a deliberately absurd illustration — a reductio — of
  what happens if the quantum wave function is read as a literal description of
  a macroscopic object.
people:
  - erwin-schrodinger
  - albert-einstein
  - niels-bohr
  - hugh-everett
domains:
  - physics
  - philosophy
types:
  - measurement
  - observation
  - knowledge
nature: thought-experiment
difficulty: intermediate
status: debated
concepts:
  - Superposition
  - Wave function collapse
  - The measurement problem
  - Decoherence
  - Interpretations of quantum mechanics
  - Reductio ad absurdum
relationships:
  - kind: related
    to: epr-paradox
    note: Written in the same year, in direct response to it. Schrödinger's essay was prompted by the EPR paper and is where the word "entanglement" was coined.
  - kind: related
    to: maxwells-demon
    note: Both put a hypothetical agent inside a physical system to expose an unclear boundary — there between information and thermodynamics, here between quantum and classical.
  - kind: contrasts-with
    to: twin-paradox
    note: The twin paradox is fully resolved and only feels contradictory; the cat exposes a problem physics has not settled.
  - kind: related
    to: sleeping-beauty-problem
    note: Both ask what a well-informed agent should believe about a situation whose description seems to depend on the observer's position in it.
  - kind: related
    to: ship-of-theseus
    note: Both are thought experiments whose value lies in the disagreement they expose rather than in any answer they supply.
references:
  - source: schrodinger-1935-gegenwaertige
    role: primary-source
    locator: "§5"
    note: The cat appears in section 5, introduced explicitly as a burlesque case.
  - source: einstein-podolsky-rosen-1935
    role: primary-source
    note: The paper that prompted Schrödinger's essay.
  - source: sep-qm-decoherence
    role: encyclopedia
    note: Why macroscopic interference is never seen, and why that is not the same as solving the measurement problem.
  - source: sep-qm-collapse
    role: encyclopedia
  - source: sep-qm-manyworlds
    role: encyclopedia
  - source: sep-quantum-bayesian
    role: encyclopedia
  - source: sep-qm-bohm
    role: encyclopedia
  - source: everett-1957
    role: primary-source
  - source: ghirardi-rimini-weber-1986
    role: primary-source
    note: The best-known theory on which the cat genuinely is not in a superposition.
  - source: zurek-2003-decoherence
    role: paper
  - source: arndt-1999-c60
    role: paper
    note: How large an object has actually been put into a superposition.
furtherReading:
  - title: "Trimmer's 1980 English translation of Schrödinger's 1935 essay"
    url: https://www.jstor.org/stable/986572
    note: >-
      John D. Trimmer, "The Present Situation in Quantum Mechanics: A
      Translation of Schrödinger's 'Cat Paradox' Paper", Proceedings of the
      American Philosophical Society 124 (1980), 323–338. The standard English text.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

In 1935 a physicist named Erwin Schrödinger got fed up.

His colleagues had a way of talking about tiny things — atoms, electrons — that
he thought was sloppy. They would say an atom is in *both* of two states at
once, and only settles into one when somebody measures it. Fine for atoms,
maybe. But Schrödinger wanted to know where that stops.

So he invented the silliest example he could think of.

Imagine a steel box. Inside is a cat, and a tiny lump of radioactive stuff, and
a Rube Goldberg machine: if a single atom in that lump decays, a detector
notices, a hammer swings, a flask of poison breaks. If no atom decays, nothing
happens and the cat is fine. Set the amount so that after an hour there is an
even chance either way. Close the lid.

Now, said Schrödinger, if you really believe atoms are in two states at once,
and the cat's fate is chained to the atom, then you have to say the cat is
somehow **both alive and dead** until you open the lid.

And here is the part almost everybody gets backwards. Schrödinger was not
announcing a marvel. He was making fun of it. He called the setup a
*burlesque* — a joke case. His point was: *look how ridiculous your idea sounds
when I scale it up to something with whiskers.*

He expected people to laugh and then fix the idea.

Ninety years later, nobody has quite fixed it.

## Understand

### What the physics actually says about small things

Quantum mechanics describes a system with a mathematical object called the wave
function. For a single atom, the wave function can hold two possibilities — say
"not yet decayed" and "already decayed" — added together. This is called a
**superposition**.

It is not merely that we do not know which one is true. If it were only
ignorance, the two possibilities could never interfere with each other, and
interference is exactly what experiments show. Fire particles one at a time at a
pair of slits and a striped pattern builds up, which only makes sense if each
particle's two routes are combined and can cancel out. Superposition earns its
keep. It is not a way of speaking; it is what makes the predictions come out
right.

### The problem Schrödinger was pointing at

There is a second rule bolted onto the first. When you *measure* the system, the
superposition disappears and you get exactly one outcome, with a probability
given by the wave function. This is usually called **collapse**.

Two rules, and no statement anywhere of when to use which. The equations that
govern how the wave function evolves are perfectly smooth and never collapse
anything. Collapse is an extra postulate, applied when a "measurement" happens —
but "measurement" is not defined in the theory. It is not a word the mathematics
knows.

Schrödinger's cat is a machine for exposing that gap. The chain runs
atom → detector → hammer → flask → cat, and every link is made of ordinary
matter obeying ordinary physics. If the first link can be in a superposition and
nothing in the theory says where collapse kicks in, the theory as literally
written predicts a superposition of a live cat and a dead cat. Schrödinger's
verdict: that shows something is missing from the theory, not that cats are
strange.

He was blunt about it. He wrote that the wave function of the whole box would
have living and dead cat "smeared out in equal parts", and called this a case
where "an indeterminacy originally restricted to the atomic domain becomes
transformed into macroscopic indeterminacy" — a state of affairs he described as
naive to accept as representing reality.

### Why nobody has ever seen a half-dead cat

Here the last ninety years have delivered a genuine, uncontroversial advance,
and it is worth separating carefully from the unresolved part.

Nothing is isolated. A cat exchanges air molecules, infrared photons, and heat
with its surroundings billions of times a second. Every one of those
interactions is itself a tiny measurement: the departing photon carries away a
record of whether the cat is alive.

The moment the environment holds a record, the two branches of the superposition
can no longer interfere. The delicate phase relationship that produces striped
patterns is not destroyed — it leaks out into the environment, spread across
astronomically many particles, where no realistic experiment could ever gather
it back. This is called **decoherence**, and the timescales are absurd. For a
dust grain in air the interference washes out in something like $10^{-31}$
seconds. For a cat it is vastly faster still. There is no waiting period during
which anyone could observe a blurred cat, even in principle.

Decoherence also explains why the *particular* alternatives are "alive" and
"dead" rather than some exotic combination of the two. The environment couples
to position and to energy, so it is position-like, robust, everyday properties
that get singled out. Wojciech Zurek named this **einselection** —
environment-induced superselection.

So the picture is settled at the level of what you can see: **a macroscopic
superposition is not something you will ever observe, and quantum mechanics
explains exactly why.**

### The part that is not settled

Decoherence tells you why you never see interference between a live cat and a
dead one. It does not tell you why there is *one* cat.

After decoherence, the mathematics still contains both branches. What it no
longer contains is any cross-term linking them — the state has become, for all
practical purposes, indistinguishable from a mere list of possibilities with
probabilities attached. But "for all practical purposes" is doing a great deal
of work. Nothing in the equations has removed a branch. Something still has to
be said about why your experience contains a single definite outcome.

That gap is called the **measurement problem**, and it is not a puzzle awaiting
a clever experiment. It is the reason competent physicists in 2026 still
disagree about what quantum mechanics is saying. The cat is the shortest way to
make anyone feel the force of it.

## Examples

**The atom is real; the cat is a prop.** Individual atoms genuinely are put into
superpositions, routinely, in laboratories. A single trapped ion can be prepared
in two internal energy states at once and made to interfere with itself. The
question the cat raises is not whether superposition is real but whether it has
an upper size limit.

**How big has anyone got?** The record keeps moving. Anton Zeilinger's group
sent C60 molecules — 60 carbon atoms, a football-shaped cage — through a
diffraction grating in 1999 and saw interference fringes. Later experiments have
pushed matter-wave interference to molecules of tens of thousands of atomic mass
units. Superconducting circuits carrying currents circulating in two directions
at once involve billions of electrons behaving collectively.

Compare that with a cat: roughly $10^{26}$ atoms. The gap is enormous, and every
attempt to close it runs into the same enemy — keeping the object isolated
enough that decoherence does not win first.

**A table of what the interpretations say about the box.** Same experiment, same
predictions, radically different stories.

| Interpretation | What is in the box before you look | What opening the lid does |
| --- | --- | --- |
| Copenhagen | Not a well-posed question; the wave function is a tool for predicting outcomes | Registers the outcome; talk of collapse is talk about the description |
| Many-worlds | Both branches, equally real | Entangles you; there are now two versions of you, each seeing one cat |
| Objective collapse (GRW) | A definite cat — collapse happened long before, spontaneously | Nothing special; you learn a fact |
| Bohmian mechanics | A definite cat, guided by a wave that does have both branches | Nothing special; you learn a fact |
| QBism | Your personal expectations about what you will find | Updates your beliefs |

The crucial point: **no experiment yet performed distinguishes between these.**
That is why the disagreement persists.

## Explore

The interpretations below are genuinely competing. Presenting one as the answer
would misrepresent the state of physics.

### Copenhagen

The loose family of views associated with Niels Bohr and Werner Heisenberg. The
wave function is not a picture of a cat; it is a device for computing the
probabilities of outcomes on classical measuring apparatus. Questions about what
the cat is doing between preparation and observation are, on Bohr's account, not
questions physics answers, because the description of a quantum system is
inseparable from the experimental arrangement that probes it.

The strength: it never makes a wrong prediction and demands no extra structure.
The complaint, pressed hard by Einstein and by Schrödinger himself: it draws a
line between "quantum system" and "classical apparatus" without saying where the
line is or what puts it there. The apparatus is made of atoms too.

### Many-worlds (Everett)

Hugh Everett's 1957 proposal simply deletes the collapse postulate. The
Schrödinger equation applies always and everywhere. When you open the box you
become entangled with it, and the universal wave function now contains a branch
with a live cat and a happy you, and a branch with a dead cat and a sad you.
Both are real; each version of you sees one definite result.

The strength: one rule instead of two, no vague "measurement", and decoherence
explains why the branches never interfere. The standing difficulty is
probability. If every outcome happens, it is not obvious what the number 0.5
means, and the various attempts to derive the Born rule from decision theory
inside the Everett picture — David Deutsch's and David Wallace's in particular —
are not accepted by everyone.

### Objective collapse

Collapse is not something observers do; it is a real physical process, and the
Schrödinger equation is approximately but not exactly right. The 1986 model of
GianCarlo Ghirardi, Alberto Rimini and Tullio Weber adds random spontaneous
localisations at a rate so low that a single particle is essentially unaffected,
but so amplified by the number of particles that any macroscopic object localises
in a fraction of a microsecond. The cat is definite because collapse really
happened, long before anyone looked.

The strength: it answers the question directly and it is not an interpretation
at all — it is a **different theory that makes different predictions**, so
experiments can rule it out. Interferometry with ever-larger masses and searches
for the tiny anomalous heating the models predict have already excluded large
regions of the parameter space. That is real scientific progress on a question
usually treated as philosophical.

### Bohmian mechanics

Particles always have definite positions, and the wave function is a real field
that guides them via a deterministic equation of motion. The cat is alive or
dead throughout; the wave function's other branch persists but becomes empty and
ceases to influence the particles. All standard quantum predictions are
recovered exactly.

The price is explicit and its advocates say it openly: the guiding equation is
**non-local**. What happens at one place depends instantaneously on the
configuration elsewhere. After Bell's theorem this is less of an embarrassment
than it once seemed, since no local theory of the kind Einstein wanted survives
anyway.

### QBism

On the Quantum Bayesian view developed by Christopher Fuchs, Rüdiger Schack and
Carlton Caves, the wave function is not a property of the cat at all. It encodes
a particular agent's personal degrees of belief about what they will experience.
Collapse is nothing more dramatic than a person updating their expectations when
something happens to them. There is no paradox because there was never a claim
that the box contains a smeared cat.

The complaint: critics argue this purchases dissolution of the puzzle by
declining to say what the world is like when nobody is looking, which is
precisely what many people wanted physics for.

### What everyone agrees on

Three things are not in dispute and should not be muddled with the above:

1. The predictions of quantum mechanics are the same on every interpretation and
   are confirmed to extraordinary precision.
2. Decoherence is real, calculable, measurable, and explains the absence of
   observed macroscopic interference.
3. The cat was Schrödinger's criticism, not his creed.

## History

**1926.** Schrödinger publishes the wave equation. He initially hopes the wave
function describes a real, smeared-out physical density of charge. Max Born's
probabilistic reading, also 1926, wins the argument, and Schrödinger never
becomes comfortable with it.

**1927–1930.** Einstein and Bohr conduct their famous exchanges at the Solvay
conferences, with Einstein proposing ingenious thought experiments and Bohr
answering them.

**May 1935.** Einstein, Podolsky and Rosen publish their argument that the
quantum description is incomplete. Schrödinger writes to Einstein, delighted;
Einstein writes back with a simpler version of the argument involving two boxes
and a ball, and, in a related letter, the example of an unstable gunpowder keg
that the formalism would describe as both exploded and unexploded.

**November–December 1935.** Schrödinger publishes "Die gegenwärtige Situation in
der Quantenmechanik" in *Naturwissenschaften*, in three instalments. The cat
occupies a single paragraph of a long essay. The same essay introduces the term
*Verschränkung*, entanglement, and calls it "the characteristic trait of quantum
mechanics, the one that enforces its entire departure from classical lines of
thought." Schrödinger's own summary of the cat is that it prevents us "from so
naively accepting as valid a 'blurred model' for representing reality."

**1957.** Everett's relative-state formulation. Bryce DeWitt popularises it as
"many worlds" in the 1970s and gives the cat scenario a new reading.

**1970 onwards.** H. Dieter Zeh, then Zurek in the 1980s, develop decoherence
theory and show quantitatively why macroscopic superpositions are unobservable.

**1986.** GRW gives the first workable theory in which collapse is a physical
process, making the cat question empirically testable rather than purely
interpretive.

**1996 onwards.** Serge Haroche's group in Paris creates "cat states" of a few
photons in a microwave cavity and watches decoherence happen in real time,
tracking the loss of coherence as it occurs. Haroche shares the 2012 Nobel Prize
in Physics with David Wineland for this line of work.

**A note on the legend.** Schrödinger is very often quoted as a mystic of
indeterminacy, and the cat is routinely used to argue that observation creates
reality. This inverts his position. He was among quantum theory's sharpest
critics, and his cat was a weapon aimed at exactly the reading it is now used to
support.

## Why It Matters

**It made a vague discomfort into a specific technical problem.** Before the cat,
unease about measurement could be waved away as philosophy. Afterwards there was
a concrete scenario that any proposed account of quantum mechanics had to
address. Every serious interpretation is judged in part on what it says about the
box.

**It kept foundations alive during decades when they were unfashionable.** From
the 1930s to the 1960s, quantum foundations was close to a career-ending field;
the working attitude was "shut up and calculate". The cat, and Einstein's
objections alongside it, preserved the questions that John Bell picked up in
1964 and turned into the most important experimental programme in the field.

**It forced the boundary question.** "Where does quantum end and classical
begin?" is now an experimental discipline with instruments, budgets and a moving
record, not a rhetorical flourish. Groups pursue interference with larger and
larger objects and place ever-tighter bounds on spontaneous-collapse models.
That research programme exists because someone insisted on scaling the question
up to something absurd.

**It is the reason the essay it appeared in matters.** Entanglement — the
concept, and the word — comes from the same paper. The single most important
resource in modern quantum technology was named in the act of complaining about
quantum theory.

## Modern Relevance

**Quantum computing.** A quantum computer is an engineering effort to keep a
system in superposition long enough to compute with it. Decoherence is the enemy
in a precise, budgeted sense: coherence times are the headline specification of
every processor, and the entire discipline of quantum error correction exists to
fight it. Schrödinger's thought experiment describes the central practical
obstacle of a multi-billion-dollar industry.

**Testing collapse models.** Optomechanics experiments cool small mirrors and
levitated nanoparticles towards the quantum regime, aiming to place them in
spatial superpositions. Alongside underground searches for the anomalous
radiation that collapse models predict, these have already ruled out sizeable
parts of the GRW parameter space. This is a live experimental programme with a
real chance of settling a question that began as a joke about a cat.

**Cat states as a technology.** "Cat state" is now standard laboratory
vocabulary for a superposition of two macroscopically distinguishable states of
a resonator. Some of the most promising superconducting error-correction schemes
deliberately encode a logical qubit in one, because its symmetry makes certain
errors easy to detect.

**Public understanding.** The cat is the most misused image in popular science —
routinely enlisted to suggest that consciousness creates reality, or that
anything ambiguous is "quantum". Correcting it is a useful exercise in a general
skill: checking whether a famous example was originally offered as support for
the claim it is now used to support. Here, it was offered as an attack on it.
