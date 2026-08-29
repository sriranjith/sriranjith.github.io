---
title: The C-value Paradox
slug: c-value-paradox
alternateNames:
  - The C-value Enigma
  - C-paradox
summary: >-
  An onion carries about five times as much DNA as you do. A lungfish carries
  forty times as much. Genome size varies across life by a factor of a hundred
  thousand and tracks organism complexity hardly at all.
era: twentieth-century
date: 1971 (named), 2001 (renamed the C-value enigma)
year: 1971
origin: >-
  Named by Charles A. Thomas Jr. in a 1971 review in the Annual Review of
  Genetics, after two decades of measurements showing that DNA content per
  nucleus is constant within a species but wildly variable between species in no
  interpretable order.
people:
  - charles-thomas
  - t-ryan-gregory
domains:
  - biology
types:
  - measurement
  - aggregation
nature: apparent-contradiction
difficulty: intermediate
status: resolved
concepts:
  - Genome size
  - Non-coding DNA
  - Transposable elements
  - Polyploidy
  - Junk DNA
  - Nucleotypic effects
relationships:
  - kind: related
    to: levinthals-paradox
    note: Two molecular biology puzzles created by treating a number as a proxy for a property — conformations for difficulty, base pairs for complexity.
  - kind: related
    to: moravecs-paradox
    note: Both puncture the same instinct — that the amount of the obvious ingredient should predict the amount of the capability.
references:
  - source: thomas-1971-genetic-organization
    role: primary-source
    note: Where the term "C-value paradox" is introduced.
  - source: ohno-1972-so-much-junk-dna
    role: paper
    note: The origin of "junk DNA", and a load-based argument for why most of a genome cannot be genes.
  - source: doolittle-sapienza-1980-selfish-dna
    role: paper
    note: The selfish DNA explanation for why repetitive sequence accumulates.
  - source: gregory-2001-c-value-enigma
    role: paper
    note: The argument for renaming, and the case that the real questions are still open.
  - source: pellicer-2010-paris-japonica
    role: paper
    note: The measurement of the largest eukaryotic genome then known.
publishing:
  state: published
  created: 2026-08-29
  updated: 2026-08-29
---

## Discover

Every cell in your body carries a set of instructions written in DNA. Human
instructions run to about 3.1 billion letters. Written out at normal book size,
that is roughly a million pages.

You would expect complicated creatures to need longer instructions. A human is a
complicated thing. An onion is an onion.

**An onion has about five times more DNA than you do.**

It gets worse. A marbled lungfish — a fish that breathes air and buries itself in
mud — carries around forty times more DNA than a human. A small white flowering
plant from the mountains of Japan, *Paris japonica*, carries about fifty times
more. Fifty times. It is a plant with four leaves and one flower.

And plenty of things go the other way. A pufferfish has roughly the same number
of genes as you do, in a genome eight times smaller. A carnivorous bladderwort
plant does its whole job with a genome about a fortieth the size of a human's,
and has about as many genes as much larger plants.

Across all living things, DNA quantity varies by more than a hundred thousand
fold. Line the species up by genome size and the order looks essentially random.
Salamanders beat mammals. Some single-celled organisms beat everything.

So what is all that extra DNA for? And why does an onion need so much of it?

## Understand

The **C-value** is simply the amount of DNA in one complete set of chromosomes —
what a sperm or an egg carries. The letter C stands for "constant", chosen by
Hewson Swift in 1950 because the striking early finding was that this number is
*extremely* constant within a species. Every cell of every individual of a
species has the same amount, to within measurement error.

That constancy was itself important evidence. In the years when biologists were
still arguing whether genes were made of protein or DNA, the fact that DNA
content was fixed per species and halved in sperm and eggs was a point in DNA's
favour.

Then people measured more species, and the between-species picture made no sense
at all. Charles Thomas named the problem in 1971: DNA content bears no dependable
relation to how complex an organism appears to be.

### Why it looked like a contradiction

The reasoning that generates the paradox has two steps, and in 1971 both were
reasonable.

**Step one: DNA codes for proteins, and proteins build organisms.** True, and
one of the great results of twentieth-century biology.

