---
title: Moravec's Paradox
slug: moravecs-paradox
alternateNames:
  - The Moravec Paradox
summary: >-
  Chess grandmaster play took a computer forty years. Picking up an unfamiliar
  object off a cluttered table still is not solved. The skills we think of as
  hard are computationally cheap; the ones a toddler has are not.
hook: >-
  A computer beat the world chess champion in 1997. Getting one to pick up a
  cup it has not seen before is still hard.
era: twentieth-century
date: "1988"
year: 1988
origin: >-
  Stated by roboticist Hans Moravec in Mind Children (1988), and independently
  made by Rodney Brooks, Marvin Minsky and later Steven Pinker, all of whom had
  run into the same wall from different directions.
people:
  - hans-moravec
  - rodney-brooks
  - marvin-minsky
  - steven-pinker
domains:
  - ai
  - computer-science
  - biology
types:
  - computation
  - observation
  - knowledge
nature: counterintuitive-result
difficulty: intermediate
status: explained
renown: known
concepts:
  - Sensorimotor computation
  - Evolutionary optimisation
  - Embodied cognition
  - Tacit knowledge
  - Robotic manipulation
relationships:
  - kind: related
    to: productivity-paradox
    note: Both track the gap between how impressive a technology looks and where it actually bites — Moravec on which tasks fall, Solow on whether the falling shows up in output.
  - kind: related
    to: goodharts-law
    note: Benchmarks reward the abstract tasks that are easy to score, which is one reason the field kept mistaking those for the hard part.
  - kind: contrasts-with
    to: halting-problem
    note: Two different kinds of limit — one is a proof that no algorithm exists, the other an empirical observation that the algorithms we lack are the ones evolution already wrote.
references:
  - source: moravec-1988-mind-children
    role: primary-source
    note: Where the observation is stated in the form now quoted.
  - source: brooks-1990-elephants-dont-play-chess
    role: paper
    note: The same point from the robotics side, and a research programme built on it.
  - source: pinker-1994-language-instinct
    role: book
    note: The most widely quoted restatement, with the labour-market corollary attached.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Here are two jobs. Guess which one a computer found harder.

**Job one.** Beat the best chess player in the world. Consider millions of
positions, reason many moves ahead, evaluate threats a grandmaster would need
years of study to see.

**Job two.** Go into a kitchen you have never been in before, find a mug in the
sink, pick it up without dropping it or crushing it, and put it away in a
cupboard.

Job one fell in 1997, when Deep Blue beat Garry Kasparov.

Job two is not solved. Not in 1997, not now. There are robots that can do
something like it in a room that has been carefully prepared for them, and they
are slow, and they fail in ways a three-year-old would find hilarious.

A three-year-old, incidentally, can do job two and cannot do job one. In fact a
three-year-old can do something even harder that we never think about at all:
walk across a room without falling over, while carrying the mug, while looking at
something else, on a floor that has a toy on it.

Whatever the hardest thing humans do is, it is not chess.

## Understand

Hans Moravec's observation, from 1988, is this:

> The things we think of as high intelligence — reasoning, calculation, playing
> chess, passing an exam — turn out to need surprisingly little computation. The
> things we barely notice ourselves doing — seeing, walking, picking things up —
> turn out to need enormous amounts.

It sounds backwards. The explanation is that we are terrible judges of our own
difficulty.

### The evolutionary argument

Ask how long each skill has been under development.

Vision, balance, and the control of limbs are old. Animals have been surviving
or dying on the quality of their perception and movement for something like
500 million years. Every generation of every ancestor was a test, and the ones
who saw a predator slightly less well did not become anyone's ancestor. That is
an extraordinary amount of optimisation, and the results are baked deep into
neural hardware.

Abstract reasoning is new. Symbolic thought, mathematics, formal logic and
strategy games are at most tens of thousands of years old as human practices, and
a few thousand as written traditions. There has been almost no time to build
dedicated machinery for them. We do them with general-purpose circuitry, slowly,
badly, and with enormous effort.

Moravec's own image: we are like someone who has inherited a magnificent
workshop full of precision machinery they did not build and cannot see, and who
is very proud of the wobbly stool they made last week.

### Why the old skills feel easy

Because they run below awareness. Recognising your grandmother takes you no
apparent effort, so you conclude it is a simple task. But *effortless* and
*simple* are not the same thing. Effortlessness is what a heavily optimised,
massively parallel, entirely unconscious process feels like from the inside.

