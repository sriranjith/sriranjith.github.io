---
title: The Two Envelopes Problem
slug: two-envelopes-problem
alternateNames:
  - The Exchange Paradox
  - The Necktie Paradox
  - The Wallet Game
summary: >-
  Two envelopes, one holding twice the other. You pick one, and a short
  calculation says the other is worth 25% more — so you should swap. But the
  same calculation applies to the envelope you just swapped into, and you could
  swap forever.
era: twentieth-century
date: 1953 (Littlewood, crediting Schrödinger), 1989 (envelope form)
year: 1953
origin: >-
  Earliest surviving forms are Maurice Kraitchik's necktie and wallet paradoxes
  and a card version recorded by J. E. Littlewood in 1953, which he credited to
  Erwin Schrödinger. Barry Nalebuff recast it with envelopes in 1989.
people:
  - maurice-kraitchik
  - john-edensor-littlewood
  - erwin-schrodinger
  - barry-nalebuff
domains:
  - probability
  - philosophy
  - economics
types:
  - probability
  - decision-making
  - infinity
nature: apparent-contradiction
difficulty: advanced
status: debated
concepts:
  - Equivocation
  - Improper priors
  - Conditional expectation
  - Sample space selection
  - Infinite expectation
relationships:
  - kind: related
    to: sleeping-beauty-problem
    note: Both are disputes about what a well-posed probability question even is when the prior was never supplied.
  - kind: contrasts-with
    to: monty-hall-problem
    note: In Monty Hall switching genuinely helps; here it cannot — the difference is that Monty's protocol is specified and the envelope-filler's is not.
references:
  - source: littlewood-1953-miscellany
    role: primary-source
    note: The card version, attributed by Littlewood to Erwin Schrödinger — among the earliest records of the argument.
  - source: kraitchik-1953-recreations
    role: primary-source
    note: The necktie and wallet paradoxes, the earliest widely circulated form.
  - source: nalebuff-1989-envelope
    role: paper
    note: The paper that gave the problem its envelopes, its name and its modern statement.
  - source: broome-1995-two-envelope
    role: paper
    note: Constructs a proper prior under which swapping really is favourable at every observed amount.
  - source: chalmers-2002-st-petersburg-two-envelope
    role: paper
    note: Shows the surviving versions of the paradox are St Petersburg problems in disguise.
  - source: nickerson-falk-2006-exchange
    role: paper
    note: Catalogues the published resolutions and analyses why the bad argument is so persuasive.
furtherReading:
  - title: The Exchange Paradox (John D. Norton)
    url: https://sites.pitt.edu/~jdnorton/papers/Exchange_paradox.pdf
    note: A careful treatment of which assumption fails in which version, from a philosopher of physics.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Two envelopes sit on the table in front of you. Both contain money. One holds
exactly **twice as much** as the other, but you have no idea which.

Pick one. Go on. You can keep whatever is inside.

You have it in your hand, unopened. Now someone offers you a swap. Do you take
it?

Obviously not. The envelopes were identical, you chose blind, and swapping is
just picking again. There cannot be an advantage.

Except here is an argument that there is.

Call the amount in your envelope $A$. The other envelope holds either double
that or half of it, and each is equally likely. So on average the other envelope
holds

$$\tfrac12 \times 2A \; + \; \tfrac12 \times \tfrac{A}{2} \; = \; 1.25A$$

**Twenty-five per cent more.** You should swap.

So you swap. And now the envelope in your hand is the one you just reasoned was
better — and by exactly the same argument, the one on the table is worth 25%
more than *it* is. So you should swap back.

And then swap again. Forever. Two identical envelopes, and a proof that you
should keep exchanging them for the rest of your life.

Something in that argument is wrong. Saying precisely what has kept people
arguing since 1953.

## Understand

The calculation looks flawless. Two outcomes, each with probability one half,
multiply and add. Every step is the kind of thing you would do without a second
thought.

The flaw is in the letter $A$.

### One symbol doing two jobs

Write out what $A$ actually means in each half of the calculation.

- In the branch where **the other envelope has $2A$**, your envelope is the
  *smaller* one.
- In the branch where **the other envelope has $A/2$**, your envelope is the
  *larger* one.

