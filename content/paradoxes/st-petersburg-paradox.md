---
title: The St. Petersburg Paradox
slug: st-petersburg-paradox
alternateNames:
  - The St. Petersburg Lottery
  - The Petersburg Wager
summary: >-
  A coin-flipping game whose average payout is infinite. Expected value says you
  should hand over your house, your savings and everything else to play once.
  Nobody would pay twenty pounds. Nearly three centuries later, why not is still
  argued about.
era: early-modern
date: 1713 (posed by Nicolaus Bernoulli), 1738 (published by Daniel Bernoulli)
year: 1738
origin: >-
  Posed by Nicolaus Bernoulli in a 1713 letter to Pierre Rémond de Montmort, and
  named after the journal of the St Petersburg Academy where Daniel Bernoulli
  published his utility-based answer in 1738.
people:
  - nicolaus-bernoulli
  - daniel-bernoulli
  - gabriel-cramer
  - karl-menger
  - ole-peters
domains:
  - economics
  - probability
  - philosophy
types:
  - probability
  - decision-making
  - infinity
nature: apparent-contradiction
difficulty: advanced
status: debated
concepts:
  - Expected value
  - Diminishing marginal utility
  - Bounded utility
  - Divergent series
  - Ergodicity
  - Time average versus ensemble average
relationships:
  - kind: influences
    to: allais-paradox
    note: Bernoulli's utility fix grew into expected-utility theory; Allais then showed people violate that theory too.
  - kind: related
    to: two-envelopes-problem
    note: The envelope versions that survive the standard diagnosis are precisely the ones with St-Petersburg-like infinite expectations.
  - kind: contrasts-with
    to: zenos-dichotomy
    note: Zeno's infinitely many terms sum to a finite number; St Petersburg's infinitely many equal terms do not, and that single difference is the whole paradox.
references:
  - source: bernoulli-1713-montmort-letter
    role: primary-source
    note: Where the wager is first posed, twenty-five years before it was named.
  - source: bernoulli-1738-mensura-sortis
    role: primary-source
    note: The paper that named the paradox and introduced diminishing marginal utility to solve it.
  - source: menger-1934-unsicherheitsmoment
    role: paper
    note: Shows that no unbounded utility function survives, which forces bounded utility.
  - source: samuelson-1977-st-petersburg
    role: paper
    note: The standard historical survey of two and a half centuries of attempted resolutions.
  - source: peters-2011-time-resolution
    role: paper
    note: The ergodicity argument — replace the average over possible worlds with the average over time.
  - source: sep-st-petersburg
    role: encyclopedia
  - source: savage-foundations-of-statistics
    role: book
    note: The axiomatic framework within which bounded utility became the orthodox response.
furtherReading:
  - title: The St. Petersburg Paradox — Stanford Encyclopedia of Philosophy
    url: https://plato.stanford.edu/entries/paradox-stpetersburg/
    note: The best single survey of the competing resolutions and why none has closed the question.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

A stranger at a fair sets up a small table and offers you a game.

He will flip a fair coin over and over until it comes up heads. Then he stops
and pays you.

- Heads on the very first flip: he pays you **£2**.
- Heads on the second flip: **£4**.
- Third: **£8**. Fourth: **£16**. Fifth: **£32**.

Every extra tail doubles the prize. If the coin somehow came up tails twenty
times in a row before the first head, he would owe you over a million pounds.

Now the question. **How much would you pay for one go?**

Think about it honestly. Most people say something like five pounds. Ten,
maybe, if they are feeling reckless. Very few say more than twenty.

Now work out what the game is worth on average. Half the time you win £2. A
quarter of the time you win £4. An eighth of the time, £8.

$$\tfrac12 \times 2 = 1 \qquad \tfrac14 \times 4 = 1 \qquad \tfrac18 \times 8 = 1$$

Every single outcome contributes exactly one pound. And there are infinitely
many outcomes.

$$1 + 1 + 1 + 1 + \cdots = \infty$$

The average payout is **infinite**. There is no finite price too high. By the
rule that has governed gambling since the seventeenth century, you should sell
your house to play once.

You would not. Neither would anyone. That is the paradox, and it has been open
since 1713.

