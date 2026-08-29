---
title: Achilles and the Tortoise
slug: achilles-and-the-tortoise
alternateNames:
  - The Achilles
  - Zeno's Second Paradox of Motion
summary: >-
  Achilles gives a tortoise a head start. By the time he reaches where it was, it
  has crawled a little further — and so on, forever. Zeno concluded he can never
  overtake it. He does, and the infinitely many stages take a perfectly ordinary
  eleven seconds.
era: ancient
date: c. 450 BCE
year: -450
origin: >-
  The second of Zeno of Elea's four arguments against motion, reported by
  Aristotle in Physics VI.9. Aristotle describes only "the swiftest" and "the
  slowest"; the tortoise arrives later, through the commentators.
people:
  - zeno-of-elea
  - parmenides
  - aristotle
  - simplicius
domains:
  - philosophy
  - mathematics
types:
  - infinity
  - time
nature: apparent-contradiction
difficulty: intermediate
status: explained
concepts:
  - Geometric series
  - Convergence
  - Infinite regress
  - Limit point
  - Supertasks
relationships:
  - kind: related
    to: galileos-paradox
    note: Galileo found that an infinite collection can be matched one-to-one with a part of itself. Zeno's stages are an infinite collection packed into a finite stretch of time. Both are the same discovery from opposite ends.
  - kind: related
    to: cantors-diagonal-argument
    note: Cantor supplied, two thousand years later, the first coherent arithmetic of the infinite — the thing Zeno's arguments had been probing for and not finding.
  - kind: contrasts-with
    to: st-petersburg-paradox
    note: Both turn entirely on an infinite sum. Zeno's converges, which is why Achilles wins the race. The St Petersburg sum diverges, which is why the game has no sensible price.
references:
  - source: aristotle-physics
    role: primary-source
    locator: "Book VI.9, 239b14–29"
    note: The only ancient statement of the argument, in Aristotle's paraphrase.
  - source: plato-parmenides
    role: primary-source
    locator: 127a–128e
    note: What Zeno said his book was for.
  - source: simplicius-in-physica
    role: primary-source
    note: The commentary through which the ancient discussion reaches us.
  - source: kirk-raven-schofield-presocratics
    role: academic-reference
    note: On the state of the evidence for each of the four motion arguments.
  - source: barnes-presocratic-philosophers
    role: book
    note: Sets the argument out formally and identifies precisely which premise fails.
  - source: salmon-zenos-paradoxes
    role: book
    note: The twentieth-century debate, collected.
  - source: grunbaum-modern-science-zeno
    role: book
  - source: sep-zenos-paradoxes
    role: encyclopedia
furtherReading:
  - title: What the Tortoise Said to Achilles — Lewis Carroll, Mind (1895)
    url: https://en.wikisource.org/wiki/What_the_Tortoise_Said_to_Achilles
    note: A different paradox with the same cast, about the infinite regress of justifying a rule of inference. Frequently mistaken for Zeno's.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Achilles was the fastest runner in the ancient world. One day a tortoise
challenges him to a race.

"You are quicker than me," says the tortoise. "So give me a head start. Just a
hundred paces. Then we'll see."

Achilles laughs and agrees.

The race begins. Achilles runs the hundred paces to where the tortoise started —
but the tortoise is not there any more. In the time Achilles took, it has plodded
on ten paces.

Fine. Achilles runs those ten paces. But the tortoise has used that time too, and
is now one pace ahead.

Achilles runs the one pace. The tortoise has moved a tenth of a pace.

You can see the trap closing. Every single time Achilles arrives at the spot
where the tortoise was, the tortoise has already left. It is always ahead — by
less and less, but always by *something*. And this happens not a hundred times or
a million times, but endlessly.

"Well," says the tortoise, without hurrying, "you may as well stop. By your own
account you will never catch me."

## Understand

The tortoise's argument is genuinely clever, and it is worth being clear about
what it does and does not prove.

What it proves: **at the end of each stage, Achilles has not yet caught the
tortoise.** That is true. Stage one, stage two, stage one thousand — at the end
of any of them the tortoise is still marginally ahead.

What the tortoise then claims: **therefore Achilles never catches the tortoise.**

That does not follow, and the reason is the whole paradox. The stages do not fill
up all of time. They fill up the time *before* the moment he catches up, and stop
short of it.

### Put numbers on it

Let Achilles run at 10 metres per second, the tortoise at 1 metre per second,
with a 100-metre head start.

- Achilles covers 100 m in **10 seconds**. The tortoise is now at 110 m.
- Achilles covers that 10 m in **1 second**. The tortoise is at 111 m.
- He covers that 1 m in **0.1 seconds**. The tortoise is at 111.1 m.
- He covers 0.1 m in **0.01 seconds**. The tortoise is at 111.11 m.

