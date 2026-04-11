# Portfolio design brief — Rimil Dey

## 1. Feature summary
This site is a premium editorial portfolio for Rimil Dey, a senior frontend engineer with seven years of experience across product-focused companies including Cercli, Deel, Paradime Labs, Appsmith, Rippling, and Springboard. Its job is to convert fast-scanning evaluators — especially recruiters, engineering managers, and design-minded product teams — into high-confidence leads for full-time hiring while also supporting consulting inquiries and general professional presence.

The portfolio must feel calm, sophisticated, and modern, with the polish of an editorial publication rather than a generic developer template. It should quickly establish credibility, reveal evidence of product thinking and engineering quality, and make next-step actions obvious without clutter.

## 2. Primary user action
The primary user action is: **decide quickly that Rimil is a strong senior frontend/product engineering candidate worth contacting or advancing.**

Secondary actions:
- open resume
- visit LinkedIn / GitHub
- review selected work and experience
- send email or start a conversation

## 3. Design direction
The visual direction is **editorial / premium**.

Reference qualities to borrow:
- **Vogue**: strong typography, clean pacing, confidence through restraint
- **Shopify Editions**: elevated composition, storytelling rhythm, premium presentation

How this should express the design context:
- calm surfaces, not loud ones
- sophisticated typography with visible hierarchy
- generous but disciplined spacing
- imagery used sparingly and purposefully
- emphasis on narrative credibility over decorative novelty
- subtle motion only where it clarifies transitions or adds refinement

Anti-direction:
- no generic startup gradients
- no “developer dashboard” homepage
- no noisy skill pills as the main story
- no card soup
- no gimmicky animations or hover-dependent interactions

## 4. Layout strategy
### Overall structure
The site should be compact, focused, and easy to scan.

Recommended top-level structure:
1. **Home** — concise high-impact overview
2. **About** — personal background, working style, values
3. **Projects / Selected work** — curated proof, OSS, meaningful project links

### Homepage information flow
1. **Hero**
   - clear statement of role and specialty
   - short editorial intro positioning Rimil as a senior frontend engineer with product and design sensibility
   - primary CTA: view resume / contact
   - secondary CTA: explore work
2. **Selected highlights**
   - 3 concise proof points showing strengths like redesigns, performance, systems thinking, and cross-functional impact
3. **Experience snapshot**
   - current role first, then recognizable company history
   - enough detail to build confidence, not a full resume dump
4. **Selected work / OSS proof**
   - curated entries with clear relevance
5. **Contact / next step**
   - low-friction reach-out area

### Spatial behavior
- mobile: stacked, calm, obvious CTA placement, readable line lengths
- tablet: wider rhythm, selective two-column moments
- desktop: editorial asymmetry, but still high legibility and strong reading flow
- large desktop: constrained line lengths and composition; avoid vast empty centers or over-stretched text

## 5. Key states
### Default
The page should feel composed, trustworthy, and easy to scan. The visitor should understand who Rimil is, what she is strong at, and what to do next within seconds.

### Mobile state
The hierarchy must remain intact with no overcrowding. CTAs, nav, and role summary must stay visible and readable. Sections should stack in a natural narrative order.

### Empty / low-content state
If some project details are intentionally sparse, the design should still feel editorial and intentional rather than unfinished. Prefer short summaries and external links over placeholder blocks.

### Error state
404 and unexpected routes should feel consistent with the brand tone: clear, calm, and helpful, with an obvious return path.

### Reduced motion state
All non-essential transitions should simplify or disappear. No critical content should rely on animation for discoverability.

### Dark mode state
Dark mode should remain secondary but polished. It should preserve contrast, rhythm, and refinement rather than switching to neon or low-contrast gray-on-black styling.

## 6. Interaction model
- Navigation should be minimal and obvious.
- Homepage CTAs should offer immediate paths to resume, email, and work.
- Hover can enrich but never gate key information.
- Focus states must be highly visible and elegant.
- Any motion should use transform/opacity only and be subtle.
- Social/profile links should be meaningful and clearly labeled.
- External links should behave predictably and feel deliberate.

User flow from entry to action:
1. land on home
2. understand seniority + specialty
3. scan proof of impact and role history
4. choose resume, LinkedIn, GitHub, or work page
5. reach out confidently

## 7. Content requirements
### Essential homepage content
- one strong H1
- current role and seniority
- 1–2 sentence professional summary
- 3 selected strength/impact statements
- concise experience snapshot
- selected work / OSS proof
- clear contact options

### About page content
- professional story and working style
- how Rimil thinks about frontend/product work
- optional personal details, but only if they support approachability

### Projects page content
- curated, not exhaustive
- selected projects and OSS contributions grouped clearly
- brief context for why each item matters

### Content priorities from resume
Emphasize:
- complete redesign and responsive refactor work
- dashboard/product surface design improvement
- performance and reliability gains
- testing discipline and maintainability
- documentation and collaboration
- measurable outcomes where available

De-emphasize:
- long unordered skill lists
- exhaustive bullet dumping
- weak or old projects without clear relevance

## 8. Recommended references for build
Most useful implementation references during coding:
- responsive design
- spatial design
- typography
- interaction design
- color and contrast
- UX writing

## 9. Open questions
These can be finalized during build without blocking the design direction:
- whether to include a formal case-study style section on the homepage or keep project proof lighter and link outward
- whether resume should open as a PDF, hosted page, or downloadable asset
- whether dark mode should remain toggleable or be reduced to a system preference only

## Page recommendation
For the strongest hiring outcome, the homepage should spotlight:
1. identity + role clarity
2. impact-focused experience credibility
3. selected proof of work

That is a better first impression than leading with a raw skill list or a long autobiographical intro.
