---
title: The Twin Paradox
slug: twin-paradox
alternateNames:
  - The Clock Paradox
  - Langevin's Traveller
summary: >-
  One twin flies to a distant star and back; the other stays home. The traveller
  returns younger. Each twin saw the other's clock running slow, so why is the
  answer not symmetric? Because they took different routes through spacetime.
era: twentieth-century
date: 1905 (implicit in Einstein), 1911 (Langevin's traveller)
year: 1911
origin: >-
  The clock asymmetry appears in Einstein's 1905 relativity paper. Paul Langevin
  turned it into a story about a human traveller in a 1911 lecture at Bologna,
  though he never mentioned twins.
people:
  - paul-langevin
  - albert-einstein
domains:
  - physics
types:
  - time
  - observation
nature: apparent-contradiction
difficulty: intermediate
status: resolved
concepts:
  - Proper time
  - Relativity of simultaneity
  - Worldline
  - Inertial frame
  - Time dilation
  - Spacetime interval
relationships:
  - kind: related
    to: ladder-paradox
    note: >-
      The same engine drives both: two events that are simultaneous in one frame
      are not in another. Solve one properly and you have solved the other.
  - kind: contrasts-with
    to: grandfather-paradox
    note: >-
      The twin paradox looks like time travel and is not — nobody revisits a
      moment. The grandfather paradox is what goes wrong when someone does.
  - kind: related
    to: epr-paradox
    note: >-
      Both press on what "at the same time" can mean for two separated places.
      Relativity's answer — that it depends on who is asking — is precisely why
      EPR correlations cannot be used to send a signal.
references:
  - source: langevin-1911-evolution
    role: primary-source
    locator: "p. 50"
    note: The traveller passage. Langevin speaks of portions of matter, not twins.
  - source: einstein-1905-elektrodynamik
    role: primary-source
    locator: "§4"
    note: The clock asymmetry, six years before Langevin gave it a human face.
  - source: hafele-keating-1972
    role: paper
    note: Caesium clocks flown around the world in 1971, east and west. The effect is real and was measured.
  - source: taylor-wheeler-spacetime-physics
    role: book
    note: >-
      Builds relativity around the invariant interval, which turns the paradox
      into a statement about path length and removes the mystery entirely.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Two sisters, born the same day.

One of them becomes an astronaut. She boards a ship that can travel at
four-fifths the speed of light, flies to a star four light years away, turns
round, and comes home. The other stays on Earth and gets on with her life.

The traveller checks her calendar when she lands. Six years have passed on the
ship.

Her sister meets her at the door. Ten years have passed on Earth. The sister who
stayed home is four years older than the sister who left. They were born on the
same day.

This is not a trick of perspective or a mistake in the clocks, and it is not
science fiction: the smaller version of it has been measured, with real clocks on
real aeroplanes. Motion through space really does cost you time.

Now here is the part that has kept the argument alive for over a century.

Relativity says that from the ship's point of view, it is Earth that goes
speeding away and comes back. Each sister, watching the other through a
telescope, sees the other's clock ticking slowly. The situation looks perfectly
symmetric. So why can we not run the whole story backwards and conclude that the
*traveller* should be older?

They cannot both be younger than each other. Something breaks the symmetry — and
finding out exactly what it is turns out to be the most useful thing relativity
can teach you.

## Understand

Start with the thing almost everyone is told, because it is wrong and it gets in
the way.

> **The common misconception:** "The traveller accelerates when she turns around,
> and acceleration causes the ageing difference."

Acceleration is not the cause. It is a *symptom* — a reliable marker that
something asymmetric happened, but not the thing that does the work. Three
observations show this.

First, you can make the turnaround as brief and as gentle as you like, spreading
it over a long slow arc or a sudden violent jolt, and the age difference stays
essentially the same. It is set by the *speed* and the *distance*, not by how
hard you braked. If acceleration caused the ageing, changing the acceleration
would change the answer. It does not.

Second, you can remove the acceleration entirely. Instead of one traveller
turning around, use two ships that never change speed: an outbound ship that
passes Earth heading away, and an inbound ship that passes the distant star
heading back. As they cross, the outbound ship radios its clock reading to the
inbound one, which adds the second leg to it. Nobody accelerates. The total is
still less than Earth's. The asymmetry survives without any acceleration at all.

Third, in a universe whose space is closed on itself like the surface of a
cylinder, two observers can separate at constant speed, travel in opposite
directions, and meet again on the far side without either one ever accelerating —
and they still disagree about elapsed time. Brans and Stewart worked this case
out in 1973.

So what is really going on?

### Time is a distance

Here is the idea that dissolves the paradox, and it is geometric rather than
physical.

Draw a map. Two towns, and two roads between them. One road runs straight; the
other goes out to a bend and comes back. Both cars start at the same town and
arrive at the same town, but their odometers disagree, and nobody finds this
mysterious. **Distance travelled depends on the route.**

Relativity says that time works the same way. The two sisters begin at the same
event — a farewell on a launch pad — and end at the same event — a reunion at the
door. In between, they take different **paths through spacetime**, and the time a
clock reads is the length of the path it travelled. Different route, different
odometer reading.

The clock on your wrist is not measuring some universal time flowing everywhere.
It is measuring the length of *your* particular worldline, which is a thing that
belongs to you and to nothing else. Physicists call it **proper time**.

There is one twist, and it is the source of all the confusion. In ordinary
geometry, a straight line is the *shortest* path. In spacetime geometry the minus
sign in front of the time term flips this, and the straight path — the one you
follow when nothing pushes you, the inertial one — is the **longest**. Every
detour costs you time.

The stay-at-home sister took the straight route. The traveller took a bent one.
In spacetime the bent one is *shorter*, so the traveller's wristwatch has fewer
years on it when they meet. That single sign reversal — bends make journeys
shorter, not longer — is the only genuinely strange thing in the whole story.

### Where the symmetry actually breaks

Now the objection: "But each sees the other's clock running slow. Why can't we
swap them?"

Because the two situations are not the same situation seen from two sides.

The stay-at-home sister sits in **one** inertial frame for the whole story. She
never changes her state of motion. Everything she measures, she measures with a
single consistent set of rulers and clocks, from beginning to end.

The traveller does not. She spends the outbound leg in one inertial frame and the
inbound leg in a *different* one. There is no single inertial frame in which she
is at rest throughout the trip. That is the asymmetry, stated exactly: **only one
of the two twins changes inertial frames.**

The mutual time dilation is real, and each sister is right about it while it
lasts. But "the other's clock runs slow" is a statement made *within* one frame,
and the traveller uses two frames. You cannot staple together conclusions drawn
in two different frames and expect the result to mean anything, any more than you
can add a distance measured in a rotated coordinate system to one measured in the
original and call the sum a length.

### The missing years

This is the part worth getting straight, because it is where the arithmetic
actually lives.

Take the numbers from the story: four light years out, four-fifths the speed of
light, so ten years on Earth and six on the ship.

During the outbound leg, the traveller's rulers and clocks say Earth is receding,
and Earth's clock is therefore running slow — by a factor of $0.6$. Her leg takes
three years of ship time, so in her reckoning Earth ages $1.8$ years.

During the inbound leg, the same thing happens again. Another $1.8$ years of
Earth time.

Total: $1.8 + 1.8 = 3.6$ years of Earth ageing. But Earth actually aged ten. Six
and a bit years have gone missing.

They go missing at the turnaround, and here is what happens to them.

"What time is it on Earth right now?" is not a question with an observer-
independent answer. Each frame has its own idea of which distant events count as
happening "now". When the traveller is moving away from Earth, her "now" line
cuts Earth's history at year $1.8$. The moment she turns around and starts moving
towards Earth, she is using a different frame, whose "now" line cuts Earth's
history at year $8.2$.

**The turnaround swings her definition of "now on Earth" forward by 6.4 years.**

$$1.8 \;+\; 6.4 \;+\; 1.8 \;=\; 10.$$

Nothing happened to Earth. Earth ticked along at one second per second the whole
time. What changed was the traveller's notion of which Earth-moment was
simultaneous with her own — and it changed because she changed frames. Those 6.4
years are not lost or hidden. They are the relativity of simultaneity presenting
its invoice.

If you want a single sentence for the whole paradox: **the traveller's "now" on
Earth jumps when she turns around, and the stay-at-home's never does.**

## Examples

**The full arithmetic.** Distance to the star, measured from Earth: 4 light
years. Speed: $v = 0.8c$. The Lorentz factor is
$\gamma = 1/\sqrt{1-0.8^2} = 1/0.6 = 5/3$.

| Quantity | Earth's account | Traveller's account |
| --- | --- | --- |
| Distance to star | 4 ly | 2.4 ly (contracted) |
| Time, outbound | 5 yr | 3 yr |
| Time, inbound | 5 yr | 3 yr |
| **Total elapsed** | **10 yr** | **6 yr** |

Both accounts are internally consistent, and they use different mechanisms: Earth
explains the short trip by the ship's clock running slow, the traveller explains
it by the journey being shorter. Both are right in their own frame, and both
predict the same reunion.

**Counting light flashes — the version with no room for argument.** Suppose each
sister sends the other one flash of light per year, on her own birthday. When
they meet, they simply count the flashes they received. Counting is not
frame-dependent; there is nothing to argue about.

At $v = 0.8c$ the Doppler factor is
$k = \sqrt{(1+0.8)/(1-0.8)} = \sqrt{9} = 3$.

*What the traveller sees.* Outbound, receding, she receives Earth's flashes at
one-third the rate: 3 years at 1/3 per year = **1 flash**. Inbound, approaching,
she receives them at three times the rate: 3 years at 3 per year = **9 flashes**.
Total: **10** — she has watched Earth age ten years.

*What the stay-at-home sees.* The turnaround happens at Earth-year 5, four light
years away, so the news of it does not arrive until Earth-year 9. For the first 9
years she receives redshifted flashes at 1/3 per year = **3 flashes**. For the
last year she receives blueshifted flashes at 3 per year = **3 flashes**. Total:
**6** — she has watched her sister age six years.

Ten and six. Both sisters agree, from direct observation, before either of them
has done any relativity. There is no paradox to resolve here at all — only an
arithmetic that comes out right.

**Hafele and Keating, 1971.** Four caesium beam clocks were flown around the
world on ordinary scheduled airline flights, once eastward and once westward, and
compared with the reference clocks of the US Naval Observatory. Relativity
predicted the flying clocks would lose $40 \pm 23$ nanoseconds going east and gain
$275 \pm 21$ nanoseconds going west — the difference in sign coming from the
Earth's own rotation, and the effect combining velocity time dilation with the
gravitational effect of altitude. They observed a loss of $59 \pm 10$ nanoseconds
and a gain of $273 \pm 7$ nanoseconds.

The experiment has been criticised for its error analysis and has since been
repeated with far better precision — most spectacularly by James Chin-Wen Chou
and colleagues in 2010, who measured time dilation with aluminium-ion optical
clocks at a relative speed of about 10 metres per second and a height difference
of 33 centimetres. There is no serious doubt left. Your head ages faster than
your feet, by about a nanosecond per year, and this is now routinely measurable.

## Explore

**"So is this general relativity?"** No, though the confusion has a respectable
source. Special relativity handles accelerated observers perfectly well; you do
not need curved spacetime to describe a rocket firing its engines. What you lose
is the right to use a single global inertial frame for the traveller, and that is
a bookkeeping restriction, not a limitation of the theory.

The confusion comes from Einstein himself. In a 1918 dialogue published in
*Die Naturwissenschaften*, he answered a critic by adopting the traveller's
accelerating frame and invoking the equivalence principle: in that frame there is
a uniform gravitational field during the turnaround, and Earth, being high up in
that field's potential, ticks fast. The calculation is correct and gives the same
6.4 years. But it is one optional way of describing the turnaround, not the
explanation, and generations of textbooks have reported it as though general
relativity were required. It is not.

**"But the traveller feels the acceleration, so surely that is the difference?"**
It is *a* difference, and a real one — she can tell that she turned around without
looking out of the window, and that is why the situations are not symmetric. But
feeling a force is the flag, not the mechanism. Compare: a car that takes the
bendy road has to turn its steering wheel, and the driver feels it. The extra
miles on the odometer are not caused by the sensation of turning. They are caused
by the road being longer. Acceleration is how you know the path was bent; the
bend is what costs the time.

**How much does the turnaround itself contribute?** You can compute this
directly. Model the turnaround as a period of constant proper acceleration and
let its duration go to zero while holding the trip's speed and distance fixed;
the age difference converges on a nonzero limit. Model it as a long, gentle arc;
the age difference is nearly the same. The turnaround supplies an asymmetry, and
almost none of the number.

**Where the asymmetry can come from instead.** The three-clock relay removes
acceleration by using two inertial travellers. Michael Brans and David Stewart's
1973 analysis, extended by John Barrow and Janna Levin in 2001, does it another
way: in a spatially compact universe — one that wraps around — two observers can
separate inertially and meet again, and the ageing difference is still there. In
that case the symmetry is broken not by anything either observer does but by the
global topology of space, which picks out a preferred frame. This is a genuinely
instructive case, because it shows that the asymmetry lives in the *geometry of
the paths*, and acceleration was only ever one way of producing it.

**Herbert Dingle's campaign.** From the 1950s until his death in 1978, the
British physicist and philosopher of science Herbert Dingle argued in print,
repeatedly and at length, that the twin paradox showed special relativity to be
internally contradictory. His book *Science at the Crossroads* (1972) is the
fullest statement. He was wrong, and his error is exactly the one described
above: he insisted that mutual time dilation must be symmetric under exchange of
the twins, without noticing that only one twin's frame is inertial throughout.
The episode is worth knowing because Dingle was a serious scientist, not a crank
by training, and because his objection is the one almost every thoughtful person
raises independently.

## History

**1905.** In §4 of "Zur Elektrodynamik bewegter Körper", Einstein notes that a
clock carried around a closed curve and returned to its starting point will lag
behind an identical clock that stayed put. He states it for clocks, without
comment, as a straightforward consequence of the transformation he has just
derived. There is no paradox and no discussion. The result is simply there.

**1911.** Paul Langevin, lecturing at the international philosophy congress in
Bologna and publishing in *Scientia*, gives the result a human shape: a traveller
who leaves in a projectile at very nearly the speed of light, spends two years of
his own time away, and returns to an Earth on which two hundred years have
passed. Langevin does not say "twins" and does not present it as a paradox — for
him it is a striking but unproblematic truth. He does attribute the asymmetry to
the traveller having undergone acceleration, which is where the durable
misconception enters the literature.

**1913.** Max von Laue analyses the problem using Minkowski's spacetime diagrams
and identifies the real asymmetry: the traveller occupies two distinct inertial
frames while the stay-at-home occupies one. This is the correct account, published
within two years of Langevin, and it took most of a century to displace the
acceleration story in popular treatments.

**1918.** Einstein publishes his dialogue in *Die Naturwissenschaften* responding
to objections, and analyses the turnaround using the equivalence principle. This
gives the right answer and launches the widespread belief that general relativity
is needed.

**1950s–1970s.** Herbert Dingle's long dispute with the physics establishment
keeps the problem in the journals and in the letters pages of *Nature*. The
literature it generated is, in aggregate, an unusually thorough working-out of
the problem.

**October 1971.** Joseph Hafele and Richard Keating fly caesium clocks eastward
and westward around the world on commercial airliners. Their two papers appear in
*Science* in July 1972.

**1976 onward.** The muon storage ring at CERN measures the lifetime of muons
circulating at $\gamma \approx 29$ and confirms time dilation to a fraction of a
percent — under a proper acceleration of about $10^{18}$ times Earth's gravity,
which incidentally confirms that acceleration itself has no effect on clock rates
beyond what the speed already accounts for.

## Deep Dive

### Proper time is arc length

In flat spacetime with signature $(-,+,+,+)$, the invariant interval between
neighbouring events is

$$ds^2 = -c^2dt^2 + dx^2 + dy^2 + dz^2 .$$

For a timelike worldline, define proper time by $c^2 d\tau^2 = -ds^2$. Then along
any worldline parameterised by coordinate time $t$ in some inertial frame,

$$\tau = \int_{t_1}^{t_2}\sqrt{1 - \frac{v(t)^2}{c^2}}\;dt .$$

The integrand is at most $1$, with equality only when $v = 0$. So among all
worldlines connecting the same two events, the one that is at rest in the chosen
frame — the inertial, straight one — has the **maximum** proper time. This is the
reverse triangle inequality of Minkowski geometry, and it is the entire content
of the paradox. Everything else is arithmetic.

For the standard trip at constant speed $v$ over Earth-frame duration $T$:

$$\tau_{\text{traveller}} = \frac{T}{\gamma} = T\sqrt{1 - v^2/c^2}, \qquad
\gamma = \frac{1}{\sqrt{1-v^2/c^2}} .$$

With $v = 0.8c$, $\gamma = 5/3$, $T = 10$ years: $\tau = 6$ years.

### The simultaneity jump, derived

Work in Earth's frame $S$, with the launch at the origin. The turnaround event
$P$ has coordinates $(t, x) = (5\ \text{yr},\ 4\ \text{ly})$.

The outbound frame $S'$ moves at $+v$. Events simultaneous with $P$ in $S'$
satisfy $t' = \gamma(t - vx/c^2) = \text{const}$, i.e.

$$t - \tfrac{v}{c^2}x = 5 - 0.8(4) = 1.8\ \text{yr}.$$

Setting $x = 0$ gives Earth-time $t = 1.8$ years. That is what "now on Earth"
means to the outbound traveller at the moment she reaches the star.

The inbound frame $S''$ moves at $-v$. Its simultaneity condition through $P$ is

$$t + \tfrac{v}{c^2}x = 5 + 0.8(4) = 8.2\ \text{yr},$$

which at $x = 0$ gives Earth-time $t = 8.2$ years.

$$\Delta t_{\text{jump}} = 8.2 - 1.8 = 6.4\ \text{yr} = \frac{2vd}{c^2},$$

with $d = 4$ ly the Earth-frame distance. Combined with $1.8$ years of Earth
ageing observed on each leg, the total is $1.8 + 6.4 + 1.8 = 10$ years. The books
close.

Note that the jump depends on $d$, the distance at which the frame change occurs.
Turn around next to Earth and there is no jump and no age difference. This is the
sharpest possible statement that the effect is about *where* the frame change
happens, not *how hard* it is.

### Removing the acceleration

Consider three inertial worldlines and no acceleration at all. Clock $A$ stays on
Earth. Clock $B$ passes Earth at $+0.8c$, zeroing its reading at the passing
event. Clock $C$ travels at $-0.8c$ and passes the star at the moment $B$ arrives
there; at that crossing, $C$ is set to $B$'s reading. When $C$ passes Earth it
reads

$$\tau_B + \tau_C = 3 + 3 = 6\ \text{yr},$$

against $A$'s 10. No object ever accelerated. What happened is that the relay
"path" is a bent worldline stitched from two straight pieces, and bent worldlines
are short. The handoff is the frame change, performed by fiat rather than by a
rocket engine, and it costs exactly the same 6.4 years.

### The turnaround in the traveller's own accelerated frame

If you insist on describing everything in coordinates comoving with the
traveller, use Rindler coordinates during the turnaround. In those coordinates a
clock at proper distance $x$ "above" the observer along the acceleration
direction runs at rate

$$\frac{d\tau_{\text{distant}}}{d\tau_{\text{local}}} = 1 + \frac{a x}{c^2},$$

with $a$ the proper acceleration. During the turnaround the traveller accelerates
*towards* Earth, so Earth sits high in the effective potential and runs fast. The
elapsed Earth time accumulated during a turnaround of proper duration
$\Delta\tau$ is approximately $a\,d\,\Delta\tau/c^2$, and since the speed change
is $\Delta v \approx a\,\Delta\tau$, this is $\approx \Delta v\, d/c^2$ — for a
full reversal, $2vd/c^2$, the same $6.4$ years. The answer does not depend on
$a$ or $\Delta\tau$ separately, only on their product. That is the formal reason
acceleration is not the cause.

### Doppler bookkeeping

The relativistic Doppler factor for radial motion is

$$k = \sqrt{\frac{1+\beta}{1-\beta}}, \qquad \beta = v/c .$$

At $\beta = 0.8$, $k = 3$. Note the identity $\gamma = \tfrac12(k + k^{-1})$,
which is Bondi's observation that all of the kinematics can be built from $k$
alone. The flash-counting argument in the Examples section is a complete proof of
the age difference that never mentions frames, coordinates or simultaneity, and
for that reason it is the version to reach for when someone is not yet convinced.

## Why It Matters

**It killed universal time.** Newton's time was a single river flowing at the same
rate everywhere for everyone. The twin paradox is the sharpest available
demonstration that this is false and that duration is a property of a path, not
of the universe. Every clock reads the length of its own history.

**It made "now" a local notion.** The 6.4 missing years are not an artefact or a
bookkeeping trick. They are the direct consequence of the fact that two observers
in relative motion genuinely disagree about which distant events are happening
at the same moment, and that neither is mistaken. This is the single most
consequential idea in special relativity, and the twin paradox is the cleanest
way to feel it.

**It is engineering, not philosophy.** The satellites in the GPS constellation
carry atomic clocks moving at about 3.9 km/s and sitting 20,200 km up. Special
relativity makes those clocks lose about 7 microseconds a day; the weaker gravity
makes them gain about 45. The net offset of roughly 38 microseconds a day is
compensated for by design — the onboard oscillators are deliberately set to the
wrong frequency before launch. Left uncorrected, position errors would accumulate
at about 10 kilometres a day. Relativistic time dilation is a line item in a
satellite's specification.

**It is why particle accelerators work.** Unstable particles produced in
accelerators survive long enough to be studied only because their proper time
runs slow relative to the laboratory. A muon at rest lives 2.2 microseconds. A
muon at $\gamma = 29$ lives 2.2 microseconds *of its own time*, which is 64
microseconds of ours, which is the difference between a detectable particle and
a rumour.

## Modern Relevance

**Optical clocks as gravimeters.** Clocks are now accurate enough that the
relativistic shift is a measurement tool rather than a correction. An optical
lattice clock can resolve a height change of a few centimetres from the change in
its tick rate. "Chronometric levelling" — surveying the shape of Earth's
gravitational potential by comparing clocks — is an active field.

**Relativistic navigation beyond Earth.** Deep-space navigation, pulsar timing
arrays and very long baseline interferometry all require proper-time bookkeeping
between clocks in different states of motion and potential. The formalism is
exactly the twin calculation, done carefully and repeatedly.

**Interstellar travel arithmetic.** The traveller's advantage is real and grows
without limit: at constant 1g proper acceleration you can, in principle, cross
the visible universe within a human lifetime *of your own*, while billions of
years pass outside. The trip is one-way in time. Every serious discussion of
interstellar flight — and much of the science fiction worth reading — is built on
this asymmetry.

**It remains the best teaching instrument in physics.** The paradox exposes,
faster than anything else, whether a student has understood that simultaneity is
frame-dependent. Almost every wrong answer to the twin paradox is the same wrong
answer: quietly assuming a universal "now".
