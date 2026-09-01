---
title: Benford's Law
slug: benfords-law
alternateNames:
  - Newcomb-Benford Law
  - Law of Anomalous Numbers
  - First-Digit Law
summary: >-
  In almost any large collection of real-world numbers — populations, prices, river lengths, stock prices — the digit 1 appears as the leading digit about 30% of the time. The digit 9 appears only 5% of the time. Expected each digit equally at 11%? Almost every dataset proves you wrong, and the law catches fraudsters.
hook: >-
  Look at the first digit of every number in a newspaper. You'll see 1 far
  more often than 9 — and it is a mathematical law, not a coincidence.
era: twentieth-century
date: 1938
year: 1938
origin: >-
  First described by astronomer Simon Newcomb in 1881, who noticed that the
  early pages of logarithm tables (covering numbers beginning with 1 or 2) were
  far more worn than the later pages. He derived the mathematical formula from
  first principles but the observation was overlooked for over fifty years.
  Physicist Frank Benford independently rediscovered and systematically tested
  the phenomenon in 1938, collecting 20,229 data points across 20 datasets.
  The law bears Benford's name because of this systematic documentation, though
  Newcomb's priority is now acknowledged. The phenomenon was given a rigorous
  mathematical foundation by Theodore Hill in 1995.
people: []
domains:
  - mathematics
  - statistics
types:
  - observation
  - measurement
  - probability
nature: counterintuitive-result
kind: law
difficulty: intermediate
status: explained
renown: known
concepts:
  - Leading digit distribution
  - Power law
  - Scale invariance
  - Logarithmic distribution
  - Fraud detection
  - Number systems
relationships:
  - kind: related
    to: simpsons-paradox
    note: Both reveal that aggregated data can behave in ways that violate intuition. Simpson's Paradox shows that combined groups can reverse a trend; Benford's Law shows that the digits in any large naturalistic dataset follow a non-uniform distribution most people would not expect.
  - kind: related
    to: birthday-problem
    note: Both are counterintuitive results about distributions. The birthday problem reveals that coincidences are far more likely than intuition suggests; Benford's Law reveals that leading digits are far less uniformly distributed than intuition suggests.
references:
  - source: benford-1938-law-anomalous
    role: primary-source
    note: Benford's 1938 paper that systematically documented the leading-digit law across 20 datasets and 20,229 observations.
  - source: newcomb-1881-frequency-digits
    role: primary-source
    note: Newcomb's 1881 note, which independently derived the same law from first principles 57 years before Benford's paper.
furtherReading:
  - title: "Benford's Law — Wikipedia comprehensive overview"
    url: https://en.wikipedia.org/wiki/Benford%27s_law
  - title: "The Newcomb-Benford Law in Its Relation to Some Common Distributions — Formann (2010)"
    url: https://doi.org/10.1371/journal.pone.0010541
  - title: "Benford's Law: Applications for Forensic Accounting, Auditing, and Fraud Detection — Nigrini (2012)"
    url: https://www.wiley.com/en-us/Benford%27s+Law%3A+Applications+for+Forensic+Accounting%2C+Auditing%2C+and+Fraud+Detection-p-9781118152850
publishing:
  state: published
  created: 2026-08-31
  updated: 2026-08-31
---

## Discover

Simon Newcomb, 1881. Newcomb is an astronomer who spends much of his working life doing calculations — and like all scientists of his era, he does these calculations using books of logarithm tables. He notices something odd.

The books are dirty. The early pages are extremely dirty — worn, stained, the corners bent from frequent use. The later pages are almost clean.

Logarithm tables are indexed by the number's leading digit. Page one covers numbers beginning with 1. Page two covers numbers beginning with 2. Page nine covers numbers beginning with 9.

If people were looking up numbers with each leading digit equally often, the pages would wear equally. But they are not wearing equally. Newcomb's colleagues are looking up numbers beginning with 1 far more often than numbers beginning with 9.

Why? When numbers arise naturally in science, are numbers beginning with 1 just... more common?

Newcomb wrote a two-page note deriving a formula for the distribution and published it in the *American Journal of Mathematics*. It was almost entirely ignored.

