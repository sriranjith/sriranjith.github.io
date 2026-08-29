---
title: The Allais Paradox
slug: allais-paradox
alternateNames:
  - The Common Consequence Effect
  - The Certainty Effect
summary: >-
  Two pairs of gambles, offered minutes apart. Most people — including the
  economists who wrote the theory — choose in a way that no expected-utility
  maximiser can. Allais built the questionnaire in 1952 to catch exactly that.
hook: >-
  Offered the same improvement in odds twice, most people take it once and
  refuse it the second time. Both choices feel obviously right.
era: twentieth-century
date: 1952 (posed at the Paris colloquium), 1953 (published)
year: 1953
origin: >-
  Devised by Maurice Allais and put to an audience of leading decision theorists
  at the Colloque international sur le risque in Paris in May 1952, then
  published in Econometrica in 1953 as an attack on what he called the American
  School.
people:
  - maurice-allais
  - daniel-kahneman
  - amos-tversky
domains:
  - economics
  - psychology
types:
  - decision-making
  - probability
nature: counterintuitive-result
difficulty: advanced
status: explained
renown: known
concepts:
  - Expected utility theory
  - Independence axiom
  - Sure-thing principle
  - Certainty effect
  - Prospect theory
  - Probability weighting
relationships:
  - kind: related
    to: st-petersburg-paradox
    note: >-
      Both are attacks on a theory of rational choice under risk, two centuries
      apart. Bernoulli's paradox showed that expected *value* cannot be what
      people maximise, and the repair was to replace money with utility. Allais
      showed that expected *utility* is not what people maximise either — and this
      time the repair had to change the probabilities, not the outcomes.
  - kind: related
    to: two-envelopes-problem
    note: >-
      Both are cases where a mechanical expected-value calculation delivers an
      answer that careful people refuse to act on.
  - kind: contrasts-with
    to: monty-hall-problem
    note: >-
      Instructive opposites. In Monty Hall the intuition is simply wrong and the
      mathematics stands. In Allais the mathematics was eventually changed to
      accommodate the intuition, because the intuition turned out to be stable,
      widespread and defensible.
references:
  - source: allais-1953-econometrica
    role: primary-source
    locator: "§ III"
    note: >-
      "Le comportement de l'homme rationnel devant le risque" — the original
      publication of the questionnaire and the attack on the independence axiom.
  - source: kahneman-tversky-1979-prospect
    role: paper
    note: >-
      Introduces the certainty effect and the probability weighting function, and
      supplies the version of the paradox that most readers now meet.
  - source: savage-foundations-of-statistics
    role: book
    locator: "§ 5.6"
    note: >-
      Savage reports that he chose the paradoxical pair himself, then decided on
      reflection that he had made an error.
  - source: machina-1987-choice-under-uncertainty
    role: paper
    note: The clearest survey of what the independence axiom is doing and what happens without it.
  - source: tversky-kahneman-1992-cumulative
    role: paper
    note: >-
      Cumulative prospect theory, which fixes the stochastic dominance problems in
      the 1979 version and supplies the standard weighting-function parameters.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Two choices. Take them one at a time, and answer honestly before reading on.

**First choice.** You may have either:

- **A:** £1,000,000, guaranteed.
- **B:** a lottery — 89% chance of £1,000,000, 10% chance of £5,000,000, and a
  1% chance of nothing at all.

Most people take **A**. A million pounds, certain, is life-changing, and the
thought of walking away with nothing because of that 1% is unbearable.

**Second choice.** Now, a different pair:

- **C:** an 11% chance of £1,000,000, and an 89% chance of nothing.
- **D:** a 10% chance of £5,000,000, and a 90% chance of nothing.

Most people take **D**. The chances are almost the same — 11% against 10% — and
five million is five times a million. It is an easy call.

Both answers feel obviously right. Almost everyone gives them. In 1952 a French
economist put these questions to a room containing several of the people who had
built the theory of rational choice under risk, and most of *them* answered A and
D as well.

**A and D cannot both be rational, under the theory those people had written
down.** Not "unwise". Not "risk-averse". Logically inconsistent with it. And the
pattern is so stable that nearly every reader of this page has just produced it.