## Understand

Two things are both true, and they seem incompatible.

**The first true thing:** the game's average payout, computed correctly, is
infinite. This is not a trick or a mis-multiplication. Each doubling of the
prize is exactly cancelled by the halving of its chance, so every possible
outcome adds the same fixed amount to the average, and there is no last outcome.
The sum runs on forever.

**The second true thing:** no sane person pays a large sum to play. And that
refusal is not obviously irrational. Something has gone wrong with the advice,
not with the people.

So what is wrong with it?

### The prize is enormous but the chance is negligible

Look at what actually happens when you play.

Half the time you win £2. Three-quarters of the time you win £4 or less.
Ninety-nine per cent of the time you win £64 or less. The typical result of this
game is that you win a trivial amount.

The infinite average is built entirely out of outcomes that essentially never
occur. To win more than a million pounds you need twenty tails in a row: one
chance in a million. The average is dragged upward by prizes so vast and so rare
that no player will ever see one.

An average is a fine summary of a well-behaved quantity. It is a poor summary of
a quantity dominated by events that will not happen in the lifetime of the
universe.

### The bank does not have infinite money

There is a blunt objection, and it is a good one. Nobody can actually pay the
prizes.

If the stranger at the fair has £1 million, the game is capped: after twenty
tails he cannot pay any more. Cap it there and the expected value collapses from
infinity to about **£21**.

Give him the entire wealth of the world — call it a hundred trillion pounds —
and the expected value rises to about **£47**.

That is the whole range. Any conceivable counterparty makes this a game worth
tens of pounds, not thousands. The infinite expectation is an artefact of a
promise nobody could keep.

This does not fully dissolve the paradox — a mathematician can simply posit an
infinitely rich bank and ask what you *should* do then — but it explains why real
people's refusal to pay is not a failure of reasoning. They are correctly
declining to value a promise that cannot be honoured.

### Money is not worth what it says on it

Daniel Bernoulli's 1738 answer is the one that changed economics.

A second million pounds does not do for you what the first million did. Doubling
your money does not double your happiness, your safety or your options. Bernoulli
proposed that the *value* of a gain shrinks in proportion to what you already
have — a logarithmic relationship — and that people quite rightly maximise value,
not cash.

Redo the calculation that way and the doubling prizes no longer cancel the
halving probabilities. The sum converges. Bernoulli's version of the game is
worth about **£4**.

That answer sits comfortably close to what people actually say they would pay,
and the idea it introduced — diminishing marginal utility — became one of the
foundations of economics.

### Why it is still argued about

Because Bernoulli's fix does not survive contact with a sufficiently determined
opponent.

Karl Menger noticed in 1934 that if you value money logarithmically, someone can
simply build a nastier game with much faster-growing prizes, and the infinite
average comes straight back. And this works against *any* rule for valuing money
that has no ceiling. The only way to be safe is to insist that value has a
maximum — that no prize, however enormous, can be worth more than some fixed
amount to you.

Many economists accept that. Others find it a strange thing to be forced into by
a coin-flipping puzzle.

And a more recent line of argument, associated with the physicist Ole Peters,
says the whole framing was wrong from the start: the average over all the
possible ways the game *could* go is not the right thing for a person who has to
live through one actual sequence of events. That dispute is live today.

## Examples

**What the game pays, outcome by outcome.**

| First head on flip | Probability | Payout | Contribution to average |
| ---: | ---: | ---: | ---: |
| 1 | 1/2 | £2 | £1 |
| 2 | 1/4 | £4 | £1 |
| 3 | 1/8 | £8 | £1 |
| 4 | 1/16 | £16 | £1 |
| 10 | 1/1,024 | £1,024 | £1 |
| 20 | 1/1,048,576 | £1,048,576 | £1 |
| 30 | ~1 in $10^9$ | ~£1.07 billion | £1 |
| $\vdots$ | | | $\vdots$ |
| **Total** | **1** | | **£∞** |

Every row contributes the same £1. The table has no last row. That is the entire
mathematical content of the paradox.

**What a player actually experiences.**

