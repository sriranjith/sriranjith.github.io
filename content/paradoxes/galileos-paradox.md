---
title: Galileo's Paradox
slug: galileos-paradox
alternateNames:
  - The paradox of the squares
  - Galileo's paradox of the infinite
summary: >-
  Most whole numbers are not perfect squares, so the squares must be rarer. Yet
  every number has exactly one square and every square has exactly one root, so
  there are precisely as many of one as of the other. Both claims are true.
era: early-modern
date: "1638"
year: 1638
origin: >-
  Stated by Galileo in the First Day of the Discorsi (1638), in an exchange
  between the characters Salviati and Simplicio about whether one infinite
  quantity can be larger than another.
people:
  - galileo-galilei
  - richard-dedekind
domains:
  - mathematics
  - philosophy
types:
  - infinity
nature: veridical
difficulty: intermediate
status: resolved
concepts:
  - One-to-one correspondence
  - Actual versus potential infinity
  - Proper subset
  - Cardinality
  - Natural density
  - Dedekind-infinite set
relationships:
  - kind: influenced-by
    to: zenos-dichotomy
    note: >-
      Zeno's runner made the infinite divisibility of a finite stretch feel
      dangerous. Galileo asked the matching question about an infinite
      collection, and got a worse answer.
  - kind: related
    to: achilles-and-the-tortoise
    note: >-
      Both press on whether a completed infinite totality is a legitimate object
      of thought, or only a process that never finishes.
  - kind: influences
    to: cantors-diagonal-argument
    note: >-
      Galileo's pairing is the tool Cantor kept. Once you accept that matching
      one-for-one is what "same size" means, the next question is whether some
      infinite sets refuse to be matched — and the diagonal argument answers it.
  - kind: predecessor-of
    to: hilberts-hotel
    note: >-
      The hotel is Galileo's paradox with a night manager. Shifting every guest
      one room along is exactly the pairing of the whole numbers with the whole
      numbers from two onwards.
references:
  - source: galileo-1638-discorsi
    role: primary-source
    locator: First Day
    note: The original exchange between Salviati and Simplicio.
  - source: sep-settheory-early
    role: encyclopedia
    note: Traces the route from Galileo's puzzle to Dedekind's definition and Cantor's cardinals.
  - source: moore-the-infinite
    role: book
    note: Places the paradox in the long argument over the actual infinite.
  - source: sep-infinity
    role: encyclopedia
furtherReading:
  - title: "Dialogues Concerning Two New Sciences (Crew and de Salvio translation, 1914)"
    url: https://www.gutenberg.org/ebooks/753
    note: The First Day contains the squares argument in Galileo's own dialogue form.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Write out the counting numbers: 1, 2, 3, 4, 5, 6, 7, 8, 9…

Now circle the ones that are perfect squares — a number times itself. You circle
1, then 4, then 9, then 16, then 25.

The circles thin out fast. Up to 100 there are ten of them. Up to 10,000 there
are a hundred. Up to a million, only a thousand. Keep going and the squares
become vanishingly rare: almost every number you meet is not a square. It seems
beyond argument that there are far more numbers than squares.

Now do something else. Take every counting number and give it its own square:

> 1 → 1  2 → 4  3 → 9  4 → 16  5 → 25  6 → 36…

Nothing is left over. Every number gets a square, no two numbers share one, and
every square on the list gets used exactly once by its root. Not one item on
either side is unpaired, and neither list ever runs out first.

So there are hugely more numbers than squares. And there are exactly as many
squares as numbers. Galileo noticed this in 1638, and it bothered him for the
rest of the book.

## Understand

The trouble is that there are two entirely reasonable ways to compare the sizes
of two collections, and for finite collections they always agree.

**The first is containment.** If everything in one bag is also in the other, and
the other bag has extra things besides, the other bag is bigger. Euclid built
this into his very first assumptions: the whole is greater than the part. The
squares sit inside the whole numbers with a great deal left over, so by this
test there are fewer squares.

