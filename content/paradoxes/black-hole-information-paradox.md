---
title: The Black Hole Information Paradox
slug: black-hole-information-paradox
alternateNames:
  - Hawking information loss paradox
  - Information loss paradox
summary: >-
  Black holes evaporate. Hawking argued in 1976 that whatever falls in is
  destroyed with them, which quantum mechanics forbids. Fifty years of work has
  convinced almost everyone that information survives — without producing an
  agreed account of how it gets out.
era: twentieth-century
date: 1974/75 (Hawking radiation), 1976 (the paradox stated)
year: 1976
origin: >-
  Stated by Stephen Hawking in "Breakdown of Predictability in Gravitational
  Collapse" (1976), two years after his discovery that black holes radiate. If
  the radiation is exactly thermal, a pure quantum state collapses into a black
  hole and a mixed state comes out, which no unitary evolution allows.
people:
  - stephen-hawking
  - leonard-susskind
  - gerard-t-hooft
  - juan-maldacena
  - joseph-polchinski
  - don-page
domains:
  - physics
  - astronomy
types:
  - knowledge
  - measurement
  - observation
  - infinity
nature: open-problem
difficulty: expert
status: debated
concepts:
  - Hawking radiation
  - Unitarity
  - Bekenstein–Hawking entropy
  - Holographic principle
  - Black hole complementarity
  - AdS/CFT correspondence
  - Page curve
  - Firewalls
  - Entanglement islands
  - Replica wormholes
relationships:
  - kind: related
    to: epr-paradox
    note: The whole modern story is written in the language of entanglement entropy that EPR opened and Bell made physical.
  - kind: related
    to: maxwells-demon
    note: Both are about whether information is a physical quantity with thermodynamic consequences; Bekenstein's black hole entropy came from asking Maxwell's-demon-shaped questions.
  - kind: related
    to: schrodingers-cat
    note: Unitarity — the assumption Hawking's argument violates — is exactly the smooth Schrödinger evolution the cat's measurement problem is about.
  - kind: contrasts-with
    to: fermi-paradox
    note: Both are famous unresolved problems in physics and astronomy, but this one has a precise formal statement and Fermi's does not.
  - kind: related
    to: olbers-paradox
    note: Both begin as an apparently simple observation about the sky and end up constraining the global structure of the universe.
references:
  - source: hawking-1975-particle-creation
    role: primary-source
    note: The derivation of Hawking radiation.
  - source: hawking-1976-breakdown
    role: primary-source
    note: The paper that states the paradox.
  - source: bekenstein-1973-entropy
    role: paper
    note: Black hole entropy, the result that made the question askable.
  - source: page-1993-information
    role: paper
    note: The Page curve.
  - source: t-hooft-1993-dimensional-reduction
    role: primary-source
  - source: susskind-1995-world-hologram
    role: primary-source
  - source: susskind-thorlacius-uglum-1993
    role: paper
    note: Black hole complementarity.
  - source: maldacena-1998-adscft
    role: primary-source
    note: The strongest argument that evaporation is unitary.
  - source: hawking-2005-information-loss
    role: primary-source
    note: The written form of the 2004 concession.
  - source: amps-2013-firewalls
    role: primary-source
    note: The firewall argument.
  - source: penington-2019-islands
    role: primary-source
  - source: almheiri-2019-entanglement-wedge
    role: paper
  - source: almheiri-2021-entropy-review
    role: paper
    note: The review, and honest about what is still missing.
  - source: susskind-black-hole-war
    role: book
    note: The partisan but vivid narrative history.
furtherReading:
  - title: "The entropy of Hawking radiation (Almheiri, Hartman, Maldacena, Shaghoulian, Tajdini)"
    url: https://arxiv.org/abs/2006.06872
    note: The standard technical review of the island and replica-wormhole results.
  - title: "Black Holes: Complementarity or Firewalls? (Almheiri, Marolf, Polchinski, Sully)"
    url: https://arxiv.org/abs/1207.3123
    note: The firewall paper itself, and unusually readable for the field.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Burn a book.