## Understand

To see the problem you have to see what the two choices have in common, and the
cleanest way is to stop thinking about percentages and start thinking about a
lottery drum.

### One hundred tickets

Put 100 numbered tickets in a drum and draw one. Here is what each gamble pays,
depending on the ticket drawn:

| | Ticket 1 | Tickets 2–11 | Tickets 12–100 |
| --- | --- | --- | --- |
| **A** | £1m | £1m | £1m |
| **B** | nothing | £5m | £1m |
| **C** | £1m | £1m | nothing |
| **D** | nothing | £5m | nothing |

Look at the last column. In the first choice, A and B pay **exactly the same
thing** — £1m — on tickets 12 to 100. In the second choice, C and D pay exactly
the same thing — nothing — on tickets 12 to 100.

Those 89 tickets are irrelevant to both decisions. Whatever happens there happens
identically whichever option you pick. If ticket 47 comes up, your choice made no
difference.

So strike the last column out. What remains?

| | Ticket 1 | Tickets 2–11 |
| --- | --- | --- |
| **A** | £1m | £1m |
| **B** | nothing | £5m |
| **C** | £1m | £1m |
| **D** | nothing | £5m |

A and C are now identical. B and D are now identical. **The two decisions are the
same decision.** Anyone who prefers A to B must prefer C to D, and anyone who
prefers B to A must prefer D to C.

Most people prefer A to B, and then prefer D to C. That is the paradox, and it
is not a trick of presentation — you can show people the drum and they usually
keep both answers.

### The rule that is being broken

The principle the drum argument relies on is called the **independence axiom**, or
in Leonard Savage's version the **sure-thing principle**. It says: if two options
give you the identical outcome in some set of circumstances, then those
circumstances should not affect which option you prefer. Decide on the basis of
where they differ.

It is one of the assumptions from which expected utility theory is derived. Von
Neumann and Morgenstern proved in 1947 that if your preferences obey a short list
of conditions — of which independence is the substantive one — then you behave
exactly as though you were assigning a number to each outcome and maximising the
average. That theorem is why economics used expected utility as its model of
rational choice for decades.

Independence is not obviously wrong. Stated abstractly it sounds like a
requirement of coherence. Savage certainly thought so; when Allais put the
questions to him at lunch, he gave the A-and-D answers, and then, having seen the
drum argument, concluded that he had made a *mistake* and revised his answers to
match the theory.

### Why people really do choose this way

Allais thought Savage had it backwards. He argued that the pattern is not an
error but a reasonable response to something the theory ignores: **the special
status of certainty**.

Option A is not just very likely. It is *sure*. There is no ticket you can draw
that leaves you with nothing. Moving from A to B means giving that up — accepting
a 1% chance of walking away empty-handed from a guaranteed million. The
psychological cost of that 1% is enormous, and it is enormous *because* it
destroys certainty rather than because of its size.

Now look at the second pair. Neither C nor D is certain; both leave you
overwhelmingly likely to get nothing. Moving from an 11% chance to a 10% chance
costs you almost nothing, because there was no certainty to lose. So you take the
larger prize.

Daniel Kahneman and Amos Tversky named this the **certainty effect** in 1979:
people overweight outcomes that are certain relative to outcomes that are merely
probable. A change in probability from 100% to 99% does far more psychological
work than a change from 11% to 10%, even though the theory says both are one
percentage point.

Once you see it that way, the pattern stops looking like a failure of reasoning
and starts looking like a fact about what people care about. Which raises the real
question: **is expected utility theory describing how people behave, or telling
them how they should?** Allais's questionnaire forced the field to answer, and the
answer eventually was: not the first, and it is genuinely unclear about the
second.

## Examples

**Allais's original questionnaire (1953).** The amounts were in millions of old
French francs, a currency in which 100 million was roughly a lifetime's earnings
for a well-paid professional. Set out as probability distributions:

*Situation 1 — choose one:*

| Gamble | 100 million | 500 million | 0 |
| --- | --- | --- | --- |
| **1A** | 100% | — | — |
| **1B** | 89% | 10% | 1% |

*Situation 2 — choose one:*

