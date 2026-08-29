---
title: The Halting Problem
slug: halting-problem
alternateNames:
  - Turing's Halting Problem
  - Undecidability of the Halting Problem
summary: >-
  No program can look at any other program and always correctly say whether it
  will finish running or loop forever. Turing proved it in 1936 by building a
  program that does the opposite of whatever it is told about itself.
era: twentieth-century
date: "1936"
year: 1936
origin: >-
  Proved by Alan Turing in "On Computable Numbers, with an Application to the
  Entscheidungsproblem", as the step needed to answer Hilbert's question about
  whether mathematics could be mechanised.
people:
  - alan-turing
domains:
  - computer-science
  - logic
  - mathematics
types:
  - self-reference
  - computation
  - knowledge
nature: impossibility-result
difficulty: advanced
status: resolved
concepts:
  - Decidability
  - Diagonalisation
  - Self-reference
  - Universal Turing machine
  - Reduction
  - Rice's theorem
  - Sound but incomplete analysis
relationships:
  - kind: influenced-by
    to: cantors-diagonal-argument
    note: >-
      Turing's proof is Cantor's diagonal move transplanted from sets of numbers
      to machines: list every program, then build the one that differs from
      entry $n$ at position $n$.
  - kind: influenced-by
    to: godels-incompleteness
    note: >-
      Gödel got there first, in 1931, with a sentence that says "I am not
      provable". Turing replaced the arithmetised self-reference with a machine
      that reads its own description, and got a limit on computing rather than
      on proving.
  - kind: related
    to: liar-paradox
    note: >-
      The contradictory machine is the Liar sentence made executable — it halts
      exactly when it does not halt.
  - kind: related
    to: berrys-paradox
    note: >-
      Berry's "the smallest number not nameable in under sixty letters" is the
      informal shape of Chaitin's theorem, which follows from the halting
      problem: no program can compute the shortest description of an arbitrary
      string.
  - kind: related
    to: two-generals-problem
    note: >-
      Both are impossibility results about computers, but they bite for
      different reasons: one about what a single machine can compute at all, the
      other about what two machines can come to know together.
references:
  - source: turing-1936-computable-numbers
    role: primary-source
    locator: "§8"
    note: The original diagonal argument, stated for circle-free machines.
  - source: rice-1953-classes
    role: paper
    note: The generalisation — every non-trivial property of program behaviour is undecidable.
  - source: sep-turing-machines
    role: encyclopedia
    note: On the gap between what Turing wrote and what textbooks now attribute to him.
  - source: sipser-theory-of-computation
    role: book
    note: The standard modern presentation, including proof by reduction.
furtherReading:
  - title: The Church-Turing Thesis (Stanford Encyclopedia of Philosophy)
    url: https://plato.stanford.edu/entries/church-turing/
    note: Why "no algorithm can do this" is a claim about algorithms in general and not only about Turing machines.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Imagine a magic box called **Oracle**.

You feed Oracle two things: a computer program, and the input you want to run it
on. Oracle thinks for a while and then lights up one of two lamps. **FINISHES**
means the program will eventually stop. **FOREVER** means it will run until the
end of time.

Oracle is never wrong and never gets stuck. It would be the most useful gadget
ever built. Every frozen app, every spinning wheel of death, gone.

Now let us build one more program. Call it **Spite**.

Spite takes a program, and the very first thing it does is ask Oracle: "This
program, run on *itself* — does it finish?"

If Oracle says FINISHES, Spite starts counting and never stops.
If Oracle says FOREVER, Spite immediately stops.

Spite is easy to build. It is just a phone call to Oracle and then a very short
tantrum.

So now feed Spite to itself.

Oracle has to answer. Suppose it says FINISHES — then Spite, hearing that, runs
forever. Oracle was wrong. Suppose it says FOREVER — then Spite stops right
away. Oracle was wrong again.

There is no third lamp.

## Understand

The trap has nothing to do with Oracle being badly built, or slow, or short of
memory. Any Oracle at all can be handed a Spite, and Spite is built out of
nothing but Oracle plus an if-statement. So the fault has to be in the very idea.

