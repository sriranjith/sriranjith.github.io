---
title: Simpson's Paradox
slug: simpsons-paradox
alternateNames:
  - The Yule–Simpson Effect
  - Simpson's Reversal
  - The Amalgamation Paradox
summary: >-
  A treatment can work better for small stones, better for large stones, and
  still look worse overall. Every group prefers one thing and the total prefers
  the other. The arithmetic is correct both times.
hook: >-
  A treatment does better for men, and better for women, and worse for people.
  None of the arithmetic is wrong.
era: twentieth-century
date: 1903 (Yule), 1951 (Simpson), 1972 (named)
year: 1951
origin: >-
  Described by George Udny Yule in 1903 and again by Edward H. Simpson in a 1951
  note on contingency tables; Colin Blyth attached Simpson's name to it in 1972.
people:
  - edward-simpson
  - udny-yule
  - judea-pearl
domains:
  - statistics
  - probability
  - society
types:
  - aggregation
  - causality
  - probability
nature: veridical
difficulty: intermediate
status: resolved
renown: landmark
interactive: simpsons-paradox
concepts:
  - Weighted averages
  - Confounding
  - Causal graphs
  - The back-door criterion
  - Sure-thing principle
  - Aggregation bias
relationships:
  - kind: related
    to: berksons-paradox
    note: Two ways of being fooled by the shape of your data — one by pooling groups, one by selecting them.
  - kind: related
    to: monty-hall-problem
    note: Both punish the reader who looks at the numbers without asking how the numbers came to be arranged that way.
  - kind: related
    to: condorcet-paradox
    note: Another aggregation reversal — combining consistent parts into an inconsistent whole.
  - kind: contrasts-with
    to: goodharts-law
    note: Goodhart's law is a measure corrupted by being targeted; Simpson's paradox is a measure that was never measuring what you thought.
references:
  - source: simpson-1951
    role: primary-source
    note: The paper the effect is named after.
  - source: yule-1903
    role: paper
    note: The same reversal, described 48 years earlier.
  - source: blyth-1972-sure-thing
    role: paper
    note: Where the name "Simpson's paradox" was coined, and where the clash with the sure-thing principle was first pressed.
  - source: bickel-1975-berkeley
    role: paper
    locator: "Table 1 and Table 2"
    note: The Berkeley graduate admissions data — the most cited real instance.
  - source: charig-1986-kidney-stones
    role: paper
    note: The kidney-stone treatment figures.
  - source: julious-mullee-1994
    role: paper
    note: The reanalysis that made the kidney-stone case a standard teaching example.
  - source: pearl-causality
    role: book
    locator: "Chapter 6"
    note: The causal resolution — why the choice of table is not a statistical question.
  - source: savage-foundations-of-statistics
    role: book
    note: The source of the sure-thing principle.
furtherReading:
  - title: UCBAdmissions — the 1973 Berkeley data as a standard R dataset
    url: https://stat.ethz.ch/R-manual/R-devel/library/datasets/html/UCBAdmissions.html
    note: The full six-department table, so you can check every number on this page yourself.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

In 1973, the University of California, Berkeley looked at who it had let into
graduate school.

Of the men who applied, 44% got in. Of the women, 35% got in. That is a gap of
nine percentage points across more than twelve thousand applications. It looked
like exactly what it looked like.

So the university did the sensible thing and went department by department, to
find out which departments were responsible.

It could not find them.

Department A had admitted 82% of its women and 62% of its men. Department B:
68% of women, 63% of men. Department D: 35% of women, 33% of men. Department F:
7% of women, 6% of men. Department by department, women were doing slightly
*better* than men. Add the departments together and women were doing much worse.

Both of those statements come from the same set of numbers, and both of them are
arithmetically correct.

## Understand

Start with the thing that makes this feel impossible: you have a pile of numbers,
you split it into piles, one direction wins in every pile, and the other
direction wins when you push the piles back together. That should not be
allowed. Surely a whole is the sum of its parts.

It is — but a **percentage** is not.

Here is the whole trick in one sentence: **when you combine percentages, the
bigger group counts for more.** So if the two things you are comparing are
spread differently across the groups, the combined percentage can tell you
something the individual percentages never did.

