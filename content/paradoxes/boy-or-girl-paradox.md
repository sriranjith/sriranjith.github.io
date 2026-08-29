---
title: The Boy or Girl Paradox
slug: boy-or-girl-paradox
alternateNames:
  - The Two Children Problem
  - Mr Smith's Children
  - The Second Sibling Problem
summary: >-
  A family has two children and at least one is a boy. What is the chance both
  are boys? Martin Gardner said 1/3 in 1959, then conceded it could equally be
  1/2. The answer depends on how you learned the fact — and the puzzle never
  says.
era: twentieth-century
date: 1959 (posed), 1961 (retracted in part)
year: 1959
origin: >-
  Posed by Martin Gardner in his October 1959 Mathematical Games column in
  Scientific American, as the puzzles about Mr Jones's and Mr Smith's children.
people:
  - martin-gardner
domains:
  - probability
  - statistics
  - psychology
types:
  - probability
  - knowledge
nature: apparent-contradiction
difficulty: intermediate
status: debated
concepts:
  - Sampling protocol
  - Conditional probability
  - Underspecified problems
  - Sample space selection
  - Ambiguity in natural language
relationships:
  - kind: related
    to: sleeping-beauty-problem
    note: Both look like arithmetic disputes and turn out to be disputes about which reference class the observation was drawn from.
  - kind: related
    to: two-envelopes-problem
    note: Both read as clean probability puzzles until you notice the setup never specified the distribution the evidence came from.
references:
  - source: gardner-1961-second-book
    role: primary-source
    locator: "\"Nine More Problems\" and \"Probability and Ambiguity\""
    note: Both the original 1/3 answer and Gardner's later partial retraction, printed in the same volume.
  - source: bar-hillel-falk-1982
    role: paper
    note: The standard analysis of why the problem is ambiguous and why readers silently disagree about the protocol.
  - source: nickerson-2004-cognition-and-chance
    role: book
    note: Works through the range of plausible scenarios that yield 1/2 rather than 1/3.
  - source: grinstead-snell-probability
    role: academic-reference
    locator: "Chapter 4"
    note: Presents the problem explicitly as an example of an ambiguous question rather than a hard one.
furtherReading:
  - title: Martin Gardner's Mistake (Tanya Khovanova, 2011)
    url: https://arxiv.org/abs/1102.0173
    note: A short paper arguing that even the standard 1/3 framing conceals an unstated assumption about how the information was reported.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

You meet a neighbour at the bus stop. You know she has two children, and that
is all you know.

She mentions, in passing, that **one of them is a boy**.

What is the chance she has two boys?

Say it out loud before reading on. Most people say one half: the other child is
either a boy or a girl, and those are equally likely.

Now here is the answer that made this puzzle famous. There are four kinds of
two-child family, all equally common: boy-boy, boy-girl, girl-boy, girl-girl.
Knowing at least one is a boy rules out only girl-girl. Three kinds remain, and
in exactly one of them both children are boys.

**One third.**

That is the answer Martin Gardner printed in *Scientific American* in 1959, and
it is the answer you will find in most textbooks.

It is also the answer Gardner himself later took back.

## Understand

Here is the thing about this puzzle: both answers are right, and the puzzle does
not tell you which one you are being asked.

### Why 1/3 looks correct

Line up every family in the world with exactly two children. Roughly a quarter
have two boys, a quarter two girls, and a half have one of each — because
"one of each" happens in two ways, older boy or older girl.

Now cross out every family with two girls, because our neighbour told us she has
at least one boy. Of the families left, one in three has two boys.

The argument is airtight, *if* the way you found this family was: take the list
of all two-child families that include at least one boy, and pick one at random.

### Why 1/2 also looks correct

But that is not how you met your neighbour. You met her at a bus stop, and she
volunteered something about one of her children.

Suppose she was simply telling you about a child — say the one she had just
dropped at school. Then you learned the sex of **one specific child**, chosen
without regard to the other. And the sex of the other child has nothing to do
with it.

