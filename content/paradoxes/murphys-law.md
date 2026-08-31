---
title: Murphy's Law
slug: murphys-law
alternateNames:
  - Sod's Law
  - Finagle's Law
summary: >-
  Anything that can go wrong, will go wrong — and at the worst possible moment.
  Stated as a joke at an Air Force test site in 1949, it spread into engineering
  culture as a serious design principle: if a component can be installed wrong,
  someone will install it wrong, so design it to allow only the correct way.
hook: >-
  If anything can go wrong, will it? The saying is a joke — but the engineering
  principle behind it is dead serious.
era: twentieth-century
date: 1949
year: 1949
origin: >-
  Coined by Captain Edward A. Murphy Jr., a development engineer at Edwards Air
  Force Base, California, in 1949 during Project MX981 — tests measuring the
  deceleration human bodies could survive. A technician wired a sensor harness
  in the only wrong configuration possible. Murphy reportedly said something
  like "if there are two ways to do something, and one of them will cause
  disaster, he'll do it that way." Project director John Paul Stapp popularised
  the phrase at a press conference the same year, crediting Murphy by name.
people: []
domains:
  - psychology
  - computer-science
  - philosophy
types:
  - decision-making
  - observation
nature: counterintuitive-result
kind: law
difficulty: beginner
status: explained
renown: landmark
concepts:
  - Defensive design
  - Error-proofing (poka-yoke)
  - Failure mode analysis
  - Selection bias
  - Pessimistic planning
relationships:
  - kind: related
    to: goodharts-law
    note: Both are named engineering or institutional observations that became cultural shorthand. Murphy's Law warns that systems will be used wrong; Goodhart's that they will be gamed.
references:
  - source: spark-2003-murphy
    role: paper
    note: The most thorough historical account of the law's actual origin and the gap between the engineering principle and the popular version.
furtherReading:
  - title: "Murphy's Law: the original story — Nick T. Spark, Annals of Improbable Research (2003)"
    url: https://www.improbable.com/airchives/paperair/volume9/v9i5/murphy.html
  - title: "Poka-yoke: mistake-proofing in manufacturing — Shigeo Shingo"
    url: https://en.wikipedia.org/wiki/Poka-yoke
publishing:
  state: published
  created: 2026-08-31
  updated: 2026-08-31
---

## Discover

Edwards Air Force Base, California, 1949. Project MX981 is trying to find out
how many Gs the human body can survive. A rocket sled is being used to slam a
volunteer — Air Force doctor John Paul Stapp — into deceleration forces that
make a car crash look gentle.

The sensors are critical. They measure exactly how hard Stapp's body is being
hit so that the researchers can understand what a human being can actually
endure. Sixteen sensors are attached to the harness. Sixteen sensors means
sixteen connectors. Each connector can be installed in exactly two ways: right
and wrong.

A technician wires all sixteen in the wrong configuration.

Captain Edward A. Murphy Jr., the engineer responsible for the sensors, stares
at the result and makes an observation about the technician. Depending on which
account you read, it is either colourful or professional, but the meaning is the
same: *if there are two ways to do something, and one of them will cause
disaster, someone will do it that way.*

A few months later, at a press conference celebrating the fact that Stapp had
survived 46.2 Gs — at the time, the highest deceleration ever survived by a
human — the project director credited Murphy's observation as part of why the
tests had been safe. They had designed for the wrong installation, so it could
not happen. The press wrote it down, and it spread from there.

## Understand

The version that became famous is weaker than the original. *Anything that can
go wrong, will go wrong* is a joke about bad luck. Murphy's actual observation
was an engineering principle: *if a failure mode exists, a failure will
eventually occur through it.* The difference matters.

The joke version claims the universe is malicious. The engineering version claims
something more modest and more useful: **systems will be used in every way they
can be used, including the ways you did not intend.** If a connector fits in
two ways, a user will eventually try the wrong one — not because they are
careless, but because they are human, the label is small, the light is bad, and
they are in a hurry.

The practical conclusion is **poka-yoke** — the Japanese engineering term for
mistake-proofing. Design the connector so it only fits one way. If you cannot
do that, make the wrong way obviously, irreversibly wrong before it causes
damage. If you cannot do that either, assume the mistake will happen and design
for recovery.

### Why does it feel true as a joke?

The pessimistic version — *of course the toast lands butter-side down* —
persists because of a real cognitive mechanism. **Bad events are more salient
than good ones.** We remember the traffic jam we hit after taking the slow road,
not the hundred times we took the fast road and it was fine. We remember the
USB cable that took three attempts, not the thousands of cables we plugged in
first try. The joke is a story about how memory distorts the record of
randomness.

