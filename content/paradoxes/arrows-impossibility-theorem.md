---
title: Arrow's Impossibility Theorem
slug: arrows-impossibility-theorem
alternateNames:
  - Arrow's Paradox
  - The General Possibility Theorem
summary: >-
  Write down four things any fair voting system should obviously do. Arrow proved
  in 1951 that with three or more options, no method of combining ranked
  preferences can do all four — except one that always follows a single person.
era: twentieth-century
date: 1950 (paper), 1951 (book), 1963 (corrected second edition)
year: 1951
origin: >-
  Proved by Kenneth Arrow in his Columbia doctoral dissertation, published as the
  1950 Journal of Political Economy paper "A Difficulty in the Concept of Social
  Welfare" and then as the 1951 monograph Social Choice and Individual Values.
people:
  - kenneth-arrow
  - nicolas-de-condorcet
  - amartya-sen
domains:
  - economics
  - society
  - mathematics
types:
  - aggregation
  - decision-making
nature: impossibility-result
difficulty: expert
status: resolved
concepts:
  - Social welfare function
  - Independence of irrelevant alternatives
  - Pareto efficiency
  - Non-dictatorship
  - Pivotal voter
  - Ordinal versus cardinal preference
relationships:
  - kind: related
    to: cap-theorem
    note: >-
      Both are impossibility results that work by naming three or four properties
      everyone wants and proving they cannot coexist. Neither says the system is
      useless; both say the designer must choose in advance which property to give
      up.
  - kind: related
    to: flp-impossibility
    note: >-
      Two proofs that a group cannot be guaranteed to reach a coherent joint
      decision under conditions that look entirely reasonable — one about
      preferences, one about messages.
  - kind: contrasts-with
    to: abilene-paradox
    note: >-
      Arrow shows a group decision can diverge from its members' preferences for
      structural reasons that no amount of honesty removes. The Abilene paradox
      shows the same divergence arising from pure failure of communication. The
      contrast separates the part of collective failure that is fixable from the
      part that is not.
references:
  - source: arrow-1950-difficulty
    role: primary-source
    note: The first published statement, in the Journal of Political Economy.
  - source: arrow-1951-social-choice
    role: primary-source
    note: >-
      The monograph. The 1963 second edition contains the corrected conditions
      after Blau found an error in the original formulation.
  - source: geanakoplos-2005-three-proofs
    role: paper
    note: The pivotal-voter proof used here, in its cleanest published form.
  - source: sen-1999-possibility
    role: paper
    note: >-
      Sen's Nobel lecture, and the best short account of what escaping the theorem
      requires.
  - source: sep-arrows-theorem
    role: encyclopedia
  - source: gibbard-1973-manipulation
    role: paper
    note: The result that closes off the most popular escape route from Arrow.
  - source: condorcet-1785-essai
    role: primary-source
    note: The 1785 cycle, which is the theorem's most important special case.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Suppose you are designing a voting system from scratch. Not a party or a policy —
just the machinery for turning what people want into what a group decides.

You start by writing down the things your system must obviously do. Not clever
things. Boring, unarguable things.

**One.** It has to work no matter what people want. You cannot tell citizens that
their opinions are not allowed.

**Two.** If every single person prefers apples to oranges, the group has to
prefer apples to oranges. If a system can fail this, it is not aggregating
anything.

**Three.** Whether the group ranks apples above oranges should depend on how
people feel about apples and oranges. Not on how they feel about pears. A
candidate with no chance should not be able to flip the result between the two
who do.

**Four.** No one person gets to decide everything. There is no king.

Four requirements. Every one of them sounds like the minimum. You would be
embarrassed to propose a system that failed any of them.

In 1951 a graduate student named Kenneth Arrow proved that **if there are three
or more options, no system can satisfy all four.** Not "no system anyone has found
yet". No system. Ever. The proof is a few pages long, and it works by showing
that any method satisfying the first three must satisfy the fourth backwards —
there must be a dictator hiding inside it.

