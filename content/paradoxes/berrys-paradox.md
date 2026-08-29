---
title: Berry's Paradox
slug: berrys-paradox
alternateNames:
  - The Berry Paradox
  - The Least Integer Not Nameable in Fewer Than Nineteen Syllables
summary: >-
  "The smallest positive integer not definable in under sixty letters." That
  phrase has fifty-seven letters, so it defines the very number it says cannot be
  defined. The way out is that "definable" cannot mean what it seems to.
hook: >-
  "The smallest number that cannot be described in fewer than twelve words."
  That description is eleven words long.
era: twentieth-century
date: "1906 (published by Russell, crediting Berry); communicated c. 1904"
year: 1906
origin: >-
  Sent to Bertrand Russell by G. G. Berry, a junior librarian at the Bodleian
  Library in Oxford, and published by Russell in 1906 with explicit credit, in
  the form of the least integer not nameable in fewer than nineteen syllables.
people:
  - g-g-berry
  - bertrand-russell
  - alfred-tarski
  - gregory-chaitin
domains:
  - logic
  - mathematics
  - computer-science
types:
  - self-reference
  - knowledge
  - computation
nature: logical-contradiction
difficulty: advanced
status: resolved
renown: specialist
concepts:
  - Definability
  - Semantic closure
  - Tarski's undefinability theorem
  - Kolmogorov complexity
  - Chaitin's incompleteness theorem
  - Object language and metalanguage
relationships:
  - kind: influences
    to: godels-incompleteness
    note: >-
      Gödel noted in 1931 that any epistemological antinomy would serve as the
      engine of his proof, and Berry's is one. George Boolos made that concrete
      in 1989 with a one-page proof of the first incompleteness theorem built
      entirely on Berry's paradox, with no self-referential sentence anywhere in
      it.
  - kind: related
    to: liar-paradox
    note: >-
      Both are semantic paradoxes and both get the same diagnosis: a language
      that contains its own words for "true" or "definable" is a language in
      which contradictions can be built. Tarski's hierarchy answers both at once.
  - kind: related
    to: russells-paradox
    note: >-
      Published by Russell within a few years of each other and attacked by the
      same theory of types, but Ramsey argued in 1925 that they belong to
      different families — Russell's is about sets, Berry's is about naming.
  - kind: related
    to: halting-problem
    note: >-
      Berry's argument, made precise, proves that the length of the shortest
      program producing a given string is uncomputable — the halting problem seen
      through the lens of description length.
  - kind: related
    to: cantors-diagonal-argument
    note: >-
      Both exploit the mismatch between a countable stock of finite descriptions
      and the objects those descriptions are supposed to cover.
references:
  - source: russell-1906-transfinite-difficulties
    role: primary-source
    note: The first appearance in print, with Berry credited by name.
  - source: russell-1908-types
    role: paper
    note: Berry's paradox appears among the seven Russell catalogues, and the ramified theory is aimed partly at it.
  - source: tarski-truth-1956
    role: primary-source
    note: The undefinability theorem, which is the resolution in its exact form.
  - source: chaitin-1974-jacm
    role: paper
    note: Berry's paradox converted into a quantitative limit on what formal systems can prove.
  - source: boolos-1989-berry-proof
    role: paper
    note: Incompleteness proved from Berry's paradox in a single page.
  - source: li-vitanyi-kolmogorov
    role: academic-reference
    note: The standard reference for Kolmogorov complexity and the uncomputability results.
  - source: franzen-2005-godels-theorem
    role: book
    locator: "Ch. 8"
    note: A sceptical reading of Chaitin's popular gloss on his own theorem.
  - source: sep-self-reference
    role: encyclopedia
  - source: sep-tarski-truth
    role: encyclopedia
  - source: sep-paradoxes-contemporary-logic
    role: encyclopedia
    note: Sets Berry alongside Richard's and König's paradoxes in the 1905–1908 cluster.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Play a game. Describe a number using as few words as possible.