**One half.**

Both calculations are correct. They are answers to different questions, and the
difference is not in the mathematics. It is in **how the information reached
you**.

### The thing that is actually going on

Compare these two situations carefully. In both, you end up knowing the same
sentence is true: *at least one child is a boy*.

**Situation A.** You have a directory of two-child families. You search it for
families with at least one boy and pick one at random. Chance of two boys: 1/3.

**Situation B.** You meet a two-child family. One child walks in. It is a boy.
Chance of two boys: 1/2.

The sentence is identical. The probability is not. What differs is the
*procedure that could have produced that sentence*.

In Situation A, a boy-girl family would definitely end up on your list. So would
a boy-boy family. Same likelihood, so the two-to-one prior ratio of mixed
families to boy-boy families survives untouched, and you get 1/3.

In Situation B, a boy-boy family is **certain** to send you a boy. A boy-girl
family only does so half the time. Boy-boy is twice as good an explanation of
what you saw, which exactly cancels the fact that mixed families are twice as
common. You get 1/2.

The information you received was never just the sentence. It was the sentence
*plus the process that generated it* — and the puzzle, as normally told, tells
you nothing about that process.

### So what is the answer?

The honest answer is: **the question is underspecified.** Not hard. Not subtle.
Incomplete.

Gardner himself came to this conclusion. Having published 1/3, he returned to
the problem in a follow-up column and wrote that the answer depends on the
procedure by which the information was obtained — and that both 1/3 and 1/2 are
defensible under readings a reasonable person might adopt.

That concession is the most important fact about this puzzle, and it is
routinely left out when the puzzle is retold.

## Examples

**The four-family table.** Take 400 two-child families, evenly distributed:

| Older | Younger | Families |
| --- | --- | ---: |
| Boy | Boy | 100 |
| Boy | Girl | 100 |
| Girl | Boy | 100 |
| Girl | Girl | 100 |

**Question 1 — "the older child is a girl. Both girls?"** Keep rows 3 and 4:
200 families, of which 100 are girl-girl. **1/2.** Nobody disputes this one,
because "the older child" names a specific child.

**Question 2 — "at least one is a boy. Both boys?"** Keep rows 1, 2 and 3: 300
families, of which 100 are boy-boy. **1/3** — provided the families were
selected by exactly that criterion.

**Now sample differently.** Walk up to each of the 400 families and meet one
child at random.

| Family type | Families | Times you meet a boy |
| --- | ---: | ---: |
| Boy-Boy | 100 | 100 |
| Boy-Girl | 100 | 50 |
| Girl-Boy | 100 | 50 |
| Girl-Girl | 100 | 0 |

You meet a boy 200 times. In 100 of those the family is boy-boy. **1/2.**

Same population. Same true statement afterwards. Different sampling procedure,
different answer.

**Gardner's two procedures.** In his retraction he set out the two readings
explicitly:

1. Collect all two-child families with at least one boy; pick Mr Smith from that
   list. → **1/3**
2. Pick a two-child father at random and ask him to make a true statement of the
   form "at least one of my children is a ___", tossing a coin to choose which
   to report if he has one of each. → **1/2**

Both are natural readings of "Mr Smith has two children, at least one of whom is
a boy."

### The Tuesday boy

In 2010, at a Gathering 4 Gardner meeting, Gary Foshee posed a variant that
looks like a joke and is not:

> "I have two children. One is a boy born on a Tuesday. What is the probability
> I have two boys?"

The day of the week is obviously irrelevant. It is not.

Enumerate. Each child has 2 sexes × 7 days = 14 equally likely descriptions, so a
family has $14 \times 14 = 196$ equally likely configurations. Count those
containing at least one Tuesday boy:

- Families where the **first** child is a Tuesday boy: $1 \times 14 = 14$.
- Families where the **second** child is a Tuesday boy: $14 \times 1 = 14$.
- Double-counted (both are Tuesday boys): 1.

