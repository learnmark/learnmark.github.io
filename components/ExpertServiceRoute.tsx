import type { Metadata } from 'next'

import { createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from '@/app/seo'
import { expertServiceMessages, type ExpertServiceKey } from '@/i18n/messages/expert-services'
import ExpertServicePage from './ExpertServicePage'
import JsonLd from './JsonLd'

type ExpertServiceRouteProps = {
  service: ExpertServiceKey
  path: `/${string}`
  primaryHref: string
  secondaryHref: string
  ctaId?: string
}

export function createExpertServiceMetadata(service: ExpertServiceKey, path: `/${string}`): Metadata {
  const messages = expertServiceMessages[service]

  return createPageMetadata({
    title: messages.seo.title,
    description: messages.seo.description,
    path,
    keywords: messages.seo.keywords,
  })
}

export default function ExpertServiceRoute({ service, path, primaryHref, secondaryHref, ctaId }: ExpertServiceRouteProps) {
  const messages = expertServiceMessages[service]
  const jsonLd = [
    createServiceJsonLd({
      name: messages.seo.title,
      description: messages.seo.description,
      path,
      serviceType: messages.seo.serviceType,
      keywords: messages.seo.keywords,
    }),
    createBreadcrumbJsonLd([
      { name: messages.breadcrumbHome, path: '/' },
      { name: messages.seo.title, path },
    ]),
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
