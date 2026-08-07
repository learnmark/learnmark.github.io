import { ChartBarIcon, ChatBubbleLeftRightIcon, CpuChipIcon, ServerIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import JsonLd from '@/components/JsonLd'
import ProductEdition from '@/components/ProductEdition'
import { createBreadcrumbJsonLd, createPageMetadata } from '../seo'

const selloDescription = 'The managed Sello product gives e-commerce teams an operated workspace for store connections, unified listings, AI-assisted content, customer replies, tenant controls, and production support.'
const selloKeywords = ['Sello', 'managed e-commerce SaaS', 'AI commerce assistant', 'multi-store commerce platform', 'product listing optimization', 'e-commerce operations']

export const metadata = createPageMetadata({
  title: 'Sello - Managed AI Commerce Workspace',
  description: selloDescription,
  path: '/sello',
  keywords: selloKeywords,
})

const selloJsonLd = createBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Sello', path: '/sello' },
])

const capabilities = [
  {
    name: 'Connected store operations',
    description: 'Manage store authorization, synchronization state, errors, and operational context from one tenant-aware workspace.',
    icon: ServerIcon,
  },
  {
    name: 'Unified product workspace',
    description: 'Review listings from different commerce platforms through a consistent product model while retaining source-platform context.',
    icon: ChartBarIcon,
  },
  {
    name: 'AI-assisted optimization',
    description: 'Generate reviewable title and description suggestions using managed AI or an approved tenant-controlled provider.',
    icon: CpuChipIcon,
  },
  {
    name: 'Customer reply assistance',
    description: 'Turn a customer question and selected product context into an editable reply draft that support staff review before sending.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Team and tenant controls',
    description: 'Separate customer workspaces from platform administration with member roles, scoped permissions, and account lifecycle controls.',
    icon: UserGroupIcon,
  },
  {
    name: 'Human-controlled workflows',
    description: 'Keep AI-generated listing improvements, reply drafts, and operational actions visible, editable, and subject to user confirmation.',
    icon: ShieldCheckIcon,
  },
]

const productSurfaces = [
  { name: 'Website', detail: 'Public product information and entry points' },
  { name: 'Portal', detail: 'Seller workspace for teams, stores, listings, and AI tools' },
  { name: 'Admin', detail: 'Platform operations for tenants, users, subscriptions, and audits' },
  { name: 'API', detail: 'Shared FastAPI service for identity, tenancy, data, and integrations' },
]

const managedFeatures = [
  {
    name: 'Marketplace connector delivery',
    description: 'Implement and validate selected store connections, credential lifecycles, field mappings, synchronization schedules, retries, and platform-specific error handling.',
  },
  {
    name: 'Tenant onboarding and controls',
    description: 'Provision customer tenants, establish owner and team roles, configure environment boundaries, and apply operational policies for each organization.',
  },
  {
    name: 'AI provider governance',
    description: 'Configure managed or customer-owned model providers, approved models, feature access, usage visibility, and review requirements for generated content.',
  },
  {
    name: 'Managed data and operations',
    description: 'Operate releases, backups, monitored synchronization jobs, incident triage, data repair procedures, and ongoing platform support.',
  },
]

const screenshotCoverage = [
  { name: 'Seller workspace', detail: 'Dashboard, tenant context, team access, and operational priorities' },
  { name: 'Stores and listings', detail: 'Connections, synchronization state, normalized products, and content review' },
  { name: 'AI and administration', detail: 'Provider settings, generated drafts, usage controls, tenants, and platform operations' },
]

export default function Sello() {
  return (
    <>
      <JsonLd data={selloJsonLd} />
      <main className="relative isolate overflow-hidden bg-transparent">
        <section className="pb-20 pt-24 sm:pb-28 sm:pt-32">
          <div className="site-container grid gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-base font-semibold leading-7 text-primary-700">Managed Commerce Operations</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">Sello</h1>
              <p className="mt-6 text-xl leading-8 text-slate-700">
                An operated workspace for e-commerce teams that need connected stores, consistent product information, and useful AI assistance without giving up human control.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
                Learnmark turns the public Sello foundation into a customer-ready product through connector delivery, tenant onboarding, governed AI configuration, monitored data flows, and production support.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="/contact"
                  className="inline-flex justify-center rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold text-white! shadow-lg shadow-primary-950/20 transition-all duration-300 hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900"
                >
                  Discuss Sello
                </a>
                <a
                  href="/open-source/sello"
                  className="text-sm font-semibold leading-6 text-slate-900 transition-colors hover:text-primary-800"
                >
                  Explore open source <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </div>

            <div className="border-l border-slate-200 pl-6 sm:pl-10">
              <p className="text-sm font-semibold uppercase text-primary-700">One platform, four surfaces</p>
              <dl className="mt-5 divide-y divide-slate-200 border-y border-slate-200">
                {productSurfaces.map((surface) => (
                  <div key={surface.name} className="grid gap-1 py-4 sm:grid-cols-[6rem_1fr] sm:gap-5">
                    <dt className="text-sm font-semibold text-slate-950">{surface.name}</dt>
                    <dd className="text-sm leading-6 text-slate-600">{surface.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="capabilities" className="site-section border-y border-slate-200 bg-white/65">
          <div className="site-container">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-primary-700">Product capabilities</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">A practical operating layer for commerce teams</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The product is organized around the daily work of sellers, operators, support teams, tenant owners, and platform administrators rather than isolated AI features.
              </p>
            </div>

            <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <article key={capability.name} className="border-t border-slate-300 pt-6">
                  <capability.icon aria-hidden="true" className="h-6 w-6 text-primary-700" />
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{capability.name}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{capability.description}</p>
                </article>
              ))}
            </div>

            <ProductEdition
              projectName="Sello"
              description="The public repository establishes the multi-tenant application foundation. The Learnmark product adds the connector implementation, onboarding, governance, and operational ownership needed for real commerce workloads."
              features={managedFeatures}
              openSourceHref="/open-source/sello"
            />
          </div>
        </section>

        <section className="site-section">
          <div className="site-container grid gap-14 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-primary-700">Product screenshots</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">The workflows the first screenshot set will cover</h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Real product screenshots will be added after the current seller portal and administration interfaces are ready for publication.
              </p>
            </div>
            <dl className="divide-y divide-slate-200 border-y border-slate-200">
              {screenshotCoverage.map((item) => (
                <div key={item.name} className="grid gap-2 py-5 sm:grid-cols-[10rem_1fr] sm:gap-6">
                  <dt className="font-semibold text-slate-950">{item.name}</dt>
                  <dd className="text-base leading-7 text-slate-600">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="site-section border-t border-slate-200">
          <div className="site-container flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase text-primary-700">Plan the product around your channels</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Start with the stores, workflows, and AI controls your team actually needs.</h2>
            </div>
            <a
              href="/contact"
              className="inline-flex shrink-0 justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white! transition-colors hover:bg-primary-800"
            >
              Plan a Sello deployment
            </a>
          </div>
        </section>
      </main>
    </>
  )
}