---
title: The Condorcet Paradox
slug: condorcet-paradox
alternateNames:
  - The Voting Paradox
  - The Paradox of Voting
  - Cyclical Majorities
summary: >-
  Three people vote. A majority prefers A to B, a majority prefers B to C, and a
  majority prefers C to A. The group has no favourite at all — and whoever sets
  the order of the votes decides the winner.
hook: >-
  A majority prefers A to B, and B to C, and C to A. Every voter was honest
  and nobody made a mistake.
era: early-modern
date: "1785"
year: 1785
origin: >-
  Discovered by the Marquis de Condorcet in his 1785 Essai sur l'application de
  l'analyse à la probabilité des décisions rendues à la pluralité des voix, the
  first sustained mathematical study of collective decision-making.
people:
  - nicolas-de-condorcet
  - jean-charles-de-borda
  - duncan-black
domains:
  - society
  - economics
types:
  - aggregation
  - decision-making
nature: counterintuitive-result
difficulty: beginner
status: resolved
renown: known
concepts:
  - Majority rule
  - Transitivity of preference
  - Condorcet winner
  - Agenda setting
  - Single-peaked preferences
relationships:
  - kind: predecessor-of
    to: arrows-impossibility-theorem
    note: >-
      Condorcet found one voting rule that misbehaves. Arrow proved in 1951 that
      the misbehaviour is not majority rule's fault — every method of turning
      ranked preferences into a group ranking must break one of four modest
      conditions. The cycle is the concrete case; Arrow's theorem is the general
      law behind it.
  - kind: related
    to: simpsons-paradox
    note: >-
      Both are aggregation traps: a pattern that holds in every part of the data
      can reverse or vanish once the parts are combined.
  - kind: related
    to: prisoners-dilemma
    note: >-
      Two different ways a group of perfectly sensible individuals ends up with a
      collective result none of them would have chosen.
references:
  - source: condorcet-1785-essai
    role: primary-source
    locator: "Discours préliminaire and Part II"
    note: The first statement of the cycle, inside a much larger probabilistic study of juries and assemblies.
  - source: black-1958-committees
    role: book
    note: >-
      The book that recovered Condorcet's work for modern economics and proved
      that single-peaked preferences make the cycle impossible.
  - source: mclean-urken-1995-classics
    role: book
    note: Translations of Llull, Cusanus, Borda, Condorcet and Dodgson, with the archival history of each.
  - source: sep-social-choice
    role: encyclopedia
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Three friends are ordering one pizza. They have to agree on one topping.

**Ana** likes pepperoni best, mushroom second, pineapple last.
**Ben** likes mushroom best, pineapple second, pepperoni last.
**Chloe** likes pineapple best, pepperoni second, mushroom last.

Nobody can agree, so they decide to be fair about it and vote in pairs. Majority
wins.

**Pepperoni or mushroom?** Ana says pepperoni. Chloe says pepperoni. Ben is
outvoted. **Pepperoni wins, 2 to 1.**

**Mushroom or pineapple?** Ana says mushroom. Ben says mushroom. Chloe is
outvoted. **Mushroom wins, 2 to 1.**

So pepperoni beats mushroom, and mushroom beats pineapple. Pepperoni must be the
group's favourite. Just to be sure, they run the last vote.

**Pineapple or pepperoni?** Ben says pineapple. Chloe says pineapple. Ana is
outvoted. **Pineapple wins, 2 to 1.**

Pepperoni beats mushroom. Mushroom beats pineapple. And pineapple beats
pepperoni. There is no best topping. The group's preferences run in a circle,
and every single vote was won fair and square by a genuine majority.

## Understand

Each of the three friends is perfectly sensible. Ask Ana to rank the toppings and
she gives a clean list: pepperoni, mushroom, pineapple. Her preferences do not
loop. Neither do Ben's or Chloe's.

The looping only appears when you add them up.

### Why individual sense becomes group nonsense

When you rank things for yourself, your rankings obey a rule so obvious it barely
seems worth naming: if you prefer A to B and B to C, you prefer A to C.
Mathematicians call this **transitivity**. It is what lets you write your
preferences as a list at all.

