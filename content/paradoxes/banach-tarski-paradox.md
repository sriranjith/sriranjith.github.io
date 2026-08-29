---
title: The Banach–Tarski Paradox
slug: banach-tarski-paradox
alternateNames:
  - Banach–Tarski theorem
  - The pea and the Sun paradox
  - Paradoxical decomposition of the ball
summary: >-
  A solid ball can be cut into five pieces which, moved rigidly and reassembled,
  form two balls identical to the original. The theorem is proved. The pieces
  are so ragged that no volume can be assigned to them at any stage.
hook: >-
  Cut a solid ball into five pieces, move them around, and you have two balls
  the same size as the first. Nothing was stretched.
era: twentieth-century
date: "1924"
year: 1924
origin: >-
  Proved by Stefan Banach and Alfred Tarski in Fundamenta Mathematicae in 1924,
  sharpening Hausdorff's 1914 paradoxical decomposition of the sphere.
people:
  - stefan-banach
  - alfred-tarski
  - felix-hausdorff
  - john-von-neumann
domains:
  - mathematics
  - philosophy
types:
  - infinity
nature: counterintuitive-result
difficulty: expert
status: resolved
renown: landmark
concepts:
  - Axiom of choice
  - Non-measurable set
  - Free group
  - Paradoxical decomposition
  - Equidecomposability
  - Amenability
  - Lebesgue measure
relationships:
  - kind: influenced-by
    to: cantors-diagonal-argument
    note: >-
      Cantor's set theory is what makes the statement expressible at all. The
      pieces are not solids but arbitrary point sets, and the duplication
      happens in an infinite group of words long before any geometry appears.
  - kind: related
    to: russells-paradox
    note: >-
      Both forced an axiom to be written down. Russell's contradiction restricted
      which sets may be formed; Banach–Tarski restricted which sets may be
      measured, and measure theory has been confined to a σ-algebra ever since.
  - kind: related
    to: godels-incompleteness
    note: >-
      Gödel (1938) and Cohen (1963) showed the axiom of choice is neither
      provable nor refutable from the other axioms, so "is the paradox true?" is
      partly a question about which set theory you are working in.
references:
  - source: banach-tarski-1924
    role: primary-source
    locator: "Fundamenta Mathematicae 6, 244–277"
    note: The original paper, including the general equidecomposability theorem.
  - source: hausdorff-1914-inhalt
    role: paper
    note: The direct ancestor — the sphere minus a countable set, split three ways.
  - source: vitali-1905-misura
    role: paper
    note: The first non-measurable set, and the template for the pieces.
  - source: von-neumann-1929-mass
    role: paper
    note: Introduces amenability and explains the dimensional divide.
  - source: wagon-banach-tarski
    role: book
    note: The standard monograph and the best place to read the full proof.
  - source: sep-axiom-choice
    role: encyclopedia
furtherReading:
  - title: "Wikipedia — Banach–Tarski paradox"
    url: https://en.wikipedia.org/wiki/Banach%E2%80%93Tarski_paradox
    note: Unusually good on the technical statement, the variants and the history.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Take a solid ball — a billiard ball, an orange, anything round and full all the
way through.

Cut it into five pieces.

Do not stretch them. Do not squash them. Do not add anything. Just pick each
piece up, turn it, slide it somewhere else, and put it down. The kind of moving
you could do with your hands.

Reassemble.

You now have **two** balls, each exactly the same size as the one you started
with. Not two half-size balls. Not two balls with holes. Two solid balls,
identical to the original.

Do it again to each of those and you have four. Then eight. Stefan Banach and
Alfred Tarski proved in 1924 that the same method can chop a ball the size of a
pea into finitely many pieces and rearrange them into a ball the size of the Sun.

This is not a trick, not an approximation, and not a joke. It is a theorem, and
it has been checked for a century.

The catch is hiding in the word "pieces".

## Understand

