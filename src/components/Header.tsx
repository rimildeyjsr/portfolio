import Link from 'next/link'

import { profile } from '@/lib/portfolio'

const navItems = [
  { href: '#chapter', label: 'Current chapter' },
  { href: '#evidence', label: 'Selected evidence' },
  { href: '#ledger', label: 'Career ledger' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:color-mix(in_srgb,var(--paper)_92%,white_8%)]/95 backdrop-blur supports-[backdrop-filter]:bg-[color:color-mix(in_srgb,var(--paper)_88%,white_12%)]">
      <div className="mx-auto flex w-full max-w-[88rem] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-[1.2rem] tracking-[-0.04em] text-[color:var(--ink)] transition hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--paper)]"
        >
          {profile.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm text-[color:var(--muted)]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="quiet-underline nav-glow transition hover:text-[color:var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--paper)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href={profile.contact.resume}
            target="_blank"
            className="button-editorial inline-flex min-h-11 items-center justify-center rounded-full border border-[color:var(--line-strong)] px-4 text-sm text-[color:var(--ink)] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--paper)]"
          >
            Resume
          </Link>
          <Link
            href={`mailto:${profile.contact.email}`}
            className="button-editorial inline-flex min-h-11 items-center justify-center rounded-full bg-[color:var(--ink)] px-4 text-sm text-[color:var(--paper)] hover:bg-[color:color-mix(in_srgb,var(--ink)_90%,var(--accent)_10%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--paper)]"
          >
            Email
          </Link>
        </div>
      </div>
    </header>
  )
}
