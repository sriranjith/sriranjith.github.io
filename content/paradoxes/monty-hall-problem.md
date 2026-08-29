---
title: The Monty Hall Problem
slug: monty-hall-problem
alternateNames:
  - The Three Doors Problem
  - Monty Hall Paradox
summary: >-
  You pick one of three doors. The host opens a different door to reveal a goat,
  then offers you the chance to switch. Switching doubles your odds of winning —
  and almost nobody believes it the first time.
hook: >-
  Three doors, one car. The host opens a losing door and offers you the swap.
  Does it make any difference whether you take it?
era: twentieth-century
date: 1975 (posed), 1990 (made famous)
year: 1975
origin: >-
  Posed by biostatistician Steve Selvin in a letter to The American Statistician,
  and made notorious by Marilyn vos Savant's 1990 Parade column.
people:
  - steve-selvin
  - marilyn-vos-savant
  - paul-erdos
domains:
  - probability
  - psychology
types:
  - probability
  - knowledge
  - decision-making
nature: veridical
difficulty: beginner
status: resolved
renown: landmark
interactive: monty-hall
concepts:
  - Conditional probability
  - Bayes' theorem
  - Information from an action
  - Base rate
relationships:
  - kind: related
    to: bertrands-box-paradox
    note: The same trick in an older costume — Bertrand posed it in 1889.
  - kind: influenced-by
    to: bertrands-box-paradox
  - kind: related
    to: boy-or-girl-paradox
    note: Both turn on exactly what question the evidence answers.
  - kind: contrasts-with
    to: birthday-problem
    note: Both are probability shocks, but Monty Hall punishes bad conditioning while the birthday problem punishes bad counting.
  - kind: related
    to: sleeping-beauty-problem
    note: Both ask what a rational agent should believe after receiving structured information.
references:
  - source: selvin-1975-letter
    role: primary-source
    note: The original three-line letter that started it.
  - source: vos-savant-1990-parade
    role: primary-source
    note: The column that provoked roughly 10,000 letters, many from people with doctorates.
  - source: rosenhouse-monty-hall-problem
    role: book
    note: The definitive book-length treatment, including the variants.
  - source: sep-monty-hall
    role: encyclopedia
  - source: krauss-wang-2003
    role: paper
    note: Experimental work on why the problem is so cognitively difficult.
furtherReading:
  - title: Monty Hall problem — Marilyn vos Savant's original columns and reader mail
    url: https://web.archive.org/web/20130121183432/http://marilynvossavant.com/game-show-problem/
    note: The reader letters are the real document here.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Three doors. Behind one is a car. Behind the other two, a goat each.

You point at Door 1.

The host — who knows exactly where the car is — does not open your door. Instead
he walks over to Door 3, swings it open, and there stands a goat. He smiles and
asks:

**"Do you want to stay with Door 1, or switch to Door 2?"**

It feels obvious. Two doors left, one car. Fifty-fifty. It cannot possibly
matter what you do.

It matters enormously. Switching wins two times out of three. Staying wins one
time in three.

If that sounds wrong, you are in excellent company. When this answer was
published in 1990, about ten thousand readers wrote in to say it was nonsense.
Around a thousand of them had PhDs.

## Understand

Here is the move that unlocks it: **the host's action is not random.**

Think about your very first pick, before anything is opened. You had a one in
three chance of pointing at the car. That means there was a two in three chance
the car was hiding somewhere in the other two doors.

Nothing the host does afterwards changes what already happened when you pointed.
Your door is still a one-in-three door.

So the other two doors, taken together, still hold two-thirds of the
probability. The host then does you an enormous favour: he opens one of those
two and shows you it is empty. He was always able to do this, because he knows
where the car is and he will never open the car door.

All two-thirds is now squeezed onto the single unopened door.

> Your door: 1/3.
> The door the host left alone: 2/3.

The clean way to say it: **the host gave you information about the other two
doors, and none at all about yours.**

### The version that convinces everyone

Play with a hundred doors.

You pick Door 47. The host then opens ninety-eight other doors, every one a
goat, leaving only Door 47 and Door 83.