At Berkeley, men and women were not applying to the same departments.

Some Berkeley departments admitted most applicants. Some admitted almost none —
one of the six largest took 6% of the men and 7% of the women who applied to it.
Men applied in large numbers to the easy departments. Women applied in large
numbers to the hard ones. Every applicant faced roughly the fair odds for the
department she or he had chosen, and women had, on the whole, chosen departments
where the odds were terrible for everyone.

The nine-point gap was real. It just was not made by admissions committees. It
was made earlier, by whatever it is that leads people to apply where they apply.

### The shape of the illusion

Think of it as two different questions that look like one question.

- *Within a department, does being a woman hurt your chances?* Mostly no. In four
  of the six largest departments it helped slightly.
- *Across the university, were women admitted at a lower rate?* Yes, clearly.

Neither answer is a mistake. They are answers to different questions, and the
paradox is the feeling that they ought to be the same question.

This can happen with anything measured as a rate: recovery rates in hospitals,
batting averages, click-through rates, crash rates per mile, pass rates in
schools. Any time the groups being compared are mixed differently across
conditions, the overall number can point the other way from every single
condition.

And here is the part that stings. There is no rule that says "always trust the
detailed breakdown" or "always trust the overall number". **Sometimes the split
table is right and sometimes the pooled table is right.** Which one you should
believe depends on what caused what — and no amount of staring at the data will
tell you that.

## Examples

### Berkeley, 1973

The university-wide figures reported by Bickel, Hammel and O'Connell in *Science*
in 1975:

| Applicants | Number | Admitted |
| --- | --- | --- |
| Men | 8,442 | **44%** |
| Women | 4,321 | **35%** |

Now the six largest departments, which between them handled about a third of all
applications. Departments are labelled A–F because the original authors did not
name them.

| Dept | Men applied | Men admitted | Men rate | Women applied | Women admitted | Women rate |
| --- | --- | --- | --- | --- | --- | --- |
| A | 825 | 512 | 62% | 108 | 89 | **82%** |
| B | 560 | 353 | 63% | 25 | 17 | **68%** |
| C | 325 | 120 | **37%** | 593 | 202 | 34% |
| D | 417 | 138 | 33% | 375 | 131 | **35%** |
| E | 191 | 53 | **28%** | 393 | 94 | 24% |
| F | 373 | 22 | 6% | 341 | 24 | **7%** |
| **Total** | **2,691** | **1,198** | **44.5%** | **1,835** | **557** | **30.4%** |

Women have the higher admission rate in four departments out of six. Pooled, men
beat women by fourteen percentage points.

Look at where the applications went. Departments A and B admitted roughly
two-thirds of everyone — and received 1,385 applications from men against 133
from women. Department F admitted about one applicant in sixteen — and received
373 from men and 341 from women. The men's total is dominated by the two
generous departments; the women's total is dominated by the brutal ones.

Bickel and his co-authors put it carefully. The aggregate difference is genuine.
The department-level data show, if anything, a small bias in favour of women.
The bias, they wrote, is in the pattern of applications, not in the decisions —
and explaining *that* pattern is a question about education and society, not
about admissions committees.

### Kidney stones

Charig and colleagues at the Institute of Urology in London published outcomes
for kidney-stone treatments in the *BMJ* in 1986. Julious and Mullee later drew
out the comparison between open surgery and percutaneous nephrolithotomy (PCNL,
a keyhole technique). Success means the stone was gone at three months.

| | Open surgery | PCNL |
| --- | --- | --- |
| Small stones (< 2 cm) | 81/87 = **93%** | 234/270 = **87%** |
| Large stones (≥ 2 cm) | 192/263 = **73%** | 55/80 = **69%** |
| **All patients** | 273/350 = **78%** | 289/350 = **83%** |

Open surgery wins for small stones. Open surgery wins for large stones. PCNL
wins overall.

The reason is in the margins. Surgeons chose the treatment. They reached for
open surgery for the difficult cases — 263 of the 350 open-surgery patients had
large stones — and used the gentler keyhole method mostly on the easy ones. Open
surgery's overall number is dragged down by the fact that it was doing the hard
work.