| Outcome | Chance |
| --- | ---: |
| Win £2 | 50% |
| Win £4 or less | 75% |
| Win £8 or less | 87.5% |
| Win £64 or less | 98.4% |
| Win more than £1,000 | 0.1% |
| Win more than £1 million | 0.0001% |

The median payout is £2. If you paid £20 to play, you would lose money more than
90% of the time.

**What a finite bank is worth.** If the house can pay at most $2^{L}$ and the
game simply stops there, the expected value is $L + 1$ pounds:

| Bank's maximum payout | Fair price |
| --- | ---: |
| £1,024 | £11 |
| £1 million ($2^{20}$) | £21 |
| £1 billion ($2^{30}$) | £31 |
| £1 trillion ($2^{40}$) | £41 |
| World GDP (~$2^{47}$) | £48 |

Expected value grows like the **logarithm** of the bank's wealth. To make the
game worth £100 you would need a counterparty holding about $2^{99}$ pounds —
more money than there are atoms in a fair-sized asteroid.

**How the paradox looks over many plays.** Feller showed that the average
winnings after $n$ games grow like $\log_2 n$. Play a million rounds and your
running average sits around £20; play a trillion and it reaches about £40. The
average does diverge — but so slowly that no finite amount of play ever reveals
it. A player who paid £50 a round would be bankrupted long before the mathematics
came to their rescue.

## Explore

Five families of response, and where each one breaks.

**1. Diminishing marginal utility (Daniel Bernoulli, 1738; Gabriel Cramer,
1728).** Value money by a concave function. Cramer, in a letter to Nicolaus
Bernoulli a decade before Daniel's paper, suggested the square root, giving a
value of about 5.83 ducats; Daniel used the logarithm and got 4. **Breaks
against:** Menger's super-St-Petersburg game. Any unbounded utility function can
be defeated by growing the prizes fast enough.

**2. Bounded utility (Cramer, 1728; Menger, 1934; Savage, 1954).** Insist that
utility has a ceiling. This genuinely works — it is the only response that makes
the expectation finite for *every* lottery — and it is the orthodox position in
decision theory, entrenched by Savage's axiomatisation. **The cost:** you must
accept that there is some quantity of good beyond which nothing can be better.
Critics find that hard to swallow as a claim about value rather than about
psychology.

**3. Finite bankrolls and finite time (Buffon, 1777; many since).** No bank can
pay unbounded prizes, and no game can run for unbounded time. Truncate and the
value drops to tens of pounds. **The objection:** this dissolves the practical
question but not the theoretical one. Decision theory is supposed to tell you
what to do in principle, and "the premise is physically unrealisable" is a dodge
if the premise is coherent.

**4. Reject expected value as the criterion.** Perhaps maximising expectation was
never the right rule for lotteries with undefined or infinite means. Nicolaus
Bernoulli himself leaned this way, suggesting that outcomes below some
probability threshold should simply be ignored. **The objection:** every proposed
threshold is arbitrary, and abandoning expectation costs you the theorems that
make decision theory work.

**5. Time averages and ergodicity (Ole Peters, 2011).** The most recent serious
entrant. Peters argues that the expected value averages over parallel possible
worlds — an *ensemble* average — while an actual gambler experiences a single
sequence through time. For a multiplicative wealth process these two averages are
not equal, because the process is not ergodic. Compute the time-average growth
rate instead and you get a finite, wealth-dependent fair price, with no utility
function required.

**Where Peters is contested.** The resulting decision rule is mathematically the
Kelly criterion, and it produces the same number as Bernoulli's logarithm. Critics
— Jayanth Varma's 2013 rebuttal is the most direct — argue that this makes it a
rederivation rather than a resolution: logarithmic utility, arrived at by a
different route and with a different story attached. Peters' reply is that the
story is the point, because it explains *why* the logarithm rather than positing
it. Whether that counts as progress is a genuine open disagreement, not a settled
matter.