Nothing here contradicts anything you know about matter, and nothing here says
volume can be created. Both of those impressions come from importing everyday
assumptions into a statement that does not contain them.

**The pieces are not shapes.** When you cut an orange, you get parts with a
surface, a shape, and a definite volume. The Banach–Tarski pieces have none of
these. Each is an infinitely intricate scattering of individual points — dust
spread through the ball so finely that it has no volume at all. Not zero volume:
*no* volume. There is no number, not even zero, that can consistently be called
its size. Mathematicians call such a set **non-measurable**, and the pieces have
to be non-measurable, because if they had volumes the volumes would have to add
up and they plainly cannot.

So the obvious objection — "you doubled the volume, where did it come from?" —
does not land. Volume was never doubled, because at the intermediate stages there
was no volume to speak of. The original ball has a volume. The final two balls
have volumes. In between, the quantity simply does not exist. You cannot conserve
a thing that is undefined.

**Where the duplication actually happens.** The surprising part is not geometry.
It is that a *duplication machine already exists* inside the set of rotations of
three-dimensional space, and the ball merely inherits it.

Think of rotations as instructions. Pick two particular rotations, call them
**a** and **b**, chosen so that no combination of them ever gets you back exactly
where you started unless you undo every step in reverse. Now consider every
possible instruction sequence: *a then b then undo-a*, and so on — infinitely
many of them.

Sort those sequences into four bins by their first instruction: those starting
with **a**, with **undo-a**, with **b**, with **undo-b**. Take the bin of
sequences starting with **undo-a**, and apply **a** to every one of them. That
cancels the leading instruction, and what you are left with is every sequence
that does *not* start with **undo-a** — three of the four bins' worth. Put that
together with the bin of sequences starting with **a**, and you have recovered
*everything*. Two bins, one rotation, and the whole collection is back.

Do the same with **b** and the other two bins, and you get the whole collection a
second time. Four bins, two of which were nudged by a single rotation each, and
you have two complete copies of what you began with.

That is the entire paradox. Everything after it is bookkeeping to transfer this
fact about instruction sequences onto the points of a ball.

**Where the axiom of choice comes in.** To make the transfer, you must sort every
point of the ball into families — points reachable from one another by these
rotations — and pick exactly one representative from each family. There are
uncountably many families and no rule that selects a representative from each.
You simply assert that a selection exists. That assertion is the **axiom of
choice**, and it is the one non-constructive step in the proof.

The consequence is that **nobody can ever show you the pieces.** They are not
describable, not drawable, not computable. Their existence is guaranteed by an
axiom rather than exhibited by a construction. This is why "cut it into five
pieces" cannot be carried out even in principle, by anyone or anything.

**Why it does not happen in two dimensions.** A disc cannot be doubled this way,
and neither can a line segment. The reason is not that the plane is smaller. It
is that the rigid motions of a line or a plane are too *tame* — they commute too
much, and no pair of them behaves like the free instructions **a** and **b**
above. Rotations in three dimensions are not tame in that way. The paradox is a
statement about how complicated a group of motions is, and three dimensions is
where the complication starts.

**And it says nothing about matter.** A real ball has a finite number of atoms.
The theorem applies to a mathematical ball with a continuum of dimensionless
points and no smallest part. You cannot double a real object, and the theorem
never claimed you could.

## Examples

**The instruction-sequence duplication, written out.** Work with sequences built
from four symbols: $a$, $a^{-1}$, $b$, $b^{-1}$, with the rule that a symbol
immediately followed by its inverse cancels. Sort every sequence by its first
symbol.

| Bin | Contains |
| --- | --- |
| $W(a)$ | $a$, $ab$, $ab^{-1}$, $aab$, … |
| $W(a^{-1})$ | $a^{-1}$, $a^{-1}b$, $a^{-1}b^{-1}$, … |
| $W(b)$ | $b$, $ba$, $ba^{-1}$, $bb$, … |
| $W(b^{-1})$ | $b^{-1}$, $b^{-1}a$, $b^{-1}ab$, … |