Multiplying two four-digit numbers feels hard, and it is trivial — a computer
does it in a nanosecond. Catching a ball feels like nothing, and it involves
predicting a trajectory, adjusting for wind and spin, moving a body of
uncertain mass through space, and closing a hand at the right moment with the
right force on an object of unknown weight.

The rough scale Moravec gave: the human retina alone performs on the order of
ten million edge and motion detections per second, and the retina is a
gram-scale piece of tissue that makes up a vanishing fraction of the brain. Scale
that computation to the whole brain and the numbers become large enough that
raw computing power, not cleverness, is a serious part of the story.

### The one-sentence version

**We are best at what we have been doing longest, and we have the least insight
into exactly those abilities.** Anything you can explain how to do is probably
recent, and therefore probably easy for a machine. Anything you cannot explain is
probably ancient, and therefore probably hard.

## Examples

**What fell early, and what has not.**

| Task | Human effort | Status for machines |
| --- | --- | --- |
| Arithmetic | Slow, error-prone | Solved by the 1940s |
| Chess at grandmaster level | Decades of study | Solved 1997 |
| Formal logic and theorem checking | Years of training | Long solved |
| Passing professional exams | Years of training | Largely solved by 2023 |
| Recognising a friend's face | Instant, unconscious | Solved around 2015 |
| Understanding a spoken sentence in a noisy room | Instant | Largely solved |
| Folding a random towel | Trivial for a child | Slow and unreliable |
| Picking up an unfamiliar object from clutter | Trivial for a child | An active research problem |
| Walking over rubble carrying something | Trivial for an adult | Impressive when demonstrated at all |

**The wall socket test.** Plugging in a phone charger behind a desk, in the
dark, by feel. You locate the socket, orient a small object correctly on two axes
you cannot see, apply exactly enough force, and detect the click. It is
completely unremarkable and no robot can do it.

**Sock drawer versus tax return.** A machine can now do a decent draft of a tax
return. No machine can reliably pair the socks in your drawer. The tax return is
symbol manipulation on structured data. The socks are deformable objects of
varying colour under uncontrolled lighting requiring dexterous manipulation, and
they are the harder problem by a wide margin.

**Where the effort actually goes in a robot.** In a typical manipulation stack,
the planning — the part that resembles thinking — is a small fraction of the
work. Perception, state estimation and closed-loop control consume the rest, and
they are where the failures come from.

## Explore

**Is it really about computation, or about knowledge?** Moravec framed it
partly in terms of raw processing throughput: the sensorimotor system is doing
vastly more operations per second than conscious deliberation. Others locate the
difficulty elsewhere.

Marvin Minsky, in *The Society of Mind* (1986), stressed that the ancient
abilities are built from enormous numbers of specialised sub-processes, which is
precisely why we cannot introspect on them — there is nothing at the top to
introspect on. His conclusion is close to Moravec's but the emphasis is on
architecture rather than throughput.

Rodney Brooks made the strongest methodological claim. In "Elephants Don't Play
Chess" (1990) and related work he argued that the symbolic AI tradition had
mistaken the visible surface of intelligence for its substance, and that the
right way forward was to build systems from perception and action upward, with
no central world model at all. His subsumption architecture robots walked over
rough ground with almost no computation, which was itself a partial argument
against the pure-throughput reading.

Steven Pinker, in *The Language Instinct* (1994), gave the version most people
know: the hard problems of AI turned out to be easy and the easy ones hard, and
as a result the well-paid analytical jobs are more exposed to automation than
gardening, cooking or reception work.

**The honest caveat about data.** A significant part of the difficulty in
robotics may be economic rather than fundamental. Text and images exist in
quantities of trillions of tokens, essentially for free. Physical interaction
data has to be generated one robot-hour at a time, on hardware that breaks. On
this reading, manipulation is not intrinsically harder — it is data-starved, and
the gap will close as simulation and fleet learning improve. Several research
groups are betting substantial resources on exactly this. It is a live
disagreement, and it does not overturn Moravec's evolutionary argument so much as
supply a possible route around it.

**Where the paradox is weakest.** The claim that abstract reasoning is
"computationally cheap" has aged awkwardly. Training a frontier language model
consumes an amount of computation that would have been unimaginable in 1988, and
the tasks it does are exactly the abstract ones. What survives, and survives
robustly, is the *relative* claim: for a fixed budget of engineering effort and
compute, you get further on reasoning-shaped tasks than on physical ones.

## History

