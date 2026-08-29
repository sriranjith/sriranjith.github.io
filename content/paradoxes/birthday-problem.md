---
title: The Birthday Problem
slug: birthday-problem
alternateNames:
  - The Birthday Paradox
  - Birthday Coincidence Problem
summary: >-
  In a room of just 23 people, there is a better than even chance that two of
  them share a birthday. Not 183 people. Twenty-three. The reason is that
  23 people make 253 pairs, and every pair is a chance to match.
era: twentieth-century
date: 1939 (first published), circulating from the 1920s
year: 1939
origin: >-
  First published by Richard von Mises in 1939 as a problem about occupancy —
  balls dropped into 365 boxes — though the puzzle had been circulating among
  mathematicians for at least a decade before that.
people:
  - richard-von-mises
domains:
  - probability
  - mathematics
  - computer-science
types:
  - probability
nature: counterintuitive-result
difficulty: beginner
status: resolved
interactive: birthday-problem
concepts:
  - Counting pairs
  - Complementary probability
  - Collision probability
  - Occupancy problems
  - Birthday attack
relationships:
  - kind: related
    to: friendship-paradox
    note: Both dissolve the moment you stop counting people and start counting the connections between them.
  - kind: contrasts-with
    to: bertrands-box-paradox
    note: Two beginner-level probability shocks with opposite causes — Bertrand's trap is bad conditioning, the birthday trap is bad counting.
  - kind: contrasts-with
    to: boy-or-girl-paradox
    note: The birthday problem is hard because the counting is hard; the boy-or-girl problem is hard because the question is ambiguous.
references:
  - source: von-mises-1939-besetzung
    role: primary-source
    note: The first publication, framed as an occupancy problem rather than a puzzle about people.
  - source: bloom-1973-birthday
    role: paper
    note: Proves that evenly spread birthdays are the hardest case, so 23 is an upper bound in the real world.
  - source: diaconis-mosteller-1989
    role: paper
    note: Extends the calculation to near-matches, multiple matches, and coincidences generally.
  - source: yuval-1979-swindle-rabin
    role: paper
    note: The cryptographic consequence — the birthday attack on hash functions.
  - source: grinstead-snell-probability
    role: academic-reference
    locator: "Chapter 3"
furtherReading:
  - title: Birthday problem — Wolfram MathWorld
    url: https://mathworld.wolfram.com/BirthdayProblem.html
    note: Exact values, generating functions, and the near-birthday variants in one place.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Your class has 30 people in it. Your teacher says: **I bet two of you have the
same birthday.**

That sounds like a terrible bet. There are 365 days in a year and only 30 of
you. There is loads of room. Most days of the year will not belong to anybody.

But your teacher is not being reckless. In a class of 30, she wins that bet
about seven times out of ten.

It gets worse. Look at a football team lining up before a match — eleven
players, and the World Cup squads that fill the tournament each have exactly
23 names on them. Twenty-three people. That is the magic number: with 23
people in a room, it is already **more likely than not** that two of them blow
out candles on the same day.

Twenty-three. Out of 365 days. And the coin is already tilted the wrong way.

## Understand

Almost everybody who hears this thinks about it the same wrong way. You picture
yourself standing in the room, and you ask: *what are the chances someone here
shares MY birthday?* With 22 other people and 365 days, the answer is small —
about 6%. So the whole thing feels absurd.

But that is not the question.

The question is whether **any** two people match. Not you and someone. Any two.
And that is a completely different thing to count.

### Count the pairs, not the people

Here is the whole secret.

A birthday match does not happen to a person. It happens to a *pair* of people.
So the right thing to count is not how many people are in the room, but how
many pairs they make.

- 2 people make 1 pair.
- 3 people make 3 pairs.
- 5 people make 10 pairs.
- 10 people make 45 pairs.
- **23 people make 253 pairs.**

Every one of those 253 pairs is a separate little lottery ticket, a separate
chance to match. And 253 is a big number compared to 365.

That is the trick. People grow one at a time; pairs grow much faster. Add one
person to a room of 22 and you have not added one chance of a match — you have
added 22 chances, one against each person already there.

### Why the pairs win

Each individual pair is unlikely to match: about 1 chance in 365, so 364 times
out of 365 they do *not*. That is a 99.7% chance of *no* match for that pair,
which sounds like a near-certainty.

But you need **all 253 pairs** to fail at once for the room to have no shared
birthday. Multiply 253 near-certainties together and the near-certainty erodes.
It is the same reason a lottery with millions of tickets has a winner even
though each individual ticket loses.

Run that calculation properly and the chance of no match in a room of 23 is
just under a half. So the chance of at least one match is just over a half —
50.7%, to be precise.

