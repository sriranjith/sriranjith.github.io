---
title: Cantor's Diagonal Argument
slug: cantors-diagonal-argument
alternateNames:
  - The diagonal method
  - Cantor's diagonalisation
  - Diagonalslutsatz
summary: >-
  Hand over any list claiming to contain every infinite sequence of digits.
  Reading down the diagonal and changing each entry produces a sequence that is
  not on it. No list can be complete, so some infinities are bigger than others.
era: nineteenth-century
date: "1891"
year: 1891
origin: >-
  Published by Georg Cantor in 1891 in the first volume of the Jahresbericht der
  Deutschen Mathematiker-Vereinigung, as a simpler replacement for his 1874
  proof that the real numbers cannot be enumerated.
people:
  - georg-cantor
  - david-hilbert
domains:
  - mathematics
  - logic
types:
  - infinity
  - self-reference
  - knowledge
nature: counterintuitive-result
difficulty: advanced
status: resolved
concepts:
  - Countability
  - Uncountability
  - Bijection
  - Power set
  - Cantor's theorem
  - Diagonalisation
  - Continuum hypothesis
relationships:
  - kind: influences
    to: russells-paradox
    note: >-
      Russell found his paradox in 1901 while probing Cantor's proof that no set
      is the same size as its power set. The set of all sets that do not contain
      themselves is the diagonal set of that proof, applied to the universe.
  - kind: influences
    to: godels-incompleteness
    note: >-
      Gödel's construction of a sentence asserting its own unprovability is the
      diagonal argument carried out inside arithmetic, with provability in place
      of membership.
  - kind: influences
    to: halting-problem
    note: >-
      Turing's 1936 proof assumes a machine deciding halting, then builds one
      that disagrees with the decision made about itself — the diagonal entry,
      flipped.
  - kind: influences
    to: hilberts-hotel
    note: >-
      The hotel can absorb any countable crowd. The one coach it must turn away
      is the diagonal set, which is why the story ends where Cantor's theorem
      begins.
  - kind: related
    to: berrys-paradox
    note: >-
      Both exploit the gap between a countable stock of descriptions and the
      uncountable, or merely larger, supply of things to be described.
references:
  - source: cantor-1891-diagonal
    role: primary-source
    locator: "pp. 75–78"
    note: The four-page paper containing the diagonal method and the power set theorem.
  - source: cantor-1874-uncountability
    role: paper
    note: The earlier and quite different proof, by nested intervals rather than diagonalisation.
  - source: dauben-georg-cantor
    role: book
    note: The standard biography; definitive on the relationship between the 1874 and 1891 proofs.
  - source: sep-settheory-early
    role: encyclopedia
  - source: sep-set-theory
    role: encyclopedia
furtherReading:
  - title: "Wikipedia — Cantor's diagonal argument"
    url: https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument
    note: Includes the full statement, the real-number version and the standard objections.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Imagine a library where every book is infinitely long and every page holds a
single letter: either **A** or **B**. A book is just an endless string —
ABBABAAB… — and the library claims to hold every such string that could
possibly exist.

The librarian is proud of this. She has numbered the books: Book 1, Book 2,
Book 3, and so on forever. Every string, she says, is in there somewhere.

Here is how to prove her wrong, using nothing but a pencil.

Open Book 1 and look at its **first** letter. Write down the opposite one. Open
Book 2 and look at its **second** letter; write down the opposite. Book 3, third
letter, opposite. Keep going.

You now have a book of your own. And it cannot be Book 1, because its first
letter is different. It cannot be Book 2, because its second letter is
different. It cannot be Book 47, because you deliberately made letter 47 wrong.

It is not anywhere on her list. And you could have done this to *any* list she
gave you, including one that fixed this omission.

The library that holds every infinite string cannot be numbered at all.

## Understand

Two collections are the same size when their members can be paired off exactly —
one from each side, none left over. That is the definition mathematics settled
on, and it works fine for infinite collections. It says there are as many even
numbers as whole numbers, and as many fractions as whole numbers.

A collection that can be paired off against the counting numbers is called
**countable**. Countable means listable: there is a first, a second, a third, and
every member turns up eventually.

Before 1874, it was reasonable to assume everything infinite was countable. If
you can list the fractions — and you can, cleverly — surely you can list
anything. Cantor showed you cannot.

