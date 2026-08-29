---
title: Gödel's Incompleteness Theorems
slug: godels-incompleteness
alternateNames:
  - The Incompleteness Theorems
  - Gödel's First and Second Incompleteness Theorems
summary: >-
  Any consistent set of rules rich enough to describe arithmetic contains true
  statements it cannot prove — and cannot prove its own consistency. A precise
  theorem about formal systems, and the most misquoted result in mathematics.
hook: >-
  In any system of arithmetic strong enough to be useful, there are true
  statements it can never prove. Including this one.
era: twentieth-century
date: 1931
year: 1931
origin: >-
  Proved by Kurt Gödel in Vienna and published in 1931, aimed directly at the
  system of Whitehead and Russell's Principia Mathematica and at Hilbert's
  programme for securing the foundations of mathematics.
people:
  - kurt-godel
  - david-hilbert
  - bertrand-russell
  - j-barkley-rosser
  - alfred-tarski
  - alan-turing
domains:
  - logic
  - mathematics
  - computer-science
  - philosophy
types:
  - self-reference
  - knowledge
  - computation
nature: impossibility-result
difficulty: expert
status: resolved
renown: landmark
concepts:
  - Gödel numbering
  - Diagonal lemma
  - Effective axiomatisation
  - Omega-consistency
  - Rosser sentence
  - Consistency statements
  - Hilbert's programme
relationships:
  - kind: influenced-by
    to: russells-paradox
    note: >-
      Russell's paradox is why Gödel had a target. It forced mathematicians to
      replace informal set theory with explicit formal systems such as Principia
      Mathematica, and only once a system of proof is a precisely specified object
      can you prove theorems about what it cannot do. Gödel also reused Russell's
      method: assume the object exists, apply it to itself, derive a contradiction.
      His paper names Principia in its title.
  - kind: influences
    to: halting-problem
    note: >-
      Turing recast incompleteness as uncomputability in 1936. A system that could
      decide every arithmetical sentence would decide whether any given machine
      halts, so incompleteness follows from undecidability and, in the other
      direction, an effective complete theory of arithmetic would solve the halting
      problem. The diagonal step is the same in both proofs; Turing replaced the
      self-referential sentence with a machine fed its own description.
  - kind: related
    to: cantors-diagonal-argument
    note: >-
      Gödel's numbering makes syntax arithmetical so that Cantor's diagonal move
      can be run inside arithmetic itself.
  - kind: contrasts-with
    to: liar-paradox
    note: >-
      Gödel supplied the blueprint and then removed the poison. The Liar sentence
      is inconsistent and has no subject matter beyond itself; the Gödel sentence
      is a perfectly consistent claim about whole numbers, reducible to the
      assertion that a particular Diophantine equation has no solutions. Swapping
      "false" for "unprovable" turns an antinomy into a theorem.
references:
  - source: godel-1931
    role: primary-source
    locator: "Theorem VI; Theorem XI"
    note: The original paper. Theorem VI is the first theorem; Theorem XI states the second.
  - source: rosser-1936
    role: paper
    note: Weakens the hypothesis from omega-consistency to plain consistency.
  - source: van-heijenoort-1967
    role: book
    note: The standard English translation, with Kleene's introductory note.
  - source: smullyan-godels-incompleteness-theorems
    role: book
    note: The compact rigorous modern treatment.
  - source: franzen-2005-godels-theorem
    role: book
    note: The authority on what the theorems do and do not imply. Cited throughout the misuse section.
  - source: tarski-truth-1956
    role: primary-source
    note: The undefinability of truth, the companion result Gödel came close to stating.
  - source: lucas-1961-minds-machines-godel
    role: paper
    note: The original mind-beats-machine argument, included as the source of a claim rather than an endorsement.
  - source: benacerraf-1967-god-devil-godel
    role: paper
    note: The classic refutation of that argument.
  - source: penrose-1994-shadows
    role: book
    note: The best-known modern version of the Lucas argument, and widely rejected by logicians.
  - source: sep-godel-incompleteness
    role: encyclopedia
furtherReading:
  - title: The Gödel Editorial Project and the Collected Works
    url: https://plato.stanford.edu/entries/goedel/
    note: Overview of Gödel's life and full body of work, including the 1951 Gibbs lecture.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Imagine a machine that prints sentences about numbers.

