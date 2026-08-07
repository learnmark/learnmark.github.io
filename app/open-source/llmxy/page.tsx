import JsonLd from '@/components/JsonLd'
import OpenSourceProjectPage from '@/components/OpenSourceProjectPage'
import { createBreadcrumbJsonLd, createPageMetadata } from '../../seo'

const description = 'Explore the open-source llmxy gateway: a self-hosted control plane and OpenAI-compatible API for provider routing, authentication, quotas, usage, and billing.'

export const metadata = createPageMetadata({
  title: 'llmxy Open Source - Self-Hosted LLM Gateway',
  description,
  path: '/open-source/llmxy',
  keywords: ['llmxy open source', 'self-hosted LLM gateway', 'OpenAI-compatible API', 'Envoy AI gateway', 'LLM usage billing'],
})

const jsonLd = createBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'llmxy Open Source', path: '/open-source/llmxy' },
])

export default function LlmxyOpenSource() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <OpenSourceProjectPage
        name="llmxy"
        category="Open Source LLM Infrastructure"
        status="Self-hostable"
        summary="A public, self-hosted LLM gateway with user and admin consoles, an OpenAI-compatible API, provider routing, quota enforcement, and usage billing."
        description="The repository contains the complete web, administration, and API services required to operate the gateway yourself. A direct FastAPI relay is available for simple deployments, while an optional Envoy path handles higher-throughput traffic without moving billing work onto the request path."
        facts={[
          { label: 'Repository', value: 'wilsonwu/llmxy' },
          { label: 'Deployment', value: 'Docker Compose or independently operated services' },
          { label: 'API surface', value: 'OpenAI-compatible chat, embeddings, and model endpoints' },
          { label: 'Languages', value: 'Python and TypeScript' },
        ]}
        capabilities={[
          { name: 'User console', description: 'Provide account access, plans, top-ups, API key management, model discovery, and per-user usage and billing views.' },
          { name: 'Administration console', description: 'Manage users, orders, upstream channels, models, rates, plans, routing policies, route weights, and operational statistics.' },
          { name: 'Unified API', description: 'Expose OpenAI-compatible chat completions, embeddings, and model discovery while connecting to OpenAI, Anthropic, and Gemini upstreams.' },
          { name: 'Gateway controls', description: 'Apply authentication, balance and quota checks, rate limiting, usage recording, and billing through one control plane.' },
          { name: 'Smart routing', description: 'Configure channels, models, routes, policies, and weights from the admin application, with changes propagated to running gateway instances.' },
          { name: 'Optional Envoy relay', description: 'Run a C++ hot path with external authorization and asynchronous gRPC access logs while retaining the direct FastAPI relay for smaller deployments.' },
        ]}
        architecture={[
          { name: 'Website', description: 'Next.js user application for accounts, subscriptions, keys, model access, and usage.' },
          { name: 'Admin', description: 'Next.js control plane for providers, routing, plans, users, billing, and Envoy instances.' },
          { name: 'API', description: 'FastAPI service backed by PostgreSQL and Redis for protocol translation, authorization, quotas, and billing.' },
          { name: 'Envoy', description: 'Optional front proxy for the high-throughput relay path, external authorization, and asynchronous usage reporting.' },
        ]}
        technology={['Python 3.11+', 'FastAPI', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'PostgreSQL 16+', 'Redis 7+', 'Envoy', 'gRPC', 'Docker Compose']}
        prerequisites={['Docker with Docker Compose for the shortest setup path', 'Or Python 3.11+, Node.js 18+, pnpm, PostgreSQL 16+, and Redis 7+', 'Local JWT, encryption, database, and provider credentials']}
        quickStart={`git clone https://github.com/wilsonwu/llmxy.git
cd llmxy
cp .env.example .env
docker compose up -d --build`}
        repositories={[
          { label: 'Source repository', href: 'https://github.com/wilsonwu/llmxy' },
          { label: 'Architecture documentation', href: 'https://github.com/wilsonwu/llmxy/blob/main/docs/architecture.md' },
        ]}
        productHref="/llmxy"
      />
    </>
  )
}