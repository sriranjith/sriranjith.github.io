---
title: Berkson's Paradox
slug: berksons-paradox
alternateNames:
  - Berkson's Bias
  - Berkson's Fallacy
  - Admission Rate Bias
  - Collider Bias
summary: >-
  Two unrelated things can look strongly related once you only look at a
  selected slice. Among hospital patients, among the people you date, among
  everyone you hired — the selection itself invents the correlation.
era: twentieth-century
date: 1946
year: 1946
origin: >-
  Described by Joseph Berkson of the Mayo Clinic in a 1946 note in Biometrics
  Bulletin, warning that associations found in hospital records may be created
  entirely by the fact of admission.
people:
  - joseph-berkson
  - judea-pearl
domains:
  - statistics
  - probability
  - psychology
types:
  - observation
  - probability
  - causality
nature: counterintuitive-result
difficulty: intermediate
status: resolved
concepts:
  - Selection bias
  - Colliders
  - Conditioning on a common effect
  - Explaining away
  - Restriction of range
relationships:
  - kind: related
    to: monty-hall-problem
    note: Both turn on the process that decided what you were allowed to see, rather than on what you saw.
  - kind: related
    to: friendship-paradox
    note: Two sampling artefacts wearing different clothes — one selects on a common effect, the other samples in proportion to degree.
  - kind: related
    to: boy-or-girl-paradox
    note: In both, the answer depends on the rule that generated the information, not on the information itself.
references:
  - source: berkson-1946
    role: primary-source
    note: The original four-page warning about fourfold tables built from hospital records.
  - source: sackett-1979-bias
    role: paper
    note: Names it "admission rate bias" and supplies survey evidence that the required differential admission rates really occur.
  - source: pearl-causality
    role: book
    locator: "Chapter 1, §1.2.3 and Chapter 11"
    note: The graphical account — conditioning on a collider opens a path that was blocked.
  - source: griffith-2020-collider
    role: paper
    note: A large modern instance, in which volunteer testing turns known COVID-19 risk factors upside down.
  - source: simpson-1951
    role: paper
    note: The neighbouring conditioning trap; Simpson's and Berkson's effects are often confused with one another.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Pick a restaurant at random from the ones you actually go to. Now ask: is the
food good, or is it nearby?

You will find, oddly, that the good ones tend to be far away and the nearby ones
tend to be mediocre. It feels like a law of nature. Distance apparently makes
food taste better.

It does not, of course. There are plenty of restaurants nearby that are also
delicious — you go to those constantly and think nothing of it — and plenty far
away that are terrible, which you have never heard of and never will. What has
happened is that you only ever eat somewhere if it clears a bar: **good enough,
or close enough, or some mix of the two.** A place that is far away has to be
excellent to make the trip worth it. A place that is around the corner only has
to be adequate.

So among the restaurants you actually visit — and only among those — being far
away predicts being good.

The same shape turns up in far more serious places. In 1946 a statistician at
the Mayo Clinic noticed that two diseases with nothing to do with each other
appeared to be linked, over and over again, in hospital records. The link was
strong. It was also entirely manufactured by the hospital doors.

## Understand

Here is the mechanism, stripped down.

Suppose two things — call them A and B — are completely unrelated in the general
population. Knowing someone has A tells you nothing about whether they have B.

Now suppose that either one of them can get you into some selected group. Having
A makes you more likely to be admitted to hospital. So does having B. You end up
in the hospital if you have A, *or* if you have B, *or* just by bad luck.

Look at the people inside the hospital. You meet a patient. You learn she has A.
That already accounts for why she is here. It explains her presence, so you no
longer need any other explanation — and B was one of the other explanations. She
becomes *less* likely to have B than a patient about whom you know nothing.

Now meet a patient who does *not* have A. Something got her admitted. If it was
not A, then B has just become the leading candidate.

Inside the hospital, A predicts the absence of B, strongly. Outside, A predicts
nothing at all. Nothing about anyone's body changed. The correlation was
produced by walking through the door.

### Explaining away

The everyday name for this is **explaining away**, and you do it constantly
without noticing.

Your car will not start. Two possible causes: a flat battery, or no fuel. Before
you check anything, these are independent — a dead battery tells you nothing
about the fuel tank. Then you look at the gauge and see the tank is empty. Your
suspicion of the battery drops immediately.