It is a very good machine. It never lies. Every sentence it prints is true —
"7 is prime", "every even number bigger than two is the sum of two odd numbers
in at least one way", whatever it can establish. It runs forever, and you could
check its work step by step if you had the patience. Nothing it prints is ever
wrong.

The obvious question is whether it will eventually print *every* true sentence
about numbers. Given infinite time, does it get them all?

Now do something sneaky. Look at the machine, work out exactly how it operates,
and write down this sentence:

> **"This machine will never print this sentence."**

Then hand it to the machine and ask whether it is true.

Think about what happens if the machine prints it. Then the machine has printed a
sentence saying it will never print that sentence — so the machine has printed
something false. But our machine never prints falsehoods. So it cannot print it.

And that means the sentence is **true**. The machine really will never print it.

So there it is: a true sentence about numbers, sitting in front of you, that this
truthful machine can never produce. And the trap is not about this machine. Build
a better one, and you can write the same sentence about the better one.

In 1931 a twenty-five-year-old logician in Vienna showed how to write that
sentence entirely in the language of ordinary arithmetic — no mention of
machines, no cheating, just numbers. Then he proved something worse. The machine
cannot even print the sentence "I never print falsehoods."

## Understand

### What a "formal system" is

The theorems are about formal systems, so start there.

A formal system is a game with three parts: a fixed alphabet of symbols, a fixed
list of **axioms** (starting statements assumed without proof), and fixed
**rules of inference** for getting new statements from old ones. A proof is a
finite chain from axioms to a conclusion, each link licensed by a rule.

The crucial feature is that all of this is **mechanical**. Checking whether a
proposed proof is valid requires no insight, no taste and no intuition. A clerk
following instructions, or a computer, can do it. That is what makes the system
an object mathematics can study rather than a description of how people think.

Euclid's geometry is roughly like this. So is the set theory that mathematicians
use today. So was *Principia Mathematica*, the enormous system Russell and
Whitehead built to derive mathematics from logic after Russell's paradox
destroyed the earlier attempt.

The dream, championed above all by David Hilbert in the 1920s, was to find one
such system that was:

- **Consistent** — it never proves both a statement and its denial.
- **Complete** — for every statement in its language, it proves either the
  statement or its denial. Nothing is left undecided.
- **Provably consistent by its own modest means** — so that the whole edifice
  could be certified safe using reasoning nobody could doubt.

Gödel showed that no system meeting some very mild conditions can be both
consistent and complete, and that no consistent such system can certify its own
consistency.

### The first theorem, in plain words

> Take any formal system that is (a) **effectively axiomatised** — a machine can
> recognise its axioms, (b) **consistent**, and (c) **strong enough to do basic
> arithmetic** with addition and multiplication of whole numbers. Then there is a
> statement about numbers that the system can neither prove nor disprove — and
> that statement is true.

The three conditions are not decoration. Every one of them is doing work, and
almost every misuse of the theorem comes from ignoring one of them. Take them in
turn.

**Effectively axiomatised.** There must be a mechanical way to tell whether
something is an axiom. Drop this and the theorem fails immediately: simply take
as your axioms *every true statement about numbers*. That collection is
consistent and complete. It is also useless, because there is no procedure for
recognising its members — which is another way of saying you cannot use it to
find out anything you did not already know.

**Consistent.** An inconsistent system proves everything, including every truth,
so it is trivially complete. Completeness is only valuable alongside consistency,
and Gödel's theorem says you cannot have both.

**Strong enough for arithmetic.** The system must be able to express and prove
enough basic facts about whole numbers, addition and multiplication. Not much is
needed — a very weak fragment suffices — but something is. Systems below that
threshold escape the theorem entirely, and some important ones do. This is the
condition most often forgotten, and it is why the theorem does not apply to
"any system of rules" in the loose sense.

### How the sentence is built

Gödel's insight was to make a formal system talk about itself using nothing but
arithmetic.

He assigned a number to every symbol, then to every string of symbols, then to
every sequence of strings — so every formula and every proof gets its own unique
number, recoverable from the number alone. This is **Gödel numbering**, and
today it is unremarkable: it is exactly what a computer does when it stores a
program as a file of bytes.

The payoff is that statements *about* proofs turn into statements *about numbers*.
"The sequence of formulas coded by $p$ is a valid proof of the formula coded by
$s$" is a purely arithmetical relationship, and a mechanically checkable one. A
system that can do arithmetic can therefore express its own notion of proof.

