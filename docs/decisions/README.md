# Architecture decisions

Short records of the choices that shaped this project, written so a future
maintainer can tell the difference between a deliberate decision and an
accident — and knows what to reconsider if circumstances change.

Each one states the trade-offs accepted, not only the option chosen.

| # | Decision |
| --- | --- |
| [0001](0001-git-backed-content.md) | Content lives in Git as Markdown and YAML |
| [0002](0002-own-the-content-loader.md) | Read content with our own loader, not Astro's content collections |
| [0003](0003-local-only-admin.md) | The admin runs on localhost and is never deployed |
| [0004](0004-search-and-filtering.md) | A generated JSON index instead of a search library |
| [0005](0005-layered-markdown-sections.md) | Progressive depth as `## ` sections in one Markdown body |
| [0006](0006-no-ai-in-the-product.md) | No AI at runtime; AI as a private authoring tool |

## The question behind all of them

> Will this make maintaining 500 paradoxes easier or harder?

Where the answer was "harder", the feature was cut regardless of how good it
would have been. The complexity belongs in the quality and structure of the
content, not in the software.
