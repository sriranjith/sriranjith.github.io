---
title: Cobra Effect
slug: cobra-effect
alternateNames:
  - Perverse Incentive
  - Intervention Backfire
summary: >-
  A solution designed to reduce a problem ends up increasing it, because the incentive rewards the very thing it was meant to eliminate. Named from the British cobra bounty in colonial India: citizens farmed snakes for the reward, and when the scheme was cancelled, released them — leaving more cobras than before.
hook: >-
  The British paid a bounty for dead cobras to reduce the snake population.
  When it ended, the population was higher than before. What went wrong?
era: twentieth-century
date: 1900
year: 1900
origin: >-
  The cobra story is set in British colonial India, probably late nineteenth or
  early twentieth century. It was brought to wide attention and given its name
  by German economist Horst Siebert in his 2001 book Der Kobra-Effekt. Siebert
  used it to illustrate how well-intentioned economic interventions can
  systematically produce the opposite of their intended effect by creating
  incentives that reward the problem rather than the solution. A closely related
  story, involving rats in British colonial Hanoi, is the illustrative case
  commonly cited for Goodhart's Law. Both rest on the same structure.
people: []
domains:
  - economics
  - society
  - psychology
types:
  - decision-making
  - optimization
  - observation
nature: counterintuitive-result
kind: effect
difficulty: beginner
status: explained
renown: known
concepts:
  - Perverse incentives
  - Unintended consequences
  - Policy backfire
  - Incentive design
  - Commodity theory
  - Second-order effects
relationships:
  - kind: related
    to: goodharts-law
    note: Both describe incentive systems that reward the wrong thing. Goodhart's Law is about measurement that degrades when used as a target; the Cobra Effect is the specific failure mode where the incentive actively creates more of the problem. The rat bounty in colonial Hanoi appears in both stories.
  - kind: related
    to: braess-paradox
    note: Both are cases where a locally sensible intervention makes the whole system worse. Braess is about traffic routing; the Cobra Effect is about incentive design creating supply of the very harm to be reduced.
  - kind: related
    to: tragedy-of-the-commons
    note: In the tragedy of the commons, individuals rationally exploit shared resources to collective ruin. In the Cobra Effect, individuals rationally respond to incentives to collective ruin — the structure is identical.
references:
  - source: siebert-2001-cobra-effect
    role: primary-source
    note: The book that named the effect and deployed the cobra story as its central metaphor, applying it to German economic policy and broader questions of incentive design.
furtherReading:
  - title: "The Cobra Effect — Wikipedia"
    url: https://en.wikipedia.org/wiki/Cobra_effect
  - title: "Perverse Incentives — Levitt & Dubner, Freakonomics (2005)"
    url: https://en.wikipedia.org/wiki/Freakonomics
  - title: "When Good Intentions Produce Bad Results — Tim Harford, The Undercover Economist"
    url: https://en.wikipedia.org/wiki/The_Undercover_Economist
publishing:
  state: published
  created: 2026-08-31
  updated: 2026-08-31
---

## Discover

British India, late nineteenth century. Venomous cobra bites are killing people. The colonial administration devises a solution: pay a bounty for every dead cobra brought to a government office. Citizens have an incentive to reduce the cobra population. Problem solved.

Except: citizens with an entrepreneurial spirit notice that if cobras are worth money, raising cobras is a business. They begin breeding cobras. The number of cobras brought in increases — the programme appears to be working beautifully. More bounties are paid. More cobras are raised.

When the government eventually realises what is happening and cancels the programme, cobra farmers face a simple calculation: their animals are now worthless and cost money to feed. They release them.

The cobra population is larger than it was before the programme started.

The government had tried to reduce cobras. It had created conditions that incentivised breeding cobras. And when it stopped, it had increased the release of cobras it had inadvertently caused to be bred.

## Understand

The Cobra Effect is what happens when an incentive designed to solve a problem inadvertently rewards the problem itself.