Now, do you feel fifty-fifty?

Of course not. You feel that you got lucky picking 47 out of a hundred, or —
much more likely — that the host has been carefully steering around the car this
whole time, and it is sitting behind Door 83.

That instinct is exactly right, and it is exactly the same instinct that works
with three doors. It is just louder.

## Examples

**Enumerate every case.** Suppose the car is behind Door 1 and you always pick
Door 1, 2, or 3 with equal chance. Write down what happens if you *always
switch*:

| Car is behind | You pick | Host opens | You switch to | Result |
| --- | --- | --- | --- | --- |
| Door 1 | Door 1 | Door 2 or 3 | the other goat door | **Lose** |
| Door 1 | Door 2 | Door 3 | Door 1 | **Win** |
| Door 1 | Door 3 | Door 2 | Door 1 | **Win** |

Two wins, one loss. Switching wins 2/3 of the time. The same table with "always
stay" gives one win and two losses.

That is the entire proof. There is no step in it more advanced than counting.

**Play it with cards.** Deal three cards face down, one of them an ace. Have a
friend who can see the faces play the host. Do twenty rounds always switching,
then twenty always staying. You will feel the 2/3 well before round twenty.

## Explore

The Monty Hall Problem is famous for being counterintuitive, but the more
interesting fact is that **the standard answer depends on assumptions that the
puzzle usually leaves unstated.** This is where most arguments about it actually
live.

The 2/3 answer requires all of the following:

1. The host always opens a door.
2. The host always opens a door with a goat.
3. The host never opens the door you picked.
4. If the host has a choice of two goat doors, he picks between them at random.
5. The host always offers the switch.

Change any one of these and the answer changes:

- **If the host opens a door at random** and it happens to reveal a goat, then
  switching really is 50/50. The extra probability came from the host's
  knowledge; remove the knowledge and it vanishes. This is sometimes called
  "Monty Fall".
- **If the host only offers a switch when you picked the car** ("Monty Hell"),
  switching loses every time.
- **If the host prefers the lower-numbered goat door** when he has a choice,
  then your odds after seeing Door 3 open jump to 100% — because he would have
  opened Door 2 if he could.

Marilyn vos Savant's critics were mostly wrong, but the small number of them who
complained that the problem was underspecified had a real point. The puzzle as
usually stated does not tell you rule 4, and the sharper commentators — including
statisticians writing in *The American Statistician* — said so at the time.

The lesson generalises well beyond game shows: **when someone shows you
evidence, the important question is not "what did I see?" but "under what
circumstances would I have been shown this?"**

## Deep Dive

Let $C_i$ be the event that the car is behind door $i$, and $H_j$ the event that
the host opens door $j$. Assume you chose Door 1.

Priors: $P(C_1) = P(C_2) = P(C_3) = 1/3$.

The host's behaviour under the standard rules:

- $P(H_3 \mid C_1) = 1/2$ — both remaining doors hide goats, so he picks at random.
- $P(H_3 \mid C_2) = 1$ — he cannot open Door 1 (yours) or Door 2 (the car), so Door 3 is forced.
- $P(H_3 \mid C_3) = 0$ — he never opens the car.

Total probability of the observation:

$$P(H_3) = \tfrac12 \cdot \tfrac13 + 1 \cdot \tfrac13 + 0 \cdot \tfrac13 = \tfrac12$$

Bayes' theorem then gives:

$$P(C_1 \mid H_3) = \frac{P(H_3 \mid C_1)P(C_1)}{P(H_3)} = \frac{\tfrac12 \cdot \tfrac13}{\tfrac12} = \tfrac13$$

$$P(C_2 \mid H_3) = \frac{P(H_3 \mid C_2)P(C_2)}{P(H_3)} = \frac{1 \cdot \tfrac13}{\tfrac12} = \tfrac23$$

The asymmetry sits entirely in the likelihood $P(H_3 \mid C_2) = 1$ versus
$P(H_3 \mid C_1) = 1/2$. The observation is **twice as likely** in the world
where the car is behind Door 2, so it doubles that hypothesis's odds.

