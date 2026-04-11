import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[color:var(--paper)] text-[color:var(--ink)]">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[color:var(--ink)] focus:px-4 focus:py-2 focus:text-sm focus:text-[color:var(--paper)]"
      >
        Skip to content
      </a>
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </div>
  )
}
