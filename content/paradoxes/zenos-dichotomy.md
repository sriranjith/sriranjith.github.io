---
title: Zeno's Dichotomy Paradox
slug: zenos-dichotomy
alternateNames:
  - The Dichotomy
  - The Racetrack
  - Zeno's Paradox of the Runner
summary: >-
  To cross a room you must first cross half of it, then half of what is left,
  then half of that — an endless list of jobs. Zeno concluded that motion is
  impossible. The steps do add up to a finite total, but whether that fact
  actually answers him is still argued over.
hook: >-
  To cross a room you must first cross half of it, then half of what is left,
  and so on without end. So how does anyone move?
era: ancient
date: c. 450 BCE
year: -450
origin: >-
  One of four arguments against motion by Zeno of Elea, written to defend
  Parmenides' claim that reality is one and unchanging. Zeno's own book is lost;
  the argument survives because Aristotle restated it in order to refute it.
people:
  - zeno-of-elea
  - parmenides
  - aristotle
  - simplicius
domains:
  - philosophy
  - mathematics
  - physics
types:
  - infinity
  - time
nature: apparent-contradiction
difficulty: advanced
status: explained
renown: landmark
interactive: zeno-dichotomy
concepts:
  - Convergent series
  - Limits
  - Infinite divisibility
  - Actual versus potential infinity
  - Supertasks
  - The continuum
relationships:
  - kind: related
    to: achilles-and-the-tortoise
    note: Zeno's other running argument. The Dichotomy divides one journey; the Achilles chains two moving bodies together, but the infinite series is the same.
  - kind: related
    to: hilberts-hotel
    note: Both test whether a completed infinity can be handled without contradiction. Hilbert's answer is that it can, provided you stop expecting it to behave like a large finite number.
  - kind: contrasts-with
    to: sorites-paradox
    note: Both chop a continuous thing into steps. Zeno's steps have exact sizes and the trouble is that there are infinitely many; the sorites' steps are the same size and the trouble is that no one of them matters.
  - kind: related
    to: banach-tarski-paradox
    note: Zeno worried about what happens when you divide space without limit. Banach and Tarski showed that in modern set theory the answer is stranger than he imagined.
  - kind: related
    to: galileos-paradox
    note: Both press on what it means to have infinitely many things all at once, rather than one after another.
references:
  - source: aristotle-physics
    role: primary-source
    locator: "Book VI.9, 239b9–14; VI.2, 233a21–31; VIII.8, 263a4–b9"
    note: The earliest surviving statement of the argument, given only so that Aristotle can answer it.
  - source: plato-parmenides
    role: primary-source
    locator: 127a–128e
    note: Plato's account of what Zeno's lost book was for.
  - source: simplicius-in-physica
    role: primary-source
    note: The sixth-century commentary that preserves what little of Zeno's own wording survives.
  - source: diogenes-laertius-lives
    role: primary-source
    locator: IX.25–29
    note: The life of Zeno, such as it is.
  - source: kirk-raven-schofield-presocratics
    role: academic-reference
    note: Careful about which words are Zeno's and which are Aristotle's.
  - source: barnes-presocratic-philosophers
    role: book
    note: Reconstructs the argument in explicit premise-and-conclusion form and asks whether it is valid.
  - source: salmon-zenos-paradoxes
    role: book
    note: The anthology that shows the twentieth-century debate was not a mopping-up exercise.
  - source: grunbaum-modern-science-zeno
    role: book
    note: The strongest defence of the claim that the modern theory of the continuum really does settle it.
  - source: thomson-1954-tasks
    role: primary-source
    note: The lamp that made "infinitely many tasks in a finite time" a live problem again.
  - source: sep-zenos-paradoxes
    role: encyclopedia
  - source: sep-supertasks
    role: encyclopedia
furtherReading:
  - title: Zeno of Elea — Stanford Encyclopedia of Philosophy
    url: https://plato.stanford.edu/entries/zeno-elea/
    note: John Palmer on the man and the purpose of the arguments, as distinct from the paradoxes themselves.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Stand at one end of a room. You want to reach the door at the other end.

Before you can get all the way there, you have to get halfway. Obviously. So
that is job number one: walk half the room.

Now you are halfway. But before you can reach the door from *here*, you have to
get halfway again — a quarter of the room. That is job number two.

Then half of *that*. Then half of that. There is always a half left over, and it
never runs out. Not after ten jobs, not after a million, not ever. The list of
jobs you have to finish before you touch the door goes on forever.

So here is what a Greek philosopher named Zeno said, about two and a half
thousand years ago, and he was completely serious:

**You can never reach the door. In fact, nothing ever moves anywhere. Motion is
an illusion.**

And then, presumably, he walked home.

## Understand

Zeno's argument has a shape you should be able to see clearly, because
everything afterwards depends on it.

To go from where you are to where you want to be, you must pass through the
midpoint. To reach *that* midpoint, you must pass through the midpoint of the
first half. And so on. Each destination has a new halfway mark in front of it,
so the journey contains infinitely many separate stages.

Zeno's conclusion rests on one extra premise, and it is worth stating out loud
because it is the whole argument:

> **You cannot finish an infinite list of tasks.**

Put those together and motion becomes impossible. Not difficult — impossible.

### Where the argument actually goes wrong

The premise is the problem. It smuggles in an assumption that sounds obvious and
is false: that if there are infinitely many stages, the journey must take
forever.

It does not, because the stages get shorter as fast as they get more numerous.

Suppose the room is 10 metres wide and you walk at a steady 1 metre per second.
The first half takes 5 seconds. The next quarter takes 2.5 seconds. The next
takes 1.25, then 0.625, and so on. Add those times up:

5 + 2.5 + 1.25 + 0.625 + 0.3125 + ...

Add the first ten and you get 9.99 seconds. Add the first twenty and you get
9.99999 seconds. No matter how many you add, you never pass 10 — and you get as
close to 10 as you like. The infinite list of durations has a finite total, and
the total is exactly the 10 seconds that common sense predicted all along.

So the stages are infinite in number and finite in sum. There is no conflict
between "infinitely many steps" and "over and done with in ten seconds",
because the second is what the first adds up to.

### The version Zeno probably meant, which is nastier

Aristotle reports the argument in the direction above — half, then three
quarters, then seven eighths. But there is a mirror image of it, and several
scholars think it is the sharper form.

Run the halving *backwards*. Before you can walk the whole room, you must walk
half. Before you can walk that half, you must walk a quarter. Before *that*, an
eighth. Before that, a sixteenth.

This version does not ask how you finish. It asks how you **start**. There is no
first step to take, because every candidate for "the first bit of the journey"
has a smaller bit that must come before it. The sequence has no beginning at
all.

Summing a series answers the forward version cleanly. The backward version is
harder to shake off, because the thing it says is missing is not a total but a
first member — and no amount of arithmetic supplies one.

The usual modern reply is that the demand for a first step is the mistake. A
continuous motion is not built out of steps at all. It is a smooth assignment of
a position to each moment of time, and the halfway points are things *we* mark
on it afterwards, not things the runner has to do. Whether that is a solution or
a change of subject is exactly what people still argue about.

## Examples

**The distances, written out.** Take the room to be 1 unit wide.

| Stage | Distance covered | Running total | Remaining |
| --- | --- | --- | --- |
| 1 | 1/2 | 0.5 | 0.5 |
| 2 | 1/4 | 0.75 | 0.25 |
| 3 | 1/8 | 0.875 | 0.125 |
| 4 | 1/16 | 0.9375 | 0.0625 |
| 10 | 1/1024 | 0.999023… | 0.000977… |
| 20 | ~1/10⁶ | 0.99999905… | ~0.00000095… |

The running total never equals 1 at any finite stage, and there is no stage at
which it is not still climbing. Its limit is 1 exactly. Those two facts are both
true and are not in tension: "the sum of the whole series" means the limit, not
the result of some last addition.

**The decimal you already believe.** You are perfectly comfortable writing
0.999… = 1, and 1/3 = 0.333…. Both are statements that an unending sum of
positive numbers has an exact finite value. Anyone who accepts recurring decimals
has already accepted the arithmetic that the Dichotomy is supposed to make
impossible.

**A useful thing to notice.** Not every infinite sum behaves. Adding
1 + 1/2 + 1/3 + 1/4 + … — the harmonic series — grows without bound, even though
the terms shrink to nothing. To pass 100 you need more terms than there are atoms
worth counting, but you do get there. So "the terms get small" is not enough on
its own. Zeno's series converges for a specific reason: each term is half the one
before, which is a fast enough shrink. The distinction is real, and it is one of
the things Zeno could not have known.

## Explore

There are three quite different things people mean when they say the Dichotomy is
solved, and they are worth separating.

**One: the arithmetic is not in doubt.** That an infinite series of positive
terms can have a finite sum is a theorem, given rigorous form by Cauchy in the
1820s and Weierstrass later in the century. Nobody disputes it. If Zeno's
argument requires the sum of the sub-distances to be infinite, the argument is
simply unsound.