Notice what happens if the host is ignorant and opens Door 3 at random,
conditioned on it happening to show a goat. Then $P(H_3 \mid C_1) = P(H_3 \mid C_2) = 1/2$,
the likelihood ratio is 1, and the posterior stays at 1/2 each. **The
information lives in the host's constraint, not in the goat.**

Generalising to $n$ doors where the host opens $k$ goat doors: staying wins with
probability $1/n$, and switching wins with probability

$$\frac{n-1}{n} \cdot \frac{1}{n - k - 1}$$

With $n = 100$ and $k = 98$, switching wins with probability $99/100$.

## History

**1959.** Martin Gardner published the Three Prisoners Problem in *Scientific
American* — structurally identical, and it generated the same volume of angry
mail. Gardner called it "a wonderfully confusing little problem".

**1889.** Earlier still, Joseph Bertrand's box paradox posed the same conditional
trap with three boxes of coins.

**1975.** Steve Selvin, a biostatistician at Berkeley, wrote a short letter to
*The American Statistician* describing the problem in terms of the television
game show *Let's Make a Deal*, hosted by Monty Hall. In a follow-up letter that
same year he gave it the name it now carries.

**1990.** Marilyn vos Savant answered a reader's version of the question in her
*Parade* magazine column "Ask Marilyn" and said to switch. The response was
extraordinary: roughly 10,000 letters, the large majority insisting she was
wrong, including around 1,000 from people with doctorates. Several were
condescending in ways that became famous in their own right. One professor of
mathematics wrote, "You blew it, and you blew it big."

She was right. She ran the argument again in three further columns, and
eventually asked schoolteachers across the country to run the experiment with
their classes. The empirical results came back at roughly two-thirds, and the
tide turned.

**A note on the real Monty Hall.** The actual host of *Let's Make a Deal* was
under no obligation to open a door at all, and in a 1991 *New York Times*
interview he cheerfully demonstrated that a host who chooses when to offer the
switch can beat the contestant every time. The puzzle bearing his name describes
a host far more rule-bound than he ever was.

**Paul Erdős.** The mathematician Paul Erdős, one of the most prolific in
history, reportedly refused to accept the answer until he was shown a computer
simulation. This is the single most reassuring fact about the Monty Hall
Problem.

## Why It Matters

Most famous puzzles are famous because they are hard. This one is famous because
it is *easy* and people still get it wrong — including people who are
professionally excellent at exactly this kind of reasoning.

That makes it unusually valuable evidence about how human reasoning fails.

The specific failure has a name: people treat the *outcome* they observed as the
whole of the evidence, and ignore the *process* that produced it. Seeing a goat
feels like the fact. But the fact is "a host who knows where the car is, and is
forbidden from opening it, chose to open that particular door." Those are very
different pieces of evidence, and only the second one is informative.

This is the same error that makes selection bias so hard to see. It is why a
drug trial's protocol matters as much as its results, why "I only hear from
satisfied customers" is not evidence of satisfaction, and why the question
"under what conditions would I *not* have been shown this?" is one of the most
useful in all of reasoning.

## Modern Relevance

**Machine learning and missing data.** Whether it is safe to drop rows with
missing values depends entirely on *why* they are missing — the distinction
between missing-at-random and missing-not-at-random is the Monty Hall
distinction wearing a lab coat. Data that went missing for a reason carries
information, exactly as the host's choice does.

**A/B testing and peeking.** Stopping an experiment when the numbers look good
is a host who only opens a door when it suits him. The observed result is real;
the inference drawn from it is not.

**Medical diagnostics.** Interpreting a positive test requires the base rate and
the testing policy, not just the result. Physicians shown base-rate problems in
the Monty Hall shape make the same error as everyone else, which is why the
framing of diagnostic statistics in natural frequencies rather than percentages
measurably improves decisions.

**Security and information leakage.** In cryptography and privacy, what an
adversary learns from an oracle depends on the oracle's *policy*, not only its
answers. A system that reveals "this password is wrong" leaks differently from
one that reveals "this username does not exist" — same observable, different
constraint, different information.
