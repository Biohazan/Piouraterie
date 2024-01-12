import './globals.css'
import type { Metadata } from 'next'
import { Princess_Sofia, Sofia, Ubuntu } from 'next/font/google'
import Header from './components/header/Header'
import Footer from './components/Footer'
import NextBreadcrumb from './components/NextBreadcrumb'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Providers from './context/Providers'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300'] })
const sofia = Sofia({ subsets: ['latin'], weight: ['400'], variable: '--font-sofia', })
const princess = Princess_Sofia({ subsets: ['latin'], weight: ['400'], variable: '--font-princess', })

export const metadata: Metadata = {
  title: 'La Piouraterie',
  description: 'Boutique de la plus merveilleuse créatrice de cuir',
}

export default async function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal?: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${ubuntu.className} ${sofia.variable} ${princess.variable}`} cz-shortcut-listen="true">
        <Providers>
          {modal}
          <Header />
          {/* <NextBreadcrumb
            separator={<MdOutlineKeyboardArrowRight />}
            activeClasses="block transition hover:text-gray-700"
            listClasses="flex items-center gap-1 text-sm text-gray-600"
            capitalizeLinks
          /> */}
          {children}
          <Footer />
          <ReactQueryDevtools />
        </Providers>
      </body>
    </html>
  )
}
