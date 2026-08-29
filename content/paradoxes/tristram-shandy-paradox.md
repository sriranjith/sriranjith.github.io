---
title: The Tristram Shandy Paradox
slug: tristram-shandy-paradox
alternateNames:
  - Tristram Shandy's Autobiography
summary: >-
  Tristram Shandy takes two years to write about each day of his life and falls
  ever further behind. But Bertrand Russell showed that given infinite time he
  would write about every day — because days and years are both countably
  infinite and can be matched one-to-one, however wide the gap grows.
hook: >-
  A man writes his autobiography but keeps falling behind. If he had infinite
  time, would he ever catch up?
era: twentieth-century
date: "1759 (novel), 1903 (paradox formulated)"
year: 1903
origin: >-
  The character is from Laurence Sterne's novel The Life and Opinions of Tristram
  Shandy, Gentleman (1759-1767). The mathematical paradox was drawn from the
  novel by Bertrand Russell in The Principles of Mathematics (1903), as an
  illustration of the counterintuitive arithmetic of infinite sets.
people:
  - laurence-sterne
  - bertrand-russell
domains:
  - mathematics
  - philosophy
types:
  - infinity
  - time
nature: counterintuitive-result
difficulty: intermediate
status: explained
renown: specialist
concepts:
  - Countable infinity
  - Bijection
  - Omega sequence
  - Hilbert's Hotel
  - One-to-one correspondence
relationships:
  - kind: related
    to: hilberts-hotel
    note: Both paradoxes rest on the same arithmetic of countably infinite sets —
      the matching of an infinite set to a proper subset of itself.
  - kind: related
    to: galileos-paradox
    note: Galileo noticed that the square numbers can be matched one-to-one with
      all natural numbers. Tristram Shandy is the same insight applied to days
      and years.
  - kind: related
    to: cantors-diagonal-argument
    note: Cantor's work on infinite cardinalities is the mathematical framework
      that makes Russell's argument rigorous.
references:
  - source: russell-1903-principles
    role: primary-source
    note: Section 340, where Russell introduces the Tristram Shandy argument to
      illustrate the arithmetic of the infinite.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Tristram Shandy is writing his autobiography. He is thorough — very thorough.
To write about one day of his life, he needs two years. The first day takes him
two years to write about. The second day takes another two years. He begins with
his birth and works forward, one day at a time.

At this rate he will never finish. For every day he records, 730 more days have
passed while he wrote. He falls further and further behind. If he writes forever,
he will still only have covered the first small fraction of his life.

Or will he?

Bertrand Russell considered this question in 1903 and reached a startling
conclusion: if Tristram Shandy had an infinite life and infinite time to write,
he would *eventually write about every day of his life*.

Not immediately. Not soon. But every single day would, eventually, be covered.

The autobiography would be complete.

## Understand

The argument rests on Cantor's insight about infinite sets: two sets have the
same size (cardinality) if and only if their elements can be matched one-to-one.

**The natural numbers:** 1, 2, 3, 4, 5, …

**The odd numbers:** 1, 3, 5, 7, 9, …

These sets have the same cardinality, even though the second seems to contain
only "half" the elements. The matching is: $n \leftrightarrow 2n - 1$.

Now consider Tristram's project. He writes about day $n$ of his life during
years $2n - 1$ and $2n$. The matching:

| Day of life | Written during years |
|---|---|
| Day 1 | Year 1 and Year 2 |
| Day 2 | Year 3 and Year 4 |
| Day 3 | Year 5 and Year 6 |
| Day $n$ | Year $2n-1$ and Year $2n$ |

For any day $n$ — no matter how large — Tristram reaches it at year $2n - 1$.
Every day has a definite year by which it will be written. No day is left
unwritten.

This is a bijection between the natural numbers (days) and the even natural
numbers (pairs of years). Both are countably infinite. The autobiography is
"complete" in the sense that no day is omitted.

### Why it feels wrong

Our intuition says Tristram falls further and further behind. And he does — at
every finite stage. After $N$ years he has written about $N/2$ days, while
$N$ days have passed. The gap grows without bound.

But the question is not "does the gap grow?" — it plainly does. The question is
"is every day eventually written about?" And the answer to that question is yes,
because for any specific day $d$, you can name the year (year $2d - 1$) by which
it will be covered.

The paradox exploits the difference between:
- "At every finite stage, infinitely many days are unwritten" (true)
- "Some day is never written about" (false)

These seem like they should imply each other. For finite processes, they do.
For infinite ones, they do not.

## Examples

**The squares are as numerous as the natural numbers.** Galileo noticed — and
was troubled — that there are as many perfect squares as there are natural
numbers: $1 \to 1$, $2 \to 4$, $3 \to 9$, $4 \to 16$, … yet the squares are a
proper subset of the naturals. Most naturals are not squares. How can part equal
the whole? Cantor answered: for infinite sets, "proper subset" does not imply
"smaller." The squares and the naturals have the same cardinality.

Tristram Shandy's autobiography is the same argument in narrative form: the
days-lived are a subset of the days (years are longer than days), yet they match
one-to-one with all of Tristram's days.

**Hilbert's Hotel.** An infinite hotel is full. A new guest arrives. The manager
moves guest from room 1 to room 2, room 2 to room 3, and so on. Room 1 is now
free for the new guest. The hotel accommodated one more guest without building
a new room. Tristram is doing the same: accommodating infinitely many days in
the infinitely many pairs of years, with no day left without a year-pair.