Once a system can say "there is no number that codes a proof of ...", Gödel
showed how to build a sentence **G** that says, correctly and entirely in
arithmetic:

> *G is not provable in this system.*

Then reason it through. If the system proved G, then G would be false, and a
consistent system proving something false about numbers is a system whose
arithmetic is broken. So the system does not prove G. But that is precisely what
G says. **G is true, and unprovable.**

There is no sleight of hand and no appeal to English self-reference. G is a
concrete arithmetical statement — with some work it can be reduced to a claim
that a particular Diophantine equation has no solutions. It is about numbers. It
just happens also to describe the system.

### The second theorem

The second theorem is the deeper of the two and it follows from formalising the
argument above inside the system.

The reasoning "if this system is consistent, then G is unprovable" is elementary,
and elementary reasoning can be carried out inside the system itself. So the
system proves: *if I am consistent, then G*. Now suppose the system could also
prove *I am consistent*. Then it could chain the two and prove G — which the
first theorem says it cannot. Therefore:

> **No consistent, effectively axiomatised system that can do enough arithmetic
> can prove its own consistency.**

This is what ended Hilbert's programme in its original form. The plan had been to
use a small, unimpeachable, finitary part of mathematics to prove that the whole
of mathematics is safe. But the small part is contained in the whole, and the
whole cannot vouch for itself, so the small part certainly cannot.

### What this does not mean

Because the next sentence out of most people's mouths is wrong, say it now.

Gödel's theorems do not say mathematics is broken, that truth is a matter of
opinion, that human beings are cleverer than computers, or that nothing can be
known. They say something specific and precise about a specific and precise kind
of object. Arithmetic did not become unreliable in 1931. It is worth being blunt
about this, and the Explore section below goes through the standard misuses one
at a time.

## Examples

**The three hypotheses, and systems that fail them.**

| System | Effectively axiomatised? | Enough arithmetic? | Complete? |
| --- | --- | --- | --- |
| Propositional logic | Yes | No | Yes — and decidable |
| First-order logic (validity) | Yes | — | Complete, by Gödel's own 1929 theorem |
| Presburger arithmetic (addition only) | Yes | No multiplication | **Yes — complete and decidable** |
| Real closed fields / Euclidean geometry | Yes | No integers definable | **Yes — complete and decidable** |
| Robinson arithmetic Q | Yes | Just barely enough | No |
| Peano arithmetic | Yes | Yes | No |
| ZFC set theory | Yes | Yes | No |
| The set of all true arithmetical sentences | **No** | Yes | Yes, but unusable |

Two rows deserve attention. **Presburger arithmetic**, the theory of the whole
numbers with addition but without multiplication, was shown complete, consistent
and decidable by Mojżesz Presburger in 1929 — two years before Gödel. **Real
closed fields**, and with them elementary Euclidean geometry, were shown complete
and decidable by Tarski. These are not toys; Tarski's result covers a substantial
body of classical geometry, and Presburger arithmetic is used in real compilers
and verification tools. Multiplication of integers is what opens the door, because
multiplication is what lets you encode sequences and therefore syntax.

**Statements actually independent of Peano arithmetic.** G is deliberately
artificial. But there are natural mathematical statements PA cannot decide:

- The **Paris–Harrington theorem** (1977), a strengthened finite Ramsey theorem,
  is true but unprovable in PA.
- **Goodstein's theorem** (Kirby and Paris, 1982) — every Goodstein sequence
  eventually reaches zero, despite growing astronomically first — is true and
  unprovable in PA.

Both are proved by stepping up to a system that can handle ordinals beyond
$\varepsilon_0$. They demonstrate that incompleteness is not confined to
self-referential curiosities.

**A related but different phenomenon.** The continuum hypothesis is independent of
ZFC, shown by Gödel (1938) and Cohen (1963). This is often lumped together with
incompleteness, but the mechanism is different: it is proved by constructing
models of ZFC in which CH holds and models in which it fails, not by
diagonalisation. Independence and incompleteness are relatives, not twins.

## Explore

### What the theorems actually cost

The honest summary of the damage: Hilbert's programme, as stated, is
unachievable. There is no finitary consistency proof for arithmetic from within
arithmetic.

