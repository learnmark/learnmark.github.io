import JsonLd from '@/components/JsonLd'
import OpenSourceProjectPage from '@/components/OpenSourceProjectPage'
import { createBreadcrumbJsonLd, createPageMetadata } from '../../seo'

const description = 'Explore the open-source Sello project, an actively developed multi-tenant SaaS foundation for e-commerce teams, store connections, listings, and human-controlled AI assistance.'

export const metadata = createPageMetadata({
  title: 'Sello Open Source - AI Commerce SaaS Foundation',
  description,
  path: '/open-source/sello',
  keywords: ['Sello open source', 'e-commerce SaaS starter', 'multi-tenant commerce platform', 'AI seller assistant', 'FastAPI Next.js monorepo'],
})

const jsonLd = createBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Sello Open Source', path: '/open-source/sello' },
])

export default function SelloOpenSource() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <OpenSourceProjectPage
        name="Sello"
        category="Open Source Commerce Foundation"
        status="Active development"
        summary="A public monorepo for building a multi-tenant commerce workspace with separate seller, platform administration, website, and API applications."
        description="Sello is still evolving. The repository establishes the SaaS application boundaries, authentication and tenant model, team administration, store and AI provider settings, and a documented path toward unified listings and review-before-action AI workflows."
        facts={[
          { label: 'Repository', value: 'imoogoo/sellohub' },
          { label: 'Status', value: 'Active development before the first production release' },
          { label: 'Architecture', value: 'Multi-application monorepo with a unified API' },
          { label: 'Data model', value: 'Shared PostgreSQL with tenant-scoped records' },
        ]}
        capabilities={[
          { name: 'Multi-tenant foundation', description: 'Separate customer tenants, memberships, tenant roles, platform administrators, and application-specific authorization contexts.' },
          { name: 'Seller portal', description: 'Provide a tenant-aware workspace for teams, settings, store connections, AI configuration, and emerging commerce workflows.' },
          { name: 'Platform administration', description: 'Operate tenants, owners, users, subscriptions, feature settings, and audited platform-level actions from a separate admin application.' },
          { name: 'Store connection model', description: 'Represent commerce platforms, credentials, authorization state, synchronization state, and normalized listing data behind tenant boundaries.' },
          { name: 'Configurable AI access', description: 'Model managed or tenant-provided AI settings while keeping provider credentials protected and AI availability explicit.' },
          { name: 'Documented AI workflow', description: 'Define listing improvement and customer reply drafts as human-reviewed suggestions rather than automatic writes to external platforms.' },
        ]}
        architecture={[
          { name: 'Website', description: 'Next.js public application for product information, public content, and entry points.' },
          { name: 'Portal', description: 'Next.js customer SaaS workspace for tenant teams, stores, listings, and AI-assisted operations.' },
          { name: 'Admin', description: 'Next.js internal platform application for tenants, users, subscriptions, settings, and audits.' },
          { name: 'API', description: 'FastAPI service for authentication, authorization, tenant isolation, commerce data, and integrations.' },
        ]}
        technology={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'pnpm workspace']}
        prerequisites={['Node.js with Corepack and pnpm', 'Python with virtual environment support', 'A running PostgreSQL database', 'Environment configuration for frontend and API services']}
        quickStart={`git clone https://github.com/imoogoo/sellohub.git
cd sellohub
corepack enable pnpm
pnpm install
pnpm dev:all`}
        repositories={[
          { label: 'Source repository', href: 'https://github.com/imoogoo/sellohub' },
          { label: 'Architecture documentation', href: 'https://github.com/imoogoo/sellohub/blob/main/docs/architecture.md' },
          { label: 'Product and domain design', href: 'https://github.com/imoogoo/sellohub/blob/main/docs/product-design.md' },
        ]}
        productHref="/sello"
      />
    </>
  )
}