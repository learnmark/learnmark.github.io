import type { Metadata, MetadataRoute } from 'next'
import type { Locale } from '@/i18n/config'

export const siteUrl = 'https://learnmark.com'
export const siteName = 'Learnmark'
export const defaultTitle = 'Learnmark - Global Expert Network & Enterprise Consultation'
export const defaultDescription = 'Learnmark connects enterprises with global operators and specialists for strategy, research, due diligence, and high-value expert consultation.'

export const defaultKeywords = [
  'global expert network',
  'expert network',
  'expert consultation',
  'enterprise consultation',
  'primary research',
  'industry experts',
  'expert interviews',
  'expert sourcing',
  'market research',
  'commercial due diligence',
  'technical due diligence',
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

const archivedRoutes = new Set<string>([
  '/careers',
  '/letscrum',
  '/llmxy',
  '/sello',
  '/services/shopify',
  '/solutions/agile-scrum',
  '/solutions/ai',
  '/solutions/cloud',
  '/solutions/devops',
  '/solutions/gateway',
  '/solutions/microservices',
  '/open-source/letscrum',
  '/open-source/llmxy',
  '/open-source/sello',
])

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
  const shouldNoIndex = noIndex || archivedRoutes.has(path)

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
    robots: shouldNoIndex
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
  { url: absoluteUrl('/'), lastModified: '2026-08-15', changeFrequency: 'weekly', priority: 1 },
  { url: absoluteUrl('/for-clients'), lastModified: '2026-08-15', changeFrequency: 'monthly', priority: 0.9 },
  { url: absoluteUrl('/how-it-works'), lastModified: '2026-08-15', changeFrequency: 'monthly', priority: 0.9 },
  { url: absoluteUrl('/experts'), lastModified: '2026-08-15', changeFrequency: 'monthly', priority: 0.8 },
  { url: absoluteUrl('/compliance'), lastModified: '2026-08-15', changeFrequency: 'monthly', priority: 0.8 },
  { url: absoluteUrl('/about'), lastModified: '2026-08-15', changeFrequency: 'monthly', priority: 0.7 },
  { url: absoluteUrl('/contact'), lastModified: '2026-08-15', changeFrequency: 'monthly', priority: 0.8 },
  { url: absoluteUrl('/privacy-policy'), lastModified: '2026-08-13', changeFrequency: 'yearly', priority: 0.3 },
]

export function createBreadcrumbJsonLd(items: BreadcrumbItem[], locale: Locale = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    inLanguage: languageTags[locale],
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
    inLanguage: languageTags[locale],
    provider: {
      '@id': `${siteUrl}/#organization`,
    },
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
        inLanguage: languageTags[locale],
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