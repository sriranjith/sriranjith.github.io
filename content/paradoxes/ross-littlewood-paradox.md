---
title: The Ross-Littlewood Paradox
slug: ross-littlewood-paradox
alternateNames:
  - The Balls and Vase Problem
  - The Infinite Hotel Balls Problem
summary: >-
  Add ten numbered balls to a vase, remove one, repeat infinitely. After every
  step the vase grows by nine. After infinitely many steps the vase is empty —
  because every specific ball was eventually removed, even though the count grew
  without bound at every finite stage.
hook: >-
  You add ten balls and remove one, infinitely many times. At the end, the vase
  is empty. What happened to all the balls?
era: twentieth-century
date: "1988"
year: 1988
origin: >-
  Named after probabilist Sheldon Ross and mathematician John Edensor Littlewood,
  who popularised versions of the puzzle. The paradox is a standard illustration
  of how supertasks — infinite sequences of operations — expose the limits of
  classical reasoning about limits and sequences.
people:
  - sheldon-ross
  - john-edensor-littlewood
domains:
  - mathematics
  - philosophy
types:
  - infinity
  - self-reference
nature: logical-contradiction
difficulty: advanced
status: debated
renown: specialist
concepts:
  - Supertask
  - Countable infinity
  - Set-theoretic limit
  - Omega sequence
  - Conditional convergence
relationships:
  - kind: related
    to: hilberts-hotel
    note: Both use the same arithmetic of countably infinite sets to produce
      outcomes that contradict everyday intuitions about adding and removing objects.
  - kind: related
    to: achilles-and-the-tortoise
    note: Both are supertask paradoxes — infinite sequences of operations performed
      in finite time — and both require careful analysis of what happens at the
      limit point.
  - kind: related
    to: cantors-diagonal-argument
    note: The paradox only makes sense given Cantor's result that the natural
      numbers can be put in one-to-one correspondence with many proper subsets of
      themselves.
references:
  - source: russell-1903-principles
    role: academic-reference
    note: Russell's early work on infinity and supertasks provides the conceptual
      framework for the paradox.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

You have a vase, empty to start. You have an infinite supply of numbered balls:
1, 2, 3, 4, 5, …

At one minute to noon, you perform step 1:
- Add balls 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 to the vase.
- Remove ball 1.

At thirty seconds to noon, you perform step 2:
- Add balls 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 to the vase.
- Remove ball 2.

At fifteen seconds to noon, step 3:
- Add balls 21-30.
- Remove ball 3.

Each step takes half the time of the previous one. An infinite number of steps
are completed before noon.

After step $n$, the vase contains $9n$ balls: you have added $10n$ and removed
$n$.

At noon — after all steps are complete — how many balls are in the vase?

The answer is: **zero**.

The vase is empty.

## Understand

After every step, the vase has 9n balls and is growing. Yet at the limit, it is
empty. This feels impossible.

The resolution requires asking a specific question: for any particular ball, is
it in the vase at noon?

**Ball 1?** Removed at step 1. Not in the vase.
**Ball 2?** Removed at step 2. Not in the vase.
**Ball $n$?** Removed at step $n$. Not in the vase at noon.

For every ball with a number, we can point to the step at which it was removed.
Since the natural numbers are countable and the steps are indexed by natural
numbers, every ball is eventually removed. There is no ball that is never
removed.

So for each ball: it is not in the vase at noon. There are no balls in the vase.

### Why this is surprising

The surprise is that the *size* of the vase's contents was increasing at every
step (growing by 9 each time), yet the set of balls in the vase at the limit is
empty.

In classical analysis, if a sequence $a_n = 9n$ grows without bound, we say it
diverges to infinity. The limit does not exist. But here, the *identity* of the
balls changes at each step, not just the count. The set of balls at step $n$ is

$$V_n = \{n+1, n+2, \ldots, 10n\}$$

The set-theoretic limit of a sequence of sets is defined as:

$$\liminf V_n = \bigcup_{n=1}^{\infty} \bigcap_{k=n}^{\infty} V_k$$

For each fixed ball number $m$, ball $m$ is in $V_k$ only for $n < k \leq 10n$
around step $m$. Eventually (after step $m$), it is removed and never returns.
So ball $m$ is not in $\bigcap_{k=n}^{\infty} V_k$ for any $n$. The set-
theoretic limit is empty.

The *cardinality sequence* $|V_n| = 9n$ diverges. The *set sequence* $V_n$
converges to the empty set. They are different things.

## Examples

**The contrasting version: add 10, remove the last.** Now change the rule:
at step $n$, add balls $10n-9$ through $10n$, and remove ball $10n$ (the
highest-numbered ball you just added, instead of the lowest).

After step $n$, the vase contains balls $1$ through $9n$. At noon:
- Ball 1 was never removed.
- Ball 9 was never removed.
- For any ball $m$, it is removed only if $m = 10n$ for some $n$ — that is, only
  if $m$ is a multiple of 10. All other balls are never removed.

Now the vase contains infinitely many balls at noon — all balls whose numbers are
not multiples of 10.

The only difference from the original version is *which* ball was removed at
each step. The added balls are the same; the removed balls are different. The
limiting result is completely different: zero vs. infinitely many.