**There is no general procedure that decides, for every program and every input,
whether that program will eventually stop.** This is Alan Turing's result from
1936, and it was the first thing anyone proved that a computer definitively
cannot do.

Two features of computing make the trap possible.

**Programs are data.** A program is a file. A file is a string of symbols. So a
program can be handed to another program as ordinary input — this is why
compilers, interpreters and virus scanners exist at all. Turing's deepest
contribution in the same 1936 paper was the *universal machine*: one fixed
machine that reads a description of any other machine and imitates it. Once you
have that, self-reference is not a trick. It is Tuesday.

**A decider must always answer.** Oracle is required to come back with a verdict
on every input, in finite time. That requirement is what Spite attacks. You can
weaken it and escape immediately: a program that just *runs* the input and
reports "finished" when it does is perfectly possible. It simply never reports
"never finishes", because to do that it would have to wait forever. Half the
problem is easy. It is the guaranteed answer that is impossible.

### What this does not mean

This is the point most often mangled, so it is worth stating flatly.

**It does not say you cannot tell whether a particular program halts.** Of
course you can, constantly. `print("hello")` halts. `while true: pass` does not.
Both facts are obvious and provable. Enormous classes of programs have their
halting behaviour settled by a glance, by a compiler, or by a short proof.

The claim is about *one algorithm covering all cases*. There is no single
procedure that works for every program without exception. Any particular
procedure you write will have programs it cannot judge — but which programs
those are depends on the procedure, and someone else's procedure will handle
them fine.

Compare: there is no formula for the roots of every polynomial of degree five
using radicals, yet nobody thinks quintics are unsolvable one at a time. The
impossibility is uniform, not local.

**It does not say the answer is unknowable, or fuzzy, or a matter of opinion.**
Every program either halts on a given input or it does not. The fact is
perfectly definite. It is only the *deciding* that cannot be mechanised.

**It does not mean analysis tools are futile.** The practical response, which
the software industry uses every day, is to give up completeness and keep
soundness. A tool answers "definitely halts", "definitely loops", or **"I don't
know"**. That third answer is where all the impossibility gets parked, and it
turns an impossible problem into a routinely useful one.

## Examples

**A program nobody can currently judge.** Start with any positive whole number.
If it is even, halve it. If it is odd, triple it and add one. Repeat, and stop
if you ever reach 1.

Starting from 27, this bounces up as high as 9,232 and takes 111 steps before it
settles. Does it stop for *every* starting number? Nobody knows. That is the
Collatz conjecture, open since the 1930s. A working Oracle would answer it in an
instant, along with a great many other unsolved problems that can be phrased as
"does this search ever terminate?".

That is a good way to feel the weight of the theorem. Oracle would not be a
handy debugging tool. It would be a machine that settles mathematics.

**Halting questions in disguise.** Each of these is undecidable in general, and
each reduces to the halting problem:

| Question about a program | Why it is the halting problem again |
| --- | --- |
| Will it ever crash? | Make crashing the thing that happens exactly when the original halts. |
| Are these two programs equivalent? | Compare a program against one that trivially loops. |
| Is this line of code ever reached? | Put the line after the code whose halting you care about. |
| Does it ever leak memory? | Same construction. |
| Is this file a virus, on every possible input? | Fred Cohen proved this undecidable in 1987. |

**The one honest escape.** Restrict the language. A program that has no
unbounded loops and no recursion always terminates, and you can check that
syntactically. Proof assistants such as Coq and Agda do exactly this: they
enforce that every function is total, and pay for it by not being
Turing-complete. Spreadsheet formulas, regular expressions and SQL without
recursive queries all live in this safe territory. The theorem is unavoidable
only if you insist on a language that can express everything.

## Explore

The interesting arguments about the halting problem are not about whether it is
true. It is a theorem with a four-line proof. They are about what it licenses
people to say.

**"Real computers are finite, so the theorem does not apply."** Technically
correct and practically worthless. A machine with $n$ bits of memory has $2^n$
states; if it runs longer than that it must have repeated a state, and therefore
loops forever. So halting *is* decidable for a fixed finite machine. Now count:
a laptop with 16 GB of RAM has about $2^{137{,}438{,}953{,}472}$ states. The
decision procedure exists, and would need more time than the universe has
offered and more tape than there are atoms. Model checkers exploit exactly this
finiteness for small, carefully bounded systems, and hit the wall — the state
explosion problem — the moment the system grows. Finiteness converts an
impossible problem into an intractable one, which is not much of a rescue.