**Two: whether that is what Zeno's argument requires** is contested. Read the
Dichotomy as a claim about *distance* and the series settles it. Read it as a
claim about *doing things* — each sub-journey is an act, and infinitely many acts
cannot be got through — and the series is beside the point. It shows the
durations sum to ten seconds. It does not, on its own, explain how a task with no
last member gets completed, or how a task with no first member gets begun.

**Three: Aristotle's answer was not the modern one.** He gives two, roughly forty
pages apart, and the second is a retraction of the first.

- In *Physics* VI.2 he says the length and the time to cross it are divisible in
  exactly the same way. If the distance is infinitely divisible then so is the
  hour, and an infinitely divisible distance can be crossed in an infinitely
  divisible time. This is essentially the modern reply, minus the arithmetic.
- In *Physics* VIII.8 he calls that answer inadequate — "a solution sufficient
  as against the questioner, but not adequate to the facts" — and replaces it. A
  line, he says, is not *actually* divided into infinitely many parts. It is
  potentially so divided: the halfway points exist only when someone actually
  makes the division, and you cannot make infinitely many divisions. The runner
  crosses one undivided distance. The infinite stages were never there.

That distinction between actual and potential infinity governed the subject until
Cantor made completed infinities respectable in the 1870s. It is also, awkwardly
for the tidy version of the story, an answer that modern mathematics rejects
rather than vindicates. Contemporary analysis treats the interval as *actually*
containing its infinitely many points. So the standard modern reply does not
extend Aristotle; it takes the position he abandoned.

**Who holds what today.** Adolf Grünbaum (1967) argued that the classical theory
of the continuum, properly applied, disposes of the paradoxes completely,
including the "act" reading. Max Black, writing in *Analysis* in the early 1950s,
took the opposite view: the idea of an "infinity machine" that performs endless
operations is not merely unrealised but incoherent, so summing a series answers
the wrong question. James Thomson (1954) invented a device to make Black's worry
bite, and Paul Benacerraf (1962) showed that Thomson's device does not do what
Thomson claimed. Wesley Salmon's 1970 anthology collects that whole exchange, and
the fact that it was worth collecting is the point: this was a live argument
among careful philosophers three hundred years after Newton.

The honest summary is narrow but firm. **The mathematics is settled and the
metaphysics is not.** Anyone who tells you calculus killed Zeno in the
seventeenth century is telling you something that is true about the sums and
false about the history.

## Deep Dive

### The argument in standard form

Let a runner traverse the interval $[0, 1]$ at constant speed $v$. The Dichotomy
observes that the traversal decomposes into the sequence of sub-intervals

$$\left[0, \tfrac12\right],\ \left[\tfrac12, \tfrac34\right],\ \left[\tfrac34, \tfrac78\right],\ \ldots,\ \left[1 - 2^{-n}, 1 - 2^{-(n+1)}\right],\ \ldots$$

whose lengths are $2^{-(n+1)}$ for $n = 0, 1, 2, \ldots$. Reconstructed as a
valid argument:

1. To traverse $[0,1]$ the runner must traverse every member of this sequence.
2. The sequence has infinitely many members.
3. A process consisting of infinitely many successive members cannot be completed.
4. Therefore $[0,1]$ cannot be traversed.

Premises 1 and 2 are true. Premise 3 is what fails, and everything turns on how
it fails.

### The series

$$\sum_{n=0}^{\infty} 2^{-(n+1)} = \lim_{N \to \infty} \sum_{n=0}^{N} 2^{-(n+1)} = \lim_{N \to \infty}\left(1 - 2^{-(N+1)}\right) = 1$$

At constant speed the corresponding durations are $t_n = 2^{-(n+1)}/v$, and

$$\sum_{n=0}^{\infty} t_n = \frac{1}{v}$$

which is the elementary answer. The partial sums form a strictly increasing
sequence bounded above by $1/v$; by the monotone convergence property of the
reals it has a supremum, and that supremum is the value of the sum. Note that the
limit is not attained by any partial sum. "The runner completes the journey"
corresponds to the limit, not to a final term, and there is no final term.

The regressive form of the argument is the sequence
$\left[2^{-(n+1)}, 2^{-n}\right]$ for $n = 0, 1, 2, \ldots$, ordered by
containment towards $0$. This sequence has order type $\omega^{*}$: it has a last
member but no first. Its lengths sum to $1$ just as before, so convergence is not
the issue. The issue is that the runner's tasks are not well-ordered, and
"perform them in order" has no first instruction. Any resolution of the
progressive form by summation leaves this untouched.

### Supertasks