**The argument in one paragraph.** Suppose someone claims a complete list of all
the infinite sequences. Build a new sequence by disagreeing with the first
sequence in its first place, the second in its second place, the third in its
third place, and so on forever. The result is a legitimate infinite sequence.
It differs from every sequence on the list, in at least one place each. So the
list was not complete. Since the argument works against any list whatsoever, no
complete list exists.

Note carefully what has and has not been shown. Nothing has gone wrong; there is
no contradiction here. What has been shown is that a particular thing — a
complete listing — cannot exist. The collection of infinite sequences is
**uncountable**: infinite, and strictly bigger than the counting numbers.

### Why this is more than a curiosity about sequences

The real numbers — every point on a line, every possible decimal expansion — are
in the same situation. Write each as an endless string of digits and the same
diagonal trick applies. So the points on a line cannot be listed.

Then Cantor generalised it, in the same 1891 paper, and this is the part that
mattered most. Take **any** collection at all, finite or infinite. Consider the
collection of all its *sub*-collections. The second is always strictly bigger
than the first. Always. No exceptions.

That has an immediate consequence: **there is no biggest infinity.** Given any
infinite set, the set of its subsets is bigger, and the set of *that* set's
subsets is bigger again, forever. Infinity is not a size. It is an endless ladder
of sizes.

### The one thing to be careful about

The diagonal argument does not say that any particular list is missing something
you can point to in advance. It says that whatever list you produce, the
*procedure* produces a missing item from it. The construction is completely
mechanical: give the argument a list and it hands back the omission. This is why
it survives every attempt to patch the list — adding the missing sequence to the
front creates a new list, and the procedure simply runs again.

## Examples

**A list, and its diagonal.** Suppose someone offers this as a complete
enumeration of infinite binary sequences. The diagonal entries are marked.

| | 1st | 2nd | 3rd | 4th | 5th | … |
| --- | --- | --- | --- | --- | --- | --- |
| $s_1$ | **0** | 1 | 1 | 0 | 1 | … |
| $s_2$ | 1 | **1** | 0 | 0 | 1 | … |
| $s_3$ | 0 | 0 | **0** | 1 | 0 | … |
| $s_4$ | 1 | 1 | 1 | **1** | 0 | … |
| $s_5$ | 0 | 1 | 0 | 1 | **0** | … |

The diagonal reads 0, 1, 0, 1, 0. Flip every entry: **1, 0, 1, 0, 1, …**

Check it against each row. It differs from $s_1$ in place 1, from $s_2$ in place
2, from $s_3$ in place 3, from $s_4$ in place 4, from $s_5$ in place 5. It is not
row $n$ for any $n$, because place $n$ was constructed to disagree.

**Why the rationals do not escape.** It is worth seeing a case where listing
*succeeds*, so the failure is not mysterious. The positive fractions can be
arranged in a grid with numerator across and denominator down, then read off
along diagonals: $1/1$, $2/1$, $1/2$, $3/1$, $2/2$, $1/3$, and so on. Every
fraction appears. So the rationals are countable, densely packed as they are.
Countability is not about being spread out. It is about being reachable by a
list.

**Where the digit version needs care.** Applied directly to decimal expansions,
the argument has a small hole: $0.4999\ldots$ and $0.5000\ldots$ are the same
real number, so a diagonal sequence that differs digit-wise might still name a
number already on the list. The standard repair is to avoid 0 and 9 entirely —
replace each diagonal digit by, say, 5 unless it is already 5, in which case use
4. Cantor sidestepped the issue completely by stating the argument for sequences
of two abstract symbols, $m$ and $w$, where no such collisions exist.

**The power set, small.** With $A = \{1, 2, 3\}$ there are $2^3 = 8$ subsets, and
8 > 3. Cantor's theorem says the inequality survives passage to the infinite,
where counting arguments do not.

## Explore

**Was the conclusion accepted?** Not quietly. Leopold Kronecker, Cantor's former
teacher at Berlin and an editor of Crelle's journal, held that mathematics should
concern itself only with objects constructible from the integers in finitely many
steps. On that view the completed set of all real numbers is not a legitimate
object, so a theorem about its size proves nothing. Kronecker's opposition was
personal as well as philosophical, and it damaged Cantor's career and, by many
accounts, his health.

