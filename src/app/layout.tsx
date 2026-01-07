import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artifactiq - Intelligence in Every Frame',
  description: 'AI-powered visual intelligence that transforms your images and videos into monetizable experiences.',
  keywords: ['AI', 'visual intelligence', 'monetization', 'artifact detection', 'tourism', 'e-commerce'],
  authors: [{ name: 'Artifactiq' }],
  openGraph: {
    title: 'Artifactiq - Intelligence in Every Frame',
    description: 'Transform visual content into interactive commerce experiences',
    url: 'https://artifactiq.ai',
    siteName: 'Artifactiq',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artifactiq - Intelligence in Every Frame',
    description: 'Transform visual content into interactive commerce experiences',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