Thomson (1954) named the completion of an $\omega$-sequence of actions in finite
time a **supertask**, and argued against its possibility with the lamp.

A lamp is off at $t = 0$. It is switched at $t = 1 - 2^{-n}$ for
$n = 1, 2, 3, \ldots$, so the switch is thrown infinitely often before $t = 1$.
What is its state at $t = 1$?

It cannot be on, since every "on" is followed by an "off". It cannot be off, for
the mirror reason. Thomson concluded that the supposition of a completed
supertask is contradictory.

Benacerraf (1962) identified the gap. The specification fixes the lamp's state at
every $t < 1$ and says nothing whatever about $t = 1$. There is no principle
requiring the state at $1$ to be a limit of the states before it — that function
has no limit — so no contradiction is derivable. Thomson's argument establishes
only that the description is incomplete. Thomson later accepted the point.

This exchange is the crux of the modern situation. Benacerraf's reply defends the
*consistency* of supertasks; it does not exhibit a mechanism for them, and the
lamp remains a good demonstration that a convergent series does not by itself
license every conclusion about what happens at the limit point. Later work has
gone in both directions: Pérez Laraudogoitia (1996) constructed Newtonian
particle systems that violate energy conservation through supertask-like
interactions, and Malament–Hogarth spacetimes in general relativity allow an
observer to receive the output of an infinite computation in finite proper time.
The literature is surveyed in the Stanford Encyclopedia entry on supertasks.

### The at-at theory

Russell (1903) proposed, and Salmon developed, the view that removes the "task"
framing entirely. On the **at-at theory**, motion is nothing more than occupying
different positions at different times: a continuous function $x(t)$ from an
interval of times to an interval of positions. There is no additional activity of
"getting from one place to the next", no smallest completed step, and hence no
infinite sequence of achievements to be got through. The runner's being at $1/2$
at one moment and at $3/4$ at another is a fact about the function, not a job the
runner performed.

If motion is at-at, premise 3 is not false so much as ill-formed, since there is
no sequence of acts for it to be about. The at-at theory buys the resolution at a
price: it makes motion a matter of the pattern of positions across time rather
than anything happening at an instant, which many find as counterintuitive as
Zeno's conclusion. That is the trade, and the trade is why this is still a
subject rather than a footnote.

### If space were not continuous

The whole argument presupposes that the interval can be halved indefinitely.
Deny that — posit a smallest indivisible length — and the Dichotomy never begins,
because the sequence of sub-intervals terminates.

The cure is worse than the disease. Hermann Weyl's tile argument (1949) points
out that in a square grid of indivisible cells, the diagonal of an
$n \times n$ square is $n$ tiles long, exactly like each side, so the Pythagorean
relation fails at the fundamental level and no continuous rotation is available.
Ancient atomism ran into a version of the same wall. Zeno's remaining arguments,
particularly the Stadium, appear to have been aimed precisely at the
discrete-space escape route: he seems to have set out a dilemma in which both
horns — continuous space and atomic space — lead to absurdity. Reading the four
motion paradoxes as a coordinated attack on a disjunction rather than as four
unconnected puzzles is a reconstruction, plausible but not documented; Aristotle
does not present them that way.

## History

**What is documented.** Zeno of Elea lived in the Greek colony of Elea, in what
is now Campania in southern Italy, roughly 490 to 430 BCE. He wrote one book. It
is lost. Every word we have of him comes through other people's quotation of it.

Plato's dialogue *Parmenides* (127a–128e) has Zeno describe his own project: the
book was written in his youth as a defence of Parmenides, showing that anyone who
believes in plurality is committed to consequences even more absurd than
Parmenides' monism. That is the best evidence we have for what Zeno was doing,
and it comes from a philosophical dialogue written perhaps eighty years after his
death by an author who was not writing history. The dramatic scene — Zeno at
forty, Parmenides at sixty-five, Socrates very young — may be an invention.

Proclus, writing in the fifth century CE, says the book contained forty
arguments. Nobody knows whether that number is reliable.

The four arguments against motion — the Dichotomy, the Achilles, the Arrow and
the Stadium — are known **only** from *Physics* VI.9, where Aristotle summarises
each in a sentence or two before refuting it. He is a hostile witness working
from a text he has read and we have not. His name for the first one, "the
dichotomy", is the name it still carries.

Around a dozen verbatim lines of Zeno survive, all quoted by the Neoplatonist
Simplicius in his commentary on the *Physics* in about 540 CE — roughly a
thousand years after Zeno wrote. Every one of those quoted lines belongs to the
arguments against **plurality**, not against motion. There is no surviving
sentence of Zeno's own on the Dichotomy. What we have is Aristotle's paraphrase
of it and the commentators' paraphrases of Aristotle.