Together with the empty sequence, these four bins are everything, and they do not
overlap.

Now apply $a$ to every element of $W(a^{-1})$. Each such element looks like
$a^{-1}u$, where $u$ is reduced and does not itself begin with $a$; multiplying
by $a$ cancels the leading letter and gives back $u$. So $a \cdot W(a^{-1})$ is
exactly the set of reduced sequences that **do not begin with $a$** — namely the
empty sequence together with $W(a^{-1})$, $W(b)$ and $W(b^{-1})$. Three of the
four bins, plus the empty sequence, recovered from one bin by one rotation.

So:

$$W(a) \ \sqcup\ a\cdot W(a^{-1}) \ =\ \text{everything}$$
$$W(b) \ \sqcup\ b\cdot W(b^{-1}) \ =\ \text{everything}$$

Four disjoint bins. Two rotations applied. Two complete copies. Nothing was added.

**The same move in a familiar setting.** The step where applying one rotation
turns a sub-collection into the whole collection is the night manager's shift in
Hilbert's hotel, in a non-commutative disguise. The hotel is full, everyone moves
along by one, and a room appears. Here the "rooms" are instruction sequences and
the "shift" is multiplication by $a$.

**Why measurable pieces are impossible.** Suppose the five pieces had volumes
$v_1, \dots, v_5$. Rigid motion does not change volume, so the two final balls
account for $v_1 + \cdots + v_5$ as well. The original ball has volume
$\tfrac{4}{3}\pi r^3$; the two final balls have $\tfrac{8}{3}\pi r^3$. So

$$\tfrac{4}{3}\pi r^3 \;=\; v_1 + \cdots + v_5 \;=\; \tfrac{8}{3}\pi r^3$$

which is false for any $r > 0$. Since every step except "the pieces have volumes"
is a theorem, that assumption is what fails. This is not an unfortunate side
effect of the construction; it is forced.

**A contrast that clarifies the dimension question.** In 1990 Miklós Laczkovich
proved that a disc *can* be cut into finitely many pieces — on the order of
$10^{50}$ of them — and reassembled by translations alone into a square of the
same area. This is Tarski's circle-squaring problem, and it is not paradoxical:
area is preserved throughout. The plane permits astonishing rearrangement. What
it does not permit is a change of area, and that is the whole difference.

## Explore

**Is the axiom of choice to blame?** This is the standard reading, and it is
roughly right, but the details matter.

Robert Solovay showed in 1970 that — assuming the consistency of an inaccessible
cardinal — there is a model of ZF plus dependent choice in which *every* set of
reals is Lebesgue measurable. In that world there are no non-measurable sets and
the Banach–Tarski decomposition does not exist. So the paradox genuinely requires
more choice than ZF + DC provides; you cannot get it from the countable choice
that ordinary analysis leans on.

But it does not need the full axiom either. Janusz Pawlikowski proved in 1991
that the Banach–Tarski paradox follows from the Hahn–Banach theorem, which is
strictly weaker than AC. Hahn–Banach is one of the load-bearing results of
functional analysis and almost nobody proposes discarding it. So "just drop
choice and the paradox goes away" costs more than it first appears.

**Is non-measurability the real culprit?** Not entirely, and this is the result
that most often surprises people who think they have the paradox filed away. In
1994 Randall Dougherty and Matthew Foreman proved that the pieces can be chosen
to have the Baire property — solving a problem of Marczewski from 1930 — and,
more strikingly, that the ball can be split using *open* sets whose union is
dense. So the decomposition does not require pathology in every sense at once. It
requires non-measurability, but topological respectability is achievable
alongside it.

**Can the pieces be moved continuously?** The usual reassurance is that the
motions are abstract rearrangements rather than physical journeys. That
reassurance is wrong. Trevor Wilson proved in 2005 that the pieces can be moved
along continuous paths, never overlapping at any moment, from the initial ball to
the two final balls. This settles a problem of de Groot. The pieces really can be
"carried" — you simply cannot describe, build or see them.

