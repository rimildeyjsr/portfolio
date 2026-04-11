import type { Metadata } from 'next'
import { Inter_Tight, Source_Serif_4 } from 'next/font/google'

import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const display = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const body = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

const siteUrl = 'https://rimildeyjsr.com'
const title = 'Rimil Dey — Senior frontend engineer'
const description =
  'Portfolio for Rimil Dey, a senior frontend engineer focused on improving complex product surfaces, strengthening reliability, and shipping responsive interfaces.'

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