*"Twelve."* Easy. *"A hundred."* Easy. *"The number of days in a year."* Also
short. *"The smallest number that is both a square and a cube, apart from one."*
Longer, but it works — the answer is 64.

Some numbers take a lot of words. Pick a random enormous number, thirty digits
long with no pattern in it, and there may be no clever short way to say it; you
might just have to read out all thirty digits.

Now here is the thing. There are only so many short descriptions. If you are
allowed fewer than sixty letters, then even counting every possible arrangement
of letters and spaces, there is a finite number of phrases you could write. A
huge number — but finite. So only finitely many numbers can be described in under
sixty letters.

There are infinitely many numbers. So plenty of them are **not** describable in
under sixty letters. And among those, one has to be the smallest.

Let us name it:

> **the smallest positive integer not definable in under sixty letters**

Count the letters in that phrase. There are fifty-seven.

You have just described, in fifty-seven letters, a number that by definition
cannot be described in fewer than sixty.

## Understand

Look carefully at what went wrong, because the setup was so reasonable.

Every step seemed unarguable:

1. There are finitely many phrases with fewer than sixty letters.
2. So finitely many numbers get described by them.
3. There are infinitely many numbers, so some are left over.
4. Every non-empty collection of positive whole numbers has a smallest member.
   (This is genuinely true, and it is the least-number principle.)
5. So there is a smallest number not describable in under sixty letters.
6. But step 5's own phrasing describes it in fifty-seven.

Steps 1 to 4 are fine. Step 6 is the collision. So the fault must be in step 5,
which means the fault is in the word doing all the work: **definable**.

### What is wrong with "definable"

The argument quietly assumes that there is a definite fact of the matter about
which phrases succeed in defining a number. It treats "this phrase defines that
number" as a clean, settled relation — as solid as "this key opens that door."

It is not. Suppose we could write down, precisely, a test for whether an English
phrase defines a number and which number it defines. Then we could use that test
inside a phrase — and that is exactly what step 5 does. The phrase "the smallest
positive integer not definable in under sixty letters" is a phrase *about*
defining. It sits on top of the whole system of definitions and passes judgement
on it, while pretending to be an ordinary member of that system.

The resolution, in one sentence: **a language cannot contain a complete and
correct account of its own defining.**

This is the same diagnosis given to the liar sentence "this sentence is false".
English lets you talk about English — about truth, meaning, and definition —
using the very same words. Logicians call this being **semantically closed**, and
it is precisely what makes the paradoxes constructible. Ordinary English really
does have this feature, so in ordinary English the paradox is real and there is
no repair short of giving up something.

### How mathematics escapes

Mathematics escapes by refusing to be semantically closed.

Fix a precise language — say, the formal language of arithmetic, with a strict
grammar. Now the count in step 1 becomes exact: there really are finitely many
formulas of that language under a given length, and each either defines a number
or does not.

But now write out step 5 carefully. It says: *the smallest positive integer not
definable-in-that-language in under sixty symbols*. That phrase is not a phrase of
the language. It talks about the language from outside, so it lives in what
logicians call the **metalanguage**. It defines a number perfectly well — up
there. It just does not count as a short definition down here, because it is not
a definition in the language at all.

The circle is cut. Definitions live on one level, talk about definitions lives on
the level above, and the paradox needs both to be the same level.

Alfred Tarski turned this into a theorem in the 1930s. For any sufficiently rich
consistent formal language, the property of being a true sentence of that language
cannot itself be expressed inside the language. Nor can "definable in this
language". The words exist in our talk about the system; they cannot be brought
inside it.

### Why this is not just bookkeeping

You might suspect the levels are a bureaucratic trick to make an awkward question
unaskable. They are not, and the proof is that the same idea produces hard,
positive results elsewhere.

When you replace vague "definability" with a completely precise notion — the
length of the shortest computer program that outputs a given thing — Berry's
argument stops being a paradox and starts being a theorem. It proves that this
length cannot be computed by any program, and Gregory Chaitin showed in 1974 that
it proves something sharper still: every formal system of mathematics has a
ceiling above which it can never certify that any specific object is complicated.
Berry's puzzle, made exact, becomes a measuring instrument.