But mathematics carried on, and the reason is instructive. In 1936 Gerhard
Gentzen proved the consistency of Peano arithmetic using transfinite induction up
to the ordinal $\varepsilon_0$ — reasoning that is not finitary in Hilbert's
sense, but is otherwise entirely constructive and unobjectionable. Consistency
proofs exist; they just have to use methods the target system does not contain.
Modern proof theory measures the strength of theories by exactly this: the
smallest ordinal needed to prove them consistent. Gödel's theorem did not close
the subject. It created it.

### The misuses

Gödel's theorems are the most misappropriated results in mathematics. Torkel
Franzén's *Gödel's Theorem: An Incomplete Guide to Its Use and Abuse* (2005) is
the standard reference for sorting the legitimate applications from the rest, and
the corrections below follow his treatment.

**Misuse 1: "Gödel showed that truth is subjective, or that there are no absolute
truths."**

This inverts the theorem. Gödel's argument *depends* on a robust notion of
arithmetical truth: the whole content of the first theorem is that G is **true**
and unprovable in the system. If truth were relative or merely conventional, the
theorem would have nothing to state. Gödel himself was a mathematical Platonist
who regarded arithmetical facts as entirely objective, and read his own result as
evidence that mathematical truth outruns any particular formalism — the opposite
of relativism.

Nor does the theorem reach beyond formal systems of arithmetic. It says nothing
about ethics, aesthetics, literary interpretation, physics or theology, because
none of those are consistent effectively axiomatised systems that interpret
arithmetic. Invoking Gödel to license a claim that "every system has blind spots"
is a metaphor, not an inference, and it borrows credibility it has not earned.

**Misuse 2: "Gödel proved that human minds can do what machines cannot."**

This is the Lucas–Penrose argument, put forward by J. R. Lucas in 1961 and
extended by Roger Penrose in *The Emperor's New Mind* (1989) and *Shadows of the
Mind* (1994). The claim is that a machine is some formal system F, that F cannot
prove its Gödel sentence $G_F$, but that we humans can *see* that $G_F$ is true —
so we are not that machine, and by generality not any machine.

Logicians have rejected it near-unanimously, on several independent grounds.

*The theorem is conditional, and machines get the conditional too.* What is
actually established is "**if** F is consistent, **then** $G_F$ is true". A human
does not obtain $G_F$ unconditionally either. And F itself can prove that
conditional — the second incompleteness theorem is exactly the formalisation of
it. So there is no step the human takes that the machine cannot.

*Consistency is not free.* To assert $G_F$ outright you must first know that F is
consistent. For an arbitrary large formal system we have no such knowledge; deep
systems have turned out inconsistent before, Frege's being the famous case. The
argument needs the human to know the consistency of the machine she is being
compared to, and offers no account of how.

*Self-knowledge is the sticking point.* If a human is a machine, the argument
requires her to identify which machine, and to establish that machine's
consistency. The second incompleteness theorem says a consistent system cannot do
the latter for itself. The Gödelian argument therefore presupposes an ability
that Gödel's own theorem denies.

The critical literature is extensive: Hilary Putnam (1960), Paul Benacerraf's
"God, the Devil, and Gödel" (1967), Solomon Feferman's reply to Penrose (1996),
George Boolos, Stewart Shapiro and Franzén have all made versions of these
objections. Penrose's later formulations attempt to evade them; the consensus
among logicians is that they do not.

Gödel's own position is more careful than either camp usually reports. In his 1951
Gibbs lecture he drew a **disjunction**: either the human mind infinitely surpasses
any finite machine, *or* there exist absolutely undecidable Diophantine problems.
He regarded the disjunction as established and was explicit that he had not proved
which disjunct holds.

**Misuse 3: "Gödel's theorem applies to every formal system."**

It does not, and the counterexamples are important rather than obscure.

- **Propositional logic** is complete and decidable.
- **First-order logic itself is complete.** This is Gödel's *completeness*
  theorem of 1929 — every logically valid first-order sentence is provable. It is
  a different theorem from the incompleteness theorems and is constantly confused
  with them. The two are consistent with each other because they concern different
  things: validity in all models, versus truth in the intended model of arithmetic.
- **Presburger arithmetic** — the whole numbers with addition, order and zero, but
  no multiplication — is consistent, complete and decidable (Presburger, 1929).
- **Real closed fields**, and Tarski's axiomatisation of elementary Euclidean
  geometry, are complete and decidable. Substantial classical mathematics lives
  here.
- Any system that is not effectively axiomatised escapes the theorem, as does any
  system too weak to represent computable functions.