He was twenty-nine. The result won him a Nobel Prize and ended a two-hundred-year
search.

## Understand

Arrow's theorem is one of the most misquoted results in the social sciences. So
before anything else: **it does not say that voting is pointless, that democracy
is incoherent, or that all electoral systems are equally bad.** It says something
much narrower and much more useful. Getting the scope right is the main work of
understanding it.

### What the theorem is actually about

Arrow is asking about a very specific machine. You feed it a **ranking** from
every person — a list, most preferred to least, with no numbers attached. It
returns **one ranking for the group**, also a complete list. That machine is
called a *social welfare function*.

Two features of that setup are doing enormous work.

**Only rankings go in.** Each person says "I prefer A to B to C". Nobody says by
how much. Nobody says whether their gap between A and B is bigger than someone
else's gap between B and C. The machine never learns intensity, and never
compares one person's satisfaction to another's.

**A full ranking comes out.** Not just a winner — an ordering of everything, and
one that behaves like a preference should: if the group ranks A above B and B
above C, it must rank A above C.

Arrow's theorem is a theorem about *that machine*. Any real procedure that fits
the description is covered. Any procedure that does not fit is not.

### The four conditions in plain words

**Unrestricted domain.** The machine must produce an answer for every possible
combination of individual rankings. You are not allowed to declare certain
patterns of opinion out of bounds.

**Unanimity (the Pareto condition).** If everybody ranks A above B, the group
ranks A above B.

**Independence of irrelevant alternatives.** The group's ranking of A against B
depends only on how the individuals rank A against B. Change people's opinions
about C in any way you like; as long as nobody's A-versus-B opinion moved, the
group's A-versus-B verdict must not move either.

**Non-dictatorship.** There is no single person whose strict preference always
becomes the group's, whatever everybody else says.

**The theorem.** With at least three options and finitely many people, no social
welfare function satisfies all four.

### Why the third condition is where the trouble is

The first, second and fourth conditions are close to definitional. The
independence condition is the one that does the killing, and it is worth
understanding what it is protecting against.

Consider the Borda count: three points for a first place, two for second, one for
third, add them up. It never cycles, it respects unanimity, it works on any input
and it has no dictator. So it must violate independence — and it does, badly.

Take an election where A narrowly beats B on Borda points. Now every voter keeps
their opinion of A and B exactly where it was, but changes their mind about a
hopeless third candidate C, shuffling C up and down their lists. Nobody's view of
A versus B has changed by a hair. But moving C changes how many points A and B
collect, and B can overtake A.

That is a real defect, not a technicality. It means the result can be flipped by
running a no-hope candidate, and it means anyone who understands the count has an
incentive to rank strong rivals artificially low. Independence is the condition
that forbids this, and Arrow proved that forbidding it costs you everything else.

### What the proof feels like

The argument, in outline, is unsettling in a way that summaries rarely convey.

Pick some option $b$ and imagine every voter has it dead last. By unanimity the
group ranks $b$ last. Now change the voters' ballots one at a time, in some fixed
order, moving $b$ from the bottom straight to the top of each person's list.

At the end, everyone has $b$ first, so the group has $b$ first.

Somewhere along the way, then, the group's opinion of $b$ jumped. And a small
lemma shows it can never sit in the middle — while every voter has $b$ at an
extreme, the group must too. So there is a single voter whose ballot change
flipped $b$ from the group's bottom to the group's top in one step.

That person is **pivotal**. And the rest of the proof shows that being pivotal for
$b$ makes them a dictator over everything else. Not powerful. Not influential. A
dictator: for any two other options, whatever they say, the group says, regardless
of what all the other voters do.

Nobody designed this person in. They fall out of three innocuous conditions.

### What follows, and what does not

