import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MD Suhaib S',
  description: 'Created by Suhaib',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