| Gamble | 100 million | 500 million | 0 |
| --- | --- | --- | --- |
| **2A** | 11% | — | 89% |
| **2B** | — | 10% | 90% |

The modal response was **1A and 2B**.

**Why that pair is inconsistent.** Set $u(0) = 0$ and let $u$ be any utility
function whatever. Preferring 1A to 1B means

$$u(100) \;>\; 0.89\,u(100) + 0.10\,u(500) + 0.01\,u(0)$$

Subtract $0.89\,u(100)$ from both sides:

$$0.11\,u(100) \;>\; 0.10\,u(500)$$

Preferring 2B to 2A means

$$0.10\,u(500) \;>\; 0.11\,u(100)$$

The two inequalities are direct contradictions. **No utility function fixes
this** — not a concave one, not a convex one, not one with a kink at the current
wealth level. Risk aversion is irrelevant, because risk aversion is already
whatever $u$ says it is, and the contradiction survives every possible $u$.

**Kahneman and Tversky's replication (1979).** They ran a smaller-stakes version
on 72 respondents, in Israeli pounds, with the actual response rates recorded.
Their Problems 1 and 2:

*Problem 1 — choose one (N = 72):*

| Option | Outcomes | Chosen by |
| --- | --- | --- |
| A | 2,500 with p = 0.33; 2,400 with p = 0.66; 0 with p = 0.01 | **18%** |
| B | 2,400 with certainty | **82%** |

*Problem 2 — choose one (N = 72):*

| Option | Outcomes | Chosen by |
| --- | --- | --- |
| C | 2,500 with p = 0.33; 0 with p = 0.67 | **83%** |
| D | 2,400 with p = 0.34; 0 with p = 0.66 | **17%** |

The structure is Allais's: Problem 2 is Problem 1 with a common consequence of
2,400 at probability 0.66 replaced by 0 at probability 0.66. Independence says the
substitution cannot flip a preference. It flipped it for a large majority: 82%
took the sure thing in Problem 1, and 83% took the riskier option in Problem 2.

The reversal is not a minority effect at the edges of the sample. It is the modal
response in both directions, from the same people.

**Where the weighting function comes in.** Suppose instead of using probabilities
directly, people use a distorted version $w(p)$ — a *decision weight*. If $w$
overweights small probabilities and is not additive, the contradiction dissolves.
Preferring 1A requires

$$u(100) > w(0.89)\,u(100) + w(0.10)\,u(500)$$

and preferring 2B requires

$$w(0.10)\,u(500) > w(0.11)\,u(100)$$

Under expected utility, $w(p) = p$ and the first condition reduces to
$0.11\,u(100) > 0.10\,u(500)$, contradicting the second. But if
$w(0.89) < 0.89$ — that is, if the 89% chance is *underweighted* relative to the
certainty it competes with — then $1 - w(0.89) > 0.11 > w(0.11)$, and both
inequalities can hold at once. Plug in the estimated weights and the "paradox"
becomes an ordinary consequence of the model.

## Explore

### Three ways to read the result

**Allais's reading: the theory is wrong.** He held that expected utility was a
poor description of rational behaviour, not merely of actual behaviour, and that
the "American School" — von Neumann, Morgenstern, Savage, Friedman, Marschak —
had mistaken a mathematically convenient axiom for a requirement of reason. He
proposed instead that people care about the whole distribution of outcomes,
including its dispersion, in ways expected utility cannot express. He held this
position for decades and it was largely ignored for decades.

**Savage's reading: the chooser is wrong.** Savage accepted that people answer as
Allais said, and treated it as an error of the same kind as a miscalculation. His
own account in *The Foundations of Statistics* (1954, §5.6) is disarming: he gave
the paradoxical answers, was shown the drum argument, recognised it, and changed
his mind. The sure-thing principle, on this view, is a *normative* claim, and
discovering that people violate it is like discovering that people add up
restaurant bills wrongly.

This reading has real force. Anyone who violates independence in a repeated
setting can be constructed into a sequence of trades they will accept and which
leave them strictly worse off. If you would pay to avoid that, independence has a
claim on you.

**The descriptive reading: build a better model.** The position that won. Whether
or not independence is normatively compelling, it is not what people do, and a
science of choice needs a model of what people do. This is the road that leads
from Allais through prospect theory to behavioural economics.