**The second is pairing.** Line the two collections up and match them off, one
item against one item. If you can do that with nothing left over on either side,
they are the same size. This is how a shepherd who cannot count still knows
whether any sheep are missing: one pebble per sheep, in and out. By this test the
squares and the whole numbers are the same size, because squaring pairs them
perfectly.

For any finite collection the two tests give the same verdict, always. Take
things away from a finite bag and you cannot pair what remains against what you
started with — you will run short.

**Infinite collections break the tie.** They can be paired one-for-one with a
part of themselves. That is not a mistake in the reasoning. It is the thing that
makes them infinite.

Galileo's own response was to give up on the whole comparison. Through his
character Salviati he concluded that the words *equal*, *greater* and *less* do
not apply to infinite quantities at all — that infinity is simply not the kind of
thing that has a size. It was a careful and defensible position, and it held for
two and a half centuries.

The modern answer is bolder. Instead of abandoning size, mathematics abandoned
the other rule. **Pairing is what "same size" means.** The whole is greater than
the part is downgraded from a self-evident truth to a fact about finite
collections only. Richard Dedekind, in 1888, went one step further and turned
the paradox into the definition: a collection is *infinite* exactly when it can
be matched one-for-one with a part of itself.

That is the whole resolution. Nothing was proved false. One of two conflicting
intuitions was demoted, and the one that survived turned out to be enormously
productive — it is the foundation of everything later mathematics says about
infinity.

### The intuition that was demoted is still worth something

The feeling that squares are rare is not nonsense, and mathematics did not throw
it away. It has its own precise name: **density**. Among the first million whole
numbers, one in a thousand is a square, and that fraction keeps shrinking towards
zero. The even numbers, by contrast, hold a steady one half.

So the squares and the evens are the same *size* as the whole numbers, and have
completely different *densities*. Both of your original intuitions were tracking
something real. They were just tracking two different things, and the single word
"more" was doing the work of both.

## Examples

**The pairing, written out.** Every row is a perfect match, and the table never
runs out of rows.

| Counting number | Its square | Square | Its root |
| --- | --- | --- | --- |
| 1 | 1 | 1 | 1 |
| 2 | 4 | 4 | 2 |
| 3 | 9 | 9 | 3 |
| 10 | 100 | 100 | 10 |
| 1,000 | 1,000,000 | 1,000,000 | 1,000 |

Read left to right, no square is missed. Read right to left, no number is missed.

**How thin the squares get.**

| Up to | How many squares | Share |
| --- | --- | --- |
| 100 | 10 | 10% |
| 10,000 | 100 | 1% |
| 1,000,000 | 1,000 | 0.1% |
| 1,000,000,000,000 | 1,000,000 | 0.0001% |

The share heads to zero. The pairing is unaffected — it does not care how far
apart the partners are, only that each has exactly one.

**Other parts that are the same size as the whole.**

- **The even numbers.** Pair $n$ with $2n$. Half the whole numbers, same size.
- **The multiples of a million.** Same trick, same size.
- **The primes.** They thin out too, and there are still exactly as many as there
  are whole numbers, because they can be listed in order — first prime, second
  prime, third prime — and that listing is the pairing.
- **The whole numbers and the integers.** Zero, then 1, then −1, then 2, then −2.
  Everything gets a place; the two sets are the same size.

**Where it does not work.** This is the cliff edge Galileo never reached. The
points on a line cannot be paired off against the counting numbers, no matter how
cleverly you arrange them. That is Cantor's discovery of 1874, sharpened in 1891,
and it means "infinite" is not one size after all. Galileo's paradox opens the
door; it does not show you what is on the other side.

## Explore

**Was Galileo wrong?** Not exactly. He was reasoning correctly from a premise
that everyone shared: that "greater" and "equal" must obey Euclid's common
notion. Given that premise, the only consistent conclusion is that infinite
quantities are not comparable, which is what he said. What Cantor eventually did
was reject the premise, not repair Galileo's logic.

