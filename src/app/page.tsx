import Image from 'next/image'
import Link from 'next/link'

import {
  currentChapter,
  experience,
  hero,
  openSource,
  personalNotes,
  profile,
  skills,
} from '@/lib/portfolio'

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
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:gap-16">
          <div className="motion-enter motion-delay-1">
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
              {hero.eyebrow}
            </p>
            <h1 className="mt-6 max-w-[12ch] font-[family-name:var(--font-display)] text-[clamp(3.2rem,7vw,6rem)] leading-[0.94] tracking-[0.2px] text-[color:var(--ink)] sm:max-w-[14ch]">
              {hero.intro}
            </h1>
            <p className="mt-6 max-w-[36rem] text-[1.2rem] leading-8 text-[color:var(--ink)] sm:text-[1.35rem] sm:leading-9">
              {hero.headline}
            </p>
            <p className="mt-7 max-w-[42rem] text-[1.08rem] leading-8 text-[color:var(--ink)] sm:text-[1.16rem] sm:leading-9">
              {hero.supporting}
            </p>

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
                Get in touch
              </Link>
            </div>
          </div>

          <aside className="motion-enter motion-delay-3 grid gap-4 lg:pb-2">
            <div className="overflow-hidden rounded-[1.75rem] border border-[color:var(--line-strong)] bg-[color:var(--surface)]">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/rimil.JPG"
                  alt="Portrait of Rimil Dey"
                  fill
                  sizes="(min-width: 1024px) 30rem, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Rule />

      <section id="chapter" className="scroll-mt-28">
        <div className="mx-auto w-full max-w-[88rem] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[44rem] text-center">
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
              {currentChapter.label}
            </p>
            <p className="mx-auto mt-5 max-w-[40rem] text-[1.08rem] leading-8 text-[color:var(--ink)] sm:text-[1.18rem] sm:leading-9">
              {currentChapter.statement}
            </p>
          </div>
          <div className="reveal-on-scroll mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <blockquote className="max-w-[12ch] font-[family-name:var(--font-display)] text-[clamp(2.1rem,4vw,4rem)] leading-[0.98] tracking-[0.2px] text-[color:var(--ink)]">
              {currentChapter.quote}
            </blockquote>
            <div>
              <ul className="grid gap-5 border-t border-[color:var(--line)] pt-6 text-[color:var(--ink)]">
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

      <section id="ledger" className="scroll-mt-28">
        <div className="mx-auto w-full max-w-[88rem] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[48rem] text-center">
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
              Career ledger
            </p>
            <p className="mx-auto mt-5 max-w-[44rem] text-[1.08rem] leading-8 text-[color:var(--ink)] sm:text-[1.18rem] sm:leading-9">
              A concise record of roles, responsibilities, and outcomes across Deel, Paradime Labs, Appsmith, Rippling, and Springboard.
            </p>
          </div>

          <div className="reveal-on-scroll mt-12 grid gap-10">
            {experience.map((role) => (
              <article key={`${role.company}-${role.period}`} className="grid gap-6 border-t border-[color:var(--line)] pt-6 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
                <div className="grid gap-3">
                  <p className="text-sm leading-7 text-[color:var(--ink)]">{role.period}</p>
                  <div>
                    <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,3.2vw,3rem)] leading-none tracking-[0.2px] text-[color:var(--ink)]">
                      {role.company}
                    </h2>
                    <p className="mt-2 text-base text-[color:var(--ink)]">{role.title}</p>
                  </div>
                </div>
                <ul className="grid gap-2 text-base leading-8 text-[color:var(--ink)]">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="grid grid-cols-[1rem_minmax(0,1fr)] gap-3">
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

      <section id="open-source" className="scroll-mt-28">
        <div className="mx-auto w-full max-w-[88rem] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[48rem] text-center">
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
              Open source
            </p>
            <p className="mx-auto mt-5 max-w-[44rem] text-[1.08rem] leading-8 text-[color:var(--ink)] sm:text-[1.18rem] sm:leading-9">
              Contributions that extend beyond day-to-day product work.
            </p>
          </div>

          <div className="reveal-on-scroll mx-auto mt-12 max-w-[52rem]">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-base leading-8 text-[color:var(--ink)]">
              {openSource.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    target="_blank"
                    className="quiet-underline w-fit text-[color:var(--ink)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Rule />

      <section id="tools" className="scroll-mt-28">
        <div className="mx-auto w-full max-w-[88rem] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[48rem] text-center">
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
              Skills
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-[68rem] overflow-hidden">
            <ul className="no-scrollbar flex items-center justify-start gap-4 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] sm:justify-center sm:gap-6 lg:gap-8">
              {skills.map((skill) => (
                <li key={skill.name} className="flex-none">
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    title={skill.name}
                    width={80}
                    height={80}
                    className="h-14 w-14 max-w-none object-contain opacity-60 grayscale transition duration-200 hover:opacity-90 hover:grayscale-0 sm:h-20 sm:w-20"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Rule />

      <section id="outside-work" className="scroll-mt-28">
        <div className="mx-auto w-full max-w-[88rem] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto max-w-[48rem] text-center">
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
              Outside work
            </p>
          </div>

          <div className="mx-auto mt-12 grid gap-10 lg:grid-cols-3 lg:gap-12">
            {personalNotes.map((item) => (
              <article key={item.label} className="grid content-start gap-3 border-t border-[color:var(--line)] pt-6">
                <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
                  {item.label}
                </p>
                <div className="grid gap-2">
                  {item.emphasis === 'large-link' ? (
                    <h2 className="max-w-[30rem] font-[family-name:var(--font-display)] text-[clamp(1.7rem,2.6vw,2.3rem)] leading-[1.12] text-[color:var(--ink)]">
                      {item.title}
                    </h2>
                  ) : item.href ? (
                    <Link
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      className="quiet-underline w-fit max-w-[30rem] text-base leading-8 text-[color:var(--ink)]"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <h2 className="max-w-[30rem] text-base leading-8 text-[color:var(--ink)]">
                      {item.title}
                    </h2>
                  )}

                  {item.body ? (
                    <p className={`max-w-[30rem] ${item.bodySmall ? 'text-sm leading-7' : 'text-base leading-8'} text-[color:var(--ink)]`}>
                      {item.body}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Rule />

      <section id="contact" className="scroll-mt-28">
        <div className="mx-auto w-full max-w-[88rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="mx-auto max-w-[48rem] text-center reveal-on-scroll">
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
              Closing note
            </p>
            <h2 className="mx-auto mt-5 max-w-[18ch] font-[family-name:var(--font-display)] text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.96] tracking-[0.2px] text-[color:var(--ink)]">
              If you’d like to connect, feel free to reach out.
            </h2>
          </div>

          <div className="reveal-on-scroll mx-auto mt-12 grid max-w-[26rem] justify-items-center gap-4 text-center">
            <Link href={`mailto:${profile.contact.email}`} className="quiet-underline delight-shift w-fit text-lg text-[color:var(--ink)] hover:text-[color:var(--accent)]">
              {profile.contact.email}
            </Link>
            <Link href={profile.contact.linkedin} target="_blank" className="quiet-underline delight-shift w-fit text-base text-[color:var(--ink)] hover:text-[color:var(--ink)]">
              LinkedIn
            </Link>
            <Link href={profile.contact.github} target="_blank" className="quiet-underline delight-shift w-fit text-base text-[color:var(--ink)] hover:text-[color:var(--ink)]">
              GitHub
            </Link>
            <Link href={profile.contact.resume} target="_blank" className="quiet-underline delight-shift w-fit text-base text-[color:var(--ink)] hover:text-[color:var(--ink)]">
              Resume
            </Link>
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