### The question people actually mean

If you *do* want the other question — the chance that someone in the room
shares **your** particular birthday — the answer is entirely different. You
need **253 other people** for that to pass 50%.

The number 253 turning up twice is a coincidence, and a nicely appropriate one.
In the first case 253 is the number of *pairs* made by 23 people. In the second
it is the number of *people* you need lined up against your one fixed date.
Same number, completely different reason.

The gap between 23 and 253 is the gap between "any match anywhere" and "a match
with me". Confusing those two is the entire paradox.

## Examples

**The exact probabilities.** These are the real figures for a room of $n$
people, assuming birthdays are spread evenly and ignoring leap years:

| People | Pairs | Chance of a shared birthday |
| ---: | ---: | ---: |
| 5 | 10 | 2.7% |
| 10 | 45 | 11.7% |
| 20 | 190 | 41.1% |
| 22 | 231 | 47.6% |
| **23** | **253** | **50.7%** |
| 30 | 435 | 70.6% |
| 40 | 780 | 89.1% |
| 50 | 1,225 | 97.0% |
| 57 | 1,596 | 99.0% |
| 70 | 2,415 | 99.9% |
| 100 | 4,950 | 99.99997% |
| 366 | 66,795 | 100% |

Notice how fast the middle of the table moves. Between 20 and 30 people the
probability climbs from two-in-five to seven-in-ten. And notice the tail: it
takes 366 people to reach absolute certainty, but you are already at 99.9% by
70. The last 30% of certainty costs you 47 more people; the last 0.1% costs you
nearly 300.

**Compare the two questions side by side.**

| Number of other people | Chance *someone* in the room matches *someone* | Chance someone matches **you** |
| ---: | ---: | ---: |
| 22 | 50.7% | 5.9% |
| 50 | 97.0% | 12.8% |
| 100 | 99.99997% | 24.0% |
| 252 | ~100% | 49.9% |
| 253 | ~100% | 50.0% |

The left column races away. The right column crawls. Same room, same people,
two different questions.

**A real check you can do.** Take any group of 23 or more that you did not
choose for this purpose — a football squad, a class register, the names on a
committee. When the 32 squads at the 2014 World Cup were checked, each of them
exactly 23 players, roughly half contained a shared birthday. That is close to
what the arithmetic predicts, which is the point: this is not a trick, it is
just what rooms of people are like.

**Handshakes, the same idea in disguise.** Ask how many handshakes happen if
everyone in a room of 23 shakes everyone else's hand exactly once. The answer is
253, and nobody finds that surprising. The birthday problem is that fact wearing
a costume.

## Explore

The standard calculation makes two assumptions, and it is worth being honest
about both.

**Birthdays are not actually uniform.** Births cluster: in many countries
September is busy, late December and early January are quiet, and scheduled
caesareans have thinned out weekends noticeably since the 1990s. Leap-day
babies are rare. So the real distribution is lumpy.

This does not weaken the result — it strengthens it. David Bloom proved in 1973
that the uniform distribution *minimises* the chance of a match. Any clustering
makes collisions more likely. So 23 is a worst case, and the real-world number
is 23 or fewer. Empirical studies using actual birth registers consistently find
the crossover at 23.

**Twins, and rooms that were not randomly assembled.** The calculation assumes
the people are independent. A room containing twins, or a nursery class where
every child was born within a few months of the others, breaks that assumption
badly. Ordinary groups of adults are close enough to independent for the
arithmetic to hold.

**Is it a paradox at all?** By this site's classification, no — not in the strict
sense. Nothing contradictory happens. The reasoning is elementary, the answer is
certain, and the entire surprise lives in human intuition rather than in
mathematics. It is a *counterintuitive result*: correct, provable, and simply
not what your gut says.

What makes it worth studying is *why* the gut fails. Persi Diaconis and
Frederick Mosteller identified the pattern in 1989: people reason about
coincidences from their own vantage point. You experience the room as "me and
22 others", not as "253 pairs, none of which need involve me". The mental model
is egocentric, and the mathematics is not.

That single error — counting the things instead of counting the relationships
between them — is one of the most reliable ways to be wrong about a large
system.

## Deep Dive

### The exact formula

Let $n$ be the number of people and $N = 365$ the number of possible birthdays.
Compute the complement: the probability that all $n$ birthdays are *distinct*.

Line the people up. The first can have any birthday. The second must avoid one
day, the third must avoid two, and so on:

$$\bar{p}(n) = \prod_{k=1}^{n-1}\left(1 - \frac{k}{N}\right) = \frac{N!}{N^{n}\,(N-n)!} = \frac{{}_{N}P_{n}}{N^{n}}$$