The tortoise's argument has infinitely many stages, and it is right that there is
no last one. But look at the clock. The times are 10, 1, 0.1, 0.01, 0.001 …
seconds. Add all of them, all the way out, and the total is

10 + 1 + 0.1 + 0.01 + … = 11.1111… seconds,

which is exactly 100/9 seconds. And the positions 100, 110, 111, 111.1, 111.11 …
close in on 1000/9 metres, or 111.111… metres.

So the tortoise's endless sequence of stages describes everything that happens in
the first **11.11 seconds** of the race and nothing that happens afterwards. It
is a very detailed description of the run-up to the overtake, and it stops one
instant short of it — which is why the overtake never shows up in it.

At 11.2 seconds Achilles is at 112 metres and the tortoise is at 111.2 metres,
and the race is over.

### The mistake in one sentence

The argument establishes *for every stage, Achilles has not caught up*. It needs
*at every moment, Achilles has not caught up*. Those are different claims,
because the stages do not include every moment. Sliding between them is the
error, and it is completely invisible in ordinary language, which is why the
argument survived for two and a half thousand years.

The elementary answer, incidentally, agrees exactly with the infinite sum.
Achilles gains 9 metres of ground per second and has 100 metres to make up, so he
catches the tortoise after 100/9 seconds. That is the same 11.111… seconds the
infinite series produced. The two calculations are not rivals; the series is the
long way round to the schoolbook answer.

## Examples

**The whole race in a table.** Achilles at 10 m/s, tortoise at 1 m/s, 100 m start.

| Stage | Duration (s) | Clock (s) | Achilles (m) | Tortoise (m) | Gap (m) |
| --- | --- | --- | --- | --- | --- |
| 1 | 10 | 10 | 100 | 110 | 10 |
| 2 | 1 | 11 | 110 | 111 | 1 |
| 3 | 0.1 | 11.1 | 111 | 111.1 | 0.1 |
| 4 | 0.01 | 11.11 | 111.1 | 111.11 | 0.01 |
| 5 | 0.001 | 11.111 | 111.11 | 111.111 | 0.001 |
| … | … | … | … | … | … |
| limit | — | **11.111…** | **111.111…** | **111.111…** | **0** |

The gap column is the argument's whole strength: it is never zero on any row. It
is also the argument's whole weakness: the rows never reach the bottom line, and
the bottom line is where the race is decided.

**Why the clock column is the one to watch.** Each row advances the clock by a
tenth of the previous row's advance. Ten seconds, then one, then a tenth. Nobody
is surprised that 11.111… is a perfectly ordinary number. But 11.111… is the sum
of infinitely many of those durations, and if you accept that number you have
accepted everything the paradox says is impossible.

**A version with no running.** Cut a cake. Take half. Then half of what is left.
Then half of that. You can describe infinitely many cuts, and the cake stays
finite the whole time. Nobody finds this troubling, because a cake sitting on a
table is not doing anything. The Achilles feels harder only because we imagine
Achilles *performing* each stage — and the stages are our bookkeeping, not his.

## Explore

Aristotle's own reply to the Achilles is one line long: it is the same as his
reply to the Dichotomy. He says the argument assumes that it is impossible to
traverse infinitely many things in a finite time, and that this is false, because
the time is divided in just the same way as the distance. Aristotle adds that the
Achilles differs from the Dichotomy only in that the successive magnitudes are
not obtained by halving. He was right that the two arguments stand or fall
together, and modern commentators agree.

That leaves three things genuinely worth arguing about.

**Does the head start matter?** In the Dichotomy the runner faces a fixed
distance and subdivides it. In the Achilles there is a second body, and the
subdivision is generated by the chase. Some commentators — Jonathan Barnes among
them — hold that this makes the Achilles the more compelling of the two, because
the stages are produced by the situation rather than imposed by the arguer. The
mathematics is identical; the rhetoric is not.

**Does summing the series actually answer it?** This is the point on which the
"calculus solved Zeno" story oversells itself. Summing the series shows that
Achilles catches the tortoise at 11.111… seconds. It does not, by itself, explain
how a process consisting of an endless sequence of stages with no final member
gets *completed*. If you think that a run is nothing over and above being at
various places at various times — Bertrand Russell's at-at account, developed by
Wesley Salmon — then the question dissolves, because there is no sequence of
achievements to complete. If you think a run is a doing, made of doings, the
question remains open. Max Black argued in the early 1950s that the notion of
completing an endless sequence of tasks is incoherent no matter what the
distances sum to; Adolf Grünbaum (1967) argued at book length that it is not.

