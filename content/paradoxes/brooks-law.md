---
title: Brooks's Law
slug: brooks-law
alternateNames:
  - Mythical Man-Month Law
summary: >-
  Adding manpower to a late software project makes it later. New developers need ramp-up time — during which existing developers must train them. More people also multiplies communication channels quadratically. The project falls further behind exactly when adding people feels like the fix.
hook: >-
  A software project is six months late. You add more developers. Now it's
  eight months late. Why?
era: twentieth-century
date: 1975
year: 1975
origin: >-
  Stated by Fred Brooks in his 1975 book The Mythical Man-Month: Essays on
  Software Engineering, based on his experience managing the development of
  IBM's OS/360 operating system in the 1960s. The book remains one of the most
  widely cited works in software engineering.
people: []
domains:
  - computer-science
  - economics
  - psychology
types:
  - aggregation
  - decision-making
  - observation
nature: counterintuitive-result
kind: law
difficulty: intermediate
status: explained
renown: known
concepts:
  - Communication overhead
  - Ramp-up time
  - Project management
  - Coordination costs
  - Division of labour
relationships:
  - kind: related
    to: hofstadters-law
    note: Hofstadter's Law says projects always take longer; Brooks's Law says the intuitive response (adding people) makes them take longer still. Together they describe a trap from which there is no simple escape.
  - kind: related
    to: parkinsons-law
    note: Parkinson's Law says work expands to fill available time; Brooks's Law says adding people also expands the work, specifically the coordination work.
references:
  - source: brooks-1975-mythical
    role: book
    note: The book that named and documented the law, based on Brooks's management of IBM's OS/360.
furtherReading:
  - title: "The Mythical Man-Month: Essays on Software Engineering — Fred Brooks (1975, 1995)"
    url: https://en.wikipedia.org/wiki/The_Mythical_Man-Month
  - title: "No Silver Bullet — Fred Brooks, IEEE Computer (1987)"
    url: https://doi.org/10.1109/MC.1987.1663532
publishing:
  state: published
  created: 2026-08-31
  updated: 2026-08-31
---

## Discover

IBM, early 1960s. Fred Brooks is the project manager for OS/360, the operating
system that will run IBM's new line of mainframe computers. It is one of the
most ambitious software projects ever attempted: millions of lines of code, a
team of hundreds, a deadline that keeps slipping.

The project is late. The solution seems obvious: hire more people. There is
budget, there are available programmers, and more hands mean more work done.

The project gets later.

Brooks, reflecting on the experience, identifies why: every new person added to
the project must be taught the system by someone who already knows it. During
the training period, the new person produces nothing while the trainer produces
less than they would have otherwise. But the problem is worse than that.

The number of communication channels in a team grows as $n(n-1)/2$, where $n$
is the number of people. A team of four has six channels. A team of eight has
twenty-eight. A team of sixteen has a hundred and twenty. Every time you add a
person, you add a new communication channel to every existing team member. The
coordination cost grows faster than the headcount.

## Understand

Brooks's Law rests on two mechanisms that work together to make adding people
counterproductive in the short run:

**Training overhead.** A new person cannot contribute immediately. They must
understand the existing code, the existing architecture, the existing conventions,
and the specific problem being solved. This takes time — typically months for a
complex system. During that time, their trainer is less productive than they would
otherwise be. The net effect of adding one person is, temporarily, negative.

**Communication overhead.** A development team must coordinate. Decisions must
be communicated, interfaces must be agreed, changes must be reviewed. The number
of pairs who might need to communicate grows quadratically with headcount. A
team of 3 has 3 channels; a team of 10 has 45; a team of 20 has 190. The larger
the team, the more time each person spends in meetings, answering questions, and
managing dependencies, and the less time they spend writing code.

### The intuition behind the counterintuitive result

The **man-month** — the unit of project management that treats one person working
one month as equivalent to ten people working one day — is a myth. Work that
requires sequential steps cannot be parallelised. You cannot make a baby in one
month by assigning nine women to the task.

Even for work that can in principle be parallelised, the communication overhead
and the training overhead mean that doubling the team does not double the
output. It frequently reduces it in the short term and improves it by less than
half in the long term.

### The exception