**Step two: therefore more DNA means more proteins means a more complicated
organism.** False — and the falseness is entirely in the word "therefore".

Step two assumes that essentially all DNA codes for something. That assumption
was never tested when the paradox was named. It was simply the only picture
available, because there was nothing else DNA was known to do.

### The resolution

Most DNA in a large genome does not code for proteins. In humans, only about 1 to
2 percent of the genome is protein-coding sequence. The rest is a mixture, and
the two biggest contributors explain nearly everything.

**Transposable elements.** These are stretches of DNA whose main activity is
copying themselves to new positions in the genome. They are genomic parasites.
Some copy through an RNA intermediate and paste the copy elsewhere; others cut
and move. They accumulate over evolutionary time, mostly as broken and inactive
remnants, and they are the single largest component of most large genomes. Around
half of the human genome is recognisably derived from them. In genomes like maize
the figure exceeds 80 percent.

Nothing about this requires the extra DNA to benefit the organism. A sequence that
copies itself faster than the genome removes it will accumulate regardless. W.
Ford Doolittle and Carmen Sapienza, and independently Leslie Orgel and Francis
Crick, made this argument in back-to-back papers in *Nature* in 1980 and called it
selfish DNA.

**Polyploidy.** Many lineages, especially plants, have duplicated their entire
genome — sometimes repeatedly. A polyploid has two, four, or more complete copies
of everything. This is common enough in plants that a large fraction of flowering
plant species are descended from a whole-genome duplication, and it produces
enormous genome size differences between close relatives with no complexity
difference whatsoever.

**Everything else.** Introns, which interrupt genes and are spliced out of the
message. Pseudogenes: broken former genes. Satellite DNA, long runs of short
repeats, concentrated at centromeres and telomeres. Regulatory sequence, which is
functional but not coding. And duplicated gene families, most members of which
are inactive.

So the onion answer is: an onion does not need all that DNA. It has accumulated
it — through repeated polyploidy and a large load of transposable elements — and
the cost of carrying it is apparently low enough that nothing has removed it.

### Complexity was the wrong variable

The deeper lesson is that "complexity" was never a measured quantity. It was an
intuition, ranked by how impressive the organism seemed to the person doing the
ranking. Genome size does not correlate with it because there is nothing precise
on the other side of the correlation.

The same trap caught a later generation. When genomes were first sequenced, many
expected humans to have perhaps a hundred thousand genes. The answer came back at
roughly twenty thousand — about the same as a millimetre-long nematode worm, and
fewer than rice. That is now sometimes called the G-value paradox, and it has the
same structure and the same resolution: complexity comes from regulation,
combination and context, not from part count.

## Examples

**The range.**

| Organism | Approximate genome size (1C) | Ratio to human |
| --- | --- | --- |
| *Paris japonica* (a Japanese herb) | ~150 Gb | ~48× |
| Marbled lungfish | ~130 Gb | ~42× |
| Some salamanders (*Necturus*) | ~80–120 Gb | ~30× |
| Onion (*Allium cepa*) | ~16 Gb | ~5× |
| **Human** | **~3.1 Gb** | **1×** |
| Chicken | ~1.2 Gb | ~0.4× |
| Pufferfish (*Takifugu*) | ~0.4 Gb | ~0.13× |
| Bladderwort (*Utricularia gibba*) | ~0.08 Gb | ~0.03× |
| Yeast | ~0.012 Gb | ~0.004× |

Note what is *not* in this table: any relationship to organismal complexity. The
lungfish and the salamander are ordinary vertebrates. The pufferfish has a
vertebrate body plan and a vertebrate gene set in a genome a fifth the size of a
chicken's.

**Close relatives, wildly different genomes.** Within the genus *Allium* —
onions, garlic, leeks — genome sizes differ several-fold. Among frogs the range
exceeds a hundredfold. Among flowering plants generally it exceeds two
thousandfold. These are organisms of comparable complexity by any measure you
care to propose.