**The medieval anticipation.** Galileo was not the first to notice the
phenomenon. Proclus, in the fifth century, observed that a diameter bisects a
circle, so there must be twice as many semicircles as diameters — while every
diameter yields exactly two semicircles and every semicircle has exactly one
diameter. The mathematician Thābit ibn Qurra in the ninth century is credited by
modern historians with accepting one-to-one correspondence between an infinite
set and a proper part of it. Fourteenth-century scholastics including Gregory of
Rimini discussed the same structure in theological settings. What Galileo added
was a clean arithmetical example and a published, unembarrassed statement of the
conflict.

**Bolzano's near miss.** Bernard Bolzano's *Paradoxien des Unendlichen*,
published posthumously in 1851, examined exactly this family of examples and
introduced much of the vocabulary. But Bolzano refused the final step. He saw the
one-to-one correspondence between infinite sets and their parts and concluded
that correspondence therefore *cannot* be the criterion of equal size. He kept
Euclid and gave up pairing. Cantor, twenty years later, made the opposite choice,
and that single decision is the difference between a curiosity and a theory.

**What was actually given up.** It is worth being precise about the cost.
Cantor's move does not make Euclid's common notion false; it restricts it. For
finite sets, proper containment still implies strictly smaller. For infinite
sets, containment implies "no larger" but not "smaller". Everything else about
counting survives. This is a small price, and it was still fought over
ferociously — Leopold Kronecker, Cantor's former teacher, regarded the whole
enterprise as illegitimate and worked to block its publication and its author's
career.

**Is any of it about the real world?** Galileo's paradox concerns abstract
collections. Whether an actually infinite collection of *things* can exist is a
separate question, argued from Aristotle onwards and still argued today. Those
who deny it often point to precisely this kind of result as evidence that an
actual infinity of objects would behave absurdly. Those who accept it reply that
"absurd" here only means "unlike the finite", which was never in dispute. The
mathematics settles what infinite sets are like; it does not settle whether any
exist outside mathematics.

## History

**Antiquity and the Middle Ages.** Aristotle's distinction between the
*potential* infinite (a process that never ends) and the *actual* infinite (a
completed endless totality) framed the whole debate, and his rejection of the
actual infinite was the orthodox position for two thousand years. Proclus,
Thābit ibn Qurra, Robert Grosseteste and Gregory of Rimini each noticed pieces of
the correspondence phenomenon, generally as a difficulty rather than a tool.

**1638.** Galileo published *Discorsi e dimostrazioni matematiche, intorno à due
nuove scienze* in Leiden, the manuscript having been carried out of Italy while
he was under house arrest after the 1633 trial. In the First Day, Salviati leads
Simplicio through the argument: there are more numbers than squares, since most
numbers are not squares; and there are as many squares as numbers, since every
number has one root and every root one square. Salviati's conclusion is that
"the attributes 'equal', 'greater', and 'less' are not applicable to infinite,
but only to finite, quantities."

**1851.** Bolzano's *Paradoxien des Unendlichen* appeared three years after his
death, cataloguing such correspondences in detail and declining to draw Cantor's
conclusion.

**1872–1874.** Cantor, in correspondence with Dedekind, took the pairing
criterion seriously as a definition, proved that the algebraic numbers can be
listed, and proved that the reals cannot.

**1888.** Dedekind published *Was sind und was sollen die Zahlen?*, defining an
infinite set as one similar to a proper part of itself. Galileo's embarrassment
became a definition — arguably the cleanest example in mathematics of a paradox
promoted to a foundation.

## Why It Matters

This is the paradox that decided what "how many" would mean.

Before it was resolved, size was a single notion tied to containment. After, size
became *cardinality*: a property determined by matching, that behaves as expected
for finite collections and quite differently for infinite ones. Every later
statement about infinity — that the rationals are countable, that the reals are
not, that there is no largest infinity — is stated in that language, and could
not have been stated in Euclid's.

Three concrete consequences:

**A usable definition of "infinite".** Dedekind's criterion is intrinsic. It does
not appeal to counting or to any prior notion of number. Given a set and a
function, you can check it.

**Countability as a working tool.** The observation that a proper part can be
listed off against the whole numbers is what makes it routine to enumerate the
rationals, the algebraic numbers, the finite strings over an alphabet, and the
computer programs. Each of those enumerations is Galileo's pairing applied to a
harder set.

