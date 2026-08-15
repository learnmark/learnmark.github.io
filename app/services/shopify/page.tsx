import Image from 'next/image'
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  CircleStackIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import JsonLd from '@/components/JsonLd'
import { shopifyMessages } from '@/i18n/messages/shopify'
import { getLocale } from '@/i18n/server'
import { createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from '../../seo'

export async function generateMetadata() {
  const locale = await getLocale()
  const messages = shopifyMessages[locale]

  return createPageMetadata({
    title: messages.seoTitle,
    description: messages.seoDescription,
    path: '/services/shopify',
    keywords: messages.seoKeywords,
    locale,
  })
}

const launchBarriers = [
  {
    name: 'Configuration is interconnected',
    description: 'Markets, domains, payments, shipping, tax, policies, and customer accounts must agree before real orders can flow safely.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Catalog structure comes first',
    description: 'Products, variants, collections, filters, metafields, and URLs need a model that still works as the range grows.',
    icon: Squares2X2Icon,
  },
  {
    name: 'A theme is only a starting point',
    description: 'Brand expression, mobile behavior, accessibility, performance, and editable sections require deliberate theme engineering.',
    icon: PaintBrushIcon,
  },
  {
    name: 'Every app is an architecture choice',
    description: 'Overlapping apps add recurring cost, slow pages, fragment data, and create dependencies that become difficult to remove.',
    icon: CircleStackIcon,
  },
  {
    name: 'International selling multiplies rules',
    description: 'Currencies, regional pricing, duties, delivery promises, translations, and consent requirements change by market.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Going live requires evidence',
    description: 'Test orders, analytics, SEO, redirects, email, fulfillment, legal content, and team workflows all need validation.',
    icon: RocketLaunchIcon,
  },
]

const capabilities = [
  {
    name: 'Commerce strategy & architecture',
    description: 'Turn markets, products, customer journeys, content, and operating requirements into an implementation-ready store plan.',
    icon: Squares2X2Icon,
  },
  {
    name: 'Configuration, Markets & checkout',
    description: 'Configure domains, Shopify Markets, payments, shipping, taxes, policies, customer accounts, and the settings behind daily trade.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Shopify theme & Liquid development',
    description: 'Build responsive sections, templates, and theme logic that express the brand while remaining practical for teams to manage.',
    icon: PaintBrushIcon,
  },
  {
    name: 'Catalog, variants & store data',
    description: 'Model products, variants, collections, metafields, filters, search, product content, recommendations, and migration data.',
    icon: ShoppingBagIcon,
  },
  {
    name: 'App selection & integrations',
    description: 'Choose the smallest useful app stack and connect analytics, email, fulfillment, support, ERP, and custom APIs cleanly.',
    icon: CircleStackIcon,
  },
  {
    name: 'Launch QA, training & support',
    description: 'Validate orders, mobile behavior, accessibility, performance, SEO, analytics, and operations, then prepare the team to run the store.',
    icon: RocketLaunchIcon,
  },
]

const process = [
  { step: '01', name: 'Discover', description: 'Align the brand, catalog, markets, customer journeys, integrations, and definition of launch readiness.' },
  { step: '02', name: 'Design', description: 'Turn the store architecture into a focused visual system and responsive commerce experience.' },
  { step: '03', name: 'Build', description: 'Configure Shopify, develop the theme, migrate content, and connect the services your operation needs.' },
  { step: '04', name: 'Launch', description: 'Validate the full purchase path, train the team, release the store, and support measured iteration.' },
]

const caseStudies = [
  {
    slug: 'moogoo',
    name: 'MooGoo',
    category: 'International direct-to-consumer pet supplies',
    summary: 'A Shopify storefront that turns a varied pet-accessory catalog into a clear path from product discovery to checkout and support.',
    href: 'https://imoogoo.com',
    image: '/images/shopify/moogoo-hero.webp',
    imageAlt: 'MooGoo Shopify storefront for everyday pet essentials',
    services: ['Store configuration', 'Theme development', 'Catalog architecture', 'International commerce'],
    delivered: [
      'Need-led collection navigation and responsive merchandising',
      'Detailed product pages with variants and structured buying information',
      'Regional currencies, multiple payment methods, accounts, policies, and support paths',
    ],
  },
]

export default async function ShopifyStoreDevelopmentPage() {
  const locale = await getLocale()
  const messages = shopifyMessages[locale]
  const localizedBarriers = launchBarriers.map((barrier, index) => ({ ...barrier, ...messages.barriers[index] }))
  const localizedCapabilities = capabilities.map((capability, index) => ({ ...capability, ...messages.capabilities[index] }))
  const localizedProcess = process.map((item, index) => ({ ...item, ...messages.process[index] }))
  const localizedCaseStudies = caseStudies.map((caseStudy) => ({ ...caseStudy, ...messages.caseStudy }))
  const localizedJsonLd = [
    createServiceJsonLd({
      name: messages.seoTitle,
      description: messages.seoDescription,
      path: '/services/shopify',
      serviceType: messages.serviceType,
      keywords: messages.seoKeywords,
      locale,
    }),
    createBreadcrumbJsonLd([
      { name: messages.breadcrumbHome, path: '/' },
      { name: messages.seoTitle, path: '/services/shopify' },
    ], locale),
  ]

  return (
    <>
      <JsonLd data={localizedJsonLd} />
      <main className="relative isolate overflow-hidden">
        <section className="relative flex min-h-[calc(100svh-8rem)] min-h-150 items-center overflow-hidden bg-transparent py-20">
          <div aria-hidden="true" className="absolute inset-y-0 right-[12%] w-px bg-primary-700/20 dark:bg-primary-500/35" />
          <div aria-hidden="true" className="absolute inset-y-0 right-[28%] w-px bg-slate-200 dark:bg-white/10" />

          <div className="site-container relative pt-6">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase text-emerald-700 dark:text-emerald-300">{messages.eyebrow}</p>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                {messages.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-200 sm:text-xl">
                {messages.description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact?interest=Shopify%20Store%20Development"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold !text-white shadow-lg shadow-slate-950/30 transition hover:bg-primary-600"
                >
                  {messages.primaryCta}
                  <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
                </a>
                <a
                  href="#shopify-barriers"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 backdrop-blur-sm transition hover:bg-slate-50 dark:border-white/40 dark:bg-white/10 dark:!text-white dark:hover:bg-white/20"
                >
                  {messages.secondaryCta}
                </a>
              </div>
            </div>

            <div className="mt-12 border-t border-slate-200 pt-6 dark:border-white/15">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">{messages.selectedWork}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{localizedCaseStudies.length} {localizedCaseStudies.length === 1 ? messages.caseStudyCount.singular : messages.caseStudyCount.plural}</p>
              </div>
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {localizedCaseStudies.map((caseStudy, index) => (
                  <a
                    key={caseStudy.slug}
                    href={`#case-study-${caseStudy.slug}`}
                    className="group flex w-72 flex-none items-center gap-4 rounded-lg border border-slate-200 bg-white/80 p-2.5 shadow-sm transition hover:border-primary-300 hover:bg-white dark:border-white/15 dark:bg-white/[0.06] dark:hover:border-primary-300 dark:hover:bg-white/10"
                  >
                    <span className="relative h-16 w-20 flex-none overflow-hidden rounded-md bg-slate-100">
                      <Image
                        fill
                        priority={index === 0}
                        src={caseStudy.image}
                        alt=""
                        className="object-cover"
                        sizes="80px"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-slate-950">{caseStudy.name}</span>
                      <span className="mt-1 block truncate text-xs text-slate-500">{caseStudy.category}</span>
                    </span>
                    <ArrowDownIcon aria-hidden="true" className="h-4 w-4 flex-none text-primary-700 transition group-hover:translate-y-0.5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 grid border-y border-slate-200 dark:border-white/15 sm:grid-cols-3">
              {messages.areas.map((area) => (
                <div key={area.name} className="border-b border-slate-200 py-5 last:border-b-0 dark:border-white/15 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
                  <p className="text-xs font-semibold uppercase text-primary-700 dark:text-primary-200">{area.name}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{area.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="shopify-barriers" className="site-section scroll-mt-24 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
          <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase text-primary-700">{messages.barriersEyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{messages.barriersTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {messages.barriersDescription}
              </p>
            </div>
            <div className="grid border-t border-slate-200 sm:grid-cols-2">
              {localizedBarriers.map((barrier, index) => (
                <article key={barrier.name} className={`border-b border-slate-200 py-6 sm:px-6 ${index % 2 === 0 ? 'sm:border-r sm:pl-0' : 'sm:pr-0'}`}>
                  <barrier.icon aria-hidden="true" className="h-6 w-6 text-primary-700" />
                  <h3 className="mt-4 font-semibold text-slate-950">{barrier.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{barrier.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section">
          <div className="site-container">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-primary-700">{messages.capabilitiesEyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{messages.capabilitiesTitle}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {messages.capabilitiesDescription}
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
              {localizedCapabilities.map((capability) => (
                <article key={capability.name} className="bg-white p-6 sm:p-7">
                  <capability.icon aria-hidden="true" className="h-7 w-7 text-primary-700" />
                  <h3 className="mt-6 text-lg font-semibold text-slate-950">{capability.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section bg-slate-950 text-white">
          <div className="site-container">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase text-primary-200">{messages.processEyebrow}</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{messages.processTitle}</h2>
                <p className="mt-5 text-base leading-7 text-slate-400">
                  {messages.processDescription}
                </p>
              </div>
              <ol className="border-t border-white/15">
                {localizedProcess.map((item) => (
                  <li key={item.step} className="grid gap-3 border-b border-white/15 py-6 sm:grid-cols-[4rem_10rem_1fr] sm:items-start">
                    <span className="text-sm font-semibold text-primary-200">{item.step}</span>
                    <h3 className="font-semibold text-white">{item.name}</h3>
                    <p className="text-sm leading-6 text-slate-400">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="shopify-work" className="site-section scroll-mt-24 border-b border-slate-200">
          <div className="site-container grid gap-12 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase text-emerald-700">{messages.selectedWork}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{messages.workTitle}</h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                {messages.workDescription}
              </p>
            </div>

            <div className="grid gap-6">
              {localizedCaseStudies.map((caseStudy) => (
                <article id={`case-study-${caseStudy.slug}`} key={caseStudy.slug} className="scroll-mt-28 grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm sm:grid-cols-[0.85fr_1.15fr]">
                  <div className="relative min-h-64 bg-slate-100 sm:min-h-full">
                    <Image fill src={caseStudy.image} alt={caseStudy.imageAlt} className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase text-emerald-700">{caseStudy.category}</p>
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">{caseStudy.name}</h3>
                    <p className="mt-4 text-sm leading-6 text-slate-600">{caseStudy.summary}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {caseStudy.services.map((service) => (
                        <span key={service} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">{service}</span>
                      ))}
                    </div>

                    <ul className="mt-6 space-y-2 border-t border-slate-200 pt-5">
                      {caseStudy.delivered.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                          <span aria-hidden="true" className="mt-2.5 h-1 w-1 flex-none rounded-full bg-primary-700" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={caseStudy.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-800 transition hover:text-primary-700"
                    >
                      {caseStudy.visitStore}
                      <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section border-t border-slate-200 bg-white/75 dark:bg-slate-950">
          <div className="site-container flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-primary-700">{messages.closingEyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{messages.closingTitle}</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">{messages.closingDescription}</p>
            </div>
            <a
              href="/contact?interest=Shopify%20Store%20Development"
              className="inline-flex flex-none items-center gap-2 rounded-full bg-primary-800 px-6 py-3 text-sm font-semibold !text-white shadow-lg shadow-primary-950/20 transition hover:bg-primary-700"
            >
              {messages.closingCta}
              <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
    </>
  )
}