Those are different amounts of money. The same symbol $A$ is standing for the
small envelope in one term and the large envelope in the other. It is not a fixed
quantity being carried through a calculation; it is two different quantities
wearing the same name.

This is called an **equivocation**, and it is a very old kind of logical mistake
— the same error as "nothing is better than eternal happiness; a slice of bread
is better than nothing; therefore a slice of bread is better than eternal
happiness." The word "nothing" changes meaning between the premises. Here, $A$
changes meaning between the terms.

### Doing it properly

Name the amounts before you start, not during. Say the two envelopes contain
**$x$ and $2x$**, where $x$ is whatever the smaller amount happens to be.

You picked one at random, so:

- Half the time you hold $x$, and the other envelope holds $2x$. You gain $x$ by
  swapping.
- Half the time you hold $2x$, and the other envelope holds $x$. You lose $x$ by
  swapping.

Average gain from swapping: $\tfrac12(x) + \tfrac12(-x) = 0$.

Zero. Exactly as symmetry demanded. Your envelope is worth $1.5x$ on average, and
so is the other one, because they are the same two envelopes.

The 25% never existed. It was manufactured by letting one symbol drift.

### The second thing that is wrong

There is a deeper problem, and it only becomes visible when you ask where the
"each is equally likely" came from.

The calculation assumes that whatever amount is in your envelope, the other one
is equally likely to be double or half. Not *sometimes* — for **every possible
amount**.

Think about what that requires of whoever filled the envelopes. If seeing £10
must leave you thinking £5 and £20 equally likely, then the pair (£5, £10) must
be exactly as probable as the pair (£10, £20). And the same must hold at £20,
£40, £80, and on up forever. Every amount, however astronomically large, must be
exactly as likely as every other.

**No probability distribution can do that.** A distribution has to add up to one,
and a distribution that is flat over an endlessly increasing sequence adds up to
infinity instead. The belief the argument relies on is not merely unusual — it is
not a possible state of belief at all.

So the paradox rests on a premise that cannot be satisfied by any actual way of
stuffing envelopes. In any real setup, there is *some* amount so large that you
would think "that must be the bigger one", and the symmetry breaks.

### Where it gets genuinely hard

You might now think the problem is finished. It is not quite.

Suppose you **open** your envelope and see a specific amount. Now you really do
have information, and asking whether to swap is a real question with a real
answer — one that depends on what you believe about how the envelopes were
filled. If you see £10, and you think the filler was working with modest sums,
you should probably swap. If you see £10,000, you should probably keep it.

That is unremarkable. What is remarkable is that John Broome showed in 1995 that
you can construct a **perfectly legitimate** way of filling the envelopes under
which swapping is genuinely the better bet **no matter what amount you see**.

That sounds like the paradox coming back, and in a sense it is. The escape is
that any such scheme must have an infinite average payout — it is a
[St Petersburg game](/paradox/st-petersburg-paradox/) in disguise. And when the
average is infinite, "always better on average" stops meaning what you expect it
to mean, because there is no finite average to compare against.

That connection is why this problem is still written about.

## Examples

**Concrete numbers, the honest way.** Suppose the envelopes contain £10 and £20.

| You picked | Probability | Keep | Swap | Gain from swapping |
| --- | ---: | ---: | ---: | ---: |
| £10 | 1/2 | £10 | £20 | +£10 |
| £20 | 1/2 | £20 | £10 | −£10 |
| **Average** | | **£15** | **£15** | **£0** |

Both columns average £15. There is nothing to gain, and the table takes ten
seconds to write.

**The same numbers, done the paradoxical way.** The flawed argument says: "let
$A$ be what I hold; the other envelope averages $1.25A$."

| Branch | The argument says | What $A$ really is | The other envelope really is |
| --- | --- | ---: | ---: |
| Other is double | $2A$ | £10 | £20 |
| Other is half | $A/2$ | £20 | £10 |

Note the third column. The argument's $A$ is £10 in one row and £20 in the other.
Once you write it out, the error is impossible to miss. It is only invisible while
$A$ stays a letter.