So "no system can be complete" is false as stated. The correct statement carries
its hypotheses with it, and the hypotheses are where the content lives.

**A short list of further false inferences.** None of the following follows from
the theorems: that we can never know whether mathematics is consistent (Gentzen's
proof exists, and relative consistency results abound); that artificial
intelligence is impossible; that the universe is not computable; that God exists,
or does not; that scientific theories must be incomplete; that any sufficiently
complex organisation, legal code or social system is subject to Gödelian limits.
The last of these is the commonest and the emptiest — legal systems are not
consistent effectively axiomatised theories interpreting arithmetic, and the
theorem has no purchase on them whatever.

### What legitimately follows

Set against all that, the genuine consequences are substantial:

- Hilbert's programme in its original form cannot be completed.
- Any effectively axiomatised extension of arithmetic is incomplete, so there is
  no final axiomatisation of mathematics; adding G as an axiom produces a new
  system with a new unprovable sentence.
- Arithmetical truth is not arithmetically definable (Tarski), and the set of
  arithmetical truths is not computably enumerable.
- The consistency of a strong theory can only be established from a stronger one,
  which gives proof theory its measuring stick.
- Hilbert's tenth problem is unsolvable (Matiyasevich, 1970, building on Davis,
  Putnam and Robinson): there is no algorithm deciding whether an arbitrary
  Diophantine equation has integer solutions.

## History

**1900.** Hilbert presented twenty-three problems in Paris. The second asked for a
proof of the consistency of the axioms of arithmetic.

**1910–1913.** Whitehead and Russell published *Principia Mathematica*, a
formalisation of mathematics designed to be immune to Russell's paradox.

**1920s.** Hilbert's programme took shape: formalise mathematics completely, then
prove that formal system consistent using only finitary, concrete reasoning about
finite strings of symbols. In 1928, at the Bologna congress, Hilbert posed the
completeness of arithmetic as an open problem and expected the answer to be yes.
His view was that in mathematics there is no *ignorabimus* — no question that must
remain unanswered.

**1929.** Gödel proved, in his doctoral dissertation, the **completeness** theorem
for first-order logic. Hilbert's programme looked healthy.

**September 1930, Königsberg.** At a conference on the foundations of mathematics,
Gödel mentioned almost in passing, during a round-table discussion, that he had
found true but unprovable arithmetical propositions. Almost no one present grasped
what he had said. John von Neumann did. He sought Gödel out afterwards, and
shortly after independently derived the second theorem — only to find Gödel had
already got there. Hilbert delivered his famous "wir müssen wissen, wir werden
wissen" address in the same city, days later.

**1931.** *Über formal unentscheidbare Sätze der Principia Mathematica und
verwandter Systeme I* appeared in *Monatshefte für Mathematik und Physik*, volume
38, pages 173–198. Gödel was twenty-five. The "I" in the title anticipated a
second part, giving the full proof of the second theorem; it was never written,
because the result was accepted quickly enough to make it unnecessary. In footnote
14 Gödel remarks that any epistemological antinomy — the Liar, Richard's paradox —
could be used to construct a similar proof.

**1936.** J. Barkley Rosser removed the technical blemish. Gödel's original proof
needed **omega-consistency** — a condition stronger than consistency, ruling out a
system that proves each of $\varphi(0), \varphi(1), \varphi(2), \dots$ while also
proving that some number fails $\varphi$. Rosser replaced Gödel's sentence with
one saying, in effect, "for every proof of me there is a shorter proof of my
negation", and obtained incompleteness from plain consistency alone. The
statement of the first theorem in every modern textbook is Rosser's.

**1936.** Alan Turing, and independently Alonzo Church, settled Hilbert's
Entscheidungsproblem in the negative. Turing's route — defining a machine model,
then proving no machine decides halting — recast incompleteness as a fact about
computation and made it far more intuitive.

**1936.** Gentzen's consistency proof for Peano arithmetic by transfinite
induction to $\varepsilon_0$.

**1955.** Martin Löb proved the theorem that generalises the second theorem: if a
system proves "if I prove $\varphi$ then $\varphi$", it already proves $\varphi$.
Robert Solovay's completeness theorem for provability logic (1976) showed that the
whole arithmetical behaviour of provability is captured by a simple modal logic,
GL.

**1977–1982.** Paris–Harrington and Kirby–Paris produced natural combinatorial
statements independent of PA, answering the long-standing objection that
incompleteness only afflicted artificial sentences.

