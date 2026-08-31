---
title: Hofstadter's Law
slug: hofstadters-law
alternateNames:
  - The Planning Fallacy (related)
summary: >-
  It always takes longer than you expect, even when you take Hofstadter's Law into account. This self-referential formulation captures why estimation bias is not correctable by simply knowing about it: you underestimate the correction too. The effect is consistent and found across virtually every domain of complex work.
hook: >-
  It always takes longer than you think — and that's still true even after you
  account for the fact that it always takes longer than you think.
era: twentieth-century
date: 1979
year: 1979
origin: >-
  Stated by Douglas Hofstadter in his 1979 book Gödel, Escher, Bach: An
  Eternal Golden Braid, in the context of AI and chess-playing programs that
  consistently failed to meet their developers' predictions. Hofstadter was
  observing that the optimism was not corrected even when people knew about it.
people: []
domains:
  - psychology
  - computer-science
  - mathematics
types:
  - decision-making
  - observation
  - self-reference
nature: counterintuitive-result
kind: law
difficulty: beginner
status: explained
renown: known
concepts:
  - Planning fallacy
  - Optimism bias
  - Reference class forecasting
  - Scope creep
  - Self-reference
relationships:
  - kind: related
    to: parkinsons-law
    note: Parkinson's Law says work expands to fill available time; Hofstadter's says available time is always less than expected. Together they describe projects that are both late and over-scheduled.
references:
  - source: hofstadter-1979-geb
    role: book
    note: The Pulitzer Prize-winning book in which the law appears, in the context of repeated AI timeline failures.
furtherReading:
  - title: "Gödel, Escher, Bach: An Eternal Golden Braid — Douglas Hofstadter (1979)"
    url: https://en.wikipedia.org/wiki/G%C3%B6del%2C_Escher%2C_Bach
  - title: "Intuitive Prediction: Biases and Corrective Procedures — Kahneman & Tversky (1979)"
    url: https://doi.org/10.1287/mnsc.28.12.1315
publishing:
  state: published
  created: 2026-08-31
  updated: 2026-08-31
---

## Discover

1979. Douglas Hofstadter is writing *Gödel, Escher, Bach*, a book about
strange loops, self-reference, and consciousness. He is also watching the
artificial intelligence community predict, repeatedly, that chess-playing
programs will surpass human grandmasters within ten years. The prediction keeps
being made. The ten years keeps passing.

AI researchers who knew that previous estimates had been wrong made new
estimates — and those were wrong too. Not by a small amount. By a lot.

Hofstadter crystallises the pattern into a single recursive sentence that refers
to itself:

> **It always takes longer than you expect, even when you take into account
> Hofstadter's Law.**

The law is self-referential: accounting for the bias is not enough to correct
it, because the correction itself is underestimated.

## Understand

People consistently underestimate how long tasks will take. This is called the
**planning fallacy** (Kahneman and Tversky, 1977). Hofstadter's Law makes a
sharper claim: the bias is not correctable by simply knowing about it. You
can know that you are an optimist about time and still be one.

Several mechanisms drive this:

**Inside-view thinking.** When estimating a task, people focus on the specific
task in front of them — the particular project, its particular features, their
particular skills. They construct a plausible story of how it will go and
estimate from that story. This "inside view" ignores the statistical base rate
of how long similar projects actually took for other people.

**Unknown unknowns.** Estimates are made at the beginning, when the task is
least understood. The things you don't know you don't know — the integration
failure, the dependency that wasn't surfaced, the requirement that was
misunderstood — are by definition absent from the plan.

**Optimism about sub-tasks.** Complex tasks have many sub-tasks. If each
sub-task's completion time is underestimated by 20%, the total underestimate for
a twenty-task project compounds dramatically.

**The recursive problem.** Even if you know about the planning fallacy and
add a buffer — say, 50% more time — you have now introduced a new estimation
task: "how much buffer is enough?" And that estimation is also subject to
optimism bias. Hence Hofstadter's self-referential formulation.

### What actually helps