**Where does the fake 25% come from?** Compute $1.25A$ using the correct
interpretation. Half the time $A = x$, giving $2x$; half the time $A = 2x$,
giving $x$. The average of those is $1.5x$ — which is also what your own envelope
averages. The formula $1.25A$ is only wrong because $A$ has no single value; the
underlying arithmetic was never in dispute.

**Kraitchik's original: the neckties.** Two men each receive a tie as a gift and
argue about whose cost more. They agree that whoever's tie is cheaper wins the
other's tie. Each reasons: "I might lose my tie, but I might win a more expensive
one, so the bet favours me." Both cannot be right. Same structure, no envelopes,
and Kraitchik printed it without a resolution.

**Littlewood's version, from Schrödinger.** Two players each draw a card and
compare; the lower card wins the other's stake, where the stake is the value of
the card. Each player computes a positive expectation. Littlewood recorded it in
three lines in 1953 and moved on.

**Opening the envelope changes everything.** Suppose you know the filler chose the
smaller amount uniformly from £1, £2, £4, £8, £16 or £32.

| You see | Possible pairs | Should you swap? |
| ---: | --- | --- |
| £1 | (1, 2) only | Yes — certainly |
| £2 | (1, 2) or (2, 4) | Yes — expected gain £0.50 |
| £16 | (8, 16) or (16, 32) | Yes — expected gain £4 |
| £64 | (32, 64) only | No — certainly not |

With a real distribution, the advice varies with what you see, and the *overall*
expected gain from following it is exactly zero. The uniform "always swap" answer
requires an impossible distribution.

## Explore

There are several distinct diagnoses in the literature, and part of what keeps
the problem alive is that they are answers to different versions of it.

**Diagnosis 1: the equivocation.** In the closed-envelope version, $A$ is a
random variable that takes different values in the two branches, so
$\mathbb{E}[\text{other}] = \tfrac12(2A) + \tfrac12(A/2)$ is not a valid
computation of a conditional expectation. This is the standard textbook answer,
and for the closed-envelope problem it is entirely correct. Nickerson and Falk
call this the "same-symbol" error and show experimentally that readers who can
identify it in the abstract still fall for it in the story.

**Diagnosis 2: the impossible prior.** The step "the other envelope is equally
likely to be double or half, whatever I hold" requires a distribution over the
smaller amount satisfying $\pi(a) = \pi(a/2)$ for all $a$ — flat over a geometric
ladder, hence unnormalisable. It is an *improper prior*: a formal object that
behaves like a distribution in some calculations and is not one. Improper priors
are used deliberately and usefully in Bayesian statistics, and this problem is one
of the cleanest demonstrations of what can go wrong when you do.

**Diagnosis 3: the infinite expectation.** Broome's 1995 construction is the
uncomfortable one. Let the smaller amount be $2^{k}$ with probability
$\tfrac13(\tfrac23)^{k}$ for $k = 0, 1, 2, \ldots$ This is a genuine,
normalisable distribution — no impropriety anywhere. And under it, whatever amount
you observe, the expected gain from swapping is strictly positive. The catch is
that the distribution has infinite mean. David Chalmers argued in 2002 that this
makes the surviving paradox a St Petersburg problem: the "always swap" advice is
consistent but vacuous, because there is no finite expectation for it to improve
on.

**Diagnosis 4: it is not a paradox about probability at all.** Some philosophers,
John Norton among them, argue that the puzzle is best read as a demonstration of
what happens when you apply an inference rule outside its domain of validity —
closer to a division-by-zero error than to a genuine tension in probability
theory. On this view "the paradox" is a family of distinct mistakes that happen to
produce the same sentence.

**What everyone agrees on.** No proper prior makes swapping favourable in the
closed-envelope case. Symmetry settles it: your envelope and the other are
exchangeable random variables, so they have the same expectation whenever an
expectation exists. Any argument concluding otherwise contains an error, and the
only interesting question is which one.

**The randomised-switching result.** A genuinely surprising fact, due to Thomas
Cover, and one that is not a fallacy. Suppose you open your envelope, see $a$,
and use this rule: draw a threshold $T$ from any probability distribution with
support on the whole positive line, and swap if $a < T$. Then your probability of
ending up with the larger envelope is **strictly greater than 1/2**, for any pair
of amounts the filler might have chosen. You cannot beat the envelopes on
expected money, but you can beat them on the probability of getting the better
one.

