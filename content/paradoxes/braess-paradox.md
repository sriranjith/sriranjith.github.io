---
title: Braess's Paradox
slug: braess-paradox
alternateNames:
  - The Braess paradox of traffic planning
  - Braess's road paradox
summary: >-
  Open a fast new road between two points and every driver's journey gets longer.
  Close a busy street and the traffic speeds up. Dietrich Braess proved in 1968
  that this is not bad luck — it is what selfish route choice does.
hook: >-
  Add a new road to a congested city and every journey gets slower. Close the
  road again and the traffic speeds up.
era: twentieth-century
date: 1968
year: 1968
origin: >-
  Published by Dietrich Braess in the German journal Unternehmensforschung in
  1968, as a four-node network in which adding one link raises the equilibrium
  travel time for every driver.
people:
  - dietrich-braess
domains:
  - economics
  - computer-science
  - society
types:
  - optimization
  - decision-making
  - aggregation
nature: counterintuitive-result
difficulty: advanced
status: resolved
renown: known
concepts:
  - User equilibrium
  - Wardrop's principles
  - Price of anarchy
  - Latency function
  - Marginal cost pricing
  - Network design
relationships:
  - kind: related
    to: jevons-paradox
    note: >-
      Both are cases where adding capacity fails to relieve pressure. Jevons's
      efficiency gains get eaten by extra demand; Braess's new road gets eaten by
      drivers re-routing onto it, and can leave everyone worse than before.
  - kind: related
    to: simpsons-paradox
    note: >-
      Two reversals of the obvious. Simpson's is a reversal in aggregated data;
      Braess's is a reversal in an aggregated system, where a change that helps
      each driver considered alone hurts all of them considered together.
references:
  - source: braess-1968-paradoxon
    role: primary-source
    note: The original paper, in German.
  - source: braess-nagurney-wakolbinger-2005-translation
    role: paper
    note: The English translation, with Braess's own note on how the example arose.
  - source: roughgarden-tardos-2002-selfish-routing
    role: paper
    note: Bounds the damage — selfish routing costs at most 4/3 of optimal with linear latencies.
  - source: roughgarden-2005-selfish-routing-book
    role: book
  - source: youn-gastner-jeong-2008-price-of-anarchy
    role: paper
    note: Measures the effect on the actual road networks of Boston, London and New York.
  - source: kolata-1990-42nd-street
    role: further-reading
    note: Contemporary reporting on the Earth Day 1990 closure in Manhattan.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Four thousand drivers leave the same town every morning and drive to the same
city. There are two ways to go, and they take the same time, so half the drivers
take each. Everyone arrives 65 minutes later.

Then the highway department builds a short new road connecting the middle of one
route to the middle of the other. It is fast, brand new and free. It is a
shortcut.

Nobody is forced to use it. Every driver simply picks whatever route gets them to
work soonest, exactly as they did before.

The next morning, every driver arrives 80 minutes later.

Not the ones who used the new road. **Every driver.** Fifteen minutes worse than
the day before the shortcut existed, and there is nothing any of them can do
about it — check any other route and it is worse still.

The paradox has a second half, and it is the half city planners have had to take
seriously. Run the film backwards. If closing a road can make everyone's journey
*shorter*, then somewhere in your city there is probably a road it would pay to
close.

On Earth Day 1990, New York City shut 42nd Street. Traffic engineers braced for
gridlock. Traffic got better.

## Understand

Two facts, put together, produce the effect.

**First: drivers choose routes, planners do not.** Nobody assigns you a road. You
take whichever route you believe is fastest, and so does everybody else. Traffic
therefore settles into a state where no single driver can improve their own time
by switching. That state has a name — the *user equilibrium* — and the crucial
thing about it is that it is a stable arrangement of individual choices, not a
plan. It is nobody's design and nobody's responsibility.

