# Site architecture

## Primary navigation
- Home
- About
- Projects

Keep navigation intentionally small. Remove ghost links to pages that do not exist.

## Page roles

### 1. Home
Purpose: convert first-time evaluators quickly.

#### Section order
1. Hero
2. Selected strengths
3. Experience snapshot
4. Selected work / OSS proof
5. Contact / CTA footer

#### Hero content model
- Eyebrow: location / current role / availability
- H1: senior frontend positioning
- Supporting copy: 1–2 sentences
- CTA group:
  - View resume
  - Email Rimil
  - Explore work
- Optional compact profile image if it serves tone and performance

#### Selected strengths
Use 3 editorial proof blocks, not a dense grid of badges.
Possible themes:
- Redesigning product surfaces with clarity and responsiveness
- Building performant and maintainable frontend systems
- Partnering across design, product, and engineering

#### Experience snapshot
Show recognizable companies and current role first.
Format should support fast scanning on mobile and desktop.
Avoid full resume density on homepage.

#### Work proof
Split into two categories if useful:
- selected projects
- open source contributions

### 2. About
Purpose: deepen confidence and humanize the story.

#### Sections
1. Intro narrative
2. Working style / principles
3. Selected career path highlights
4. Contact links

### 3. Projects
Purpose: provide proof without overwhelming.

#### Structure
- Selected projects
- Open source contributions

Each item should include:
- name
- short context
- why it matters
- destination link

## Footer
Keep minimal but useful.
- repeat core navigation
- contact path
- copyright

## URL strategy
- `/`
- `/about`
- `/projects`

No unnecessary extra routes until there is enough content to justify them.

## Heading hierarchy
### Home
- H1: core role statement
- H2: each major section
- H3: individual work or experience items where needed

### About / Projects
- one H1 each
- H2s for major sections
- H3s for entries

## Structured data recommendation
Use `Person` schema on the site root or layout if content supports it:
- name
- url
- sameAs links
- jobTitle
- worksFor or alumniOf only if represented truthfully

## SEO notes
- titles should follow a consistent pattern
- descriptions should be page-specific and human-readable
- canonical should match preferred production URLs
- social preview metadata should be defined centrally and overridden per page when needed