## Examples

**The original, in syllables.** Russell's 1906 version, as Berry sent it, uses
syllables rather than letters:

> **the least integer not nameable in fewer than nineteen syllables**

Count the syllables: the (1), least (1), in-te-ger (3), not (1), name-a-ble (3),
in (1), few-er (2), than (1), nine-teen (2), syl-la-bles (3). Eighteen. The phrase
names, in eighteen syllables, the least integer supposedly requiring nineteen.

**Counting the descriptions.** With 26 letters plus a space, there are $27^{59}$
or fewer strings of length under sixty — around $10^{84}$. That is a stupendously
large finite number, comfortably more than the atoms in the observable universe,
and it does not matter in the slightest. Finite is finite; infinitely many
integers must be left over.

**Where the shortest description actually lies.** The number 1 followed by a
hundred zeros has a hundred and one digits, but the phrase "ten to the hundredth"
has nineteen letters. Meanwhile a hundred-digit number produced by fair coin
flips almost certainly has no description shorter than reading out its digits.
Most numbers are like the second kind — but you can never point at one and prove
it. That is Chaitin's theorem in embryo.

**The close cousins, all from the same few years.**

| Paradox | Year | The object | Same diagnosis? |
| --- | --- | --- | --- |
| Richard's paradox | 1905 | Diagonalise the list of definable real numbers | Yes |
| König's paradox | 1905 | The least ordinal not definable in finitely many words | Yes |
| Berry's paradox | 1906 | The least integer not nameable briefly | Yes |
| Grelling's paradox | 1908 | Is "heterological" heterological? | Semantic, but closer to Russell's |

Frank Ramsey, in 1925, drew the line that is still used. Russell's paradox and
Burali-Forti's are **logical or set-theoretic**: they can be stated using nothing
but the vocabulary of the mathematical theory itself. Berry's, Richard's, König's
and the Liar are **semantic**: they need words like *true*, *nameable*,
*definable*, which belong to talk *about* the theory. The two families need
different cures, which is why ZFC's separation axiom fixes Russell's paradox and
does nothing whatever for Berry's.

## Explore

**Is Berry's paradox a genuine contradiction, or does it dissolve?** Both answers
have defenders, and the disagreement is instructive.

The case for *dissolution*: once you insist on a precise language, the offending
phrase turns out to belong to a different language, and there is no contradiction
anywhere. Nothing is lost. On this reading Berry's paradox is a warning about
sloppy quantification over "all definitions", not a discovery about the world.

The case for *genuine contradiction*: natural language is not a mistake we can
opt out of. English contains "definable", uses it meaningfully, and the paradox
follows. Something we actually do — define things and talk about defining them —
is provably incoherent taken at face value. The site classifies this entry as a
logical contradiction for that reason: the premises are ones we really hold, and
the conclusion really is both P and not-P. The repair is not free. It costs us
the assumption that we can speak coherently about definability in general.

**Russell's own response was heavier than Tarski's.** In 1908 he blocked Berry's
paradox with the *ramified* theory of types, which stratifies not just sets by
type but propositional functions by **order**, according to what they quantify
over. A definition that quantifies over all definitions of order $n$ has order at
least $n+1$, so it cannot be one of the things it quantifies over. This is his
vicious-circle principle. The trouble is that it also forbids perfectly innocent
mathematics — the least upper bound of a set of reals is defined by quantifying
over the reals, which the principle bans — and Russell had to add the *axiom of
reducibility* to get it back. Almost nobody believed the axiom, Ramsey and
Chwistek argued in the mid-1920s that ramification was unnecessary if you handled
the semantic paradoxes separately, and the simple theory of types is what
survived.

**Where the boundary actually sits.** The subtlety worth noticing is that
"definable" is not uniformly undefinable. Inside set theory, "definable in the
language of set theory with parameters from $V_\alpha$" *is* definable for each
fixed $\alpha$ — the levels can be handled one at a time. What cannot be defined
is definability over the whole universe at once. This is why the mathematical
notion of a definable set is perfectly usable in practice: the hierarchy is real,
and working mathematicians live inside one level of it without noticing.