**Is the argument constructive?** Surprisingly, yes — more so than its reputation
suggests. The proof does not merely show that a complete list is impossible; it
takes a list as input and *computes* an element not on it, digit by digit.
Constructivists therefore generally accept the diagonal argument itself. What
they read it as saying is different: not "the reals form an uncountable
completed totality" but "no rule enumerates all the reals". Errett Bishop's
constructive analysis keeps the theorem and drops the transfinite metaphysics.

**Wittgenstein's dissent.** In *Remarks on the Foundations of Mathematics*,
Ludwig Wittgenstein resisted the whole picture, objecting less to the derivation
than to the gloss placed on it — the idea that we have discovered a realm of
larger infinities, rather than adopted a new way of speaking. The mainstream
mathematical judgement is that Wittgenstein misread the mathematics; a minority
of philosophers think he was pressing a real point about what the theorem
licenses us to say. Either way, no one disputes the derivation.

**Skolem's paradox.** The theory of sets can be written down in first-order
logic, and the Löwenheim–Skolem theorem says any such theory with a model has a
*countable* model. So there is a countable model of set theory — inside which
Cantor's theorem is true and some set is "uncountable". The resolution, which
Thoralf Skolem gave in 1922, is that uncountability is relative to a model: the
model contains no bijection between its "reals" and its integers, though one
exists outside it. This is not a flaw in the diagonal argument. It is a lesson
about what first-order axioms can pin down.

**How much bigger is the continuum?** Cantor proved the reals are bigger than the
integers. He conjectured there is nothing strictly in between — the continuum
hypothesis — and failed to prove it for the rest of his life. Kurt Gödel showed
in 1938 that it cannot be disproved from the standard axioms, and Paul Cohen
showed in 1963 that it cannot be proved from them either. It is independent. The
diagonal argument tells you the ladder has more than one rung; it does not tell
you which rung the continuum sits on, and the axioms do not either.

## History

**December 1873.** Cantor wrote to Richard Dedekind that he had proved the real
numbers could not be put in one-to-one correspondence with the positive integers.
The correspondence between the two men over the preceding weeks records the
problem being posed, resisted, and cracked.

**1874.** The result appeared in Crelle's *Journal für die reine und angewandte
Mathematik* under the title "Über eine Eigenschaft des Inbegriffes aller reellen
algebraischen Zahlen" — on a property of the collection of all real algebraic
numbers. **The proof in that paper is not the diagonal argument.** It works by
nested intervals: given a supposed enumeration of the reals, Cantor extracts a
shrinking sequence of closed intervals, each avoiding one more term of the
enumeration, and appeals to completeness to produce a point inside all of them
and therefore outside the list. The title advertises the tamer half of the paper
— the countability of the algebraic numbers — which historians, following Dauben,
read as a deliberate softening given Kronecker's position on the editorial board.
The 1874 argument also yields a bonus the diagonal does not: the transcendental
numbers exist, and in abundance, without exhibiting a single one.

**1891.** Cantor published "Über eine elementare Frage der
Mannigfaltigkeitslehre" in the opening volume of the *Jahresbericht der Deutschen
Mathematiker-Vereinigung*, pages 75–78. He had founded the DMV the year before
and was its first president. The paper is four pages long. It states the diagonal
method for infinite sequences drawn from the two symbols $m$ and $w$, deduces
that the set of such sequences is uncountable, and then — the substantial new
result — proves that no set can be mapped onto the collection of its own
subsets. The word Cantor used for the method, *Diagonalverfahren*, is the one
still in use.

**Why replace a working proof?** The 1874 argument needs the completeness of the
reals and a limit. The 1891 argument needs neither. It is combinatorial,
elementary, and — decisively — it generalises to arbitrary sets. That
generalisation is what made it the engine of twentieth-century logic.

**1901.** Bertrand Russell, examining Cantor's power set theorem, asked what the
diagonal set becomes when applied to the set of all sets. The answer was the
contradiction that ended naive set theory.

**1931 and 1936.** Gödel's incompleteness theorems and Turing's proof of the
unsolvability of the halting problem both proceed by diagonalisation. So do
Tarski's undefinability of truth (1933), Rice's theorem (1951), and the time and
space hierarchy theorems of complexity theory.

## Why It Matters

The diagonal argument is the most reused proof technique in the foundations of
mathematics and computer science. Its structure is always the same: assume a
system can list, decide, or define all the objects of some kind; construct an
object that disagrees with the system's own verdict about itself; conclude that
the system was not complete.

