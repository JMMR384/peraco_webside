import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PeraCo Studio',
  description: 'Created with v0',
  generator: 'PeraCo Development team',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head><title>PeraCo Studio</title></head>
      <body>{children}</body>
    </html>
  )
}
