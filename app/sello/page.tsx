import { ChartBarIcon, CpuChipIcon, ServerIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import JsonLd from '@/components/JsonLd'
import { createBreadcrumbJsonLd, createPageMetadata } from '../seo'

const selloDescription = 'Sello is an open-source intelligent SaaS workspace designed to help e-commerce sellers connect stores, organize operations, and turn AI guidance into reviewed actions.'
const selloKeywords = ['Sello', 'open source e-commerce SaaS', 'AI commerce assistant', 'multi-tenant commerce platform', 'product listing optimization']

export const metadata = createPageMetadata({
  title: 'Sello - Open Source AI Commerce Assistant',
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
    description: 'Bring store connections, authorization state, synchronization status, and operational context into one tenant-aware workspace.',
    icon: ServerIcon,
  },
  {
    name: 'Unified product workspace',
    description: 'Normalize listings from different commerce platforms so teams can review product content, inventory context, and store data consistently.',
    icon: ChartBarIcon,
  },
  {
    name: 'AI-assisted optimization',
    description: 'Generate reviewable suggestions for listing titles and descriptions using managed AI or a tenant-controlled model provider.',
    icon: CpuChipIcon,
  },
  {
    name: 'Team-ready SaaS foundation',
    description: 'Separate tenant and platform administration with member roles, scoped permissions, account lifecycle controls, and audit-aware operations.',
    icon: UserGroupIcon,
  },
  {
    name: 'Human-controlled workflows',
    description: 'Keep AI-generated listing improvements, customer reply drafts, and future operational tasks visible and subject to user confirmation.',
    icon: ShieldCheckIcon,
  },
]

const productSurfaces = [
  { name: 'Website', detail: 'Public product information and entry points' },
  { name: 'Portal', detail: 'Seller workspace for teams, stores, listings, and AI tools' },
  { name: 'Admin', detail: 'Platform operations for tenants, users, subscriptions, and audits' },
  { name: 'API', detail: 'Shared FastAPI service for identity, tenancy, data, and integrations' },
]

const technology = ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'pnpm workspace']

export default function Sello() {
  return (
    <>
      <JsonLd data={selloJsonLd} />
      <main className="relative isolate overflow-hidden bg-transparent">
        <section className="px-6 pb-20 pt-24 sm:pb-28 sm:pt-32 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-base font-semibold leading-7 text-primary-700">Open Source Commerce Platform</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">Sello</h1>
              <p className="mt-6 text-xl leading-8 text-slate-700">
                An intelligent SaaS workspace for e-commerce sellers who want to connect store operations, organize product information, and use AI without giving up human review.
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
                Sello is under active development. Its roadmap starts with a secure multi-tenant foundation and grows toward unified listings, seller insights, customer support assistance, and confirm-before-execution AI workflows.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://github.com/imoogoo/sellohub"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold text-white! shadow-lg shadow-primary-950/20 transition-all duration-300 hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900"
                >
                  View on GitHub
                </a>
                <a
                  href="https://github.com/imoogoo/sellohub/tree/main/docs"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold leading-6 text-slate-900 transition-colors hover:text-primary-800"
                >
                  Read project docs <span aria-hidden="true">-&gt;</span>
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

        <section id="capabilities" className="border-y border-slate-200 bg-white/65 px-6 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-primary-700">Product direction</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">A practical operating layer for commerce teams</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The project is designed around the daily work of sellers, operators, support teams, and platform administrators rather than isolated AI features.
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
          </div>
        </section>

        <section className="px-6 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-primary-700">Technology</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Built as an open monorepo</h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                Independent web applications share a unified API and a tenant-aware data model, keeping customer workspaces separate from platform administration.
              </p>
            </div>
            <div className="flex flex-wrap content-start gap-3">
              {technology.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 px-6 py-20 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase text-primary-700">Open and evolving</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Follow the project as the commerce workflows take shape.</h2>
            </div>
            <a
              href="https://github.com/imoogoo/sellohub"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white! transition-colors hover:bg-primary-800"
            >
              Explore the repository
            </a>
          </div>
        </section>
      </main>
    </>
  )
}