**How few pieces?** Raphael Robinson showed in 1947 that five pieces suffice and
that four do not. One of the five is a single point, needed to handle the centre
of the ball; if that irritating detail is set aside, four pieces do the work.

**What working mathematicians conclude.** The overwhelming majority view is that
the theorem is a fact about the interaction of the axiom of choice with the group
of Euclidean motions, and that the correct response was the one measure theory
actually took: define measure on a σ-algebra rather than on all subsets. A
minority — constructivists in the tradition of Brouwer and Bishop, and some
predicativists — regard the theorem as a symptom of a set theory that permits
objects with no content, and reject the framework rather than accommodate the
result. Nobody disputes the derivation.

**A note on the word "paradox".** Banach and Tarski did not call their result a
paradox in the 1924 paper; they called it a decomposition theorem, and presented
it as part of a systematic study of the measure problem, which was a central
topic of the Lwów and Warsaw schools. The name accumulated afterwards. There is
no contradiction anywhere in the mathematics, which is why this entry is filed as
a counterintuitive result rather than a logical one.

## History

**1904.** Ernst Zermelo published the axiom of choice, and the well-ordering
theorem it delivers, provoking an immediate international argument about
non-constructive existence proofs.

**1905.** Giuseppe Vitali constructed the first non-measurable set, choosing one
representative from each coset of the rationals inside the reals. This is the
prototype for everything that follows: the whole line splits into countably many
congruent copies of the Vitali set, whose measures would have to sum to a finite
positive number while all being equal — impossible.

**1914.** Felix Hausdorff proved the **Hausdorff paradox** in *Mathematische
Annalen*: the sphere, with a countable set of points removed, can be divided into
three pieces $A$, $B$, $C$ such that $A$, $B$, $C$ and $B \cup C$ are all
congruent. The consequence he drew was the one he cared about — there is no
finitely additive, rotation-invariant measure defined on all subsets of the
sphere. Everything essential in Banach–Tarski is already present here, including
the free group of rotations.

**1923.** Banach proved the complementary positive result, in *Fundamenta
Mathematicae*: on the line and in the plane, finitely additive, isometry-invariant
measures defined on *all* bounded sets do exist, extending Lebesgue measure. This
is why the paradox is a three-dimensional phenomenon, and it was known a year
before the paradox itself.

**1924.** Banach and Tarski published "Sur la décomposition des ensembles de
points en parties respectivement congruentes" in *Fundamenta Mathematicae* 6,
pages 244–277. They removed Hausdorff's countable exceptional set, extended the
result from the sphere to the solid ball, and proved the general statement: any
two bounded subsets of $\mathbb{R}^n$ with non-empty interior, for $n \ge 3$, are
equidecomposable. The pea and the Sun is a corollary, not a metaphor.

**1929.** John von Neumann isolated the property that actually matters. A group
admitting a finitely additive, left-invariant probability measure — later called
**amenable**, a term coined by Mahlon Day in 1949 — cannot act paradoxically. The
isometry groups of $\mathbb{R}$ and $\mathbb{R}^2$ are solvable and therefore
amenable; that of $\mathbb{R}^3$ is not, because $SO(3)$ contains a free group on
two generators. The dimensional divide is a group-theoretic fact, not a
geometrical one.

**1938.** Tarski proved the converse in full generality: a group action is
paradoxical if and only if no finitely additive invariant measure exists on all
subsets. The paradox and the failure of measure are the same statement.

**1947.** Robinson established that five pieces are necessary and sufficient.

**1970 and after.** Solovay's model, Pawlikowski's Hahn–Banach result (1991),
Laczkovich's solution of Tarski's circle-squaring problem (1990),
Dougherty–Foreman on the Baire property (1994) and Wilson's continuous motion
(2005) mapped out exactly how much is needed and what the pieces can be made to
look like.