Here the answer is not ambiguous. If you have a kidney stone, you know how big
it is, and you want the row that matches you. **The split table is the one to
trust.** This is the opposite of what a naïve "bigger sample, more reliable"
instinct would say.

### The smallest possible version

Two batters, one season, hits per at-bat. Reversals of exactly this kind turn up
in real baseball records; this is a clean constructed instance you can check by
eye.

| | Against easy pitchers | Against hard pitchers | Season total |
| --- | --- | --- | --- |
| Ashe | 11/20 = **.550** | 45/180 = **.250** | 56/200 = .280 |
| Byrne | 90/180 = .500 | 4/20 = .200 | 94/200 = **.470** |

Ashe hits better against easy pitchers. Ashe hits better against hard pitchers.
Byrne's season average is nearly two hundred points higher.

Ashe faced hard pitching nine times out of ten. Byrne faced it one time in ten.
Ashe's season average is mostly the .250 figure; Byrne's is mostly the .500
figure. Nobody had a better season; one of them had an easier one.

## Explore

The question the paradox forces is: **which table should you act on?**

There is a widespread but wrong answer, sometimes taught as a rule: always
disaggregate, because more detail is more truth. It is wrong because you can
always keep splitting. Split Berkeley by department, then by subfield, then by
year, then by the applicant's undergraduate institution. Each split gives new
numbers, and the direction can flip more than once on the way down. If finer is
always better, you end up conditioning on so much that every cell holds one
person and comparison becomes meaningless.

Judea Pearl's diagnosis, developed through the 1990s and set out in *Causality*,
is that the question is not answerable from the data at all. Two datasets can be
numerically identical, cell for cell, and require opposite decisions — because
the variables mean different things. Simpson himself made exactly this point in
1951, using two examples with the same arithmetic and different correct
readings. He is often remembered as the man who found the paradox; he is better
remembered as the man who said the numbers do not decide.

What decides is the causal structure. Three cases:

- **The splitting variable is a common cause of both the treatment and the
  outcome** — a *confounder*. Stone size affects which operation the surgeon
  chooses and how likely the patient is to recover. Split the table. The split
  table is right.
- **The splitting variable sits between the treatment and the outcome** — a
  *mediator*. If a drug lowers heart-attack risk *by* lowering blood pressure,
  then splitting by blood pressure hides the drug's effect. Do not split. The
  pooled table is right.
