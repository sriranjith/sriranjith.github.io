---
title: Maxwell's Demon
slug: maxwells-demon
alternateNames:
  - Maxwell's Sorting Demon
  - The Szilard Engine
summary: >-
  A tiny doorkeeper sorts fast molecules from slow ones and makes a hot room and
  a cold room out of a lukewarm one, for free. It took 115 years to find the bill:
  the demon must eventually erase its own memory, and erasing costs heat.
hook: >-
  A tiny creature sorting fast molecules from slow ones appears to make heat
  flow the wrong way, for free, forever.
era: nineteenth-century
date: 1867 (letter to Tait), 1871 (published in Theory of Heat)
year: 1867
origin: >-
  Invented by James Clerk Maxwell in a letter to Peter Guthrie Tait in December
  1867, to argue that the second law of thermodynamics is statistical rather than
  absolute. William Thomson named it a "demon" in 1874.
people:
  - james-clerk-maxwell
  - leo-szilard
  - rolf-landauer
  - charles-bennett
domains:
  - physics
  - computer-science
types:
  - measurement
  - computation
  - knowledge
nature: apparent-contradiction
difficulty: advanced
status: resolved
renown: landmark
concepts:
  - Second law of thermodynamics
  - Entropy
  - Information
  - Landauer's principle
  - Logical reversibility
  - Feedback control
relationships:
  - kind: related
    to: black-hole-information-paradox
    note: >-
      Landauer's principle is what makes "information" a physical quantity with a
      price in joules. The black-hole question is what becomes of that quantity
      when it falls somewhere nothing comes back from.
  - kind: related
    to: schrodingers-cat
    note: >-
      Both are thought experiments about what an observer's act of finding out
      does to a physical system — one classical and thermodynamic, one quantum.
  - kind: contrasts-with
    to: olbers-paradox
    note: >-
      Both have a tempting escape that thermal equilibrium refuses. Olbers' dust
      would heat up and re-radiate for exactly the reason the demon's memory
      cannot be cleared for free.
references:
  - source: maxwell-1867-letter-to-tait
    role: primary-source
    note: The demon's first appearance, and Maxwell's own statement of the point.
  - source: maxwell-1871-theory-of-heat
    role: book
    locator: "Ch. 12, 'Limitation of the Second Law of Thermodynamics'"
    note: The published version.
  - source: szilard-1929-entropieverminderung
    role: paper
    note: The one-molecule engine, and the first quantitative link between information and entropy.
  - source: landauer-1961-irreversibility
    role: paper
    note: Erasing one bit costs at least kT ln 2 of heat. The key bound.
  - source: bennett-1982-thermodynamics-of-computation
    role: paper
    note: >-
      Shows measurement can be made reversible and free, and that the
      irreversible step is memory erasure. The accepted resolution.
  - source: berut-2012-landauer-verification
    role: paper
    note: The Landauer bound measured in the laboratory on a single-bit memory.
  - source: leff-rex-maxwells-demon-2
    role: book
    note: The standard sourcebook, including the papers arguing that the resolution fails.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

The air in the room you are sitting in is not still. It is a swarm of molecules
flying about at hundreds of metres a second, banging into each other and into
you. "Room temperature" is just the average of all those speeds. Some molecules
are much faster than average. Some are much slower.

Now imagine a box of that air, divided down the middle by a wall with a tiny
door in it. And imagine a very small, very quick creature standing at the door,
watching the molecules come.

Its job is simple. When a fast molecule comes at the door from the left, it opens
the door and lets it through to the right. When a slow molecule comes from the
right, it opens the door and lets it through to the left. Every other time, it
keeps the door shut.

The door is frictionless and weightless, so opening and closing it costs nothing.
The creature does no pushing. It just watches, and decides.

Wait a while. All the fast molecules end up on the right. All the slow ones end
up on the left. Fast means hot and slow means cold, so you now have a hot half
and a cold half — and you started with a room at one uniform temperature and
spent no energy at all.

That is a refrigerator with no plug. Worse, put a small engine between the hot
side and the cold side and you have free power, forever, from a room full of
lukewarm air.

Everything we know about heat says this is impossible. Nothing in the story
looks impossible.

## Understand

The rule being broken is the second law of thermodynamics, and it is worth being
precise about what it says. Heat flows from hot things to cold things and not the
other way; a system left alone gets more disordered, never less; you cannot
extract useful work from a single reservoir at one temperature. All three are the
same statement.

