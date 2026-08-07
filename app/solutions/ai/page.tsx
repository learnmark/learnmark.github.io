import JsonLd from '@/components/JsonLd'
import SolutionPage from '@/components/SolutionPage'
import { createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from '../../seo'

const aiDescription = 'AI consulting for strategy, product delivery, LLM integration, AI gateways, evaluation, governance, and production readiness.'
const aiKeywords = ['AI consulting services', 'LLM integration consulting', 'AI product strategy', 'AI governance', 'AI evaluation']

export const metadata = createPageMetadata({
  title: 'AI Consulting',
  description: aiDescription,
  path: '/solutions/ai',
  keywords: aiKeywords,
})

const aiJsonLd = [
  createServiceJsonLd({
    name: 'AI Consulting',
    description: aiDescription,
    path: '/solutions/ai',
    serviceType: 'AI consulting',
    keywords: aiKeywords,
  }),
  createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'AI Consulting', path: '/solutions/ai' },
  ]),
]

const capabilities = [
  {
    name: 'AI Strategy & Roadmaps',
    description: 'Prioritize use cases, assess feasibility, and define an adoption plan grounded in business value and engineering constraints.',
  },
  {
    name: 'LLM Integration & Gateways',
    description: 'Integrate model providers, route traffic, manage prompts, and centralize usage, policy, and cost visibility.',
  },
  {
    name: 'Evaluation & Governance',
    description: 'Design quality checks, safety policies, observability, and operational controls for production AI workflows.',
  },
]

export default function AI() {
  return (
    <>
      <JsonLd data={aiJsonLd} />
      <SolutionPage
        eyebrow="AI Consulting"
        title="Build AI products that survive production"
        description="We help teams identify high-value AI use cases, design LLM-enabled workflows, integrate model providers, and put evaluation, observability, and governance around the systems they ship."
        capabilities={capabilities}
        primaryCta={{ label: 'Discuss an AI project', href: '/contact' }}
        secondaryCta={{ label: 'Explore API & AI gateways', href: '/solutions/gateway' }}
      />
    </>
  )
}
