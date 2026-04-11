# Implementation guardrails

## Responsive design
- Mobile-first layout decisions only.
- Preserve hierarchy at 320px and up.
- Use fluid type for marketing/editorial headings where appropriate.
- Constrain paragraph width to readable measures.
- Avoid giant empty space on ultrawide screens with max-width composition.
- No hover-only critical interactions.
- Keep touch targets comfortable and visible.

## Performance
- Prefer server-rendered/static content.
- Minimize client components and JS.
- Replace raw `img` usage with optimized image handling where meaningful.
- Reserve space for all media to avoid layout shift.
- Use modern image formats and lazy-load non-critical media.
- Avoid heavy animation libraries unless there is a strong user-facing reason.
- Keep typography performant; use system or carefully loaded web fonts.

## SEO
- Semantic landmarks: header, nav, main, footer.
- One clear H1 per page.
- Page-specific metadata with title, description, canonical, OG, Twitter.
- Use descriptive alt text for meaningful images and empty alt for decorative ones.
- Keep primary content in HTML, not hidden behind JS.
- Add structured data only if it truthfully matches rendered content.

## Accessibility
- WCAG-conscious contrast by default.
- Clear focus states on all interactive controls.
- Keyboard reachable navigation and CTAs.
- Reduced motion support for non-essential animation.
- Use native elements before ARIA.
- Social and icon-only controls must have accessible names.

## Code quality
- Clean page composition with reusable primitives where helpful.
- Separate content from presentation when sensible.
- Remove broken or unused navigation references.
- Avoid deeply nested wrappers unless structurally necessary.
- Keep classes intentional and maintainable.

## Validation before ship
- Build cleanly.
- Check mobile, tablet, laptop, and large desktop layouts.
- Validate metadata coverage.
- Re-test keyboard flow and focus visibility.
- Review image optimization and layout shift risks.