**Second: some roads slow down when they fill up and some do not.** A wide
motorway has a fairly fixed journey time whether it carries a thousand cars or
four thousand. A narrow bridge or a town centre gets slower with every car added.
The distinction between congestible and non-congestible links is the whole
mechanism.

Now watch what the new road does.

Before it existed, the two routes each mixed one congestible stretch with one
fixed stretch. Because everyone had to commit to a whole route, the traffic
spread itself across both — and spreading out is exactly what keeps a congestible
road fast.

The shortcut lets a driver take the congestible stretch of route A *and* the
congestible stretch of route B, skipping both of the fixed stretches. For a
single driver looking at today's traffic, that is a genuinely faster trip. So
they switch. It is faster for the next driver too, so they switch. Everybody
switches, because for each of them individually it is the right call.

And now all four thousand cars are piled onto the two congestible stretches at
once, which is precisely the arrangement those roads handle worst. Both fill up.
Both slow down. The shortcut is still, technically, the fastest route available —
that is why nobody leaves it — but the fastest route available is now slower than
the routes people used to take.

The old spread-out arrangement was better for everyone. It just was not stable,
because from inside any one car, moving to the shortcut looks like an
improvement.

> A new road does not add capacity to a network in any simple sense. It adds an
> *option*, and options change where everyone else goes.

This is why it does not help to be a considerate driver. If you stay off the
shortcut out of public spirit, you arrive later and nothing else changes.
Restraint by one driver is invisible; the equilibrium is a property of the
network, not of the drivers' character. Fixing it requires changing the network
or the prices, not the people.

## Examples

### The classic network, with real numbers

Four places: **Start**, **A**, **B**, **End**. Four thousand drivers travel from
Start to End.

Two of the roads are congestible: their travel time in minutes is the number of
cars on them divided by 100. Two are effectively fixed at 45 minutes regardless
of load.

| Road | Travel time |
| --- | --- |
| Start → A | (cars on it) ÷ 100 |
| Start → B | 45 minutes, always |
| A → End | 45 minutes, always |
| B → End | (cars on it) ÷ 100 |

**Before the shortcut.** Two routes exist: Start→A→End and Start→B→End. Suppose
2,000 drivers take each.

- Start→A→End: 2000/100 + 45 = **65 minutes**
- Start→B→End: 45 + 2000/100 = **65 minutes**

Equal, so nobody wants to move. This is the equilibrium, and it is also the best
possible arrangement: total time across all drivers is 4,000 × 65 = 260,000
driver-minutes, and no other split does better.

**Now add a road from A to B that takes no time at all** (say a fast link with
travel time 0). A third route appears: Start→A→B→End.

Watch one driver reason. Traffic is currently 2,000 on Start→A. If I switch to
the new route my trip is 2000/100 + 0 + 2000/100 = 20 + 0 + 20 = **40 minutes**,
against the 65 I have now. Obviously I switch.

So does everyone. In the new equilibrium all 4,000 drivers take Start→A→B→End:

- Start→A carries 4,000 cars: 4000/100 = 40 minutes
- A→B: 0 minutes
- B→End carries 4,000 cars: 4000/100 = 40 minutes
- **Total: 80 minutes**

**Check that nobody wants to leave.** A driver considering the old routes:

| Alternative | Time |
| --- | --- |
| Start→A→End | 40 + 45 = **85 minutes** |
| Start→B→End | 45 + 40 = **85 minutes** |
| Start→A→B→End | 40 + 0 + 40 = **80 minutes** |

Every alternative is worse. The 80-minute outcome is a genuine equilibrium: no
individual can improve by switching. And it is 15 minutes worse for every driver
than the 65 minutes they had before the road was built.

| | Before the new road | After |
| --- | --- | --- |
| Journey time, every driver | 65 min | 80 min |
| Total driver-minutes | 260,000 | 320,000 |
| Best achievable in this network | 260,000 | 260,000 |