## Why It Matters

**It settled the measure problem.** Before 1924, an open question was whether
Lebesgue measure could be extended to a countably additive, isometry-invariant
measure on *all* subsets of $\mathbb{R}^n$ that gives the unit cube measure 1.
Banach–Tarski answers no for $n \ge 3$, and does so without any appeal to
countable additivity — even finite additivity fails. The response is visible in
every measure theory course: measure is defined on a σ-algebra of measurable
sets, and the restriction is not fastidiousness but necessity. Probability theory
inherits it directly. An event, in Kolmogorov's axioms, is a *measurable* set,
and the reason is here.

**It created amenability.** Von Neumann's analysis of the paradox produced one of
the most productive concepts in twentieth-century mathematics. Amenability is now
central to geometric group theory, operator algebras, ergodic theory and random
walks. The Følner condition, Tarski numbers, the Grigorchuk groups of
intermediate growth and the von Neumann conjecture — refuted by Ol'shanskii in
1980, who built a non-amenable group with no free subgroup — all descend from a
question first asked about a decomposed sphere.

**It is the reference point in the argument over the axiom of choice.** AC has
consequences that are pleasant (every vector space has a basis, Tychonoff's
theorem, Hahn–Banach) and consequences that are unpleasant, and this is the
canonical unpleasant one. Any philosophical position on non-constructive
existence has to say something about it. Gödel's 1938 consistency proof and
Cohen's 1963 independence proof mean the choice is genuinely a choice.

**It disciplines intuition about infinite sets.** The instinct that a set "has a
size", that cutting and reassembling preserves it, and that pieces of a solid are
themselves solids are all reliable in ordinary experience and all false in
general. This theorem is the sharpest available demonstration that geometric
intuition is a guide to measurable sets specifically, not to sets.

## Modern Relevance

**Measure theory and probability, daily.** Every time a proof says "let $A$ be
measurable", this theorem is the reason the qualifier is there. Stochastic
processes, integration and functional analysis are all built on a σ-algebra
rather than a power set because of what happens when you do not.

**Geometric group theory.** Amenability governs whether a group admits invariant
means, whether random walks on it return, whether its Cayley graph has
exponential growth. Growth, Følner sequences, the Tarski number of a group and
paradoxical decompositions of graphs are an active research area whose founding
example is the ball.

**Measurable combinatorics.** A recent and thriving line of work asks which
combinatorial constructions on graphs and group actions can be done
*measurably* — with Borel or measurable pieces rather than arbitrary ones. Marks
and Unger's measurable solution to Tarski's circle-squaring problem (2017) is a
direct descendant, and the field's guiding question is precisely where the
Banach–Tarski phenomenon can and cannot be tamed.

**A caution about popularisation.** The theorem is regularly misreported as
showing that matter can be duplicated, that physics is broken, or that
mathematics is unreliable. None of these follow. The most useful thing a reader
can take away is the discipline of asking what the words in a theorem actually
denote — here, that "piece" means an arbitrary set of points and "volume" means a
function defined only where it can be.

## Deep Dive

### Statement

**Theorem (Banach–Tarski, 1924).** Let $B \subset \mathbb{R}^3$ be a closed ball.
There is a partition $B = A_1 \sqcup \cdots \sqcup A_5$ and isometries
$g_1, \dots, g_5 \in E(3)$ such that

$$g_1 A_1 \sqcup g_2 A_2 \;=\; B, \qquad g_3 A_3 \sqcup g_4 A_4 \sqcup g_5 A_5 \;=\; B$$

**Strong form.** If $X, Y \subseteq \mathbb{R}^n$ are bounded with non-empty
interior and $n \ge 3$, then $X$ and $Y$ are equidecomposable: $X \sim Y$.