It feels like the book is gone. But physicists will tell you something strange:
in principle, it is not. If you could track every atom of smoke, every photon of
light, every faint vibration in the air, and run the laws of physics backwards
with perfect precision, you could reconstruct the book — every word of it. The
information was scrambled beyond any practical hope of recovery, but it was never
destroyed. Physics, as far as anyone can tell, does not delete.

Now throw the book into a black hole.

For a long time the answer seemed easy: the book is inside, and inside is inside.
Inaccessible, but not destroyed. Fine.

Then in 1974 Stephen Hawking found something nobody expected. Black holes are not
permanently black. They glow, very faintly, and as they glow they shrink. Wait
long enough — for a stellar-mass black hole, something like $10^{67}$ years — and
the black hole evaporates away completely. It is gone.

And the glow, Hawking calculated, is featureless. It is thermal radiation, like
the glow of a hot coal: it carries a temperature and nothing else. It does not
depend on what fell in. Throw in a book, throw in an encyclopedia, throw in a
grand piano of the same mass, and the radiation coming out is identical.

So where did the book go?

Not inside — there is no longer an inside. Not into the radiation — the radiation
carries no trace of it. Hawking's answer, in 1976, was blunt and enormously
unwelcome: **the information is destroyed.** Physics does delete, after all,
whenever a black hole is involved.

Almost nobody wanted to accept that. Almost nobody could refute it either. The
argument that followed ran for thirty years, involved a formal bet, produced two
of the most important ideas in modern theoretical physics, and is still not
finished.

## Understand

### The rule Hawking's result breaks

Quantum mechanics has a property called **unitarity**. Informally: the total
number of possible states never changes, and evolution is reversible in
principle. Two different starting states always lead to two different ending
states. Nothing merges; nothing vanishes.

Unitarity is not a philosophical preference. It is what makes probabilities add
to 1. Give it up and the whole probabilistic structure of quantum mechanics
starts to come apart, and — as Tom Banks, Leonard Susskind and Michael Peskin
argued in 1984 — attempts to modify quantum mechanics to allow pure states to
become mixed tend to produce violent violations of energy conservation.

The distinction the paradox turns on is between a **pure** state and a **mixed**
one. A pure state is a complete description; a mixed state is a probability
distribution over states, meaning genuine ignorance. Unitary evolution takes pure
states to pure states, always. It can scramble a pure state so thoroughly that
any realistic measurement sees noise — that is what burning a book does — but it
never converts pure into mixed.

Hawking's 1976 argument is that black hole formation and evaporation does exactly
that.

### Why the radiation looked like it carried nothing

Hawking's calculation is done in **semiclassical gravity**: quantum fields on a
fixed, classical, curved spacetime. It is a controlled approximation and it works
beautifully as long as the black hole is much larger than the Planck scale.

The usual picture — pairs of virtual particles at the horizon, one falling in and
one escaping — is a serviceable cartoon but misleading in one important respect.
The right statement is about **entanglement**. The outgoing quantum and its
infalling partner are produced in an entangled pair. Consider only the outgoing
one, discarding its partner, and you get a mixed state: thermal radiation at the
Hawking temperature

$$T_H = \frac{\hbar c^3}{8\pi G M k_B},$$

which for a solar-mass black hole is about 60 nanokelvin — far colder than the
cosmic microwave background, which is why astrophysical black holes are currently
growing rather than evaporating.

Notice the sign. A black hole gets *hotter* as it loses mass, so evaporation
accelerates and ends in a burst.

The trouble now becomes visible. Every emitted quantum is entangled with a
partner behind the horizon. As the black hole radiates, the entanglement between
the outside radiation and the interior grows steadily. But the black hole is
shrinking. Eventually there is no interior left to hold up the other end of all
that entanglement — and radiation entangled with nothing is exactly a mixed
state. Pure in, mixed out.

### Don Page's sharpening