That drop is correct reasoning. But notice what happened to the statistics:
*among cars that will not start*, an empty tank and a dead battery are now
negatively associated, even though across all cars in the world they are
unrelated. You conditioned on their common effect.

The car that will not start is the hospital. The flat battery and the empty tank
are the two diseases.

### Why it is so hard to see

Selection bias is usually taught as the risk of a *non-representative* sample —
a survey of newspaper readers is not a survey of the country. That version is
intuitive: your sample has too many of one kind of person.

Berkson's version is nastier, because the sample can be non-representative in a
way that reverses relationships rather than merely shifting them. You are not
just over-counting sick people. You are creating structure. And crucially, **the
bias gets worse, not better, with more data.** A million hospital records give
you a beautifully precise estimate of a relationship that does not exist.

The signal that you may be in trouble is simple to state and easy to miss:
*could having either of these two things have affected whether this person is in
my dataset at all?* If yes, any association you find between them is suspect.

## Examples

### Berkson's hospital

Take a population of 10,000 people and two conditions with nothing to do with
one another. Each affects 10% of the population, independently, so 100 people
have both. Now let each condition raise the chance of being in hospital: 20%
for either condition on its own, acting independently, against a 1% background
rate for everyone else.

Admission probability for someone with both is $1 - (0.8)(0.8) = 0.36$.

| Group | In population | Admission rate | In hospital |
| --- | --- | --- | --- |
| Neither condition | 8,100 | 1% | 81 |
| Condition A only | 900 | 20% | 180 |
| Condition B only | 900 | 20% | 180 |
| Both A and B | 100 | 36% | 36 |
| **Total** | **10,000** | | **477** |

In the population, the two are exactly independent:

| | Has B | No B | Rate of B |
| --- | --- | --- | --- |
| Has A | 100 | 900 | **10%** |
| No A | 900 | 8,100 | **10%** |

Among the 477 patients, they are not:

| | Has B | No B | Rate of B |
| --- | --- | --- | --- |
| Has A | 36 | 180 | **16.7%** |
| No A | 180 | 81 | **69.0%** |

A patient without condition A is more than four times as likely to have
condition B as a patient with it. The odds ratio in the population is exactly
1.00. In the hospital it is

$$\frac{36 \times 81}{180 \times 180} = \frac{2916}{32400} = 0.09$$

An apparent eleven-fold protective effect, from a population in which the two
conditions have no relationship whatsoever. No disease process, no confounder,
no measurement error, no small sample. Only the door.

Berkson's own 1946 worked example used cholecystitis and diabetes, and he
observed that this artefact could equally well manufacture an apparent
*protective* effect of one disease against another — a result that would look
like a discovery, and would be published.

### Dating

Suppose two traits — call them kindness and looks, though any pair will do — are
uncorrelated across the population. Score each from 1 to 10, drawn independently.

You will consider dating someone only if their combined score is 12 or more.
That is the bar. Nothing about it is unreasonable, and nothing about it favours
one trait over the other.

Among the people who clear the bar:

| Kindness | Minimum looks needed | Average looks among those who qualify |
| --- | --- | --- |
| 10 | 2 | 6.0 |
| 8 | 4 | 7.0 |
| 6 | 6 | 8.0 |
| 4 | 8 | 9.0 |
| 2 | 10 | 10.0 |

Anyone extremely kind can get onto your list with quite ordinary looks. Anyone
who made the list despite being unkind is there because they are stunning. So
within your dating pool, kindness and looks run in opposite directions, and it
looks exactly like the universe is enforcing a trade-off.

There is no trade-off. Someone who scores 10 on both exists and is more common
than someone who scores 10 and 2 — but they are a small fraction of a pool that
is dominated by the enormous number of people scraping over the line from one
side or the other. The people whose absence would restore the picture are the
ones scoring 3 and 4, and you never meet them in this context at all.

This is the honest explanation for a very large family of complaints. *Why are
smart people so difficult? Why are attractive houses always overpriced? Why are
cheap flights always at terrible times?* In each case a selection rule combined
two attributes into one threshold, and the trade-off you are observing is the
threshold, not the world.

### Hiring

