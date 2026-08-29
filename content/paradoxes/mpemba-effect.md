---
title: The Mpemba Effect
slug: mpemba-effect
alternateNames:
  - Hot Water Freezes Faster
summary: >-
  Under some conditions, hot water freezes faster than cold water starting at
  the same environmental conditions. The effect is real and reproducible, but
  after sixty years of research the mechanism remains genuinely contested, making
  this the rare physical paradox that is both confirmed and unexplained.
hook: >-
  A pot of boiling water and a pot of cold water go into the same freezer. Which
  freezes first?
era: twentieth-century
date: "1963 (observed), 1969 (published)"
year: 1969
origin: >-
  Noticed by Tanzanian schoolboy Erasto Mpemba in 1963 while making ice cream.
  Confirmed experimentally by physicist Denis Osborne and published jointly in
  1969 in Physics Education. The effect was known to Aristotle and Francis Bacon
  but dismissed or forgotten until Mpemba brought it to Osborne's attention.
people:
  - erasto-mpemba
  - denis-osborne
domains:
  - physics
types:
  - observation
  - measurement
nature: open-problem
difficulty: intermediate
status: debated
renown: known
concepts:
  - Thermodynamics
  - Heat transfer
  - Supercooling
  - Evaporation
  - Newton's law of cooling
relationships:
  - kind: related
    to: maxwells-demon
    note: Both paradoxes force precise thinking about thermodynamics and what
      we actually mean by temperature and heat flow.
references:
  - source: mpemba-osborne-1969
    role: primary-source
    note: The paper that introduced the effect to the scientific literature.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

It is 1963 in Iringa, Tanzania. Erasto Mpemba is in a cookery class. The class
is making ice cream: boil milk, add sugar, cool it, put it in the freezer.

There are not enough spaces in the freezer for everyone's mixture. Mpemba, not
wanting to lose his slot, puts his mixture in while it is still hot. His
classmate follows the instructions and waits for his mixture to cool first.

Mpemba's ice cream freezes first.

He asks his physics teacher why. The teacher says it cannot be right — cold
water takes less time to cool and must therefore freeze first. Mpemba checks
again. Same result.

Three years later, physicist Denis Osborne visits the school. Mpemba asks him.
Osborne does not dismiss the question. He goes back to his laboratory, runs the
experiment, and confirms: under the conditions Mpemba described, the hot sample
froze first.

They publish the result together.

## Understand

The naive argument against the Mpemba effect seems airtight. Temperature is a
measure of thermal energy. A hotter sample has more energy to lose to reach
freezing point. A colder sample has less. If the rate of heat loss is the same,
the colder sample freezes first. Always.

The argument fails because "the rate of heat loss is the same" is not true when
you change the starting temperature.

### Newton's law of cooling

Newton's law of cooling says that the rate of heat loss is proportional to the
temperature difference between the object and its environment. A hotter object
loses heat faster than a cooler one — the rate is not constant.

So the hot sample starts losing heat much faster than the cold one. It can
"catch up" and even overtake the cold sample's cooling progress. Whether it does
so depends on the geometry of the cooling curves, which in turn depends on the
experimental conditions.

This gives you a plausible framework, but not a mechanism. Multiple mechanisms
have been proposed.

### Proposed mechanisms

**Evaporation.** When the hot water is placed in the freezer, some of it
evaporates. Less mass needs to be cooled. A sample that started at 90°C and
lost 5% of its mass to evaporation may freeze faster than one that started at
20°C and lost nothing. Some experiments have confirmed this; others find the
effect persists when the container is sealed, ruling evaporation out as the
sole explanation.

**Dissolved gases.** Cold water contains more dissolved oxygen and carbon dioxide
than hot water. Hot water that has been boiled has lost these gases. Dissolved
gases may affect the rate of heat conduction or nucleation of ice crystals,
potentially slowing the freezing of cold water relative to degassed hot water.

**Convection currents.** Hot water sets up stronger convection currents as it
cools, which stir the water and promote more uniform heat loss than a cold
sample that barely convects. Whether this accelerates or retards freezing depends
on the geometry.

**Supercooling.** Water can be cooled below 0°C without freezing if ice nucleation
is suppressed. Cold water may supercool more readily, delaying the onset of
freezing even after its temperature has passed 0°C. Hot water that has expelled
dissolved gases and impurities may nucleate ice more readily at 0°C.

**Hydrogen bonding.** A 2016 paper from Singapore proposed that the structure of
hydrogen bonds in water changes with temperature in a way that stores energy
differently in hot water, allowing faster release during cooling. This proposal
attracted attention but has been disputed.

No single mechanism is universally accepted, and different experimental setups
seem to engage different mechanisms.

## Examples

**The original ice cream experiment.** Mpemba's own setup involved hot boiled
milk in a plastic tray placed in a freezer alongside cold milk. The hot sample
froze first. The specific conditions — plastic container, domestic freezer, milk
rather than pure water — all matter, and attempts to replicate the effect with
different conditions do not always succeed.

**The 2016 Royal Society of Chemistry competition.** The RSC ran a competition
inviting researchers to settle the Mpemba effect definitively. The winning entry,
from Burridge and Linden (Cambridge), found that the effect depended critically
on the shape of the container and the position within the freezer, and that
under many standard conditions the effect does not appear. Their conclusion: the
effect is real but highly sensitive to experimental conditions, which explains
why reproducibility is poor.