**Why "debated".** The mathematics of the closed-envelope case is settled and has
been for decades. What remains contested is which diagnosis is the *right* one,
whether the open-envelope Broome–Chalmers version constitutes a live paradox or a
solved curiosity, and what the whole thing tells us about the legitimacy of
improper priors in inference. Papers are still published on it.

## Deep Dive

### The flawed calculation, stated formally

Let $X$ be the amount in your envelope and $Y$ the amount in the other. The
argument runs:

$$\mathbb{E}[Y] = \tfrac12(2X) + \tfrac12\!\left(\tfrac{X}{2}\right) = \tfrac54 X$$

The error is that $\tfrac12$ is being used as $P(Y = 2X)$ *unconditionally*,
while $X$ is being treated as a known constant. If $X$ is a constant, then
$P(Y = 2X \mid X = x)$ must be evaluated at that $x$, and it is not $1/2$ in
general. If $X$ is a random variable, then the expression is not a valid
application of the law of total expectation, because the events $\{Y = 2X\}$ and
$\{Y = X/2\}$ partition the space in a way that is correlated with the value of
$X$.

Written with the correct partition, where $L$ is the event that you hold the
smaller envelope:

$$\mathbb{E}[Y] = P(L)\,\mathbb{E}[2X \mid L] + P(L^{c})\,\mathbb{E}\!\left[\tfrac{X}{2} \,\middle|\, L^{c}\right]$$

With $\mathbb{E}[X \mid L] = x$ and $\mathbb{E}[X \mid L^{c}] = 2x$, this gives
$\tfrac12(2x) + \tfrac12(x) = \tfrac32 x = \mathbb{E}[X]$. The conditioning was
the whole issue.

### Why no proper prior makes swapping always favourable

Let the smaller amount be $X_{s}$ with prior density or mass $\pi$. You open your
envelope and observe $a$. The pair is either $(a/2, a)$ or $(a, 2a)$, and since
you picked an envelope at random,

$$P(\text{other} = 2a \mid \text{observe } a) = \frac{\pi(a)}{\pi(a) + \pi(a/2)}$$

For this to equal $1/2$ for every $a$ requires

$$\pi(a) = \pi(a/2) \quad \text{for all } a > 0$$

so $\pi$ is constant along the geometric chain $\{a\,2^{k} : k \in \mathbb{Z}\}$.
Any such $\pi$ has infinite total mass and cannot be normalised. It is an
**improper prior**.

Improper priors are not always harmful — flat priors over the real line are
standard in Bayesian analysis and often yield proper posteriors. But they carry no
guarantee of coherence, and this problem is the textbook demonstration: reasoning
that would be sound under a proper prior produces a Dutch-book-like
recommendation under an improper one.

### The finite-expectation theorem

**Claim.** If $\mathbb{E}[X_{s}] < \infty$, then swapping cannot be favourable
for every observed value.

**Proof sketch.** Let $g(a)$ be the expected gain from swapping on observing $a$.
Then $\mathbb{E}[g(A)] = \mathbb{E}[Y] - \mathbb{E}[X] = 0$ by exchangeability,
provided both expectations are finite. A function with mean zero cannot be
strictly positive everywhere on a set of full measure. So the set where swapping
loses must have positive probability. $\square$

This is the precise sense in which "always swap" is impossible: it requires
$\mathbb{E}[X] = \infty$, at which point the argument no longer establishes
anything, because $\mathbb{E}[Y] - \mathbb{E}[X]$ is $\infty - \infty$.

### Broome's distribution, worked through

Let the smaller amount be $2^{k}$ with probability

$$\pi_{k} = \tfrac13\left(\tfrac23\right)^{k}, \qquad k = 0, 1, 2, \ldots$$

These sum to $\tfrac13 \cdot \frac{1}{1 - 2/3} = 1$, so the prior is proper.

Observe $a = 2^{n}$ with $n \geq 1$. The pair is $(2^{n-1}, 2^{n})$ with weight
$\pi_{n-1}$ or $(2^{n}, 2^{n+1})$ with weight $\pi_{n}$, each further weighted by
the $1/2$ chance you opened the relevant envelope. The expected gain from
swapping is proportional to

