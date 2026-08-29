---
title: The Friendship Paradox
slug: friendship-paradox
alternateNames:
  - Feld's Paradox
  - Why Your Friends Have More Friends Than You Do
  - The Class Size Paradox
summary: >-
  On average, your friends have more friends than you do. So do almost
  everybody's. It is not a comment on you — it is a fact about how counting
  works, and it is true in essentially every real social network.
era: twentieth-century
date: 1991
year: 1991
origin: >-
  Named and explained by the sociologist Scott L. Feld in a 1991 paper in the
  American Journal of Sociology, using Coleman's data on friendships among
  American high-school students.
people:
  - scott-feld
  - nicholas-christakis
  - james-fowler
domains:
  - mathematics
  - statistics
  - society
types:
  - aggregation
  - observation
nature: veridical
difficulty: beginner
status: resolved
concepts:
  - Size-biased sampling
  - Degree distribution
  - Variance and the mean
  - Network centrality
  - Social comparison
relationships:
  - kind: related
    to: simpsons-paradox
    note: Both are averages taken with the wrong weights; here the weights are how many friends each person has.
  - kind: related
    to: birthday-problem
    note: Two facts about groups that intuition gets backwards, both fixed by counting pairs rather than people.
  - kind: contrasts-with
    to: easterlin-paradox
    note: One explains why people feel poorer than they are by comparison; the other explains why the comparison group is skewed to begin with.
references:
  - source: feld-1991-friends
    role: primary-source
    note: The paper that named the effect and gave the variance explanation.
  - source: christakis-fowler-2010-sensors
    role: paper
    note: Uses the paradox as a cheap way to find central people and detect an outbreak early.
  - source: cohen-2003-immunization
    role: paper
    note: Acquaintance immunisation — vaccinate a random friend of a random person.
  - source: ugander-2011-facebook
    role: paper
    note: The degree distribution of a 721-million-node social graph, which is what makes the effect so pronounced online.
  - source: hodas-2013-friendship-redux
    role: paper
    note: Measures the paradox on Twitter and extends it from friend counts to activity and exposure.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Count your friends. Write the number down.

Now go through them one at a time and count *their* friends, and take the
average.

Almost certainly, the second number is bigger. Usually quite a lot bigger.

That would be a slightly deflating discovery on its own. Here is the part that
makes it strange: **the same thing happens to almost everyone.** Ask your friends
to do the exercise and they will nearly all report the same result. Ask a
thousand strangers and about nine hundred of them will too.

That should be impossible. If nearly everybody is less popular than their
friends, who exactly are these friends? They are the same people. It is one
group, comparing itself against itself, and losing.

Nobody is lying and nobody has miscounted. Everyone really does have, on
average, less popular-than-average friends — sorry, *more* popular-than-average
friends. And the reason has nothing to do with popularity at all.

## Understand

Here is the whole thing in one sentence: **popular people show up on a lot of
lists.**

Imagine a school. One student, call her Ana, knows everyone — she has five
hundred friends. Another student, Femi, is quieter and has three.

Now ask: when someone in that school counts up their friends, how likely are
they to be counting Ana? Very likely — Ana is on five hundred people's lists.
How likely are they to be counting Femi? Not very — Femi is on three.

So when you survey the school and collect all the friendships, Ana gets
included five hundred times and Femi gets included three times. The pool of
"people who are somebody's friend" is not the same as the pool of "people". It
is stacked with the sociable ones, in exact proportion to how sociable they are.

You are being compared to a sample that was drawn *by popularity*. Of course you
lose.

### The bit that makes it click

The paradox is not that your friends are unusual people. It is that **being
someone's friend is not a random way of being chosen.**

Compare: pick a random person from the street, and pick a random *parent* from
the street. The second sample has more children in it, because to be a parent
you have to have had a child. Nothing surprising. Now pick a random *friend* —
that is, walk up to a random person and ask them to name one friend. The person
they name is more likely to be someone with many friends, for the same reason.

The technical name for this is size-biased sampling, and it shows up in dozens
of everyday places once you know its shape:

