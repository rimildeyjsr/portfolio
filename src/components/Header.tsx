import Link from 'next/link'

import { profile } from '@/lib/portfolio'

const navItems = [
  { href: '#chapter', label: 'Current chapter' },
  { href: '#ledger', label: 'Career ledger' },
  { href: '#open-source', label: 'Open source' },
  { href: '#tools', label: 'Skills' },
  { href: '#outside-work', label: 'Outside work' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:color-mix(in_srgb,var(--paper)_92%,white_8%)]/95 backdrop-blur supports-[backdrop-filter]:bg-[color:color-mix(in_srgb,var(--paper)_88%,white_12%)]">
      <div className="mx-auto grid w-full max-w-[88rem] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="justify-self-start font-[family-name:var(--font-display)] text-[1.2rem] tracking-[0.2px] text-[color:var(--ink)] transition hover:text-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--paper)]"
        >
          {profile.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center justify-center gap-5 text-sm text-[color:var(--ink)] lg:gap-6">
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

        <div className="hidden md:block" aria-hidden="true" />
      </div>
    </header>
  )
}