**"So humans can do something machines cannot."** This is the Lucas–Penrose
argument, in the halting problem's clothing: since we can "see" the truth that
the machine cannot decide, minds must exceed mechanism. The standard objection,
pressed by Hilary Putnam, Judson Webb and others, is that the argument quietly
assumes we are *consistent* and that we know our own program. Show a human the
same construction with themselves in the Oracle role, and they fare no better.
Nobody has produced a human capable of deciding halting in general, so the
premise the argument needs has never been demonstrated. The debate is live in
philosophy of mind, and essentially closed in computer science.

**Where the impossibility actually sits.** Not in loops, not in recursion, not
in complexity. It sits in the combination of *universality* and *totality*. A
system rich enough to simulate itself cannot also contain a total predicate
describing its own behaviour. That sentence, with the nouns changed, is also
Gödel's theorem, also Tarski's undefinability of truth, and also Russell's
paradox. They are one phenomenon seen from four angles.

**Sound versus complete.** Every practical program analyser picks a side and
lives with the loss.

- **Sound but incomplete** — never says "safe" about something unsafe, but
  refuses to bless some safe programs. This is what type checkers, the Rust
  borrow checker, Astrée and abstract interpretation do. The cost is false
  alarms and rejected-but-fine code, which developers experience as the compiler
  being annoying.
- **Complete but unsound** — flags every real problem but also claims problems
  that are not there, or misses none in principle while approximating in
  practice. Most bug-finding linters sit here in spirit.
- **Neither, deliberately** — heuristic tools tuned so the false-positive rate
  is low enough that engineers keep using them. Most commercial static analysis
  is here, by choice.

The halting problem is what makes "sound *and* complete *and* always
terminating" a mathematical impossibility rather than an engineering backlog
item. Knowing that stops teams from chasing a tool that cannot exist.

## Deep Dive

### Setting up

Fix a programming formalism — Turing machines will do — and an encoding $\langle
M \rangle$ of each machine $M$ as a finite string. Encodings are effective:
given the string you can simulate the machine, which is what Turing's universal
machine $U$ does, satisfying

$$U(\langle M \rangle, w) \simeq M(w)$$

where $\simeq$ means the two either both diverge or both converge to the same
result.

Define the language

