---
title: The Ellsberg Paradox
slug: ellsberg-paradox
alternateNames:
  - Ellsberg's Urns
  - Ambiguity Aversion
summary: >-
  An urn has 30 red balls and 60 black-or-yellow balls in unknown proportions.
  People prefer red over black, yet black-or-yellow over red-or-yellow — two
  choices that no single probability can justify, proving that unknown odds feel
  different from known ones even when expected values are identical.
hook: >-
  You know exactly how many red balls there are, and nothing about how many are
  black. Does knowing more make a bet more attractive?
era: twentieth-century
date: "1961"
year: 1961
origin: >-
  Introduced by Daniel Ellsberg in his 1961 Quarterly Journal of Economics
  paper, derived from experiments he conducted while a researcher at RAND.
  Ellsberg built on Leonard Savage's 1954 axioms for subjective expected utility
  and showed that real human choices systematically violate them.
people:
  - daniel-ellsberg
domains:
  - economics
  - psychology
  - probability
types:
  - decision-making
  - probability
  - knowledge
nature: counterintuitive-result
difficulty: intermediate
status: explained
renown: known
concepts:
  - Ambiguity aversion
  - Subjective expected utility
  - Knightian uncertainty
  - Sure-thing principle
  - Risk vs uncertainty
relationships:
  - kind: related
    to: allais-paradox
    note: Both show that people systematically violate expected utility theory.
      The Allais paradox involves known probabilities; Ellsberg involves unknown ones.
  - kind: related
    to: prisoners-dilemma
    note: Both expose gaps between individually rational behaviour and the
      predictions of standard economic theory.
references:
  - source: ellsberg-1961
    role: primary-source
    note: The paper that introduced the paradox and the experimental design.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

There is an urn in front of you containing 90 balls. You are told that exactly
30 of them are red. The remaining 60 are some mixture of black and yellow balls
— you do not know the proportions. It could be 60 black and 0 yellow, 0 black
and 60 yellow, 30 of each, or anything in between.

You will draw one ball at random without looking. Two bets are on offer.

**First choice — pick one:**

- **Bet A:** Win £100 if the ball is red.
- **Bet B:** Win £100 if the ball is black.

Most people choose **Bet A**.

**Second choice — pick one:**

- **Bet C:** Win £100 if the ball is red *or* yellow.
- **Bet D:** Win £100 if the ball is black *or* yellow.

Most people choose **Bet D**.

Now look at what you have done.

## Understand

If you chose A over B, you are implicitly saying that you believe there are
fewer black balls than red balls — that the probability of black is less than
1/3. If there were more black balls, you would have chosen B.

If you chose D over C, you are saying that you believe black-or-yellow is more
likely than red-or-yellow. Since "red-or-yellow" is "red" plus "yellow" and
"black-or-yellow" is "black" plus "yellow", and yellow appears in both,
preferring D means you think black is more likely than red — the probability of
black exceeds 1/3.

You cannot consistently believe both things. A preference for A implies that
black probability < 1/3. A preference for D implies that black probability >
1/3. There is no probability you could assign to black that makes both
preferences simultaneously rational under expected utility theory.

### What is really going on

The pattern is not random error. It is systematic. People prefer the bet where
the probability is *known*. In the first choice, red is the known quantity (1/3
of 90). In the second choice, black-or-yellow is the known quantity (exactly
2/3 of 90, regardless of the unknown ratio of black to yellow).

This preference for known probabilities over unknown ones is called **ambiguity
aversion**, and it has nothing to do with pessimism or miscalculation. The
people who show it are not making arithmetic mistakes. They are behaving in a
way that no single probability assignment can explain.