The theorem does **not** say that group decisions are arbitrary, that all voting
methods are equivalent, or that one cannot do better than another. Voting systems
differ enormously in how often they misbehave, how easily they can be manipulated,
and how badly they fail when they do. Arrow tells you that every system has some
failure mode; it does not tell you they are all equally likely to hit it.

What the theorem does say is that **the choice of voting system is a choice about
which failure to accept**, and that no amount of cleverness removes the choice.
That is a genuinely useful thing for a constitutional designer to know, and it is
the reason the result mattered.

## Examples

**The Condorcet cycle, as an instance.** Three voters, three options:

| Rank | Voter 1 | Voter 2 | Voter 3 |
| --- | --- | --- | --- |
| 1st | A | B | C |
| 2nd | B | C | A |
| 3rd | C | A | B |

Pairwise majority rule gives A over B (2–1), B over C (2–1), and C over A (2–1).
Majority rule satisfies unrestricted domain, unanimity, independence and
non-dictatorship — and produces a group "ranking" that is not a ranking at all,
because it is not transitive. Arrow's theorem says this is not majority rule's
private failing. Anything that keeps all four conditions will break transitivity
somewhere; anything that keeps transitivity will break one of the four.

**How the Borda count violates independence.** Three voters, four options, scoring
3-2-1-0:

| Rank | Voter 1 | Voter 2 | Voter 3 |
| --- | --- | --- | --- |
| 1st | A | B | B |
| 2nd | B | A | C |
| 3rd | C | C | A |
| 4th | D | D | D |

Scores: A gets $3+2+1 = 6$. B gets $2+3+3 = 8$. C gets $1+1+2 = 4$. D gets $0$.
**B beats A**, 8 to 6.

Now Voter 1 alone changes their mind about the hopeless candidate C, promoting it
above B. Voter 1's ranking becomes A, C, B, D. Nobody else moves, and Voter 1's
opinion that A beats B is untouched.

New scores: A gets $3+2+1 = 6$. B gets $1+3+3 = 7$. C gets $2+1+2 = 5$.

B still wins here — but push the same trick with different starting numbers and
the leader flips. The general point stands regardless: the A-versus-B gap moved
from 2 to 1 purely because of an opinion about C. Under independence it should
not have moved at all.

**A dictatorship, to show the conditions are not vacuous.** "Whatever Voter 1
says is the group ranking." This satisfies unrestricted domain, unanimity,
independence and transitivity perfectly. Arrow's theorem is not a claim that the
conditions are unsatisfiable — it is a claim that satisfying the first three
forces you into exactly this.

**A system that escapes, and why.** Score voting: each voter gives every option a
number from 0 to 10; the group ranks options by their average score.

| Voter | A | B | C |
| --- | --- | --- | --- |
| 1 | 10 | 7 | 0 |
| 2 | 0 | 8 | 9 |
| 3 | 3 | 9 | 6 |
| **Mean** | **4.33** | **8.00** | **5.00** |

Group ranking: B, then C, then A. It is always transitive, always defined,
unanimous, and has no dictator. Its ranking of A against B depends only on the
scores given to A and B, so it satisfies the independence condition *as stated
for scores*.

It escapes because it is not the machine Arrow described. It takes numbers, not
rankings. Voter 3's ballot says something Arrow's framework has no vocabulary
for: that B is much better than C, which is somewhat better than A. That extra
information is precisely what the impossibility depends on being absent.

The escape is real, and it is not free — see below.

## Explore

### What the theorem does not say

This deserves its own treatment, because the misreadings are common enough to be
the main thing standing between a reader and the actual result.

**It does not say democracy is impossible.** It says a specific class of
preference-aggregation rule cannot have four specific properties at once. Real
democratic systems have legislatures, deliberation, agenda-setting, amendment
procedures, courts and repeated elections, none of which are social welfare
functions in Arrow's sense.

