import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { cookies } from 'next/headers';
import './globals.css';

import { Footer } from '@/layout/Footer';
import { Header } from '@/layout/Header';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HappyBlogging',
  description: 'Lets go to blogging',
  openGraph: {
    title: 'HappyBlogging',
    description: 'Lets go to blogging',
    // url: 'https://nextjs.org',
    siteName: 'HappyBlogging',

    images: [
      {
        url: '/images/ogp/ogp.png',
        width: 800,
        height: 600,
      },
      {
        url: '/images/ogp/ogp.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = createServerComponentClient<any>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header session={session} />
        {/* <Suspense fallback={<Loading />}></Suspense> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
