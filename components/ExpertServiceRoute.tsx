import type { Metadata } from 'next'

import { createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from '@/app/seo'
import { expertServiceMessages, type ExpertServiceKey } from '@/i18n/messages/expert-services'
import { getLocale } from '@/i18n/server'
import ExpertServicePage from './ExpertServicePage'
import JsonLd from './JsonLd'

type ExpertServiceRouteProps = {
  service: ExpertServiceKey
  path: `/${string}`
  primaryHref: string
  secondaryHref: string
  ctaId?: string
}

export async function createExpertServiceMetadata(service: ExpertServiceKey, path: `/${string}`): Promise<Metadata> {
  const locale = await getLocale()
  const messages = expertServiceMessages[locale][service]

  return createPageMetadata({
    title: messages.seo.title,
    description: messages.seo.description,
    path,
    keywords: messages.seo.keywords,
    locale,
  })
}

export default async function ExpertServiceRoute({ service, path, primaryHref, secondaryHref, ctaId }: ExpertServiceRouteProps) {
  const locale = await getLocale()
  const messages = expertServiceMessages[locale][service]
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
      <ExpertServicePage
        messages={messages}
        primaryHref={primaryHref}
        secondaryHref={secondaryHref}
        ctaId={ctaId}
      />
    </>
  )
}