**Was Zeno arguing for anything?** The usual view, following Plato's *Parmenides*,
is that Zeno was not defending the tortoise. He was defending his teacher
Parmenides, who held that reality is one and unchanging, by showing that the
ordinary pluralist picture generates absurdities too. On that reading the
Achilles is not a puzzle awaiting a solution but a weapon in an argument, and
its author would have been unmoved by being told that the series converges: the
point was that your own assumptions produce this. Whether Zeno actually held that
motion is impossible, or was only running a reductio, is disputed and the
evidence does not settle it.

## Deep Dive

### The stage sequence

Let Achilles have speed $v_A$, the tortoise speed $v_T$ with
$0 < v_T < v_A$, and let the head start be $d > 0$. Write
$r = v_T / v_A \in (0,1)$.

Stage $0$ ends when Achilles reaches the tortoise's starting point:

$$t_0 = \frac{d}{v_A}$$

During $t_0$ the tortoise advances $v_T t_0 = d r$, which is the new gap. By
induction the gap after stage $n$ is $d r^{\,n+1}$ and

$$t_n = \frac{d}{v_A} r^{\,n}$$

The total elapsed time over all stages is a geometric series:

$$T = \sum_{n=0}^{\infty} \frac{d}{v_A} r^{\,n} = \frac{d}{v_A}\cdot\frac{1}{1-r} = \frac{d}{v_A - v_T}$$

which is exactly the closing-speed answer. Achilles' position at that moment is

$$x = v_A T = \frac{v_A\, d}{v_A - v_T}$$

and the tortoise's is $d + v_T T$, which equals the same value. With
$d = 100$, $v_A = 10$, $v_T = 1$: $T = 100/9 \approx 11.11$ s and
$x = 1000/9 \approx 111.11$ m.

### Where the inference fails

Define $s_N = \sum_{n=0}^{N} t_n$, the clock reading at the end of stage $N$. The
argument establishes:

$$\forall N \in \mathbb{N}: \ x_A(s_N) < x_T(s_N)$$

and concludes:

$$\forall t \geq 0: \ x_A(t) < x_T(t)$$

The inference is invalid because $\{s_N : N \in \mathbb{N}\}$ is not all of
$[0,\infty)$. It is a strictly increasing sequence bounded above by $T$, with
$\sup_N s_N = T$ and $s_N < T$ for every $N$. The set of stage-endings has order
type $\omega$ and its limit point $T$ is not a member of it. Every claim the
argument proves is a claim about times strictly less than $T$; the overtake
happens at $T$ and thereafter.

This is the cleanest diagnosis available, and it requires nothing about the
metaphysics of motion — only the distinction between a property holding at every
member of a sequence and holding at the sequence's limit. The same distinction is
what makes pointwise convergence fail to preserve continuity, and it is one of the
recurring sources of error in real analysis.

### The residue

Suppose all of the above is granted. Two questions survive.

**Order type.** The stages form an $\omega$-sequence: there is a first, each has
an immediate successor, and there is no last. If traversal really consists of
performing each stage, then Achilles performs an $\omega$-sequence of acts and
then is past them — a **supertask**. James Thomson (1954) argued that supertasks
are incoherent, using a lamp switched at $t = 1 - 2^{-n}$ whose state at $t = 1$
is neither on nor off. Paul Benacerraf (1962) answered that the specification
simply fails to determine the state at the limit, so nothing contradictory
follows. Benacerraf's reply is generally accepted, and it establishes consistency
rather than mechanism. The Achilles is safe either way, because unlike the lamp,
Achilles' position is given by a continuous function whose value at $T$ *is*
determined by the values before it: $\lim_{t \to T^-} x_A(t) = x_A(T)$.
Continuity is doing the work that the lamp lacks, and saying so is a real
explanation rather than a restatement.

**Constant speed.** The clean series above assumes uniform motion. Nothing in
Zeno's argument requires it: the decomposition into stages works for any pair of
motions in which the pursuer is faster. If both runners accelerate in the right
coordinated way, the sum of stage durations can diverge and Achilles genuinely
never catches up. That case is not a paradox — it is a slower pursuit than it
looks — but it shows that "there are infinitely many stages" is compatible with
both outcomes. The convergence, not the infinity, is what decides the race, and
Zeno's argument never mentions the convergence at all.

### A different tortoise

Lewis Carroll's "What the Tortoise Said to Achilles" (*Mind*, 1895) borrows the
cast for an unrelated and equally durable problem. Carroll's tortoise accepts
premises $A$ and $B$, and accepts that $A$ and $B$ together imply $Z$, but refuses
to infer $Z$ until that implication is itself added as a premise $C$ — which
generates $D$, and so on without end. The moral is that a rule of inference cannot
be replaced by a premise, and any attempt to justify inference by adding premises
regresses forever. Douglas Hofstadter revived both tortoises in *Gödel, Escher,
Bach* (1979), which is where most readers now meet either. The two paradoxes have
nothing in common but the animals.

