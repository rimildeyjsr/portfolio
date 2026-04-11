import type { Metadata } from 'next'
import Link from 'next/link'

import { experience, profile } from '@/lib/portfolio'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Background and working approach for Rimil Dey, a senior frontend engineer.',
}

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-[72rem] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
        About
      </p>
      <h1 className="mt-6 max-w-[12ch] font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,5.5rem)] leading-[0.95] tracking-[0.2px] text-[color:var(--ink)]">
        Frontend work shaped by product clarity and durable systems.
      </h1>
      <p className="mt-8 max-w-[46rem] text-[1.08rem] leading-8 text-[color:var(--ink)] sm:text-[1.18rem] sm:leading-9">
        {profile.summary}
      </p>
      <div className="mt-12 grid gap-10 border-t border-[color:var(--line)] pt-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <div className="grid gap-6 text-base leading-8 text-[color:var(--ink)]">
          <p>
            Across recent roles, the work has consistently centered on improving complex
            surfaces, making high-stakes workflows easier to use, and putting stronger frontend
            practices in place so products become easier to maintain over time.
          </p>
          <p>
            That has meant responsive refactors, dashboard improvements, test coverage work,
            enterprise requirements like RBAC and audit logs, and performance improvements tied to
            real user outcomes.
          </p>
          <p>
            The through-line is simple: make the interface clearer, make the system steadier, and
            make the product easier for teams and customers to trust.
          </p>
        </div>
        <aside className="grid gap-4 border-t border-[color:var(--line)] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div>
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
              Currently
            </p>
            <p className="mt-2 text-base text-[color:var(--ink)]">{experience[0]?.title} at {experience[0]?.company}</p>
          </div>
          <div>
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
              Contact
            </p>
            <Link href={`mailto:${profile.contact.email}`} className="quiet-underline mt-2 block w-fit text-base text-[color:var(--ink)]">
              {profile.contact.email}
            </Link>
          </div>
          <div>
            <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
              Return
            </p>
            <Link href="/" className="quiet-underline mt-2 block w-fit text-base text-[color:var(--ink)]">
              Back to home
            </Link>
          </div>
        </aside>
      </div>
    </section>
  )
}