Majority rule does not inherit that rule. Here is why.

Each pairwise vote is decided by a *different* majority. Pepperoni beats mushroom
because of Ana and Chloe. Mushroom beats pineapple because of Ana and Ben.
Pineapple beats pepperoni because of Ben and Chloe. Three different two-person
coalitions win three different votes, and there is nothing forcing those three
coalitions to be consistent with each other.

Each vote throws away almost everything. It records who came out ahead, and
discards by how much, and what each voter thought of the third option. Three
comparisons, each one blind to the others, can easily point in a circle.

### The part that should worry you

The cycle is not just untidy. It hands enormous power to whoever decides the
order of business.

The friends have to vote *somehow*. Suppose they hold a knockout: two toppings
face off, the loser is dropped, the winner faces the third. Look at what happens.

- Start with mushroom against pineapple. Mushroom wins, then loses to pepperoni.
  **Pepperoni is served.**
- Start with pepperoni against mushroom. Pepperoni wins, then loses to pineapple.
  **Pineapple is served.**
- Start with pineapple against pepperoni. Pineapple wins, then loses to mushroom.
  **Mushroom is served.**

Same three people. Same three opinions. Nobody lies, nobody changes their mind,
and every round is decided by an honest majority. The outcome is chosen entirely
by whoever picked the running order.

This is the real content of the paradox: **when preferences cycle, the procedure
is not reporting the group's will. It is manufacturing one.** A committee chair
who knows the cycle exists and controls the agenda controls the result while
appearing to do nothing but count votes.

### When it does not happen

Cycles are possible, not compulsory. Change one voter and they usually vanish.

The cleanest condition for safety comes from Duncan Black in 1948. If the options
can be laid out along a single line — cheapest to most expensive, least to most
spending, left to right — and every voter has one favourite point on that line
with their liking falling away as you move in either direction, then no cycle can
form. Black called such preferences **single-peaked**, and he showed that under
them the option preferred by the median voter beats every other option in a
straight fight.

That is a genuinely useful escape, and it is why many real-world votes behave
themselves. It is also fragile. It needs the disagreement to be about one thing.
Pepperoni, mushroom and pineapple do not lie on a line, and neither do most
questions worth arguing about.

## Examples

**The profile in the abstract.** Write the three voters' rankings as columns:

| Rank | Voter 1 | Voter 2 | Voter 3 |
| --- | --- | --- | --- |
| 1st | A | B | C |
| 2nd | B | C | A |
| 3rd | C | A | B |

Every voter has a different favourite, and each voter's list is a rotation of the
one before. Now count the head-to-head contests:

| Contest | Voter 1 | Voter 2 | Voter 3 | Result |
| --- | --- | --- | --- | --- |
| A vs B | A | B | A | **A wins 2–1** |
| B vs C | B | B | C | **B wins 2–1** |
| C vs A | C | A | C | **C wins 2–1** |

$A \succ B$, $B \succ C$, $C \succ A$. Each result has a two-thirds majority
behind it. There is no option that beats every other — no **Condorcet winner**.

**Different rules, different winners.** Now feed the same three ballots into four
common voting methods and watch them disagree:

| Method | How it counts | Winner |
| --- | --- | --- |
| Plurality (first choices only) | A, B and C get one vote each | A three-way tie |
| Borda count (2 points for 1st, 1 for 2nd, 0 for 3rd) | A: 2+0+1 = 3; B: 1+2+0 = 3; C: 0+1+2 = 3 | A three-way tie |
| Pairwise majority | A beats B, B beats C, C beats A | **No winner exists** |
| Knockout, order chosen by the chair | see below | **Whichever the chair wants** |

The perfect symmetry of this profile is what makes every count tie. Nudge it —
add a fourth voter who ranks A first — and plurality and Borda both produce a
clean answer while the pairwise cycle survives intact.

**Where the agenda power lives.** Back to the pizza. Ana ranks pepperoni first
and pineapple last. If Ana gets to set the running order, she opens with mushroom
against pineapple, and her favourite topping wins the final round. She never
misrepresents a single preference. She just chooses which majority speaks first.

