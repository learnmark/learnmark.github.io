import JsonLd from '@/components/JsonLd'
import SolutionPage from '@/components/SolutionPage'
import { createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from '../../seo'

const gatewayDescription = 'Gateway consulting for API and LLM traffic, authentication, rate limiting, routing, observability, and governance.'
const gatewayKeywords = ['API gateway consulting', 'AI gateway consulting', 'LLM traffic routing', 'API governance', 'gateway observability']

export const metadata = createPageMetadata({
  title: 'API and AI Gateway Consulting',
  description: gatewayDescription,
  path: '/solutions/gateway',
  keywords: gatewayKeywords,
})

const gatewayJsonLd = [
  createServiceJsonLd({
    name: 'API and AI Gateway Consulting',
    description: gatewayDescription,
    path: '/solutions/gateway',
    serviceType: 'API and AI gateway consulting',
    keywords: gatewayKeywords,
  }),
  createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'API and AI Gateway Consulting', path: '/solutions/gateway' },
  ]),
]

const capabilities = [
  {
    name: 'Security & Policy',
    description: 'Centralize authentication, authorization, key management, and policy enforcement.',
  },
  {
    name: 'Traffic Management',
    description: 'Implement rate limiting, load balancing, failover, routing, and provider-level traffic controls.',
  },
  {
    name: 'Observability & Governance',
    description: 'Track usage, latency, cost, errors, and compliance signals across API and AI workloads.',
  },
]

export default function Gateway() {
  return (
    <>
      <JsonLd data={gatewayJsonLd} />
      <SolutionPage
        eyebrow="AI and Cloud Consulting"
        title="API & AI Gateway Consulting"
        description="Secure, route, observe, and govern traffic across APIs, microservices, and LLM providers with gateway patterns built for production operations."
        capabilities={capabilities}
        primaryCta={{ label: 'Discuss a gateway project', href: '/contact' }}
        secondaryCta={{ label: 'Explore llmxy', href: '/llmxy' }}
      />
    </>
  )
}