**A number to be careful with.** The amoeba *Amoeba dubia* is frequently quoted
as having a 670 Gb genome, over two hundred times human. This figure comes from
a 1960s measurement using methods now known to be unreliable in organisms with
ingested food and endosymbionts in the cell, and it has never been confirmed.
Treat it as folklore rather than data. It appears in a great many textbooks
anyway.

**What the human genome is made of.** Roughly: 1–2% protein-coding exons; about
half derived from transposable elements, of which the Alu and LINE-1 families
alone account for a large share; a substantial fraction in introns; the remainder
in regulatory sequence, structural repeats and material of no identified role.

## Explore

**Is the paradox resolved?** For the question as Thomas posed it, yes, and
uncontroversially. There is no contradiction between DNA content and complexity
once you know that most DNA does not encode proteins. Every genome sequenced
since has confirmed the mechanism, and the composition of large genomes is
directly readable.

T. Ryan Gregory argued in 2001 that continuing to call it a paradox is a mistake
for exactly this reason — a paradox implies a contradiction, and there is none
left. He proposed **C-value enigma** instead, and the term has been widely
adopted. His point was not that the questions are answered. It was that they have
changed:

- What determines how much non-coding DNA a lineage accumulates?
- Why do rates of DNA gain and loss differ so much between lineages?
- Genome size correlates tightly with cell size and inversely with cell division
  rate across many groups. Is this a cause, a consequence, or a coincidence?
- Is there an upper bound, and what enforces it?

Those are open. The mechanism of the *variation* is what remains unexplained; the
existence of the variation is not.

**Three competing accounts of why big genomes exist.**

*Selfish DNA* (Doolittle and Sapienza; Orgel and Crick, 1980). Transposable
elements accumulate because they replicate faster than they are purged. Genome
size is a by-product of an intragenomic arms race, and needs no organism-level
explanation at all.

*Mutational hazard* (Michael Lynch and colleagues, from around 2003). Extra DNA
is slightly deleterious, so it is removed when selection is efficient enough to
see it. Efficiency depends on effective population size. Species with small
populations — large-bodied, long-lived organisms — have weaker purifying
selection and therefore accumulate more junk. Genome size on this account is
mostly a readout of population genetics, not of biology.

*Nucleotypic function* (Thomas Cavalier-Smith, and taken up by Gregory). The bulk
of DNA has a physical role independent of its sequence: it sets nucleus size,
which sets cell size, which affects metabolic rate, developmental rate and body
plan. The correlation between genome size and cell size is one of the strongest
in comparative biology, and salamanders — which have both enormous genomes and
enormous cells, with correspondingly slow development and simplified anatomy —
are the standard case.

These are not exclusive, and the current view mixes them. The disagreement is
about weighting, and it is live.

**The junk DNA argument.** Susumu Ohno coined "junk DNA" in 1972 from a
mutational load calculation: given observed mutation rates, a mammal cannot
maintain more than a certain number of genes under selection, so most of the
genome cannot be genes. The term has caused forty years of confusion, because
"junk" was taken to mean "does nothing" when Ohno meant something closer to "not
under selection as coding sequence".

In 2012 the ENCODE consortium reported that around 80 percent of the human genome
is "biochemically functional", which was widely reported as the death of junk
DNA. The criticism was immediate and, on the whole, persuasive: the definition of
function used was extremely permissive — any reproducible biochemical activity,
including transcription that produces nothing used. Dan Graur and others pointed
out that this definition would classify most of the genome of an onion as
functional too, and that evolutionary conservation, a far stricter test, marks
roughly 8–10 percent of the human genome as under selection. The exchange is
worth knowing because it is a clean example of a result whose substance depended
entirely on an undeclared definition.

## History

**1948–1950.** André Boivin, Roger and Colette Vendrely, and independently Hewson
Swift, established that DNA content per nucleus is constant within a species and
halved in gametes. Swift introduced the term "C-value" for that constant amount.
At the time this was evidence that DNA, not protein, was the hereditary material.

**1950s–1960s.** Genome sizes were measured across an expanding range of species
using densitometry of stained nuclei. The between-species picture became steadily
more confusing. Amphibians, and especially lungfishes and salamanders, turned up
with genomes far larger than mammals.

