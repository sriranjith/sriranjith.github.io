---
title: Russell's Paradox
slug: russells-paradox
alternateNames:
  - The Russell–Zermelo Paradox
  - The Set of All Sets That Are Not Members of Themselves
summary: >-
  Collect every set that does not contain itself. Does that collection contain
  itself? Either answer contradicts the other. The question destroyed the leading
  attempt to found mathematics on logic, and forced set theory to be rebuilt.
hook: >-
  Consider the set of all sets that do not contain themselves. Does that set
  contain itself? Either answer is wrong.
era: twentieth-century
date: 1901 (discovered), 1902 (letter to Frege), 1903 (published)
year: 1901
origin: >-
  Found by Bertrand Russell in June 1901 while probing Cantor's proof that no set
  is as large as its own power set, and discovered independently a little earlier
  by Ernst Zermelo in Göttingen.
people:
  - bertrand-russell
  - gottlob-frege
  - ernst-zermelo
domains:
  - logic
  - mathematics
  - philosophy
types:
  - self-reference
  - knowledge
nature: logical-contradiction
difficulty: advanced
status: resolved
renown: landmark
concepts:
  - Unrestricted comprehension
  - Axiom schema of separation
  - Cumulative hierarchy
  - Theory of types
  - Logicism
  - Diagonalisation
relationships:
  - kind: influenced-by
    to: liar-paradox
    note: >-
      The same engine in a different medium. The Liar bends a sentence back onto
      its own truth; Russell bends a set back onto its own membership. Both
      produce a claim that is true exactly when it is false, and Russell said
      explicitly that his contradiction was the ancient Liar wearing mathematical
      clothing.
  - kind: influenced-by
    to: cantors-diagonal-argument
    note: >-
      Russell found the paradox by pointing Cantor's diagonal method at the set
      of all sets. Cantor's theorem says a set's subsets outnumber its members —
      but the set of all sets has all its subsets as members. Chasing that
      collision produced the contradiction.
  - kind: related
    to: berrys-paradox
    note: >-
      Both were published by Russell in the same decade and both were attacked by
      his theory of types, but Ramsey argued in 1925 that they are different
      animals: Russell's is set-theoretic, Berry's is semantic.
  - kind: related
    to: banach-tarski-paradox
    note: >-
      Two sides of one bargain. ZFC's separation axiom is what stops Russell's
      contradiction; ZFC's axiom of choice is what permits a ball to be cut into
      five pieces and reassembled into two.
  - kind: related
    to: hilberts-hotel
    note: >-
      Both are consequences of taking completed infinite collections seriously as
      mathematical objects — one benign and merely startling, the other fatal.
references:
  - source: russell-1902-letter-to-frege
    role: primary-source
    note: The letter of 16 June 1902, and Frege's reply six days later.
  - source: frege-grundgesetze-1903
    role: primary-source
    note: The appendix in which Frege states the contradiction and attempts a repair.
  - source: zermelo-1908-untersuchungen
    role: paper
    locator: "Axiom III (Aussonderung)"
    note: The axiom of separation, which is what actually resolves the paradox.
  - source: russell-1908-types
    role: paper
    note: Russell's own solution, the ramified theory of types.
  - source: rang-thomas-1981
    role: paper
    note: Evidence that Zermelo had the paradox in Göttingen before Russell published.
  - source: van-heijenoort-1967
    role: book
    note: English translations of all the founding documents in one volume.
  - source: sep-russell-paradox
    role: encyclopedia
  - source: sep-type-theory
    role: encyclopedia
    note: How Russell's fix evolved into the type theories behind modern proof assistants.
furtherReading:
  - title: The Early Development of Set Theory (Stanford Encyclopedia of Philosophy)
    url: https://plato.stanford.edu/entries/settheory-early/
    note: Where the paradox sits in the story of how set theory became axiomatic.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Imagine a library that keeps catalogues.

There is a catalogue of poetry books. It is not a poetry book, so it does not
list itself. There is a catalogue of every book in the library — and since that
catalogue is itself a book in the library, it *does* list itself.