So $14 + 14 - 1 = 27$ families qualify. Of those, how many have two boys? The
first child a Tuesday boy and the second any boy: 7. The second a Tuesday boy and
the first any boy: 7. Minus the double-counted case: 1. That is **13**.

$$P = \frac{13}{27} \approx 0.481$$

Adding an apparently meaningless detail moved the answer from 0.333 to 0.481 —
most of the way to 1/2.

Push further. Replace "Tuesday" with something rarer — "born on 3 March", "named
Oliver" — and the answer converges on exactly 1/2. Adding *any* distinguishing
detail, however irrelevant it seems, does the work that "the older child" did in
Question 1: it picks out a specific child.

This is the clearest possible demonstration that 1/3 is fragile. It is not the
robust answer with 1/2 as a naive error. It is the answer to one particular and
rather artificial sampling procedure, and the smallest disturbance to that
procedure moves it.

## Explore

**The two camps.** Nobody serious disputes the arithmetic. The disagreement is
about what the English sentence means.

- **The 1/3 reading** treats "at least one is a boy" as a *set-membership
  constraint*: the family belongs to the class of families satisfying that
  predicate, and nothing more is known. On this reading the puzzle is a clean
  exercise in conditional probability, and 1/2 is a mistake.
- **The 1/2 reading** observes that in any realistic situation you learn such
  facts *from somewhere*, and that the somewhere carries information. On this
  reading, a puzzle that omits the source has not asked a complete question.

Maya Bar-Hillel and Ruma Falk argued in 1982 that the second camp is right about
what makes the puzzle hard: readers are not failing at conditional probability,
they are unconsciously supplying different and equally reasonable protocols.
Raymond Nickerson reached the same conclusion. Grinstead and Snell's textbook
presents the problem explicitly as an illustration of ambiguity rather than as an
exercise with an answer.

**Even the 1/3 reading has a hidden assumption.** Tanya Khovanova pointed out in
2011 that the standard framing still requires you to assume the *statement itself*
was not selected in an informative way. If Mr Smith would have said "at least one
is a girl" whenever he could, then hearing him say "boy" tells you he has two
boys, and the answer is 1. The set-membership reading is not assumption-free; it
just buries its assumption deeper.

**Why not classify this as a counterintuitive result?** Because there is nothing
here that is simply true and surprising. Take the Monty Hall problem: once the
host's rules are stated, the answer is 2/3 and disagreement is error. Here, once
the protocol is stated, the disagreement vanishes entirely — and the puzzle's
whole existence depends on the protocol *not* being stated. The apparent
contradiction between "1/3" and "1/2" dissolves the moment you name the hidden
assumption, which is exactly what an apparent contradiction is.

**Why the status is "debated".** Not because the mathematics is open. Because
there is a genuine, ongoing disagreement about how the puzzle should be posed and
taught. Textbooks continue to print 1/3 without qualification; papers continue to
be written arguing that they should not. Both positions have serious defenders.

**Real-world caveats, for honesty.** Human births are not quite 50/50 — roughly
105 boys are born for every 100 girls. Sexes within a family are close to
independent but not exactly so. Some families stop having children once they have
a boy, which distorts the population of two-child families in a way that matters
more than either of these. None of this is why the puzzle is interesting, but all
of it means the idealised numbers are idealised.

## History

**October 1959.** Martin Gardner's *Mathematical Games* column in *Scientific
American* carried a set called "Nine More Problems". Two of them concerned
families:

> Mr Jones has two children. The older child is a girl. What is the probability
> that both children are girls?
>
> Mr Smith has two children. At least one of them is a boy. What is the
> probability that both children are boys?

Gardner gave 1/2 for Jones and 1/3 for Smith. The Jones answer has never been
controversial; naming the older child pins down a specific individual.