### What the descriptive models keep and drop

Every serious alternative keeps the structure of weighing outcomes against
likelihoods and weakens independence somewhere.

- **Prospect theory** (Kahneman and Tversky, 1979) replaces probabilities with
  decision weights and utility with a value function defined over *gains and
  losses from a reference point*, concave for gains, convex for losses, and
  steeper for losses than gains.
- **Rank-dependent expected utility** (Quiggin, 1982) applies the weighting
  function to *cumulative* probabilities rather than individual ones, which
  repairs a defect in the 1979 model — decision weights applied outcome by outcome
  can lead to choosing a stochastically dominated option.
- **Cumulative prospect theory** (Tversky and Kahneman, 1992) merges the two, and
  is the standard model today.
- **Regret theory** (Loomes and Sugden, 1982; Bell, 1982) explains the pattern
  differently: what people minimise is anticipated regret, and drawing ticket 1
  after refusing a guaranteed million is the most regrettable outcome available.
- **Betweenness and disappointment models** (Chew, Dekel, Gul) weaken independence
  in more targeted ways and preserve more of the classical structure.

The models disagree about mechanism and make different predictions elsewhere. What
they share is the abandonment of independence, which is the lasting content of
Allais's attack.

### The objections that were made, and how they fared

**"It disappears with real money."** Partly true, and worth stating fairly. The
original stakes were hypothetical and enormous. Incentivised experiments with real
payments generally find the effect at reduced magnitude, and some designs find it
weakly or not at all. But the common-consequence effect has been replicated with
real money at moderate stakes many times, and reviews of the incentives literature
find it attenuated rather than eliminated.

**"It disappears with learning."** Also partly true. Repeated exposure with
feedback reduces violation rates. This supports Savage's reading, and it is a
reason to be careful about generalising one-shot laboratory choices to
institutional decision-making. It does not help with the many real decisions —
insurance, medical treatment, career moves — that are taken once.

**"It is a framing artefact."** The drum presentation reduces violations somewhat;
so does presenting the two problems side by side. This is a real finding and it
cuts both ways. That a transparent presentation improves consistency supports the
normative view. That the effect survives transparent presentation for a
substantial minority undercuts the claim that it is *only* confusion.

**"It is measurement error."** The strongest recent version of this objection.
Some researchers argue that a portion of apparent axiom violations reflects
random noise in responses rather than systematic preference, and that once noise
is modelled, the estimated violation rate falls. The debate is technical and
unfinished, but the consensus is that noise explains part of the effect and not
the direction of it — noise does not predict which way people deviate, and the
Allais pattern deviates in a specific direction that replicates.

### An honest note on the status

This entry is marked *explained* rather than *resolved* deliberately. What is
settled is the empirical fact — the choice pattern is robust and widespread — and
the formal diagnosis: it violates independence, and models with probability
weighting reproduce it. What is not settled is whether people who choose A and D
are making a mistake. That is a normative question about rationality, and
economists and philosophers still disagree about it. Marking it resolved would be
overclaiming.

## History

**1738.** Daniel Bernoulli resolved the St Petersburg paradox by proposing that
people maximise expected *utility* rather than expected money. This is the
ancestor of the theory Allais attacked.

**1944 and 1947.** John von Neumann and Oskar Morgenstern published *Theory of
Games and Economic Behavior*. The second edition (1947) contains the axiomatic
derivation of expected utility from a small set of conditions on preferences. The
result made expected utility the default model of rational choice.

**May 1952.** The Centre National de la Recherche Scientifique held a colloquium
in Paris on the foundations and applications of the theory of risk. Savage,
Marschak, Friedman, Samuelson and de Finetti were among those present, and Allais
circulated his questionnaire to the participants. The
best-known part of the story is that he put the questions to Savage over lunch and
Savage gave the inconsistent answers.

**1953.** Allais published "Le comportement de l'homme rationnel devant le risque:
critique des postulats et axiomes de l'école américaine" in *Econometrica*, volume
21, pages 503–546. The paper is polemical, long, and written in French in a
journal whose readership was increasingly Anglophone, which is part of why it took
so long to land.

