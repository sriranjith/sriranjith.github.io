---
title: Moore's Law
slug: moores-law
alternateNames:
  - Transistor Doublings
  - Integrated Circuit Scaling
summary: >-
  Since the integrated circuit, transistor counts on a microchip have roughly doubled every two years while costs halved. Gordon Moore noticed this in 1965 and predicted it would continue. It did — for fifty years. The pace is now slowing, but the law reshaped every industry on Earth while it held.
hook: >-
  A pattern that held for fifty years: every two years, computers got twice as
  powerful for the same price. What happens when it stops?
era: twentieth-century
date: 1965
year: 1965
origin: >-
  Observed and predicted by Gordon Moore, then director of research at Fairchild
  Semiconductor, in a four-page article published in Electronics magazine on
  April 19, 1965. Moore noted that the number of transistors on an integrated
  circuit had doubled roughly each year since 1959, and predicted this would
  continue for at least another ten years. In 1975 he revised the doubling
  period to approximately two years. The Intel executive David House later
  synthesised Moore's transistor count with transistor speed improvements to
  arrive at the "performance doubles every 18 months" formulation that became
  popular shorthand.
people: []
domains:
  - computer-science
  - ai
  - economics
types:
  - observation
  - measurement
nature: counterintuitive-result
kind: law
difficulty: beginner
status: historically-significant
renown: landmark
concepts:
  - Exponential growth
  - Technology scaling
  - VLSI
  - Dennard scaling
  - Post-Moore computing
  - Industry roadmaps
relationships:
  - kind: related
    to: butterfly-effect
    note: Both describe systems where small early changes compound dramatically. The butterfly effect concerns nonlinear sensitivity to initial conditions; Moore's Law concerns systematic doubling that makes a 50-year-old prediction feel like a law of nature.
  - kind: related
    to: goodharts-law
    note: Moore's Law illustrates how an empirical observation, once adopted as an industry target, can become self-fulfilling — the law became a coordinating device that manufacturers planned around, helping sustain the doubling it described.
references:
  - source: moore-1965-cramming
    role: primary-source
    note: The original four-page article in Electronics magazine in which Moore identified the doubling trend and predicted its continuation.
furtherReading:
  - title: "Moore's Law at 50 — IEEE Spectrum special issue (2015)"
    url: https://spectrum.ieee.org/static/moores-law-at-50
  - title: "The End of Moore's Law — Technology Review (2016)"
    url: https://www.technologyreview.com/2016/05/13/245938/moores-law-is-dead-now-what/
  - title: "Cramming More Components onto Integrated Circuits — original Moore (1965)"
    url: https://newsroom.intel.com/wp-content/uploads/sites/11/2018/05/moores-law-electronics.pdf
publishing:
  state: published
  created: 2026-08-31
  updated: 2026-08-31
---

## Discover

April 1965. Gordon Moore sits down to write a four-page article for *Electronics* magazine. His editors have asked him to predict what the next decade will look like for the semiconductor industry.

Moore draws a graph. On the vertical axis: the number of transistors on the most advanced integrated circuits. On the horizontal axis: years, running from 1959 to 1965. He plots the data points for each year.

The points fall almost exactly on a straight line — on a logarithmic scale. Which means they fall on an exponential curve on a normal scale. The number of transistors is doubling roughly every year.

Moore extrapolates the line forward ten years and predicts that by 1975, a single chip will hold 65,000 components. He describes this as an observation about a trend, hedged with appropriate uncertainty.

He is right. By 1975 there are 65,000 transistors on the Intel 8080. By 1980 there are 130,000 on the Intel 8086. By 1989 there are one million on the Intel 486. The doubling keeps doubling.

Fifty years after Moore's article, the Apple A8 chip contains two billion transistors.

## Understand

Moore's Law is not a law of physics. It is an empirical observation — a description of a trend that held for an extraordinarily long time. Understanding why it held for so long is as interesting as the trend itself.

The doubling was not accidental. It was, for most of its history, the result of deliberate industry coordination. After Moore's observation became famous, it became a **planning target**: semiconductor manufacturers organised their investment cycles, their R&D roadmaps, and their capital expenditure around delivering the next doubling on schedule. If you planned to deliver twice as many transistors in two years and your competitors planned the same, the industry as a whole put enormous resources into making it happen.

This makes Moore's Law a partial case of **Goodhart's Law in reverse**: the observation, once adopted as a target, was sustained partly by the coordinating function of the target itself. The companies racing to validate the law were helping ensure it stayed valid.

### Why doubling matters so much

The power of exponential growth is consistently underestimated by intuition. A device with twice the transistors is not just twice as powerful — depending on the application, it may be dramatically more capable, because some problems are only solvable above certain thresholds of computational power.

In 1980, a personal computer could run a word processor. Twenty doublings later, computers run real-time 3D environments, language models, and global logistics networks. No individual doubling was revolutionary; the accumulation of doublings was.

**Dennard scaling.** For most of Moore's Law's history, transistor doublings came with an additional gift: each new transistor was also smaller, and smaller transistors ran faster and used less power. This so-called Dennard scaling meant that performance improvements were compounded. Around 2005, Dennard scaling hit physical limits — smaller transistors stopped running cooler — and clock speeds plateaued. The doublings continued (more transistors per chip), but the performance gains per transistor began to slow.

### What slowing looks like

