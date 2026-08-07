import JsonLd from '@/components/JsonLd'
import SolutionPage from '@/components/SolutionPage'
import { createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from '../../seo'

const platformDescription = 'Platform engineering and cloud operations consulting for CI/CD, infrastructure as code, observability, security, and reliable delivery.'
const platformKeywords = ['platform engineering consulting', 'DevOps consulting', 'CI/CD automation', 'infrastructure as code', 'cloud operations']

export const metadata = createPageMetadata({
  title: 'Platform Engineering',
  description: platformDescription,
  path: '/solutions/devops',
  keywords: platformKeywords,
})

const platformJsonLd = [
  createServiceJsonLd({
    name: 'Platform Engineering',
    description: platformDescription,
    path: '/solutions/devops',
    serviceType: 'Platform engineering consulting',
    keywords: platformKeywords,
  }),
  createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Platform Engineering', path: '/solutions/devops' },
  ]),
]

const capabilities = [
  {
    name: 'CI/CD Automation',
    description: 'Build robust continuous integration and deployment pipelines with quality, security, and rollback controls.',
  },
  {
    name: 'Infrastructure as Code',
    description: 'Manage cloud infrastructure with reusable modules, environment standards, and policy guardrails.',
  },
  {
    name: 'Observability & Reliability',
    description: 'Improve telemetry, incident response, service-level objectives, and operational confidence.',
  },
]

export default function DevOps() {
  return (
    <>
      <JsonLd data={platformJsonLd} />
      <SolutionPage
        eyebrow="Platform Engineering"
        title="Platform Engineering & Cloud Operations"
        description="Streamline development and operations with secure developer platforms, repeatable infrastructure, and delivery pipelines that make cloud software easier to ship and operate."
        capabilities={capabilities}
        primaryCta={{ label: 'Discuss platform engineering', href: '/contact' }}
        secondaryCta={{ label: 'Explore cloud consulting', href: '/solutions/cloud' }}
      />
    </>
  )
}