**It does not say all voting systems are equally bad.** This is the most damaging
misuse, because it is sometimes deployed to shut down electoral reform debates.
Systems differ in how often the failure occurs, in whether the failure is
catastrophic or cosmetic, and in how easy they are to game. Approval voting,
instant-runoff voting, Condorcet methods and plurality all violate something —
but plurality violates far more, far more often, and the comparison between them
is entirely meaningful.

**It does not say the outcome of an election is arbitrary.** With single-peaked
preferences — voters arrayed along a single dimension, each with one ideal point —
Duncan Black showed in 1948 that majority rule is perfectly well behaved and the
median voter's position beats every alternative. Real electorates are often close
enough to this that Condorcet winners exist. Arrow's condition of *unrestricted
domain* insists on covering every logically possible profile, including ones that
never occur.

**It does not apply to two options.** With exactly two alternatives, May's theorem
(1952) is the relevant result, and it goes the other way: simple majority rule is
the *unique* rule satisfying anonymity, neutrality and positive responsiveness.
Binary choice is entirely well behaved. The trouble starts at three.

**It does not apply to cardinal methods.** Range voting, score voting, approval
voting and Balinski and Laraki's majority judgment aggregate ratings or grades,
not rankings. They fall outside the theorem's hypotheses. Anyone who tells you
"Arrow proved score voting can't work" is misstating the theorem.

### The escapes, and what each costs

**Restrict the domain.** Assume single-peakedness, or any of the other conditions
(Sen's value restriction, Inada's conditions) that guarantee a transitive majority
relation. *Cost:* you cannot enforce this. It is a hope about the electorate, not
a property of the rule, and it fails exactly on multi-dimensional questions.

**Weaken the output requirement.** Ask only for a set of winners, or drop full
transitivity to quasi-transitivity or acyclicity. Sen showed in 1969 that
quasi-transitive social relations satisfying the other conditions exist — the Pareto
extension rule is one — but Gibbard proved they concentrate power in an oligarchy:
a group that is decisive collectively and each of whose members has a veto. *Cost:*
you replace the dictator with a small committee.

**Use cardinal information.** The main escape in practice. *Cost:* you need
interpersonal comparability for the numbers to mean anything, and you have to
trust voters to use the scale honestly.

**Allow interpersonal comparisons explicitly.** Sen's programme, developed in
*Collective Choice and Social Welfare* (1970) and the Nobel lecture. If the
framework can say "this person's gain is larger than that person's loss", then
possibility results abound — utilitarian and Rawlsian aggregation rules both
become available and are characterised by clean axioms. *Cost:* interpersonal
comparison of welfare is philosophically contested and empirically hard, which is
why Arrow excluded it in the first place; he was following Lionel Robbins's
influential 1932 argument that such comparisons are not scientific.

**Infinitely many voters.** Peter Fishburn showed in 1970 that the theorem fails
if the electorate is infinite. Kirman and Sondermann showed in 1972 what replaces
the dictator: an ultrafilter of decisive coalitions, an "invisible dictator" with
no members. *Cost:* there are no infinite electorates.

### The wall behind the wall: Gibbard–Satterthwaite

The cardinal escape is real but it does not lead into open country.

Allan Gibbard (1973) and Mark Satterthwaite (1975) proved, independently, that any
deterministic voting rule with at least three possible outcomes that is onto and
not dictatorial is **manipulable**: there is some situation in which some voter
does better by submitting a ballot that misstates their preferences.

Gibbard's version is the more general and the more damaging to the escape route,
because it is stated for arbitrary game forms rather than for rank-order ballots.
It therefore covers score voting, approval voting and majority judgment.

And in practice the manipulability of cardinal methods is not subtle. Under
approval voting, a voter must decide where to draw their approval line, and the
optimal place depends on their beliefs about how everyone else will vote —
which means honest approval is generally not a best response. Under score voting,
a strategic voter usually maximises influence by giving 0 or the maximum and
nothing in between, which collapses score voting toward approval voting. The
cardinal information that lets these methods escape Arrow is exactly the
information voters have an incentive to distort.