Daniel Kahneman's answer is **reference class forecasting**: instead of
estimating from the inside view, look at the actual outcomes of a set of
similar past projects and use that distribution. If similar projects took 12–18
months and you are estimating 6, the distribution is your answer, not your plan.

The technique requires resisting the inside view — the feeling that "this
project is different, we understand it better, we have better tools." Every
project team that ever ran late believed those things.

## Examples

| Domain | Expected | Typical actual outcome |
| --- | --- | --- |
| Software projects | Estimated schedule | Famously: "90% complete" for 90% of the project |
| Government IT projects | On budget, on time | ~80% run significantly over schedule or budget |
| Personal goals | Start of year | End of year, or never |
| AI progress predictions | 10 years to human-level | 10 years to human-level (repeated since 1958) |
| Home renovation | 2 weeks | 6–8 weeks |

## Explore

**The Sydney Opera House.** Construction was estimated at AUD 7 million and four
years. It took 14 years and AUD 102 million — a cost overrun of 14 times.
The project encountered problems that no plan had anticipated, as projects
reliably do.

**The Channel Tunnel.** 80% over budget. Standard.

**Software's specific flavour.** Fred Brooks, in *The Mythical Man-Month* (1975),
identified a specific mechanism for software: tasks are more interconnected than
they appear, so adding people to a late project makes it later (Brooks's Law),
and the final 10% of a project consistently takes longer than the first 90%.

**Why estimation doesn't improve with practice.** Research on expert estimators
— project managers with decades of experience — finds that they improve somewhat
but not dramatically over novices. The error is not primarily about lack of
experience; it is about the systematic nature of the bias. Experience teaches
that projects are late. It does not automatically supply the reference class
thinking needed to quantify by how much.

## History

**1977.** Kahneman and Tversky publish work on the planning fallacy, documenting
the systematic optimism about task completion times.

**1979.** Hofstadter publishes *Gödel, Escher, Bach*, which wins the Pulitzer
Prize for General Non-Fiction. The law is stated in passing, in a footnote-like
parenthetical, and becomes one of the book's most-quoted lines.

**1998.** Kahneman and Lovallo publish "Delusion and Debiasing" extending the
planning fallacy research and developing the reference class forecasting
approach as the corrective.

**2003.** Flyvbjerg, Skamris Holm, and Buhl publish a landmark study showing
that nine out of ten large-scale infrastructure projects run over budget, by an
average of 28% for roads and 45% for rail.

## Why It Matters

**Project management.** Hofstadter's Law predicts that virtually any complex
project will run late, and that adding a buffer to the estimate will not be
enough. The practical implication is to use reference classes rather than
inside-view estimates, to scope aggressively (the minimum credible version
rather than the full vision), and to build in explicit review points.

**AI predictions.** The history of AI is substantially a history of Hofstadter's
Law in action. Every decade since the 1950s has produced confident predictions
that general human-level AI is ten years away. The predictions are not made by
foolish people; they are made by the best researchers in the field, who are
subject to exactly the inside-view optimism the law describes.

**Personal goals.** New Year's resolutions fail at the same rate they always have.
People who know about the planning fallacy still make the same overoptimistic
plans. Knowing the name of the bias is not, apparently, sufficient.

## Modern Relevance

**Software development methodologies.** Agile development — working in short
sprints, delivering small increments, adjusting based on what was learned — is
partly a structural response to Hofstadter's Law. Rather than making one large
estimate for a project, you make many small estimates for increments, and you
use the actual velocity of past sprints to calibrate future ones. This is
reference class forecasting applied at the micro level.

**Infrastructure planning.** Bent Flyvbjerg at Oxford has made reference class
forecasting a formal planning tool, used in some countries as a required step
in major infrastructure projects. The Danish government adopted it after decades
of cost overruns. It works better than conventional estimation.

**Large language model development.** Timelines for AI capabilities have been
consistently underestimated. Researchers who know about the planning fallacy and
know about previous underestimates still produce underestimates. Hofstadter's
Law is not flattering to the field, and the field has not solved it.