Brooks's Law is most reliable in the short term for a specific kind of project:
one that is late because the existing team is working at capacity on a complex,
interconnected system. It is less reliable for:

- **Projects with genuinely separable work** that can be divided cleanly between
  new and existing team members without interaction.
- **Projects where the existing team is significantly underresourced** and the
  bottleneck is throughput, not coordination.
- **Very early stages** where more people can accelerate exploration without
  complex dependencies.

The key question is always: how interconnected is the work? The more connected,
the more strongly Brooks's Law applies.

## Examples

| Scenario | Added people | Outcome |
| --- | --- | --- |
| Late OS/360 (IBM, 1960s) | More programmers | Became later |
| Late government IT projects | Contractors added to schedule | Consistently later |
| Startup "crunch" hiring | Engineers added before launch | Launch delayed, quality often worse |
| Open source sprint | Many contributors added | Coordination problem; maintainers overwhelmed |

## Explore

**The second-system effect.** Brooks identified a related phenomenon: when
engineers who built a simple, constrained first system get to build the second
one, they overreach. Freed from the constraints that made the first system
work, they add features and complexity. The second system is typically a disaster.

**Modularity as a partial solution.** Conway's Law (1968) observed that
systems tend to reflect the communication structure of the organisations that
build them. The implication: structure the organisation so that teams correspond
to separable modules, and the modules can be developed in parallel. This is
the real solution to Brooks's Law — not adding people to an interconnected
project, but designing projects so they can be divided.

**Microservices.** Modern software architecture has adopted modularity as an
explicit response to coordination overhead. Breaking a large system into small,
independently deployable services allows teams to work in parallel with minimal
coordination. Whether this resolves the underlying problem or moves it (to the
interfaces between services) is contested.

**The no silver bullet.** In a 1987 paper, Brooks argued that no single
technique — not object-oriented programming, not expert systems, not AI-assisted
development — would dramatically improve software productivity, because the
hard part of software development is not the mechanical writing of code (which
can be automated) but the conceptual work of understanding what needs to be
built. This remains contested but has held up better than most predictions in
the field.

## History

**1960s.** Brooks manages OS/360 at IBM. The project is the crucible of the
observations in the book.

**1975.** *The Mythical Man-Month* is published. It becomes immediately
influential in software engineering. The first edition sells 250,000 copies.

**1987.** "No Silver Bullet" appears in *IEEE Computer*. It argues that software
productivity cannot be dramatically improved because the difficulties are
essential, not accidental.

**1995.** A twentieth-anniversary edition of *The Mythical Man-Month* is published
with a new chapter, "The Mythical Man-Month After 20 Years," in which Brooks
assesses which of his claims held up. Most did. He retracts only his claim that
Ada would reduce software complexity.

## Why It Matters

**Project recovery.** The most common response to a late software project is to
add resources. Brooks's Law predicts that this will, in the short run, make the
project later. The more useful interventions are: reduce scope, simplify the
system, and give the existing team time to stabilise the work in progress before
adding anyone.

**Team size.** The implication for software organisations is that small teams
working on well-defined, separable problems are more productive per person than
large teams on interconnected problems. Jeff Bezos's "two pizza rule" — no team
should be larger than can be fed by two pizzas — is an informal implementation
of this principle.

**Estimation.** The man-month myth means that software estimates that are
presented as "we need 100 person-months of work" cannot simply be shortened by
adding more people. A 10-person project that should take 10 months cannot be
done by 100 people in 1 month. The dependency structure sets a minimum time
regardless of headcount.

## Modern Relevance

**AI-assisted development.** AI coding assistants reduce the time needed for
some mechanical parts of software development. They do not reduce the
coordination overhead or the conceptual work of understanding what to build.
Brooks's "no silver bullet" argument suggests the fundamental nature of the
hard part is unchanged, even as the easy part gets easier.

**Remote work.** Distributed teams add communication overhead to what was already
a communication-heavy activity. The coordination cost component of Brooks's Law
increases when people are in different time zones and lack the informal
communication of shared offices.

**Open source.** Large open source projects, with hundreds or thousands of
contributors, face an extreme version of the coordination problem. Most successful
large open source projects resolve this through strict module boundaries, clear
contribution processes, and small core maintainer teams — applying the modularity
solution rather than ignoring the law.