**So the honest summary is:** Arrow's theorem constrains ranked aggregation;
cardinal methods escape it; Gibbard–Satterthwaite constrains everything. There is
no rule that is simultaneously non-dictatorial, responsive and strategy-proof over
three or more outcomes. What varies — and it varies a great deal — is how hard
manipulation is, how much it gains, and how much damage it does when it succeeds.
Those are empirical, comparative questions, and they are the ones electoral reform
should be arguing about.

### Was the theorem a surprise?

Arrow said later that he had expected to find a system and prove it worked; the
impossibility was the result of repeatedly failing and eventually asking why. He
had not read Condorcet when he proved it, and learned of the 1785 cycle
afterwards.

The result's reception was not uniform. Some economists treated it as a
devastating verdict on welfare economics. Others, Paul Samuelson among them,
argued that Arrow had shown something about *voting* rather than about *social
welfare*, since a Bergson–Samuelson social welfare function starts from a given
welfare judgement rather than deriving one from individual rankings. That
disagreement about what the theorem is a theorem *about* has never been fully
settled, and it is worth knowing that it exists.

## History

**1785.** Condorcet published the cycle. Its significance was not generally
recognised until the twentieth century.

**1932.** Lionel Robbins argued in *An Essay on the Nature and Significance of
Economic Science* that interpersonal comparisons of utility are value judgements,
not science. This was widely accepted and is why Arrow's framework uses purely
ordinal, non-comparable preferences. The impossibility is downstream of that
methodological commitment.

**1938.** Abram Bergson introduced the social welfare function in a form Samuelson
later developed. This framework takes a welfare ordering as given rather than
constructing one from votes.

**1948.** Duncan Black published the median voter result and, in 1958, the book
that recovered Condorcet, Borda and Dodgson.

**1950.** Arrow published "A Difficulty in the Concept of Social Welfare" in the
*Journal of Political Economy*, volume 58, pages 328–346. He was working at the
RAND Corporation, where the question had arisen in a game-theoretic context:
whether a nation could sensibly be treated as a player with a utility function.

**1951.** The dissertation appeared as *Social Choice and Individual Values*
(Wiley). Arrow was 29 when it was published.

**1957.** Julian Blau, in *Econometrica*, showed that the conditions as stated in
the 1951 edition did not quite yield the conclusion — the original used citizens'
sovereignty and a monotonicity condition rather than the Pareto condition, and
the argument had a gap.

**1963.** The second edition replaced the conditions with the unanimity-based
formulation now standard, and the theorem in its modern form dates from here. This
is a genuine and often-omitted detail: the famous 1951 statement was not quite
right, and the fix was substantive.

**1969–1970.** Sen's *Collective Choice and Social Welfare* systematised the
escape routes and introduced the impossibility of a Paretian liberal, a separate
and equally uncomfortable result.

**1972.** Arrow shared the Nobel Memorial Prize with John Hicks. At 51, he remains
the youngest economics laureate.

**1973 and 1975.** Gibbard and Satterthwaite closed the strategy-proofness door.

**2005.** John Geanakoplos published "Three Brief Proofs of Arrow's Impossibility
Theorem" in *Economic Theory*, giving the pivotal-voter argument in the compact
form now standard in teaching.

## Why It Matters

**It made social choice a mathematical subject.** Before Arrow, arguments about
voting systems were arguments about examples: here is a case where your method
does something silly. After Arrow, they were arguments about axioms — state the
properties you want, and either construct a rule or prove none exists. Every major
result since is in this form: Gibbard–Satterthwaite, May's theorem, Sen's liberal
paradox, the characterisations of the Borda count and approval voting, and
Balinski and Laraki's work on majority judgment.