Maxwell's point in 1867 was not that he had broken it. It was subtler and more
interesting: **the second law is a statement about overwhelming odds, not about
what is forbidden.** Molecules do sometimes drift, by pure chance, into a
temporarily lopsided arrangement. The law holds because the odds against a
noticeable violation are astronomical, not because nature has a rule against it.
A being small enough and quick enough to work at the level of individual
molecules would not be bound by a law of averages.

That was Maxwell's actual thesis, and it is correct. But he left behind a
question he did not answer: if such a being existed, could it really win? And if
not, where exactly does it lose?

### The demon has to know things

Every version of the demon needs the same thing: it must **find out** which
molecules are fast before it can sort them.

That step was ignored for sixty years. Leó Szilárd took it seriously in 1929, and
did so by shrinking the problem until nothing was left but the essential move.

Szilard's engine has one molecule in a box. Slide a partition into the middle.
The molecule is now trapped on one side, but you do not yet know which. **Find
out.** Then attach a weight to the partition on the empty side and let the
molecule push the partition across as it bounces, lifting the weight. When the
partition reaches the end, remove it. You are back where you started, and the
weight is higher than it was.

You have converted heat from the surroundings into work, using nothing but one
bit of knowledge — which side the molecule was on. Do it a thousand times and you
have lifted a thousand weights.

Szilard's conclusion was that the act of finding out must itself carry a
thermodynamic cost, and that the cost must be at least large enough to cancel the
gain. That was right about the total and wrong about the location, and it took
another fifty years to see why.

### The bill is not for looking. It is for remembering.

Here is the modern answer, and it turns on something nobody thought to check.

Léon Brillouin argued in 1951 that measurement must cost energy, because you have
to bounce at least one photon off the molecule to see it. For thirty years this
was the accepted resolution. It is not general: it describes one particular way
of measuring, and cleverer schemes exist that measure for arbitrarily little.

Rolf Landauer found the real constraint in 1961, and it was somewhere else
entirely. He asked what it costs to run a computation, and noticed that the
expensive operations are the ones you cannot undo. If a device takes two
different inputs and produces the same output, you have destroyed the
information about which input it was — and Landauer showed that destroying
information has an unavoidable price:

> **Erasing one bit of information dumps at least $kT\ln 2$ of heat into the
> surroundings.**

At room temperature that is about $3 \times 10^{-21}$ joules. Tiny, but not
zero, and — crucially — not avoidable by being clever.

Charles Bennett put the two halves together in 1982, using his own 1973 result
that computation can in principle be made completely reversible. His conclusion
reverses Szilard and Brillouin:

**Measurement can be free.** There is no lower bound on the cost of finding out
which side the molecule is on. You can, in principle, correlate a memory bit with
the molecule's position reversibly, dissipating as little as you like.

**Memory cannot be.** The demon has a finite head. After enough molecules it runs
out of blank space and must clear the record to keep going. Clearing the record
is erasure. Erasure costs $kT\ln 2$ per bit — and $kT \ln 2$ per bit is *exactly*
the amount of work the demon extracted per bit of sorting.

The books balance to the last decimal, and they balance in the last place anyone
was looking.

### What the demon actually is

The demon is not a violation of the second law. It is a **battery made of blank
paper**.

A demon with a large empty memory can extract work from a single-temperature
reservoir, for a while, and this is not a paradox — the blank memory is a
low-entropy resource, exactly like a tank of cold gas, and the demon is spending
it. When the memory is full, the free lunch stops. To carry on you must erase,
and erasing dumps back into the room precisely the entropy you took out of it.

The second law survives, but with its scope enlarged. It is no longer a statement
about heat and matter only. It is a statement about heat, matter and *records*,
and there is a rate of exchange between them.

## Examples

**The Szilard cycle, with numbers.** One molecule, one box, temperature $T$.

1. Insert the partition. Cost: nothing.
2. Measure which side the molecule is on. Cost: in principle nothing (Bennett).
   Result: one bit stored in the demon's memory.
3. Let the gas expand isothermally from half the box to the whole box, lifting a
   weight. Work extracted: $kT\ln 2$.
4. Remove the partition. You are back at the start — except the memory bit is
   still set.
5. **Erase the bit** so the cycle can repeat. Heat dissipated: at least
   $kT\ln 2$.

Net work per cycle: zero, at best. Skip step 5 and you get free work — until you
run out of memory.