## Explore

The obvious first reaction is that something must be wrong with majority rule and
a better rule would fix it. Condorcet's contemporary **Jean-Charles de Borda**
had already proposed one, in a memoir read to the Académie royale des sciences in
1770: give points by rank position and add them up. The Borda count always
produces a ranking, and that ranking never cycles.

Condorcet's objection to Borda was sharp and, as it turned out, permanent. The
Borda count can elect an option that would lose a straight majority vote against
a rival — a candidate the majority actively rejects. Worse, its winner can change
when a hopeless candidate enters or drops out, because dropping a candidate
reshuffles everyone's point totals. Borda's own reported reply was that his
system was "only intended for honest men". Condorcet thought this missed the
point: the flaw was in the arithmetic, not in the voters.

So the disagreement between them was not about which of two rules is better. It
was about **which defect you are willing to live with**, and that framing is the
one that survived.

### Three ways out, each with a cost

**Restrict what people are allowed to want.** Black's single-peakedness works, but
it is an assumption about the electorate, not a property of the rule. You cannot
legislate it. And it fails precisely on multi-dimensional questions — budgets
that trade off health against defence, policies that mix economic and social
positions — which is to say, on most of politics.

**Break the tie with a further rule.** Many real procedures do this. Charles
Dodgson — Lewis Carroll — rediscovered the cycle in the 1870s while writing about
Oxford college elections, and proposed choosing the option that needs the fewest
swaps in voters' ballots to become a Condorcet winner. It is a defensible answer.
It is also, as computer scientists established a century later, computationally
hard to determine in general. Other tie-breakers exist; each is defensible and
none is uniquely right.

**Use more information.** The cycle appears because pairwise voting is told only
who is ahead, never by how much. Methods that collect strength of feeling —
scores, grades, approvals — do not cycle in this way. That is a real escape, and
it is the main route out of Arrow's theorem too. The cost is that such methods
depend on how honestly and how comparably people use the scale, which reopens a
different set of problems.

### How often does this actually happen?

Under the standard theoretical benchmark called **impartial culture**, where every
voter picks one of the possible rankings uniformly at random, cycles are common
enough to matter — around 9% of the time with three options and a large
electorate, rising steeply as options are added.

But impartial culture is close to a worst case. Real electorates are correlated:
people cluster along ideological lines, which is exactly the structure that makes
single-peakedness likely. Andranik Tangian, William Gehrlein and others have
argued this at length, and Adrian Van Deemen's 2014 survey of the empirical
literature found that documented cycles in real elections and committee votes are
rare — though he also stressed that the data are thin, because the ranked ballots
needed to detect a cycle are usually never collected.

That last point deserves weight. Most voting systems in use cannot detect a cycle
even in principle, because they never ask voters for a full ranking. The
frequency of cycles in real life is genuinely uncertain, and the uncertainty runs
in the direction of underestimation.

## History

**1299 and 1433 — the medieval anticipations.** The Catalan philosopher Ramon
Llull described an election method based on pairwise comparisons in works
including *Ars electionis* (1299). Nicholas of Cusa proposed a rank-scoring
method in *De concordantia catholica* (1433), five centuries before Borda. Both
manuscripts were lost to the mainstream and only brought back into the social
choice literature by Iain McLean and Arnold Urken in the 1990s. Whether Llull
noticed the cycle is not established.

**1770 — Borda.** Jean-Charles de Borda, a naval officer and mathematician, read
a memoir to the Académie royale des sciences proposing the rank-scoring method
now named after him. It was published in 1781 as *Mémoire sur les élections au
scrutin*.

**1785 — Condorcet.** Marie Jean Antoine Nicolas de Caritat, Marquis de
Condorcet, published the *Essai sur l'application de l'analyse à la probabilité
des décisions rendues à la pluralité des voix*. Most of the book is about
something else: his jury theorem, which shows that if each voter is more likely
than not to be right, large majorities are almost certainly right. The cycle
appears as an obstacle he runs into while working out how to extend that result
to more than two options, and he treats it as a serious problem rather than a
curiosity. The *Essai* is famously difficult — dense, disorganised, and printed
with errors. It was admired more than it was read.