Fifty-seven years later, a physicist named Frank Benford independently noticed the same thing — and this time, it became famous.

## Understand

Benford's Law states that in many naturally occurring collections of numbers, the probability that the leading (first) digit is d is:

$$P(\text{first digit} = d) = \log_{10}\!\left(1 + \frac{1}{d}\right)$$

This gives:
- **Digit 1**: 30.1%
- **Digit 2**: 17.6%
- **Digit 3**: 12.5%
- **Digit 4**: 9.7%
- **Digit 5**: 7.9%
- **Digit 6**: 6.7%
- **Digit 7**: 5.8%
- **Digit 8**: 5.1%
- **Digit 9**: 4.6%

Digit 1 leads more than six times as often as digit 9. The distribution is far from uniform.

### Why does this happen?

The most intuitive explanation is **scale invariance**. Suppose you collect a random sample of measurements — stock prices, populations, lengths of rivers — from the real world. These numbers span many orders of magnitude: prices might range from $0.01 to $1,000,000; populations from a few hundred to billions.

If you display these on a logarithmic scale (which treats 1 to 10, 10 to 100, 100 to 1,000 as equal-length intervals), numbers are roughly uniformly distributed along the log scale — because each order of magnitude is equally likely to appear.

On a log scale, the range covered by numbers beginning with 1 is from 1 to 2, from 10 to 20, from 100 to 200, and so on. Each such interval spans log₁₀(2/1) ≈ 0.301 of each decade. Numbers beginning with 9 span log₁₀(10/9) ≈ 0.046 of each decade.

Numbers beginning with 1 cover **30% of the logarithmic number line.** Numbers beginning with 9 cover only **4.6%**. If data points are distributed roughly uniformly on the log scale, you would expect to see digit 1 as a leading digit 30% of the time, and digit 9 only 4.6% of the time. Which is exactly what Benford observed.

### When Benford's Law applies (and when it doesn't)

Benford's Law holds reliably for data that:
- Spans several orders of magnitude
- Is not constrained to a narrow range
- Arises naturally rather than being chosen from a restricted set

It does **not** hold for:
- Data with a fixed range (telephone numbers, zip codes, ages)
- Data chosen from a uniform distribution
- Small datasets
- Data that is defined to be uniformly distributed

## Examples

| Dataset | Expected by chance | Actual first-digit-1 frequency |
| --- | --- | --- |
| Populations of cities | 11% | ~30% |
| Areas of countries | 11% | ~31% |
| Stock market prices | 11% | ~30% |
| Physical constants | 11% | ~31% |
| Street addresses | 11% | ~29% |
| Fibonacci numbers | 11% | 30.1% (exactly) |
| Powers of 2 | 11% | 30.1% (exactly) |
| Household incomes | 11% | ~28% |

The law applies across wildly different domains — physical constants, biological measurements, financial data — wherever numbers arise from multiplicative processes spanning many orders of magnitude.

## Explore

**Fraud detection.** The most practically consequential application of Benford's Law is in forensic accounting. When people fabricate financial figures, they tend to distribute leading digits more uniformly than real data — because human intuition suggests numbers should be roughly equally distributed across digits. A set of expense reports, tax returns, or accounting entries where digit 1 appears only 15% of the time (instead of the expected 30%) is statistically anomalous. The IRS, forensic accountants, and auditors now routinely apply Benford's Law analysis to detect anomalies in financial data.

**Limits of the forensic application.** The test identifies anomalies, not fraud. A dataset can deviate from Benford's Law for legitimate reasons (if it does not span multiple orders of magnitude, or if it is from a structured source like prices ending in .99). A dataset that conforms to Benford's Law is not necessarily clean — a skilled fraudster who knows about the law can generate conforming data. Benford analysis is a screen, not a verdict.

**Election fraud detection.** Benford's Law has been proposed as a test for election fraud, on the grounds that fraudulent vote counts might deviate from the expected distribution. This application is more controversial: election results often do not span enough orders of magnitude for Benford's Law to reliably apply, and the law has been misused to cast doubt on legitimate elections. Statistical experts have largely rejected the application of Benford's Law to overall vote totals, while acknowledging it may be valid for certain types of sub-regional vote count data.

