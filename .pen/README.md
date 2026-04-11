# .pen workspace

This folder contains the pre-code design artifacts for rebuilding Rimil Dey's portfolio to a production-grade quality bar.

## Files
- `system.pen.json` — Pencil-style system context, tokens, and guardrails
- `content.pen.json` — resume-derived content model and homepage narrative source
- `editorial-dossier.pen.json` — main Pencil canvas for the single-page editorial concept
- `swarm-plan.pen.json` — suggested parallel review lenses for typography, layout, accessibility, and performance
- `design-brief.md` — approved high-level UX/UI direction
- `site-architecture.md` — earlier structural thinking retained as supporting notes
- `implementation-guardrails.md` — non-negotiable engineering constraints to enforce during build

## Working rules
- Design first, code second.
- Pencil JSON files are the canvas/source of truth for the next implementation pass.
- Every page or section must justify its existence for hiring, consulting, or professional credibility.
- Mobile-first decisions win when tradeoffs appear.
- Preserve semantic HTML, accessibility, and crawlable content.
- Prefer static rendering and minimal JS.