**The trapdoor that thinks it is a demon.** Marian Smoluchowski asked in 1912
what happens if you replace the intelligent demon with a purely mechanical
device: a light, spring-loaded flap that swings open one way and not the other,
so molecules pass left-to-right but not right-to-left.

It does not work, and the reason is instructive. The flap is small enough to be
pushed around by individual molecules, which means it is also small enough to be
kicked around by thermal motion. It rattles open at random, at the same
temperature as the gas, and lets just as much through backwards as forwards.
Richard Feynman later worked through the same lesson with a ratchet and pawl in
his *Lectures*: any mechanism sensitive enough to notice one molecule is also hot
enough to be shaken by them. **A mechanical demon thermalises.** Only a demon
with a memory that is genuinely colder — genuinely emptier — than its
surroundings can win anything, and that is a resource that runs out.

**A demon in the lab.** In 2010 Shoichi Toyabe and colleagues built a
Szilard-style information engine: a microscopic bead in a rotating electric
potential, with a feedback controller that watched the bead's Brownian motion and
raised a barrier behind it whenever it happened to hop the right way. The bead
was driven uphill against a load using no work at all — only information. The
engine ran on measurements. It also, of course, ran on a controller with a
hard disk, and that controller was hot.

## Explore

The Landauer–Bennett account is the standard resolution, appears in every modern
textbook, and has been experimentally confirmed. It is not, however, without
serious critics, and the shape of the disagreement is worth knowing.

**The circularity objection.** John Earman and John Norton, in a pair of papers
titled "Exorcist XIV: The Wrath of Maxwell's Demon" (1998–1999), argue that the
resolution assumes what it sets out to prove. Landauer's principle, they say, is
either derived from the second law — in which case using it to save the second
law is circular — or it is an independent postulate, in which case it needs its
own justification, which nobody has supplied from first principles. Norton has
pressed this line since, arguing that the fluctuations which defeat Smoluchowski's
trapdoor also defeat any physically realised demon, so no information-theoretic
argument is needed and none is available. On this view the demon is exorcised by
ordinary statistical mechanics, and the whole apparatus of bits and erasure is a
decorative extra.

**The defence.** Bennett replied in 2003 that the erasure cost can be motivated
independently, by counting phase-space volume: a memory that can be in two states
occupies twice the phase space of one forced into a single state, and Liouville's
theorem does not permit phase-space volume to be destroyed — only pushed
elsewhere, which is what the heat is. Owen Maroney, Orly Shenker and others have
mapped the argument in detail without settling it.

**A useful distinction.** Harvey Leff and Andrew Rex separate two questions that
often get merged. *Can a demon violate the second law?* No; on this everyone
agrees, and it has been agreed since Smoluchowski. *Is Landauer's principle the
reason?* Here the disagreement is live. The site classifies this entry as
resolved because the physical question is settled and the experiments agree with
the bound; the philosophical question of what does the explanatory work is not.

**What the experiments do and do not show.** Bérut and colleagues (2012) trapped
a single colloidal bead in a double-well optical potential — a one-bit memory —
and measured the heat released when the bit was reset. As the erasure was carried
out more and more slowly, the mean dissipated heat fell and levelled off at
$kT\ln 2$, approaching the bound from above and never crossing it. This confirms
that the bound is real and attainable. It does not, by itself, settle whether the
bound is a consequence of the second law or a partner to it.

**Quantum versions.** The demon has been rebuilt with qubits, with the
correlation between demon and system expressed as quantum mutual information, and
the generalised second law of Takahiro Sagawa and Masahito Ueda (2008 onwards)
gives the modified bound under feedback control. The structure survives
intact: the demon's advantage is exactly its mutual information with the system,
and it is spent when the correlation is destroyed.

## History

**December 1867.** Maxwell writes to Peter Guthrie Tait describing "a very
observant and neat-fingered being" who can see individual molecules and operate a
frictionless slide. His stated aim: "to pick a hole" in the second law of
thermodynamics — meaning, to show that it holds only statistically. He was
explicit that no real being could do it.

**1871.** The being appears in print in the last chapter of *Theory of Heat*,
under the heading "Limitation of the Second Law of Thermodynamics". Maxwell calls
it only "a being whose faculties are so sharpened that he can follow every
molecule in its course".

**1874.** William Thomson, later Lord Kelvin, calls it a "demon" in print.
Maxwell disliked the word; he meant a servant, not a devil, and complained that
Thomson's label suggested malice. The name stuck anyway.

