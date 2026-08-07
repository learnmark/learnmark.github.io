import type { Metadata, MetadataRoute } from 'next'
import type { Locale } from '@/i18n/config'

export const siteUrl = 'https://learnmark.com'
export const siteName = 'Learnmark'
export const defaultTitle = 'Learnmark - AI, Cloud, and Shopify Services'
export const defaultDescription = 'Learnmark helps teams design intelligent products, modernize cloud platforms, build Shopify stores, and ship reliable software systems.'

export const defaultKeywords = [
  'AI consulting',
  'cloud consulting',
  'LLM integration',
  'AI gateway',
  'cloud modernization',
  'platform engineering',
  'microservices modernization',
  'software delivery consulting',
  'Shopify store development',
]

export const defaultOpenGraphImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Learnmark',
}

type OpenGraphImage = typeof defaultOpenGraphImage

type BreadcrumbItem = {
  name: string
  path: `/${string}`
}

type PageMetadataOptions = {
  title: string
  description: string
  path: `/${string}`
  keywords?: string[]
  images?: OpenGraphImage[]
  noIndex?: boolean
  locale?: Locale
}

export const openGraphLocales: Record<Locale, string> = {
  en: 'en_US',
  'zh-CN': 'zh_CN',
  'zh-TW': 'zh_TW',
  ja: 'ja_JP',
  fr: 'fr_FR',
  de: 'de_DE',
}

export const languageTags: Record<Locale, string> = {
  en: 'en-US',
  'zh-CN': 'zh-CN',
  'zh-TW': 'zh-TW',
  ja: 'ja-JP',
  fr: 'fr-FR',
  de: 'de-DE',
}

type ServiceJsonLdOptions = {
  name: string
  description: string
  path: `/${string}`
  serviceType: string
  keywords?: string[]
  locale?: Locale
}

type SoftwareApplicationJsonLdOptions = {
  name: string
  description: string
  path: `/${string}`
  applicationCategory: string
  image: string
  keywords?: string[]
  locale?: Locale
}

export function absoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString()
}

function localizedKeywords(keywords: string[], locale: Locale) {
  return [...new Set([...(locale === 'en' ? defaultKeywords : []), ...keywords])]
}

function keywordsText(keywords: string[] = [], locale: Locale = 'en') {
  return localizedKeywords(keywords, locale).join(', ')
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  images = [defaultOpenGraphImage],
  noIndex = false,
  locale = 'en',
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${siteName}`

  return {
    title,
    description,
    keywords: localizedKeywords(keywords, locale),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName,
      locale: openGraphLocales[locale],
      type: 'website',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: images.map((image) => image.url),
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : undefined,
  }
}

export const publicRoutes: MetadataRoute.Sitemap = [
  { url: absoluteUrl('/'), lastModified: '2026-07-01', changeFrequency: 'weekly', priority: 1 },
  { url: absoluteUrl('/about'), lastModified: '2026-07-01', changeFrequency: 'monthly', priority: 0.8 },
  { url: absoluteUrl('/contact'), lastModified: '2026-07-01', changeFrequency: 'monthly', priority: 0.7 },
  { url: absoluteUrl('/careers'), lastModified: '2026-07-01', changeFrequency: 'monthly', priority: 0.5 },
  { url: absoluteUrl('/privacy-policy'), lastModified: '2026-07-01', changeFrequency: 'yearly', priority: 0.3 },
  { url: absoluteUrl('/llmxy'), lastModified: '2026-08-07', changeFrequency: 'weekly', priority: 0.9 },
  { url: absoluteUrl('/letscrum'), lastModified: '2026-08-07', changeFrequency: 'weekly', priority: 0.9 },
  { url: absoluteUrl('/sello'), lastModified: '2026-08-07', changeFrequency: 'weekly', priority: 0.9 },
  { url: absoluteUrl('/services/shopify'), lastModified: '2026-08-07', changeFrequency: 'monthly', priority: 0.9 },
  { url: absoluteUrl('/open-source/llmxy'), lastModified: '2026-08-07', changeFrequency: 'weekly', priority: 0.8 },
  { url: absoluteUrl('/open-source/letscrum'), lastModified: '2026-08-07', changeFrequency: 'weekly', priority: 0.8 },
  { url: absoluteUrl('/open-source/sello'), lastModified: '2026-08-07', changeFrequency: 'weekly', priority: 0.8 },
  { url: absoluteUrl('/solutions/ai'), lastModified: '2026-07-01', changeFrequency: 'monthly', priority: 0.8 },
  { url: absoluteUrl('/solutions/cloud'), lastModified: '2026-07-01', changeFrequency: 'monthly', priority: 0.8 },
  { url: absoluteUrl('/solutions/microservices'), lastModified: '2026-07-01', changeFrequency: 'monthly', priority: 0.8 },
  { url: absoluteUrl('/solutions/gateway'), lastModified: '2026-07-01', changeFrequency: 'monthly', priority: 0.8 },
  { url: absoluteUrl('/solutions/agile-scrum'), lastModified: '2026-07-01', changeFrequency: 'monthly', priority: 0.8 },
  { url: absoluteUrl('/solutions/devops'), lastModified: '2026-07-01', changeFrequency: 'monthly', priority: 0.8 },
]

export function createBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function createServiceJsonLd({ name, description, path, serviceType, keywords = [], locale = 'en' }: ServiceJsonLdOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(path)}#service`,
    name,
    description,
    serviceType,
    url: absoluteUrl(path),
    provider: {
      '@id': `${siteUrl}/#organization`,
    },
    areaServed: 'Global',
    keywords: keywordsText(keywords, locale),
  }
}

export function createSoftwareApplicationJsonLd({
  name,
  description,
  path,
  applicationCategory,
  image,
  keywords = [],
  locale = 'en',
}: SoftwareApplicationJsonLdOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${absoluteUrl(path)}#software`,
    name,
    description,
    applicationCategory,
    operatingSystem: 'Web',
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    creator: {
      '@id': `${siteUrl}/#organization`,
    },
    publisher: {
      '@id': `${siteUrl}/#organization`,
    },
    keywords: keywordsText(keywords, locale),
  }
}

export function createSiteJsonLd({ description, locale, knowsAbout }: { description: string; locale: Locale; knowsAbout: string[] }) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: absoluteUrl('/logo.svg'),
        description,
        sameAs: ['https://github.com/wilsonwu/llmxy', 'https://github.com/letscrum', 'https://github.com/imoogoo/sellohub'],
        knowsAbout,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        inLanguage: languageTags[locale],
        publisher: {
          '@id': `${siteUrl}/#organization`,
        },
      },
    ],
  }
}