- **Class sizes.** A university says its average class has 30 students. Ask the
  students and they will report an average much higher — because the 300-person
  lecture is experienced by 300 people and the seminar of 6 by only 6. Feld and
  Bernard Grofman documented this in 1977, before the friendship version.
- **Buses.** The bus company says a bus comes every ten minutes. You wait
  fifteen. You are more likely to arrive during a long gap than a short one,
  because long gaps are longer.
- **Family size.** Ask adults how many children were in their family growing up
  and the average exceeds the national average number of children per family.
  Big families have more people in them to ask.
- **Sex partners.** Surveys reliably find men reporting more opposite-sex
  partners than women. Part of that is misreporting, but part of it is that any
  sampling scheme weighted towards the more active participants inflates the
  count on both sides.

### Two honest caveats

**It is not true of literally everyone.** The most popular person in any group
does better than their friends, by definition — nobody has more friends than the
person with the most friends. The claim is that it holds for the large majority,
and it does: on real networks, typically 80% to 95% of people.

**It is not about your worth.** The comparison is rigged before anyone counts.
An entirely average person in an entirely healthy social world will fail this
test, and so will an entirely average person in the world next door. The only
group in which it does *not* happen is one where everybody has exactly the same
number of friends — a perfectly regular network, which no real community is.

The size of the effect is set by one thing: **how unevenly friendships are
spread.** If everyone has roughly the same number, the gap is tiny. If a few
people have vastly more than everyone else, the gap is enormous. This is why the
effect is barely noticeable in a small village and overwhelming on the internet.

## Examples

### A network of six people

Here is a group small enough to check by hand. Six people, six friendships.

Ana is friends with everyone. Ben and Cleo are also friends with each other.
Dev, Eve and Femi each know only Ana.

| Person | Their friends | Number of friends | Their friends' friend-counts | Average |
| --- | --- | --- | --- | --- |
| Ana | Ben, Cleo, Dev, Eve, Femi | **5** | 2, 2, 1, 1, 1 | 1.4 |
| Ben | Ana, Cleo | **2** | 5, 2 | **3.5** |
| Cleo | Ana, Ben | **2** | 5, 2 | **3.5** |
| Dev | Ana | **1** | 5 | **5.0** |
| Eve | Ana | **1** | 5 | **5.0** |
| Femi | Ana | **1** | 5 | **5.0** |

Total friendships: $5 + 2 + 2 + 1 + 1 + 1 = 12$ half-links, so six friendships.
The average person has $12 / 6 = 2$ friends.

Five of the six people have fewer friends than their friends do on average. Only
Ana does not, and Ana is the reason everyone else does.

Now do the count the other way. List every friendship as a pair of slots and
write down who fills each slot:

> Ana, Ana, Ana, Ana, Ana, Ben, Ben, Cleo, Cleo, Dev, Eve, Femi

Twelve slots. Ana occupies five of them. Pick a slot at random — that is what
"pick a random friend" means — and the expected number of friends of the person
you land on is

$$\frac{5 \times 5 + 2 \times 2 + 2 \times 2 + 1 + 1 + 1}{12} = \frac{36}{12} = 3$$

**The average person has 2 friends. The average friend has 3.** Same network,
same friendships, different way of drawing the sample.

### Real networks make it far worse

The six-person example has a modest gap because the network is small and only
mildly uneven. Real social networks are extremely uneven, and the effect scales
with the unevenness.

Ugander and colleagues at Facebook mapped the entire active graph in 2011: 721
million users and 69 billion friendships, giving a median of about 100 friends
per user. But the distribution has a long, heavy tail — a small number of
accounts with tens of thousands of connections — and the tail is exactly what
drives the gap. When Hodas, Kooti and Lerman ran the same measurement on Twitter
in 2013, they found the paradox held for the overwhelming majority of users, and
that it extended beyond follower counts: your friends also post more, and see
more, than you do.

### Where it does not happen

