import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { defaultDescription, defaultKeywords, defaultOpenGraphImage, defaultTitle, siteJsonLd, siteName, siteUrl } from "./seo";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  keywords: defaultKeywords,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: 'technology consulting',
  title: {
    template: '%s | Learnmark',
    default: defaultTitle,
  },
  description: defaultDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: '/',
    siteName,
    locale: 'en_US',
    type: 'website',
    images: [defaultOpenGraphImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOpenGraphImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-R5GXYQ84NP" />
    </html>
  );
}