Note the last row. The optimal arrangement in the enlarged network is exactly the
old one — split 2,000/2,000 and let the new road stand empty. It is unreachable
by free choice, because from any driver's own point of view the shortcut always
looks quicker.

**Demolition works.** Bulldoze the A→B link and equilibrium returns to 65
minutes. That is Braess's paradox in its practical form: removing a road can make
everyone strictly better off, and the road that needs removing is a perfectly
good road with heavy traffic on it.

### The rope and the springs

There is a mechanical version you can build on a table, described by Joel Cohen
and Paul Horowitz in 1991. Hang a weight from the ceiling on a chain of two
springs joined by a short rope, and add two slack safety ropes — one from the
ceiling to the top of the lower spring, one from the bottom of the upper spring
to the weight. Now cut the connecting rope in the middle.

The safety ropes take over. The two springs, previously in series and each
carrying the full weight, are now side by side and each carries half. Each
shortens. **The weight rises.** Cutting a link in a loaded structure lifted the
load — the same topology as the road network, with tension in place of traffic.

### What "everyone" means

The effect requires many small selfish decision-makers. A single haulage firm
routing 4,000 of its own lorries would compute the total and choose the
260,000-minute plan, because the firm internalises everything. The paradox lives
precisely in the gap between four thousand separate optimisations and one joint
one.

## Explore

**Is this actually a paradox?** By the classification used on this site it is a
counterintuitive result rather than a contradiction. Nothing is inconsistent; the
mathematics is elementary. What fails is the intuition that a network's
performance improves monotonically as you add links to it — an intuition that
holds for a network carrying a *centrally routed* flow, and does not hold once
the flow is chosen by its own participants. Braess's contribution was to show
that this is not a pathological special case but a generic possibility.

**How often does it happen?** More often than one would like, but not always.
Roughgarden showed that for random networks the effect is not rare, and Youn,
Gastner and Jeong found identifiable Braess links in the real street networks of
Boston, London and New York — roads whose closure would lower equilibrium travel
time for everyone. Against that, the effect can vanish at high or low demand: at
very light traffic the shortcut genuinely helps, and at very heavy traffic
drivers spread out again. It is characteristically a middle-demand phenomenon,
which makes it awkward to test for.

**The evidence for the famous real-world cases is uneven, and it is worth being
straight about that.**

- **Stuttgart, around 1969.** The story usually told is that a new cross-street
  near the Königstrasse failed to improve traffic and that conditions improved
  only when the new stretch was closed again. It is repeated in most textbook
  treatments and traces back to early German literature on the paradox. The
  primary documentation is thin, and it is best treated as a well-attested
  anecdote rather than a measured result.
- **42nd Street, New York, 22 April 1990.** Well documented contemporaneously.
  The city closed the street for Earth Day and traffic flow in the surrounding
  grid improved rather than collapsing. *The New York Times* ran the story under
  the headline "What if they closed 42d Street and nobody noticed?" and quoted
  mathematicians identifying it as Braess's paradox. The measurement was informal
  — it was a single day, with unusual traffic — but the qualitative result was
  clear and it was the case that carried the idea into public discussion.
- **Cheonggyecheon, Seoul, 2003–2005.** The city demolished an elevated
  expressway through the centre carrying on the order of 160,000 vehicles a day
  and restored the buried stream underneath it as a linear park. The predicted
  gridlock did not materialise, and reported travel speeds in the surrounding
  area held steady or improved. This is the largest real experiment of its kind,
  but it is not a clean one: the project came with expanded bus rapid transit,
  parking restrictions and other measures, so the Braess effect cannot be
  cleanly separated from ordinary demand management and induced-demand
  reversal.

The honest summary is that the mathematics is certain, the presence of Braess
links in real networks is established computationally, and the individual famous
road closures are suggestive rather than controlled experiments.

