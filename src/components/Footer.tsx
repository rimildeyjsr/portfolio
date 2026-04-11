import Link from 'next/link'

import { profile } from '@/lib/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] py-8">
      <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-4 px-5 text-sm text-[color:var(--ink)] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href={`mailto:${profile.contact.email}`} className="quiet-underline hover:text-[color:var(--ink)]">
            {profile.contact.email}
          </Link>
          <Link href={profile.contact.linkedin} target="_blank" className="quiet-underline hover:text-[color:var(--ink)]">
            LinkedIn
          </Link>
          <Link href={profile.contact.github} target="_blank" className="quiet-underline hover:text-[color:var(--ink)]">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  )
}
