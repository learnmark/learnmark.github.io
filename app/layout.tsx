import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import { commonMessages, headerDirectoryMessages } from "@/i18n/messages/common";
import { homeMessages } from "@/i18n/messages/home";
import { disableInternationalization } from "@/i18n/config";
import { getLocale } from "@/i18n/server";
import { createSiteJsonLd, defaultKeywords, defaultOpenGraphImage, openGraphLocales, siteName, siteUrl } from "./seo";

const manrope = Manrope({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = homeMessages[locale];
  const title = `Learnmark - ${messages.seoTitle}`;

  return {
    metadataBase: new URL(siteUrl),
    applicationName: siteName,
    keywords: locale === 'en' ? defaultKeywords : messages.intro.capabilities,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    category: 'expert research and consultation',
    title: {
      template: '%s | Learnmark',
      default: title,
    },
    description: messages.seoDescription,
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title,
      description: messages.seoDescription,
      url: '/',
      siteName,
      locale: openGraphLocales[locale],
      type: 'website',
      images: [defaultOpenGraphImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: messages.seoDescription,
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
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = commonMessages[locale];
  const pageMessages = homeMessages[locale];
  const showLanguageSwitcher = !disableInternationalization && process.env.BUILD_OUTPUT_MODE !== 'export';
  const siteJsonLd = createSiteJsonLd({
    description: pageMessages.seoDescription,
    locale,
    knowsAbout: pageMessages.intro.capabilities,
  });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${manrope.className} site-shell text-slate-900 antialiased`}>
        <ThemeProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
          />
          <Header locale={locale} messages={messages.header} directoryMessages={headerDirectoryMessages} themeToggleLabel={messages.themeToggleLabel} languageSwitcherLabel={messages.languageSwitcherLabel} showLanguageSwitcher={showLanguageSwitcher} />
          {children}
          <Footer messages={messages.footer} />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-R5GXYQ84NP" />
    </html>
  );
}