**1986.** Marvin Minsky published *The Society of Mind*, arguing that the mental
activities we consider easy draw on the largest and oldest machinery, and are
therefore the ones we understand least.

**1987–1988.** Rodney Brooks's behaviour-based robotics group at MIT built
insect-like walking robots that navigated real, unmodified environments using
layered reflex-like behaviours and almost no representation — a direct challenge
to the assumption that intelligence flows downward from reasoning.

**1988.** Hans Moravec published *Mind Children: The Future of Robot and Human
Intelligence* with Harvard University Press. It contains the statement usually
quoted: that it is comparatively easy to make computers perform at adult level on
intelligence tests or at checkers, and difficult or impossible to give them the
perception and mobility of a one-year-old. Moravec also gave the evolutionary
explanation, and the retina-based estimate of how much computation the visual
system represents.

**1990.** Brooks published "Elephants Don't Play Chess", the manifesto version of
his programme.

**1994.** Steven Pinker restated the point in *The Language Instinct*, which is
where most people encountered it, and where the name "Moravec's paradox" began to
attach firmly.

**A note on naming.** Moravec did not call it a paradox, and did not name it
after himself. The label was applied later by others, and the credit is genuinely
shared: Moravec, Brooks, Minsky and Pinker each arrived at the same conclusion
from robotics, from cognitive architecture and from psycholinguistics
respectively, within about a decade.

## Why It Matters

**It redirected a research field.** The first three decades of AI concentrated on
theorem provers, chess programs and expert systems, on the reasonable assumption
that hard-for-humans meant hard-for-machines. Moravec's argument, and Brooks's
robots, made the case that perception and control were the substantial problems.
The subsequent history — computer vision and robotics absorbing an ever larger
share of the field — followed that reweighting.

**It predicted which jobs automate, and it got it broadly right.** Pinker's
corollary has held up remarkably well. Bookkeeping, translation drafting, legal
document review, radiological image screening and routine code generation have
all been substantially automated or assisted. Plumbing, elder care, cleaning,
electrical work and cooking in an unfamiliar kitchen have not. This is not
because society values the second group more; it is because the second group is
computationally harder.

**It explains why introspection is a bad guide to engineering.** Asking an
expert how they do something gets you the small, recent, verbalisable part of
their skill. Michael Polanyi's observation that we know more than we can tell is
the same fact from the other side, and it is why decades of effort at building
expert systems by interviewing experts produced systems that were brittle in
exactly the places the experts had nothing to say.

## Modern Relevance

The last few years have been an unusually clean test, and the result deserves
stating carefully.

**The abstract side moved enormously.** Large language models write competent
prose, produce working code, score highly on professional and graduate-level
examinations, and handle mathematical competition problems. In 1988 every one of
those would have been described as requiring general intelligence. They now run
on commodity hardware for fractions of a cent.

**The physical side moved much less.** General-purpose robotic manipulation in
unstructured environments remains unsolved. Robots that fold laundry, load
arbitrary dishwashers or tidy a child's bedroom exist as research demonstrations
and remain slow, fragile and narrow. Industrial robots are extremely capable
inside environments engineered around them, which is precisely Moravec's point —
the difficulty is the world's variability, not the motion.

**This vindicates Moravec rather than refuting him.** It is worth being explicit,
because the opposite reading circulates. His claim was never that abstract tasks
would remain hard; it was that abstract tasks are the *cheap* ones and
sensorimotor tasks are the expensive ones. A world in which machines write
passable legal briefs before they can reliably pick up a sock is the world he
described.

**Two honest qualifications.**

First, the ordering within the physical domain has shifted. Perception — object
recognition, segmentation, depth estimation, speech in noise — has largely fallen
to deep learning. What remains stubbornly hard is *contact-rich manipulation*:
deformable objects, tight tolerances, force control, and recovering from a grasp
that is going wrong. The paradox has narrowed onto that.

Second, the "little computation" half is now false in absolute terms. Frontier
model training runs consume vast resources. The defensible modern version is
comparative: **progress per unit of investment has been far faster on abstract
tasks than on embodied ones**, and the reason is the one Moravec gave — for
abstract tasks we are competing against a few thousand years of human practice,
and for embodied ones against half a billion years of evolution.

**Practical consequence.** Anyone forecasting automation should stop asking how
intellectually demanding a job looks and start asking how much of it consists of
unstructured physical interaction with an uncooperative world. That single
question predicts the last decade better than any measure of educational
requirement.