Named consequences, all diagonal:

- **Cantor's theorem.** No set has the same size as its power set. There is no
  largest infinity, and no set of all sets.
- **Russell's paradox.** The diagonal set of the universal set. It forced the
  replacement of naive comprehension by the axioms of ZFC.
- **Gödel's first incompleteness theorem.** Any consistent, sufficiently strong,
  effectively axiomatised theory has a true sentence it cannot prove.
- **Turing's halting theorem.** No program decides, for all programs and inputs,
  whether execution terminates.
- **Tarski's undefinability theorem.** Arithmetical truth is not definable in
  arithmetic.
- **The hierarchy theorems.** Strictly more can be computed with strictly more
  time, or strictly more space.

It also settled a concrete question in analysis. Almost all real numbers are
transcendental — not the root of any polynomial with integer coefficients —
because the algebraic numbers are countable and the reals are not. Liouville had
exhibited one transcendental number in 1844 by hard construction. Cantor showed
that the transcendentals overwhelmingly outnumber the rest, without naming any.
That was many mathematicians' first encounter with a proof that establishes
abundance while producing no example, and the discomfort it caused is the origin
of a long argument about non-constructive methods.

## Modern Relevance

**Computability.** There are countably many programs — each is a finite string
over a finite alphabet, so they can be listed — and uncountably many functions
from integers to integers. Therefore almost every function is uncomputable. That
two-line argument, whose second step is Cantor's, bounds what software can ever
do.

**Algorithmic randomness.** The definition of a random infinite sequence, due to
Martin-Löf, relies on the fact that the "special" sequences form a measure-zero,
effectively describable family inside an uncountable space.

**Complexity theory.** Diagonalisation separates complexity classes: the time
hierarchy theorem builds a language that disagrees with every machine running in
some smaller time bound. It is also known where diagonalisation *stops* working —
the Baker–Gill–Solovay result of 1975 shows that any proof relativising to
oracles cannot settle P versus NP, which is precisely why the classical technique
has not resolved it.

**Type theory and programming languages.** The absence of a type of all types,
and the impossibility of a total language that can express its own interpreter,
are diagonal facts. Lawvere's fixed-point theorem of 1969 gives the categorical
form that unifies Cantor, Russell, Gödel, Turing and Tarski as one statement.

**Cryptography and formal verification.** Reasoning about what an adversary or a
verifier cannot do, given that it must be a finite program facing an unbounded
space of possibilities, is diagonal reasoning in applied dress.

## Deep Dive

### The construction

Let $\{0,1\}^{\mathbb{N}}$ denote the set of all functions $s : \mathbb{N} \to
\{0,1\}$, that is, all infinite binary sequences. Write $s(n)$ for the $n$-th
term.

**Theorem.** No function $F : \mathbb{N} \to \{0,1\}^{\mathbb{N}}$ is surjective.

*Proof.* Let $F$ be any such function and write $s_n = F(n)$. Define
$d : \mathbb{N} \to \{0,1\}$ by

$$d(n) = 1 - s_n(n)$$

Then $d \in \{0,1\}^{\mathbb{N}}$. Fix any $n$. By construction $d(n) \neq
s_n(n)$, so $d \neq s_n$. Since $n$ was arbitrary, $d \notin \operatorname{ran}
F$. Hence $F$ is not surjective. $\blacksquare$

The only thing used is that $\{0,1\}$ has at least two elements, so a value can
always be changed. Nothing about order, limits or completeness enters. Note also
that the proof is uniform in $F$: it is a procedure taking $F$ to a witness $d$,
and $d(n)$ is computable from $s_n(n)$ in one step.

Since $\{0,1\}^{\mathbb{N}}$ is in bijection with $\mathcal{P}(\mathbb{N})$ — a
sequence is the indicator function of a subset — this immediately gives
$|\mathcal{P}(\mathbb{N})| > \aleph_0$.

### Cantor's theorem in general

**Theorem (Cantor, 1891).** For every set $A$, there is no surjection $f : A \to
\mathcal{P}(A)$.

*Proof.* Let $f : A \to \mathcal{P}(A)$ be arbitrary. Put

$$D = \{\, a \in A : a \notin f(a) \,\}$$

Then $D \subseteq A$, so $D \in \mathcal{P}(A)$. Suppose $D = f(b)$ for some
$b \in A$. Then