- **The splitting variable is a common effect of both** — a *collider*.
  Splitting on it manufactures an association from nothing. This is
  [Berkson's paradox](/paradox/berksons-paradox/), and here splitting is not
  merely unhelpful, it is actively misleading.

Berkeley is genuinely contested precisely because department is arguable. Is
department a confounder — women happen to be interested in different fields, for
reasons outside the university's control? Or is it a mediator — women were
steered towards, or pushed out of, particular fields by the same system that
then admitted them? On the first reading, adjusting for department is correct
and the university is exonerated. On the second, adjusting for department
conceals part of the effect you were trying to measure, and the aggregate figure
is the honest one. Bickel and his co-authors saw this clearly and said so: the
data settle the question of committee bias and leave the larger question open.

### The sure-thing principle

Leonard Savage, in *The Foundations of Statistics* (1954), stated a principle
that sounds beyond dispute:

> If you would prefer act $A$ to act $B$ if you knew that $E$ obtained, and you
> would also prefer $A$ to $B$ if you knew that $E$ did not obtain, then you
> should prefer $A$ to $B$ without knowing anything about $E$.

Savage illustrated it with a businessman deciding whether to buy a property
before an election. He buys if the Democrat wins; he buys if the Republican
wins; therefore he should buy now, without waiting for the result.

Simpson's paradox looks like a direct counterexample, and Colin Blyth pressed
exactly this point in the paper that gave the effect its name in 1972. Open
surgery is better for small stones and better for large stones, yet worse
overall. Is that not "better whichever way $E$ turns out, and worse regardless"?

No — and the reason is the heart of the matter. Savage's principle is about
**acts**. It requires that choosing $A$ rather than $B$ does not change whether
$E$ obtains. In the kidney-stone data, choosing the treatment is entangled with
the stone size, not because treatment causes stone size but because stone size
caused the treatment. The event you are conditioning on is not independent of
the choice you are evaluating.

Pearl's resolution is that the sure-thing principle is valid — once it is stated
causally, in terms of interventions rather than observed frequencies. If a
surgeon *decides* to operate openly on every small stone and *decides* to
operate openly on every large stone, open surgery does win overall. The
reversal lives entirely in the gap between "patients who received this
treatment" and "patients assigned this treatment". Randomised trials exist to
close that gap, which is another way of saying that randomisation is a machine
for making the pooled table trustworthy.

## Deep Dive

### The arithmetic

The reversal is a failure of the *mediant* to respect the ordering of fractions.
For positive denominators, the pooled rate of two groups is

$$\frac{a_1 + a_2}{n_1 + n_2}$$

which is not the average of $a_1/n_1$ and $a_2/n_2$ but a **weighted** average:

$$\frac{a_1 + a_2}{n_1 + n_2} \;=\; w_1 \cdot \frac{a_1}{n_1} \;+\; w_2 \cdot \frac{a_2}{n_2},
\qquad w_i = \frac{n_i}{n_1 + n_2}$$

Two groups, two treatments. Let $p_z$ be treatment $A$'s success rate in stratum
$z$ and $q_z$ treatment $B$'s, with strata weights $u_z$ for $A$ and $v_z$ for
$B$ (each summing to 1). The reversal is the simultaneous truth of

$$p_1 > q_1, \qquad p_2 > q_2, \qquad \sum_z u_z p_z < \sum_z v_z q_z$$

If $u_z = v_z$ for every $z$ — the same mix on both sides — no reversal is
possible, since a weighted average with fixed weights is monotone in its
arguments. **The reversal is entirely a product of unequal weights.** That is
why randomisation kills it: randomisation forces $u = v$ in expectation.

How far can it go? The gap you can hide is bounded by the spread of the
stratum rates. Writing $\bar p = \sum u_z p_z$, the difference between the
pooled comparison and the honest one decomposes as

$$\underbrace{\sum_z u_z p_z - \sum_z v_z q_z}_{\text{pooled difference}}
= \underbrace{\sum_z u_z (p_z - q_z)}_{\text{genuine effect}}
+ \underbrace{\sum_z (u_z - v_z)\, q_z}_{\text{mix effect}}$$

The second term is a covariance between allocation and baseline quality. It has
no upper bound in the direction that matters: with two strata you can make the
genuine effect arbitrarily small and positive while the mix effect is close to
$q_{\max} - q_{\min}$. Blyth built his 1972 example this way, driving the
reversal almost to the limit — which is the point, because it shows the effect
is not a small-sample artefact that more data will wash out. More data makes a
Simpson reversal *more* precise, not less.

Check it against Berkeley. Men's weights across A–F are heavily loaded onto A
and B, which admit at 62% and 63%: $u_A = 825/2691 = 0.307$, $u_B = 0.208$, so
over half the male applications went to the two most generous departments.
Women's weights are $v_A = 108/1835 = 0.059$ and $v_B = 0.014$ — under 8% between
them — while $v_C + v_D + v_E + v_F = 0.927$ lands in departments admitting 24%
to 35%.

Now hold the mix fixed. Apply the *men's* department-by-department admission
rates to the *women's* distribution of applications:

$$\sum_z v_z\, p_z^{\text{men}} = 0.0589(0.621) + 0.0136(0.630) + 0.3232(0.369)
+ 0.2044(0.331) + 0.2142(0.277) + 0.1858(0.059) = 0.302$$

Men facing the departments women actually applied to would have been admitted at
30.2%. Women were admitted at 30.4%. A fourteen-point gap becomes a fifth of a
point, pointing the other way. Nothing was removed from the data except the
difference in where the applications went.

### The causal resolution

Let $X$ be treatment, $Y$ outcome, $Z$ the splitting variable. The two tables
correspond to two different quantities:

- Pooled: $P(y \mid x)$ — the outcome among those who *had* $x$.
- Split, then recombined: $\sum_z P(y \mid x, z)\, P(z)$ — the standardised, or
  adjusted, rate.

Neither is automatically the causal quantity you want, which Pearl writes with
the do-operator:

$$P(y \mid do(x))$$

— the outcome distribution if $X$ were *set* to $x$ by intervention, leaving
everything upstream of $X$ untouched. The two observational quantities each
equal $P(y \mid do(x))$ under different conditions, and never both at once when
a reversal is present.

The **back-door criterion** says exactly when the adjusted formula is the causal
one. A set $Z$ is admissible for the effect of $X$ on $Y$ if

1. no node in $Z$ is a descendant of $X$, and
2. $Z$ blocks every path from $X$ to $Y$ that starts with an arrow into $X$.

When $Z$ satisfies it, the **adjustment formula** holds:

$$P(y \mid do(x)) \;=\; \sum_z P(y \mid x, z)\, P(z)$$

and the split table, recombined with the population weights $P(z)$, is correct.

Run the three graphs.

**Confounder.** $Z \to X$, $Z \to Y$, $X \to Y$. Stone size determines the
surgeon's choice and the chance of success. There is a back-door path
$X \leftarrow Z \to Y$; conditioning on $Z$ blocks it; $Z$ is not a descendant of
$X$. Both conditions hold, so adjust. Standardising the kidney-stone data to the
overall size distribution (357 small, 343 large):

$$P(\text{success} \mid do(\text{open})) = 0.93 \cdot \tfrac{357}{700} + 0.73 \cdot \tfrac{343}{700} \approx 0.83$$

$$P(\text{success} \mid do(\text{PCNL})) = 0.87 \cdot \tfrac{357}{700} + 0.69 \cdot \tfrac{343}{700} \approx 0.78$$

Open surgery wins, by about five points, in the direction the stratified table
already indicated. The unadjusted 78% versus 83% is a fact about surgeons'
triage decisions, not about surgery.

**Mediator.** $X \to Z \to Y$. Here $Z$ *is* a descendant of $X$, so the first
back-door condition fails outright and the adjustment formula does not give the
causal effect. Conditioning on a mediator removes precisely the part of the
effect you are trying to measure. The correct answer is the pooled table.

**Collider.** $X \to Z \leftarrow Y$. The path $X \to Z \leftarrow Y$ is blocked
by default; conditioning on $Z$ *unblocks* it and creates dependence where none
existed. Adjusting is worse than useless. See
[Berkson's paradox](/paradox/berksons-paradox/).

The conclusion is the one that makes statisticians uncomfortable and is
nevertheless right: **the data are consistent with every one of these graphs.**
$P(x, y, z)$ is the same in all three. The choice of table is underdetermined by
any amount of observation, and is fixed only by assumptions about the mechanism
— assumptions that must be argued for, not estimated.

Formally, Pearl's *sure-thing principle* recovers Savage: if
$P(y \mid do(x), z) > P(y \mid do(x'), z)$ for every $z$, and $Z$ is not affected
by $X$, then $P(y \mid do(x)) > P(y \mid do(x'))$. There is no interventional
Simpson's paradox. The reversal is a purely observational phenomenon, and it
should be read as a signature that something is standing between you and the
causal question.

## History

**1899–1903.** Karl Pearson, with Alice Lee and Leslie Bramley-Moore, noted a
"spurious correlation" produced by mixing heterogeneous records. George Udny
Yule set the effect out sharply in *Biometrika* in 1903, in his notes on the
theory of association of attributes, and treated it as a fallacy of illegitimate
pooling. Everything essential is already there.

**1951.** Edward H. Simpson, a British statistician who had worked at Bletchley
Park, published four pages in the *Journal of the Royal Statistical Society* on
the interpretation of interaction in contingency tables. His contribution was
not the arithmetic, which he took as known, but the interpretive claim: he gave
two examples with identical numbers — one about a card trick, one about a
medical treatment — and argued that the "sensible" reading differs between them.
The tables cannot tell you which reading is sensible. That is the modern point,
made in 1951.

**1972.** Colin R. Blyth, writing in the *Journal of the American Statistical
Association*, called the effect "Simpson's paradox" and presented it as an
apparent violation of Savage's sure-thing principle. The name stuck, to
Simpson's mild embarrassment; he had been explicit that he was not claiming
priority. Some statisticians still write "the Yule–Simpson effect" for accuracy.

**1975.** Peter Bickel, Eugene Hammel and J. William O'Connell published the
Berkeley admissions analysis in *Science*. The Graduate Division had asked for
it because the aggregate figures looked like grounds for a lawsuit. The paper is
a model of restraint: it shows the committee-level bias is small and, if
anything, favours women, and it says plainly that this leaves untouched the
question of why women applied where they did.

**1986–1994.** Charig and colleagues reported kidney-stone outcomes in the
*BMJ*. Julious and Mullee returned to the figures in 1994 under the title
"Confounding and Simpson's paradox", and the example entered the medical
curriculum, where it has stayed.

**1990s–2000s.** Judea Pearl's work on graphical causal models supplied the
resolution that had been missing since Yule: a formal criterion, the back-door
criterion, that says when to adjust and when not to, and a proof that the
criterion cannot be read off the data.

## Why It Matters

Simpson's paradox is the reason "we looked at the data" is not an argument.

It changed how comparisons are reported. Age-standardised mortality rates,
risk-adjusted surgical outcomes, and school value-added scores all exist because
raw rates are known to be uninterpretable when the underlying populations
differ. A hospital that takes the sickest patients will look worse than a
hospital that turns them away, on every unadjusted measure, forever. Publishing
unadjusted league tables does not just mislead; it creates an incentive to
refuse difficult cases.

It supplies the strongest practical argument for randomisation. The whole point
of assigning treatment by coin flip is to force the allocation weights to be
equal across arms, which is exactly the condition under which the reversal
cannot occur. Before Simpson's paradox is made vivid, randomisation looks like
statistical fussiness; afterwards it looks like the only defence available.

It set a limit on what data alone can do. Pearl's demonstration that identical
datasets can require opposite decisions is a genuine impossibility result about
inference: causal conclusions require causal premises. This is now the standard
framing across epidemiology, econometrics and machine learning, and it is why
serious empirical papers now draw a diagram of assumed mechanisms before they
report a coefficient.

And it is a permanent caution about discrimination statistics. The Berkeley case
is cited in both directions — as proof that apparent bias can evaporate, and as
proof that evaporating it can hide the real mechanism. Both citations are fair.
The honest conclusion is narrower and more useful than either: the admissions
committees were not the problem, and something upstream was.

## Modern Relevance

**Algorithmic fairness.** A model can be calibrated within every subgroup and
still show large disparities in aggregate, or the reverse. Several of the
best-known impossibility results in fairness — the demonstration that
calibration, equal false-positive rates and equal false-negative rates cannot
generally hold together when base rates differ — are Simpson-shaped: the
subgroup and the aggregate answer different questions and cannot be reconciled
by choosing a better threshold.

**A/B testing.** A test can win overall and lose on desktop and lose on mobile,
if the traffic mix shifted mid-experiment. Sample-ratio mismatch alarms exist in
experimentation platforms for precisely this reason: unequal weights across arms
are the precondition for the reversal, so a platform that detects them is
detecting the paradox before it happens.

**COVID-19 case fatality rates.** Early in the pandemic, several countries
reported higher raw case fatality rates than others while having lower rates in
every age band — because their populations, or their tested populations, were
older. In 2020 the same reversal appeared inside single countries when
vaccinated and unvaccinated death counts were compared without age
stratification: because the vaccinated group skewed heavily elderly, unadjusted
figures could make vaccination appear ineffective while every age band showed a
large benefit.

**Salary and pay-gap analysis.** Adjusting a gender pay gap for job title,
seniority and department shrinks it — but only if those variables are
confounders. If people were sorted into titles and departments by the same
process under examination, they are mediators, and adjusting for them subtracts
the effect from itself. Which they are is not a statistical question, and the
argument about pay gaps is very largely an argument about this.

**Model evaluation in machine learning.** Aggregate accuracy is a weighted
average over a test set's composition. A model that beats a baseline on every
identifiable slice can lose on the headline metric, and vice versa, whenever the
slice proportions in the test set differ from deployment. This is why sliced
evaluation is now standard practice, and why a single leaderboard number is
treated with suspicion.