**Braess or induced demand?** These get conflated constantly and they are
different. *Induced demand* is the observation that new road capacity attracts
new trips that were not previously made at all, so the road fills up. Braess's
paradox holds the number of trips fixed and concerns only how existing trips
redistribute. Both predict that new roads disappoint. Only Braess predicts that
things get strictly worse with the same traffic.

## Deep Dive

### Wardrop equilibrium

Model the network as a directed graph $G = (V,E)$ with a source $s$, a sink $t$
and a demand rate $r$. Each edge $e$ carries a **latency function**
$\ell_e(x)$ giving travel time as a function of flow $x$ on that edge; assume
each $\ell_e$ is non-negative, continuous and non-decreasing.

A flow $f$ assigns a rate to each $s$–$t$ path, summing to $r$. Write
$\ell_P(f) = \sum_{e \in P} \ell_e(f_e)$ for the latency of path $P$.

Following Wardrop (1952), $f$ is a **user equilibrium** — a Nash equilibrium of
the non-atomic routing game — if every path carrying positive flow has minimum
latency:

$$f_P > 0 \ \Longrightarrow\ \ell_P(f) \le \ell_{P'}(f) \quad \text{for all paths } P'$$

The social cost is total travel time:

$$C(f) = \sum_{e \in E} f_e \, \ell_e(f_e)$$

Beckmann, McGuire and Winsten showed in 1956 that the equilibrium flow is exactly
the minimiser of the convex potential

$$\Phi(f) = \sum_{e \in E} \int_0^{f_e} \ell_e(u)\, du$$

which guarantees existence, and uniqueness of the edge flows when the $\ell_e$
are strictly increasing. The optimal flow minimises $C(f)$ instead. The
discrepancy between the two objectives is the entire subject.

Differentiating $C$ gives the marginal social cost of an extra unit on edge $e$:

$$\ell_e(f_e) + f_e\,\ell_e'(f_e)$$

A driver perceives only the first term. The second — the delay imposed on
everyone already on the edge — is the externality, and the source of the gap.

### The example in this notation

With $\ell_{sA}(x) = \ell_{Bt}(x) = x/100$, $\ell_{sB} = \ell_{At} = 45$,
$\ell_{AB} = 0$ and $r = 4000$:

Without $AB$, symmetry gives $f = (2000, 2000)$ and $\ell = 65$ on both paths, so
$C(f) = 260{,}000$. This flow also minimises $C$: the marginal cost on the
congestible edges is $x/100 + x/100 = x/50$, and equalising $x/50 + 45$ across the
two paths again gives $x = 2000$. Equilibrium and optimum coincide.

With $AB$ present, the path $s \to A \to B \to t$ has latency
$f_{sA}/100 + f_{Bt}/100$, which at $f = 4000$ on both edges equals 80, while both
two-hop paths cost 85. Equilibrium is the all-shortcut flow with
$C(f) = 320{,}000$. The optimum is unchanged at $260{,}000$, since the optimal
flow is feasible in the larger network and adding an edge cannot raise the
optimum. The **price of anarchy** of the augmented instance is

$$\rho = \frac{320{,}000}{260{,}000} = \frac{16}{13} \approx 1.231$$

### The price of anarchy, and how bad it can get

The price of anarchy is $\rho = C(f_{\text{eq}}) / C(f_{\text{opt}})$.
Koutsoupias and Papadimitriou introduced the general notion in 1999; Roughgarden
and Tardos settled it for routing in 2002.

**Linear latencies.** If every $\ell_e(x) = a_e x + b_e$ with $a_e, b_e \ge 0$,
then

$$\rho \le \tfrac43$$

for every network, every demand and every set of coefficients. The bound is
tight, attained by Pigou's two-edge example: one edge with $\ell(x) = 1$, one
with $\ell(x) = x$, unit demand. Everyone takes the congestible edge for cost 1;
splitting half and half costs $\tfrac12\cdot\tfrac12 + \tfrac12\cdot 1 = \tfrac34$.

Braess's network gives only $16/13$, less than $4/3$ — worth knowing, because it
is often loosely described as the worst case. It is the worst case for *link
addition*, not for the ratio itself.

**Degree-$p$ polynomials.** The bound degrades to
$\Theta\!\left(p / \ln p\right)$, so with realistic congestion functions —
the US Bureau of Public Roads formula is quartic — the potential loss is larger
but still bounded by a constant for fixed $p$.

**General latencies.** Roughgarden and Tardos's second result is the more useful
one in practice, and it needs no assumption on $\ell$ at all: the equilibrium
flow at rate $r$ costs no more than the optimal flow at rate $2r$. Doubling
capacity beats perfect central routing. This is the theorem that tells a
transport engineer that selfish routing is a bounded evil, which is why one can
build road networks without solving an assignment problem for every driver.

**Bounded, but not tightly bounded on the individual.** The $4/3$ bound is on
*aggregate* cost. In the Braess example every individual is $80/65 \approx 1.23$
times worse, but constructions exist where particular users fare far worse than
the aggregate ratio suggests.

### Fixing it

**Marginal cost tolls.** Charge each user on edge $e$ a toll of
$f_e^{*}\,\ell_e'(f_e^{*})$, evaluated at the optimal flow $f^{*}$. Users now
minimise the marginal social cost rather than their private cost, and the
resulting equilibrium is the social optimum. This is Pigou's 1920 prescription,
and it is the theoretical basis of congestion charging in London, Stockholm and
Singapore. In the example, a toll on the shortcut restores the 65-minute split.

**Network design.** Alternatively, delete edges. Roughgarden proved that finding
the best subnetwork of a given network — the subgraph whose equilibrium is
cheapest — is NP-hard, and moreover that no algorithm with a good approximation
ratio exists unless P = NP. Worse, he showed that for general latency functions
the trivial algorithm of doing nothing (keeping the whole network) is
essentially the best approximation obtainable in polynomial time. **Braess links
can be found in specific networks, but there is no efficient general procedure
for deciding which roads to close.**

**Atomic versus non-atomic.** The analysis above assumes infinitesimally small
users. With finitely many players each controlling a non-negligible share, an
equilibrium in pure strategies still exists for these congestion games — this is
Rosenthal's 1973 theorem, via a potential function — but the price of anarchy
bounds change, and for weighted atomic players with linear latencies the tight
bound rises to $(3+\sqrt5)/2 \approx 2.618$.

## History

**1920.** Arthur Pigou's *The Economics of Welfare* gives the two-road example
that still bears his name, and the marginal-cost-pricing remedy.

**1952.** John Glen Wardrop, a British transport scientist, states the two
principles that define the field: in equilibrium the journey times on all used
routes are equal and no less than those on unused routes (user equilibrium), as
against the alternative of minimising average journey time (system optimum). The
distinction between Wardrop's first and second principles is the frame Braess's
result lives in.

**1956.** Beckmann, McGuire and Winsten publish *Studies in the Economics of
Transportation*, giving the convex-programming formulation of traffic assignment
that makes equilibria computable.

**1968.** Dietrich Braess, then a young mathematician at Münster and later a
professor at the Ruhr University Bochum, publishes "Über ein Paradoxon aus der
Verkehrsplanung" in *Unternehmensforschung*. In a note attached to the
2005 translation, Braess records that he came upon the example while working on
traffic-assignment computations and initially suspected a programming error.

**1970s–1980s.** The result circulates in German and in the transportation
literature; Murchland gives it an English-language statement in 1970. It is
rediscovered several times, and by the 1980s "Braess's paradox" is standard
vocabulary in transport science while remaining almost unknown outside it.

**1990.** New York closes 42nd Street for Earth Day. Gina Kolata's *New York
Times* article introduces the paradox to a general audience.

**1991.** Joel Cohen and Paul Horowitz publish the springs-and-strings mechanical
analogue in *Nature*, showing the same topology in a physical system.

**1999.** Elias Koutsoupias and Christos Papadimitriou define the ratio of worst
equilibrium to optimum; Papadimitriou later names it the *price of anarchy*. The
question changes from "can selfish routing be bad?" to "how bad, exactly?"

**2002.** Tim Roughgarden and Éva Tardos answer it: at most $4/3$ for linear
latencies, and in general no worse than the optimum at double the traffic. The
paradox becomes a quantified, bounded phenomenon rather than a curiosity.

**2008.** Youn, Gastner and Jeong compute the price of anarchy on the real road
networks of Boston, London and New York from measured traffic data, and identify
specific streets whose removal would reduce equilibrium travel times.

## Why It Matters

**It broke the assumption that infrastructure is monotone.** The intuition that
more capacity is at worst neutral is false for any system whose users route
themselves. That single fact changes how a road scheme should be appraised: the
correct question is not "does this link help a driver?" but "what equilibrium
does the whole network settle into once this link exists?" Modern traffic
appraisal is built on equilibrium assignment models for exactly this reason.

**It made road removal a legitimate policy tool.** Before Braess, closing a busy
road to improve traffic was not an idea a transport department could put on
paper. Seoul's Cheonggyecheon expressway, San Francisco's Embarcadero Freeway,
Portland's Harbor Drive and the New York experiment made it a real option, and
the theory is what let engineers argue for it rather than merely hope.

**It gave computer science a quantitative theory of decentralisation.** The
price of anarchy, which grew directly out of this line of work, is now a standard
way to ask what a system loses by letting its participants make their own
decisions — in routing, scheduling, load balancing, spectrum allocation and
auctions. The answer is usually "a bounded constant factor", and that answer is
the licence for building decentralised systems at all.

**It sharpened the idea of an externality into something computable.** Pigou's
external cost was a concept; the marginal-cost toll
$f_e \ell_e'(f_e)$ is a number you can charge. Congestion pricing in London,
Stockholm, Singapore and Milan implements this directly, and the reduction in
central-London traffic after the 2003 charge is among the better-measured
consequences of an economic theorem.

## Modern Relevance

**Navigation apps.** Every driver following a routing app is playing exactly the
game Braess modelled, and doing it faster and more sharply than human drivers
ever did. Apps compute individual shortest paths, which is precisely user
equilibrium, and they can drive whole neighbourhoods into it within minutes.
Residential streets in cities across the world have been overwhelmed by app
traffic that is individually optimal and collectively awful — a well-documented
effect that has led some municipalities to redesign streets to defeat the
routing. The theoretically clean solution, having apps route users toward the
system optimum rather than their own, raises an unresolved fairness problem:
somebody has to be assigned the slow route.

**Computer networks.** Internet traffic engineering faces the same structure.
Adding a high-capacity link between two autonomous systems can shift routing
decisions elsewhere and degrade end-to-end performance. Selfish routing analysis
originated in transport and is now standard in network design, overlay routing
and content delivery.

**Electrical grids.** Power flow in an AC network follows physical laws rather
than choice, but the mathematics is analogous, and adding a transmission line can
increase losses or reduce the maximum transmissible power. The effect is known in
power engineering as a Braess-type paradox and matters for grid expansion
planning.

**Sports and organisations.** Removing a dominant player can improve a team's
performance if that player's presence distorted everyone else's positioning; the
"Ewing theory" in basketball is the popular name for the observation, and it has
the same shape. The rigorous versions of this claim are thin, but the mechanism —
a locally attractive option distorting a whole system's equilibrium — is the
right one.

**Supply chains and cloud scheduling.** Anywhere many independent agents choose
among shared congestible resources — warehouse slots, cloud regions, checkout
queues — adding a resource can shift the equilibrium for the worse. Schedulers in
large systems increasingly manage this by pricing or by withholding options
rather than by exposing every available path.
