---
title: The Butterfly Effect
slug: butterfly-effect
alternateNames:
  - Sensitive Dependence on Initial Conditions
  - Lorenz Sensitivity
summary: >-
  A butterfly flapping its wings in Brazil might set off a tornado in Texas — not by force, but because tiny differences in initial conditions compound into completely different outcomes. The future is fundamentally unpredictable past a short horizon, even in a perfectly deterministic universe.
hook: >-
  Can a butterfly in Brazil cause a tornado in Texas? Not by force — but by
  changing everything that follows.
era: twentieth-century
date: 1963 (discovery), 1972 (butterfly metaphor coined)
year: 1963
origin: >-
  Discovered by MIT meteorologist Edward Lorenz in 1963 when he re-ran a weather
  simulation, entering a rounded number (0.506) instead of the full value
  (0.506127). The simulation diverged completely. He presented the butterfly
  metaphor at a 1972 meeting of the American Association for the Advancement of
  Science in a talk titled "Predictability: Does the Flap of a Butterfly's Wings
  in Brazil Set Off a Tornado in Texas?"
people: []
domains:
  - physics
  - mathematics
  - philosophy
types:
  - causality
  - observation
  - infinity
nature: counterintuitive-result
kind: effect
difficulty: beginner
status: explained
renown: landmark
concepts:
  - Chaos theory
  - Determinism
  - Sensitive dependence on initial conditions
  - Lyapunov exponent
  - Strange attractor
  - Predictability horizon
relationships: []
references:
  - source: lorenz-1963-nonperiodic
    role: primary-source
    note: The founding paper of chaos theory, introducing the strange attractor and sensitive dependence on initial conditions.
furtherReading:
  - title: "Deterministic Nonperiodic Flow — Edward N. Lorenz, Journal of the Atmospheric Sciences (1963)"
    url: https://doi.org/10.1175/1520-0469(1963)020%3C0130:DNF%3E2.0.CO;2
  - title: "The Essence of Chaos — Edward Lorenz (1993)"
    url: https://en.wikipedia.org/wiki/The_Essence_of_Chaos
publishing:
  state: published
  created: 2026-08-31
  updated: 2026-08-31
---

## Discover

December 1961. Edward Lorenz is running a weather simulation on a Royal McBee
LGP-30 computer at MIT. He wants to examine a particular sequence of results
more closely, so he restarts the simulation from the middle — but to save time
he types in the numbers from a printout rather than starting from scratch.

The printout shows **0.506**. He types **0.506**. The computer stores
**0.506127**. The difference is one part in a thousand — smaller than a rounding
error, smaller than the variation from a puff of wind.

He goes to get coffee.

When he comes back, the simulation has diverged so completely from the original
that it might as well be modelling a different planet. The two runs start in
lockstep and separate gradually, then rapidly, until after a simulated month
there is no similarity at all.

Lorenz understands immediately what he is looking at. The atmosphere is so
sensitive to its initial state that an unmeasurably small difference propagates
and amplifies until it changes everything. This means the future of the
atmosphere is, in principle, unpredictable past some horizon — not because the
physics is unknown, not because the equations are wrong, but because *no
measurement can ever be precise enough.*

## Understand

The butterfly effect is a property called **sensitive dependence on initial
conditions**. Two states of a system that start arbitrarily close together
diverge, exponentially, until they are as different as two random states. The
butterfly is not the *cause* of the tornado — the tornado would have formed
anyway, or something like it, from a different perturbation. The butterfly is
a way of saying that the two futures — one where the butterfly flaps and one
where it doesn't — are eventually completely unrelated.

This is counterintuitive because most systems we interact with are stable. Push
a pendulum slightly off angle and it swings back to the same rhythm. Perturb a
thrown ball and it lands a little further away — not in a completely different
direction. The atmosphere is different. It is a dissipative system driven far
from equilibrium, and its dynamics amplify small differences rather than
damping them.

### Determinism and predictability

The butterfly effect does not make the universe random. Lorenz's equations are
perfectly deterministic — given *exactly* the same starting state they produce
*exactly* the same result. The catch is *exactly*. In the real world, you
cannot measure initial conditions to infinite precision. Every measurement has
an error, however small. In a chaotic system, that error grows, exponentially,
until it swamps the signal.

This means the butterfly effect draws a sharp line between two things that are
often conflated:

- **Determinism**: whether the future is fixed given the present
- **Predictability**: whether we can know what that future is

A chaotic system can be perfectly deterministic and completely unpredictable. The
future is fixed. We just can't get there from here, because we can never know
the present precisely enough to compute it.

### The Lyapunov exponent

The rate at which nearby trajectories diverge is measured by the **Lyapunov
exponent** λ. If two states start a distance $\delta_0$ apart, after time $t$
they are approximately $\delta_0 e^{\lambda t}$ apart. A positive Lyapunov
exponent means the system is chaotic. For the Earth's atmosphere, λ corresponds
to a doubling time of about two to five days — which is why weather forecasts
degrade rapidly beyond about ten days, not because the models are bad but because
the physics is irreducibly unpredictable.