The probability of at least one match is therefore

$$p(n) = 1 - \frac{365!}{365^{n}\,(365-n)!}$$

At $n = 23$ this evaluates to $0.507297\ldots$, and at $n = 22$ to
$0.475695\ldots$ — so 23 is the smallest group that crosses one half.

### The exponential approximation

Since $1 - x \approx e^{-x}$ for small $x$,

$$\bar{p}(n) \approx \prod_{k=1}^{n-1} e^{-k/N} = \exp\!\left(-\frac{1}{N}\sum_{k=1}^{n-1}k\right) = \exp\!\left(-\frac{n(n-1)}{2N}\right)$$

which for $N = 365$ gives the memorable form

$$p(n) \approx 1 - e^{-n(n-1)/730}$$

The exponent is exactly $\binom{n}{2}/N$ — the number of pairs divided by the
number of days. The "count the pairs" intuition is not an analogy; it is
literally what the exponent is.

The approximation is good:

| $n$ | Exact | $1 - e^{-n(n-1)/730}$ |
| ---: | ---: | ---: |
| 10 | 11.69% | 11.60% |
| 23 | 50.73% | 50.00% |
| 50 | 97.04% | 96.51% |
| 70 | 99.92% | 99.87% |

Inverting it gives the threshold directly. Setting $p = 1/2$:

$$n \approx \sqrt{2N\ln 2} \approx 1.1774\sqrt{N}$$

For $N = 365$ this is $22.49$, so $n = 23$. The square root is the headline:
**the group size needed grows like the square root of the number of
possibilities, not linearly.** Ten times as many days needs only about three
times as many people.

### "Someone shares my birthday" — the 253 calculation

Fix your own birthday. Each other person independently misses it with
probability $364/365$. With $n$ others,

$$P(\text{at least one match with you}) = 1 - \left(\frac{364}{365}\right)^{n}$$

Setting this to $1/2$:

$$n = \frac{\ln 2}{-\ln(364/365)} = \frac{0.6931}{0.0027435} = 252.65$$

so $n = 253$. At $n = 252$ the probability is $0.4991$; at $n = 253$ it is
$0.5005$.

The structural difference is the count. The first problem has
$\binom{n}{2} = n(n-1)/2$ chances and grows quadratically; the second has $n$
chances and grows linearly. Everything else follows.

### Near-birthdays

Ask instead for two people whose birthdays fall within $k$ days of each other.
Each pair now has roughly $(2k+1)/365$ chance of matching, so the threshold
scales as

$$n \approx 1.2\sqrt{\frac{365}{2k+1}}$$

The results are startling:

| Within | People needed for >50% |
| ---: | ---: |
| same day ($k=0$) | 23 |
| 1 day | 14 |
| 3 days | 9 |
| 7 days | 7 |

Seven people are more likely than not to contain two birthdays within a week of
each other. Diaconis and Mosteller use this as their central example of why
coincidences feel meaningful: the human eye counts near-matches as matches, and
near-matches are far commoner than exact ones.

### The birthday attack

The same square-root law is a load-bearing fact in cryptography. A hash function
with a $b$-bit output has $N = 2^{b}$ possible digests. Finding two *different*
inputs with the same digest — a collision — takes about

$$\sqrt{N} = 2^{b/2}$$

attempts, not $2^{b}$. Gideon Yuval described the attack in 1979 in a paper
titled, memorably, "How to Swindle Rabin". The method is simply to generate
$2^{b/2}$ variants of a benign document and $2^{b/2}$ variants of a malicious
one and wait for the inevitable pair.

This is why hash output lengths are chosen at *twice* the desired security
level. A 128-bit hash such as MD5 offers only 64 bits of collision resistance;
SHA-1's 160 bits offer 80. Both have fallen — SHA-1's first public collision, in
2017, needed about $2^{63}$ hash computations, cheaper still than the generic
birthday bound because of structural weaknesses on top of it.

The same bound governs block-cipher modes. A 64-bit block cipher starts leaking
after roughly $2^{32}$ blocks — about 32 GB — which is exactly the Sweet32
attack demonstrated against 3DES in TLS in 2016. It governs UUID design too: a
random 122-bit UUID stays collision-free in practice only because $2^{61}$ is a
very large number of identifiers.

### Generalised: the occupancy view

Von Mises' original framing was cleaner than the birthday story. Throw $n$ balls
independently into $N$ boxes; what is the chance some box gets two? The expected
number of collisions is

$$\mathbb{E}[\text{collisions}] = \binom{n}{2}\frac{1}{N}$$