**1912.** Marian Smoluchowski shows that a purely mechanical demon — a
spring-loaded trapdoor — cannot work, because thermal fluctuations operate the
door as often as the molecules do. This settles the mechanical case for good and
leaves only the intelligent case open.

**1929.** Leó Szilárd reduces the problem to a single molecule and a single bit,
and argues that acquiring one bit of information must produce at least $k\ln 2$
of entropy. His paper is the founding document of the physics of information,
published fifteen years before anyone spoke of information theory.

**1949–1951.** Léon Brillouin and Dennis Gabor develop the measurement-cost
argument: seeing a molecule requires a photon distinguishable from the thermal
background, and that photon carries the necessary entropy. This becomes the
textbook answer for a generation.

**1961.** Rolf Landauer, at IBM, derives the erasure bound while studying the
thermodynamic limits of computers, not demons. The connection to Maxwell is not
his main subject.

**1973.** Charles Bennett proves that computation can be made logically
reversible — every step undoable — so that computing as such has no lower
thermodynamic bound.

**1982.** Bennett applies the reversibility result to the demon and identifies
memory erasure as the irreducible cost. Measurement, he shows, is not the
bottleneck; Szilard and Brillouin had located the fee correctly in total and
incorrectly in kind.

**1998–1999.** Earman and Norton publish the "Exorcist" papers and open the
philosophical dispute that continues today.

**2010–2012.** Toyabe and colleagues demonstrate information-to-energy conversion
in a Szilard-type engine (*Nature Physics*, 2010). Bérut, Arakelyan, Petrosyan,
Ciliberto, Dillenschneider and Lutz measure the Landauer bound directly on a
one-bit colloidal memory (*Nature*, 2012). The 145-year-old thought experiment
becomes a bench-top measurement.

## Why It Matters

**It changed what the second law is a law about.** Before the demon, thermodynamic
entropy was a property of steam and gases. After Szilard, Landauer and Bennett,
it is a property of any physical system that stores or destroys distinctions —
including a hard disk, a neuron and a strand of DNA. Landauer's slogan,
"information is physical", is the demon's legacy in four words.

**It put a hard floor under computing.** Every irreversible logic gate in every
processor ever built pays Landauer's toll. The bound at room temperature is
$kT\ln 2 \approx 2.9 \times 10^{-21}$ joules per bit erased. Current CMOS logic
dissipates roughly three to four orders of magnitude more than that per
operation, so the bound is not yet the binding constraint — but it is the only
constraint that no engineering can remove, and the gap has been closing for
decades.

**It is why reversible and quantum computing exist as fields.** Bennett's 1973
result — that you can compute without erasing, if you are willing to carry your
intermediate results around — is the reason adiabatic and reversible logic are
studied at all. It is also structural to quantum computing: quantum evolution is
unitary and therefore reversible by construction, which is why a quantum circuit
is built from invertible gates and why measurement is the step that costs
something.

**It made the second law survivable at small scales.** Nanomachines, molecular
motors and single-molecule experiments all operate in the regime where thermal
fluctuations are comparable to the energies involved — exactly the demon's
regime. The framework built to answer Maxwell is the framework used to analyse
them.

## Modern Relevance

**Stochastic thermodynamics.** The fluctuation theorems of Christopher Jarzynski
(1997) and Gavin Crooks (1999) extend thermodynamics to systems where the second
law can be violated in individual trials, provided it holds on average. This is
Maxwell's original insight — the law is statistical — made into a working
quantitative tool. It is now the standard language for molecular motors, protein
folding and single-molecule pulling experiments.

**Feedback control with an entropy budget.** Sagawa and Ueda's generalised second
law states that the extra work extractable under feedback is bounded by the
mutual information acquired. Any controller acting on a small, noisy system —
optical tweezers, a scanning probe, an error-correcting code — is doing demon
bookkeeping.

**Biology.** Kinetic proofreading, the mechanism by which ribosomes and DNA
polymerases achieve error rates far below what equilibrium binding energies
allow, works by spending free energy to discard wrong intermediates. That is
erasure, biologically implemented, and the energy cost is Landauer's in
everything but name.

**Data-centre energy.** The world's computing infrastructure now consumes a
measurable fraction of global electricity. Almost none of that goes to Landauer's
bound; it goes to charging capacitors, driving wires and moving air. But the
existence of a floor, and the knowledge that the floor is thirteen thousand times
lower than current practice, is what keeps low-power and reversible-logic research
funded.

