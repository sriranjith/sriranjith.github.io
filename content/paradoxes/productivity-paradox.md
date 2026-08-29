---
title: The Productivity Paradox
slug: productivity-paradox
alternateNames:
  - The Solow Paradox
  - The Solow Computer Paradox
summary: >-
  Offices filled with computers through the 1970s and 1980s. The statistics that
  measure how much a worker produces per hour barely moved. Robert Solow put it
  in one line in 1987, and forty years later the argument about what it means is
  still running.
hook: >-
  Computers arrived in every office through the 1970s and 80s. Measured
  productivity did not move for two decades.
era: twentieth-century
date: 1987 (Solow's remark), debate ongoing
year: 1987
origin: >-
  Named for a single sentence in Robert Solow's July 1987 New York Times Book
  Review piece, though economists had been puzzling over the flat productivity
  numbers since the mid-1970s.
people:
  - robert-solow
  - erik-brynjolfsson
domains:
  - economics
  - computer-science
  - ai
types:
  - measurement
  - aggregation
  - optimization
nature: open-problem
difficulty: advanced
status: debated
renown: specialist
concepts:
  - Total factor productivity
  - General purpose technologies
  - Intangible capital
  - Mismeasurement
  - Implementation lags
  - Baumol's cost disease
relationships:
  - kind: related
    to: goodharts-law
    note: Both are about the distance between an official statistic and the thing it is supposed to represent — here through measurement failure rather than incentive.
  - kind: related
    to: jevons-paradox
    note: Two opposite-facing surprises about efficiency — Jevons on efficiency raising total consumption, Solow on efficiency failing to show up in output at all.
  - kind: related
    to: moravecs-paradox
    note: One reason the gains are slow to appear is that the tasks technology finds cheap are not the tasks that dominate most jobs.
  - kind: related
    to: simpsons-paradox
    note: Aggregate productivity growth can stay flat while a subset of firms pulls sharply ahead, which is roughly what the firm-level data shows.
references:
  - source: solow-1987-wed-better-watch-out
    role: primary-source
    note: The book review containing the sentence that named the paradox.
  - source: brynjolfsson-1993-productivity-paradox
    role: paper
    note: The survey that framed the four standard explanations.
  - source: brynjolfsson-hitt-2000-beyond-computation
    role: paper
    note: Firm-level evidence that the returns were real but conditional on organisational change.
  - source: brynjolfsson-rock-syverson-2021-j-curve
    role: paper
    note: The modern restatement, applied to artificial intelligence.
  - source: syverson-2017-mismeasurement
    role: paper
    note: The case against blaming the post-2004 slowdown on measurement error.
  - source: gordon-2016-rise-and-fall
    role: book
    note: The pessimistic reading — digital technology is simply less transformative than what came before.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Imagine a factory that makes chairs. In 1970 it employs a hundred people and they
make a thousand chairs a week. That is ten chairs per person per week.

Now give the factory computers. Give it computers for thirty years — for
ordering, for inventory, for design, for payroll, for the machines on the floor.
Spend an enormous amount of money on this. Everyone can see the computers. There
is one on every desk.

Then count the chairs again.

Across the American economy through the 1970s and 1980s, that is roughly the
experiment that was run, and the answer that came back was strange. The chairs
per person figure — which economists call productivity — had been climbing
steadily for decades. Around 1973 it slowed down. Then computers arrived by the
million, and it kept on being slow.

In July 1987, the economist Robert Solow reviewed a book about manufacturing and
dropped in a sentence that has been quoted ever since:

> "You can see the computer age everywhere but in the productivity statistics."

He had won the Nobel Prize that same year, largely for showing that technology is
what makes economies grow in the long run. And here was the greatest wave of new
technology in a generation, apparently doing nothing at all.

## Understand

Productivity, in this argument, means output per hour of work. It is not a
measure of effort. It is a measure of how much a country gets out of an hour of
someone's time, and over long periods it is essentially the whole story of why
living standards rise. Growth of two percent a year doubles living standards in
thirty-five years. Growth of one percent takes seventy.

The numbers behind Solow's remark, for the United States, look roughly like this.
From the end of the Second World War until 1973, labour productivity grew at
close to three percent a year. From 1973 to about 1995 it grew at roughly half
that. Computers arrived in force during exactly that slow stretch.

So there were two things to explain: why growth slowed in 1973, and why the
computer boom did not reverse it.

### The four standard explanations

Erik Brynjolfsson set these out in 1993, and they remain the frame everyone
argues within.

**Mismeasurement.** The statistics might be missing the gains. National accounts
were designed to count tons of steel and numbers of cars. They are poor at
counting quality improvements, variety, convenience and things given away free. A
spreadsheet that removes a week of drudgery, a search engine that replaces a trip
to the library, a phone call that becomes a video call — none of these
necessarily raise any measured quantity. If output is undercounted, productivity
is undercounted with it. Much of computing's benefit landed in services —
banking, healthcare, government, education — where output has always been the
hardest thing to measure.

**Redistribution.** Computers might be good for individual firms without being
good for the economy. Much of the spending went into competition for market
share: better targeting, faster trading, sharper marketing. If one firm's gain is
another's loss, the effort is real and the aggregate effect is nearly zero. On
this account the money was well spent from any single boardroom's view and wasted
from the country's.

**Lags and adjustment costs.** New technologies take decades to pay off, because
paying off requires rebuilding everything around them. The standard historical
case is electricity. Factories were electrified from the 1890s, but for thirty
years they kept the layout of the old steam plant — machines crowded around a
central power source and driven by belts and shafts. Only when factories were
redesigned around the fact that every machine could have its own motor did
productivity jump, in the 1920s. The delay was not technical. It was that
managers had to learn what the technology was for.

**Mismanagement.** Perhaps a great deal of the money was simply wasted:
information systems that did not work, projects that overran, automation of
processes that should have been abolished. Computerising a bad process gets you a
faster bad process.

These are not mutually exclusive, and the current consensus is that all four
contributed something.

### What happened next

Between roughly 1995 and 2004, American productivity growth jumped back to around
three percent a year. The timing pointed at computing: the biggest gains showed
up in computer manufacturing itself, and in the sectors that used computers most
intensively, above all retail and wholesale distribution. Walmart's logistics
operation is the textbook case.

Brynjolfsson and Lorin Hitt's firm-level work, published across the 1990s and
summarised in 2000, supplied the mechanism. Looking at individual companies, they
found that computing investment on its own explained little, but computing
combined with organisational change — flatter hierarchies, redesigned processes,
more decentralised decisions, more skilled workers — explained a great deal. And
the measured return rose the longer the time horizon: over one year, modest; over
seven years, several times larger. That is the signature of a lag, not of an
illusion.

So for a while the paradox looked resolved. Then, from about 2005, productivity
growth fell back again — to roughly one percent a year — and stayed low across
almost every rich country, right through the smartphone era, cloud computing,
and the rise of machine learning.

Which means the paradox did not get answered. It got postponed.

## Examples

**Electricity, 1890–1930.** The canonical lag. Electric motors were available
from the 1880s; the productivity surge in American manufacturing came in the
1920s. The intervening decades were spent discovering that the point of an
electric motor is not to replace the steam engine but to make the shaft and belt
system unnecessary, which permits a completely different factory layout, which
permits assembly lines.

**The ATM and bank tellers.** Cash machines spread through the 1980s and 1990s.
The number of bank tellers in the United States did not collapse; branches became
cheaper to run, so banks opened more of them, and teller work shifted towards
sales and problem-solving. Measured output per worker in banking moved far less
than the technology's visible impact suggested it should.

**Software that consumes its own gains.** A document that once took a typist an
hour now takes fifteen minutes — and is revised eleven times instead of twice,
formatted more elaborately, and circulated to forty people who each spend ten
minutes on it. Nothing here is fraudulent. The time saved was reinvested in the
same activity rather than released.

**Free goods.** Search, maps, encyclopaedias, messaging and navigation are used
constantly and priced at zero. Gross domestic product counts market transactions.
A service that replaces a paid product with a free one can *lower* measured
output while raising welfare — the printed encyclopaedia and the paper map both
used to be counted.

## Explore

The genuine disagreement is about which of two stories the last two decades tell.

**The optimists: we are inside the lag.** Brynjolfsson, Daniel Rock and Chad
Syverson argue that general purpose technologies produce a characteristic
pattern they call the productivity J-curve. A technology like electricity, the
internal combustion engine or machine learning is useless on its own. It requires
enormous complementary investment — new skills, new processes, new business
models, new data infrastructure. That investment is intangible, so the national
accounts record it as a current expense rather than as capital formation. During
the build-out phase, measured productivity therefore looks *worse* than reality,
because real resources are being consumed producing capital that nobody is
counting. Later, when the intangible capital starts yielding services that also
go uncounted as investment, measured productivity looks better than reality. Dip
first, then surge: a J.

On this reading the 2005–2020 slowdown is not evidence against AI's potential. It
is what the run-up looks like.

**The pessimists: the technology is simply smaller.** Robert Gordon's position,
argued at length in 2016, is that the 1870–1970 century was extraordinary and
will not repeat. Electrification, the internal combustion engine, indoor
plumbing and sanitation, chemicals and pharmaceuticals, and modern communications
each transformed daily life once, in ways that cannot be done twice. Digital
technology, on his account, has reshaped entertainment, communication and
information handling — a genuine but comparatively narrow slice of economic
activity — while leaving housing, transport, food and healthcare delivery largely
as they were in 1970. The slow growth is not a measurement failure or a lag. It
is the true rate.

**The measurement referee.** Chad Syverson, who co-authored the J-curve paper, is
also the author of the strongest argument *against* the mismeasurement story for
the post-2004 period. His 2017 assessment notes that the slowdown appears in
dozens of countries with no correlation to how large their technology sectors
are; that the total value of the free digital services in question, generously
estimated, is far too small to close the gap; and that the gap between measured
and plausible actual output has grown to a size that would require implausibly
large hidden gains. Mismeasurement is real. It does not appear to be big enough.

**Baumol's cost disease.** A structural argument that cuts across the others.
Some activities — string quartets, teaching, nursing, haircuts — resist
productivity improvement almost by definition. As the rest of the economy gets
more productive, those activities become relatively more expensive and absorb an
ever larger share of spending and employment. An economy that is increasingly
made of hard-to-improve services will show slowing aggregate productivity growth
even if every improvable sector keeps improving at the same rate as before. This
is a reason to expect the paradox to be permanent rather than resolved.

**Diffusion and the frontier.** Firm-level data from the OECD and others shows a
widening gap between the most productive firms in each industry, which have kept
growing quickly, and everyone else, who have not. That is compatible with both
camps. Optimists read it as evidence the technology works and diffusion is slow.
Pessimists read it as evidence of market concentration rather than technical
progress.

**Why this stays open.** Every explanation is partly right and none is decisive.
The disagreement is not about facts anyone disputes; it is about how much weight
to put on effects that are individually real and jointly unmeasurable. Anyone
telling you the productivity paradox has been settled is describing their
priors.

## History

**1973.** Productivity growth across the industrialised world slowed sharply, for
reasons still argued over — the oil shocks, the exhaustion of postwar catch-up
growth, changes in labour force composition. This is the baseline puzzle that the
computer question was layered on top of.

**Late 1970s and early 1980s.** Business investment in information technology
climbed steeply as minicomputers and then personal computers spread. Economists
including Stephen Roach, then at Morgan Stanley, published analyses in the
mid-1980s pointing out that white-collar productivity had not responded, and that
the office equipment spending per information worker had risen enormously with
nothing to show for it.

**12 July 1987.** Robert Solow, reviewing Stephen Cohen and John Zysman's
*Manufacturing Matters* in the *New York Times Book Review*, wrote the sentence.
It was a passing observation in a book review, not a research claim, and it
became the name of a research programme. Solow received the Nobel Memorial Prize
in Economic Sciences later the same year.

**1993.** Erik Brynjolfsson published "The Productivity Paradox of Information
Technology" in *Communications of the ACM*, laying out the four explanations and
reviewing the evidence for each. This is the paper that turned an aphorism into a
literature.

**1995–2004.** American productivity growth accelerated to roughly its postwar
rate. Work by Dale Jorgenson, Kevin Stiroh, Stephen Oliner and Daniel Sichel
attributed much of it to information technology, both to the falling price of
computing power and to its use in distribution and retail.

**2000.** Brynjolfsson and Hitt published "Beyond Computation" in the *Journal of
Economic Perspectives*, arguing that the returns to computing were real,
substantial, and inseparable from organisational change — and that measured
returns grew with the length of the observation window.

**2005 onwards.** Growth fell back to roughly one percent a year and stayed
there, across essentially all advanced economies, through the smartphone, cloud
and deep learning eras. The paradox returned in its original shape.

**2021.** Brynjolfsson, Rock and Syverson published "The Productivity J-Curve" in
*American Economic Journal: Macroeconomics*, offering a formal account of why a
general purpose technology should depress measured productivity before raising
it, and applying it to artificial intelligence.

## Why It Matters

**It sets the terms for every argument about technology and growth.** Whether
policymakers should expect artificial intelligence to raise living standards, and
on what timescale, is exactly the productivity paradox question. The answer
determines assumptions about tax revenue, debt sustainability, pension
affordability and interest rates for decades ahead.

**It is a standing warning about official statistics.** The national accounts are
among the most carefully constructed numbers humans produce, and they were
designed for an economy of physical goods. They handle quality change,
zero-priced services and intangible investment badly, and everyone in the field
knows it. The paradox is the most consequential example of a statistical
framework being asked a question it was not built to answer.

**It changed what firms understood they were buying.** The Brynjolfsson–Hitt
result — that computing pays off only alongside organisational change — is now
close to conventional wisdom in management, and it reframed technology projects
from procurement exercises into change programmes. The corollary is uncomfortable
and well evidenced: buying the same system as a competitor without the
accompanying reorganisation buys you very little.

**It disciplines forecasting.** The gap between how transformative a technology
feels and what it does to output per hour is large, persistent, and not obviously
closing. Any confident prediction about the economic effect of a new technology
should be checked against the fact that the last several waves took twenty to
thirty years to appear in the data, if they appeared at all.

## Modern Relevance

The paradox has re-emerged, in almost identical wording, for artificial
intelligence. You can see the AI age everywhere except in the productivity
statistics.

**The case that this time is the same.** Capable language models became widely
available from 2022. Adoption has been fast by historical standards. Aggregate
productivity growth in the major economies has not visibly departed from its
post-2005 trend. Firm-level and task-level studies do find substantial effects —
randomised trials on customer support agents, consultants, developers and writers
have reported double-digit percentage gains on specific tasks — but a large gain
on a task that occupies a fraction of a job, in firms that are a fraction of the
economy, is compatible with essentially nothing in the national numbers. That is
the arithmetic of diffusion, and it is not evidence either way yet.

**The J-curve prediction.** If Brynjolfsson, Rock and Syverson are right, the
current period should look like heavy investment with weak measured returns:
firms building data infrastructure, retraining staff, rewriting processes, and
booking all of it as cost. Their model predicts that measured productivity is
currently *understated*, that the understatement is largest exactly when
investment is fastest, and that the correction arrives years later. The
prediction is testable, which is its main virtue.

**What would count as evidence.** Watch for productivity growth in the sectors
with the highest adoption and the most measurable output — software, customer
service, translation, back-office processing, drug discovery pipelines. Watch
whether the gap between frontier firms and the rest widens further. And watch
whether intangible investment, when it is estimated directly rather than inferred,
turns out to be as large as the theory requires.

**The measurement problem is worse now, not better.** AI output is
disproportionately quality improvement and time saved rather than additional
units of anything. If a report is better rather than more numerous, or a doctor's
diagnosis more accurate rather than faster, standard measures may register
nothing at all. Solow's sentence was about an economy that at least still counted
chairs.

**The honest position.** Nobody knows. The optimists have a coherent mechanism
and a historical precedent. The pessimists have twenty years of flat data and a
good argument that the transformative inventions were used up. The paradox is
listed here as an open problem because that is what it is.

## Deep Dive

### The accounting

Start with a standard production function relating output $Y$ to capital $K$,
labour $L$ and technology:

$$Y_t = A_t \, F(K_t, L_t)$$

$A_t$ is total factor productivity — the residual, the part of output not
explained by measured inputs. In the Cobb–Douglas case $F(K,L) = K^{\alpha}
L^{1-\alpha}$, and taking logs and differences gives the growth accounting
identity:

$$\frac{\dot{A}}{A} = \frac{\dot{Y}}{Y} - \alpha \frac{\dot{K}}{K} - (1-\alpha)\frac{\dot{L}}{L}$$

Solow's paradox is the observation that $\dot{A}/A$ stayed low while the
information technology component of $\dot{K}/K$ was very high. Note what this
means: computers *did* raise output through ordinary capital deepening. They
simply did not show up as an unexplained residual, which is where a genuine
technological revolution is supposed to appear.

### Why the residual can be wrong in both directions

Suppose true output includes an unmeasured component. Write measured output as

$$Y^{m}_t = Y_t - Z_t$$

where $Z_t$ is output the statisticians miss — free services, unpriced quality
improvement, and, critically, intangible capital that firms produce for their own
use. Then measured productivity growth is

$$\frac{\dot{A^m}}{A^m} \approx \frac{\dot{A}}{A} - \frac{\dot{Z}}{Y}$$

During a period when $Z$ is growing — the build-out of intangible capital
complementary to a new general purpose technology — measured productivity growth
is biased **downwards**. Later, when that intangible capital is in service and
generating output while no longer growing, the bias reverses and measured
productivity growth is biased **upwards**. The path of the measurement error
alone traces a J, even if true productivity growth is constant. This is the
formal content of the J-curve argument.

### The diffusion arithmetic

Let $\theta$ be the fraction of economic activity in which a technology is
deployed, and $g$ the proportional productivity gain on that activity. The
aggregate effect is approximately

$$\Delta \approx \theta \cdot g$$

Take a very generous $g = 0.30$ — a thirty percent gain on affected work. To move
aggregate productivity growth by one percentage point per year, that gain must
spread across roughly $\theta = 3.3\%$ of all economic activity **per year, every
year**. Sustaining a one-point acceleration for a decade requires deploying it
across a third of the economy.

This is the arithmetic that makes both camps' positions reasonable. Impressive
task-level results and invisible aggregate effects are not in tension; they are
what you get when $\theta$ is small. It also shows why the paradox is unfalsifiable
in the short run: for any $g$ you like, there is a diffusion path consistent with
the observed data.

### Structural change and Baumol's disease

Divide the economy into a progressive sector with productivity growth $\gamma > 0$
and a stagnant sector with zero growth. If the two goods are demanded in roughly
fixed relative quantities, the stagnant sector's share of the labour force rises
over time, and aggregate productivity growth is

$$\gamma_{\text{agg}}(t) = s(t)\,\gamma, \qquad s(t) \to 0$$

Aggregate growth declines asymptotically towards zero even though the progressive
sector never slows down. Under this model the productivity paradox is not a
puzzle about technology at all but a necessary consequence of the composition of
a rich economy — and no improvement in software will fix it, because the
constraint is in the sectors software cannot reach.

### What the competing hypotheses actually predict

| Hypothesis | Prediction about the recent past | Prediction going forward |
| --- | --- | --- |
| Mismeasurement | Gap concentrated in free and quality-improved goods | Gap persists; true welfare growth exceeds measured |
| Redistribution | Firm-level gains, no aggregate gain | Frontier–laggard gap widens without aggregate effect |
| J-curve / lags | Intangible investment high, measured productivity low | Measured acceleration after roughly a decade |
| Gordon's pessimism | Nothing hidden; the numbers are correct | Slow growth continues indefinitely |
| Baumol | Progressive sectors still improving, share falling | Aggregate growth declines regardless of technology |

These make different, checkable claims about intangible investment, the
distribution of firm productivity, and sectoral shares. That is why the question
is open rather than merely rhetorical — the evidence to settle it is the kind
that takes another decade to accumulate.