**1961.** *The Second Scientific American Book of Mathematical Puzzles and
Diversions* collected these columns. Crucially, the same volume also contains
Gardner's follow-up piece "Probability and Ambiguity", in which he returns to Mr
Smith and concedes that the problem is ambiguous: the answer depends on the
procedure that produced the statement, and both 1/3 and 1/2 follow from
reasonable procedures. Gardner set out the two procedures explicitly.

This makes the boy-or-girl paradox unusual among famous puzzles. The person who
made it famous also published, within two years and inside the same book, the
reason it has no single answer. The retraction has been far less widely
transmitted than the puzzle.

**1982.** Maya Bar-Hillel and Ruma Falk published "Some teasers concerning
conditional probabilities" in *Cognition*, giving the ambiguity a psychological
account: natural language does not encode sampling protocols, so readers import
their own without noticing.

**2004–2006.** Raymond Nickerson's *Cognition and Chance* and his later work with
Falk on the exchange paradox extended the analysis, cataloguing the range of
scenarios that yield 1/2.

**May 2010.** Gary Foshee presented the Tuesday-boy variant at Gathering 4
Gardner 9 in Atlanta — a conference named for Gardner, who died two weeks later.
The 13/27 answer circulated widely and was, predictably, itself disputed, on
exactly the grounds Gardner had identified fifty years earlier: it depends on how
you imagine the Tuesday fact came to be mentioned.

## Why It Matters

The lasting value of this puzzle is not the number. It is the demonstration that
**a probability question can be grammatically complete and mathematically
incomplete at the same time.**

"At least one is a boy" is a perfectly clear English sentence. It has a truth
value. You know exactly what it asserts. And it is still not enough to determine
a probability, because probability depends not only on what is true but on how
you came to know it.

This is a much sharper lesson than the Monty Hall problem teaches, because Monty
Hall has a right answer and this one does not. The instinct people take from
Monty Hall — "think harder about conditioning and you will get it" — fails here.
Thinking harder does not help. You need information that was never supplied.

The practical form of the lesson:

> Before computing a probability from a fact, ask what *else* you would have been
> told if the fact had been false. If you cannot answer that, you cannot compute
> the probability.

That question is the whole of the likelihood function, and it is why survey
methodologists document their sampling frames, why clinical trials register their
protocols in advance, and why "we found a significant result" means something
different depending on how many analyses preceded it.

Gardner's willingness to publish his own correction is a secondary lesson, and
not a small one. The 1/3 answer is more memorable, more teachable and more fun.
He printed the caveat anyway.

## Modern Relevance

**Selection bias in data science.** Every dataset is the output of a collection
procedure, and the procedure determines what the data can support. "At least one
of our users churned" means something entirely different depending on whether you
filtered for churn or observed a random user. Models trained on
non-representative samples are making the 1/3-versus-1/2 error at scale.

**Survey and poll design.** The difference between "do you have a son?" and "tell
me about one of your children" is the difference between the two protocols. Survey
methodology exists largely to pin down the answer to "how was this respondent
selected, and what would they have said otherwise?"

**Prompting and evaluating language models.** Ambiguously specified questions
produce confidently different answers depending on which reading the model
settles into, and the boy-or-girl problem is a standard probe: models trained on
textbook statements of the puzzle reproduce 1/3 mechanically, including in
variants where the protocol has been changed to make 1/2 correct. The puzzle
functions as a test of whether a system is reasoning about the setup or
pattern-matching a memorised answer.

**Genetic counselling and medical inference.** Whether an observed trait in a
family was actively screened for or noticed incidentally changes the inference
about the siblings. This is not a hypothetical concern — ascertainment bias is a
named and managed problem in human genetics for exactly this reason.

**Legal reasoning.** Testimony that "at least one of the suspects was wearing a
red jacket" supports different conclusions depending on whether the witness was
asked about jackets, asked about colours, or volunteered it. Courts handle this
badly, and so does everyone else.