$$\pi_{n}\left(2^{n+1} - 2^{n}\right) + \pi_{n-1}\left(2^{n-1} - 2^{n}\right)
= \pi_{n}2^{n} - \pi_{n-1}2^{n-1}$$

Substituting $\pi_{k}2^{k} = \tfrac13(\tfrac43)^{k}$:

$$\tfrac13\left(\tfrac43\right)^{n} - \tfrac13\left(\tfrac43\right)^{n-1}
= \tfrac13\left(\tfrac43\right)^{n-1}\left(\tfrac43 - 1\right)
= \tfrac19\left(\tfrac43\right)^{n-1} > 0$$

Strictly positive for every $n \geq 1$, and for $n = 0$ swapping is certain to
gain. So swapping is favourable at every observed amount.

And the mean:

$$\mathbb{E}[X_{s}] = \sum_{k=0}^{\infty} \pi_{k}2^{k} = \sum_{k=0}^{\infty}\tfrac13\left(\tfrac43\right)^{k} = \infty$$

The ratio $4/3 > 1$ is doing all the work. The prior's tail decays like
$(2/3)^{k}$ while the payoffs grow like $2^{k}$, so the expectation diverges.
This is exactly the St Petersburg structure, and Chalmers' point is that the two
paradoxes are the same paradox once you get this far.

### Cover's randomised switching strategy

Suppose the filler chose amounts $x$ and $2x$ by any means whatever — you need no
prior at all. Choose any random threshold $T$ with $P(T \in (u,v)) > 0$ for every
$0 < u < v$; an exponential or lognormal draw will do. Open your envelope, see
$a$, and swap if and only if $a < T$.

Let $p = P(x < T \leq 2x) > 0$ by construction. Then:

- If $T \leq x$: you never swap, so you end with the larger envelope with
  probability $1/2$.
- If $T > 2x$: you always swap, so again probability $1/2$.
- If $x < T \leq 2x$: you swap when holding $x$ and keep when holding $2x$ —
  you end with the larger envelope with probability **1**.

Overall probability of ending with the larger envelope:

$$\tfrac12(1 - p) + 1 \cdot p = \tfrac12 + \tfrac{p}{2} > \tfrac12$$

The strategy works against any filler, adversarial or not, with no assumptions.
It does not contradict the earlier results: it improves the *probability* of
getting the larger amount, not the *expected amount*, and those come apart
precisely because the two envelopes have different values.

### Variants worth knowing

- **The closed-envelope version.** Fully resolved. The equivocation is the whole
  story, and symmetry forbids any advantage.
- **The open-envelope version with a proper, finite-mean prior.** Fully resolved.
  Swapping is favourable for some observed values and unfavourable for others,
  and averages to zero.
- **The open-envelope version with an infinite-mean prior.** This is the residue.
  "Always swap" is genuinely correct pointwise and genuinely useless globally, and
  what to make of that is where the philosophical disagreement lives.