**1954.** Savage published *The Foundations of Statistics*, giving his own
axiomatisation of subjective expected utility and, in §5.6, his account of taking
Allais's test and failing it.

**1970s.** The result stayed marginal for two decades. It was cited as a curiosity
and generally answered with some version of Savage's reply. Allais continued to
argue his case and was largely outside the mainstream.

**1979.** Kahneman and Tversky published "Prospect Theory: An Analysis of Decision
under Risk" in *Econometrica*, volume 47, pages 263–291. They replicated the Allais
pattern with a systematic battery of problems, named the certainty effect, and
supplied a model. This is the point at which the finding became central rather
than marginal. The paper is among the most cited in the history of economics.

**1982.** Quiggin introduced rank-dependent utility, fixing the dominance problem.

**1988.** Allais received the Nobel Memorial Prize in Economic Sciences. The
citation was for his work on market equilibrium and the efficient use of
resources, but the recognition of the risk work was explicit and, by then,
overdue. Much of his early work had been published only in French, and Paul
Samuelson had written that had Allais's earliest writings been in English, a
generation of economic theory would have taken a different course.

**1992.** Tversky and Kahneman published cumulative prospect theory.

**2002.** Kahneman shared the Nobel Memorial Prize with Vernon Smith. Tversky had
died in 1996 and the prize is not awarded posthumously; Kahneman said repeatedly
that the work was joint.

## Why It Matters

**It broke the monopoly of expected utility.** For thirty years after von Neumann
and Morgenstern, expected utility was both the model of how people choose and the
standard of how they should. Allais showed the two could not be the same thing.
Everything in behavioural economics follows from taking that gap seriously.

**It changed what counts as evidence in economic theory.** Allais's method — write
down the axioms, construct a choice pair that separates them, ask people — is now
standard. Before 1953 the dominant methodological position, associated with Milton
Friedman's 1953 essay, was that the realism of assumptions did not matter provided
predictions were good. Allais's design attacks that directly: the assumption
generates a *testable prediction about choices*, and the prediction fails.

**It located the failure precisely.** This is what makes the result useful rather
than merely destructive. Allais did not show that people are irrational or that
utility theory is generally wrong. He showed that one specific axiom fails, and he
showed it with a pair of gambles that isolates that axiom and nothing else. That
precision is why the repair was possible.

**It gave prospect theory its foundation.** The probability weighting function —
the single most consequential idea to come out of this — exists because
distributions like the Allais pair demanded it. Overweighting of small
probabilities explains why the same person buys both insurance and lottery
tickets, a combination expected utility struggles with, and it is the mechanism
behind a large share of documented anomalies in insurance, gambling and risk
communication.

## Modern Relevance

**Insurance markets.** People over-insure against small, salient, near-certain-to-
be-avoided losses — extended warranties, low-deductible policies, flight insurance
— and under-insure against large, low-probability ones such as flood and
earthquake. The certainty effect explains the first pattern directly: the appeal
of eliminating a risk entirely is out of proportion to the size of the risk
eliminated. Insurers price against this, and consumer protection regulators cite
it.

**Medical decisions.** Patients choosing between a treatment with a high certain
survival rate and one with a higher expected but uncertain outcome show the Allais
pattern reliably. The framing of survival statistics — "a 90% chance of surviving
five years" versus "a 10% chance of dying within five years" — interacts with it,
and the informed consent literature treats both effects as things clinicians must
actively manage rather than hope to avoid.

**Vaccine and safety communication.** Messaging that promises a risk will be
"eliminated" is far more persuasive than messaging that promises it will be
reduced by a large factor, even when the second is objectively better. The
certainty effect is the reason, and public health communication research has been
explicit about it since the 1980s.

**Regulatory cost-benefit analysis.** Formal analysis uses expected values, which
means it systematically undervalues the elimination of risks relative to how the
public values it. This is a persistent source of friction between analysts and the
public in environmental and safety regulation, and it is not simply public
innumeracy — it is a disagreement about whether the independence axiom should
govern collective decisions.