Don Page turned this qualitative worry into a curve in 1993, and it is the single
most useful object in the subject.

Track the entanglement entropy of the emitted radiation over time.

- **If Hawking's calculation is right all the way**, the entropy of the radiation
  rises monotonically until the black hole disappears, ending at a large nonzero
  value. Information is lost.
- **If evaporation is unitary**, the entropy must rise, turn over at roughly the
  moment when half the black hole's entropy has been emitted — the **Page
  time** — and then fall back to zero, because the final state is pure.

That turnover is not optional. It follows from unitarity plus the fact that the
entropy of a subsystem cannot exceed the entropy of its complement. The rising
Hawking curve and the falling unitary curve part company sharply, and reproducing
the turnover from a gravity calculation became the concrete, checkable target
that the whole field was aiming at.

Nobody could produce it for twenty-six years.

### Why the entropy of a black hole was the clue

Jacob Bekenstein had proposed in 1973 that a black hole carries entropy
proportional to the area of its horizon, and Hawking's temperature calculation
fixed the constant:

$$S_{BH} = \frac{k_B c^3 A}{4 G \hbar} = \frac{A}{4 \ell_P^2} k_B.$$

That formula is peculiar in a way worth pausing on. Entropy elsewhere in physics
scales with **volume** — double the box, double the entropy. Black hole entropy
scales with **area**.

The number is also enormous. A solar-mass black hole has an entropy around
$10^{77} k_B$, vastly more than the star it formed from. Whatever a black hole is
made of, it has a colossal number of internal states — which is a strong hint
that the interior is not featureless, and that the information might be recorded
in there somewhere.

Area-scaling entropy is what led Gerard 't Hooft and Leonard Susskind to the
**holographic principle**.

### The responses, in order