**The productive move.** The most important response was not to block the paradox
but to make it precise and see what it proves. If you replace "definable in
English" with "output by a program of length $n$ on a fixed universal machine",
every vague term becomes exact — and Berry's argument survives translation and
becomes the standard proof that this length cannot be computed. A paradox that
turns into a theorem when you sharpen it is a paradox that was pointing at
something real.

## History

**G. G. Berry.** George Godfrey Berry (1867–1928) was a junior librarian at the
Bodleian Library in Oxford — not an academic logician. He corresponded with
Russell about the paradoxes and, on Russell's account, brought him the puzzle
about the least integer nameable only in many syllables. Russell also records
that Berry once introduced himself with a card bearing the words "the statement
on the other side of this card is false", the Liar in physical form. Berry
published essentially nothing under his own name; his sole durable trace in the
literature is a paradox he did not name after himself.

**1905–1906: the paradox season.** These two years produced a cluster of related
antinomies. Jules Richard published his diagonal paradox about definable reals in
1905; Julius König presented his paradox about the least indefinable ordinal at
the 1905 International Congress in Heidelberg; Berry's arrived via Russell.

**1906.** Russell published Berry's version in *On Some Difficulties in the Theory
of Transfinite Numbers and Order Types*, read to the London Mathematical Society
in December 1905, crediting "Mr G. G. Berry of the Bodleian Library" explicitly.
He was assembling a catalogue of paradoxes at the time, hunting for the single
flaw they shared.

**1908.** Berry's paradox appears in Russell's *Mathematical Logic as Based on the
Theory of Types* as one of seven paradoxes the theory must handle, alongside the
Liar, Richard's, König's and his own.

**1925.** Frank Ramsey separated the logical from the semantic paradoxes and
argued that only the first group threatens mathematics. This is why modern set
theory has nothing to say about Berry.

**Early 1930s.** Tarski proved the undefinability of truth, giving the semantic
paradoxes their definitive treatment through the object-language/metalanguage
distinction. The result was presented in Polish in 1933 and reached a wide
audience through the German version and later the English translation.

**1974.** Gregory Chaitin published *Information-Theoretic Limitations of Formal
Systems* in the *Journal of the ACM*, turning Berry's paradox into a quantitative
incompleteness theorem. He had been developing the idea since the mid-1960s,
independently of and roughly simultaneously with Kolmogorov and Solomonoff on the
complexity measure itself.

**1989.** George Boolos published a proof of Gödel's first incompleteness theorem
from Berry's paradox in the *Notices of the American Mathematical Society* —
about one page, with no diagonal lemma and no self-referential sentence.

## Why It Matters

**It forced the object-language/metalanguage distinction into logic.** The idea
that a formal system and the talk about that formal system are different
languages, and must be kept apart, is now so standard that it is invisible. It was
not obvious in 1900, and paradoxes like Berry's are the reason it became doctrine.
Every modern treatment of semantics, every model-theoretic argument, and every
compiler's separation of a program from its metadata inherits this.

**It gave incompleteness a second, independent route.** Gödel's theorem is usually
proved via a sentence that asserts its own unprovability, which many readers find
suspiciously clever. Boolos's Berry-based proof reaches the same conclusion
without any sentence talking about itself. That the theorem has two quite
different proofs is strong evidence that it reflects something structural, not a
trick of self-reference.

**It became a measuring instrument.** Kolmogorov complexity — the length of the
shortest program producing an object — is Berry's "shortest description" made
exact, and it is now a working tool. It underpins the theory of randomness (a
string is random if it has no description shorter than itself), the minimum
description length principle in statistics, and a family of results about the
limits of what any formal system can certify.

**It puts a specific number on what mathematics cannot prove.** Chaitin's theorem
says that for each formal system there is a finite constant beyond which the
system can never prove any particular object complex. Almost every string is
complex; almost none can be shown to be. That is an unusually concrete form of
incompleteness, and it came out of a librarian's letter about syllables.