**Mathematical explanation.** Theodore Hill provided the rigorous mathematical foundation in 1995: if you take numbers from many different distributions (each arbitrary) and combine them, the combined set will follow Benford's Law. More precisely, a distribution is scale-invariant — unchanged when you multiply all values by any constant — if and only if it follows Benford's Law. The law emerges from the scale-invariance structure of multiplicative processes.

**The curiosity about Fibonacci numbers.** The Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21, 34...) follows Benford's Law exactly, with digit 1 appearing as the leading digit exactly 30.1% of the time in the limit. This is because the Fibonacci sequence grows exponentially (at the rate of the golden ratio), and exponential sequences on a log scale are uniformly distributed — which is the condition that produces Benford's Law.

## History

**1881.** Simon Newcomb publishes "Note on the Frequency of Use of the Different Digits in Natural Numbers" in the *American Journal of Mathematics*. He derives the formula log₁₀(1 + 1/d) and offers the first mathematical explanation. The note receives no follow-up and is forgotten.

**1938.** Frank Benford, a physicist at General Electric, publishes "The Law of Anomalous Numbers" in the *Proceedings of the American Philosophical Society*. He tests the law across 20 datasets including river basins, atomic weights, population figures, physical constants, and numbers from newspaper front pages. His 20,229 observations confirm the law across radically different domains.

**1972.** Statistician Roger Pinkham publishes work showing that Benford's Law is the unique distribution that is scale-invariant — the same whether you measure in inches, centimetres, or light years. This provides the first rigorous theoretical reason why the law should hold.

**1995.** Theodore Hill publishes a rigorous proof: if you randomly select a distribution from a "distribution of distributions" and then randomly draw numbers from it, the resulting digits will follow Benford's Law. This is the mathematical explanation for why the law holds across such diverse domains.

**1996–present.** Forensic accountant Mark Nigrini publishes systematic work on using Benford's Law for fraud detection. The technique is adopted by tax authorities and auditors globally.

**2020.** Benford's Law is invoked (controversially) in analyses of the 2020 US presidential election results. Statisticians broadly reject the specific application while noting the law's validity in appropriate contexts.

## Why It Matters

**Intuition about randomness is wrong.** Benford's Law is a vivid demonstration that human intuition about the distribution of "random" numbers from the real world is systematically miscalibrated. When asked to generate "random" numbers, people produce too many mid-range values and too few 1s and 9s — which is part of why fabricated financial data is detectable.

**The law is a fingerprint.** Naturally occurring data has a characteristic shape at the level of individual digits. This shape — 30% starting with 1, 4.6% starting with 9 — is a consequence of how real-world multiplicative processes work across orders of magnitude. Departure from this shape is informative: it suggests either that the data does not arise from a natural process, or that someone has interfered with the data's natural distribution.

**Mathematics in unexpected places.** Benford's Law exemplifies one of mathematics' great recurring surprises: a deep structural regularity appears in phenomena that seem unrelated — stock prices, river lengths, physical constants, the Fibonacci sequence — because they all share a hidden mathematical structure (scale-invariance). Finding that structure, and recognising it across diverse domains, is the work of mathematical understanding.

## Modern Relevance

**Financial auditing.** Benford's Law analysis is now a standard component of forensic accounting workflows, applied to accounts payable, general ledger entries, and tax filings. Software tools that automate Benford analysis are widely used in corporate auditing and regulatory compliance.

**Scientific data integrity.** Researchers have applied Benford's Law to detect anomalies in published scientific datasets, finding significant departures from expected distributions in some papers that were subsequently found to contain fabricated data. The technique provides a data-level consistency check complementary to qualitative peer review.

**COVID-19 data.** Analyses of COVID-19 case and death statistics from various countries found departures from Benford's Law in some national datasets, particularly from countries with authoritarian governance and limited press freedom. These findings are consistent with (though do not prove) underreporting or manipulation. Benford analysis provides a plausible prior for flagging data for further scrutiny, not a verdict.