## Examples

| System | Chaos? | Predictability horizon |
| --- | --- | --- |
| Earth's atmosphere | Yes | ~10 days for regional weather |
| Solar system (short term) | Marginally | Millions of years stable |
| Solar system (long term) | Yes | ~5 million years for Mercury's orbit |
| Double pendulum | Yes | Seconds |
| Heart rhythm (healthy) | Slightly | N/A — variability is healthy |
| Heart rhythm (fibrillation) | High | Immediate danger |

## Explore

**The strange attractor.** Lorenz's system, when plotted in three dimensions,
traces out a shape that never repeats — a fractal object now called the Lorenz
attractor. It looks like two wings of a butterfly (the coincidence is eerie and
genuine). The system visits both wings unpredictably but never leaves the
attractor entirely. This is what chaos looks like geometrically: bounded
globally, unpredictable locally.

**Is everything chaotic?** No. Many systems are stable — perturbations damp out.
A ball in a bowl returns to the bottom. A simple pendulum returns to its
rhythm. Chaos requires a specific combination of nonlinearity and positive
feedback. The atmosphere has it. Most engineered systems are deliberately
designed not to have it.

**Population biology.** Simple equations modelling predator-prey populations, or
the growth of a bacterial colony, can exhibit chaos. Robert May showed in 1976
that even a one-parameter equation — the logistic map — produces chaos for
certain parameter values. The butterfly effect is not confined to weather.

**The popular misconception.** In films and popular writing, the butterfly effect
is often used to mean "small causes have large effects" — the idea that a tiny
decision changes everything. This is not quite what Lorenz meant. His discovery
is more specific: in chaotic systems, *any* uncertainty in initial conditions,
however small, renders long-term prediction impossible *in principle*, not just
in practice. It is a fundamental bound, not an engineering limitation.

## History

**1963.** Lorenz publishes "Deterministic Nonperiodic Flow" in the *Journal of
the Atmospheric Sciences*. It is initially ignored by meteorologists and
physicised by physicists. It is not recognised as the founding paper of chaos
theory until the 1970s.

**1972.** Lorenz presents "Predictability: Does the Flap of a Butterfly's Wings
in Brazil Set Off a Tornado in Texas?" at an AAAS symposium in Washington, DC.
Philip Merilees, the session chair, invented the title when Lorenz failed to
supply one. Lorenz used it anyway. The butterfly is born.

**1975.** James Yorke and Tien-Yien Li publish "Period Three Implies Chaos" —
the paper that introduces the word *chaos* in its mathematical sense into
English.

**1987.** James Gleick's *Chaos: Making a New Science* brings the field to a
general audience. The butterfly effect becomes a popular cultural concept.

**1993.** The film *Jurassic Park* (based on Michael Crichton's 1990 novel)
popularises chaos theory further, via Jeff Goldblum's repeated invocation of
it.

## Why It Matters

**The limits of prediction.** The butterfly effect gives a precise, physical
reason why long-range weather forecasting is impossible — not "we don't have good
enough computers" but "the physics makes it impossible, full stop." This matters
for planning, for policy, for any human activity that depends on knowing what
next month's weather will be.

**Determinism without predictability.** Before chaos theory, there was a broad
assumption that a deterministic universe was a predictable one — that if the laws
were known, the future could in principle be computed. Lorenz demolished this.
Determinism and predictability come apart completely in chaotic systems, and the
atmosphere we live in is chaotic.

**Nonlinearity is everywhere.** The butterfly effect forced scientists across
many fields to take nonlinear dynamics seriously. Before 1963, most mathematical
models of real systems were linearised — simplified to a form that was tractable.
Lorenz showed what could be hiding in the parts that were being thrown away.

## Modern Relevance

**Ensemble forecasting.** Since individual forecasts degrade rapidly, modern
weather prediction runs hundreds of simulations with slightly varied starting
conditions and reports the distribution of outcomes — a direct operational
response to the butterfly effect. The forecast you see is a summary of that
ensemble.

**Climate vs. weather.** The butterfly effect limits *weather* prediction but not
*climate* projection. Climate is the statistics of weather — the average
temperature in July, the frequency of hurricanes — and these averages can be
stable even when individual trajectories are chaotic. Climate models are not
trying to predict next Tuesday; they are modelling the long-run statistics of a
chaotic system.

**Financial markets.** Many economists apply chaotic dynamics to financial
markets: prices are path-dependent, small perturbations can trigger large
movements, and long-range prediction is fundamentally limited. The models are
disputed, but the butterfly effect is part of the serious intellectual case
against believing that markets are reliably foreseeable.

**Complex systems generally.** Ecology, epidemiology, neuroscience, and economics
all contain systems that are nonlinear and potentially chaotic. The butterfly
effect is the reason "predict and control" is often the wrong ambition —
"understand and adapt" is sometimes the only one available.