A company hires on two criteria: technical skill and interviewing well. Both are
scored, and offers go to candidates whose total clears a bar. In the applicant
pool the two are roughly uncorrelated.

Among the people hired, they are negatively correlated. Managers then observe,
year after year, that the strongest engineers interview poorly and the smooth
interviewers are weaker engineers, and conclude that the two abilities are in
tension. They are not — but no manager ever sees the applicants who were weak at
both, and those are exactly the ones who would have restored the picture.

The practical damage is real. This is the reasoning behind claims that a
selection criterion is "not predictive" once you look at the people you selected
on it. Range restriction and Berkson's paradox are the same phenomenon, and
validating a hiring test on hired employees alone will systematically
underestimate — or invert — how well it works.

## Explore

The modern name for Berkson's paradox is **collider bias**, and the name comes
from the picture. Draw the causal graph:

$$A \longrightarrow H \longleftarrow B$$

Two arrows collide at $H$ — hospitalisation, or being hired, or being in your
dating pool. $H$ is a common *effect* of $A$ and $B$.

This is the third of the three elementary structures a variable can sit in, and
it behaves in the opposite way from the other two.

- **Chain** $A \to M \to B$: $A$ and $B$ are associated; conditioning on $M$
  breaks the association.
- **Fork** $A \leftarrow C \to B$: $A$ and $B$ are associated; conditioning on
  $C$ breaks the association.
- **Collider** $A \to H \leftarrow B$: $A$ and $B$ are *not* associated;
  conditioning on $H$ **creates** an association.

The first two match intuition — conditioning cleans things up. The collider
does not, and this is the single most common source of error in observational
research. Judea Pearl's contribution was to make the rule mechanical: given a
graph, an algorithm decides which variables you must adjust for and which you
must not touch. The reflex "control for everything you measured" is wrong, and
this is why. Adjusting for a collider does not add noise or waste power; it
introduces bias where there was none.

A subtlety worth stating: conditioning on a *descendant* of a collider produces
the same effect, in weaker form. You do not need to select on hospitalisation
itself. Selecting on anything downstream of it — having a hospital record, being
reachable through a clinic mailing list, having answered a survey sent to
patients — leaks the same bias in.

### Is this really the same thing as Simpson's paradox?

They are close cousins and are frequently conflated, but they are not the same,
and the difference is exactly the one that matters for what you should do.

