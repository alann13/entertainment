import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const outfitSans = Outfit({
  variable: '--font-outfit-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Chillflixed',
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
        className={`${outfitSans.className} antialiased p-[2rem] grid grid-cols-[6rem_1fr] gap-x-[2.25rem]`}
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