**Risk models in finance and AI.** Any system that optimises expected utility —
portfolio optimisation, reinforcement learning agents with scalar rewards,
automated decision systems — is committed to independence and will make choices
that human stakeholders find unacceptable in exactly the Allais configuration.
Work on risk-sensitive reinforcement learning, distributional value functions and
rank-dependent objectives is the response, and it reaches for the same
mathematical tools Quiggin and Tversky developed.

## Deep Dive

### The independence axiom

Let $\Delta(X)$ be the set of simple lotteries over a set of outcomes $X$, and
$\succsim$ a preference relation on $\Delta(X)$. For lotteries $p, q, r$ and
$\alpha \in (0,1]$, write $\alpha p + (1-\alpha) r$ for the compound lottery.

> **Independence.** For all $p, q, r \in \Delta(X)$ and all $\alpha \in (0,1]$:
> $$p \succsim q \iff \alpha p + (1-\alpha) r \succsim \alpha q + (1-\alpha) r$$

**Von Neumann–Morgenstern theorem.** If $\succsim$ is complete, transitive,
continuous and satisfies independence, there exists $u : X \to \mathbb{R}$, unique
up to positive affine transformation, such that

$$p \succsim q \iff \sum_{x} p(x)\,u(x) \;\ge\; \sum_{x} q(x)\,u(x)$$

Independence is the axiom with content. Completeness, transitivity and continuity
are structural; independence is what makes the representation *linear in
probabilities*.

### The Allais pair as a violation

Write $M_0 = 0$, $M_1 = 100$, $M_5 = 500$ (millions). Define the lotteries:

$$
\begin{aligned}
L_{1A} &= \delta_{M_1} \\
L_{1B} &= 0.89\,\delta_{M_1} + 0.10\,\delta_{M_5} + 0.01\,\delta_{M_0} \\
L_{2A} &= 0.11\,\delta_{M_1} + 0.89\,\delta_{M_0} \\
L_{2B} &= 0.10\,\delta_{M_5} + 0.90\,\delta_{M_0}
\end{aligned}
$$

Let $\alpha = 0.11$, $p = \delta_{M_1}$, and
$q = \tfrac{10}{11}\delta_{M_5} + \tfrac{1}{11}\delta_{M_0}$. Then:

$$L_{1A} = \alpha p + (1-\alpha)\,\delta_{M_1}, \qquad L_{1B} = \alpha q + (1-\alpha)\,\delta_{M_1}$$
$$L_{2A} = \alpha p + (1-\alpha)\,\delta_{M_0}, \qquad L_{2B} = \alpha q + (1-\alpha)\,\delta_{M_0}$$

Check the second pair: $\alpha q = 0.11 \cdot \tfrac{10}{11}\delta_{M_5} + 0.11\cdot\tfrac{1}{11}\delta_{M_0} = 0.10\,\delta_{M_5} + 0.01\,\delta_{M_0}$, and adding $0.89\,\delta_{M_0}$ gives $L_{2B}$ exactly.

Each pair is $\{ \alpha p + (1-\alpha) r,\; \alpha q + (1-\alpha) r \}$ for the
*same* $p$, $q$ and $\alpha$, differing only in the common consequence
$r \in \{\delta_{M_1}, \delta_{M_0}\}$. Independence therefore requires
$L_{1A} \succ L_{1B} \iff L_{2A} \succ L_{2B}$. The modal pattern
$L_{1A} \succ L_{1B}$ together with $L_{2B} \succ L_{2A}$ contradicts it directly.

The name **common consequence effect** comes from this construction: the two
decisions share a consequence occurring with probability $1 - \alpha$, and only
its identity differs.

### Geometry: the Marschak–Machina triangle

Fix three outcomes $x_1 < x_2 < x_3$. A lottery over them is determined by
$(p_1, p_3)$ with $p_2 = 1 - p_1 - p_3$, so the lottery space is a triangle in the
plane. Expected utility with $u(x_1) = 0$, $u(x_3) = 1$ gives indifference curves

$$p_1 \cdot 0 + (1-p_1-p_3)\,u(x_2) + p_3 = \text{constant}$$

