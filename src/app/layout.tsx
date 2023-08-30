import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import { Footer } from '@/layout/Footer'
import { Header } from '@/layout/Header'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HappyBlogging',
  description: 'Lets go to blogging',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
 
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer  />
      </body>
    </html>
  );
}