## Why It Matters

**It ended a specific programme and started a discipline.** Hilbert's plan to
secure mathematics once and for all could not be carried out. In its place came
proof theory, which measures how strong a theory must be to prove another's
consistency, and which is now a working branch of mathematics rather than a
philosophical hope.

**It made the limits of mechanical reasoning a mathematical subject.** Before
1931, questions about what could be proved in principle were philosophy. Gödel
made them theorems. Five years later Turing did the same for computation, and
computer science was founded on the result. The line from Gödel numbering to the
stored-program computer is short and direct: encoding a program as data, so that
programs can operate on programs, is exactly Gödel's move.

**It changed what mathematicians expect.** The idea that every well-posed
mathematical question has a determinate answer reachable from agreed axioms is
gone. When a problem resists, "perhaps it is independent of ZFC" is now a serious
hypothesis, and has been the right answer more than once — for the continuum
hypothesis, for Whitehead's problem in group theory (Shelah, 1974), and for a
growing list of others.

**It is a permanent lesson in reading hypotheses.** More than any other theorem,
this one is invoked by people who have not checked whether its conditions hold.
Learning why Presburger arithmetic escapes it, and why a legal code is not a
formal system, teaches something more broadly useful than the theorem itself: a
result is exactly as strong as its assumptions, and no stronger.

## Modern Relevance

**Program verification.** Every tool that proves programs correct — Coq, Lean,
Isabelle, Dafny, TLA+ — lives inside the constraints Gödel identified. None can
verify its own soundness. In practice this is handled socially and
architecturally: small trusted kernels, independent re-implementations,
cross-checking between systems. The 2024 machine-checked proof of the consistency
of Quine's New Foundations is a good illustration of the pattern, and of its
limits.

**Decidable fragments in real software.** Because full arithmetic is undecidable
but Presburger arithmetic is not, compilers and static analysers deliberately
restrict themselves to decidable theories. SMT solvers such as Z3 and CVC5 are
built out of exactly these fragments — linear integer arithmetic, arrays,
bitvectors, uninterpreted functions — and their capability boundaries are drawn
along the lines Gödel's hypotheses mark out. This is the incompleteness theorem
functioning as an engineering constraint rather than a philosophical remark.

**Machine learning and self-evaluation.** Gödel is regularly invoked in
discussions of whether an AI system can fully model or verify itself. Most such
invocations are loose, but one narrow point survives: a formal system cannot
prove its own soundness, so any architecture whose safety argument routes through
complete self-verification has a structural problem rather than an engineering
one. Everything beyond that — claims that the theorems bound machine intelligence,
or show that understanding is non-computational — falls under the Lucas–Penrose
objections above.

**Blockchain and distributed consensus.** Systems that must agree on their own
validity rules, and cryptographic schemes that must certify their own security,
face self-reference issues of a Gödelian flavour. The formal results that actually
apply are usually FLP impossibility or the halting problem rather than
incompleteness, but the family resemblance is real and the intellectual lineage is
identical.

## Deep Dive

Throughout, let $F$ be a formal theory in the language of arithmetic that is
consistent, effectively axiomatised (its set of axioms is computably enumerable),
and interprets a sufficiently strong base theory — Robinson arithmetic $Q$
suffices. Write $\ulcorner \varphi \urcorner$ for the Gödel number of $\varphi$
and $\overline{n}$ for the numeral denoting $n$.

### Gödel numbering

Assign a distinct positive integer to each primitive symbol. Code a finite
sequence $\langle a_1, \dots, a_k \rangle$ as

$$2^{a_1} \cdot 3^{a_2} \cdot 5^{a_3} \cdots p_k^{a_k}$$

with $p_k$ the $k$-th prime. Unique factorisation makes decoding unambiguous.
Formulas are sequences of symbols; proofs are sequences of formulas; both get
numbers.

The essential fact is that the syntactic predicates so induced — "$n$ codes a
well-formed formula", "$n$ codes an axiom", "$p$ codes a proof of the formula
coded by $s$" — are all **primitive recursive**, because checking them requires
only bounded search through the factorisation. Gödel establishes 45 such relations
in sequence in the 1931 paper, culminating in $\mathrm{Prf}_F(p, s)$.

Every primitive recursive relation is **representable** in $Q$: there is a formula
$\mathrm{Prf}_F(x, y)$ such that for all $m, n$,