| Network | Structure | Does the paradox hold? |
| --- | --- | --- |
| A ring of people, each friends with their two neighbours | every degree = 2 | **No** — exactly equal |
| A classroom where everyone knows everyone | every degree = $n-1$ | **No** — exactly equal |
| A star: one hub, everyone else attached to it | degrees 1 and $n-1$ | **Yes** — for all but the hub |
| Any real friendship network ever measured | uneven | **Yes**, for most people |

The middle two rows are the important ones. The friendship paradox is not a
theorem about people. It is a theorem about unevenness, and it vanishes the
instant the unevenness does.

## Explore

### Is it really a paradox?

By this site's classification it is **veridical**: the conclusion sounds absurd,
and it is straightforwardly, provably true. There is no error to find and no
hidden assumption to expose. What makes it worth an entry is the strength of the
intuition it defeats — most people, told the result, first assume it must be a
statistical trick or a claim about a particular unlucky sample.

### Which version of the claim is true?

Care is needed here, because three different statements get muddled together and
only two of them are theorems.

1. *The average friend has more friends than the average person.* **Always true**
   whenever degrees vary at all. This is the size-biased statement, and it is
   exact.
2. *Averaged over people, each person's friends have more friends than that
   person does.* **Also always true** (for networks with no isolated people),
   though it needs a separate argument — see the Deep Dive. This is Feld's
   version.
3. *Every individual has fewer friends than their friends do on average.*
   **False.** The most connected person in any network is a counterexample, and
   real networks have plenty of others.

Statement 3 is what people hear, and it is the only one that is wrong. The
correct headline is Feld's own, and it is carefully worded: *most* people have
fewer friends than their friends have, on average.

### The generalised version

Young-Ho Eom and Hang-Hyun Jo showed in 2014, in *Scientific Reports*, that the
same argument works for any attribute that correlates with how connected you
are. In scientific collaboration networks, your co-authors have more co-authors
than you, more publications than you, and more citations than you — not because
you are a poor scientist, but because well-connected people are more likely to
be your co-authors, and connectedness travels with productivity.

The implication is uncomfortable and general. Anything you learn about the world
through your contacts arrives through a sample weighted by connectedness. Your
friends are, on average, more social, more visible, more travelled and more
online than the population — and none of it is evidence about you.

### Feld's own point

Feld was not writing a puzzle. He was a sociologist interested in why people's
sense of their own standing is so often wrong. His 1991 conclusion was that
individuals systematically use their friends as a reference group, that this
reference group is structurally biased upward, and that people therefore
routinely feel below average on any trait that correlates with sociability —
while being perfectly ordinary.

That is a claim about social psychology built entirely out of arithmetic, and
it was made a decade and a half before anyone had a social media feed to test
it on.

## Deep Dive

### The formula

Take a network of $n$ people with degrees $k_1, \dots, k_n$, and $m$
friendships, so $\sum_i k_i = 2m$. Write $\langle k \rangle$ for the mean degree
and $\sigma^2$ for its variance.

**Sampling a person** gives expected degree $\langle k \rangle = 2m/n$.

**Sampling a friend** means choosing a friendship at random and then one of its
two ends — equivalently, choosing one of the $2m$ endpoint slots uniformly.
Person $i$ occupies $k_i$ of those slots, so the probability of landing on $i$ is
$k_i / 2m$, proportional to degree. The expected degree of the person you land
on is

$$\mathbb{E}[k_{\text{friend}}] \;=\; \sum_i \frac{k_i}{2m} \cdot k_i
\;=\; \frac{\sum_i k_i^2}{\sum_i k_i} \;=\; \frac{\langle k^2 \rangle}{\langle k \rangle}$$

Now use $\sigma^2 = \langle k^2 \rangle - \langle k \rangle^2$:

$$\frac{\langle k^2 \rangle}{\langle k \rangle} \;=\; \langle k \rangle \;+\; \frac{\sigma^2}{\langle k \rangle}$$

The average friend has $\sigma^2 / \langle k \rangle$ more friends than the
average person. That excess is non-negative always, and zero **only** when
$\sigma^2 = 0$ — that is, only in a regular network where everyone has identical
degree.