which are **parallel straight lines**, with slope determined by $u(x_2)$ alone.
Parallelism is the geometric content of independence, and it is what the Allais
pair tests. The four lotteries $L_{1A}, L_{1B}, L_{2A}, L_{2B}$ form a
parallelogram in this triangle: the segment from $L_{1A}$ to $L_{1B}$ is parallel
to the segment from $L_{2A}$ to $L_{2B}$, and equal in length. Preferring $L_{1A}$
and $L_{2B}$ means the indifference curves through the two segments have different
slopes — they **fan out** toward the lower right, the certainty corner.

Machina's "fanning out" hypothesis (1982) generalises this: keep smooth
preferences over lotteries and local expected-utility behaviour, but drop global
linearity. It accommodates the Allais pattern and several others while retaining
enough structure to do comparative statics.

### Probability weighting

Prospect theory replaces $\sum_i p_i u(x_i)$ with

$$V = \sum_i \pi(p_i)\, v(x_i)$$

where $v$ is a value function over gains and losses relative to a reference point
and $\pi$ is a decision weight. In the 1979 formulation, $\pi$ satisfies:

- **Overweighting of small probabilities:** $\pi(p) > p$ for small $p$.
- **Subcertainty:** $\pi(p) + \pi(1-p) < 1$ for $0 < p < 1$.
- **Subproportionality:** for fixed $r$, $\pi(pq)/\pi(p)$ decreases in $p$.
- $\pi(0) = 0$, $\pi(1) = 1$, with discontinuities near the endpoints.

Subcertainty is what generates the certainty effect. If
$\pi(0.89) + \pi(0.11) < 1$ then $1 - \pi(0.89) > \pi(0.11)$, and the Allais pair
becomes consistent: preferring $L_{1A}$ requires
$(1 - \pi(0.89))\,v(M_1) > \pi(0.10)\,v(M_5)$ while preferring $L_{2B}$ requires
$\pi(0.10)\,v(M_5) > \pi(0.11)\,v(M_1)$, and both hold whenever

$$\pi(0.11) \;<\; \frac{\pi(0.10)\,v(M_5)}{v(M_1)} \;<\; 1 - \pi(0.89)$$

Under expected utility that interval is empty, because
$\pi(0.11) = 0.11 = 1 - 0.89$. Subcertainty opens it.

Cumulative prospect theory (1992) applies the weighting to cumulative
probabilities, which guarantees respect for stochastic dominance. Tversky and
Kahneman's estimated one-parameter form is

$$w(p) = \frac{p^{\gamma}}{\left(p^{\gamma} + (1-p)^{\gamma}\right)^{1/\gamma}}$$

with $\gamma \approx 0.61$ for gains and $\gamma \approx 0.69$ for losses. The
function is inverse-S shaped: it crosses the diagonal near $p \approx 0.35$,
overweighting probabilities below that and underweighting those above. The
companion value function is

$$v(x) = \begin{cases} x^{\alpha} & x \ge 0 \\ -\lambda(-x)^{\beta} & x < 0 \end{cases}$$

with estimates $\alpha = \beta \approx 0.88$ and loss aversion
$\lambda \approx 2.25$.

### The normative counter-argument

The strongest case for independence is dynamic. Consider a decision-maker who
strictly prefers $L_{1A}$ to $L_{1B}$ and $L_{2B}$ to $L_{2A}$. Present the choice
as a two-stage lottery: first a draw determines whether the common consequence
occurs; only if it does not do you get the sub-lottery $p$ or $q$.

If the agent evaluates the tree by backward induction and satisfies **consequen-
tialism** (the choice at a node depends only on what remains) and **dynamic
consistency** (a plan made ex ante is carried out), then independence is forced.
Violating independence therefore requires giving up one of those two.

That is a real cost, and it is why the normative question stays open. An agent who
abandons dynamic consistency can be led through a sequence of individually
acceptable choices to a strictly dominated position. An agent who abandons
consequentialism must let the branches that did not occur influence the choice at
the node reached — which is exactly what regret theory says people do, and which
is not obviously irrational if regret is a real cost.

The modern literature on **resolute choice** and **sophisticated choice** explores
both routes. Neither has produced a consensus, and the honest statement is that
Allais's questionnaire opened a normative question that seventy years of work has
sharpened without closing.