So catalogues come in two kinds: the ones that list themselves, and the ones
that do not.

The librarian decides to make one more. She will compile the **Catalogue of All
Catalogues That Do Not List Themselves**. Nothing could be more reasonable. She
works through the shelves, and every catalogue that does not mention itself gets
an entry.

At the end she picks up her pen and stops.

Should she write her own catalogue into her own catalogue?

If she leaves it out, then hers is a catalogue that does not list itself — which
means, by her own rule, it belongs in the list. If she writes it in, then hers is
a catalogue that lists itself — which means it does not belong.

She cannot include it. She cannot leave it out. And this is not a puzzle about
libraries. Replace "catalogue" with "set", and you have the sentence that in
1902 wrecked the greatest attempt ever made to build all of mathematics on the
laws of logic.

## Understand

Around 1900, mathematics had a shining new foundation: **sets**. A set is just a
collection of things. The idea was that every mathematical object — numbers,
functions, shapes, everything — could be built out of sets, and every fact about
them could be proved from a handful of obvious rules about collections.

The most obvious rule of all was this: **any description you can state picks out
a set.** Say "the even numbers" and there is a set of even numbers. Say "the
tall buildings in Paris" and there is a set of them. State a property, get a
collection. Frege built his entire system on a version of this principle, and it
felt as safe as saying that any question has an answer.

Russell asked what happens if you point that rule at itself.

Most sets do not contain themselves. The set of all chairs is not a chair. The
set of all numbers is not a number. Some collections arguably do contain
themselves — the collection of all things that are not chairs is itself not a
chair, so it belongs to itself.

Now form the collection of every set that is **not** a member of itself. Call it
R. The rule says R exists, because you just described it.

Ask the fatal question: **is R a member of R?**

- Suppose R *is* a member of R. But R only contains sets that are not members of
  themselves. So R is not a member of R.
- Suppose R is *not* a member of R. Then R meets the entry requirement exactly,
  so R is a member of R.

Each answer forces its own opposite. This is not a case of a hard question whose
answer we have not yet found. There is no consistent answer available, and no
extra information could produce one.

### Why this was a catastrophe

An ordinary error damages one result. A contradiction damages everything.

In standard logic, once you can prove both a statement and its denial, you can
prove *anything at all* — that 2 + 2 = 5, that every theorem is true, and also
that every theorem is false. Logicians call this explosion. A system containing
Russell's paradox does not merely have a gap in it; it is worthless, because it
proves every sentence indiscriminately.

So mathematics had a genuine emergency. The rule that had to go was the obvious
one: **not every description picks out a set.**

### The repair

The modern fix, due to Ernst Zermelo in 1908, is disarmingly simple. You may no
longer conjure a set out of a description alone. You may only **sift an existing
set**. Given a set you already have, and a property, you may collect the members
of that set with that property.

Watch what this does to Russell's construction. Take any set A you already have,
and sift out its members that are not members of themselves. You get a perfectly
respectable set. Run Russell's argument on it and you do not get a
contradiction — you get a *discovery*: this new set cannot be a member of A.

Since that works for **every** set A, there is no set that everything belongs to.
The paradox stops being a disaster and becomes a theorem: **there is no set of
all sets.**

That is the pattern to remember. The contradiction did not vanish because the
reasoning was wrong. The reasoning was always fine. What changed is the claim it
was aimed at. Under the old rule, the reasoning refuted the whole theory. Under
the new rule, the same reasoning politely refutes the existence of one
over-ambitious collection, and mathematics carries on.

## Examples

**Sets that contain themselves, and sets that do not.**

| Collection | Is it a member of itself? |
| --- | --- |
| The set of all prime numbers | No — a set is not a prime number. |
| The set of all sets with more than three members | Yes — it has far more than three members. |
| The set of all thoughts | Arguably yes, if thinking about it counts. |
| The set of all teaspoons | No. |
| The set of all abstract ideas | Yes — it is an abstract idea. |