**Complementarity (Susskind, Thorlacius and Uglum, 1993; with 't Hooft).**
Information is not destroyed, and it is not duplicated either. An outside
observer sees infalling matter thermalise on a "stretched horizon" just above the
true horizon and gradually re-emerge in the radiation. An infalling observer sees
nothing special at the horizon and passes through with the information. Both
descriptions are correct. They appear to clone quantum information — forbidden by
the no-cloning theorem — but no single observer can ever check both accounts.
Susskind, Thorlacius and Uglum computed how long an outside observer would have
to wait to decode the information and jump in to compare notes with the infalling
copy, and found the wait exceeds the black hole's lifetime. The contradiction is
never operationally realisable, so it is not a contradiction.

**The holographic principle ('t Hooft 1993, Susskind 1995).** Everything
happening in a region of space can be encoded on its boundary, with about one bit
per Planck area. Gravity, on this view, is not a theory that needs volume's worth
of degrees of freedom. The claim is startling and it explains the area law.

**AdS/CFT (Maldacena, 1997).** The strongest argument, and the reason the debate
effectively ended. Maldacena conjectured a precise equivalence between string
theory in a particular curved spacetime (anti-de Sitter space) and an ordinary
quantum field theory living on its boundary. The boundary theory is a
conventional gauge theory with no gravity and — crucially — **manifestly
unitary**. A black hole in the bulk corresponds to a hot plasma on the boundary,
which certainly does not destroy information.

If AdS/CFT is right, then in that setting, information cannot be lost. Full stop.
This did not tell anyone *how* the information escapes, or what an infalling
observer experiences. It told them the answer to the yes/no question.

**Hawking concedes (2004).** At the 17th International Conference on General
Relativity and Gravitation in Dublin in July 2004, Hawking announced that he had
changed his mind. He conceded a 1997 bet made with Kip Thorne against John
Preskill, and presented Preskill with a baseball encyclopedia — "from which
information can be retrieved at will" — remarking that he would have preferred to
burn it and hand over the ashes. His technical argument, involving a sum over
spacetime topologies in a Euclidean path integral, convinced few. The concession
was accepted; the reasoning was not.

**Firewalls (Almheiri, Marolf, Polchinski and Sully, 2012).** Just as the matter
seemed settled, four physicists showed that the accepted picture was internally
inconsistent. Their argument: three things cannot all be true —

1. evaporation is unitary;
2. an observer far away sees ordinary physics, well described by effective field
   theory;
3. an infalling observer sees nothing unusual at the horizon.

The reason is entanglement monogamy. A late Hawking quantum must be entangled
with the earlier radiation (for unitarity, past the Page time) *and* with its
infalling partner (for a smooth horizon). Quantum mechanics forbids a system from
being maximally entangled with two things at once. Something must break, and if
you keep unitarity and field theory, the entanglement across the horizon is
severed — which costs energy. An infalling observer meets a wall of high-energy
quanta. A **firewall**.

This was deeply unwelcome, because it contradicts general relativity's
equivalence principle: the horizon of a large black hole is a region of low
curvature where nothing dramatic should happen. The paper reopened the field.

**Islands and replica wormholes (2019–2020).** In 2019, Geoff Penington, and
independently Ahmed Almheiri, Netta Engelhardt, Donald Marolf and Henry Maxfield,
finally computed the Page curve from gravity.

The mechanism is a genuine surprise. When you compute the entropy of the
radiation using the quantum extremal surface prescription — the successor to the
Ryu–Takayanagi formula from holography — you find that after the Page time, the
region whose state the radiation describes stops being just the radiation. It
grows to include a disconnected patch **inside the black hole**: an *island*. The
interior degrees of freedom are, in a precise sense, already encoded in the
distant radiation.

In 2020 two groups showed this arises from ordinary gravitational path
integration: computing the entropy via the replica trick brings in saddle points
in which the replica copies of spacetime are connected by wormholes. These
**replica wormholes** were always allowed; they had simply been overlooked.
Including them bends the Hawking curve down at the Page time.

### Where things actually stand

Be careful here, because this is often overstated.

**What was achieved.** The Page curve — the quantitative signature of unitary
evaporation — has been derived from a gravitational calculation, in controlled
models, without assuming a holographic dual. This is a real result and it is why
the last five years have been the most productive in the paradox's history.

**What was not achieved.** The calculation gives the entropy. It does not give
the mechanism. Nobody can point to the physical process by which a bit of the
book climbs out of a region it supposedly cannot leave. The replica wormholes
appear in a calculation of a coarse quantity, and what they mean physically — one
spacetime or many, an ensemble average over theories rather than a single theory
— is actively disputed. The models where the calculation is cleanest are
two-dimensional toy gravities, and extending them to four-dimensional evaporating
black holes in flat space is incomplete. And the firewall question is not
answered: whether an infalling observer survives the horizon remains open.

The honest summary is that the field is confident about the *answer* and does not
have the *explanation*. That is why this entry's status is debated and its nature
is `open-problem`.

## Explore

### The positions, and who holds them

| Position | Claim | Standing |
| --- | --- | --- |
| Information is lost | Hawking's original 1976 conclusion; quantum mechanics is modified by gravity | Almost entirely abandoned; the Banks–Susskind–Peskin energy non-conservation argument is the main obstacle |
| Remnants | Evaporation halts near the Planck scale, leaving a tiny object holding all the information | Widely rejected: an unbounded number of internal states in a Planck-sized object leads to infinite pair-production rates |
| Information comes out in the radiation | Subtle correlations, invisible to the semiclassical calculation, carry it | The consensus position; the mechanism is what is missing |
| Baby universes | The interior pinches off into a disconnected universe carrying the information | Rarely defended now; information is still inaccessible, so unitarity is not really saved for us |
| Firewalls | The horizon is destroyed at the Page time | Taken seriously as a possibility; most hope it is avoided |
| Fuzzballs | There is no interior at all; the black hole is a horizon-sized string configuration with no singularity | Actively developed by Samir Mathur and collaborators; the hardest problem is constructing enough microstates for realistic black holes |
| ER = EPR | Entanglement between the interior and the radiation *is* a wormhole connecting them | Maldacena and Susskind, 2013; suggestive, not established |

### What the AMPS argument really forces

It is worth being precise about the firewall paper, because it is often described
as a claim that black holes have firewalls. Its actual content is an
inconsistency proof. Some assumption must be dropped, and every response
identifies a different one.

- **Drop the smooth horizon.** Accept the firewall. Consistent, but it makes the
  horizon a special place, which general relativity says it is not.
- **Drop effective field theory outside.** The "$A = R_B$" proposals of Susskind,
  and of Papadodimas and Raju, hold that the infalling partner mode is not
  independent of the early radiation — it *is* a complicated operator built from
  it. The interior is state-dependent, which is a serious departure from standard
  quantum mechanics.
- **Drop unitarity.** Almost nobody takes this route now.
- **Deny that the decoding can be done.** Harlow and Hayden showed in 2013 that
  distilling the entanglement from the early radiation to expose the
  contradiction would take a time exponential in the black hole's entropy — far
  longer than the black hole lives. Computational complexity may protect the
  horizon even if nothing else does. This is an unusual kind of physical
  argument, and it is taken seriously.

### The disagreements that persist

**What replica wormholes are.** In the models where the calculation is cleanest,
the gravitational path integral appears to compute an *ensemble average* over
many boundary theories rather than the properties of a single one. For
two-dimensional Jackiw–Teitelboim gravity this connection to random matrix
ensembles is precise. Whether that carries over to real four-dimensional gravity,
where there is presumably one theory and not an ensemble, is unresolved and is
the sharpest current technical worry.

**Whether AdS/CFT settles anything about our universe.** We live in a universe
with a small positive cosmological constant, not a negative one. There is no
accepted holographic description of de Sitter space. Arguments that unitarity
holds in AdS are strong; the extrapolation is an assumption.

**What an infalling observer sees.** Genuinely open.

**Whether the interior exists at all.** The fuzzball programme says no.

**Whether the singularity matters.** Hawking's original argument leans on the
singularity destroying information. If quantum gravity resolves the singularity,
part of the paradox's motivation weakens — but the entanglement-counting version
of the argument survives without any reference to a singularity.

### Why this is one of the most productive problems in physics

Notice what the paradox has produced. Black hole entropy. The holographic
principle. AdS/CFT, the most-cited framework in modern theoretical physics.
Complementarity. Quantum extremal surfaces. Deep links between entanglement,
geometry and computational complexity. Not one of these was the goal; all of them
came from people trying to work out where the book went.

## Deep Dive

### The setup

Let $|\psi\rangle$ be the pure state of collapsing matter. Semiclassical
evolution to the final state gives, schematically,

$$|\psi\rangle \longrightarrow \sum_n e^{-\beta E_n/2}\, |n\rangle_{\text{in}} \otimes |n\rangle_{\text{out}},$$

an entangled pair state across the horizon with $\beta = 1/T_H$. Tracing out the
interior gives the outside observer

$$\rho_{\text{out}} = \operatorname{Tr}_{\text{in}} |\Psi\rangle\langle\Psi| = \frac{1}{Z}\sum_n e^{-\beta E_n} |n\rangle\langle n|,$$

exactly a thermal density matrix. Once the interior is gone, this mixed state is
the entire final state. The map $|\psi\rangle\langle\psi| \mapsto \rho_{\text{out}}$
is not unitary; Hawking described it as a superscattering operator $\$$ that does
not factorise as $S \rho S^\dagger$.

### Temperature, entropy, lifetime

For a Schwarzschild black hole of mass $M$:

$$T_H = \frac{\hbar c^3}{8\pi G M k_B}, \qquad S_{BH} = \frac{4\pi G M^2 k_B}{\hbar c} = \frac{A}{4\ell_P^2}k_B .$$

The negative heat capacity, $C = dM/dT < 0$, is what makes evaporation run away.
Treating the hole as a black body of area $A \propto M^2$ radiating at $T_H
\propto 1/M$ gives

$$\frac{dM}{dt} \propto -\frac{1}{M^2} \quad \Longrightarrow \quad t_{\text{evap}} \sim \frac{5120\pi G^2 M^3}{\hbar c^4},$$

roughly $10^{67}$ years for a solar mass, and about $10^{10}$ years — comparable
to the age of the universe — for a primordial black hole of around $10^{11}\,$kg.

### The Page curve, quantitatively

Model the black hole as a system of dimension $d_{BH}$ and the radiation as
dimension $d_R$, with the joint state random and pure. Page's theorem gives the
average entanglement entropy of the smaller subsystem as very close to maximal:

$$\langle S_R \rangle \approx \log d_R - \frac{d_R}{2 d_{BH}}, \qquad d_R \le d_{BH}.$$

So the entropy of the radiation follows

$$S_R(t) \approx \min\big[S_{\text{rad}}^{\text{thermal}}(t),\; S_{BH}(t)\big].$$

Early on the radiation is small and $S_R$ tracks the thermal (Hawking) answer,
growing. Late on it is bounded by the shrinking black hole entropy and must
decline to zero. The crossover is the **Page time**, at roughly $t_{\text{evap}}/2$,
when about half the initial entropy has been radiated.

Hawking's calculation gives only the rising branch. The monotonic growth of
$S_R$ past $S_{BH}$ is the precise statement of the paradox: the radiation is
carrying more entanglement entropy than the object it is entangled with can
supply.

### Monogamy and the firewall

Let $B$ be a late outgoing Hawking mode, $A$ its interior partner, and $R$ the
early radiation.

- Unitarity past the Page time requires $B$ to be nearly maximally entangled with
  a subsystem of $R$ — otherwise $S_R$ cannot decrease.
- A smooth horizon requires the state near the horizon to be the local vacuum,
  which means $B$ is nearly maximally entangled with $A$.

Monogamy of entanglement forbids both. Formally, strong subadditivity gives

$$S_{AB} + S_{BR} \ge S_{ABR} + S_B,$$

and the two requirements above ($S_{AB} \approx 0$ from purity of the local
vacuum pair, $S_{BR} \approx S_R - S_B$ from unitarity) drive this to a
contradiction of order $S_B$.

If $B$ is purified by $R$, then the $AB$ pair is not in its vacuum state.
Deviation from the vacuum near the horizon means the infalling observer
encounters excited high-energy modes — a firewall at the horizon, with energy
density set by the cutoff.

### The island formula

The resolution replaces the naive entropy with the **quantum extremal surface**
prescription. The generalised entropy of the radiation region $R$ is

$$S(R) = \min_{I} \; \operatorname{ext}_{I} \left[ \frac{\text{Area}(\partial I)}{4 G_N} + S_{\text{bulk}}(R \cup I) \right],$$

extremised and then minimised over candidate **island** regions $I$ lying inside
the black hole.

Before the Page time the empty island dominates: $I = \emptyset$, the area term
vanishes, and the answer is Hawking's rising bulk entropy.

After the Page time a nontrivial island — a region just inside the horizon —
gives a smaller value. Now $S_{\text{bulk}}(R \cup I)$ is small, because the
island contains precisely the interior partners of the modes in $R$, and the
answer is dominated by the area term $\text{Area}(\partial I)/4G_N \approx
S_{BH}$, which decreases as the black hole shrinks.

The minimum of the two branches is exactly the Page curve. The turnover is a
change of which saddle dominates.

The interpretation is genuinely radical: after the Page time, the interior of the
black hole is *part of* the entanglement wedge of the distant radiation. The
interior is not a separate place holding independent information. It is already
encoded in the radiation, in a strongly non-local way.

### Replica wormholes

Computing $S = -\operatorname{Tr}\rho\log\rho$ via the replica trick requires the
Rényi entropies

$$S_n = \frac{1}{1-n}\log \operatorname{Tr}\rho_R^n ,$$

and $\operatorname{Tr}\rho_R^n$ is given by a gravitational path integral over
$n$ replicas of the spacetime, with boundary conditions cyclically identified.

The obvious saddle keeps the $n$ replicas disconnected and reproduces Hawking's
answer. Penington, Shenker, Stanford and Yang, and independently Almheiri,
Hartman, Maldacena, Shaghoulian and Tajdini, showed in 2019–2020 that there is a
second family of saddles in which the replicas are joined by wormholes in the
bulk. These **replica wormholes** dominate after the Page time and, on analytic
continuation $n \to 1$, produce exactly the island formula.

The essential point is that nothing new was added. These saddles were always
present in the gravitational path integral. They were simply not included.

### What remains open

- **Mechanism.** The island formula computes an entropy. It does not exhibit an
  operator that carries a specific bit from the interior to infinity. The
  relation between the two is not understood.
- **Ensembles.** In Jackiw–Teitelboim gravity the path integral including
  wormholes computes averages over a random matrix ensemble rather than a single
  theory. What "averaging over theories" means for a universe with one set of
  laws — the factorisation puzzle — is unsolved.
- **Flat space and de Sitter.** Most controlled calculations are in AdS or in
  two-dimensional models with an auxiliary bath. Our universe is neither.
- **Firewalls.** Whether the horizon is smooth for an infalling observer is not
  settled by the island results.
- **State dependence.** The proposals that reconstruct interior operators from
  the radiation appear to require operators that depend on the state, which is
  not how observables work in ordinary quantum mechanics.

Progress, not closure.

## History

**1973.** Jacob Bekenstein, then a graduate student of John Wheeler's, proposes
that black holes carry entropy proportional to horizon area, motivated by the
worry that dropping a hot cup of tea into one would otherwise decrease the
entropy of the universe. Hawking initially thinks he is wrong.

**1974–75.** Hawking, attempting to refute Bekenstein, finds instead that black
holes emit thermal radiation. The 1974 announcement in *Nature* is followed by
the full paper, "Particle Creation by Black Holes", in 1975. This converts
Bekenstein's suggestion into a precise thermodynamics and fixes the coefficient
of the area law at $1/4$.

**1976.** "Breakdown of Predictability in Gravitational Collapse". Hawking argues
that the evaporation maps pure states to mixed ones, and concludes that
predictability breaks down.

**1981.** At a small conference in San Francisco hosted by Werner Erhard,
Hawking presents the argument to an audience including Susskind and 't Hooft.
Susskind later described this as the moment the war began, and dated his own
alarm precisely to it.

**1984.** Banks, Susskind and Peskin show that modifying quantum mechanics to
allow pure-to-mixed evolution generically produces catastrophic violations of
energy-momentum conservation, closing off the most obvious way to accept
Hawking's conclusion.

**1993.** Susskind, Thorlacius and Uglum propose black hole complementarity.
Don Page derives the Page curve. 't Hooft proposes dimensional reduction.

**1995.** Susskind formulates the holographic principle. Polchinski discovers
D-branes.

**1996.** Andrew Strominger and Cumrun Vafa count the microstates of a class of
extremal black holes in string theory and reproduce the Bekenstein–Hawking
entropy exactly, including the factor of $1/4$. This is powerful evidence that
black holes have ordinary quantum microstates.

**1997.** Maldacena's AdS/CFT conjecture. In the same year, Hawking and Thorne
bet Preskill that information is destroyed; the stake is an encyclopedia of the
winner's choice.

**July 2004.** At GR17 in Dublin, Hawking announces that he has changed his mind
and concedes the bet, presenting Preskill with *Total Baseball: The Ultimate
Baseball Encyclopedia*. Thorne does not concede. The written paper appears in
2005. The argument persuades few, but the conclusion is by then widely held on
AdS/CFT grounds.

**2012.** Almheiri, Marolf, Polchinski and Sully post "Black Holes:
Complementarity or Firewalls?", showing the consensus picture is inconsistent.
The field, which had considered the matter closed, reopens.

**2013.** Maldacena and Susskind propose ER = EPR. Harlow and Hayden give the
computational-complexity argument that the firewall paradox cannot be operated in
practice.

**2019.** Penington posts arXiv:1905.08255; Almheiri, Engelhardt, Marolf and
Maxfield post arXiv:1905.08762 within days. Both derive the Page curve using
quantum extremal surfaces and islands.

**2020.** Replica wormholes are identified as the gravitational path-integral
origin of the island rule, in papers by Penington, Shenker, Stanford and Yang and
by Almheiri, Hartman, Maldacena, Shaghoulian and Tajdini.

**2021.** The *Reviews of Modern Physics* review consolidates the results and
states clearly what remains unexplained.

**A note on the bet.** There were two. The 1997 information bet was conceded by
Hawking in 2004. A separate 1991 bet with Preskill and Thorne concerned naked
singularities. The habit of settling theoretical disputes with wagers was
Hawking's, and the bets are documented, though the accompanying stories have
grown in the retelling.

## Why It Matters

**It is the sharpest available conflict between our two best theories.** General
relativity and quantum mechanics do not contradict each other in ordinary
circumstances; they simply apply to different regimes. The information paradox is
one of the very few places where they give incompatible answers to a
well-defined question, which is why it has served as the main laboratory for
quantum gravity for half a century.

**It produced holography.** The observation that black hole entropy scales with
area, not volume, led to the holographic principle and then to AdS/CFT. That
framework is now used far outside its origin — for strongly coupled plasmas
studied at RHIC and the LHC, for models of high-temperature superconductivity,
and for the whole "it from qubit" programme relating entanglement to spacetime
geometry. None of that was the aim.

**It made entanglement entropy a tool of gravitational physics.** The Ryu–Takayanagi
formula, quantum extremal surfaces and the entanglement wedge came out of this
problem. The current best guess about what spacetime *is* — that geometry emerges
from the entanglement structure of an underlying quantum system — is largely a
product of trying to work out where the book went.

**It disciplined speculation about modifying quantum mechanics.** The
Banks–Susskind–Peskin result is a useful general lesson: you cannot casually
relax unitarity, because unitarity is load-bearing for energy conservation and
locality. Proposals to weaken quantum mechanics now have to face that
calculation.

## Modern Relevance

**Quantum information theory as gravitational physics.** Monogamy of
entanglement, quantum error-correcting codes, the Page curve, computational
complexity: these are the working vocabulary of black hole physics now. The
Almheiri–Dong–Harlow observation that AdS/CFT is a quantum error-correcting code
is one of the most influential ideas of the last decade, and it originated as a
technical step in this problem.

**Scrambling and chaos.** Black holes are conjectured to be the fastest
scramblers in nature, saturating a bound on the growth of chaos found by
Maldacena, Shenker and Stanford in 2016. The out-of-time-order correlators used
to quantify this are now measured in cold-atom and superconducting-qubit
experiments — an idea that started with the question of how quickly a black hole
hides information.

**Analogue horizons.** Jeff Steinhauer's group and others have created acoustic
horizons in Bose–Einstein condensates and reported the analogue of Hawking
radiation, including correlations between the paired quanta. These test the
kinematics of Hawking's mechanism, not the fate of information in real black
holes, and that distinction should be kept firmly in view.

**Gravitational wave astronomy.** LIGO and Virgo observe black hole mergers
directly. Proposals in which the horizon is replaced by structure — fuzzballs,
firewalls, gravastars — generically predict "echoes" in the ringdown signal after
merger. Searches have so far found no convincing evidence, which places
observational limits on how radically the horizon can differ from the classical
picture. It is a thin thread connecting a fifty-year theoretical argument to
data, but it is a real one.

**What it teaches about paradoxes.** This one has been declared resolved at least
three times — by complementarity, by AdS/CFT, by Hawking himself — and each time
a sharper question reopened it. It is a standing reminder that "the community
agrees on the answer" and "the community can explain the answer" are different
achievements, and that only the second one is understanding.
