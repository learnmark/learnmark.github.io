import { ArrowsRightLeftIcon, BoltIcon, ChartBarIcon, CpuChipIcon, ShieldCheckIcon } from '@heroicons/react/20/solid'
import JsonLd from '@/components/JsonLd'
import ProductEdition from '@/components/ProductEdition'
import { llmxyProductMessages } from '@/i18n/messages/products/llmxy'
import { getLocale } from '@/i18n/server'
import { createBreadcrumbJsonLd, createPageMetadata, createSoftwareApplicationJsonLd } from '../seo'

export async function generateMetadata() {
  const locale = await getLocale()
  const messages = llmxyProductMessages[locale]

  return createPageMetadata({
    title: messages.seoTitle,
    description: messages.seoDescription,
    path: '/llmxy',
    keywords: messages.seoKeywords,
    locale,
    images: [
      {
        url: '/images/llmxy/admin-smart-routing.png',
        width: 1200,
        height: 750,
        alt: messages.heroImageAlt,
      },
    ],
  })
}


const screenshots = [
  {
    src: '/images/llmxy/user-overview.png',
    alt: 'llmxy user overview dashboard',
    title: 'User overview',
    description: 'Account balance, subscriptions, and quick-start API examples give users a clear path from signup to first request.',
  },
  {
    src: '/images/llmxy/user-models-api.png',
    alt: 'llmxy available models and API examples',
    title: 'Models and API snippets',
    description: 'Expose available models with protocol tags and copy-ready curl, JavaScript, and Python request examples.',
  },
  {
    src: '/images/llmxy/admin-smart-routing.png',
    alt: 'llmxy admin smart routing configuration',
    title: 'Smart routing rules',
    description: 'Configure weighted, fallback, and prompt-aware routes across upstream providers from the admin console.',
  },
  {
    src: '/images/llmxy/admin-usage-billing.png',
    alt: 'llmxy admin usage and billing logs',
    title: 'Usage and billing logs',
    description: 'Filter usage by user, key, model, status, and label while tracking cost, latency, and token consumption.',
  },
]


const featureIcons = [ArrowsRightLeftIcon, BoltIcon, CpuChipIcon, ChartBarIcon, ShieldCheckIcon]

export default async function Llmxy() {
  const locale = await getLocale()
  const messages = llmxyProductMessages[locale]
  const localizedScreenshots = screenshots.map((screenshot, index) => ({
    ...screenshot,
    ...messages.screenshots[index],
  }))
  const localizedJsonLd = [
    createSoftwareApplicationJsonLd({
      name: 'llmxy',
      description: messages.seoDescription,
      path: '/llmxy',
      applicationCategory: 'DeveloperApplication',
      image: '/images/llmxy/admin-smart-routing.png',
      keywords: messages.seoKeywords,
      locale,
    }),
    createBreadcrumbJsonLd([
      { name: messages.breadcrumbHome, path: '/' },
      { name: 'llmxy', path: '/llmxy' },
    ]),
  ]

  return (
    <>
      <JsonLd data={localizedJsonLd} />
      <div className="site-section site-page bg-transparent px-6 lg:overflow-visible lg:px-0">

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="site-product-grid-row lg:row-start-1">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-primary-700">{messages.eyebrow}</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">llmxy</h1>
              <p className="mt-6 text-xl leading-8 text-slate-700">
                {messages.heroDescription}
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt={messages.heroImageAlt}
            src="/images/llmxy/admin-smart-routing.png"
            className="w-3xl max-w-none rounded-2xl bg-white object-cover object-top-left shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/10 sm:w-228"
          />
        </div>
        <div className="site-product-grid-row lg:row-start-2">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-slate-700 lg:max-w-lg">
              <p>
                {messages.introduction}
              </p>
              <ul role="list" className="mt-8 space-y-8 text-slate-600">
                {messages.features.map((feature, index) => {
                  const FeatureIcon = featureIcons[index]
                  return (
                    <li key={feature.name} className="flex gap-x-3">
                      <FeatureIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-600" />
                      <span>
                        <strong className="font-semibold text-slate-950">{feature.name}.</strong> {feature.description}
                      </span>
                    </li>
                  )
                })}
              </ul>
              <p className="mt-8">
                {messages.managedSummary}
              </p>

              <ProductEdition
                projectName="llmxy"
                description={messages.edition.description}
                features={messages.edition.features}
                openSourceHref="/open-source/llmxy"
                eyebrow={messages.edition.eyebrow}
                title={messages.edition.title}
                compareLabel={messages.edition.compareLabel}
              />

              <div className="mt-16">
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">{messages.screenshotsTitle}</h2>
                <p className="mt-6">
                  {messages.screenshotsDescription}
                </p>
                <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-10">
                  {localizedScreenshots.map((screenshot) => (
                    <figure key={screenshot.src} className="overflow-hidden rounded-lg bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/10">
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className="aspect-16/10 w-full bg-slate-50 object-cover object-top-left"
                        loading="lazy"
                      />
                      <figcaption className="border-t border-slate-200 p-5">
                        <h3 className="font-semibold text-slate-950">{screenshot.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{screenshot.description}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-950">{messages.closingTitle}</h2>
              <p className="mt-6">
                {messages.closingDescription}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-x-6">
                <a
                  href="/open-source/llmxy"
                  className="inline-flex justify-center rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold text-white! shadow-lg shadow-primary-950/20 transition-all duration-300 hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900"
                >
                  {messages.openSourceCta}
                </a>
                <a href="/contact" className="text-sm font-semibold leading-6 text-slate-900 hover:text-primary-800">
                  {messages.salesCta} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