**Why the nature is "apparent contradiction".** There is no contradiction in the
mathematics: the sum diverges, full stop. The contradiction is between a
principle (maximise expected value) and a judgement (don't pay much), and it
dissolves once you name the hidden assumption — variously identified as
unbounded utility, an infinitely rich counterparty, unlimited time, or
ergodicity. What keeps the paradox alive is that different people name different
assumptions, and no one naming has won.

## Deep Dive

### The divergent expectation

Let $X$ be the payout. The first head occurs on flip $k$ with probability
$2^{-k}$, and pays $2^{k}$:

$$\mathbb{E}[X] = \sum_{k=1}^{\infty} 2^{-k}\cdot 2^{k} = \sum_{k=1}^{\infty} 1 = \infty$$

Every term is exactly 1. The series is not conditionally convergent, not
rearrangement-sensitive, not subtle: it is $1 + 1 + 1 + \cdots$.

The distribution has infinite mean but a perfectly ordinary median of 2, and
$P(X \geq 2^{m}) = 2^{-(m-1)}$ — a power-law tail with index 1, exactly the
borderline case where the mean fails to exist.

### Bernoulli's logarithmic utility

Take $u(w) = \ln w$ and a player with initial wealth $w$ paying a stake $c$.
Expected utility after playing:

$$\mathbb{E}[u] = \sum_{k=1}^{\infty} 2^{-k}\,\ln\!\left(w - c + 2^{k}\right)$$

This converges, because $\ln(2^k) = k\ln 2$ grows linearly while $2^{-k}$ decays
geometrically. The fair stake $c^{*}$ is the value making $\mathbb{E}[u] = \ln w$.

In the simplest case ($w = 0$, valuing the prize alone):

$$\mathbb{E}[\ln X] = \sum_{k=1}^{\infty} 2^{-k}\, k \ln 2 = \ln 2 \sum_{k=1}^{\infty} k\,2^{-k} = 2\ln 2 = \ln 4$$

The certainty equivalent is exactly **4**. Cramer's square-root utility gives

$$\mathbb{E}[\sqrt{X}] = \sum_{k=1}^{\infty} 2^{-k} 2^{k/2} = \sum_{k=1}^{\infty} 2^{-k/2} = \frac{1}{\sqrt{2}-1} \approx 2.414$$

with certainty equivalent $2.414^{2} \approx 5.83$.

Note that both answers are small, both are finite, and both land in the range
people report being willing to pay. That empirical fit is why the idea took hold.

### Menger's super-St-Petersburg game

Let $u$ be any utility function that is unbounded above. Then for each $k$ there
exists a prize $x_{k}$ with

$$u(x_{k}) \geq 2^{k}$$

Construct a lottery paying $x_{k}$ with probability $2^{-k}$. Its expected
utility is

$$\mathbb{E}[u] = \sum_{k=1}^{\infty} 2^{-k}u(x_{k}) \geq \sum_{k=1}^{\infty} 1 = \infty$$

and the paradox has returned in identical form.

For logarithmic utility, take $x_{k} = e^{2^{k}}$ — a prize that is doubly
exponential in $k$. For any $u$ with $u(x) \to \infty$, some such sequence exists.

**Menger's conclusion:** utility must be bounded above. This is not a
convenience; it is forced. Von Neumann–Morgenstern and Savage's axiomatisations
both accommodate it, and boundedness is the orthodox position — Arrow argued in
1970 that the continuity axiom together with the existence of St Petersburg-type
lotteries essentially requires it.

**The price.** Bounded utility implies there is a level of goodness that cannot
be exceeded, no matter what. It also implies your preferences between very large
outcomes become almost flat: a certainty of $10^{100}$ lives saved and a
certainty of $10^{200}$ are nearly indifferent. Many find that a reductio of
bounded utility rather than a resolution of the paradox. The literature has not
settled this.

### Finite bankrolls, precisely

Suppose the house can pay at most $2^{L}$, and pays $2^{L}$ if the head has not
appeared within $L$ flips. Then

$$\mathbb{E}[X] = \sum_{k=1}^{L} 2^{-k}2^{k} + 2^{-L}2^{L} = L + 1$$

So the fair price is logarithmic in the bank's wealth $W$: $\mathbb{E}[X] \approx
\log_{2}W + 1$.

This has a pleasing consequence. Under Bernoulli's log utility with wealth $w$,
the fair price is also roughly logarithmic. **The finite-bankroll argument and
the log-utility argument produce the same functional form by completely
independent routes** — one from the physics of the counterparty, one from the
psychology of the player. Samuelson's 1977 survey treats this convergence as the
reason the paradox keeps being declared solved and keeps returning: several
distinct problems share one symptom.

### Feller's weak law

The distribution has no mean, but the sample average is not lawless. Feller
proved that for $S_{n}$ the total of $n$ independent plays,

$$\frac{S_{n}}{n\log_{2}n} \xrightarrow{\ \mathbb{P}\ } 1$$

So the average payout after $n$ games is approximately $\log_{2}n$: about £20
after a million games, £40 after a trillion. The expectation diverges, but at a
rate no gambler can exploit and no experiment can observe.

This gives the sharpest statement of the practical resolution: **a price is fair
for a game you will play $n$ times if it is near $\log_{2}n$.** Nothing about the
infinite expectation is relevant to any finite life.

### Peters and the time average

Peters starts from the observation that wealth compounds multiplicatively, so the
relevant question is not "what is the average of $w_{t+1}$ over possible
outcomes?" but "what is the growth rate of $w_t$ along a single trajectory?"

For a player of wealth $w$ paying $c$ per round, the time-average exponential
growth rate is

$$\bar{g}(c) = \sum_{k=1}^{\infty} 2^{-k}\,\log_{2}\!\left(\frac{w - c + 2^{k}}{w}\right)$$

This converges. The maximum acceptable stake is the $c^{*}$ solving
$\bar{g}(c^{*}) = 0$: pay more and your wealth shrinks in the long run, pay less
and it grows.

Three features are worth stating plainly:

1. $c^{*}$ is finite, so the paradox does not arise.
2. $c^{*}$ **depends on your wealth $w$** — a richer player rationally pays more,
   with no appeal to psychology or taste.
3. No utility function appears anywhere. The logarithm arrives from the
   multiplicative dynamics, not from an assumption about value.

The gap between $\bar{g}$ and $\mathbb{E}$ is the non-ergodicity of the process:
the ensemble average over parallel worlds is dominated by a vanishing fraction of
them, while the time average tracks the typical trajectory. Peters argues the
same diagnosis explains risk aversion, insurance and leverage limits generally.

**The rebuttal, stated fairly.** Varma (2013) and others point out that
maximising $\bar{g}$ is precisely the Kelly criterion, that Kelly is
observationally equivalent to logarithmic utility, and that Peters therefore
recovers Bernoulli's 1738 answer with a new justification rather than solving
anything Bernoulli left open. Peters' response is that a derivation is worth more
than a postulate: log utility was chosen in 1738 because it worked, whereas the
time average explains why the logarithm is the right function. Readers can judge;
the literature has not converged.

## History

**9 September 1713.** Nicolaus Bernoulli wrote to Pierre Rémond de Montmort with
several problems about games of chance. One of them was the coin-doubling wager.
Montmort included the correspondence in the second edition of his *Essay d'analyse
sur les jeux de hazard* the same year. Neither man resolved it. Nicolaus'
inclination was that outcomes of sufficiently small probability should simply be
disregarded — a position that has never quite gone away and has never been made
principled.

**1728.** Gabriel Cramer, writing to Nicolaus from London, proposed both of the
answers that would dominate the next three centuries: value money by its square
root, or cap its value entirely. "Mathematicians value money in proportion to its
quantity," he wrote, "and men of good sense in proportion to the usage that they
may make of it." Cramer's letter predates Daniel Bernoulli's publication by a
decade and is often under-credited.

**1738.** Daniel Bernoulli — Nicolaus' cousin, then working at the Imperial
Academy of Sciences in St Petersburg — published *Specimen Theoriae Novae de
Mensura Sortis* in the Academy's *Commentarii*. He proposed that "the utility
resulting from any small increase in wealth will be inversely proportionate to
the quantity of goods previously possessed", which integrates to a logarithm, and
showed that this makes the wager's value finite. **The paradox takes its name
from the journal, not from any events in the city.** The paper was translated
into English by Louise Sommer only in 1954, for *Econometrica*.

**1777.** Georges-Louis Leclerc, Comte de Buffon, did what nobody had thought to
do: he ran the experiment. He had a child flip coins for 2,048 plays of the game
and reported the empirical average — a little over 4 units per game, and no
catastrophic payout. He also pressed the finite-bankroll objection.

**1934.** Karl Menger published "Das Unsicherheitsmoment in der Wertlehre",
demonstrating the super-St-Petersburg construction. This is the single most
consequential technical result on the problem: it converted "use a concave
utility function" from a solution into a partial one, and made boundedness the
issue.

**1944–1954.** Von Neumann and Morgenstern's *Theory of Games and Economic
Behavior* and Savage's *The Foundations of Statistics* built the axiomatic
framework of modern decision theory. Within it, bounded utility became the
standard response, and the St Petersburg game became the standard argument for
it.

**1977.** Paul Samuelson published "St. Petersburg Paradoxes: Defanged,
Dissected, and Historically Described", the definitive survey. His conclusion was
that the paradox has been resolved repeatedly because it is several problems
wearing one name.

**2011.** Ole Peters published the time-resolution argument in *Philosophical
Transactions of the Royal Society A*, launching the ergodicity-economics
programme. The debate that followed is ongoing.

## Why It Matters

The St Petersburg paradox produced the concept of utility. That alone would
secure its place: diminishing marginal utility is the load-bearing idea beneath
insurance, progressive taxation, portfolio theory, consumer demand and most of
welfare economics. It was invented, in 1738, to explain why nobody wants to buy a
coin-flipping game.

Beyond that, the paradox is the standard worked example of three distinct
lessons.

**Averages can fail to exist, and the failure is not exotic.** Distributions with
infinite or undefined means are not mathematical curiosities. Wealth, city sizes,
insurance claims, word frequencies, network degrees, pandemic sizes and the
returns of venture capital funds all have heavy tails, and several are close to
the regime where sample means do not converge usefully. Reporting the mean of such
a quantity is not merely imprecise — it is reporting a number that describes
nothing.

**"Maximise expected value" is a rule with conditions attached.** It is a theorem
under specific axioms, not a self-evident maxim. When the expectation diverges,
the theorem does not apply, and the intuition that says "pay whatever it costs"
has no support.

**The distinction between the average outcome and the typical outcome is
practical, not philosophical.** A strategy with excellent expected value and a
high probability of ruin is a bad strategy, and this is the same observation that
underlies the Kelly criterion, position sizing, and every insurance contract ever
written.

## Modern Relevance

**Heavy tails in finance.** Value-at-risk models, catastrophe insurance pricing
and hedge-fund return distributions all live in the territory where the mean is
either infinite or so poorly estimated as to be useless. The 2008 crisis produced
a large literature on strategies whose expected value looked excellent and whose
time-average behaviour was ruinous — precisely the St Petersburg distinction.

**Kelly betting and position sizing.** The Kelly criterion maximises the
long-run growth rate rather than the expected return, and it is standard practice
in professional gambling and parts of quantitative finance. It is Bernoulli's
1738 answer, operationalised, and Peters' formulation makes the connection
explicit.

**Existential risk and longtermist ethics.** Arguments of the form "this
intervention has a tiny probability of an astronomically large payoff, so its
expected value dominates everything" — sometimes called Pascalian mugging — are
St Petersburg arguments. The standard replies are the standard replies: bounded
value, discounting negligible probabilities, refusing to use expectations for
undefined-mean prospects. The debate in effective-altruism circles is a direct
continuation of the eighteenth-century one.

**Reinforcement learning.** Agents maximising expected discounted reward in
environments with heavy-tailed returns can be driven by a vanishingly rare
outcome. Distributional RL, risk-sensitive objectives and CVaR-based criteria are
engineering responses to exactly this failure mode.

**Ergodicity economics.** Peters' programme has produced a body of work applying
the time-average framework to insurance, cooperation, leverage and inequality,
and there is now experimental work on whether human risk preferences track
time-average optimality. Whether it constitutes a new foundation or a repackaging
of expected utility is genuinely contested — which is itself the clearest sign
that this 300-year-old puzzle is not finished.