**It disciplined welfare economics.** The theorem is a direct consequence of
refusing to compare welfare across people. Confronting that made the exclusion
visible as a choice rather than a fact, and Sen's career is largely the project of
reintroducing comparability carefully enough to be defensible. Modern welfare
economics, cost-benefit analysis and the capability approach all sit downstream.

**It gave constitutional design an honest starting point.** A designer cannot
promise a perfect system, so the useful question becomes: which failure is
tolerable here, and how often will it occur? That reframing is now standard in
electoral system design, in the design of committee procedures, and in the
argument over ranked ballots.

**It is the template for impossibility results in other fields.** State desirable
properties as axioms; prove they are jointly unsatisfiable. Brewer's CAP theorem
for distributed systems, the FLP result on consensus, and the fair division and
fair machine learning impossibility theorems all follow this pattern. Kleinberg,
Mullainathan and Raghavan's 2016 result that three natural fairness criteria for
risk scores cannot be satisfied simultaneously is Arrow's method applied to
algorithms, and it has had a comparable effect on that field's self-understanding.

## Modern Relevance

**Algorithmic fairness.** The impossibility results on classifier fairness —
calibration, equal false positive rates and equal false negative rates cannot
generally hold together when base rates differ — replicate Arrow's structure
exactly. The consequence in practice is the same: you must choose which criterion
to sacrifice, and pretending otherwise produces systems that fail in undeclared
ways.

**Rank aggregation and recommendation.** Combining rankings — search signals,
review sites, model leaderboards — is the same machine. The literature on
metasearch and rank fusion cites Arrow directly, and the standard workaround is
the standard workaround: use scores rather than ranks, and accept that the scores
are manipulable.

**Multi-objective machine learning.** Combining several objectives into one
training signal is preference aggregation. The reason weighted-sum scalarisation
is used almost universally, despite its known problems with non-convex Pareto
frontiers, is that it converts an ordinal aggregation problem into a cardinal one
— the same escape route, with the same cost of having to justify the weights.

**Preference aggregation in AI alignment.** Training systems from human preference
comparisons runs into Arrow's territory directly. Individual annotators supply
pairwise rankings; the training procedure aggregates them into one implied
ordering. Which aggregation rule is being used, and what it fails at, is usually
not specified. Recent work on social choice for AI alignment takes the point
seriously and asks the question in Arrow's form.

**Corporate and committee governance.** Boards ranking strategic options,
selection committees ranking candidates, standards bodies ranking proposals — all
are social welfare functions, and all inherit the theorem. Practical governance
usually escapes through domain restriction (options are pre-filtered to a single
dimension), through scoring rubrics (cardinal information), or through a chair with
agenda power (a partial dictator). Naming which escape is in use is a useful
diagnostic.

## Deep Dive

### Formal statement

Let $X$ be a finite set of alternatives with $|X| \ge 3$, and let
$N = \{1,\dots,n\}$ be a finite set of individuals with $n \ge 2$.

Let $\mathcal{L}$ denote the set of weak orderings on $X$: binary relations that
are complete and transitive. A **preference profile** is an $n$-tuple
$\succsim \,= (\succsim_1,\dots,\succsim_n) \in \mathcal{L}^n$.

A **social welfare function** is a map

$$F : \mathcal{L}^n \to \mathcal{L}$$

writing $\succsim^F \,= F(\succsim)$ for the social ordering it returns. The
conditions:

**(U) Unrestricted domain.** The domain of $F$ is all of $\mathcal{L}^n$.

**(P) Weak Pareto / unanimity.** For all profiles and all $x,y \in X$: if
$x \succ_i y$ for every $i \in N$, then $x \succ^F y$.

**(IIA) Independence of irrelevant alternatives.** For all profiles $\succsim$
and $\succsim'$ and all $x, y \in X$: if for every $i \in N$,
$x \succsim_i y \iff x \succsim'_i y$, then $x \succsim^F y \iff x \succsim'^F y$.