- **The symmetric two-player version (Kraitchik's neckties).** Both players
  compute a positive expectation. Here the resolution is that the players'
  expectations are conditional on their own holdings and are not simultaneously
  satisfiable — the sum of the two gains must be zero.

## History

**1930s–1953.** Maurice Kraitchik published "The Paradox of the Neckties" in his
recreational-mathematics writing — first in French as *Les Mathématiques des
Jeux* (1930), later in the English *Mathematical Recreations*, whose second
edition appeared from Dover in 1953. He also gave a wallet variant, in which two
men compare the contents of their wallets and the one with less takes the other's.
Kraitchik states the contradiction plainly and offers no resolution.

**1953.** J. E. Littlewood published *A Mathematician's Miscellany*, which
contains a card version of the same argument. Littlewood credits it to **Erwin
Schrödinger** — the physicist, who had spent the war years in Dublin and was a
compulsive puzzler. This is the earliest dated record tying the argument to a
named originator, and it is why 1953 is the conventional date for the problem
even though Kraitchik's version is older in substance.

**1982.** Martin Gardner presented Kraitchik's wallet version in *Aha! Gotcha*,
naming it "the wallet game", and brought it to a general readership. Gardner did
not resolve it either.

**1988–1989.** Barry Nalebuff posed the problem in the Puzzles column of the
*Journal of Economic Perspectives* and, after what he described as an
overwhelming volume of responses, devoted his 1989 column to it: "Puzzles: The
Other Person's Envelope Is Always Greener". Nalebuff sorted the proposed
solutions, drew the crucial distinction between the closed- and open-envelope
versions, and gave the problem its envelopes. Everything written since uses his
framing. A closely related statement appeared in 1988 in the Lindley and Smith
volume.

**1995.** John Broome published "The Two-envelope Paradox" in *Analysis*,
constructing the proper prior under which swapping is favourable at every
observed value. This ended any hope that the problem could be dismissed as a
simple algebraic slip.

**2002.** David Chalmers published "The St. Petersburg Two-Envelope Paradox",
three pages arguing that the versions surviving the standard diagnosis are
St Petersburg problems, and that the two paradoxes share a root in undefined
expectations.

**2006.** Raymond Nickerson and Ruma Falk published a comprehensive review in
*Thinking & Reasoning*, cataloguing the published resolutions, noting that several
of them answer different questions, and analysing the cognitive pull of the
flawed argument.

The literature has continued steadily since, in *Analysis*, *Synthese*, *Theory
and Decision* and the statistics journals. The distribution of opinion has moved,
but the problem has not closed.

## Why It Matters

The two envelopes problem is the best available demonstration that **a
probability calculation can be locally valid at every step and globally
meaningless.**

Each line of the 25% argument is the sort of move that appears in correct
derivations every day: name a quantity, condition on two cases, weight by
probabilities, add. Nothing looks wrong. The error is structural — a variable
that quietly changes referent, and a probability assignment that no coherent
belief state could hold.

Three consequences follow, and all three are practical.

**Define your random variables before you condition on them.** The equivocation
in this problem is not exotic; it is what happens whenever a symbol is introduced
mid-argument and then used as though it had been fixed in advance. This is the
same failure that produces the base-rate fallacy, the prosecutor's fallacy and a
large fraction of the errors in applied statistics.

**Improper priors are tools, not free parameters.** Flat priors over unbounded
spaces are used constantly and usually harmlessly. This problem shows what happens
when the impropriety is not recognised: the posterior recommendations become
incoherent while every individual computation continues to look fine. Anyone
using non-informative priors needs a version of this example in mind.

**When the expectation is infinite, expected-value reasoning stops being advice.**
The Broome–Chalmers versions are not resolved by finding an error, because there
is no error. They are resolved by recognising that "better in expectation" is not
a meaningful recommendation when no expectation exists — the same lesson the
[St Petersburg paradox](/paradox/st-petersburg-paradox/) taught in 1738, arrived
at from a completely different direction.

## Modern Relevance

**Bayesian statistics and default priors.** Objective and reference priors are
often improper, and the standard caution — check that the posterior is proper,
and check that decisions derived from it are coherent — is taught with this
problem as the cautionary example. It is the cleanest case of an improper prior
producing confident nonsense.

**Trading and market microstructure.** "The other side of this trade looks better
than mine" is the envelope argument, and it is wrong for the same reason: if both
counterparties can run it, neither can be right. The winner's curse in auctions
is the same structure with the equivocation made explicit — the fact that you won
is information about the value, just as the fact that you are holding an envelope
is information about which one it is.

**Reinforcement learning and policy evaluation.** Agents that re-evaluate an
action using a value estimate conditioned on having already taken it can oscillate
indefinitely between two options, each of which looks better from the other's
vantage point. Preventing this is why off-policy evaluation is careful about which
distribution an expectation is taken over.

**Mechanism design and exchange protocols.** Any protocol in which both parties
must voluntarily agree to a swap has to survive the observation that a swap both
parties consider favourable is usually impossible. The no-trade theorems of
Milgrom and Stokey formalise exactly this, and the envelope paradox is their
elementary illustration.

**Teaching probability.** The problem is now standard in graduate courses
precisely because the fallacy is invisible to people who have already learned
conditional expectation. It is a test of whether a student can say *which*
distribution an expectation is taken over — which is the one thing the notation
does not force you to state.