Everything in the "No" column belongs in Russell's collection R. The question is
whether R itself goes in the left column or not, and nothing decides it.

**The same shape, in other costumes.**

- *The adjective that describes itself.* Call a word **autological** if it
  describes itself: "short" is short, "English" is English, "polysyllabic" is
  polysyllabic. Call it **heterological** otherwise: "long" is not long, "French"
  is not French. Now — is "heterological" heterological? This is Grelling's
  paradox (1908), Russell's paradox rewritten in adjectives.
- *The village barber.* A barber shaves everyone who does not shave himself, and
  nobody else. Who shaves the barber? Russell used this himself as an
  illustration, but it is a much gentler thing than the real paradox — see
  [the barber paradox](/paradox/barber-paradox/) for exactly why.
- *The form that lists forms.* Government Form 27 must list every form that does
  not list itself. Bureaucracy stops.

**Frege's version.** Frege did not talk about sets but about *extensions of
concepts* — for any concept, the collection of things falling under it. His Basic
Law V said that two concepts have the same extension exactly when the same things
fall under both. Russell's letter did not attack Basic Law V's plausibility; it
simply took the concept *is an extension not falling under its own concept* and
let the law do the rest.

## Explore

The contradiction was never in dispute. What was in dispute — for about thirty
years — was what to give up.

**Russell's answer: stratify the universe.** In the theory of types (1908),
objects live at level 0, sets of objects at level 1, sets of sets of objects at
level 2, and so on. Membership only ever runs from a level to the level directly
above. Under this discipline, "x is a member of x" is not a false statement; it
is not a statement at all, in the way that "the number seven is turquoise" is not
really a statement. The paradox cannot be written down, and so cannot be derived.
The cost is severe: Russell's ramified version needed an extra axiom of
reducibility that almost nobody found plausible, including, eventually, Russell.

**Zermelo's answer: restrict how sets are made.** Separation, described above,
plus later additions from Fraenkel and Skolem, gives ZFC — the theory in which
essentially all mathematics is now formally conducted. It keeps the ordinary
language of sets, does not stratify anything, and simply refuses to hand you a
set until you can show where it came from. This won, decisively, on grounds of
convenience: mathematicians can use ZFC without ever thinking about it.

**Quine's answer: restrict which descriptions count.** New Foundations (1937)
keeps a single universal set — in NF, the set of all sets exists quite happily —
but only permits comprehension for formulas that could be assigned types
consistently. Russell's formula cannot be, so R is never formed. NF was long
suspected of hiding an inconsistency; a consistency proof by Randall Holmes was
machine-checked in the Lean proof assistant in 2024.

**The paraconsistent answer: keep the contradiction.** Graham Priest and other
dialetheists accept that R both is and is not a member of itself, and change the
*logic* instead so that a contradiction no longer proves everything. This is a
serious minority position, not a joke, but it remains very much a minority one.

### The disagreement underneath

Notice that these are not really rival technical fixes. They are rival answers to
a philosophical question: **what makes a collection exist?**

Zermelo's answer is that sets are things you build, in stages, out of sets you
already have — a picture later made explicit as the cumulative hierarchy. Once
you have that picture, separation is not an ad hoc patch to avoid a paradox; it
is a straightforward description of what building sets in stages permits. This is
why the ZFC answer feels like an explanation rather than a dodge, and why most
mathematicians regard the matter as settled rather than merely contained.

Russell's answer is that the trouble comes from *vicious circles* — definitions
that quantify over a totality to which the thing being defined belongs. His
vicious-circle principle is broader than the paradox, and it also forbids
perfectly harmless mathematics, which is where the axiom of reducibility came
from and why the ramified theory did not survive.

One more thing worth being precise about, because it is widely misreported. The
axiom of foundation — which explicitly forbids a set from being a member of
itself — is **not** what resolves Russell's paradox. Separation already does all
the work. Foundation is an optional tidiness axiom, and set theories that replace
it with Peter Aczel's anti-foundation axiom (1988), where sets can perfectly well
contain themselves, are just as consistent as ZFC. Self-membership was never the
disease. Unrestricted set formation was.