This version highlights that the "number of balls" at noon is not determined by
the step-by-step arithmetic alone, but by the *labelling* of the balls.

**The relabelling trick.** Replace all ball numbers in the contrasting version
with a bijective relabelling that maps non-multiples of 10 to all natural numbers.
Now the balls remaining at noon are in one-to-one correspondence with the natural
numbers. They are the same physical balls, just renamed. The apparent difference
between the two versions is entirely in the labels, not the physical situation.

## Explore

**Does the answer depend on the definition of "limit"?** The paradox exposes a
tension between different ways of extending finite intuitions to infinite
processes. The cardinality argument (9 balls added per step, so infinitely many
remain) uses one notion. The set-theoretic limit (every specific ball is removed)
uses another. These two notions agree for finite processes and diverge for
supertasks.

**Is the answer zero or indeterminate?** Some philosophers argue that the
question has no well-defined answer: a supertask is not a real physical process,
and asking what is in the vase "at noon" requires specifying what happens at the
limit, which the problem does not do. On this view, the set-theoretic limit is
a *choice* about how to extend the problem to the limit, not a discovery. The
contrasting version shows that different choices give different answers.

**Physical realisability.** No physical vase can contain infinitely many balls.
No physical process can perform infinitely many operations in finite time. The
paradox is purely mathematical: it asks what we should say about a mathematical
model, not about the physical world. Its interest lies in what it reveals about
the mathematics of infinity, not in any physical implications.

## Deep Dive

### The formal setup

At step $n$ ($n \geq 1$), define:
- Added: $A_n = \{10n-9, 10n-8, \ldots, 10n\}$ (ten balls)
- Removed: $r_n = n$ (one ball)

The contents of the vase after step $n$:

$$V_n = \bigcup_{k=1}^{n} A_k \setminus \{1, 2, \ldots, n\} = \{n+1, n+2, \ldots, 10n\}$$

(Easily verified: $|V_n| = 9n$.)

The set-theoretic lim inf is:

$$L = \liminf_{n\to\infty} V_n = \bigcup_{n=1}^{\infty} \bigcap_{k=n}^{\infty} V_k$$

For any fixed $m \in \mathbb{N}$: ball $m \in V_k$ iff $k < m \leq 10k$, i.e.
$m/10 \leq k < m$. For $k \geq m$, ball $m$ has been removed ($r_m = m$) and
$m \notin V_k$. So $m \notin \bigcap_{k=n}^{\infty} V_k$ for any $n \geq m$.
Hence $m \notin L$.

Since $m$ was arbitrary, $L = \emptyset$.

The lim sup, by the same argument, is also $\emptyset$ (since every ball
eventually leaves $V_n$ forever). So $\lim_{n\to\infty} V_n = \emptyset$ in the
set-theoretic sense.

### The conditional convergence analogy

The paradox is analogous to the conditional convergence of infinite series. The
series $\sum (-1)^{n+1}/n = 1 - 1/2 + 1/3 - 1/4 + \cdots$ converges to $\ln 2$.
But by the Riemann rearrangement theorem, rearranging the terms can make it
converge to any real number or diverge. The sum depends on the *order* of the
terms, not just their values.

The Ross-Littlewood paradox is similar: the "limit" of the vase's contents depends
on *which* balls are removed at each step (the labelling), not just on the net
count added per step. The relabelling version makes this explicit.

## History

The puzzle in approximately this form was discussed by John Edensor Littlewood in
*A Mathematician's Miscellany* (1953) as an illustration of how infinity can
surprise. Sheldon Ross included a version in his probability textbook and the
puzzle became attached to both names.

The puzzle belongs to a family of supertask paradoxes that became a topic of
philosophical analysis in the 1950s and 1960s, alongside Thomson's Lamp (James
Thomson, 1954) and Zeno's paradoxes. The philosophical literature on supertasks
was substantially developed by Adolf Grünbaum, Paul Benacerraf, and José Bernadete.

## Why It Matters

**It separates cardinality from set identity.** The paradox shows that counting
(cardinality) and identity (which specific elements) are not interchangeable for
infinite sets. This is a fundamental feature of infinite set theory that has
no finite analogue.

**It shows that supertask outcomes depend on implementation details.** The two
versions of the problem — remove the lowest-numbered ball vs. the highest —
differ only in which ball is removed each step, yet produce opposite limiting
results. This is a strong demonstration that the abstract description of a
process (add 10, remove 1) does not determine its limit without further
specification.

**It is a vivid illustration of set-theoretic limit vs. cardinality limit.**
These notions agree for finite sets and diverge for infinite ones. The paradox
makes this divergence concrete and memorable.

## Modern Relevance

**Database transactions.** In systems that perform infinite sequences of
insertions and deletions, the "final state" depends on the order and identity
of operations, not just on the net count. The Ross-Littlewood paradox illustrates
why order of operations matters in infinite-state systems.

**Limit analysis in algorithm design.** Algorithms that iteratively update sets —
adding and removing elements — can exhibit paradoxical behaviour when the
iteration count is unbounded. The paradox is a reminder that the cardinality
of a set at each step does not determine the set's identity at the limit.