**1794 — the author.** Condorcet was among the most consistent liberals of the
Revolution: an early opponent of slavery, an advocate of women's suffrage when
almost no one else was, and the author of a proposed republican constitution. He
voted against executing the king. Under the Terror a warrant was issued for his
arrest; he hid for months in Paris, writing his *Esquisse d'un tableau historique
des progrès de l'esprit humain*, was captured, and was found dead in a cell at
Bourg-la-Reine in March 1794. The cause of death has never been settled.

**1870s — Dodgson.** Charles Dodgson, mathematics lecturer at Christ Church,
Oxford, wrote three pamphlets on election methods for college business and
rediscovered the cycle independently. There is no evidence he had read Condorcet.

**1948 and 1958 — Black.** The Scottish economist Duncan Black published "On the
Rationale of Group Decision-making", introducing single-peaked preferences and
the median voter result. His 1958 book *The Theory of Committees and Elections*
went back to the archives, recovered Condorcet, Borda and Dodgson, and put their
work at the foundation of what became public choice theory. Almost everything
written on the subject since traces through Black.

**1951 — Arrow.** Kenneth Arrow, then a graduate student, proved that the trouble
Condorcet found in majority rule is unavoidable in any rule of its type. Arrow
had not read Condorcet when he proved it; he learned of the connection
afterwards.

## Why It Matters

**It killed the idea of "the will of the people" as a well-defined object.**
Before Condorcet it was natural to assume that a group has preferences the way a
person does, and that voting is a measuring instrument for reading them off. The
cycle shows there may be nothing there to measure. When preferences cycle, "what
the group wants" is not merely hard to determine — it does not exist. Any
procedure that returns an answer has, in that case, invented it.

**It made procedure a substantive political question.** If the running order can
determine the outcome, then rules of order are not neutral plumbing. This is now
standard in the study of legislatures: the power to schedule, to bundle, to
decide what is amended against what, is real power. William Riker built an entire
research programme on it in the 1980s, arguing under the name *heresthetics* that
skilled politicians win by restructuring the choice rather than by changing
minds, and documenting cases — the 1956 US school construction bill among them —
where an amendment appears to have been introduced specifically to break a
majority apart.

**It launched social choice theory.** Condorcet's cycle is the seed of the field
that produced Arrow's theorem, the Gibbard–Satterthwaite theorem on strategic
voting, Sen's work on welfare and liberty, and the modern comparison of electoral
systems. Duncan Black, Kenneth Arrow, Amartya Sen and William Riker all treated
the 1785 *Essai* as their starting text.

**It is the reason "which voting system?" is a real question.** Plurality,
runoff, instant-runoff, Borda, Condorcet methods and score voting are not
interchangeable ways of finding the same answer. On the same ballots they can
produce different winners, and the cycle shows there need not be a fact of the
matter about which is correct. Choosing a voting system means choosing which
properties you value, in advance, knowing you cannot have all of them.

## Modern Relevance

**Committees and boards.** Any body that decides by successive pairwise votes —
motions against amendments, options against alternatives — is exposed. Standard
parliamentary procedure, which amends a motion and then votes the amended motion
up or down, is precisely a two-stage knockout, and the chair's control of the
order is the agenda power in the paradox.

**Ranked-choice reform debates.** As jurisdictions adopt ranked ballots, the
Condorcet criterion — does the system elect an option that beats every other
head-to-head, when one exists? — is a live criterion in the argument, because
instant-runoff voting does not always satisfy it. Ranked ballots also, for the
first time, make cycles detectable in real elections.

**Recommendation and ranking systems.** Merging several ranked lists into one —
search results from multiple signals, products ordered by several criteria,
sports teams ranked by different polls — is formally the same problem. Rank
aggregation algorithms cycle for exactly Condorcet's reason, and the literature
on them, going back to Kemeny in 1959, is social choice theory under another
name.

**Machine learning evaluation.** When model A beats model B on one benchmark, B
beats C on another, and C beats A on a third, there is no "best model" to find.
Head-to-head preference comparisons of language models, now a standard evaluation
method, produce genuine non-transitivity, and leaderboards built from them
inherit Condorcet's problem along with his warning about who chooses the
match-ups.

