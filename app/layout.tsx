import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const font = Roboto({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Code With Raouf',
  description: 'Let\'s Learn Coding Together',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