Write $X \sim Y$ when $X$ and $Y$ admit finite partitions into pairwise congruent
pieces. Equidecomposability is an equivalence relation, and the
Banach–Schröder–Bernstein theorem holds for it: if $X$ is equidecomposable with a
subset of $Y$ and $Y$ with a subset of $X$, then $X \sim Y$. This is what reduces
piece counts to the minimum.

A set $X$ is **$G$-paradoxical** for a group $G$ acting on it if there are
disjoint $A_1, \dots, A_m, B_1, \dots, B_n \subseteq X$ and elements
$g_i, h_j \in G$ with

$$X = \bigcup_i g_i A_i = \bigcup_j h_j B_j$$

### Step 1 — the free group $F_2$ is paradoxical

Let $F_2 = \langle a, b \rangle$ be the free group of rank 2: elements are
reduced words in $a, a^{-1}, b, b^{-1}$, with no letter adjacent to its inverse.
For a letter $x$ let $W(x)$ be the set of reduced words beginning with $x$. Then

$$F_2 = \{e\} \sqcup W(a) \sqcup W(a^{-1}) \sqcup W(b) \sqcup W(b^{-1})$$

Every $w \in W(a^{-1})$ has the form $a^{-1}u$ with $u$ reduced and not beginning
with $a$, so

$$a\,W(a^{-1}) = \{e\} \sqcup W(a^{-1}) \sqcup W(b) \sqcup W(b^{-1})$$

and therefore

$$F_2 = W(a) \sqcup a\,W(a^{-1}), \qquad F_2 = W(b) \sqcup b\,W(b^{-1})$$

Four disjoint sets, two group elements, two copies of $F_2$. No choice is used
here and nothing infinite is invoked beyond the group itself. **This is the
paradox.** Everything else is transport.

Note why nothing like this can happen in an abelian, or even a solvable, group: a
free subgroup of rank 2 is the source of the duplication, and amenable groups
contain none.

### Step 2 — embedding $F_2$ in $SO(3)$

Let $\theta = \arccos(1/3)$ and take rotations by $\theta$ about the $x$- and
$z$-axes:

$$A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \tfrac13 & -\tfrac{2\sqrt2}{3} \\ 0 & \tfrac{2\sqrt2}{3} & \tfrac13 \end{pmatrix}, \qquad B = \begin{pmatrix} \tfrac13 & -\tfrac{2\sqrt2}{3} & 0 \\ \tfrac{2\sqrt2}{3} & \tfrac13 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

A short induction on word length shows that any non-empty reduced word of length
$k$ in $A^{\pm 1}, B^{\pm 1}$, applied to the vector $(1,0,0)$, yields

$$\frac{1}{3^{k}}\left(p,\ q\sqrt{2},\ r\right) \quad \text{with } p,q,r \in \mathbb{Z} \text{ and } 3 \nmid q$$

Since $q \neq 0$, the result is never $(1,0,0)$, so no non-empty reduced word can
be the identity matrix. Hence

$$\langle A, B \rangle \cong F_2 \le SO(3)$$

This is the geometric content of the theorem, and it is why three dimensions are
required: $SO(2)$ is abelian and the isometry groups $E(1)$ and $E(2)$ are
solvable, so neither contains a copy of $F_2$.

### Step 3 — from the group to the sphere, using choice

$F_2$ acts on $S^2$. Each non-identity rotation fixes exactly two points, and
$F_2$ is countable, so the set

$$D = \{\, x \in S^2 : gx = x \text{ for some } g \neq e \,\}$$

is countable. On $S^2 \setminus D$ the action is free, so the orbits partition it
and every orbit is a faithful copy of $F_2$.

**Here the axiom of choice enters, and only here.** Choose one point from each
orbit, giving a set $M \subseteq S^2 \setminus D$. Then

$$S^2 \setminus D = \bigsqcup_{g \in F_2} gM$$

There are $2^{\aleph_0}$ orbits and no definable rule selecting representatives;
$M$ exists by fiat. Transporting the decomposition of Step 1:

$$\mathcal{A} = \bigsqcup_{g \in W(a)} gM, \quad \mathcal{A}' = \bigsqcup_{g \in W(a^{-1})} gM, \quad \mathcal{B} = \bigsqcup_{g \in W(b)} gM, \quad \mathcal{B}' = \bigsqcup_{g \in W(b^{-1})} gM$$

gives $S^2 \setminus D = \mathcal{A} \sqcup A\mathcal{A}'$ and $S^2 \setminus D =
\mathcal{B} \sqcup B\mathcal{B}'$, up to the orbit of $M$ itself. This is
Hausdorff's 1914 result.

### Step 4 — absorbing the exceptional set (the hotel again)

$D$ is countable, so there is an axis missing $D$ and an angle such that the
rotation $\rho$ about it satisfies $\rho^m D \cap \rho^n D = \emptyset$ for all
$m \neq n \ge 0$ — only countably many angles are excluded, and there are
uncountably many available. Put

$$D^* = \bigcup_{n \ge 0} \rho^n D$$

Then $\rho D^* = D^* \setminus D$, so

$$S^2 = (S^2 \setminus D^*) \sqcup D^* \ \sim\ (S^2 \setminus D^*) \sqcup \rho D^* = S^2 \setminus D$$

using two pieces and one rotation. **This is Hilbert's hotel executed on a
sphere:** an infinite set absorbs a countable annoyance by shifting along one
notch. Hence $S^2 \sim S^2 \setminus D$ and $S^2$ is $SO(3)$-paradoxical.

### Step 5 — sphere to ball

Extend radially: each $x \in S^2$ carries the open segment $\{tx : 0 < t \le 1\}$,
so a paradoxical decomposition of $S^2$ lifts to one of $B \setminus \{0\}$.

The centre is handled by one more shift. Choose a rotation $\sigma$ about an axis
through a point at distance $1/2$ from the origin, by an angle that is an
irrational multiple of $\pi$. Then $\{\sigma^n 0 : n \ge 0\}$ is an infinite set
of distinct points inside $B$, and

$$B \setminus \{0\} \sim B$$

by the same absorption. Applying Banach–Schröder–Bernstein and optimising yields
Robinson's five pieces, of which one is $\{0\}$ alone.

### Non-measurability is forced

Suppose the pieces $A_1, \dots, A_5$ were Lebesgue measurable. Lebesgue measure
$\lambda$ on $\mathbb{R}^3$ is countably additive and invariant under $E(3)$, so

$$\lambda(B) = \sum_{i=1}^5 \lambda(A_i) = \lambda(g_1A_1) + \lambda(g_2A_2) + \lambda(g_3A_3) + \lambda(g_4A_4) + \lambda(g_5A_5) = \lambda(B) + \lambda(B)$$

giving $\lambda(B) = 2\lambda(B)$ with $0 < \lambda(B) = \tfrac43\pi r^3 <
\infty$. Contradiction. **At least one piece is non-measurable**, and in fact
they cannot all be measurable at any stage of the construction.

The sets $gM$ are exactly Vitali sets transplanted to the sphere: $M$ is a choice
of coset representatives for the $F_2$-action, just as Vitali's set is a choice
of coset representatives for $\mathbb{Q}$ acting on $\mathbb{R}$ by translation.

There is a converse, due to Tarski (1938): a group $G$ acting on $X$ makes $X$
paradoxical **if and only if** there is no finitely additive $G$-invariant
measure $\mu$ on all subsets of $X$ with $\mu(X) = 1$. Paradoxicality and the
failure of measure are not merely related; they are the same condition.

### Why dimensions 1 and 2 are safe

Von Neumann's 1929 analysis gives the clean criterion. A group $G$ is
**amenable** if there is a finitely additive, left-invariant probability measure
on all subsets of $G$; equivalently, an invariant mean on $\ell^\infty(G)$.

Facts:

1. Abelian groups are amenable, and amenability is preserved by subgroups,
   quotients, extensions and directed unions. Hence every solvable group is
   amenable.
2. $F_2$ is **not** amenable — Step 1 exhibits precisely the paradoxical
   decomposition that an invariant mean forbids.
3. An amenable group acting on a set can never make it paradoxical, since the
   invariant mean pushes forward to an invariant finitely additive measure.

Now compare the isometry groups. $E(1) \cong \mathbb{R} \rtimes \mathbb{Z}/2$ and
$E(2) \cong \mathbb{R}^2 \rtimes O(2)$ are both solvable — in $E(2)$ the
translations form an abelian normal subgroup with abelian quotient $O(2)$ — hence
amenable. Banach's 1923 theorem is the constructive expression of this: on
$\mathbb{R}$ and $\mathbb{R}^2$ there exist finitely additive, isometry-invariant
measures defined on *every* bounded set and extending Lebesgue measure. With such
a measure in hand, no paradoxical decomposition can exist.

$E(3) \supseteq SO(3) \supseteq F_2$ is not amenable, and Steps 1–5 realise the
consequence. **Dimension is not the operative variable. Amenability is.** For a
sharp illustration: the free group $F_2$ acts on the hyperbolic plane
$\mathbb{H}^2$ by isometries, and the hyperbolic plane *does* admit paradoxical
decompositions despite being two-dimensional.

One caveat on the general theory: the von Neumann conjecture — that every
non-amenable group contains a free subgroup of rank 2 — is false, refuted by
Ol'shanskii in 1980. Non-amenability is the right criterion; a free subgroup is
merely the most convenient sufficient condition, and the one Euclidean space
happens to supply.

### Exactly how much choice

- **ZF alone does not suffice.** Solovay (1970) built a model of ZF + DC in which
  every set of reals is Lebesgue measurable, assuming the consistency of an
  inaccessible cardinal; Shelah (1984) showed the large cardinal assumption
  cannot be dropped for that statement. In Solovay's model there is no
  Banach–Tarski decomposition.
- **Full AC is not needed.** Pawlikowski (1991) derived the paradox from the
  Hahn–Banach theorem, which is strictly weaker than AC and follows from the
  Boolean prime ideal theorem.
- So the paradox sits strictly between ZF + DC and ZFC. Rejecting it means
  rejecting Hahn–Banach.

### What is not being claimed

The theorem makes no assertion about physical objects, and the following are all
misreadings.

**Points are not atoms.** $B$ has $2^{\aleph_0}$ points, each of zero extent. A
physical ball has on the order of $10^{23}$ atoms of positive size. There is no
map from one situation to the other, and the theorem's hypotheses are false of
matter at the first line.

**No volume is created.** Volume is a function $\lambda$ defined on the Lebesgue
measurable sets. The pieces $A_i$ are not in its domain. The equation "volume in
= volume out" is not violated; it is not even expressible for the intermediate
objects. Asking where the extra volume came from is like asking for the
temperature of a number.

**Additivity is not violated.** $\lambda$ is countably additive **on the
σ-algebra of measurable sets**. The decomposition is a finite union of
non-measurable sets, which the additivity axiom says nothing about. The theorem
is what tells you the σ-algebra restriction was mandatory rather than
conventional.

**No procedure exists.** $M$ is produced by the axiom of choice from
uncountably many orbits. It is not definable, not Borel, not computable, and no
algorithm approximates it. Nothing physical or computational instantiates the
construction, in this universe or any other.

**Conservation laws are untouched.** Mass, energy and momentum are properties of
physical systems obeying physical dynamics. The theorem concerns rigid motions of
abstract point sets, a setting in which none of these quantities is defined. It
neither supports nor threatens any claim in physics.

What the theorem *is* about is the interaction between the axiom of choice and
the group $E(3)$ — and, correctly understood, it is one of the most informative
facts in mathematics about the limits of the word "size".
