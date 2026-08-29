---
title: Peto's Paradox
slug: peto-paradox
alternateNames:
  - The Peto Paradox
summary: >-
  A blue whale has thousands of times more cells than you do and lives about as
  long. Every cell is a chance for cancer to start. Whales should be riddled with
  it. They are not — and across species, body size barely predicts cancer at all.
era: twentieth-century
date: 1975 (observation), 1977 (Peto's fuller statement)
year: 1977
origin: >-
  Richard Peto and colleagues noted in 1975 that humans are not more cancer-prone
  than mice despite having far more cells and far longer lives; Peto set the
  puzzle out explicitly in a 1977 conference paper on carcinogenesis.
people:
  - richard-peto
domains:
  - biology
types:
  - probability
  - aggregation
nature: counterintuitive-result
difficulty: intermediate
status: explained
concepts:
  - Multistage carcinogenesis
  - Somatic evolution
  - Tumour suppressor genes
  - Body size and lifespan
  - Comparative oncology
relationships:
  - kind: related
    to: c-value-paradox
    note: Two biological puzzles with the same shape — a quantity that obviously ought to scale with something turns out not to, and the resolution is in the mechanism nobody had looked at.
  - kind: related
    to: birthday-problem
    note: Both are about what happens when the number of independent chances gets very large; the birthday problem is the intuition Peto's paradox violates.
  - kind: related
    to: simpsons-paradox
    note: The size–cancer relationship is positive within species and flat across them, a reversal that depends entirely on the level at which you look.
references:
  - source: peto-1975-cancer-and-ageing
    role: primary-source
    note: The paper containing the original mice-and-men observation.
  - source: caulin-maley-2011-petos-paradox
    role: paper
    note: The review that revived the problem and catalogued the candidate mechanisms.
  - source: abegglen-2015-elephant-tp53
    role: paper
    note: The elephant TP53 result, and the best-known concrete answer.
  - source: nagy-2007-hypertumours
    role: paper
    note: The hypertumour hypothesis.
  - source: tian-2013-naked-mole-rat
    role: paper
    note: High-molecular-mass hyaluronan in the naked mole rat.
  - source: keane-2015-bowhead-genome
    role: paper
    note: Genomic candidates for the bowhead whale's two-century cancer-free lifespan.
  - source: cagan-2022-somatic-mutation-rates
    role: paper
    note: Evidence that longer-lived species mutate more slowly, one of the proposed mechanisms measured directly.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Cancer starts when one single cell goes wrong. Just one. It picks up a few
unlucky changes in its instructions, forgets how to stop dividing, and starts
making copies of itself.

So here is a question you can answer with nothing but counting.

A mouse is made of a few billion cells and lives about three years. You are made
of tens of trillions of cells — roughly ten thousand mice' worth — and you live
about eighty years. That is more cells, each getting more chances to go wrong,
for much longer.

If every cell in every animal is equally likely to turn cancerous, you should be
about a *million* times more likely to get cancer than a mouse. You are not.
Mice and humans get cancer at broadly similar rates.

And it gets stranger. A blue whale weighs as much as two thousand people. It
carries something like ten thousand trillion cells, and it can live to eighty or
ninety. A bowhead whale can live past two hundred. By the counting argument,
every whale should be dead of cancer before it finishes growing up.

Whales do get cancer. But they get it rarely, and elephants get it less often
than we do.

**Why don't elephants get more cancer than mice?**

## Understand

Richard Peto noticed this in 1975 while studying cancer in mice, and it is now
called Peto's paradox: **across species, cancer risk does not increase with body
size or lifespan the way the arithmetic says it must.**

The arithmetic is not naive. It is the standard model of how cancer works, and
that model is correct. A cell becomes cancerous by accumulating several specific
faults — losing the brakes on division, losing the self-destruct instruction,
learning to attract a blood supply, learning to ignore its neighbours. Each is
individually rare. A cell needs several of them in the same lineage, which is why
cancer is mostly a disease of later life: it takes decades of cell divisions for
the faults to pile up in the same place.

That model makes an unambiguous prediction. More cells means more lineages
accumulating faults. More years means more time to accumulate them. A whale
should be overwhelmed.

The reason it is not, is that **evolution had to solve this problem in order for
whales to exist at all.**

### The key move: cancer defence is a trait, and it evolves

Body size is not a free parameter. An animal lineage that got larger without also
getting better at suppressing cancer would simply have died out. The ones that
survived to become elephants and whales are the ones that acquired stronger
defences along the way.

So the paradox is only a paradox if you assume that cancer suppression is fixed
across species. It is not fixed. It is under intense selection, and it got much
stronger every time a lineage got bigger.

This turns the puzzle inside out and makes it useful. Instead of asking "why
aren't whales full of tumours?", biologists ask: **what did evolution actually
do, and can we borrow it?**

### What evolution did

Several different things, in several different lineages, which is itself
informative — there is no single trick.

**More copies of the safety gene.** The gene TP53 makes a protein that watches
for DNA damage and either halts the cell or kills it outright. Humans carry one
copy, inherited from each parent. African elephants carry around twenty, reported
in 2015 by Lisa Abegglen, Joshua Schiffman, Carlo Maley and colleagues. Elephant
cells, faced with DNA damage, do not attempt repair as readily as human cells do.
They commit suicide, at roughly double the rate. An elephant is quicker to
sacrifice a suspicious cell — which it can afford to be, because it has so many.

**Slower accumulation of damage.** Longer-lived species appear to mutate more
slowly. Work published in 2022 sequencing single tissue samples across sixteen
mammals found that somatic mutation rate scales inversely with lifespan, so that
a mouse and a human reach roughly similar total mutation loads by the end of
their respective lives. A whale simply damages its DNA more slowly per year than
a mouse does.

**A physical barrier to overcrowding.** Naked mole rats — small animals, but
extraordinarily long-lived for their size at over thirty years — secrete an
unusually large form of a molecule called hyaluronan into the space between their
cells. Cells embedded in it stop dividing when they get crowded, far earlier than
human cells do. Remove the molecule and the cells become transformable. This was
identified by Vera Gorbunova, Andrei Seluanov and colleagues in 2013.

**Tumours that kill each other.** John Nagy and colleagues proposed in 2007 that
in a very large animal, a tumour grows for long enough that evolution happens
*inside it*. A tumour has to build its own blood supply, which is expensive.
Sub-clones that stop paying for the blood supply and free-ride on it will
out-compete the ones that do pay — and then the whole structure starves. Nagy
called these hypertumours: parasites of cancer, which may make large tumours
self-limiting in large animals.

### The part that is usually left out

Within a single species, the original arithmetic works fine.

Taller humans do get more cancer than shorter ones — by roughly a tenth more per
additional ten centimetres of height, across several large cohort studies. Large
dog breeds get more cancer than small ones. Bigger cows and bigger cats,
likewise.

So the paradox holds **across** species and fails **within** them. That is not an
inconsistency; it is the clue. Within a species, all individuals share the same
cancer suppression machinery, so size differences show up directly as risk
differences, exactly as the model predicts. Between species, the machinery itself
is different, and the differences swamp the size effect.

Any account of Peto's paradox that ignores this is telling you only half of it.

## Examples

**The scale of the problem.**

| Animal | Approximate cells | Typical lifespan | Cancer prevalence |
| --- | --- | --- | --- |
| Mouse | ~3 billion | 2–3 years | High; the majority of laboratory mice die with tumours |
| Human | ~30 trillion | ~80 years | Roughly 11–25% die of cancer |
| African elephant | ~2 quadrillion | 60–70 years | Estimated under 5% from zoo necropsy records |
| Bowhead whale | ~100 quadrillion | Over 200 years | Rare enough that cases are noteworthy |
| Naked mole rat | ~1 billion | Over 30 years | Extremely rare; a handful of documented tumours |

The mismatch is not a factor of two. A blue whale has roughly a thousand times
more cells than a human. Under the simplest multistage model with several
required mutations, that should raise lifetime cancer risk by a factor in the
thousands or millions, not leave it flat.

**The elephant's twenty guards.** Human cells carry two working alleles of TP53.
Lose both, as in Li-Fraumeni syndrome, and lifetime cancer risk approaches
ninety percent. Elephants carry about twenty copies — one ancestral gene and
nineteen retrogenes copied back into the genome over evolutionary time. Most of
the extra copies are truncated, and how much each contributes is still being
worked out, but the functional consequence is measurable: elephant cells exposed
to ionising radiation undergo apoptosis at about twice the human rate.

**Two ways to be careful.** Elephants illustrate the strategy of *aggressive
disposal* — kill any damaged cell immediately. Naked mole rats illustrate
*preventing the crowd* — stop cells dividing before a mass can form. These are
independent solutions to the same problem, arrived at by unrelated lineages,
which is why comparative oncology looks at dozens of species rather than one.

**A caution about the naked mole rat.** For years it was described as
cancer-free. Since around 2016 a small number of spontaneous tumours have been
documented in captive animals. The honest statement is that cancer in naked mole
rats is extraordinarily rare, not that it is impossible. The mechanism still
stands; the absolute claim does not.

## Explore

**Is it really a paradox?** Several biologists have argued that it is not,
because nobody who thinks about it expects cancer defences to be constant across
species. The counting argument is a null model, and the null model is wrong in an
obvious way. On this reading the correct name would be "Peto's observation", and
its value is in what it forces you to explain rather than in any contradiction.

The counter-argument, and the reason the name has stuck, is that the null model
was not obviously wrong when Peto stated it, and the *size* of the discrepancy is
still not fully accounted for. Knowing that elephants have extra TP53 copies
tells you that they have a defence. It does not yet tell you that this defence is
quantitatively sufficient to cancel a millionfold increase in expected risk. The
bookkeeping is not closed.

**How much of the answer is a slower clock?** Leonard Nunney and others have
pointed out that many large animals also grow slowly, divide their cells less
often per unit time, and have lower metabolic rates per gram. If mutation
accumulates per cell division rather than per year, much of the apparent
discrepancy shrinks before you invoke any special gene. The 2022 somatic mutation
data supports a version of this. The open question is what fraction of the gap it
closes: a large fraction, in which case the exotic mechanisms are a supplement,
or a modest one, in which case they are the main event.

**Are the data good enough?** Cancer prevalence in wild animals is hard to
measure. Most figures come from zoo necropsies, which is a biased sample:
captive animals are protected from predation and often live longer than wild
ones, veterinary records vary in quality, and species are unevenly represented.
Large-scale zoo pathology studies published since 2020 have found substantial
cancer mortality in some species previously thought resistant, and the field has
become correspondingly more careful. Any confident number for whale cancer
incidence should be treated with suspicion, because nobody has performed a
systematic necropsy programme on whales.

**Hypertumours: elegant but unconfirmed.** Nagy's proposal is theoretically
attractive and follows straightforwardly from treating tumours as evolving
populations. Direct evidence in a large animal is thin. It sits in the literature
as a live hypothesis rather than an established mechanism, and it is worth
labelling as such.

**Why the disagreement matters.** These are not academic distinctions. If the
answer is mostly "slower cell division", there is little to borrow for human
medicine. If it is mostly "better molecular defences", there is a great deal.

## History

**1975.** Richard Peto, Frank Roe, Peter Lee and colleagues published "Cancer and
Ageing in Mice and Men" in the *British Journal of Cancer*. It is principally a
study of how the timing of carcinogenesis relates to a species' lifespan. In
discussing the results, Peto observes that a human being has thousands of times
more cells than a mouse and lives thirty times longer, and yet is not thousands
of times more likely to develop cancer — and remarks that this ought to be
puzzling.

**1977.** Peto set the argument out more fully in a conference paper on the
epidemiology and biology of carcinogenesis, and it is this statement that is
usually cited as the origin of the paradox.

**Late 1970s to 2000s.** The problem was known but generated relatively little
research. It sat mostly in comparative pathology and in occasional theoretical
papers.

**2007.** John Nagy, Erin Victor and Jenese Cropper published the hypertumour
hypothesis, asking directly why whales do not all have cancer.

**2011.** Aleah Caulin and Carlo Maley published a review in *Trends in Ecology &
Evolution* framing large animals as a natural experiment in cancer prevention.
This is the paper usually credited with reviving the field, and the phrase
"Peto's paradox" became common from about this point.

**2013.** Xiao Tian, Vera Gorbunova, Andrei Seluanov and colleagues identified
high-molecular-mass hyaluronan as the basis of the naked mole rat's resistance,
publishing in *Nature*.

**2015.** Two independent groups reported the elephant TP53 expansion. The
Abegglen and Schiffman paper in *JAMA* is the most cited, and reported both the
gene copy number and the elevated apoptotic response of elephant cells. The same
year, the bowhead whale genome was sequenced, identifying changes in DNA repair
and cell cycle genes as candidates for its exceptional longevity.

**2022.** Alex Cagan, Iñigo Martincorena and colleagues published somatic
mutation rates across sixteen mammal species, showing the inverse scaling with
lifespan.

## Why It Matters

**It reframed cancer as an evolutionary problem, not just a molecular one.**
Cancer is somatic evolution: mutation and selection among the cells of a body. If
you take that seriously, then multicellular life has been running a
several-hundred-million-year arms race against its own cells, and the defences
that exist are the ones that won. Peto's paradox is the clearest evidence that
those defences vary enormously and are tunable.

**It created comparative oncology as a research programme.** The logic is
straightforward and was not obvious before: rather than studying cancer only in
humans and mice, study the species that solved it. Elephants, whales, naked mole
rats, bats and long-lived bird species are now studied specifically for their
resistance mechanisms, and the resulting list of candidate genes is a resource
human oncology did not previously have.

**It has produced concrete therapeutic leads.** Elephant TP53 and its unusual
apoptotic behaviour is under active investigation as a template for drugs that
push damaged human cells towards self-destruction rather than repair. This is
early-stage work and should not be oversold, but it is a direct line from a
puzzle about body size to a laboratory programme.

**It clarifies what cancer risk actually depends on.** The naive model says risk
tracks cell count and time. The comparative evidence says risk tracks the number
of *defences that have to fail*, and that this number is a species-level trait.
That reframing explains why a small number of inherited defects — a missing TP53
allele, a broken mismatch repair pathway — raise risk so dramatically: they
remove a layer from a system built to have several.

## Modern Relevance

**Drug development from other species.** The mechanisms identified in resistant
species are being pursued directly: elephant p53 variants as a way to lower the
threshold for apoptosis in damaged cells, and the naked mole rat's hyaluronan
pathway as a target for restoring contact inhibition. Neither has produced an
approved therapy, and both are worth watching rather than believing.

**Understanding the limits of prevention.** The evolutionary framing predicts
that any single-mechanism intervention will be evaded, because a tumour is a
population under selection and single-target pressure is exactly what selection
handles best. Species that solved cancer did it with layered, redundant defences.
That argues for combination approaches in humans, and it is one of the reasons
resistance to single-agent therapy is expected rather than surprising.

**A caution about scaling arguments generally.** Peto's paradox is a clean
example of a failure mode that recurs across science: extrapolating a
relationship measured within a system to comparisons *between* systems, where the
parameters you held fixed are the very things that differ. The same error appears
in comparing crime rates between countries with different reporting practices, or
model performance across benchmarks with different construction.

**Species conservation and ageing research.** Long-lived, large-bodied species are
now studied jointly for cancer resistance and for ageing, since the mechanisms
overlap heavily — DNA repair fidelity, senescence control, telomere management.
The bowhead whale genome and the naked mole rat have become reference points for
both fields.

## Deep Dive

### The multistage model, and why it predicts a catastrophe

The Armitage–Doll multistage model treats a cell as requiring $k$ independent
rate-limiting events before it becomes malignant. For a single cell with mutation
rate $u$ per cell division and $d$ divisions over a lifetime, the probability of
accumulating $k$ specific hits is approximately

$$p_{\text{cell}} \approx \frac{(u\,d)^k}{k!}$$

For an organism with $N$ cells at risk, and treating cells as independent, the
lifetime probability of at least one malignancy is

$$P_{\text{cancer}} = 1 - (1 - p_{\text{cell}})^{N} \approx 1 - e^{-N p_{\text{cell}}}$$

for small $p_{\text{cell}}$. The scaling is what matters: expected number of
malignant clones goes as

$$\mathbb{E}[\text{clones}] \propto N \, (u\,d)^k$$

so it is **linear in cell number** and **polynomial of degree $k$ in the number
of cell divisions**, and therefore in lifespan.

Now put in numbers. A blue whale has roughly $10^3$ times the cells of a human
and a comparable lifespan, so on cell count alone it should have around a
thousandfold higher expected clone count. A bowhead lives roughly $2.5$ times as
long as a human; with $k \approx 6$, the lifespan term alone contributes a factor
of $2.5^6 \approx 244$. Multiply and the naive prediction for a bowhead whale is
five orders of magnitude more cancer than a human, before accounting for anything
else.

The observation is that the true ratio is around one, or below it. Something must
be supplying a compensating factor of $10^5$ or more.

### Where the compensating factor can come from

Rearranging, the expected clone count for a species is

$$\mathbb{E} \propto N \cdot \frac{(u\,d)^k}{k!}$$

There are only three places to intervene.

**Reduce $u$, the mutation rate per division.** Because the term is raised to the
power $k$, this is extremely efficient. With $k = 6$, halving $u$ cuts expected
clones by a factor of $2^6 = 64$. A tenfold reduction gives $10^6$. This is why
the 2022 finding that somatic mutation rate scales inversely with lifespan is so
important: a modest-looking change in $u$ does enormous work.

**Increase $k$, the number of required hits.** Extra tumour suppressor copies do
exactly this. If an elephant needs to lose twenty TP53 copies rather than two,
the relevant exponent rises, and since $u\,d \ll 1$ each additional required
event multiplies the difficulty by a small number. Note that increasing $k$ also
*flattens* the age-incidence curve's dependence on cell number, because the
polynomial term dominates.

**Reduce $d$, divisions per cell over a lifetime.** Large animals generally have
lower mass-specific metabolic rates and slower tissue turnover, contributing
another power-$k$ reduction.

Since these multiply, three individually modest adaptations — a threefold lower
mutation rate, two extra required hits, and half the cell divisions — combine to
several orders of magnitude. No single dramatic mechanism is required, which is
consistent with what comparative genomics actually finds: many small changes
across DNA repair, cell cycle and apoptosis pathways rather than one master
switch.

### Within versus between species, formally

Within a species, $u$, $k$ and the defence architecture are approximately fixed.
Risk is then monotonically increasing in $N$, and the model predicts

$$\frac{\partial \log P}{\partial \log N} \approx 1$$

which is roughly what the human height–cancer cohort data shows: a positive,
modest elasticity, on the order of a ten percent increase in risk per ten
centimetres of height.

Between species, $N$, $u$ and $k$ co-evolve. Write $u = u(N)$ and $k = k(N)$.
Observed flatness requires

$$\frac{d}{d\log N}\left[\log N + k(N)\log\big(u(N)d(N)\big) + \log\frac{1}{k(N)!}\right] \approx 0$$

This is a constraint, not a coincidence: any lineage in which the bracket grew
substantially positive as body size increased would have been removed by
selection before reaching large size. The flatness is a survivorship result. The
species we can observe are, by construction, the ones for which the derivative
was held near zero.

### The hypertumour correction

Nagy's model adds a term the standard framework lacks. A tumour of size $S$
requires angiogenic investment scaling with $S$, and within it, sub-clones arise
at a rate proportional to the tumour's own cell count and division rate. A
sub-clone that defects on angiogenesis has a local growth advantage and a global
cost. The time for such a defector to appear scales down with tumour size, while
the time for a tumour to become lethal scales *up* with host size — a lethal
tumour in a whale must be far larger in absolute terms than one in a mouse.

For sufficiently large hosts these curves cross, and the prediction is that
tumours become self-limiting before they become lethal. That is the mechanism's
appeal: it produces size-dependent protection with no species-specific genetics
at all. It also makes a testable prediction — that large animals should carry
many more benign, stalled neoplasms than small ones — which has not yet been
tested at the scale required.
