import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Some entertainment app',
  description: 'A description for some entertainment app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-[2rem] grid grid-cols-[6rem_1fr] gap-x-[2.25rem]`}
      >
        <header>
          <Navigation />
        </header>
        <main>
          <section className="col-span-5">{children}</section>
        </main>
      </body>
    </html>
  )
}