**Permission to have more than one infinity.** Galileo's response — that infinite
quantities have no sizes — closes the subject. Cantor's response opens it. The
entire transfinite hierarchy exists because one of the two available reactions to
this puzzle was chosen over the other.

## Modern Relevance

**Computer science runs on the pairing.** The set of all programs is infinite,
and it can be listed: order them by length, then alphabetically. Gödel numbering
is the same manoeuvre for logical formulas. Both work because an infinite set
being "sparse" inside a bigger one is no obstacle to enumerating it.

That enumeration then does destructive work. The programs are countable; the
functions from whole numbers to whole numbers are not. So there are functions no
program computes — most of them, in fact. That argument is only two steps long,
and its first step is Galileo's.

**Data structures.** Lazy infinite lists in functional languages, iterators that
never terminate, and generators that dovetail several infinite streams together
are all implementations of "an infinite collection can be re-indexed without
loss".

**Hashing and re-indexing.** Every time a program maps an unbounded key space
into an index and back without collisions, it is relying on the fact that a
sparse infinite set and a dense one can be put in exact correspondence.

## Deep Dive

Let $\mathbb{N} = \{1, 2, 3, \dots\}$ and let $S = \{n^2 : n \in \mathbb{N}\}$ be
the perfect squares.

**The bijection.** Define $f: \mathbb{N} \to S$ by $f(n) = n^2$. It is injective,
since $m^2 = n^2$ with $m, n > 0$ forces $m = n$; and surjective onto $S$ by the
definition of $S$. Hence

$$|\mathbb{N}| = |S| = \aleph_0$$

while $S \subsetneq \mathbb{N}$ properly, since $2 \notin S$.

**The other intuition, made precise.** The counting function for $S$ is
$$|S \cap [1, N]| = \lfloor \sqrt{N} \rfloor$$
so the natural density of the squares is

$$d(S) = \lim_{N \to \infty} \frac{\lfloor \sqrt{N}\rfloor}{N} = 0$$

The even numbers $E$ satisfy $|E \cap [1,N]| = \lfloor N/2 \rfloor$, giving
$d(E) = 1/2$, and by the prime number theorem the primes $P$ satisfy
$|P \cap [1,N]| \sim N/\ln N$, giving $d(P) = 0$. All three sets have cardinality
$\aleph_0$. Cardinality and density are independent invariants; the paradox is
the collision of two questions sharing the word "more".

**Dedekind's definition.** A set $A$ is *Dedekind-infinite* if there exists an
injection $f: A \to A$ that is not surjective — equivalently, if $A$ is in
bijection with a proper subset of itself. Galileo's example shows $\mathbb{N}$ is
Dedekind-infinite via $n \mapsto n^2$, or more simply $n \mapsto n+1$.

Every Dedekind-infinite set is infinite. The converse — that every infinite set
is Dedekind-infinite — requires a weak form of the axiom of choice (countable
choice suffices) and is *not* provable in ZF alone. In models of ZF without
choice there can exist infinite sets that admit no such injection. So the
definition Galileo's paradox suggests is slightly stronger than plain infinitude,
a subtlety invisible from 1638.

**The general principle.** For any infinite cardinal $\kappa$ and any injection
$g$ from a set into itself, the same absorption holds. In cardinal arithmetic
this appears as

$$\aleph_0 + 1 = \aleph_0, \qquad \aleph_0 + \aleph_0 = \aleph_0, \qquad
\aleph_0 \cdot \aleph_0 = \aleph_0$$

and more generally $\kappa + \lambda = \kappa \cdot \lambda = \max(\kappa,
\lambda)$ for infinite cardinals, a theorem which itself depends on the axiom of
choice. Note that subtraction and division are simply not defined: from
$\aleph_0 + 1 = \aleph_0 + 0$ you may not cancel.

**The limit of the method.** Squaring is a bijection $\mathbb{N} \to S$. No
function $\mathbb{N} \to \mathbb{R}$ is surjective, which is Cantor's theorem. The
proof of that requires a genuinely new idea — the diagonal — and it is the point
at which Galileo's puzzle stops being a curiosity about sparse subsets and
becomes a theory of sizes.
