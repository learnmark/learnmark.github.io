import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://learnmark.com'),
  title: {
    template: '%s | Learnmark',
    default: 'Learnmark - AI and Cloud Consulting',
  },
  description: 'Learnmark is an AI and Cloud consulting company helping teams design intelligent products, modernize cloud platforms, and ship reliable software systems.',
  openGraph: {
    title: 'Learnmark - AI and Cloud Consulting',
    description: 'Learnmark helps teams design intelligent products, modernize cloud platforms, and ship reliable software systems.',
    url: 'https://learnmark.com',
    siteName: 'Learnmark',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learnmark - AI and Cloud Consulting',
    description: 'AI and Cloud consulting for intelligent products, modern platforms, and reliable delivery.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} site-shell text-slate-900 antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-R5GXYQ84NP" />
    </html>
  );
}