## History

**1899–1902.** Ernst Zermelo, working in Hilbert's circle at Göttingen, found the
contradiction independently and apparently first. He discussed it with Hilbert
and Husserl but did not publish it; a note in Husserl's papers dated 1902,
brought to light by Rang and Thomas in 1981, records the argument. Zermelo
acknowledged his independent discovery only in passing, in a footnote in 1908.
For this reason some logicians now call it the Russell–Zermelo paradox.

**June 1901.** Russell, then thirty, was working through Cantor's proof that no
set can be put in one-to-one correspondence with the collection of all its
subsets. The set of all sets ought to be a counterexample, since all its subsets
are already among its members. Chasing the discrepancy, he arrived at the class
of all classes not members of themselves. He later wrote that he at first assumed
he had made some trivial mistake, and spent months looking for it.

**16 June 1902.** Russell wrote to Frege. The letter is short and almost apologetic,
and buries its charge in the middle: it asks whether the predicate *being a
predicate that cannot be predicated of itself* can be predicated of itself, and
observes that either answer yields the other. Frege's *Grundgesetze der
Arithmetik*, the culmination of two decades of work deriving arithmetic from
logic, was in press.

**22 June 1902.** Frege replied within the week. He wrote that Russell's discovery
had astonished him and, he might almost say, left him thunderstruck, because it
had shaken the ground on which he meant to build arithmetic. He grasped
immediately that the problem lay in his Basic Law V.

**1903.** Volume II of the *Grundgesetze* appeared with a hastily written appendix.
Frege opened it by observing that scarcely anything more unwelcome can befall a
scientific writer than to have one of the foundations of his edifice shaken after
the work is finished, and credited Russell by name. He proposed a modification of
Basic Law V. It did not work: Stanisław Leśniewski later showed that Frege's
amended law implies that the universe contains at most one object, a result
published by Sobociński in 1938. Frege eventually abandoned logicism altogether.
He is often described as broken by the episode; what is documented is that he
published little more on the foundations of arithmetic and, late in life,
concluded that the attempt to base arithmetic on logic had failed.

**1908.** The two great responses appeared in the same year — Russell's theory of
types, and Zermelo's axiomatisation of set theory. Grelling's autological/
heterological paradox also appeared in 1908.

**1910–1913.** Russell and Whitehead published *Principia Mathematica*, a
three-volume derivation of mathematics within the theory of types. It reaches the
proposition that 1 + 1 = 2 partway through the second volume. Twenty years later
its title would appear in the title of Gödel's paper.

**1922–1930.** Fraenkel and Skolem added replacement and clarified the notion of a
"definite property" that Zermelo had left informal, producing ZF; with the axiom
of choice it becomes ZFC, still the default foundation of mathematics.

## Why It Matters

**It ended logicism in Frege's form.** The specific programme of deriving all of
arithmetic from self-evident logical laws did not survive, because the law that
looked most self-evident turned out to be false. Anyone tempted to trust an
intuition because it is obvious has a very short, very concrete counterexample
available.

**It made mathematics axiomatic.** Before 1901, set theory was an informal
practice; sets were whatever collections you found yourself needing. After, the
question "which sets exist?" had to be answered by an explicit, finite list of
axioms whose consequences could be checked. That shift — from mathematics as a
body of intuitions to mathematics as a specified formal theory — is the single
largest change in the subject's self-understanding in the modern era, and it is
what made Gödel's theorems possible thirty years later. You cannot prove a theorem
about the limits of a formal system until formal systems exist.

**It gave logic a reusable weapon.** The argument's shape — assume the thing
exists, feed it to itself, derive a contradiction, conclude it does not exist —
is now standard equipment. Cantor's theorem, Turing's proof that no program can
decide halting, Tarski's proof that truth is not definable, and Gödel's
incompleteness theorems all run on it. Russell's paradox is the clearest small
example of a technique that generates most of the known limits on formal
reasoning.