There is also genuine mathematics here. In a complex system with many components,
the probability that *at least one* will fail is higher than any single component's
failure rate, sometimes much higher. A car with two thousand parts, each
individually very reliable, will still spend time in the shop.

### What Murphy's Law does not say

It does not say failure is inevitable in any particular case. It says failure
modes should be closed, not left open on the grounds that a reasonable person
would never trigger them. Reasonable people, pressed for time, in poor
conditions, do trigger them.

## Examples

| System | Failure mode left open | What happened |
| --- | --- | --- |
| MX981 sensor harness | Connector fit in two orientations | Technician wired all sixteen wrong |
| USB-A plug (pre-2014) | Required specific orientation, not marked | Three-attempt insertion became cultural shorthand for frustration |
| Therac-25 radiation machine | Software race condition reachable in use | Six patients received massive overdoses, three died |
| Boeing 737 MAX MCAS | Single sensor failure could activate automated pitch-down | Two crashes, 346 deaths |
| Hospital drug dosing | Syringe port accepted wrong connection | Epidural drugs injected intravenously |

The last three are not jokes. They are what happens when Murphy's original
engineering principle is treated as folklore rather than design constraint.

## Explore

**Finagle's Law** is the darker cousin: *anything that can go wrong, will — at
the worst possible moment.* It adds a claim about timing that Murphy's
formulation does not make. The timing version is probably selection bias: the
moments when failures are memorable are precisely the moments when failure was
costly, so the failures we talk about are disproportionately the badly-timed ones.

**Sod's Law** is the British variant, with a slightly different emphasis: not
that failure will happen, but that it will happen to *you* specifically, as if
the universe were watching. Same cognitive mechanism.

**The anthropic angle.** A more serious observation: we only get to study
systems that failed in ways we could study. Failures that killed everyone left
no record. This is a form of survivorship bias that haunts accident investigation
generally.

**In software.** Murphy's Law is the informal name for a set of practices that
formal engineering calls fault tolerance, defensive coding, and chaos
engineering. Netflix famously runs *Chaos Monkey*, software that randomly kills
production servers, on the grounds that if a server can die, it will die, and
better to find out while you are watching than at 3am when you are not.

## History

**1949.** The incident at Edwards Air Force Base. The exact wording Murphy used
is disputed — several people were present and none of them agree. What is agreed
is that Stapp used a form of the observation in public, crediting Murphy, and
that journalists wrote it down.

**1952.** Anne Roe, a psychologist interviewing scientists, records a version of
the saying — evidence it was already in technical culture within three years of
the incident.

**1955.** *Scientific American* prints a version, cementing it in print.

**1977.** The *Macquarie Dictionary* (Australian) includes Murphy's Law —
one of the first dictionary inclusions.

**1980s onwards.** The phrase enters popular culture globally, losing most of
its engineering content along the way. T-shirts, calendars, and coffee mugs
present the pessimistic folk version. The engineering community, quietly, keeps
using the original.

## Why It Matters

Murphy's Law as engineering principle has probably saved more lives than any
number of motivational posters.

**Design for misuse.** Every interface that accepts only the correct input, every
physical connector that fits in only one orientation, every drug dose that cannot
be wrong by a factor of ten — these are Murphy's Law applied. The question is
not *will anyone do this wrong?* but *what happens when they do?*

**Failure mode analysis.** Modern safety engineering requires identifying every
possible failure mode before a system is deployed. This is Murphy's original
insight formalised: list the ways things can go wrong, then close them, before
anything goes wrong.

**The cost of optimism.** The alternative to Murphy's Law is the belief that
careful users and clear instructions are sufficient. Careful users are not always
available. Instructions are not always read. Systems are used under conditions
their designers did not anticipate. The history of engineering disasters is
substantially a history of designers who believed their users would behave as
intended.

## Modern Relevance

**Software reliability.** Every production system of any scale runs with the
assumption that hardware will fail, network packets will be lost, and code will
encounter inputs it was not designed for. The discipline of building systems that
continue to function under these conditions is Murphy's Law institutionalised.

**Security.** Security engineers assume that any attack surface that exists will
eventually be exploited — not by theoretical adversaries, but by real ones who
have time and motivation. This is exactly Murphy's original framing applied to
an adversarial context.

**Medical device design.** The FDA requires, for any medical device, analysis of
failure modes and their consequences. Connectors that could be confused are
redesigned. Labels that could be misread are rewritten. Doses that could be
entered incorrectly are constrained. The regulatory framework is Murphy's Law
made mandatory.

**AI systems.** Language models and reinforcement learning agents are reliably
used in ways their designers did not anticipate. They are given tasks outside
their training distribution, jailbroken, used as components of larger systems
that interact in unexpected ways. The field of AI safety is partly an attempt to
systematically enumerate the ways things can go wrong before deploying systems
that cannot easily be recalled.
