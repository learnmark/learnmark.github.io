import type { Metadata, MetadataRoute } from 'next'

export const siteUrl = 'https://learnmark.com'
export const siteName = 'Learnmark'
export const defaultTitle = 'Learnmark - AI and Cloud Consulting'
export const defaultDescription = 'Learnmark is an AI and Cloud consulting company helping teams design intelligent products, modernize cloud platforms, and ship reliable software systems.'

export const defaultKeywords = [
  'AI consulting',
  'cloud consulting',
  'LLM integration',
  'AI gateway',
  'cloud modernization',
  'platform engineering',
  'microservices modernization',
  'software delivery consulting',
]

export const defaultOpenGraphImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Learnmark AI and Cloud Consulting',
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
}

type ServiceJsonLdOptions = {
  name: string
  description: string
  path: `/${string}`
  serviceType: string
  keywords?: string[]
}

type SoftwareApplicationJsonLdOptions = {
  name: string
  description: string
  path: `/${string}`
  applicationCategory: string
  image: string
  keywords?: string[]
}

export function absoluteUrl(path = '/') {
  return new URL(path, siteUrl).toString()
}

function keywordsText(keywords: string[] = []) {
  return [...new Set([...defaultKeywords, ...keywords])].join(', ')
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  images = [defaultOpenGraphImage],
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${siteName}`

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName,
      locale: 'en_US',
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
  { url: absoluteUrl('/llmxy'), lastModified: '2026-07-01', changeFrequency: 'weekly', priority: 0.9 },
  { url: absoluteUrl('/letscrum'), lastModified: '2026-07-01', changeFrequency: 'weekly', priority: 0.9 },
  { url: absoluteUrl('/sello'), lastModified: '2026-08-07', changeFrequency: 'weekly', priority: 0.9 },
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

export function createServiceJsonLd({ name, description, path, serviceType, keywords = [] }: ServiceJsonLdOptions) {
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
    keywords: keywordsText(keywords),
  }
}

export function createSoftwareApplicationJsonLd({
  name,
  description,
  path,
  applicationCategory,
  image,
  keywords = [],
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
    keywords: keywordsText(keywords),
  }
}

export const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: absoluteUrl('/logo.svg'),
      description: defaultDescription,
      sameAs: ['https://github.com/wilsonwu/llmxy', 'https://github.com/letscrum'],
      knowsAbout: defaultKeywords,
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      inLanguage: 'en-US',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
    },
  ],
}