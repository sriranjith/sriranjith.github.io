---
title: Occam's Razor
slug: occams-razor
alternateNames:
  - Ockham's Razor
  - Law of Parsimony
  - Principle of Parsimony
summary: >-
  Among competing explanations that fit the evidence equally, prefer the one with the fewest unnecessary assumptions. The razor does not guarantee truth — the simplest explanation is often wrong — but it is the correct starting prior when evidence does not yet distinguish between competing theories.
hook: >-
  When two explanations fit the evidence equally, which should you believe? The
  one that assumes less.
era: medieval
date: c. 1320
year: 1320
origin: >-
  Associated with the 14th-century English friar William of Ockham, though the
  principle appears in various forms in earlier philosophers including Aristotle,
  Ptolemy, and Duns Scotus. Ockham's formulation was: "Entities are not to be
  multiplied beyond necessity" (Entia non sunt multiplicanda praeter necessitatem).
  The "razor" metaphor — cutting away unnecessary assumptions — comes from later
  interpreters.
people: []
domains:
  - philosophy
  - mathematics
  - computer-science
types:
  - knowledge
  - decision-making
  - observation
nature: counterintuitive-result
kind: principle
difficulty: beginner
status: explained
renown: landmark
concepts:
  - Parsimony
  - Hypothesis selection
  - Regularisation
  - Model complexity
  - Bayesian inference
  - Overfitting
relationships:
  - kind: related
    to: goodharts-law
    note: Goodhart's Law concerns what happens when you optimise a proxy beyond its range. Occam's Razor is a principle about not adding assumptions beyond what is needed — which is the prior that makes Goodhart's Law meaningful.
references:
  - source: sep-william-ockham
    role: encyclopedia
    note: Comprehensive overview of Ockham's logic and the parsimony principle, with careful attention to what Ockham actually wrote.
furtherReading:
  - title: "William of Ockham — Stanford Encyclopedia of Philosophy"
    url: https://plato.stanford.edu/entries/ockham/
  - title: "Occam's Razor — Less Wrong"
    url: https://www.lesswrong.com/tag/occams-razor
publishing:
  state: published
  created: 2026-08-31
  updated: 2026-08-31
---

## Discover

Two doctors look at an X-ray. The patient has a persistent fever, night sweats,
and weight loss. The X-ray shows a suspicious shadow on the lung.

One doctor says: "This is most likely tuberculosis. It explains all three
symptoms, it's consistent with the X-ray, and we see it regularly in this region."

The other says: "It could be lymphoma, coexisting with an undiagnosed fungal
infection, with the weight loss explained by stress. Or it could be—"

The first doctor is applying Occam's Razor. Tuberculosis is one entity that
explains all the observations. The second doctor is multiplying entities
unnecessarily — invoking several separate causes where one will do.

The razor says: prefer the first explanation until the evidence requires
something else.

## Understand

Occam's Razor is not a claim about what is true. It is a claim about what to
believe, provisionally, when multiple explanations are consistent with the same
evidence.

The principle is usually stated as "the simplest explanation is best," but this
is imprecise. "Simple" is ambiguous — simple to understand? Short to state? The
correct formulation is about **assumptions**: the explanation that introduces
fewer unneeded assumptions.

An assumption is "unneeded" if removing it still allows the explanation to
account for the observed evidence. If you need to posit three separate entities
where one would do, the three-entity explanation is not preferred — not because
entities don't exist, but because you haven't shown they're necessary.

### What the razor cuts

**Redundant causes.** If two symptoms can be explained by one disease, do not
posit two diseases until you have evidence for the second.

**Unobservable machinery.** If an explanation works equally well without positing
a hidden mechanism, the mechanism is unneeded until evidence for it appears.

**Ad hoc patches.** If a theory requires special explanations for every
exception, and a competing theory handles the exceptions naturally, the patched
theory has more assumptions, not fewer.

### What the razor does not cut

**Complexity that is required.** If the world is complex, Occam's Razor does not
simplify it. It says prefer the less complex explanation, not that the less
complex explanation is true. Einstein is supposed to have said: "Everything
should be made as simple as possible, but no simpler." The razor is the first
part; "no simpler" is the constraint.

**Established entities.** The razor says do not multiply entities *beyond
necessity*. Entities that are already established — by evidence, by prior
argument — are not being multiplied.

## Examples