**1971.** Charles A. Thomas Jr. published "The Genetic Organization of
Chromosomes" in the *Annual Review of Genetics* and gave the problem its name.

**1968–1972.** Roy Britten and David Kohne's work on DNA reassociation kinetics
demonstrated that a large fraction of eukaryotic DNA consists of highly repetitive
sequence, present in hundreds of thousands of copies. This is the empirical result
that made the resolution possible: the extra DNA was visibly repetitive, and
repetitive sequence cannot be a proportional store of information.

**1972.** Susumu Ohno published "So much 'junk' DNA in our genome".

**1977.** Introns were discovered independently by Richard Roberts and Phillip
Sharp, showing that even protein-coding genes are mostly not coding sequence.

**1980.** Doolittle and Sapienza, and Orgel and Crick, published the selfish DNA
argument in consecutive papers in *Nature*.

**2001.** T. Ryan Gregory published his review in *Biological Reviews* proposing
the C-value enigma and setting out the surviving questions, particularly the
relationship between genome size and cell size.

**2001–2004.** The human genome sequence returned a protein-coding gene count of
roughly twenty thousand, well below most predictions, and the same puzzle
reappeared in the new form of the G-value paradox.

**2010.** Jaume Pellicer, Michael Fay and Ilia Leitch measured *Paris japonica* at
about 148.9 picograms per haploid genome, then the largest eukaryotic genome
recorded.

## Why It Matters

**It broke the equation between DNA and information.** Before the resolution, it
was natural to treat a genome as a blueprint whose length reflects the complexity
of what it builds. The C-value paradox is the observation that killed that
picture, and what replaced it — genomes as historical accumulations, shaped by
selfish elements, duplication accidents and the limits of purifying selection —
is much closer to how genomes actually behave.

**It made junk DNA a prediction rather than an excuse.** Ohno's argument and the
C-value data together predicted, before any genome was sequenced, that most of a
large genome would turn out not to be genes. Sequencing confirmed it. That is a
successful prediction from a paradox, which is not common.

**It underpins the modern view of transposable elements.** Once the extra DNA was
identified as largely transposon-derived, an entire field followed: how elements
are silenced, how they occasionally get co-opted into useful roles — including in
the vertebrate adaptive immune system and in placental development — and how they
generate disease when they insert in the wrong place. All of that started from
the question of why onions have so much DNA.

**It is a durable lesson about proxies.** Genome size was adopted as a measure of
complexity because it was the only quantity anyone could measure. It measured
something real; it simply did not measure the thing it was being used for. Fields
adopt proxies like this constantly, and the C-value paradox is the cleanest
available demonstration of how such a proxy fails and how long it takes anyone to
notice.

## Modern Relevance

**Sequencing large genomes is still hard, and the reason is repeats.** The reason
the lungfish, the axolotl and conifer genomes were assembled long after the human
genome is that they are dominated by near-identical repeated sequence, which
short-read sequencing cannot place. Long-read technologies changed this, and the
completion of a truly gap-free human genome sequence in 2022 was largely a matter
of finally resolving the repetitive regions the original draft had skipped. Genome
size is a direct predictor of assembly difficulty and cost, which makes the
C-value a practical planning number for every large sequencing project.

**Conservation and comparative genomics.** Projects sequencing thousands of
vertebrate and plant species have turned genome size from a curiosity into a
measured comparative trait with tens of thousands of data points. The Animal
Genome Size Database, maintained by Gregory, is the standard reference. The
correlations that emerge — with cell size, developmental rate, metabolic rate,
and in plants with seed mass and climate — are the live research questions.

**Crop breeding.** Polyploidy is not merely historical. Bread wheat is
hexaploid, with three complete ancestral genomes and a total size around five
times the human genome. Understanding which copy of a gene is doing what, in a
genome carrying several near-identical copies of everything, is a central
practical problem in plant breeding and in genome editing.

**What "functional" means.** The ENCODE argument is not settled and matters
beyond genetics. Every claim that a fraction of the genome is functional depends
on a definition — biochemical activity, evolutionary conservation, or measurable
phenotypic effect on deletion — and these give answers differing by an order of
magnitude. Anyone reading a percentage should ask which definition produced it.