$$\mathrm{HALT} = \{\, \langle M \rangle \# w : M \text{ halts on input } w \,\}$$

The claim is that $\mathrm{HALT}$ is **undecidable**: no total machine outputs
$1$ on members and $0$ on non-members.

### The proof

Suppose, for contradiction, that some machine $H$ decides it. So $H$ halts on
every input and

$$H(\langle M \rangle, w) = \begin{cases} 1 & \text{if } M \text{ halts on } w \\ 0 & \text{otherwise} \end{cases}$$

Construct $D$ ("diagonal", the machine called Spite above). On input $\langle M
\rangle$:

1. Run $H(\langle M \rangle, \langle M \rangle)$ — feed the machine its own
   description as input.
2. If the answer is $1$, enter an infinite loop.
3. If the answer is $0$, halt.

$D$ is a legitimate machine: it is $H$ with three extra instructions, and $H$
was assumed to always halt, so step 1 always finishes. Now run $D$ on $\langle D
\rangle$:

$$D \text{ halts on } \langle D \rangle \iff H(\langle D\rangle,\langle D\rangle) = 0 \iff D \text{ does not halt on } \langle D \rangle$$

A contradiction with no escape route. The only assumption was the existence of
$H$, so $H$ does not exist. $\square$

Note what the proof does *not* need: no claim about how fast $H$ runs, how much
memory it uses, or how it is implemented. It needs only that $H$ is a total
computable function of the pair. That generality is why the result is so
robust — it survives every model of computation anyone has proposed, which is
the empirical content of the Church–Turing thesis.

### Why this is Cantor's diagonal argument

Lay out an infinite table. Rows are machines $M_1, M_2, M_3, \dots$ in some
effective enumeration; columns are inputs, also enumerated, so that column $i$
is $\langle M_i \rangle$. Put $1$ in cell $(i, j)$ if $M_i$ halts on input $j$.

Cantor, in 1891, took a purported list of all infinite binary sequences and
built a new sequence by walking the leading diagonal and flipping every bit. The
new sequence differs from row $i$ at position $i$, for every $i$, so it was not
on the list.

Turing does precisely this. $D$ walks the diagonal — cell $(i,i)$ is "does $M_i$
halt on its own description?" — and flips it. If $D$ were on the list, say $D =
M_k$, then $D$'s behaviour on input $k$ must differ from $M_k$'s behaviour on
input $k$, which is its own. Cantor's conclusion is that the list was
incomplete. Turing's list, however, *is* complete: every machine is on it,
because the enumeration is of all finite strings. So the flipping operation
itself must be the impossible thing, and the flipping operation is exactly $H$.

Same diagonal, different conclusion drawn from it. Cantor concluded that the
reals outnumber the naturals. Turing, with an enumeration he could not deny,
concluded that the diagonal is not computable. Cantor's theorem also gives a
counting argument for free: there are countably many programs and uncountably
many functions from $\mathbb{N}$ to $\{0,1\}$, so almost every function is
uncomputable. The halting problem's value is that it names a specific, useful,
natural one.

### Why this is Gödel's theorem

Kurt Gödel's 1931 incompleteness theorems came five years earlier and use the
same engine: coding a system's own syntax inside the system, then constructing a
sentence that refers to itself. Gödel's $G$ asserts its own unprovability;
Turing's $D$ enacts its own non-halting.

The connection can be made exact. Halting is expressible in arithmetic: "machine
$M$ halts on $w$" is a $\Sigma_1$ sentence, saying there exists a finite
computation history ending in a halt state. Now suppose you had a sound,
complete, effectively axiomatised theory $T$ of arithmetic. You could decide
halting: enumerate proofs from $T$, and for each pair $(M,w)$ wait until you
find either a proof of "$M$ halts on $w$" or a proof of its negation. Since $T$
is complete one must appear, and since $T$ is sound it is correct. That would
decide $\mathrm{HALT}$ — impossible. Therefore no such $T$ exists.

That is a complete proof of the first incompleteness theorem, taking the halting
problem as given. Turing said as much in 1936: his target was Hilbert's
*Entscheidungsproblem*, the question of whether there is a mechanical procedure
to decide the validity of any first-order sentence. Since one could encode
halting into first-order logic, the answer is no. Alonzo Church had reached the
same conclusion months earlier by way of the lambda calculus; Turing's machine
model is why his version is the one taught.

Where Gödel had produced a strange, artificial, self-referential sentence that
mathematicians could dismiss as a curiosity, Turing produced an ordinary,
practically motivated question — will this thing stop? — with the same
unsolvability. That reframing is what made the limit feel real.

### Rice's theorem: the generalisation

Henry Gordon Rice proved in 1953 that the halting problem is not a special
awkward case but a sample of the general situation.

Call a property of programs **semantic** if it depends only on the function the
program computes, not on how the code is written, and **non-trivial** if some
computable function has it and some does not. Then:

> **Rice's theorem.** Every non-trivial semantic property of programs is
> undecidable.

So there is no decider for "this program computes the identity function", "this
program ever outputs 7", "this program is equivalent to that one", "this program
computes a total function", or "this program never dereferences a null pointer".
All of it, gone in one theorem.

The proof is a reduction. Let $P$ be a non-trivial semantic property, and
assume without loss of generality that the always-undefined function lacks $P$
(otherwise work with the complement). Pick some machine $M_P$ whose function has
$P$. Given an arbitrary $\langle M \rangle$ and $w$, build $N$ that on input $x$
first simulates $M$ on $w$, and then, if that ever finishes, runs $M_P(x)$. If
$M$ halts on $w$, then $N$ computes the same function as $M_P$ and so has $P$;
if not, $N$ computes the always-undefined function and lacks $P$. A decider for
$P$ would therefore decide halting. $\square$

Two boundaries are worth keeping straight, because they are where practical
tools live:

- **Syntactic properties are fine.** "Does the source contain a `goto`?", "is
  the file under 500 lines?", "does the type checker accept it?" — all decidable,
  because they are properties of the text, not of the function.
- **Approximations are fine.** Rice forbids an exact decider. It says nothing
  against a procedure that answers correctly on the programs you care about and
  says "unknown" elsewhere.

### Degrees of unsolvability

Undecidability is not one thing. $\mathrm{HALT}$ is *recursively enumerable*:
you can list its members by dovetailing simulations, though you can never
conclude non-membership. Its complement is not. Relativising the construction —
giving a machine an oracle for $\mathrm{HALT}$ and asking about halting for
*those* machines — yields $\mathrm{HALT}'$, strictly harder, and iterating gives
the Turing jump hierarchy $\emptyset, \emptyset', \emptyset'', \dots$. Emil Post
asked in 1944 whether anything sits strictly between the decidable sets and
$\mathrm{HALT}$; Richard Friedberg and Albert Muchnik independently showed in
1956–57 that there is, by an infinite-injury priority construction.

The busy beaver function $\Sigma(n)$ — the largest number of $1$s any halting
$n$-state machine writes — grows faster than any computable function, since a
computable bound on it would decide halting for $n$-state machines. $\Sigma(5) =
4098$ was settled by a distributed collaborative proof in 2024. $\Sigma(6)$ is
known to exceed $10 \uparrow\uparrow 15$, and $\Sigma(748)$ is independent of
ZFC set theory: a machine of that size searches for a contradiction in ZFC, so
knowing whether it halts would settle ZFC's consistency. The halting problem
does not merely outrun our algorithms; past a certain size it outruns our axioms.

## History

**1900 and 1928.** David Hilbert put the foundations of mathematics on the
agenda, and at the 1928 International Congress asked for a definite procedure
that would decide the validity of any statement of first-order logic — the
*Entscheidungsproblem*, the decision problem. He expected the answer to be yes.
His stated conviction was that in mathematics there is no *ignorabimus*, no
question we shall never answer.

**1931.** Kurt Gödel published the incompleteness theorems, showing that any
consistent, effectively axiomatised theory strong enough for arithmetic contains
true sentences it cannot prove, and cannot prove its own consistency. Hilbert's
programme was already in serious trouble, but the *Entscheidungsproblem* stood
open, because nobody had a general definition of "definite procedure" to argue
about.

**1935–36.** Supplying that definition was the real work, and three people did
it independently. Alonzo Church, at Princeton, proposed the lambda calculus and
published the undecidability of the *Entscheidungsproblem* in April 1936. Emil
Post, in New York, described a very similar machine model. Alan Turing, a
24-year-old fellow of King's College, Cambridge, wrote his paper without
knowledge of Church's and had to add a note when it appeared.

**1936.** "On Computable Numbers, with an Application to the
Entscheidungsproblem" was read to the London Mathematical Society on 12 November
1936 and printed in the volume dated 1936, with a correction following in 1937.
Turing defines automatic machines, constructs the universal machine, proves by
diagonalisation that no machine can decide whether a given machine is
*circle-free* — his term for a machine that goes on printing digits forever, so
his undecidable question is closer to "does it loop?" than "does it halt?" — and
then derives the negative answer to Hilbert. The modern halting formulation is a
later tidying-up, and the name is usually credited to Martin Davis, who used it
in *Computability and Unsolvability* (1958).

**Why Turing's version won.** Church got there first and Post got there
independently, but Turing's model is the one that convinced people, Gödel
included, that the informal notion of "mechanical procedure" had been correctly
captured. The reason is the machine itself: a tape, a head, a finite table of
rules, and a defensible analysis of what a human clerk following instructions
could possibly do. Gödel had resisted Church's lambda calculus as a definition;
he accepted Turing's, and called the analysis of computability that resulted "a
kind of miracle".

**1953.** H. G. Rice proved the general theorem in his doctoral work, published
in the *Transactions of the American Mathematical Society*, extinguishing any
hope that halting was a lone pathological case.

## Why It Matters

**It ended a programme and started a field.** Hilbert's ambition of reducing
mathematics to a mechanical procedure was finished by Gödel and Turing together.
But in building the argument, Turing had to define computation precisely — and
the definition, not the negative result, is what the twentieth century ran on.
The stored-program computer, the compiler, the interpreter, the virtual machine
and the operating system are all the universal machine in hardware. Turing
invented the general-purpose computer while proving what it could not do.

**It draws a permanent line under software verification.** The dream of a button
labelled "check my program for bugs" is not waiting on faster hardware or better
engineers. It is provably unavailable. Everything the industry has built
instead — type systems, testing, fuzzing, contracts, model checking, proof
assistants — is a partial workaround chosen with the limit in mind. Knowing
where the wall is has saved an enormous amount of wasted effort, and it explains
the shape of the tools you use daily. When the compiler rejects code you are
certain is fine, you are meeting Rice's theorem in person.

**It gave the field its method.** The reduction — "if I could solve this, I
could solve halting, so I cannot solve this" — became the standard way to prove
a problem hard. The same move, with a resource bound instead of an outright
impossibility, is how NP-completeness works. Undecidability results now turn up
routinely in places far from computer science: Hilbert's tenth problem on
integer solutions to polynomial equations (Matiyasevich, 1970), the word problem
for groups (Novikov and Boone, 1950s), whether a set of tile shapes can cover the
plane, and whether a given context-free grammar is ambiguous.

**It is a fact about self-reference, not about computers.** Any system powerful
enough to model itself faces some version of this. That is why the halting
problem, Gödel's theorem, Tarski's undefinability of truth, Russell's paradox
and the Liar all feel like the same discovery reported in different vocabularies.
They are.

## Modern Relevance

**Static analysis and the "I don't know" answer.** Every serious code analyser
is sound but incomplete by design. The Rust borrow checker rejects programs that
are actually memory-safe, because proving them safe in general is undecidable;
the community's word for the workaround is `unsafe`. Astrée, used on Airbus
flight-control code, proves the absence of runtime errors by over-approximating
program states — it can report a possible error that cannot really occur, and
tuning that false-positive rate is the entire craft. Facebook's Infer, Microsoft's
Static Driver Verifier and Google's ErrorProne all make the same bargain in
different proportions.

**Termination checking in practice.** Microsoft Research's Terminator project
proved termination of real Windows device drivers using ranking functions, which
works precisely because drivers are not adversarial diagonal machines. Modern
Coq, Agda and Lean require every function to be provably total, checked by a
structural-recursion test, and offer escape hatches when the check is too
conservative. The bargain is explicit: give up Turing-completeness, get
guaranteed termination.

**Blockchains meter what they cannot decide.** Ethereum smart contracts run on a
Turing-complete virtual machine, so no validator can predict whether a contract
will terminate. The response is *gas*: every instruction costs, the caller pays
up front, and execution is aborted when the budget runs out. This does not solve
the halting problem — it replaces it with a decidable question, "does it halt
within $n$ steps?", which is answerable by simply running $n$ steps. Cardano's
Plutus and Bitcoin Script go the other way and restrict expressiveness instead.

**Security tooling.** Fred Cohen proved in 1987 that perfect virus detection is
undecidable, which is why antivirus is signatures, heuristics and behavioural
monitoring rather than proof. The same limit is why sandboxing and
least-privilege exist: if you cannot determine what a program will do, constrain
what it is permitted to do.

**AI code analysis.** A large language model reviewing code is a program
inspecting a program, and inherits the limit exactly. It can be enormously
useful on the code people actually write, and it can never be a complete
decider — and unlike a sound analyser, it does not know which case it is in. The
right architecture pairs the model's coverage with a sound checker's guarantees,
letting the model propose and the verifier dispose.

**Where the limit is routinely misapplied.** "The halting problem means we can't
know if this will finish" is almost always wrong about a specific program in a
specific codebase, where the answer is usually obvious. The theorem forbids a
universal decider, not local knowledge. Invoking it to excuse an unanalysable
system is a misuse of one of the few things in this field that is genuinely
settled.