| Choice | Occam's Razor preferred | Why |
| --- | --- | --- |
| Motion of planets: epicycles vs. ellipses | Ellipses (Kepler) | Fewer adjustable parameters; simpler model |
| Life on Earth: special creation vs. evolution | Evolution | One mechanism explains the diversity; special creation requires a separate explanation for each species |
| Coin flips 10 heads: fair coin vs. biased | Fair coin (usually) | No extra parameter needed; 10 heads in a row is unlikely but not impossible |
| Ghost explains creak: ghost vs. thermal expansion | Thermal expansion | Posits no new entity; thermal expansion is already known |

## Explore

**Occam's Razor and Bayesian reasoning.** In Bayesian probability, Occam's Razor
has a formal justification. A model with more parameters can fit more data —
but it requires assigning probability mass over more possible values, so its
prior probability for any specific outcome is lower. A simpler model concentrates
its predictions and makes higher-probability specific predictions. When evidence
is consistent with both models, the simpler model has a higher posterior
probability. The razor is Bayesian.

**Overfitting in machine learning.** The razor has a precise technical
instantiation in machine learning: **regularisation**. A model that perfectly
fits the training data but performs poorly on new data has overfit — it has
learned the noise, not the pattern. Regularisation penalises complexity, forcing
the model to find the simplest pattern consistent with the data. L1
regularisation (which drives coefficients to zero) is Occam's Razor implemented
as a penalty term.

**Where the razor misleads.** The world is sometimes genuinely complex.
The simple explanation is often wrong. Tuberculosis sometimes coexists with
another disease. The patient sometimes has the rare thing. Occam's Razor is
a tiebreaker for competing hypotheses that fit the evidence equally well; it is
not a substitute for looking for more evidence.

**Multiverse theories.** Physicists who propose theories that require many
unobservable universes to explain our one observable universe are challenged by
Occam's Razor: the theory multiplies unobservable entities enormously. The
defenders respond that the number of fundamental *laws* is smaller in the
multiverse theory — it is a disagreement about what "simplicity" means when
some entities are observable and some are not.

## History

**c. 320 BCE.** Aristotle states something like the principle: "We may assume
the superiority, other things being equal, of the demonstration which derives
from fewer postulates."

**c. 1320.** William of Ockham develops the principle most systematically.
He did not apply the metaphor of a razor; he wrote in technical Latin about
the conditions under which postulating additional entities is justified.

**14th–17th centuries.** The principle is widely used in medieval and early
modern philosophy. Johannes Kepler uses parsimony in choosing ellipses over
epicycles. Isaac Newton explicitly cites parsimony as one of his four "Rules
of Reasoning in Philosophy" in *Principia Mathematica* (1687).

**19th century.** The name "Occam's Razor" appears in print. William Hamilton
coins the razor metaphor around 1852.

**20th century.** Karl Popper, in developing falsificationism, treats parsimony
as a desideratum of scientific theories. Bayesian statisticians formalise the
razor as a consequence of probability theory.

## Why It Matters

**Scientific reasoning.** Parsimony is one of the core principles of scientific
explanation. It prevents the multiplication of theoretical machinery beyond what
evidence requires, keeping theories falsifiable and comparisons clean.

**Medicine.** Diagnostic reasoning under Occam's Razor — look for one cause
before postulating two — prevents over-investigation and over-treatment. The
competing principle, "Hickam's dictum," notes that patients can have multiple
diagnoses, and the rare thing does sometimes happen. Both are needed.

**Epistemology.** When we cannot determine truth directly, we need a principle
for choosing among equally-fitting explanations. Occam's Razor is one of the
most durable such principles — not because simplicity guarantees truth, but
because complexity, without evidential support, is a form of claiming more than
you know.

## Modern Relevance

**Machine learning regularisation.** Every machine learning framework that uses
L1, L2, or elastic net regularisation is implementing a version of Occam's
Razor: penalise unnecessary complexity in the model. Without regularisation,
models overfit. Regularisation is the razor made computational.

**Sycophancy in language models.** Models that learn to agree with users, add
unnecessary caveats, or generate elaborate but unsupported explanations are
violating Occam's Razor: they are adding explanatory machinery beyond what
the evidence (the training data and the prompt) requires. The cleanest model
of the user's intent is usually also the most honest one.

**Conspiracy theories.** Conspiracy theories systematically violate Occam's
Razor: they require many additional entities (the conspirators, their
coordination mechanisms, their motivations, their silence) where a simpler
explanation (the ordinary, uncoordinated explanation) fits the evidence equally
well. The razor is one of the clearest tools for articulating why conspiracy
theories should have low prior probability.
