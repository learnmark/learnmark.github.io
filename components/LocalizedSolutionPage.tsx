import type { Metadata } from 'next'

import { solutionMessages, type SolutionKey } from '@/i18n/messages/solutions'
import { getLocale } from '@/i18n/server'
import JsonLd from './JsonLd'
import SolutionPage from './SolutionPage'
import { createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from '@/app/seo'

type LocalizedSolutionPageProps = {
  solution: SolutionKey
  path: `/${string}`
  secondaryHref: `/${string}`
}

export async function createSolutionMetadata(solution: SolutionKey, path: `/${string}`): Promise<Metadata> {
  const locale = await getLocale()
  const messages = solutionMessages[locale][solution]

  return createPageMetadata({
    title: messages.seo.title,
    description: messages.seo.description,
    path,
    keywords: messages.seo.keywords,
    locale,
  })
}

export default async function LocalizedSolutionPage({ solution, path, secondaryHref }: LocalizedSolutionPageProps) {
  const locale = await getLocale()
  const messages = solutionMessages[locale][solution]
  const jsonLd = [
    createServiceJsonLd({
      name: messages.seo.title,
      description: messages.seo.description,
      path,
      serviceType: messages.seo.serviceType,
      keywords: messages.seo.keywords,
      locale,
    }),
    createBreadcrumbJsonLd([
      { name: messages.breadcrumbHome, path: '/' },
      { name: messages.seo.title, path },
    ], locale),
  ]

  return (
    <>
      <JsonLd data={jsonLd} />
      <SolutionPage
        eyebrow={messages.eyebrow}
        title={messages.title}
        description={messages.description}
        capabilities={messages.capabilities}
        primaryCta={{ label: messages.primaryCta, href: '/contact' }}
        secondaryCta={{ label: messages.secondaryCta, href: secondaryHref }}
      />
    </>
  )
}