**What is tradition.** Diogenes Laërtius (IX.26–27) reports that Zeno joined a
conspiracy against a tyrant, was tortured, and bit off his own tongue and spat it
at the man. He gives several mutually inconsistent versions, with different
tyrants. It is a good story and there is no reason to believe any particular
version of it.

**What happened afterwards.** The paradoxes were discussed continuously in the
Greek commentary tradition — Themistius, Philoponus, Simplicius — and again by
medieval writers on the continuum. Pierre Bayle's *Dictionnaire historique et
critique* (1697) put them back in front of a modern audience, and their pressure
is visible in Hume and in Kant's antinomies of infinite divisibility.

The mathematics arrived in the nineteenth century, not the seventeenth. Newton
and Leibniz computed with infinitesimals that they could not justify; Cauchy in
the 1820s and Weierstrass afterwards replaced them with limits defined by
inequalities, and Cantor from the 1870s made completed infinite collections a
legitimate object of study. Only then did "an infinite sum with a finite value"
become a precise statement rather than a suggestive one.

Bertrand Russell, in *The Principles of Mathematics* (1903), called Zeno's
arguments "immeasurably subtle and profound" and complained that posterity had
treated him unjustly. The twentieth-century argument then reopened, with Max
Black, James Thomson, Paul Benacerraf and Adolf Grünbaum disagreeing sharply
about whether the new mathematics answered the old question — a dispute collected
in Wesley Salmon's 1970 anthology and not concluded there.

## Why It Matters

**It forced infinity to be defined.** For two thousand years, mathematics
followed Aristotle in refusing to treat an infinite collection as a completed
object. As late as 1831 Gauss wrote to Schumacher that he protested "against the
use of an infinite magnitude as something completed, which is never permissible
in mathematics". Zeno is a large part of why that caution existed, and the
machinery eventually built to answer him — limits, convergence, the rigorous
continuum — is the foundation of calculus as it is actually taught and used
today. The epsilon-delta definition of a limit is, historically, an answer to
Zeno.

**It is the cleanest example of a bad premise hiding in plain sight.** Every step
of the Dichotomy is obviously true except one, and the false one — that an
infinite sequence of stages cannot be got through — is the step nobody notices
because it never gets stated. Arguments fail this way constantly. Zeno's is the
canonical case because the conclusion is so plainly false that you know in
advance a premise must go, which turns the exercise into a pure hunt for the
unstated assumption.

**It made the structure of space and time an open question rather than an
assumption.** Whether space is infinitely divisible is not something that can be
settled by looking. Zeno turned it into a question with consequences, and it has
stayed one: the same question is live in quantum gravity, where several
programmes posit a shortest meaningful length.

**It gave philosophy a genuinely unresolved technical problem.** The supertask
literature, running from Thomson in 1954 to work on relativistic computation
today, exists because the Dichotomy would not stay solved. That is unusual. Most
ancient paradoxes are studied for what they reveal about their authors; this one
is still generating papers about physics.

## Modern Relevance

**Zeno behaviour in hybrid systems.** In control theory and formal verification, a
hybrid automaton exhibits *Zeno behaviour* when it takes infinitely many discrete
transitions in a finite time interval. The standard example is a bouncing ball
whose bounces converge on a finite instant. This is not a metaphor or a naming
joke: a simulator hitting a Zeno point will loop forever making infinitesimal
progress, and model checkers for timed automata must explicitly exclude Zeno runs
before they can certify anything. Zeno's argument became an engineering failure
mode.

**Numerical computation.** Every iterative algorithm is a Dichotomy: infinitely
many steps that must be stopped somewhere. Whether the sequence converges, how
fast, and whether the limit is the answer you wanted are the daily questions of
numerical analysis, and the difference between a geometric series and a harmonic
one is the difference between a routine that terminates usefully and one that
does not.

**The quantum Zeno effect.** Misra and Sudarshan (1977) showed that a quantum
system measured sufficiently often can be prevented from decaying — repeated
observation freezes the state. They named it after Zeno's Arrow, and the effect
has since been observed experimentally in trapped ions and other systems. The
connection is an analogy rather than a resolution of anything, but it is a real
physical effect that carries his name.

**Rendering and level-of-detail.** Any system that keeps subdividing until the
subdivisions fall below a threshold — adaptive mesh refinement, recursive ray
tracing, progressive image loading — is running the Dichotomy deliberately and
relying on convergence to make it terminate. The reason such algorithms work is
exactly the reason the runner reaches the door.