**A contrarian result.** A 2016 paper in the journal Scientific Reports claimed
to find no evidence for the Mpemba effect across 28,000 measurements, using
carefully controlled conditions. This result generated controversy. Proponents
argued the conditions were too controlled — eliminating the evaporation and
convection effects that drive the phenomenon in real-world settings.

## Explore

**Is this a paradox at all?** The Mpemba effect is not logically paradoxical —
there is no formal contradiction in the premises. It is counterintuitive: it
violates the expectation that less energy means faster cooling. But counterintuitive
results are common in thermodynamics. The effect is "paradoxical" in the loose
sense that it surprises people who apply naive arguments to it.

**Why has it not been settled?** The effect is exquisitely sensitive to
conditions: the starting temperature, the shape of the container, the ambient
humidity, the degree of agitation, whether the water has been boiled before. A
mechanism that operates strongly in one setup may be irrelevant in another. This
makes reproducibility genuinely difficult and means that experiments confirming
the effect and experiments failing to find it may both be correct — they may
simply be measuring different systems.

**The historical record.** Aristotle noted in the *Meteorologica* that "hot water
freezes more quickly." Francis Bacon made the same observation. Neither pursued
it as a scientific question. Mpemba's contribution was not the observation but
the insistence, against dismissal from his teacher, that it was a real effect
worth investigating — and the fortunate timing of Osborne's visit.

## Deep Dive

### When the effect occurs

The Mpemba effect requires a mechanism that gives the hotter sample an advantage
that more than compensates for its higher starting temperature. This typically
requires at least one of:

1. **Mass loss through evaporation**: significant if the container is open and
   the temperature difference is large.

2. **Differential supercooling**: the hot sample nucleates ice at 0°C; the cold
   sample supercools past 0°C, delaying freezing. Supercooling can delay freezing
   by minutes in pure water.

3. **Altered thermal conductivity**: through dissolved gas concentration or
   temperature-dependent water structure.

The effect is least likely in conditions of:
- Sealed containers (eliminating evaporation)
- Very pure water (reducing nucleation from dissolved gases)
- Uniform freezer temperature (eliminating convection effects)
- Small temperature difference between samples

This explains why laboratory attempts to reproduce it under "ideal" conditions
often fail.

### The Markovian cooling model

In a simple Newton's-law model, let $T(t)$ be the temperature at time $t$ and
$T_F$ the freezer temperature. Then:

$$\frac{dT}{dt} = -k(T - T_F)$$

This gives exponential cooling:

$$T(t) = T_F + (T_0 - T_F)e^{-kt}$$

For two samples with starting temperatures $T_h > T_c > T_F$, both reach any
given target temperature $T^*$ at times:

$$t_h = \frac{1}{k}\ln\frac{T_h - T_F}{T^* - T_F}, \quad t_c = \frac{1}{k}\ln\frac{T_c - T_F}{T^* - T_F}$$

Since $T_h > T_c$, we get $t_h > t_c$: the hot sample always takes longer. The
Mpemba effect **cannot occur** in this model. It requires a mechanism that breaks
the simple Markovian assumption — some property of the hot sample that changes
$k$, reduces the effective mass, or delays freezing in the cold sample.

## History

Aristotle stated in the *Meteorologica* (c. 340 BCE) that "the fact that water
has previously been warmed contributes to its freezing quickly: for so it cools
sooner." Francis Bacon included the same observation in his *Novum Organum*
(1620). Both treated it as a matter of observation rather than a problem
requiring explanation.

The effect was essentially forgotten until 1963, when Mpemba noticed it while
making ice cream in Tanzania. His physics teacher dismissed it; the class mocked
him. When Denis Osborne visited the school in 1966, Mpemba asked him directly.
Osborne's willingness to take the question seriously — and his experimental
confirmation — are credited with reviving scientific interest.

The 1969 paper generated a long tail of experimental and theoretical work. The
question became something of a proving ground for proposed mechanisms of water
behaviour. It remains unresolved.

## Why It Matters

**It is a genuine physical effect without a settled explanation.** Most
well-documented effects in everyday physics have agreed mechanisms. The Mpemba
effect, after more than sixty years of research and hundreds of papers, does not.
It is a rare example of something that can be shown in a kitchen being
scientifically contested at the mechanistic level.

**It illustrates how experimental conditions interact with physical mechanisms.**
The sensitivity of the Mpemba effect to container geometry, water purity, and
freezer type makes it a case study in the way that real-world systems can exhibit
behaviour that simple models miss — because simple models hold all these variables
constant, and reality does not.

**It is a lesson in scientific credibility.** Mpemba's observation was dismissed
by his teacher. It was confirmed by a physicist who was willing to test rather
than theorise. The episode is frequently cited in discussions of how scientific
questions should be evaluated and by whom.

## Modern Relevance

**Industrial cooling.** Many industrial processes involve cooling hot liquids
rapidly. If the Mpemba effect operates reliably under specific conditions, it
could have engineering implications for the design of cooling systems.

**Cryopreservation.** Biological samples (cells, embryos, organs) are preserved
by cooling. The rate and dynamics of cooling affect ice crystal formation and
hence cell survival. Understanding precisely how temperature history affects
freezing dynamics — the Mpemba question, in essence — is directly relevant.

**Climate science.** Ocean temperatures and their evolution over time affect
ice formation at the poles. The Mpemba effect is a reminder that simple thermal
models of cooling can miss effects that depend on the prior history of the water.