## Modern Relevance

**Randomness testing and compression.** "This file is random" is, in the
Kolmogorov sense, unprovable for any specific file beyond a system-dependent
bound. Practical compression tools sidestep this by testing narrow, decidable
proxies — entropy, repeated substrings — rather than incompressibility itself. The
gap between "we could not compress it" and "it is incompressible" is Berry's
paradox, and it is permanent.

**Machine learning and description length.** Minimum description length model
selection, and the Solomonoff-induction framing of universal prediction, take
"shortest description" as the definition of a good hypothesis. Both are
uncomputable in their pure form for exactly this reason, and every practical
system is an approximation whose limitations trace back here.

**Program specification and reflection.** A program that reasons about which
programs are "simple" or "well-specified" runs into a version of the same wall.
Languages with reflection have to stratify what a program may say about itself, in
the same spirit as Tarski's hierarchy.

**Interestingness and the smallest boring number.** The popular "no uninteresting
numbers" argument — the smallest uninteresting number would be interesting for
that reason — is Berry's paradox with "interesting" in place of "definable", and
it fails for the same reason: interestingness is not a well-defined predicate that
can be applied to itself.

**Prompting and self-describing systems.** Instructions of the form "produce the
shortest description that no shorter description could produce" are, formally,
Berry sentences. They have no satisfying answer, and recognising that shape saves
time.

## Deep Dive

### Formalising the argument

Let $L$ be a formal language with a fixed effective coding of formulas as strings.
Say that a formula $\varphi(x)$ with one free variable **defines** $n$ if
$\varphi(n)$ holds and $\varphi(m)$ fails for all $m \neq n$. Write
$D_k$ for the set of positive integers definable by some $L$-formula of length
less than $k$.

$D_k$ is finite, since there are finitely many strings of length under $k$.
Therefore $\mathbb{N}^{+} \setminus D_k$ is non-empty, and by the least-number
principle it has a minimum, $b_k$.

The naive contradiction is that "$b_k$" appears to be defined by a formula of
length roughly $\log k$ plus a constant, which is less than $k$ for large $k$.

The formalisation reveals why not. The predicate "$x \in D_k$" unpacks to

$$\exists \varphi \, \big( \mathrm{len}(\varphi) < k \wedge \mathrm{Defines}(\varphi, x) \big)$$

and $\mathrm{Defines}(\varphi, x)$ requires a satisfaction predicate for $L$ —
that is, a truth predicate. **Tarski's undefinability theorem** says no such
predicate is expressible in $L$ when $L$ is consistent and interprets enough
arithmetic:

> There is no $L$-formula $\mathrm{True}(x)$ such that for every $L$-sentence
> $\sigma$, $\ \vdash \sigma \leftrightarrow \mathrm{True}(\ulcorner \sigma \urcorner)$.

So the Berry formula is not an $L$-formula, the length comparison never happens,
and there is no contradiction. Definability at each finite level of a hierarchy is
expressible; definability simpliciter is not.

### Kolmogorov complexity

Fix a universal prefix-free machine $U$. For a finite binary string $x$,

$$K(x) = \min \{ |p| : U(p) = x \}$$

**Invariance.** For any other universal machine $U'$ there is a constant $c$
(depending on $U, U'$ but not on $x$) with $|K_U(x) - K_{U'}(x)| \le c$. The
measure is machine-dependent only up to an additive constant, which is why it is
a real notion rather than an artefact.

**Counting.** There are $2^n$ strings of length $n$ and only $2^n - 1$ programs of
length under $n$, so for every $n$ at least one string of length $n$ has
$K(x) \ge n$; more strongly, fewer than $2^{n-m+1}$ strings of length $n$ satisfy
$K(x) < n - m$. Almost every string is incompressible.

**Uncomputability, by Berry.** Suppose $K$ were computable. Define a program $P_n$
that searches strings in order and outputs the first $x$ with $K(x) \ge n$. Such
an $x$ exists by counting, so $P_n$ halts. But $P_n$ has length
$|n| + c \approx \log_2 n + c$, so

