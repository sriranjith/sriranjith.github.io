---
title: Conway's Law
slug: conways-law
alternateNames:
  - Mirroring Hypothesis
summary: >-
  Any organisation that designs a system produces a design whose structure mirrors the organisation's communication structure. Teams build systems that reflect how they talk to each other — not by plan, but because the natural division follows the organisational boundary.
hook: >-
  Your software will look like your org chart. Not because you planned it, but
  because you couldn't plan it otherwise.
era: twentieth-century
date: 1968
year: 1968
origin: >-
  Stated by computer programmer Melvin Conway in his 1968 paper "How Do
  Committees Invent?" submitted to Harvard Business Review (which rejected it)
  and published in Datamation magazine. Fred Brooks popularised the observation
  by naming it Conway's Law in The Mythical Man-Month (1975).
people: []
domains:
  - computer-science
  - society
  - psychology
types:
  - aggregation
  - observation
  - decision-making
nature: counterintuitive-result
kind: law
difficulty: intermediate
status: explained
renown: known
concepts:
  - Organisational design
  - System architecture
  - Team topology
  - Communication structure
  - Modular design
relationships:
  - kind: related
    to: brooks-law
    note: Brooks's Law describes how adding people to a project increases communication overhead; Conway's Law describes where that overhead concentrates — at the boundaries between teams, which then become boundaries in the system.
references:
  - source: conway-1968-committees
    role: primary-source
    note: The original paper, rejected by Harvard Business Review, that stated the law.
furtherReading:
  - title: "How Do Committees Invent? — Melvin Conway, Datamation (1968)"
    url: http://www.melconway.com/Home/Conways_Law.html
  - title: "Team Topologies — Matthew Skelton & Manuel Pais (2019)"
    url: https://en.wikipedia.org/wiki/Team_Topologies
publishing:
  state: published
  created: 2026-08-31
  updated: 2026-08-31
---

## Discover

1967. Melvin Conway is writing a paper about how organisations design systems.
He has observed something that seems obvious once stated but is systematically
ignored: teams design interfaces between system components. Interfaces require
negotiation and communication. The teams that communicate most naturally are the
teams that are close together in the organisation.

Therefore: the system's component boundaries will follow the organisation's
communication boundaries.

His paper is rejected by *Harvard Business Review* as too "academic."
It is published instead in *Datamation*, a trade magazine, in April 1968.

Fred Brooks reads it, is convinced, and quotes it in *The Mythical Man-Month*
(1975), calling it Conway's Law. The name sticks.

## Understand

Conway's observation is deceptively simple. When a team divides work on a
system, they draw lines: this module here, that module there, this interface
between them. The lines they draw reflect what they can discuss and what they
cannot. Cross-team interfaces require meetings, specifications, and sign-offs.
Same-team interfaces are handled by two people walking over to each other's desk.

So the system's structure naturally follows the organisation's structure —
not because the architects designed it that way, but because the social topology
of communication defines what's easy and what's hard.

**A three-compiler organisation.** Conway's original example: if an organisation
has four groups of engineers, the compiler they produce will have four stages.
Three groups? Three stages. Not because a three-stage compiler is optimal
for the language, but because three groups produced it.

### The inverse Conway manoeuvre

Once you understand the law, you can use it deliberately: if you want a specific
system architecture, design your organisation to match it first. Create teams
that correspond to the components you want, with the communication patterns
that reflect the interfaces you want those components to have.

This is the **inverse Conway manoeuvre** — engineering the organisation to produce
the architecture. It is the central premise of the *Team Topologies* approach to
software engineering (Skelton and Pais, 2019).

### Why it's hard to fight

The law is descriptive, not prescriptive. You can try to design a system
architecture that doesn't match your organisation's structure, but the forces
pushing toward alignment are strong. Cross-team interfaces require agreement and
maintenance. When something needs to change, the teams that change things are
the teams that can coordinate — i.e., the same-organisation teams. Over time,
the architecture drifts back toward the org structure.

## Examples

| Organisation | System produced |
| --- | --- |
| Company with separate frontend and backend teams | System with a hard frontend/backend split, often at the wrong abstraction level |
| Microservices organisation aligned to product teams | Microservices boundaries that follow product lines, not technical ones |
| Academic department with many research groups | Software with many loosely-coupled modules corresponding to each group's work |
| Single cross-functional team | More integrated, cohesive system with fewer hard interfaces |

## Explore

**The empirical evidence.** A study by Harvard Business School researchers
(MacCormack, Rusnak, and Baldwin, 2008) compared the structure of open source
and commercial software products. Commercial software, built by tightly organised
companies, had tightly coupled architectures. Open source software, built by
loosely connected contributors, had more modular architectures. The organisations
were different; the software reflected those differences. Conway's Law held.

**Microservices as deliberate application.** The move to microservices
architecture in the 2010s was partly an application of the inverse Conway
manoeuvre: build small, independent teams; they will produce small, independent
services. Whether this achieves the desired technical result is debated, but
the organisational rationale is Conway's Law in action.

**Mergers and acquisitions.** When two companies with different technical
architectures merge, the resulting system often reflects the resulting
organisational structure — a combination of incompatible approaches joined by
integration layers at exactly the points where the organisations' communication
structures touch. The technical debt of a merger is often a direct consequence
of Conway's Law.

## History

**1968.** Conway publishes "How Do Committees Invent?" in *Datamation*. The paper
is largely ignored by computer scientists at the time.

**1975.** Fred Brooks names it Conway's Law in *The Mythical Man-Month*. It
begins to circulate in software engineering discourse.

**2008.** MacCormack et al. publish empirical evidence supporting the law.

**2019.** Skelton and Pais publish *Team Topologies*, applying the inverse
Conway manoeuvre as an explicit organisational design strategy. The book becomes
widely read in software engineering.

## Why It Matters

**Architecture is an organisational decision.** If you want a different system
architecture, you may need a different organisation. Architectural decisions made
independently of organisational structure will tend to be undone over time by
the social forces that Conway identified.

**Legacy systems.** The architecture of a large legacy system is an archaeological
record of the organisation that built it. Understanding the system often requires
understanding the organisational history — the mergers, the team splits, the
manager who owned that module. Refactoring the system may require reorganising
the teams.

**Platform engineering.** The "platform team" model — a team dedicated to
building internal infrastructure for other teams — is partly designed to create
a component (the platform) whose ownership is clear and whose interface with the
rest of the organisation is explicit. It is Conway's Law used as a design tool.

## Modern Relevance

**AI team structure.** Companies building AI systems face a version of Conway's
Law: the boundary between "model team" and "product team" tends to produce
systems where the model and the product are poorly integrated at exactly that
boundary. Organisations that treat AI as a product feature from the start,
rather than a separate function, produce more integrated systems.

**Remote and distributed work.** In a fully remote organisation, communication
patterns are different from an in-person one. Conway's Law predicts that the
systems produced by remote-first organisations will differ architecturally from
those produced by co-located ones — more modular, with more explicit interfaces,
because informal communication is harder.