**Black holes.** Bekenstein and Hawking's result that a black hole has an entropy
proportional to its horizon area, and Landauer's that information has a
thermodynamic price, together make "what happens to the information" a question
with units attached. That is the thread running from Maxwell's doorman to the
black-hole information paradox.

## Deep Dive

### The Szilard engine

One molecule of ideal gas in a box of volume $V$ at temperature $T$. Insert a
partition at the midpoint; the molecule is confined to volume $V/2$. Measure
which half, then allow the partition to move quasi-statically to the far wall
against a load. The isothermal work done by a one-particle gas is

$$W = \int_{V/2}^{V} P\,dV' = \int_{V/2}^{V} \frac{kT}{V'}\,dV' = kT\ln 2 .$$

Heat $Q = W = kT\ln 2$ is drawn from the reservoir, the gas returns to its
initial macrostate, and the only surviving change in the universe is one bit set
in the demon's memory.

If the cycle could be closed without touching that bit, we would have a perpetual
motion machine of the second kind. It cannot.

### Landauer's bound

Model the memory as a particle in a symmetric double well, the two wells being
the states $0$ and $1$. Before erasure the particle may be in either well: the
accessible phase-space volume is $2\Omega$. After erasure — "set to $0$",
regardless of the prior state — the accessible volume is $\Omega$.

The memory's entropy therefore changes by

$$\Delta S_{\text{mem}} = k\ln\Omega - k\ln 2\Omega = -k\ln 2 .$$

Erasure is *logically irreversible*: two input states map to one output state, so
the map is not invertible. Since total entropy cannot decrease, the environment
must absorb at least $k \ln 2$, and at temperature $T$ that is heat

$$Q \ \ge\ kT\ln 2 \ \approx\ 2.87\times10^{-21}\ \mathrm{J} \quad (T = 300\ \mathrm{K}).$$

Equivalently, work $W \ge kT\ln 2$ must be supplied to perform the erasure. Note
what the bound is *not* about: it says nothing about the cost of computing, only
about the cost of forgetting.

### Bennett's cycle

Bennett's contribution is a bookkeeping argument. Write the demon's operating
cycle as:

1. **Measure.** Establish a correlation between memory bit $M$ and molecule
   position $X$. This can be done by a controlled-NOT-like operation, which is
   logically reversible and therefore has no lower bound on dissipation.
   Mutual information gained: $I(M{:}X) = \ln 2$ nats.
2. **Extract.** Use the correlation to run the Szilard step. Work obtained:
   $kT\ln 2$. The correlation is consumed: after the expansion, $M$ no longer
   tells you anything about $X$.
3. **Reset.** Return $M$ to a standard state so the cycle can repeat. Because $M$
   is now uncorrelated with anything, this is a genuine erasure. Cost:
   $\ge kT\ln 2$.

Net over one full cycle: $\Delta W \le 0$. The second law holds. The essential
observation is that step 1 is reversible and step 3 is not, and that the
literature spent fifty years charging the fee to step 1.

### The generalised second law

For a system under feedback control by a demon that acquires mutual information
$I$ about it, the Sagawa–Ueda bound replaces the ordinary Kelvin statement:

$$\langle W_{\text{ext}}\rangle \ \le\ -\Delta F + k T\, I .$$

Setting $I = 0$ recovers the usual second law: no work from one reservoir.
Setting $I = \ln 2$ for a single perfect binary measurement recovers Szilard's
$kT\ln 2$. The demon is not exempt from thermodynamics; it appears in the
inequality as a term.

### Why the trapdoor fails

For Smoluchowski's mechanical valve, the flap must have a restoring energy scale
$E_{\text{spring}}$. To respond to a single molecular impact it needs
$E_{\text{spring}} \lesssim kT$. But a flap with $E_{\text{spring}} \lesssim kT$
is itself in thermal equilibrium with the gas and opens spontaneously at a rate
$\sim e^{-E_{\text{spring}}/kT} \sim 1$. Detailed balance is restored exactly.
There is no regime in which the valve is both sensitive enough to rectify and
stiff enough not to rattle — which is the mechanical statement of the same
conclusion the informational argument reaches: **you cannot get order out of a
system that is at the same temperature as its surroundings, and a demon's blank
memory is the only way to be colder.**