**(D) Non-dictatorship.** There is no $i \in N$ such that for every profile and
all $x,y \in X$, $x \succ_i y \implies x \succ^F y$.

> **Arrow's Impossibility Theorem.** If $|X| \ge 3$ and $N$ is finite, there is no
> social welfare function $F$ satisfying (U), (P), (IIA) and (D).

Equivalently: every $F$ satisfying (U), (P) and (IIA) is dictatorial.

Note what is built into the *codomain* and is therefore not listed as a condition:
$\succsim^F$ must be **complete** and **transitive**. Transitivity is where
majority rule fails, and it is as much a condition as the four named ones.

### The pivotal-voter proof

Following Geanakoplos (2005). Assume $F$ satisfies (U), (P) and (IIA).

**Lemma 1 (extremal lemma).** Fix $b \in X$. If in some profile every individual
ranks $b$ either strictly first or strictly last, then $b$ is ranked strictly
first or strictly last by $\succsim^F$.

*Proof.* Suppose not: then there exist $a, c \in X \setminus \{b\}$ with
$a \succ^F b$ and $b \succ^F c$. Now modify the profile so that every individual
moves $c$ strictly above $a$, leaving each individual's placement of $b$ at their
own extreme untouched. This is possible precisely because $b$ is extremal for
everyone, so shuffling $a$ and $c$ never disturbs anyone's $\{a,b\}$ or $\{b,c\}$
comparison.

By (IIA), $a \succ^F b$ and $b \succ^F c$ still hold. By transitivity of
$\succsim^F$, $a \succ^F c$. But every individual now ranks $c$ above $a$, so (P)
gives $c \succ^F a$. Contradiction. $\square$

**Lemma 2 (existence of a pivot).** Fix $b$. Consider the sequence of profiles
$\Pi_0, \Pi_1, \dots, \Pi_n$ where in $\Pi_k$ the individuals $1,\dots,k$ rank
$b$ strictly first and individuals $k+1,\dots,n$ rank $b$ strictly last (their
rankings of the other alternatives held fixed throughout). In $\Pi_0$, (P) gives
$b$ strictly last socially; in $\Pi_n$, (P) gives $b$ strictly first. By Lemma 1,
$b$ is socially extremal at every step. Hence there is a smallest index
$n^{*}$ such that $b$ is socially last in $\Pi_{n^{*}-1}$ and socially first in
$\Pi_{n^{*}}$.

Write **I** for $\Pi_{n^{*}-1}$ and **II** for $\Pi_{n^{*}}$. Individual $n^{*}$
is the **pivotal voter** for $b$.

**Lemma 3 (the pivot dictates over $X \setminus \{b\}$).** Let
$a, c \in X \setminus \{b\}$ be distinct. Construct profile **III**:

- Individual $n^{*}$ ranks $a \succ b \succ c$.
- Individuals $1,\dots,n^{*}-1$ keep $b$ strictly first, and order the rest of
  $X$ arbitrarily.
- Individuals $n^{*}+1,\dots,n$ keep $b$ strictly last, and order the rest of $X$
  arbitrarily.

Compare **III** with **I** on the pair $\{a,b\}$. In **I**, individual $n^{*}$ has
$b$ last, so $a \succ_{n^{*}} b$; in **III**, $a \succ_{n^{*}} b$. Individuals
before $n^{*}$ have $b$ first in both, so $b \succ a$ in both. Individuals after
$n^{*}$ have $b$ last in both, so $a \succ b$ in both. Every individual's
$\{a,b\}$ comparison agrees across the two profiles, so by (IIA) the social
comparison agrees. In **I**, $b$ was socially last, hence $a \succ^F b$. Therefore
$a \succ^F b$ in **III**.