The economist Frank Knight had distinguished, in 1921, between *risk* (you
don't know the outcome but you know the probability distribution) and
*uncertainty* (you don't know the distribution). Ellsberg's experiment is the
first clean empirical demonstration that people treat these differently — and
that standard expected utility theory cannot account for the difference.

## Examples

**A simpler version.** There are two urns. Urn 1 has exactly 50 red and 50
black balls. Urn 2 has 100 balls, red and black in unknown proportions. Most
people prefer to bet on Urn 1 for either colour. But if the composition of Urn
2 is unknown, your *expected* probability of drawing red from Urn 2 is also 50%
(by symmetry). Expected utility theory says you should be indifferent. Almost
no one is.

**The job interview.** Suppose you know that a particular exam is passed by
exactly half of all candidates. You also know that another exam is very hard for
some candidates and easy for others but you don't know the pass rate. Most
people would rather bet on passing the first exam, even if told that the
historical average pass rate for the second is the same. They dislike the
unknown distribution, not the expected value.

**Financial markets.** Investors routinely demand a premium for holding
securities with poorly understood risk profiles, even when the expected return
is the same as for better-understood ones. This premium for known risk over
unknown risk is a direct expression of ambiguity aversion in real markets.

## Explore

**Does this mean people are irrational?** Ellsberg himself did not think so. He
argued that behaving differently under risk (known probabilities) and under
ambiguity (unknown probabilities) might be entirely defensible. If you do not
know the probability distribution, there is no unique rational response — you
are not given enough information to determine one. Treating the situation as
genuinely different from one where you are given full information is not a
cognitive error; it may be the epistemically honest response.

**Maximin and multiple priors.** One formal response to Ellsberg is to replace
the single subjective probability of Savage's theory with a *set* of
probabilities, and to evaluate acts by their expected utility under the
worst-case member of the set. This is the maximin expected utility model of
Gilboa and Schmeidler (1989). It predicts Ellsberg-style preferences: faced with
an unknown probability, you behave as if you are using the prior most
unfavourable to your bet, which makes known odds attractive relative to unknown
ones. This is a coherent framework, though it abandons Savage's axioms.

**The sure-thing principle.** Leonard Savage's sure-thing principle says: if you
prefer A to B when event E occurs, and prefer A to B when event E does not
occur, then you should prefer A to B regardless of whether E occurs. Ellsberg's
choices violate this. In the standard urn experiment, the sure-thing principle
can be shown to require consistency across the two choices — and Ellsberg's
choosers are not consistent. Abandoning the sure-thing principle is a serious
step: it is among the most intuitive-seeming axioms in decision theory, and its
failure leaves a gap in the foundations.

## Deep Dive

### The formal violation

Write $p_r = 1/3$ for the known probability of drawing red, and let $p_b$ be the
(unknown) probability of drawing black, with $p_y = 1 - p_r - p_b$.

Under expected utility theory with utility function $u$:

$$\text{EU}(A) = p_r u(100) = \tfrac{1}{3}u(100)$$
$$\text{EU}(B) = p_b u(100)$$
$$\text{EU}(C) = (p_r + p_y)u(100) = (1 - p_b)u(100)$$
$$\text{EU}(D) = (p_b + p_y)u(100) = \tfrac{2}{3}u(100)$$

Preferring A over B implies $1/3 > p_b$.

Preferring D over C implies $2/3 > 1 - p_b$, i.e. $p_b > 1/3$.

These are contradictory. No value of $p_b$ satisfies both.

### Why the violation survives reflection

Unlike some violations of expected utility theory, Ellsberg preferences tend to
be *robust to reflection*. When people who show the Ellsberg pattern are told
about the inconsistency and asked to reconsider, many maintain their original
choices. They judge their own reasoning to be defensible. This distinguishes the
phenomenon from a simple cognitive error: it seems to reflect a considered
preference structure, not a lapse.

## History

Daniel Ellsberg ran the thought experiments in the early 1960s while working at
RAND on questions of military strategy under uncertainty. He circulated the
examples widely before publishing, and reported that many distinguished
economists — including Savage himself — initially showed the same pattern and
then defended it when shown the inconsistency.

The paper was published in 1961 in the *Quarterly Journal of Economics*. It
generated significant controversy in economic theory but was for a while
overshadowed by the mainstream development of expected utility theory and by
Ellsberg's own subsequent career, which turned to political activism after he
leaked the Pentagon Papers in 1971.

The paradox became central to economics in the 1980s and 1990s as the field of
behavioural economics grew and alternatives to Savage's framework were developed.
The multiple-priors model of Gilboa and Schmeidler (1989) gave ambiguity aversion
a formal foundation and sparked a large theoretical literature.

## Why It Matters

**It distinguishes risk from uncertainty for the first time experimentally.**
Frank Knight had drawn the distinction conceptually in 1921, but Ellsberg showed
it in the lab. The distinction has since proved essential in finance, insurance,
climate economics, and any domain where probability distributions are unknown.

**It shows that expected utility theory is incomplete, not just approximately
right.** The Allais paradox can be explained away as a framing effect. Ellsberg
preferences are stable under reflection and cannot be absorbed into a modified
utility function without abandoning core axioms. The theory needs genuine
extension.

**It grounds a large literature in decision theory and economics.** Ambiguity
aversion is now routinely incorporated into models of financial markets, policy
under uncertainty, and medical decision-making. The Ellsberg urn is the
standard reference point for any discussion of these models.

## Modern Relevance

**Climate policy.** Climate economics involves deep uncertainty about probability
distributions, not just risk within known distributions. Ellsberg's framework is
directly relevant: policy should account for ambiguity aversion, not just
expected-value comparisons over known probability distributions.

**Financial regulation.** After the 2008 financial crisis, regulators noted that
financial models had treated structured products as if their probability
distributions were well-understood. Ellsberg's analysis predicts that markets
will misprize such products precisely because the distributions are ambiguous.

**AI safety.** Decisions about AI development involve profound uncertainty about
probability distributions over future outcomes. Ambiguity-averse decision
frameworks — extensions of Ellsberg's insight — are increasingly discussed in
the alignment literature.
