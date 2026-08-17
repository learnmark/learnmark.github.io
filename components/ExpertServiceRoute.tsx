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

const serviceImages: Record<ExpertServiceKey, string> = {
  forClients: '/images/expert-network/for-clients-decision-session.webp',
  howItWorks: '/images/expert-network/how-it-works-expert-matching.webp',
  experts: '/images/expert-network/experts-remote-consultation.webp',
  compliance: '/images/expert-network/compliance-human-review.webp',
}

export async function createExpertServiceMetadata(service: ExpertServiceKey, path: `/${string}`): Promise<Metadata> {
  const locale = await getLocale()
  const messages = expertServiceMessages[locale][service]
  const image = serviceImages[service]

  return createPageMetadata({
    title: messages.seo.title,
    description: messages.seo.description,
    path,
    keywords: messages.seo.keywords,
    images: [{ url: image, width: 1536, height: 1024, alt: messages.imageAlt }],
    locale,
  })
}

export default async function ExpertServiceRoute({ service, path, primaryHref, secondaryHref, ctaId }: ExpertServiceRouteProps) {
  const locale = await getLocale()
  const messages = expertServiceMessages[locale][service]
  const image = serviceImages[service]
  const jsonLd = [
    createServiceJsonLd({
      name: messages.seo.title,
      description: messages.seo.description,
      path,
      serviceType: messages.seo.serviceType,
      keywords: messages.seo.keywords,
      image,
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
        imageSrc={image}
        primaryHref={primaryHref}
        secondaryHref={secondaryHref}
        ctaId={ctaId}
      />
    </>
  )
}