Compare **III** with **II** on the pair $\{b,c\}$. In **II**, individual $n^{*}$
has $b$ first, so $b \succ_{n^{*}} c$; in **III**, $b \succ_{n^{*}} c$.
Individuals before $n^{*}$: $b$ first in both. Individuals after $n^{*}$: $b$ last
in both. Again all individual $\{b,c\}$ comparisons agree, so by (IIA) the social
comparisons agree. In **II**, $b$ was socially first, hence $b \succ^F c$.
Therefore $b \succ^F c$ in **III**.

Transitivity of $\succsim^F$ now forces $a \succ^F c$ in **III**.

But in **III** the individuals other than $n^{*}$ ordered $a$ and $c$ *arbitrarily*.
By (IIA), the social ranking of $\{a,c\}$ depends only on the individual
$\{a,c\}$ rankings. Hence: **whenever individual $n^{*}$ ranks $a$ above $c$,
society ranks $a$ above $c$, regardless of everyone else.** Individual $n^{*}$ is
a dictator over $X \setminus \{b\}$. $\square$

**Closing the gap.** Lemma 3 leaves pairs involving $b$ untreated. Repeat the
construction with a different distinguished alternative $b' \ne b$, obtaining a
pivotal voter $m^{*}$ who dictates over $X \setminus \{b'\}$. Since $|X| \ge 3$,
the sets $X \setminus \{b\}$ and $X \setminus \{b'\}$ overlap in at least one
pair, and two dictators cannot disagree on that pair, so $m^{*} = n^{*}$. Their
combined authority covers all of $X$. Hence $n^{*}$ dictates over every pair, and
(D) fails. $\blacksquare$

The proof uses $|X| \ge 3$ in two places: Lemma 1 needs a third alternative to
build the contradiction, and the closing step needs the two punctured sets to
overlap.

### Where each condition is used

| Condition | Where it does the work |
| --- | --- |
| (U) | Constructing profiles **I**, **II**, **III**, none of which need be realistic |
| (P) | Endpoints of the pivot sequence; the contradiction in Lemma 1 |
| (IIA) | Transporting social comparisons between profiles — used four times |
| Transitivity of $\succsim^F$ | Lemma 1 and the final step of Lemma 3 |

Dropping any one gives a possibility result, and each corresponds to a real escape
route. Dropping (U) gives Black's single-peaked domain. Dropping transitivity gives
majority rule and Condorcet cycles. Dropping (IIA) gives the Borda count and every
positional scoring rule. Dropping (P) gives constant rules. Dropping finiteness of
$N$ gives Fishburn's invisible dictators.

### The relationship to Gibbard–Satterthwaite

Let $f : \mathcal{L}^n \to X$ be a **social choice function** returning a single
winner. Say $f$ is **strategy-proof** if no individual can ever obtain a strictly
preferred outcome by submitting a false ranking, and **onto** if every alternative
wins for some profile.

> **Gibbard–Satterthwaite theorem (1973, 1975).** If $|X| \ge 3$ and $f$ is onto
> and strategy-proof, then $f$ is dictatorial.

The two theorems are closely linked: strategy-proofness implies a monotonicity
condition which, with ontoness, yields an Arrovian social welfare function, and
several published proofs derive one from the other.

The scope difference is what matters for the cardinal escape. Arrow's theorem is
stated for rules taking rank-order ballots, so score and approval voting are
outside it. Gibbard's 1973 formulation is stated for arbitrary **game forms** —
any procedure mapping strategy profiles to outcomes — and therefore covers them.
Gibbard extended the result to decision schemes with randomised outcomes in 1977,
where the conclusion becomes that any strategy-proof scheme is a random
dictatorship or a randomisation over pairs.

The practical upshot for range and approval voting: they are not dictatorial, are
not covered by Arrow, and are manipulable. A voter's optimal ballot depends on
their beliefs about others, and the equilibrium behaviour of strategic score
voters tends toward approval-style min-max ballots. Whether that is a serious
problem in practice — how much strategic voting occurs, and how much it distorts —
is an empirical question, and it is a much better question than the one Arrow's
theorem is usually invoked to close down.