$$\text{if } \mathrm{Prf}_F(m,n) \text{ holds then } F \vdash \mathrm{Prf}_F(\overline{m}, \overline{n})$$
$$\text{if it fails then } F \vdash \neg \mathrm{Prf}_F(\overline{m}, \overline{n})$$

Define the provability predicate

$$\mathrm{Prov}_F(y) \; :\equiv \; \exists x \, \mathrm{Prf}_F(x, y)$$

This is $\Sigma_1$, and only $\Sigma_1$ — its truth is witnessed by a single
number. That asymmetry between the decidable $\mathrm{Prf}$ and the merely
semi-decidable $\mathrm{Prov}$ is where incompleteness comes from.

### The diagonal lemma

> **Diagonal Lemma.** For every formula $\psi(x)$ with one free variable there is
> a sentence $\sigma$ such that
> $$F \vdash \sigma \leftrightarrow \psi(\ulcorner \sigma \urcorner)$$

*Proof.* Let $\mathrm{sub}(n, m)$ be the primitive recursive function returning the
Gödel number of the result of substituting the numeral $\overline{m}$ for the free
variable in the formula coded by $n$. Let $S(x, y, z)$ represent it in $F$. Put

$$\theta(x) \; :\equiv \; \forall z \, \big( S(x, x, z) \rightarrow \psi(z) \big)$$

and let $q = \ulcorner \theta \urcorner$. Set $\sigma :\equiv \theta(\overline{q})$.
Then $\ulcorner \sigma \urcorner = \mathrm{sub}(q, q)$, and the representability of
$\mathrm{sub}$ gives $F \vdash \sigma \leftrightarrow \psi(\ulcorner\sigma\urcorner)$.
$\square$

No self-reference has been assumed. It has been *constructed*, from substitution
alone. This lemma is the technical heart of the whole area: it also yields
Tarski's undefinability theorem (apply it to $\neg\mathrm{True}(x)$) and Löb's
theorem.

### The first theorem

Apply the diagonal lemma to $\psi(x) :\equiv \neg\mathrm{Prov}_F(x)$. This gives a
sentence $G$ with

$$F \vdash G \leftrightarrow \neg \mathrm{Prov}_F(\ulcorner G \urcorner)$$

$G$ says of itself that it is unprovable.

**Unprovability of $G$ (needs only consistency).** Suppose $F \vdash G$. Then some
$m$ codes a proof, so $\mathrm{Prf}_F(m, \ulcorner G\urcorner)$ holds, and by
representability $F \vdash \mathrm{Prov}_F(\ulcorner G \urcorner)$. But then by the
equivalence $F \vdash \neg G$, contradicting consistency. So $F \nvdash G$.

**Unprovability of $\neg G$ (needs more).** Since $F \nvdash G$, no number codes a
proof of $G$, so $F \vdash \neg\mathrm{Prf}_F(\overline{n}, \ulcorner G \urcorner)$
for every $n$. If $F$ were also to prove $\neg G$, it would prove
$\mathrm{Prov}_F(\ulcorner G\urcorner)$, that is $\exists x\,\mathrm{Prf}_F(x, \ulcorner G\urcorner)$,
while refuting each instance. That is exactly a failure of **$\omega$-consistency**.
Gödel therefore assumed $\omega$-consistency for this half.

**Rosser's improvement (1936).** Let $\mathrm{Prf}^{\neg}_F(x,y)$ say that $x$
codes a proof of the negation of the formula coded by $y$, and diagonalise on

$$\psi(y) \; :\equiv \; \forall x \, \big( \mathrm{Prf}_F(x, y) \rightarrow \exists z \le x \; \mathrm{Prf}^{\neg}_F(z, y) \big)$$

The resulting Rosser sentence $R$ says "for any proof of me there is a proof of my
negation with a smaller code". Both $F \vdash R$ and $F \vdash \neg R$ now lead to
contradiction using **plain consistency** only, because the bounded quantifier
$\exists z \le x$ makes the relevant checks decidable. This is the modern form:

> **First Incompleteness Theorem (Gödel–Rosser).** If $F$ is consistent,
> effectively axiomatised and interprets $Q$, then $F$ is incomplete: there is a
> sentence $\sigma$ with $F \nvdash \sigma$ and $F \nvdash \neg \sigma$.