The industry consensus is that Moore's Law has substantially slowed since around 2015. Transistors are now so small — measured in nanometres, with current leading-edge chips at around 3nm — that quantum effects and manufacturing tolerances have become fundamental barriers. Doubling cycles that once took two years now take four or five.

This is not a crisis but it is a transition. The era in which computational cost automatically halved on a predictable schedule is ending, and the industries built on that assumption are adapting.

## Examples

| Year | Chip | Transistor count |
| --- | --- | --- |
| 1971 | Intel 4004 | 2,300 |
| 1979 | Intel 8088 | 29,000 |
| 1989 | Intel 486 | 1,000,000 |
| 1999 | Intel Pentium III | 9,500,000 |
| 2009 | Intel Core i7 (Nehalem) | 731,000,000 |
| 2019 | Apple A13 Bionic | 8,500,000,000 |
| 2023 | Apple M3 | 25,000,000,000 |

From 2,300 to 25 billion in 52 years: roughly 23 doublings in 52 years, or one doubling approximately every 2.3 years. Moore's 1965 prediction has been remarkably accurate.

## Explore

**The law as coordination device.** Economic historian Timothy Bresnahan and others have documented how Moore's Law functioned as an industry Schelling point — a shared expectation that allowed manufacturers, customers, and suppliers to plan investments across long time horizons. Without a credible shared prediction of the pace of progress, building billion-dollar chip fabrication plants would require individual forecasts instead of shared industry knowledge. The law coordinated the investments that sustained itself.

**Software absorbs the gains.** One of the less-celebrated observations is that software has consistently grown in complexity to consume whatever hardware gains arrive. This is sometimes called Wirth's Law: "Software is getting slower more rapidly than hardware becomes faster." Applications that could not run at all in 1990 (real-time speech recognition, video streaming, large language models) run today — but so do applications that consumed less memory in 1990 than they do now for functionally equivalent tasks. The exponential hardware curve has been partially offset by an exponential software bloat curve.

**AI and the post-Moore era.** The AI boom of the 2020s has arrived at the moment Moore's Law is slowing. Training large language models requires enormous computational resources. If Moore's Law had continued at its 1970–2015 pace, the cost of training would halve every two years automatically; since it is slowing, the industry is turning instead to specialised AI accelerators (GPUs, TPUs), alternative architectures (neuromorphic chips, photonic computing), and more efficient algorithms. The relationship between AI capability and computational cost is now being worked out in the absence of the automatic doubling that previously masked it.

## History

**1947.** The transistor is invented at Bell Labs by William Shockley, Walter Brattain, and John Bardeen — the component whose miniaturisation will drive Moore's Law for half a century.

**1958–1959.** Jack Kilby at Texas Instruments and Robert Noyce at Fairchild Semiconductor independently invent the integrated circuit — multiple transistors on a single piece of silicon.

**1965.** Gordon Moore publishes his four-page article in *Electronics*, observing the yearly doubling and predicting it will continue for a decade.

**1975.** Moore revises his prediction at the IEEE International Electron Devices Meeting, extending the doubling period from one year to two. This "two-year" formulation becomes the standard definition.

**1975.** Caltech professor Carver Mead coins the term "Moore's Law" to describe the trend Moore had described. The name sticks.

**2005.** Clock speeds plateau as Dennard scaling ends. Moore's Law continues in terms of transistor count but the performance-per-transistor gains slow.

**2015–present.** Doublings stretch to four and five years. Industry analysts declare Moore's Law dead, slowing, or transforming. The debate continues; the doubling does not.

## Why It Matters

**Technology cost curves.** Moore's Law has been the single most important driver of the cost reduction in computation over half a century. Every industry that runs on data — finance, logistics, medicine, entertainment, communication — has been transformed by the sustained halving of computational cost. Business models that required expensive hardware in 1990 became consumer services by 2010, not because anyone was cleverer, but because the hardware cost fell along a predictable exponential.

**Planning and prediction.** Moore's Law is one of very few accurate long-range technological predictions in history. Its accuracy over fifty years established it as a benchmark for how industry roadmaps should work — and its current slowdown is raising fundamental questions about whether any comparable planning framework is available for the next generation of computation.

**The end of free performance.** For thirty years, software engineers could improve the performance of their applications by waiting for the hardware to improve. That era is substantially over. The end of Moore's Law is forcing the industry to find performance gains through better algorithms, better architectures, and better specialisation — investments that require thought rather than just time.

## Modern Relevance

**AI training costs.** The cost of training large AI models has not followed Moore's Law since roughly 2012. Compute costs for frontier models have instead grown dramatically, doubling roughly every six months as models have scaled. The mismatch between Moore's slowdown and the AI industry's appetite for compute is one of the defining tensions in technology today.

**Chip geopolitics.** The limits of Moore's Law have made the leading edge of chip fabrication — currently dominated by TSMC in Taiwan — one of the most strategically contested industrial capabilities on Earth. When a single company in a single country produces the world's most advanced chips, and when those chips are now hard to improve further through miniaturisation, geopolitical concentration of that capability becomes a critical vulnerability.

**Quantum computing.** One of the most discussed post-Moore technologies is quantum computing, which promises exponential computational speedups for specific problem classes by exploiting quantum mechanical properties of matter. Whether quantum computing will deliver on this promise at scale, and over what timescale, is one of the open questions in technology.