**The never-ending story.** A storyteller promises to tell you a story that
mentions every natural number exactly once, never repeating. She says: "Once
there was a number 1. And a number 2. And a number 3. …" She will never finish
in finite time. But for any specific number $n$, she mentions it at the $n$-th
utterance. Every number is mentioned. The story is "complete" in the Cantorian
sense.

## Explore

**Does "complete" mean what we think it means?** Russell's argument shows that
Tristram's autobiography would be *complete in the sense of omitting no day*.
This is a set-theoretic sense of completeness: every element of one set is
matched to an element of another. It does not mean the autobiography has a final
page, or a concluding chapter, or that the last day of Tristram's life is
written about at some particular year. The autobiography grows without bound and
has no endpoint.

**The finishing paradox.** If Tristram lives forever, when does he write about
his last day? He does not have one. If he has a last day, he will not reach it
in finite time. The autobiography is complete in the sense that no finite day is
omitted, but it has no completion in the sense of a terminal event.

**What Russell was really illustrating.** Russell used the story to make a
pedagogical point about infinite cardinals: that a proper subset of an infinite
set can have the same cardinality as the whole set. This is Dedekind's definition
of an infinite set — a set is infinite if and only if it can be put in bijection
with a proper subset of itself. Tristram's project is a vivid illustration of
Dedekind-infinity.

## Deep Dive

### The formal argument

Let $D = \{1, 2, 3, \ldots\}$ be the set of days of Tristram's life.
Let $Y = \{1, 2, 3, \ldots\}$ be the set of years of his life.

Define the writing schedule: day $d$ is written about during years $2d - 1$ and
$2d$.

Define $f: D \to Y$ by $f(d) = 2d - 1$ (the first year in which day $d$ is
written).

$f$ is an injection: if $f(d_1) = f(d_2)$ then $2d_1 - 1 = 2d_2 - 1$ so
$d_1 = d_2$.

For every $d \in D$, $f(d) \in Y$ is well-defined. So every day has an assigned
year in which it begins to be written.

For any $d$, $f(d) = 2d - 1 < \infty$. So every day is reached in finite time.

Therefore: every day of Tristram's life is written about in finite years, and
the autobiography is complete in the set-theoretic sense.

Note that $f$ is not a bijection onto $Y$: the even years $2, 4, 6, \ldots$ are
the second years of each day's writing, and are in the range of $g: D \to Y$
where $g(d) = 2d$. Together, $f$ and $g$ cover all of $Y$: the schedule uses
every year exactly once.

### Dedekind-infinite sets

Richard Dedekind defined an infinite set as one that is equinumerous with a
proper subset of itself. The natural numbers $\mathbb{N}$ are infinite by this
definition: the map $n \mapsto n + 1$ is a bijection from $\mathbb{N}$ to
$\{1, 2, 3, \ldots\} = \mathbb{N} \setminus \{0\}$ (or from $\{1, 2, \ldots\}$
to $\{2, 3, \ldots\}$).

Tristram's project maps days (a copy of $\mathbb{N}$) injectively into years
(another copy of $\mathbb{N}$) with all of years covered. This is a bijection
between $\mathbb{N}$ and itself — a non-startling fact — but the narrative makes
the non-intuitiveness of Dedekind-infinity vivid.

## History

Laurence Sterne published the first volumes of *The Life and Opinions of Tristram
Shandy, Gentleman* in 1759. The joke of the novel is that Tristram cannot tell
his story straight: digressions multiply faster than the narrative advances. By
the time Sterne wrote volume seven, Tristram had still not been born. The novel
is a comic meditation on the impossibility of autobiography and the digressive
nature of consciousness.

Bertrand Russell, in *The Principles of Mathematics* (1903), found in the novel's
central conceit a perfect illustration of Cantor's arithmetic of infinity.
Russell was making the serious mathematical point that an infinite set can be
matched to a proper subset — a point Cantor had established but that remained
counterintuitive. The Tristram Shandy story made it memorable.

The paradox is now a standard teaching example in the philosophy of mathematics
and set theory.

## Why It Matters

**It makes the arithmetic of the infinite concrete and memorable.** The abstract
claim that countably infinite sets can be matched to proper subsets of themselves
is hard to internalise. Tristram Shandy makes it vivid: a man falls further
behind every year, yet eventually writes about every day.

**It separates two senses of "completion."** A process can be "complete" in
the sense that no item is omitted, without being "complete" in the sense of
reaching a terminal event. This distinction matters in mathematics (convergence
vs. terminability), in computer science (termination vs. coverage), and in
philosophy (what we mean when we say a task is done).

**It is Russell's most accessible illustration of set theory.** At a time when
Cantor's ideas were still controversial and confusing, Russell's use of Tristram
Shandy provided a narrative handle on concepts that were otherwise entirely
abstract.

## Modern Relevance

**Infinite computation.** A computation that runs forever but eventually produces
every correct output — a "fair" computation — is the Tristram Shandy model in
computing. Fairness conditions in concurrent systems are requirements that every
enabled action is eventually taken, even if the process never terminates.

**Infinite databases.** Database queries over potentially infinite streams of
data face analogous questions: can a query "eventually" return every matching
record, even if the stream never ends? The distinction between "eventually
covered" and "terminably covered" is practically important in streaming systems.
