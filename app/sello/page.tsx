import { ChartBarIcon, ChatBubbleLeftRightIcon, CpuChipIcon, ServerIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import JsonLd from '@/components/JsonLd'
import LocalizedOpenSourceDetails from '@/components/LocalizedOpenSourceProjectPage'
import ProductEdition from '@/components/ProductEdition'
import { selloProductMessages } from '@/i18n/messages/products/sello'
import { getLocale } from '@/i18n/server'
import { createBreadcrumbJsonLd, createPageMetadata } from '../seo'

export async function generateMetadata() {
  const locale = await getLocale()
  const messages = selloProductMessages[locale]

  return createPageMetadata({
    title: messages.seoTitle,
    description: messages.seoDescription,
    path: '/sello',
    keywords: messages.seoKeywords,
    locale,
  })
}

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

export default async function Sello() {
  const locale = await getLocale()
  const messages = selloProductMessages[locale]
  const localizedCapabilities = capabilities.map((capability, index) => ({ ...capability, ...messages.capabilities[index] }))
  const localizedJsonLd = createBreadcrumbJsonLd([
    { name: messages.breadcrumbHome, path: '/' },
    { name: 'Sello', path: '/sello' },
  ], locale)

  return (
    <>
      <JsonLd data={localizedJsonLd} />
      <main className="relative isolate overflow-hidden bg-transparent">
        <section className="pb-20 pt-24 sm:pb-28 sm:pt-32">
          <div className="site-container grid gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-base font-semibold leading-7 text-primary-700">{messages.eyebrow}</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">Sello</h1>
              <p className="mt-6 text-xl leading-8 text-slate-700">
                {messages.heroSummary}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
                {messages.heroDescription}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="/contact"
                  className="inline-flex justify-center rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold text-white! shadow-lg shadow-primary-950/20 transition-all duration-300 hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900"
                >
                  {messages.discussCta}
                </a>
                <a
                  href="#open-source"
                  className="text-sm font-semibold leading-6 text-slate-900 transition-colors hover:text-primary-800"
                >
                  {messages.openSourceCta} <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </div>

            <div className="border-l border-slate-200 pl-6 sm:pl-10">
              <p className="text-sm font-semibold uppercase text-primary-700">{messages.surfacesEyebrow}</p>
              <dl className="mt-5 divide-y divide-slate-200 border-y border-slate-200">
                {messages.surfaces.map((surface) => (
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
              <p className="text-sm font-semibold uppercase text-primary-700">{messages.capabilitiesEyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{messages.capabilitiesTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {messages.capabilitiesDescription}
              </p>
            </div>

            <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {localizedCapabilities.map((capability) => (
                <article key={capability.name} className="border-t border-slate-300 pt-6">
                  <capability.icon aria-hidden="true" className="h-6 w-6 text-primary-700" />
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{capability.name}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{capability.description}</p>
                </article>
              ))}
            </div>

            <ProductEdition
              projectName="Sello"
              description={messages.edition.description}
              features={messages.edition.features}
              openSourceHref="#open-source"
              eyebrow={messages.edition.eyebrow}
              title={messages.edition.title}
              compareLabel={messages.edition.compareLabel}
            />
          </div>
        </section>

        <section className="site-section">
          <div className="site-container grid gap-14 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-semibold uppercase text-primary-700">{messages.screenshotsEyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">{messages.screenshotsTitle}</h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                {messages.screenshotsDescription}
              </p>
            </div>
            <dl className="divide-y divide-slate-200 border-y border-slate-200">
              {messages.screenshotCoverage.map((item) => (
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
              <p className="text-sm font-semibold uppercase text-primary-700">{messages.closingEyebrow}</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{messages.closingTitle}</h2>
            </div>
            <a
              href="/contact"
              className="inline-flex shrink-0 justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white! transition-colors hover:bg-primary-800"
            >
              {messages.closingCta}
            </a>
          </div>
        </section>

        <LocalizedOpenSourceDetails project="sello" />
      </main>
    </>
  )
}