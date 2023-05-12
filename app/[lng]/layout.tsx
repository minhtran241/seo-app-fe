'use client';

import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import '../../styles/index.css';

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lng: string };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  icons: {
    icon: {
      url: 'favicon.ico',
      type: 'image/png',
    },
    shortcut: { url: 'favicon.ico', type: 'image/png' },
  },
};

export default function RootLayout({
  children,
  params: { lng },
}: RootLayoutProps) {
  return (
    <html suppressHydrationWarning lang={lng} dir={dir(lng)}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <body className="bg-white dark:bg-black">
        <Providers>
          <Header params={{ lng }} />
          {children}
          <Footer params={{ lng }} />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
