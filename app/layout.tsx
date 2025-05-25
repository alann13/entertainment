import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const outfitSans = Outfit({
  variable: '--font-outfit-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Entertainment App',
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
        className={`${outfitSans.className} antialiased grid p-[1.5rem] lg:p-[2rem] lg:grid-cols-[6rem_1fr] gap-[2.25rem]`}
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