**It set the tone for a century of foundational honesty.** The episode is a model
of how the field responds to being wrong: Frege printed the refutation of his own
life's work in his own book, under his own name, within a year.

## Modern Relevance

**Every proof assistant is a descendant of this problem.** Coq, Lean, Isabelle and
Agda all check mathematical proofs mechanically, and all must guarantee that
their own logic is not Russell's system in disguise. In dependently typed systems
the trap is real and has a name: if you allow the type of all types to be a
member of itself, you get Girard's paradox and can prove anything. The solution
is a hierarchy of type universes — Russell's stratification, alive and running in
production software.

**Object systems and reflection.** Programming languages that let classes be
objects have to answer "what is the class of all classes?" Smalltalk, Python and
Java each resolve it by fiat — a metaclass loop that terminates by declaration
rather than by argument — for essentially Russell's reason: the unrestricted
version cannot be made coherent.

**Databases and the web.** SQL forbids a query from being a first-class value that
queries can range over; XML schema and RDF impose stratification between data and
schema. These are engineering decisions with a logical ancestor.

**Self-referential systems generally.** Any system powerful enough to describe
itself — a compiler that compiles itself, a specification that specifies its own
language, a regulation that governs the making of regulations — inherits the
question of whether it applies to itself. Russell's paradox is the proof that the
question cannot always be waved away.

## Deep Dive

### The derivation

Naive set theory's engine is the **axiom schema of unrestricted comprehension**:
for every formula $\varphi(x)$ of the language,

$$\exists y \, \forall x \, (x \in y \leftrightarrow \varphi(x))$$

Take $\varphi(x) := x \notin x$. The schema gives a set $R$ with

$$\forall x \, (x \in R \leftrightarrow x \notin x)$$

Instantiate the universal quantifier at $x := R$:

$$R \in R \leftrightarrow R \notin R$$

In classical propositional logic $p \leftrightarrow \neg p$ is a contradiction.
No further assumptions are used: no axiom of infinity, no choice, no extensionality.
Any theory proving the comprehension instance for $x \notin x$ is inconsistent.

Frege's Basic Law V is the same schema in the vocabulary of concepts, with
$\hat{\epsilon}F(\epsilon)$ for the extension of $F$:

$$\hat{\epsilon}F(\epsilon) = \hat{\epsilon}G(\epsilon) \leftrightarrow \forall x\,(Fx \leftrightarrow Gx)$$

Together with Frege's other rules this yields a naive extension-forming operator,
and the derivation goes through.

### Why separation is enough

ZFC's **axiom schema of separation** (Aussonderung) restricts comprehension to
subsets of a given set:

$$\forall A \, \exists y \, \forall x \, (x \in y \leftrightarrow (x \in A \wedge \varphi(x)))$$

Fix any set $A$ and let $R_A = \{x \in A : x \notin x\}$. Ask whether
$R_A \in A$.

Suppose $R_A \in A$. Then by the defining equivalence,
$R_A \in R_A \leftrightarrow (R_A \in A \wedge R_A \notin R_A)$, which under the
supposition reduces to $R_A \in R_A \leftrightarrow R_A \notin R_A$ — a
contradiction. Therefore $R_A \notin A$.

Since $A$ was arbitrary, **for every set $A$ there is a set not in $A$**, so

$$\neg \exists U \, \forall x \, (x \in U)$$

The universal set does not exist. The paradox has been converted, with no change
to the reasoning, into a theorem. This is exactly the manoeuvre that makes the
barber puzzle harmless — the difference is that in naive set theory an axiom had
already asserted that the barber exists.

Note also that separation alone would give you nothing at all if no set existed,
which is why ZF separately posits the empty set (or gets it from infinity), and
why the other existence axioms — pairing, union, power set, infinity, replacement
— are each needed. ZFC's design principle is that every set-existence claim is
explicit.

### The cumulative hierarchy

The intended model of ZF is the von Neumann hierarchy, defined by transfinite
recursion on the ordinals:

$$V_0 = \varnothing, \qquad V_{\alpha+1} = \mathcal{P}(V_\alpha), \qquad V_\lambda = \bigcup_{\alpha < \lambda} V_\alpha \ \text{for limit } \lambda$$

and $V = \bigcup_{\alpha \in \mathrm{Ord}} V_\alpha$. Every set enters at a least
stage, its **rank**. Because the members of a set formed at stage $\alpha + 1$ all
lie in $V_\alpha$, every member of a set has strictly smaller rank, and $x \in x$
is impossible in $V$.

This is the picture behind the axiom of foundation:

$$\forall A \, (A \neq \varnothing \rightarrow \exists x \in A \ (x \cap A = \varnothing))$$

Two cautions, both frequently muddled:

1. **Foundation does not resolve Russell's paradox.** Separation does. Foundation
   merely says the cumulative picture is accurate. If you add unrestricted
   comprehension back, foundation will not save you.
2. **Self-membership is not intrinsically pathological.** Aczel's anti-foundation
   axiom (1988) replaces foundation with a principle under which every "graph"
   picture of a set has a unique realisation, so that $\Omega = \{\Omega\}$ exists.
   ZFC minus foundation plus AFA is equiconsistent with ZFC, and is used to model
   non-well-founded phenomena such as bisimulation of processes. What is fatal is
   unrestricted comprehension, not circularity.

Proper classes — the collection of all sets, all ordinals, all groups — are
recovered as *definable predicates* rather than objects. In NBG or Morse–Kelley
they become first-class citizens that are simply forbidden from being members of
anything, which is the same restriction relocated.

### Types

Russell's ramified theory assigns each variable a type and permits $x \in y$ only
when the type of $y$ is one greater than the type of $x$. The string $x \in x$ is
then ill-formed. Ramsey (1926) and Chwistek observed that the ramification — the
extra stratification by *order*, aimed at the semantic paradoxes such as Berry's
and the Liar as well — is unnecessary if one only wants to block the
set-theoretic paradoxes, and simple type theory suffices. Church's simply typed
lambda calculus (1940) is the modern form.

The descendant that matters practically is the universe hierarchy in dependent
type theory. Writing $\mathsf{Type} : \mathsf{Type}$ makes the system
inconsistent — this is **Girard's paradox** (1972), a type-theoretic
reconstruction of the Burali-Forti paradox. Real systems therefore use
$\mathsf{Type}_0 : \mathsf{Type}_1 : \mathsf{Type}_2 : \cdots$, usually with
automatic universe polymorphism so users rarely notice. Lean and Coq both do
this, and both would be unsound without it.

### The general schema

Russell's paradox is one instance of a single fixed-point phenomenon, isolated by
Lawvere (1969) in categorical form: if there is a surjection
$X \to Y^X$, then every endomorphism of $Y$ has a fixed point. Contrapositively,
exhibit a fixed-point-free map on $Y$ and you have proved no such surjection
exists.

Applying this with negation as the fixed-point-free map on truth values gives:

| Instance | The map | What is refuted |
| --- | --- | --- |
| Cantor's theorem | $x \mapsto \{y \in x : y \notin y\}$ | $X$ surjects onto $\mathcal{P}(X)$ |
| Russell's paradox | the same, on a universal set | a set of all sets |
| Tarski's theorem | the Liar sentence | a definable truth predicate |
| Gödel's first theorem | "this is unprovable" | a complete effective axiomatisation |
| Turing's halting theorem | invert the decision | a general halting decider |

Each proceeds by assuming the totality is an object of the kind it collects,
diagonalising, and concluding that it is not. Russell's is the shortest member of
the family, which is why it is the one to keep in your head.

### Consistency

None of this proves ZFC is consistent, and by Gödel's second incompleteness
theorem ZFC cannot prove its own consistency unless it is inconsistent. What can
be said is more modest and still substantial: ZFC has resisted a century of
determined use; the cumulative hierarchy supplies an intuitive picture on which
its axioms are evidently true; relative consistency results tie it to weaker
systems; and the specific argument that killed naive set theory demonstrably
fails against it. That is the honest status of the resolution.