**A note on framing.** The onion has become the field's standard reality check.
The "onion test", proposed by Gregory, asks anyone claiming a universal function
for non-coding DNA a simple question: whatever you think all that DNA is doing,
why does an onion need five times more of it than a human, and why does one
species of onion need twice as much as another? It is not a rigorous argument. It
is a very effective one.

## Deep Dive

### Units, and reading the literature

Genome size is quoted two ways. Cytometric measurements give mass in picograms of
DNA per haploid nucleus, written 1C. Sequence-based measurements give base pairs.
The conversion is

$$1\ \text{pg} \approx 0.978 \times 10^{9}\ \text{bp}$$

so a genome of 1 pg is about 978 Mb. The human 1C value of roughly 3.2 pg
corresponds to about 3.1 Gb. *Paris japonica* at 148.9 pg is about 146 Gb.

Two cautions when comparing figures. First, 1C is the haploid amount and 2C the
somatic amount for a diploid; papers are not always explicit. Second, for a
polyploid the C-value counts all the chromosome sets present, so a tetraploid's
1C value is roughly double its diploid ancestor's — which is why C-value
comparisons across polyploid series measure ploidy as much as anything else.

### The composition argument, quantitatively

Write the genome size $G$ as a sum of components:

$$G = G_{\text{coding}} + G_{\text{intron}} + G_{\text{TE}} + G_{\text{repeat}} + G_{\text{other}}$$

Across eukaryotes, $G_{\text{coding}}$ is remarkably stable — most eukaryotes
carry between roughly $10^4$ and $4\times10^4$ genes with average coding lengths
around 1–2 kb, giving $G_{\text{coding}}$ in the range of tens of megabases. The
variation in $G$ across five orders of magnitude therefore lives almost entirely
in $G_{\text{TE}}$ and $G_{\text{repeat}}$.

The consequence is that the coding fraction

$$f_{\text{coding}} = \frac{G_{\text{coding}}}{G}$$

falls roughly as $1/G$. In yeast it is around 70 percent; in humans, 1–2 percent;
in a 100 Gb salamander genome, below 0.05 percent. Any correlation between $G$ and
a biological property is therefore overwhelmingly a statement about repetitive
DNA, not about genes. This is the whole resolution expressed as arithmetic.

### Why accumulation is the default

Model the copy number $n$ of an active transposable element family as a birth–death
process with replication rate $\lambda$ per copy per generation and loss rate
$\mu$ per copy per generation, where loss combines deletion and purifying
selection. Then

$$\frac{dn}{dt} = (\lambda - \mu)\,n$$

and copy number grows exponentially whenever $\lambda > \mu$. Because $\lambda$ is
a property of the element and $\mu$ depends on how effectively selection sees a
slightly deleterious insertion, the balance can tip either way in different
lineages with no change in the organism's biology.

Lynch's mutational hazard argument makes $\mu$ explicit. An insertion with
selective disadvantage $s$ is effectively invisible to selection when

$$|s| < \frac{1}{2N_e}$$

where $N_e$ is the effective population size. Large-bodied, long-lived species
have small $N_e$, so a wider band of mildly deleterious insertions drifts to
fixation. This predicts that genome size should correlate inversely with $N_e$
across taxa — a prediction that holds moderately well and is the main empirical
support for the mutational hazard account.

### The nucleotypic correlation

Across a wide range of taxa, cell volume $V$ scales with genome size
approximately as a power law,

$$V \propto G^{\beta}$$

with $\beta$ estimated near 1 in several groups, and nucleus volume scaling
similarly. Because cell volume constrains surface-to-volume ratio and therefore
metabolic exchange, and because a larger cell takes longer to divide, this
produces downstream correlations with developmental rate and, in amphibians, with
morphological simplification — salamanders with the largest genomes tend to lose
digits and simplify their skulls, plausibly because their cells are too large to
build fine structures.

Whether this is a cause of large genomes, a consequence of them, or a shared
consequence of something else is precisely what Gregory's title asks —
"Coincidence, coevolution, or causation?" — and precisely what remains open. The
existence of the correlation is not in doubt; its direction is.