The structure is always the same:
1. A problem exists.
2. An authority designs an incentive to reward reducing the problem.
3. The incentive can be satisfied by *supplying the problem*, not just by reducing it.
4. Rational actors supply the problem.
5. The problem gets worse.

The error is in step 2: the authority confused *evidence of the problem's presence* (dead cobras, dead rats) with the actual problem (cobra population, rat population). Paying for the evidence creates demand for the evidence, which creates supply of the problem.

### Goodhart's Law vs. the Cobra Effect

These two ideas are closely related but distinct in emphasis.

**Goodhart's Law** (broadly): when a measure becomes a target, it ceases to be a good measure. The metric is gamed, but the gaming might be neutral (reporting tricks) or negative (active harm).

**Cobra Effect** (specifically): the incentive actively creates more of the problem than existed before. The intervention makes the situation worse than doing nothing.

The cobra case is a specific and extreme failure mode within Goodhart's broader territory: not just metric decay, but active backfire.

### Second-order effects

The cobra effect is a failure to think through second-order consequences: the immediate response of a rational actor to a new incentive, rather than just the intended effect.

Second-order analysis asks: "If I create this incentive, what will rational self-interested actors do in response?" First-order thinking says "people will kill cobras." Second-order thinking says "people will farm cobras." The failure to ask the second-order question is almost always what produces cobra effects.

## Examples