$$b \in D \iff b \notin f(b) \iff b \notin D$$

a contradiction. So $D$ is not in the range of $f$. $\blacksquare$

The map $a \mapsto \{a\}$ is injective, so $|A| < |\mathcal{P}(A)|$ strictly, for
every $A$. Iterating gives the ladder

$$|\mathbb{N}| < |\mathcal{P}(\mathbb{N})| < |\mathcal{P}(\mathcal{P}(\mathbb{N}))| < \cdots$$

and there is no set of all sets: applying the theorem to a supposed universal set
$U$ gives $\mathcal{P}(U) \subseteq U$ with $|\mathcal{P}(U)| > |U|$, which is
impossible.

$D$ is the diagonal set. Reading $a \in f(a)$ as the $(a,a)$ entry of a matrix
and complementing it recovers the sequence argument exactly. Taking $f$ to be the
identity on a universe of sets turns $D$ into Russell's $\{x : x \notin x\}$.

### The real numbers

$|\mathbb{R}| = |\mathcal{P}(\mathbb{N})| = 2^{\aleph_0}$, so $\mathbb{R}$ is
uncountable. Applied directly to decimal expansions the argument needs the small
repair noted above, since $x \mapsto$ its decimal expansion is not injective on
the dyadic-style exceptions: define the diagonal digit by

$$d_n = \begin{cases} 5 & \text{if } a_{nn} \neq 5 \\ 4 & \text{if } a_{nn} = 5 \end{cases}$$

Avoiding 0 and 9 guarantees the resulting expansion is the unique representation
of its value. Cantor avoided the issue altogether by working with sequences over
$\{m, w\}$.

### 1891 versus 1874: two different proofs

The 1891 paper is the diagonal version. The **1874** paper,
"Über eine Eigenschaft des Inbegriffes aller reellen algebraischen Zahlen"
(*Crelle* **77**, 258–262), proves the same uncountability by an entirely
different route — **nested intervals**.

Given a supposed enumeration $x_1, x_2, x_3, \dots$ of the reals in an interval,
Cantor constructs nested closed intervals $[a_1,b_1] \supset [a_2,b_2] \supset
\cdots$ as follows: let $a_1 < b_1$ be the first two terms of the sequence lying
in the starting interval; at each stage take $a_{k+1} < b_{k+1}$ to be the first
two terms of the sequence lying strictly inside $(a_k, b_k)$. The sequences
$(a_k)$ and $(b_k)$ are monotone and bounded, so

$$a_\infty = \lim_k a_k \quad\text{and}\quad b_\infty = \lim_k b_k$$

exist with $a_\infty \le b_\infty$, and any point of $[a_\infty, b_\infty]$ lies
in every interval. Each $x_n$ is excluded by construction from some $[a_k, b_k]$,
so no such point is in the enumeration. The enumeration was therefore incomplete.

The two proofs differ in what they require and what they yield.

| | 1874, nested intervals | 1891, diagonal |
| --- | --- | --- |
| Machinery | order completeness of $\mathbb{R}$, limits | none beyond a two-element alphabet |
| Applies to | linearly ordered continua | any set whatsoever |
| Gives | existence of transcendentals, in abundance | every set is strictly smaller than its power set, hence the whole cardinal ladder |
| Length | a page of analysis | four lines |

Cantor did not use the word "diagonal" in 1874, and the technique is genuinely
absent from that paper — a point worth insisting on, since the two are widely
conflated. What made the 1891 replacement matter was not economy but reach: the
nested-interval argument is a fact about the real line, whereas the diagonal
argument is a fact about sets, and only the second could become the template for
Russell, Gödel, Turing and Tarski.

### The general shape

Lawvere's fixed-point theorem (1969) states that in a cartesian closed category,
if there is a point-surjective morphism $A \to Y^A$, then every endomorphism of
$Y$ has a fixed point. Contrapositively: if $Y$ has a fixed-point-free
endomorphism — for $Y = \{0,1\}$, negation — then no such surjection exists.
Cantor's theorem is the case $Y = \{0,1\}$ in the category of sets; Gödel's
diagonal lemma, Tarski's undefinability theorem, Turing's halting theorem and the
recursion theorem are other instances. The negation used to "flip the diagonal"
is exactly the fixed-point-free endomorphism, and every diagonal argument in
mathematics is this one theorem wearing different clothes.