**Truth.** $G$ is true in the standard model $\mathbb{N}$, because it asserts
something — the non-existence of a proof — that we have just established. $G$ is
$\Pi_1$, so its truth is a genuinely arithmetical fact, and by the MRDP theorem
(Matiyasevich, 1970) it is equivalent to the unsolvability of some explicit
Diophantine equation. The unprovable sentence can be written as a polynomial
equation with no integer roots.

### The second theorem

Formalise consistency as

$$\mathrm{Con}(F) \; :\equiv \; \neg \mathrm{Prov}_F(\ulcorner 0 = 1 \urcorner)$$

The proof of the first half of the first theorem is elementary and can be carried
out inside $F$, yielding

$$F \vdash \mathrm{Con}(F) \rightarrow \neg\mathrm{Prov}_F(\ulcorner G \urcorner), \quad \text{hence} \quad F \vdash \mathrm{Con}(F) \rightarrow G$$

If $F \vdash \mathrm{Con}(F)$ then $F \vdash G$, contradicting the first theorem.

> **Second Incompleteness Theorem.** If $F$ is consistent, effectively axiomatised
> and interprets a sufficient base theory, then $F \nvdash \mathrm{Con}(F)$.

Making "the proof formalises" precise requires the **Hilbert–Bernays–Löb
derivability conditions** on $\mathrm{Prov}_F$:

1. If $F \vdash \varphi$ then $F \vdash \mathrm{Prov}_F(\ulcorner\varphi\urcorner)$.
2. $F \vdash \mathrm{Prov}_F(\ulcorner\varphi\urcorner) \rightarrow \mathrm{Prov}_F(\ulcorner\mathrm{Prov}_F(\ulcorner\varphi\urcorner)\urcorner)$.
3. $F \vdash \mathrm{Prov}_F(\ulcorner\varphi \rightarrow \chi\urcorner) \rightarrow (\mathrm{Prov}_F(\ulcorner\varphi\urcorner) \rightarrow \mathrm{Prov}_F(\ulcorner\chi\urcorner))$.

These hold for PA and stronger theories but need more than $Q$, which is why the
second theorem has slightly heavier hypotheses than the first.

**Intensionality — an important caveat.** The second theorem is sensitive to *how*
consistency is expressed. Feferman (1960) showed that there are formulas which
extensionally define the axiom set of $F$ but for which the corresponding
"consistency statement" *is* provable in $F$. Nothing is wrong with the theorem;
the moral is that $\mathrm{Con}(F)$ must be built from a natural, canonical
presentation of the axioms. "$F$ cannot prove its own consistency" is therefore
shorthand for a claim about a properly constructed provability predicate.

### Löb's theorem and provability logic

Löb (1955) generalised the second theorem:

$$\text{If } F \vdash \mathrm{Prov}_F(\ulcorner\varphi\urcorner) \rightarrow \varphi, \text{ then } F \vdash \varphi$$

Taking $\varphi := 0=1$ recovers the second theorem. Abstracting
$\mathrm{Prov}_F$ into a modal operator $\Box$, the derivability conditions plus
Löb's theorem axiomatise the modal logic **GL** (Gödel–Löb): normal modal logic K
plus $\Box(\Box\varphi \to \varphi) \to \Box\varphi$. Solovay (1976) proved
arithmetical completeness — GL proves exactly the schemata valid under every
arithmetical interpretation of $\Box$ as provability in PA. The behaviour of
provability is thus completely characterised by a decidable modal logic, an
elegant closing of the circle.

### Where the boundary sits

The theorem needs $F$ to represent all computable functions, which requires
multiplication as well as addition. Remove it and the theorem lapses:

- **Presburger arithmetic** $(\mathbb{N}, +, <, 0, 1)$: complete, decidable
  (Presburger 1929). Doubly exponential lower bound on decision time (Fischer and
  Rabin, 1974), so decidable is not the same as cheap.
- **Skolem arithmetic** $(\mathbb{N}, \times)$: multiplication without addition is
  also decidable.
- **Real closed fields** $(\mathbb{R}, +, \times, <)$: complete and decidable
  (Tarski), by quantifier elimination. The integers are not definable in it, which
  is precisely why coding fails.
- **Algebraically closed fields** of fixed characteristic: complete.

Adding *both* addition and multiplication over $\mathbb{N}$ is what makes sequence
coding possible, and sequence coding is what makes a theory able to talk about its
own syntax. That single step is the whole difference between a decidable theory
and an incomplete one, and it is the sharpest available answer to the question of
what the theorems are really about.
