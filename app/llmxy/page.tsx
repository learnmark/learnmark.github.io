import { ArrowsRightLeftIcon, BoltIcon, ChartBarIcon, CpuChipIcon, ShieldCheckIcon } from '@heroicons/react/20/solid'
import JsonLd from '@/components/JsonLd'
import ProductEdition from '@/components/ProductEdition'
import { createBreadcrumbJsonLd, createPageMetadata, createSoftwareApplicationJsonLd } from '../seo'

const llmxyDescription = 'The managed llmxy product helps teams operate a production LLM gateway with provider routing, access controls, usage billing, monitored deployment, and implementation support.'
const llmxyKeywords = ['llmxy', 'managed LLM gateway', 'LLM routing', 'multi-provider LLM API', 'AI billing analytics', 'LLM gateway operations']

export const metadata = createPageMetadata({
  title: 'llmxy - Managed LLM Gateway Operations',
  description: llmxyDescription,
  path: '/llmxy',
  keywords: llmxyKeywords,
  images: [
    {
      url: '/images/llmxy/admin-smart-routing.png',
      width: 1200,
      height: 750,
      alt: 'llmxy smart routing dashboard screenshot',
    },
  ],
})

const llmxyJsonLd = [
  createSoftwareApplicationJsonLd({
    name: 'llmxy',
    description: llmxyDescription,
    path: '/llmxy',
    applicationCategory: 'DeveloperApplication',
    image: '/images/llmxy/admin-smart-routing.png',
    keywords: llmxyKeywords,
  }),
  createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'llmxy', path: '/llmxy' },
  ]),
]

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

const managedFeatures = [
  {
    name: 'Managed private deployment',
    description: 'Provision llmxy in a dedicated Learnmark-managed or customer-controlled environment with repeatable releases, encrypted configuration, backups, and rollback procedures.',
  },
  {
    name: 'Provider and routing onboarding',
    description: 'Connect approved model providers, map model names, define route weights and policies, and validate failover behavior against your applications before rollout.',
  },
  {
    name: 'Production observability',
    description: 'Add environment-level metrics, alerting, capacity reviews, usage reconciliation, and operational runbooks around the gateway and its data services.',
  },
  {
    name: 'Upgrade and incident support',
    description: 'Receive coordinated upgrades, change reviews, troubleshooting, and a clear escalation path instead of operating the open-source stack alone.',
  },
]

export default function Example() {
  return (
    <>
      <JsonLd data={llmxyJsonLd} />
      <div className="relative isolate overflow-hidden bg-transparent px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-primary-600">Managed AI Infrastructure</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">llmxy</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Operate one production gateway for multiple model providers with controlled routing, OpenAI-compatible APIs, usage visibility, and a managed path from deployment to day-two operations.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="llmxy smart routing dashboard"
            src="/images/llmxy/admin-smart-routing.png"
            className="w-3xl max-w-none rounded-xl bg-white object-cover object-top-left shadow-xl ring-1 ring-gray-400/10 sm:w-228"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                llmxy sits between your applications and model providers as a unified control plane. Teams keep a stable client protocol while operators configure upstream channels, models, route policies, quotas, and billing from one place.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ArrowsRightLeftIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Operator-controlled routing.</strong> Configure upstream channels, model mappings, route policies, and weights without changing application clients.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BoltIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Gateway enforcement.</strong> Apply authentication, balance and quota checks, rate limiting, usage recording, and billing consistently at the gateway.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CpuChipIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Multi-provider access.</strong> Use an OpenAI-compatible protocol in front of OpenAI, Anthropic, Gemini, and translated upstream responses.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ChartBarIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Usage Analytics.</strong> Track token consumption, cost, and latency per model, key, and tenant with real-time dashboards.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Two relay paths.</strong> Start with the direct FastAPI relay or add the optional Envoy path for higher-throughput traffic and asynchronous usage reporting.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                The Learnmark product turns that open-source foundation into an operated gateway environment, with deployment engineering, provider onboarding, production controls, and an accountable support path.
              </p>

              <ProductEdition
                projectName="llmxy"
                description="The repository provides the gateway software. The Learnmark product adds the engineering and operational layer required to introduce it into a production platform and keep it healthy over time."
                features={managedFeatures}
                openSourceHref="/open-source/llmxy"
              />

              <div className="mt-16">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Product Screenshots</h2>
                <p className="mt-6">
                  The llmxy interface combines a self-service user console with an admin workspace for routing, monitoring, and billing operations.
                </p>
                <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-10">
                  {screenshots.map((screenshot) => (
                    <figure key={screenshot.src} className="overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/10">
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className="aspect-16/10 w-full bg-gray-50 object-cover object-top-left"
                        loading="lazy"
                      />
                      <figcaption className="border-t border-gray-200 p-5">
                        <h3 className="font-semibold text-gray-900">{screenshot.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600">{screenshot.description}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">An open foundation with an operated product path</h2>
              <p className="mt-6">
                Inspect and self-host the llmxy source code, or use the Learnmark product when your team needs implementation, environment ownership, controlled upgrades, and production support.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/open-source/llmxy"
                  className="rounded-md bg-primary-800 px-3.5 py-2.5 text-sm font-semibold text-white! shadow-sm hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900 transition-all duration-300"
                >
                  Explore Open Source
                </a>
                <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-800">
                  Contact Sales <span aria-hidden="true">→</span>
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
