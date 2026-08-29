# 0006 — No AI at runtime; AI as a private authoring tool

**Status:** accepted · 2026-08-29

## Context

A knowledge base is the archetypal candidate for a chatbot, semantic search and
model-generated recommendations. The requirement explicitly forbids all of it,
and the reasoning is worth recording rather than merely obeying.

## Decision

The published site contains **no** LLM calls, chatbot, vector database, RAG,
embeddings, recommendation model, or agent orchestration. It is static files.

AI is used privately by the maintainer as a research and drafting assistant,
with reusable prompts in [`../ai-prompts/`](../ai-prompts/). Every entry is
human-checked against real sources and explicitly published.

## Why

**Confident fabrication is the specific failure this product cannot absorb.**
The site's value is accurate attribution — who said it, when, in which text.
Language models generate DOIs, page numbers and origin stories that are exactly
plausible and entirely false. A cited claim is a promise, and a system that can
silently break that promise at request time cannot make it.

**Recommendations are content, not inference.** "Where to go next" comes from
relationships an author wrote and explained. Each suggestion displays its
reason — *"Gödel's construction is the Liar sentence made arithmetical"* — which
is more useful than a similarity score and can be corrected when wrong. An
embedding model would produce plausible neighbours with no explanation and no
way to fix a bad one.

**It would invert the cost model.** A static site costs approximately nothing
and needs no attention. Runtime inference adds per-request cost, latency, an API
key, rate limits, an availability dependency, and a vendor whose model will be
deprecated. For a project meant to be maintained by one person for years, that
is the largest ongoing liability available.

**The failure modes are worse than the alternative.** A chatbot that
hallucinates on a site whose entire premise is careful sourcing damages the
thing the site exists to provide. A search box that occasionally returns nothing
does not.

## Where AI genuinely helps, and is used

Outside the runtime, with a human gate:

- finding significant paradoxes missing from the collection
- researching origin, transmission and competing interpretations
- locating primary sources and references *for a human to verify*
- drafting into the site's schema
- reviewing drafts for unsupported claims and misclassification
- flagging likely duplicates

The prompts are written specifically to counter the failure modes above: they
require established facts to be separated from disputed ones and from tradition,
they forbid inventing identifiers, and they ask for the model's least-confident
claims to be listed explicitly.

## Consequence

The product works completely without AI, which means it also works when a
provider changes its terms, raises its prices, or shuts down.
