export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[color:var(--line)] py-8">
      <div className="mx-auto w-full max-w-[88rem] px-5 text-sm text-[color:var(--ink)] sm:px-8 lg:px-12">
        <p>© {currentYear} Rimil Dey. All rights reserved.</p>
      </div>
    </footer>
  )
}
