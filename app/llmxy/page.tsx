import { ArrowsRightLeftIcon, BoltIcon, ChartBarIcon, CpuChipIcon, ShieldCheckIcon } from '@heroicons/react/20/solid'
import Background from "@/components/Background"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'llmxy - LLM Token Distribution and Intelligent Routing',
  description: 'llmxy is an LLM token distribution and intelligent routing solution that helps teams manage, balance, and optimize traffic across multiple large language model providers.',
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

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <Background />

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-primary-600">AI Infrastructure</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">llmxy</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                LLM token distribution and intelligent routing solution. Unify access to multiple large language model providers, balance token usage, and route every request to the best-fit model automatically.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="llmxy smart routing dashboard"
            src="/images/llmxy/admin-smart-routing.png"
            className="w-[48rem] max-w-none rounded-xl bg-white object-cover object-left-top shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                llmxy sits in front of your LLM providers as a unified gateway. It distributes tokens across accounts and keys, routes each request to the most suitable model based on cost, latency, and capability, and gives you full visibility into how your AI workloads consume resources.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ArrowsRightLeftIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Intelligent Routing.</strong> Route requests to the optimal model and provider based on prompt characteristics, cost, latency, and availability.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BoltIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Token Distribution.</strong> Pool and distribute tokens across multiple keys and accounts with quota controls, rate limiting, and automatic failover.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CpuChipIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Multi-Provider Support.</strong> One unified API in front of OpenAI, Anthropic, and other major LLM providers — switch or mix without changing your application code.
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
                    <strong className="font-semibold text-gray-900">Secure by Design.</strong> Centralized key management, request auditing, and policy enforcement keep your AI traffic compliant and safe.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Built for modern cloud-native environments, llmxy is lightweight, horizontally scalable, and easy to deploy. Stop managing keys, quotas, and provider quirks by hand — let llmxy handle the plumbing so your team can focus on building great AI products.
              </p>
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
                        className="aspect-[16/10] w-full bg-gray-50 object-cover object-left-top"
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
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Open Source & Enterprise Ready</h2>
              <p className="mt-6">
                llmxy is open source and community driven. Use the community edition to get started in minutes, or talk to us about enterprise deployments with advanced security, multi-tenant isolation, and dedicated support.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://github.com/wilsonwu/llmxy"
                  target="_blank"
                  className="rounded-md bg-primary-800 px-3.5 py-2.5 text-sm font-semibold !text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900 transition-all duration-300"
                >
                  View on GitHub
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
  )
}