## History

**The evidence.** Zeno of Elea wrote a single book, around 450 BCE, and it is
lost. The Achilles survives in one place: Aristotle's *Physics* VI.9, at 239b14,
where it is summarised in about forty words and immediately refuted. Aristotle
introduces it as "the so-called Achilles", which tells us the argument already had
a nickname a century after Zeno wrote — and that Aristotle expected his audience
to recognise it.

Two things about that text are worth knowing. First, Aristotle describes only "the
swiftest" and "the slowest". **There is no tortoise in Aristotle.** The animal
appears in the later commentary tradition, and it is so firmly attached now that
the paradox is unusable without it. Second, Aristotle's paraphrase is a hostile
summary by someone with a theory to defend, not a quotation.

The handful of verbatim lines of Zeno that survive were quoted by Simplicius in
his commentary on the *Physics*, written around 540 CE — roughly a thousand years
after Zeno. All of them belong to Zeno's arguments against plurality. **Not one
surviving word of Zeno is about Achilles or the tortoise.** Everything in this
entry above the History section is reconstruction from Aristotle.

**The tradition.** Diogenes Laërtius (IX.25–29) supplies Zeno's biography: pupil
and adopted son of Parmenides, an Eleatic, and a martyr in a plot against a
tyrant who bit off his own tongue under torture. Diogenes gives incompatible
versions of the last part, and it should be read as legend.

Plato's *Parmenides* (127a–128e) is the source for Zeno's purpose — a young man's
defence of Parmenides against ridicule — and Plato is dramatising, not
reporting.

**Afterwards.** The Achilles ran through the Greek commentators, through medieval
discussions of the continuum, and back into the modern canon with Bayle's
*Dictionnaire* in 1697. It picked up its reputation as the paradox everybody can
state and nobody can quite dismiss. The mathematics that dispatches the series
arrived with Cauchy in the 1820s and Weierstrass after him; the philosophical
argument about whether the mathematics is the whole answer began again in the
1950s with Max Black and James Thomson and has not stopped.

## Why It Matters

**It is the standard demonstration that an infinite process can have an end.**
Almost everyone meets the idea of a convergent series through some version of
this race. The Achilles is the reason that the sentence "infinitely many things,
finite total" is intuitive to anyone at all, and that sentence underwrites
calculus, probability, and every numerical method in use.

**It isolates a specific and common logical error.** Proving something at every
member of a sequence is not proving it at the sequence's limit. Written out that
way it sounds like a technicality. It is the difference between a bank account
that runs dry and one that does not, between an algorithm that terminates and one
that stalls, and between Achilles winning the race and losing it. Undergraduates
in analysis get this wrong every year, in exactly the form Zeno gave it.

**It made "the slower is always ahead" into a testable claim.** Zeno's real
achievement was turning an obvious fact about the world into an argument with
premises, so that someone could go and find which premise was wrong. It took
about two thousand three hundred years. That is a long time, but the process only
became possible because the argument was stated sharply enough to be attacked.

**It keeps the honest version of the story available.** The Achilles is the best
available counterexample to the idea that mathematics finishes philosophy. The
series converges; that is not in doubt and never was after 1830. Whether the
convergence explains how an endless sequence of stages gets completed is still
argued about by people who understand the mathematics perfectly well.

## Modern Relevance

**Convergence rates in computation.** An iterative solver is Achilles and the
answer is the tortoise: each pass closes some fraction of the remaining gap.
Whether it arrives depends on the ratio, exactly as in the race — a solver with a
contraction factor just under 1 converges but may take longer than the age of the
universe to be useful, which is the practical version of the tortoise's taunt.

**Pursuit problems in control and robotics.** Interception, missile guidance and
target-tracking algorithms compute precisely the quantity Zeno's argument avoids
naming: the closing speed and the time to intercept. The naive "steer at where it
is now" strategy is the tortoise's own description of the chase, and it works
only because the gap shrinks geometrically.

**Zeno points in simulation.** Hybrid-systems simulators can hit states where
events accumulate infinitely fast in finite simulated time — a bouncing ball
whose bounces converge. Engineers call these Zeno points and design around them,
because a simulator that reaches one makes no further progress while its clock
stands still.

**Financial and physical limits.** A perpetuity paying a fixed fraction each
period has a finite present value for exactly the reason Achilles wins: the terms
form a convergent geometric series. The same computation prices an annuity, sums
a multiplier effect in macroeconomics, and totals the light reflected between two
facing mirrors. It is one formula and Zeno is the reason anyone thought it needed
justifying.
