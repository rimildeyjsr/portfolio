import Image from 'next/image'
import Link from 'next/link'

import portraitImage from '@/images/portrait.webp'
import {
  currentChapter,
  experience,
  hero,
  openSource,
  profile,
  proofThemes,
  selectedSignals,
  skills,
} from '@/lib/portfolio'

function Metric({ children }: { children: React.ReactNode }) {
  return <span className="text-[color:var(--accent)]">{children}</span>
}

function Rule() {
  return <div className="mx-auto w-full max-w-[88rem] border-t border-[color:var(--line)] px-5 sm:px-8 lg:px-12" />
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    url: profile.contact.website,
    email: profile.contact.email,
    sameAs: [profile.contact.linkedin, profile.contact.github],
  }

  return (
    <>
      <section className="mx-auto w-full max-w-[88rem] px-5 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:px-12 lg:pb-24">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:gap-16">
          <div className="motion-enter motion-delay-1">
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--muted)]">
              {hero.eyebrow}
            </p>
            <h1 className="mt-6 max-w-[11ch] font-[family-name:var(--font-display)] text-[clamp(3.4rem,10vw,8rem)] leading-[0.92] tracking-[-0.05em] text-[color:var(--ink)] sm:max-w-[12ch]">
              {hero.headline}
            </h1>
            <p className="mt-7 max-w-[38rem] text-[1.12rem] leading-8 text-[color:var(--ink)] sm:text-[1.25rem] sm:leading-9">
              {hero.dek}
            </p>
            <p className="mt-5 max-w-[42rem] text-base leading-8 text-[color:var(--muted)]">
              {hero.supporting}
            </p>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-y border-[color:var(--line)] py-5 text-sm text-[color:var(--muted)]">
              {selectedSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-2">
                  <dt className="sr-only">Selected signal</dt>
                  <dd>
                    <Metric>{signal}</Metric>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href={profile.contact.resume}
                target="_blank"
                className="button-editorial inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--ink)] px-5 text-sm text-[color:var(--paper)] hover:bg-[color:color-mix(in_srgb,var(--ink)_92%,var(--accent)_8%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--paper)]"
              >
                View resume
              </Link>
              <Link
                href={`mailto:${profile.contact.email}`}
                className="button-editorial inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--line-strong)] px-5 text-sm text-[color:var(--ink)] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--paper)]"
              >
                Email Rimil
              </Link>
              <Link
                href="#ledger"
                className="quiet-underline delight-shift inline-flex min-h-12 items-center justify-center rounded-full border border-transparent px-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--paper)]"
              >
                Browse experience
              </Link>
            </div>
          </div>

          <aside className="motion-enter motion-delay-3 grid gap-4 lg:pb-2">
            <div className="overflow-hidden rounded-[1.75rem] border border-[color:var(--line-strong)] bg-[color:var(--surface)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={portraitImage}
                  alt="Portrait of Rimil Dey"
                  sizes="(min-width: 1024px) 30rem, 100vw"
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="grid gap-4 rounded-[1.5rem] border border-[color:var(--line-strong)] bg-white/80 p-6">
              <div>
                <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  Present chapter
                </p>
                <p className="mt-3 max-w-[28rem] text-lg leading-8 text-[color:var(--ink)]">
                  Working across payroll, payments, and card surfaces with a focus on readability, responsiveness, and frontend discipline.
                </p>
              </div>
              <dl className="grid gap-4 border-t border-[color:var(--line)] pt-4 text-sm text-[color:var(--muted)] sm:grid-cols-2">
                <div>
                  <dt className="uppercase tracking-[0.16em]">Email</dt>
                  <dd className="delight-shift mt-2 text-[color:var(--ink)]">{profile.contact.email}</dd>
                </div>
                <div>
                  <dt className="uppercase tracking-[0.16em]">LinkedIn</dt>
                  <dd className="delight-shift mt-2 text-[color:var(--ink)]">linkedin.com/in/rimildeyjsr</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <Rule />

      <section id="chapter" className="scroll-mt-28">
        <div className="mx-auto grid w-full max-w-[88rem] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:px-12">
          <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--muted)]">
            {currentChapter.label}
          </p>
          <div className="reveal-on-scroll grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <blockquote className="max-w-[12ch] font-[family-name:var(--font-display)] text-[clamp(2.1rem,4vw,4rem)] leading-[0.98] tracking-[-0.045em] text-[color:var(--ink)]">
              {currentChapter.quote}
            </blockquote>
            <div>
              <p className="max-w-[44rem] text-[1.08rem] leading-8 text-[color:var(--ink)] sm:text-[1.18rem] sm:leading-9">
                {currentChapter.statement}
              </p>
              <ul className="mt-8 grid gap-5 border-t border-[color:var(--line)] pt-6 text-[color:var(--muted)]">
                {currentChapter.bullets.map((bullet) => (
                  <li key={bullet} className="grid grid-cols-[0.9rem_minmax(0,1fr)] gap-4 text-base leading-8">
                    <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]/75" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Rule />

      <section id="evidence" className="scroll-mt-28">
        <div className="mx-auto w-full max-w-[88rem] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Selected evidence
            </p>
            <p className="max-w-[48rem] text-[1.08rem] leading-8 text-[color:var(--ink)] sm:text-[1.18rem] sm:leading-9">
              Not a wall of skills, and not a collection of generic project cards — just a few proof points that show how the work lands in real products.
            </p>
          </div>

          <div className="reveal-on-scroll mt-10 grid gap-8 lg:grid-cols-3 lg:gap-10">
            {proofThemes.map((theme, index) => (
              <article
                key={theme.title}
                className={`grid content-start gap-4 border-t border-[color:var(--line)] pt-6 ${index === 0 ? 'motion-delay-1' : index === 1 ? 'motion-delay-2' : 'motion-delay-3'}`}
              >
                <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  {theme.kicker}
                </p>
                <h2 className="max-w-[12ch] font-[family-name:var(--font-display)] text-[clamp(2rem,3vw,2.8rem)] leading-[1.02] tracking-[-0.045em] text-[color:var(--ink)]">
                  {theme.title}
                </h2>
                <p className="max-w-[34rem] text-base leading-8 text-[color:var(--muted)]">
                  {theme.body}
                  <Metric>{theme.metric}</Metric>
                  {'suffix' in theme && theme.suffix ? theme.suffix : '.'}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      <section id="ledger" className="scroll-mt-28">
        <div className="mx-auto w-full max-w-[88rem] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Career ledger
            </p>
            <p className="max-w-[50rem] text-[1.08rem] leading-8 text-[color:var(--ink)] sm:text-[1.18rem] sm:leading-9">
              A concise record of roles, responsibilities, and outcomes across Cercli, Deel, Paradime Labs, Appsmith, Rippling, and Springboard.
            </p>
          </div>

          <div className="reveal-on-scroll mt-10 grid gap-10">
            {experience.map((role) => (
              <article key={`${role.company}-${role.period}`} className="grid gap-6 border-t border-[color:var(--line)] pt-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
                <div className="grid gap-3">
                  <p className="text-sm leading-7 text-[color:var(--muted)]">{role.period}</p>
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,3.2vw,3rem)] leading-none tracking-[-0.05em] text-[color:var(--ink)]">
                      {role.company}
                    </h2>
                    <p className="mt-2 text-base text-[color:var(--muted)]">{role.title}</p>
                  </div>
                </div>
                <ul className="grid gap-4 text-base leading-8 text-[color:var(--muted)]">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="grid grid-cols-[1rem_minmax(0,1fr)] gap-4">
                      <span className="mt-3 font-[family-name:var(--font-display)] text-[1.4rem] leading-none text-[color:var(--accent)]" aria-hidden="true">
                        ·
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      <section>
        <div className="mx-auto grid w-full max-w-[88rem] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <div className="reveal-on-scroll border-t border-[color:var(--line)] pt-6">
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Open source
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,3vw,2.8rem)] leading-[1.02] tracking-[-0.045em] text-[color:var(--ink)]">
              Contributions that extend beyond day-to-day product work
            </h2>
            <ul className="mt-6 grid gap-3 text-base leading-8 text-[color:var(--muted)]">
              {openSource.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="reveal-on-scroll border-t border-[color:var(--line)] pt-6">
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Core tools
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,3vw,2.8rem)] leading-[1.02] tracking-[-0.045em] text-[color:var(--ink)]">
              A focused stack shaped by frontend depth rather than buzzwords
            </h2>
            <ul className="mt-6 grid gap-3 text-base leading-8 text-[color:var(--muted)] sm:grid-cols-2">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Rule />

      <section id="contact" className="scroll-mt-28">
        <div className="mx-auto grid w-full max-w-[88rem] gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-16 lg:px-12">
          <div className="reveal-on-scroll">
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Closing note
            </p>
            <h2 className="mt-5 max-w-[12ch] font-[family-name:var(--font-display)] text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.96] tracking-[-0.05em] text-[color:var(--ink)]">
              If the work needs care, clarity, and strong frontend judgment, let’s talk.
            </h2>
          </div>

          <div className="reveal-on-scroll grid content-end gap-4 border-t border-[color:var(--line)] pt-6 lg:border-t-0 lg:border-l lg:pl-10">
            <Link href={`mailto:${profile.contact.email}`} className="quiet-underline delight-shift w-fit text-lg text-[color:var(--ink)] hover:text-[color:var(--accent)]">
              {profile.contact.email}
            </Link>
            <Link href={profile.contact.linkedin} target="_blank" className="quiet-underline delight-shift w-fit text-base text-[color:var(--muted)] hover:text-[color:var(--ink)]">
              LinkedIn
            </Link>
            <Link href={profile.contact.github} target="_blank" className="quiet-underline delight-shift w-fit text-base text-[color:var(--muted)] hover:text-[color:var(--ink)]">
              GitHub
            </Link>
            <Link href={profile.contact.resume} target="_blank" className="quiet-underline delight-shift w-fit text-base text-[color:var(--muted)] hover:text-[color:var(--ink)]">
              Resume
            </Link>
            <p className="pt-4 text-sm leading-7 text-[color:var(--muted)]">
              Premium editorial presentation, resume-grounded content, and a recruiter-friendly reading flow designed for fast scanning.
            </p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
