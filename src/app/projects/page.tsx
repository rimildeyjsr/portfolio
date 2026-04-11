import type { Metadata } from 'next'
import Link from 'next/link'

import { openSource, proofThemes, skills } from '@/lib/portfolio'

export const metadata: Metadata = {
  title: 'Selected work',
  description:
    'Selected proof, open source contributions, and core tools for Rimil Dey.',
}

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-[72rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
        Selected work
      </p>
      <h1 className="mt-6 max-w-[12ch] font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,5.5rem)] leading-[0.95] tracking-[0.2px] text-[color:var(--ink)]">
        Proof, contribution, and the stack behind the work.
      </h1>

      <div className="mt-12 grid gap-10">
        {proofThemes.map((theme) => (
          <article key={theme.title} className="grid gap-4 border-t border-[color:var(--line)] pt-6">
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
              {theme.kicker}
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.1rem)] leading-[1.02] tracking-[0.2px] text-[color:var(--ink)]">
              {theme.title}
            </h2>
            <p className="max-w-[48rem] text-base leading-8 text-[color:var(--ink)]">
              {theme.body}
              <span className="text-[color:var(--accent)]">{theme.metric}</span>
              {'suffix' in theme && theme.suffix ? theme.suffix : '.'}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <section className="border-t border-[color:var(--line)] pt-6">
          <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
            Open source
          </p>
          <ul className="mt-5 grid gap-3 text-base leading-8 text-[color:var(--ink)]">
            {openSource.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="border-t border-[color:var(--line)] pt-6">
          <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
            Core tools
          </p>
          <ul className="mt-5 grid gap-3 text-base leading-8 text-[color:var(--ink)] sm:grid-cols-2">
            {skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-16 border-t border-[color:var(--line)] pt-6">
        <Link href="/" className="quiet-underline text-base text-[color:var(--ink)]">
          Return home
        </Link>
      </div>
    </section>
  )
}
