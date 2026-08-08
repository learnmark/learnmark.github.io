import { ChartBarIcon, ClipboardDocumentCheckIcon, LockClosedIcon, ServerIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import JsonLd from '@/components/JsonLd'
import LiveDemo from '@/components/LiveDemo'
import ProductEdition from '@/components/ProductEdition'
import { letscrumLiveDemo, letscrumLiveDemoMessages } from '@/i18n/messages/letscrum-live-demo'
import { letscrumProductMessages } from '@/i18n/messages/products/letscrum'
import { getLocale } from '@/i18n/server'
import { createBreadcrumbJsonLd, createPageMetadata, createSoftwareApplicationJsonLd } from '../seo'

export async function generateMetadata() {
  const locale = await getLocale()
  const messages = letscrumProductMessages[locale]

  return createPageMetadata({
    title: messages.seoTitle,
    description: messages.seoDescription,
    path: '/letscrum',
    keywords: messages.seoKeywords,
    locale,
    images: [
      {
        url: '/images/letscrum/04-taskboard.png',
        width: 1440,
        height: 770,
        alt: messages.heroImageAlt,
      },
    ],
  })
}


const screenshots = [
  {
    src: '/images/letscrum/01-organizations.png',
  },
  {
    src: '/images/letscrum/02-projects.png',
  },
  {
    src: '/images/letscrum/03-project-overview.png',
  },
  {
    src: '/images/letscrum/04-taskboard.png',
  },
  {
    src: '/images/letscrum/05-sprint-backlog.png',
  },
  {
    src: '/images/letscrum/06-burndown.png',
  },
]

const features = [
  {
    name: 'Sprint planning',
    description: 'Plan sprint goals, dates, backlog scope, ownership, and delivery commitments without heavyweight process overhead.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Team collaboration',
    description: 'Keep project members, assignees, and work states visible so everyone understands progress and responsibility.',
    icon: UserGroupIcon,
  },
  {
    name: 'Taskboard execution',
    description: 'Move work from To Do to Done with cards, estimates, issue types, state indicators, and release checklist support.',
    icon: ChartBarIcon,
  },
  {
    name: 'Cloud-ready deployment',
    description: 'Run LetScrum as a lightweight system that can fit into modern cloud, container, and internal platform environments.',
    icon: ServerIcon,
  },
  {
    name: 'Role-aware administration',
    description: 'Manage user access, roles, and team membership with a straightforward admin experience.',
    icon: LockClosedIcon,
  },
]


export default async function LetScrum() {
  const locale = await getLocale()
  const messages = letscrumProductMessages[locale]
  const localizedFeatures = features.map((feature, index) => ({ ...feature, ...messages.features[index] }))
  const localizedScreenshots = screenshots.map((screenshot, index) => ({ ...screenshot, ...messages.screenshots[index] }))
  const localizedJsonLd = [
    createSoftwareApplicationJsonLd({
      name: 'LetScrum',
      description: messages.seoDescription,
      path: '/letscrum',
      applicationCategory: 'ProjectManagementApplication',
      image: '/images/letscrum/04-taskboard.png',
      keywords: messages.seoKeywords,
      locale,
    }),
    createBreadcrumbJsonLd([
      { name: messages.breadcrumbHome, path: '/' },
      { name: 'LetScrum', path: '/letscrum' },
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
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">LetScrum</h1>
              <p className="mt-6 text-xl leading-8 text-slate-700">
                {messages.heroDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {messages.badges.map((label) => (
                  <span key={label} className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                    {label}
                  </span>
                ))}
              </div>
              <LiveDemo
                {...letscrumLiveDemo}
                labels={letscrumLiveDemoMessages[locale]}
                className="mt-8"
              />
            </div>
          </div>
        </div>

        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt={messages.heroImageAlt}
            src="/images/letscrum/04-taskboard.png"
            width={1440}
            height={770}
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
                {localizedFeatures.map((feature) => (
                  <li key={feature.name} className="flex gap-x-3">
                    <feature.icon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-700" />
                    <span>
                      <strong className="font-semibold text-slate-950">{feature.name}.</strong> {feature.description}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8">
                {messages.managedSummary}
              </p>

              <ProductEdition
                projectName="LetScrum"
                description={messages.edition.description}
                features={messages.edition.features}
                openSourceHref="/open-source/letscrum"
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
                        width={1440}
                        height={770}
                        className="h-auto w-full bg-slate-50"
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
                  href="/open-source/letscrum"
                  className="inline-flex justify-center rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold text-white! shadow-lg shadow-primary-950/20 transition-all duration-300 hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900"
                >
                  {messages.openSourceCta}
                </a>
                <a href="/contact" className="text-sm font-semibold leading-6 text-slate-900 hover:text-primary-800">
                  {messages.contactCta} <span aria-hidden="true">-&gt;</span>
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