and for $n \ll N$ the number of collisions is approximately Poisson with that
mean, giving

$$P(\text{no collision}) \approx e^{-\binom{n}{2}/N}$$

directly. Setting the expected count to 1 gives $n \approx \sqrt{2N}$ — the
square-root law again, this time in one line. The birthday problem is the
$N = 365$ case of a general fact about hashing, load balancing, and any system
that assigns things to slots at random.

## History

**Before publication.** The problem circulated orally among mathematicians in
the 1920s and 1930s. It is commonly attributed to Harold Davenport, who is said
to have posed it around 1927; Davenport never published it and, by his own
account, did not claim to have invented it. This is the honest state of the
record — the puzzle has no clean point of origin.

**1939.** Richard von Mises published the first known treatment, in a paper on
occupancy probabilities in the journal of the Faculty of Sciences at the
University of Istanbul. Von Mises had fled Berlin in 1933 and was teaching in
Istanbul; the paper is in German, in a Turkish journal, and was reprinted in his
collected works in 1964. He did not present it as a puzzle at all, and did not
dwell on the number 23. His interest was the general distribution of matches
when $n$ items fall into $N$ categories.

**Post-war.** William Feller included the problem in *An Introduction to
Probability Theory and Its Applications* (1950), which put it into the standard
undergraduate curriculum, and from there it spread into every introductory text
in the subject.

**1973.** David Bloom settled the last loose end: uniform birthdays are the
hardest case, so any real-world clustering only lowers the threshold. This
turned an idealised calculation into a claim you can safely make about actual
rooms.

**1979.** Gideon Yuval published the birthday attack, moving the result from
recreational mathematics to the design constraints of every cryptographic hash
function since.

**1989.** Persi Diaconis and Frederick Mosteller published *Methods for Studying
Coincidences*, which generalised the birthday calculation into a systematic
account of why coincidences are so much commoner than people expect — and
introduced the "law of truly large numbers".

## Why It Matters

The birthday problem is the cleanest demonstration of a specific and expensive
error: **reasoning about a system by counting its parts instead of counting the
interactions between its parts.**

Parts grow linearly. Interactions grow quadratically. Any intuition calibrated
on the first will be badly wrong about the second, and the error gets worse as
the system gets bigger.

Concretely, this is why:

- A team of 10 engineers has 45 communication channels, not 10 — the observation
  behind Fred Brooks' argument in *The Mythical Man-Month* that adding people to
  a late project makes it later.
- A database of a million records has half a trillion possible duplicate pairs,
  so record-linkage systems find "matches" in data that contains none.
- A study testing 20 hypotheses at the 5% level expects one false positive by
  construction — and a study *comparing* 20 groups is testing 190 pairs.
- Rare adverse drug interactions are not rare in aggregate: 20 drugs on a
  patient's list make 190 pairs, and pharmacovigilance is essentially a
  birthday-problem computation.

It also underwrites a genuinely useful sceptical reflex. When something
astonishing happens — the same number in two lottery draws, two strangers who
turn out to share a hometown, a psychic's hit — the right first question is not
"how unlikely was that?" but **"how many chances were there for something like
that to happen?"** The answer is almost always vastly larger than it feels, and
the coincidence usually evaporates.

## Modern Relevance

**Cryptography.** Every choice of hash length in use today is a birthday
calculation. SHA-256 is 256 bits because 128 bits of collision resistance is the
target; the extra 128 bits exist purely to defeat the square-root law. Bitcoin
addresses, TLS certificates, Git object identifiers and content-addressed
storage all live inside this bound.

**Hash tables and distributed systems.** Load balancers, sharding schemes and
distributed caches all assign keys to slots by hashing. Collisions start
appearing after about $\sqrt{N}$ keys, not $N$, which is why hash tables need
collision handling long before they look full, and why "the hash space is huge,
collisions won't happen" is a recurring production incident.

**Bioinformatics and forensics.** DNA profiling reports a random-match
probability per comparison, but a database search compares against millions of
profiles at once. The distinction between "the chance this profile matches the
suspect" and "the chance some profile in the database matches the sample" is
exactly the 23-versus-253 distinction, and courts have repeatedly had to be
walked through it.

**Machine learning.** Deduplicating a training corpus, detecting near-duplicate
documents, and estimating the chance of test-set contamination are all
near-birthday problems on hashed representations. The commonly used
locality-sensitive hashing schemes are engineered specifically around the
collision rates this calculation predicts.

**Everyday scepticism.** With eight billion people alive, events at
one-in-a-billion odds happen to eight people a day. This is the "law of truly
large numbers", and the birthday problem is its most teachable case.