[Simpson's paradox](/paradox/simpsons-paradox/) is usually generated by a
*confounder* — a fork — and the fix is to condition on it. Berkson's paradox is
generated by a *collider*, and conditioning on it is the disease rather than the
cure.

The two look alike because both are cases where a table changes its story when
you slice it. They come apart because in one case slicing is the right move and
in the other it is precisely the wrong one — and the data cannot tell you which
case you are in. That is the same lesson from both directions: **conditioning is
a causal act, and it needs a causal justification.**

### How big can it get?

Berkson's own view was that the effect was large enough to explain published
findings, not merely to add noise. Sackett's 1979 catalogue of biases went
further and gave empirical support: he showed hospitalisation rates that differ
enough between conditions for the artefact to bite in practice, and named it
"admission rate bias" in his list of thirty-five ways clinical research goes
wrong.

There is also a strand of criticism, which deserves its due, arguing that
Berkson bias is often invoked more readily than the numbers warrant — that in
many real settings the differential admission rates required to produce a large
artefact are implausibly extreme. The honest position is that the artefact's
size depends on how strongly each factor drives selection, that this is
measurable in principle, and that it is usually not measured. Quantitative bias
analysis exists to fill that gap, and remains under-used.

## History

**1946.** Joseph Berkson, head of biometry at the Mayo Clinic, published a short
note in *Biometrics Bulletin* under a deliberately dry title: "Limitations of
the Application of Fourfold Table Analysis to Hospital Data". His concern was
practical and immediate. Hospital records were the cheapest source of data on
disease association, and researchers were building two-by-two tables from them
as though the patients were a sample of the public. Berkson worked through the
arithmetic for cholecystitis and diabetes and showed that a spurious association
— of either sign, and of substantial size — could be generated by admission
rates alone.

Berkson is a complicated figure. He was a brilliant statistician, coined the
term "logit", and was also, for the rest of his career, one of the most
persistent opponents of the conclusion that smoking causes lung cancer. Some of
his objections in that debate were versions of this very argument: hospital-based
case-control studies, he maintained, were exactly the kind of design his 1946
paper had warned about. He was wrong about smoking, and the epidemiologists who
answered him — Cornfield above all — developed sensitivity analyses that showed
no plausible selection effect could account for the observed risk ratios. The
paradox that bears his name is sound; his most famous application of it was not.

**1955–1980.** The result was rediscovered and renamed repeatedly across fields —
"Berkson's fallacy", "admission rate bias", "selection bias", and in psychometrics
"restriction of range", which is the same structure applied to continuous traits.
David Sackett's 1979 catalogue fixed the epidemiological terminology.

**1988 onwards.** Judea Pearl's work on graphical models supplied the general
account. Once causal structure is drawn as a graph, Berkson's paradox is not a
special hazard of hospital data but one of exactly three ways that conditioning
changes an association — the collider case. The d-separation criterion turns
Berkson's careful hand-worked warning into a rule a computer can check.

**2000s.** The term "collider bias" entered general epidemiological use, largely
through Miguel Hernán, Sander Greenland, Sonia Hernández-Díaz and colleagues,
who showed that a striking number of published puzzles — including the
"birthweight paradox" and several obesity-mortality reversals — had this shape.

## Why It Matters

Berkson's paradox is the reason that "we analysed a very large clinical database"
is not, by itself, reassuring.

It reframed study design. Case-control studies drawing controls from hospital
wards were standard practice; after 1946 they needed a defence, and the modern
insistence that controls be drawn from the same source population as the cases is
a direct consequence. The whole apparatus of thinking carefully about the
sampling frame — rather than only the sample size — descends from this.

It broke the "adjust for everything" heuristic. For decades, adding covariates
to a regression was treated as unambiguously conservative: it could cost you
precision, never validity. The collider case shows that is false. A variable
affected by both your exposure and your outcome will bias the estimate if you
include it, and the bias can be larger than the effect you are hunting. Modern
practice — draw the assumed graph, then let the graph choose the adjustment set
— exists because of this.

It explains a durable class of false beliefs about the world. The perception
that talent and social skill are in tension, that beauty and intelligence trade
off, that successful companies must have had luck rather than merit, that
high-scoring students are less creative: each of these is a plausible reading of
a selected sample, and each survives because the counterexamples are systematically
invisible. Not everything that looks like a trade-off is one. Some of them are
just doors.

## Modern Relevance

**COVID-19 risk factors.** Griffith and colleagues showed in 2020 that early
studies drawing on volunteer cohorts and on tested-only samples were badly
exposed to this bias, because both the risk factors and the outcome affected who
got tested at all. In their analysis the direction of well-established
associations could invert — smoking, for one, appearing protective in
test-selected data. This is Berkson's 1946 warning arriving in the middle of a
pandemic, at scale, with policy attached.

**The obesity paradox.** Several studies have reported that among patients who
already have heart failure, diabetes or kidney disease, higher body mass index
predicts *better* survival. One leading explanation is collider bias: you are
conditioning on having the disease, and both obesity and other unmeasured causes
drive people into that group, so the obese patients are systematically less
burdened by the other causes. The debate is not fully settled, which is part of
why it is a good illustration — the artefact is hard to rule out, and hard to
rule in.

**Recommender systems and feedback loops.** A recommender only observes outcomes
for items it chose to show. Whether a user would have liked an unrecommended item
is unobservable, and the training data is selected on a variable downstream of
both the item's quality and the user's taste. Off-policy evaluation, inverse
propensity weighting and deliberate exploration are all machinery for undoing
exactly this.

**Machine learning on convenience data.** Any model trained on records of people
who reached a particular system — loan applicants who were approved, patients who
were admitted, users who completed onboarding — learns relationships that hold
in that slice. Deployed on the general population, the learned relationship may
not just weaken; it may point the wrong way. "Distribution shift" covers many
sins, and this is one of the sharpest.

**Scientific literature itself.** Journals select papers on some mix of novelty
and rigour. Among published papers, the two will appear negatively correlated,
which is a decent account of the widespread impression that the most exciting
findings are the least solid. The impression is real. The trade-off is the
editorial threshold.
