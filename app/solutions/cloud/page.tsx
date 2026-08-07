import JsonLd from '@/components/JsonLd'
import SolutionPage from '@/components/SolutionPage'
import { createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from '../../seo'

const cloudDescription = 'Cloud consulting for platform modernization, cloud-native architecture, migration, DevOps, reliability, and cost optimization.'
const cloudKeywords = ['cloud consulting services', 'cloud modernization', 'cloud-native architecture', 'cloud migration', 'FinOps']

export const metadata = createPageMetadata({
  title: 'Cloud Consulting',
  description: cloudDescription,
  path: '/solutions/cloud',
  keywords: cloudKeywords,
})

const cloudJsonLd = [
  createServiceJsonLd({
    name: 'Cloud Consulting',
    description: cloudDescription,
    path: '/solutions/cloud',
    serviceType: 'Cloud consulting',
    keywords: cloudKeywords,
  }),
  createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Cloud Consulting', path: '/solutions/cloud' },
  ]),
]

const capabilities = [
  {
    name: 'Cloud Strategy & Architecture',
    description: 'Assess your application portfolio, define a pragmatic cloud roadmap, and design secure landing zones and target architectures.',
  },
  {
    name: 'Migration & Modernization',
    description: 'Move legacy workloads safely with phased migration plans, containerization, service decomposition, and operational readiness checks.',
  },
  {
    name: 'Platform Engineering',
    description: 'Build developer platforms with infrastructure as code, CI/CD, observability, security guardrails, and self-service workflows.',
  },
  {
    name: 'Reliability & Cost Optimization',
    description: 'Improve availability, incident response, performance, and cloud spend through measurable reliability and FinOps practices.',
  },
]

export default function CloudConsulting() {
  return (
    <>
      <JsonLd data={cloudJsonLd} />
      <SolutionPage
        eyebrow="Cloud Consulting"
        title="Modern cloud platforms for reliable delivery"
        description="Learnmark helps teams modernize infrastructure, applications, and delivery workflows so cloud adoption becomes a business capability rather than another operating burden."
        capabilities={capabilities}
        primaryCta={{ label: 'Discuss a cloud project', href: '/contact' }}
        secondaryCta={{ label: 'Explore platform engineering', href: '/solutions/devops' }}
      />
    </>
  )
}