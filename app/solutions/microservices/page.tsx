import JsonLd from '@/components/JsonLd'
import SolutionPage from '@/components/SolutionPage'
import { createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from '../../seo'

const microservicesDescription = 'Microservices modernization consulting for cloud-native architecture, incremental migration, observability, and resilient distributed systems.'
const microservicesKeywords = ['microservices consulting', 'microservices modernization', 'cloud-native architecture', 'distributed systems', 'service decomposition']

export const metadata = createPageMetadata({
  title: 'Microservices Modernization',
  description: microservicesDescription,
  path: '/solutions/microservices',
  keywords: microservicesKeywords,
})

const microservicesJsonLd = [
  createServiceJsonLd({
    name: 'Microservices Modernization',
    description: microservicesDescription,
    path: '/solutions/microservices',
    serviceType: 'Microservices modernization consulting',
    keywords: microservicesKeywords,
  }),
  createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Microservices Modernization', path: '/solutions/microservices' },
  ]),
]

const capabilities = [
  {
    name: 'Architecture Design',
    description: 'Design service boundaries, contracts, data ownership, and integration patterns for scalable cloud systems.',
  },
  {
    name: 'Migration Strategy',
    description: 'Create safe, incremental migration plans from legacy monoliths without freezing product delivery.',
  },
  {
    name: 'Service Mesh & Observability',
    description: 'Implement tracing, metrics, service mesh, and reliability practices for distributed systems.',
  },
]

export default function Microservices() {
  return (
    <>
      <JsonLd data={microservicesJsonLd} />
      <SolutionPage
        eyebrow="Cloud Consulting"
        title="Microservices Modernization"
        description="Modernize monolithic applications into cloud-ready services with clear boundaries, resilient integration patterns, and observability from day one."
        capabilities={capabilities}
        primaryCta={{ label: 'Discuss modernization', href: '/contact' }}
        secondaryCta={{ label: 'Explore cloud consulting', href: '/solutions/cloud' }}
      />
    </>
  )
}
