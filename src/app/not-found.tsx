import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-[72rem] items-center px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
      <div>
        <p className="text-[0.78rem] uppercase tracking-[0.18em] text-[color:var(--ink)]">
          404
        </p>
        <h1 className="mt-6 max-w-[10ch] font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,5rem)] leading-[0.95] tracking-[0.2px] text-[color:var(--ink)]">
          This page is missing, but the site is not.
        </h1>
        <p className="mt-6 max-w-[38rem] text-base leading-8 text-[color:var(--ink)]">
          The route you tried does not exist. Use the link below to return to the homepage.
        </p>
        <Link href="/" className="quiet-underline mt-8 inline-flex text-base text-[color:var(--ink)]">
          Go back home
        </Link>
      </div>
    </section>
  )
}
