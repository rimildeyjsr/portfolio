import type { Metadata } from 'next'
import { Bodoni_Moda, Instrument_Sans } from 'next/font/google'

import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const display = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
})

const body = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

const siteUrl = 'https://rimildeyjsr.com'
const title = 'Rimil Dey — Senior frontend engineer'
const description =
  'Luxury editorial portfolio for Rimil Dey, a senior frontend engineer focused on redesigning complex product surfaces, improving reliability, and shipping calm, responsive interfaces.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Rimil Dey',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen bg-[color:var(--paper)] font-[family-name:var(--font-body)] text-[color:var(--ink)] antialiased">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