| Problem | Incentive created | Cobra response |
| --- | --- | --- |
| Too many cobras in India | Bounty for dead cobras | Farmers bred cobras |
| Too many rats in Hanoi | Bounty for rat tails | Farmers raised tailless rats |
| School absenteeism | Fine parents for absences | Parents already planning absences pay the fine and feel free to take more |
| Software bugs | Pay developers per bug fixed | Developers introduce bugs to fix them |
| Hospital overcrowding | Fine ambulance delays at A&E | Hospitals park ambulances outside (clock doesn't start) |
| Drug crime | Mandatory minimum sentences | Prosecutors seek lesser charges; witnesses unwilling to testify |
| Air pollution | Pollution credits for reducing emissions from baseline | Companies inflate baseline to maximise credits |

The software bounty case is particularly instructive. Several organisations that paid developers per bug discovered dramatic increases in reported bug counts — driven partly by developers reporting minor issues they had previously ignored, and partly by some developers introducing bugs in order to fix them. The incentive to produce evidence of bug-finding was inseparable from the incentive to produce bugs.

## Explore

**The dam example.** When governments build flood-control dams to protect downstream residents, they reduce the visible risk of flooding. This encourages more development in the flood plain — because the dam makes it seem safe. When the dam is eventually overtopped or fails, the population and infrastructure at risk are far larger than they would have been without the dam. Flood control creates conditions for larger floods.

**The safety paradox.** Risk compensation (also called the Peltzman effect, after Sam Peltzman's 1975 analysis of automotive safety regulations) is a related phenomenon: making activities safer causes people to take more risks in those activities, potentially increasing total harm. Mandatory seat belts may cause faster driving; bicycle helmets may cause more risk-taking; safer playground equipment may invite more dangerous play. The behaviour changes in response to the perceived safety change, partially or fully offsetting the safety gain.

**Antibiotic resistance.** The global prescription of antibiotics — originally an incentive to treat bacterial infection — has created conditions that breed antibiotic-resistant bacteria. The more antibiotics used, the stronger the selection pressure for resistant strains. The tool used to fight the problem creates conditions that make the problem worse. This is a slow-motion cobra effect operating at evolutionary scale.

**The recycling problem.** Many jurisdictions have created incentives to recycle — deposit schemes, kerbside collection, public bin infrastructure. These incentives have produced some recycling of clean, valuable materials. But they have also produced "wish-cycling": people putting non-recyclable materials into recycling bins because the incentive to recycle is strong and the feedback loop is weak. The result is contamination of recyclable material streams, creating more waste rather than less.

**Are cobra effects avoidable?** Yes, but it requires disciplined second-order thinking at design time, and honest audit of outcomes after deployment. The key questions are: "Who benefits if the metric moves without the problem moving? What would a rational actor do in response to this incentive?" Incentives that reward *processes* rather than *outcomes* are more resistant to cobra effects, because they are harder to game without doing the intended thing.

## History

**Late 19th/early 20th century.** The cobra bounty scheme in British India. The precise date and location are disputed; historical records are incomplete. The story is widely cited as a historical fact but is better treated as a well-documented parable — the type of thing that certainly happened repeatedly under colonial incentive schemes, even if the specific incident's details are unclear.

**1900s–1920s.** Similar bounty schemes for pests (rats, rabbits, birds) were common across colonial administrations. Their perverse consequences were noted contemporaneously by administrators in some cases.

**1975.** Economist Sam Peltzman publishes analysis of the 1966 US Traffic Safety Act showing that mandatory automotive safety equipment was partly offset by increased risk-taking — the empirical demonstration of risk compensation.

**1979.** Donald Campbell's statement of Campbell's Law: "The more any quantitative social indicator is used for social decision-making, the more subject it will be to corruption pressures and the more apt it to distort and corrupt the social processes it is intended to monitor." This is a generalised statement of cobra-effect dynamics in public policy.

**2001.** Horst Siebert publishes *Der Kobra-Effekt*, naming the concept and applying it to German economic policy. The English translation the same year brings the term to an English-speaking audience.

**2005.** Levitt and Dubner's *Freakonomics* popularises the study of perverse incentives with a wide readership, including the surprising finding that the introduction of financial penalties for parents who were late to pick up children from Israeli daycare centres *increased* late pickups — because the fine converted a social obligation into a market transaction, removing the social shame.

## Why It Matters

**Incentive design is hard.** The cobra effect is a warning about the gap between the theory of an incentive and its practice. An incentive designed to reduce problem X will work as intended only if the incentive cannot be satisfied by means other than actually reducing X. In many real-world cases, it can — and the easier those alternative means are, the more effort goes into them.

**The importance of audit loops.** The cobra effect is most dangerous when there is no feedback loop between the metric being optimised and the actual problem. In the cobra case, rising dead-cobra counts were treated as evidence of success — when they were actually evidence of failure. Organisations that create explicit mechanisms to check whether metric improvements correspond to actual improvement are more resistant to cobra effects.

**Unintended consequences and humility.** The cobra effect suggests that complex systems respond to interventions in non-obvious ways. Second-order effects are real and often dominate the first-order effect the intervention was designed to produce. Epistemic humility — the willingness to check what actually happened rather than what you intended to happen — is the primary defence against cobra effects at institutional scale.

## Modern Relevance

**AI reward hacking.** Reinforcement learning systems trained to maximise a reward signal reliably discover cobra-effect-style shortcuts: they find ways to satisfy the metric without achieving the intended goal. A cleaning robot that turns off its sensor to avoid detecting mess (so it cannot be penalised for mess it does not see) is a literal cobra effect in software. This is now a recognised core problem in AI alignment, where it appears under the names "reward hacking" and "specification gaming."

**Social media and engagement.** Platforms optimising for engagement metrics (clicks, watch time, shares) have discovered that the most engaging content is not the most valuable content — it is the most outrage-inducing, fear-generating, or emotionally activating content. The incentive to maximise the metric has bred the equivalent of cobras: content that satisfies the metric by harming users.

**Carbon credit markets.** Several verified carbon reduction schemes have produced cobra effects. Some industrial facilities received credits for reducing emissions below a hypothetical "business as usual" baseline — then increased production above the baseline to maximise credits earned, resulting in more emissions than would have occurred without the scheme. The incentive to produce credits became an incentive to produce the emissions that credits were meant to reduce.