Check it against the six-person network above: $\langle k \rangle = 2$,
$\langle k^2 \rangle = (25 + 4 + 4 + 1 + 1 + 1)/6 = 6$, so $\sigma^2 = 6 - 4 = 2$
and the excess is $2/2 = 1$. Average friend degree $= 2 + 1 = 3$, exactly as
counted.

### Feld's version, proved

The formula above compares the average *person* with the average *friend*. Feld's
statement is subtly different: it averages, over people, the mean degree of that
person's own friends. Assume nobody is isolated, so every $k_i \ge 1$, and write

$$F \;=\; \frac{1}{n} \sum_{i} \frac{1}{k_i} \sum_{j \sim i} k_j$$

Reorganise the double sum by friendship rather than by person. Each friendship
$\{i, j\}$ contributes $k_j / k_i$ to person $i$'s term and $k_i / k_j$ to person
$j$'s:

$$F \;=\; \frac{1}{n} \sum_{\{i,j\} \in E} \left( \frac{k_j}{k_i} + \frac{k_i}{k_j} \right)$$

For any positive $x$, the inequality of arithmetic and geometric means gives
$x + 1/x \ge 2$, with equality only at $x = 1$. Every bracket is therefore at
least 2, and

$$F \;\ge\; \frac{1}{n} \cdot 2m \;=\; \langle k \rangle$$

with equality if and only if $k_i = k_j$ across every single friendship. On a
connected network that means everyone has the same degree.

So both versions hold, both are strict for any network with any degree variation
at all, and both come from the same source: unevenness.

Confirm on the six-person network. Its six friendships contribute
$\tfrac{2}{5} + \tfrac{5}{2}$ (Ana–Ben), the same for Ana–Cleo, then
$\tfrac{1}{5} + 5$ three times for Ana's three pendant friends, and $1 + 1$ for
Ben–Cleo. That totals $23.4$, and $23.4 / 6 = 3.9 \ge 2$. Reading the same number
off the table: $(1.4 + 3.5 + 3.5 + 5 + 5 + 5)/6 = 3.9$.

### Why it explodes on scale-free networks

Many real networks have degree distributions with a heavy tail, approximately
$P(k) \sim k^{-\gamma}$ with $2 < \gamma < 3$. In that regime the first moment
$\langle k \rangle$ is finite but the second moment $\langle k^2 \rangle$
diverges as the network grows. Since the friend's expected degree is
$\langle k^2 \rangle / \langle k \rangle$, the gap is not merely large — it
grows without bound with network size, while the typical person's degree stays
put.

This is the same divergent $\langle k^2 \rangle$ that drives the vanishing
epidemic threshold in scale-free networks: for the standard susceptible–infected–
susceptible model the threshold behaves like
$\lambda_c \approx \langle k \rangle / \langle k^2 \rangle$, which tends to zero.
The friendship paradox and the fragility of such networks to contagion are two
readings of the same quantity, which is why the paradox turns out to be a useful
epidemiological tool rather than merely a curiosity.

### The sampling trick that follows

You cannot map a large social network. You usually cannot even enumerate it. But
the derivation above says something remarkable: **to sample a person with
probability proportional to their degree, you do not need to know any degrees.**
Pick someone at random, ask them to name a friend, and take the friend. That
one step converts a uniform sample into a degree-weighted one.

Everything practical in the next section is a use of that single move.

## History

**1977.** Scott Feld and Bernard Grofman published an analysis of class sizes
showing that students consistently experience larger average class sizes than
institutions report, because a large class is experienced by more students. The
mechanism is identical; the friendship application was still fourteen years away.

**1991.** Feld published "Why Your Friends Have More Friends Than You Do" in the
*American Journal of Sociology*. The title is the result. He used friendship
nominations gathered by James Coleman in the 1950s among American high-school
students, showed that the paradox held in that data, gave the
variance-over-mean explanation, and drew the sociological moral: people's
reference groups are structurally biased, so ordinary people routinely conclude
they are below average.

