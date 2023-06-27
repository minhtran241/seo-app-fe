'use client';

import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import '../../styles/style.scss';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import Script from 'next/script';

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
      <GoogleAnalytics trackPageViews />
      <body className="bg-white dark:bg-black">
        <Script id="show-tawkio" type="text/javascript">
          {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
						(function(){
						var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
						s1.async=true;
						s1.src='https://embed.tawk.to/649ad4e1cc26a871b024f4a2/1h3ucv4el';
						s1.charset='UTF-8';
						s1.setAttribute('crossorigin','*');
						s0.parentNode.insertBefore(s1,s0);
						})();
					`}
        </Script>
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