$$K(x) \le \log_2 n + c$$

while by construction $K(x) \ge n$. For $n$ large this is false. Hence $K$ is not
computable. That is exactly Berry's argument: *the first string too complex to
describe briefly* is a brief description of it.

### Chaitin's incompleteness theorem

Let $F$ be a consistent, effectively axiomatised formal system that interprets
enough arithmetic to express statements of the form $K(x) > n$.

> **Theorem (Chaitin, 1974).** There is a constant $L$, depending on $F$, such
> that $F$ proves no statement of the form $K(x) > L$, for any string $x$.

*Proof sketch.* Suppose otherwise. Build a program $Q_m$ that enumerates all
theorems of $F$ — possible because $F$ is effectively axiomatised — and outputs the
first string $x$ for which it finds a proof of $K(x) > m$. If $F$ proves such
statements for arbitrarily large $m$, then $Q_m$ halts for arbitrarily large $m$.
Now $Q_m$ needs only the fixed code for the enumerator plus the number $m$, so

$$|Q_m| \le \log_2 m + c_F$$

for a constant $c_F$ measuring the size of $F$'s axioms and rules. Hence
$K(x) \le \log_2 m + c_F$. But $F$ proved $K(x) > m$, and by soundness (or by
$\Sigma_1$-soundness applied appropriately) that is true, so $m < K(x) \le \log_2 m + c_F$.
For $m$ large enough this fails. Contradiction. $\square$

The consequence is stark. Almost every string satisfies $K(x) > L$. Only finitely
many do not. And yet $F$ — which may be ZFC with large cardinals — can prove it of
none of them. Incompleteness here is not confined to one exotic sentence; it is
the overwhelming majority of a very natural family of true statements.

Chaitin's constant $\Omega$, the halting probability of $U$, sharpens this: its
binary digits are algorithmically random, and $F$ can determine only finitely many
of them.

### A necessary caution about the popular gloss

Chaitin often summarised his theorem as showing that a formal system has a finite
"information content" and cannot prove results containing more information than
its axioms — that you cannot get a ten-pound theorem from a five-pound axiom
system.

Torkel Franzén argued at length in 2005 that this reading is misleading. The
constant $c_F$ is not a measure of the logical strength or information content of
$F$; it depends on the chosen coding and on incidental features of how the axioms
are presented, and one can make it large or small by cosmetic changes. Very weak
systems and very strong ones can have similar constants. What the theorem
establishes is a genuine and surprising limitation; what it does not establish is
a quantitative theory of how much mathematics a set of axioms "contains". Franzén's
critique is the standard corrective, and it is worth reading alongside Chaitin's
own expositions rather than instead of them.

### Boolos's proof of incompleteness

Boolos (1989) formalises Berry directly. For a theory $F$ in the language of
arithmetic, say that a formula $\varphi(x)$ **names** $n$ if $\varphi(n)$ is
provable in $F$ and $\varphi(m)$ is refutable for $m \neq n$. Define $C(x,y)$ to
express "$x$ is named by a formula with fewer than $y$ symbols" — this is
expressible, because provability in $F$ is $\Sigma_1$ and nothing here requires a
truth predicate. Then consider

$$\text{"}m \text{ is the least number not named by any formula of fewer than } k \text{ symbols"}$$

for a suitably chosen $k$ larger than the length of that very formula. If $F$ were
complete and sound, it would prove a statement whose own length undercuts the
bound it asserts. The resolution is that $F$ is incomplete: it cannot prove the
statement, even though the statement is true. No sentence anywhere in the proof
refers to itself, and no diagonal lemma is used — the self-reference has been
replaced by a length comparison.

### The unified picture

Berry, Tarski, Gödel, Chaitin and Turing are five views of one obstruction. Each
takes a totality — all definitions, all truths, all provable sentences, all short
programs, all halting computations — and shows that no member of the totality can
survey it. The reason is always the same: surveying it would let you construct
something that must lie both inside and outside. Berry's version is the one you
can explain at a dinner table, and it is not a lesser member of the family.