**2003.** Reuven Cohen, Shlomo Havlin and Daniel ben-Avraham, working from
statistical physics rather than sociology, proposed "acquaintance immunisation":
pick people at random, ask each to name an acquaintance, and vaccinate the
acquaintance. Because the named person is sampled in proportion to degree, this
finds hubs without any knowledge of the network. In scale-free networks it cuts
the fraction that must be vaccinated dramatically compared with random
vaccination.

**2010.** Nicholas Christakis and James Fowler ran the corresponding experiment
on real people. Their study is described below.

**2011–2014.** Large-scale confirmation on online platforms — Ugander and
colleagues on Facebook, Hodas and colleagues on Twitter — followed by Eom and
Jo's demonstration that the effect generalises from friend counts to almost any
correlated attribute.

## Why It Matters

Feld's paper is a rare case of a piece of pure combinatorics that changed how a
practical problem is attacked.

**It gives you hubs for free.** Targeted vaccination and targeted intervention
are far more efficient than random ones, but they require knowing who the
well-connected people are, and in the settings that matter most — a refugee
camp, an informal settlement, a sexual contact network, a rural district — you
cannot build that map. The friendship paradox says you do not have to. One extra
question, "name a friend", buys you a degree-weighted sample. The theory is
Cohen, Havlin and ben-Avraham's; the field trials came later, including a
large randomised evaluation of network-targeted health interventions in rural
Honduras led by Christakis's group.

**It supplies a free early-warning system.** Because hubs are infected earlier in
an epidemic, a group assembled by the nominate-a-friend rule catches an outbreak
before the general population does. This is surveillance without infrastructure.

**It corrects a common feeling with a fact.** Feeling less popular, less
travelled, less accomplished than the people around you is a normal consequence
of a sampling asymmetry, not evidence. That is worth knowing, and it is
unusually easy to explain.

**It is a durable warning about network data.** Any statistic gathered by walking
across links — a snowball sample, a referral study, a crawl of a web graph, a
respondent-driven survey — is degree-biased unless it is explicitly corrected.
Respondent-driven sampling estimators exist precisely to undo the weighting that
the friendship paradox describes.

## Modern Relevance

**Why social media makes everyone feel unpopular.** Your feed is not a sample of
people; it is a sample of *activity*, which is degree-weighted twice over — once
because well-connected accounts are more likely to be in your network, and again
because they post more. Hodas and colleagues measured exactly this on Twitter:
users are outperformed by their contacts not only on follower counts but on
activity and on the volume of content received. So the platform reliably shows
you a version of your peer group that is more connected, more active and more
visible than your peer group actually is. The comparison is not being made
unfairly by you; the sample is arriving pre-skewed. The same argument covers the
sense that everyone else's holidays, careers and social lives are busier than
yours: the people you hear from are, structurally, the people who do more of
that.

**Outbreak detection.** Christakis and Fowler's 2010 study followed 744 Harvard
undergraduates through the H1N1 influenza wave of autumn 2009. Some were chosen
at random; the rest were friends those students named. No network mapping was
done — the nomination step did all the work. The friend group's epidemic curve
ran measurably ahead of the random group's, by around two weeks on the daily
incidence measure and by a few days on a stricter measure based on date of
symptom onset. The general method has since been applied to other contagions,
including the spread of information and of behaviours.

**Vaccination and intervention targeting.** Acquaintance immunisation is now a
standard entry in the epidemic-control toolkit, and the nominate-a-friend design
has been used in public-health trials to seed interventions with well-connected
people rather than random ones.

**Network sampling in machine learning.** Random-walk samplers used to train
graph neural networks, and crawlers used to collect web and social data, all
sample proportionally to degree. Uncorrected, this produces training sets that
over-represent hubs and models that mispredict the periphery. Degree correction
in these pipelines is the friendship paradox being paid off.

**Perception of consensus.** Because the loudest accounts are the best connected,
the distribution of opinion you observe through a network is weighted by
connectedness, not by headcount. A minority position held by highly connected
people can be over-represented in everyone's sample simultaneously — the "majority
illusion" described by Kristina Lerman and colleagues in 2016, which is the
friendship paradox applied to beliefs rather than to friend counts.
