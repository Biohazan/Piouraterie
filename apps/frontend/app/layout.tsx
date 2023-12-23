import './globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import Header from './components/header/Header'
import Providers from './context/Providers'
import Footer from './components/Footer'
import NextBreadcrumb from './components/NextBreadcrumb'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300'] })

export const metadata: Metadata = {
  title: 'La Piouraterie',
  description: 'Boutique de la plus merveilleuse créatrice de cuir',
}

export default async function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode,
  modal?: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={ubuntu.className} cz-shortcut-listen="true">
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