## Deep Dive

Let $N = \{1,\dots,n\}$ be the voters and $X$ the alternatives. Each voter $i$
has a preference relation $\succ_i$ on $X$ that is complete, asymmetric and
transitive. The **pairwise majority relation** $\succ_M$ is defined by

$$x \succ_M y \iff |\{i \in N : x \succ_i y\}| > |\{i \in N : y \succ_i x\}|$$

$\succ_M$ is always complete for odd $n$, but it need not be transitive. The
three-voter profile above gives $A \succ_M B \succ_M C \succ_M A$.

A **Condorcet winner** is an $x$ with $x \succ_M y$ for all $y \ne x$. The
paradox is precisely the possible non-existence of one.

### How bad can it get

**McGarvey's theorem (1953).** For any complete asymmetric relation $R$ on a
finite set $X$, there is a preference profile whose majority relation is exactly
$R$. McGarvey's construction uses at most $|X|(|X|-1)$ voters; later work reduced
this bound. The consequence is severe: majority rule imposes *no* structure at
all on the collective ranking beyond completeness. Any pattern of cycles you can
draw is realisable.

### How likely is it

Under **impartial culture** — each voter's ranking drawn uniformly and
independently from the $|X|!$ possible strict orderings — the probability that no
Condorcet winner exists, for $|X| = 3$:

| Voters $n$ | Probability of no Condorcet winner |
| --- | --- |
| 3 | $1/18 \approx 5.6\%$ |
| 5 | $5/72 \approx 6.9\%$ |
| 7 | $\approx 7.5\%$ |
| $n \to \infty$ | $\approx 8.77\%$ |

The limiting value for three alternatives is $\tfrac{3}{4} - \tfrac{3}{2\pi}\arccos\!\left(\tfrac13\right) \approx 0.0877$.

Adding alternatives is far more damaging than adding voters. As $n \to \infty$
the limiting probability of no Condorcet winner is roughly 17.6% for four
alternatives and 25.1% for five, and it tends to 1 as $|X| \to \infty$. The
number of pairwise contests grows quadratically in $|X|$ while the constraint
that they cohere does not weaken, so eventually a cycle is a near-certainty.

These figures are upper-bound-flavoured. Impartial culture maximises the disorder
of the profile; any correlation between voters reduces the cycle probability, and
real electorates are strongly correlated.

### Black's escape

Fix a linear order $<$ on $X$ (the "left–right axis"). A preference $\succ_i$ is
**single-peaked** with respect to $<$ if there is a peak $p_i \in X$ such that

$$x < y \le p_i \implies y \succ_i x \qquad\text{and}\qquad p_i \le y < x \implies y \succ_i x$$

**Black's theorem (1948).** If every voter's preference is single-peaked with
respect to a common order $<$ and $n$ is odd, then $\succ_M$ is transitive and
the peak of the median voter is the Condorcet winner.

The proof is short. Let $p_{(1)} \le \dots \le p_{(n)}$ be the sorted peaks and
$m$ the median. For any $y > m$, every voter with $p_i \le m$ — at least
$(n+1)/2$ of them — prefers $m$ to $y$, since $m$ lies weakly between $p_i$ and
$y$. So $m \succ_M y$. The symmetric argument covers $y < m$.

The pizza profile is not single-peaked under any ordering of the three toppings.
Check the three possible orders: in each, some voter ranks the middle option
last, which violates the definition. That failure is not incidental — for three
alternatives and three voters, "some voter ranks the middle alternative last
under every ordering" is exactly the condition that permits a cycle.

### The relationship to Arrow

Pairwise majority rule satisfies unrestricted domain, the Pareto condition,
independence of irrelevant alternatives, non-dictatorship and anonymity. What it
fails is the requirement that the social relation be transitive. Arrow's theorem
says this trade is unavoidable: keep all of Arrow's conditions and *no* rule
delivers a transitive social ranking. Condorcet's cycle is the single most
important worked example of the theorem, discovered 166 years early.
