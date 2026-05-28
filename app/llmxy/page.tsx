import { ArrowsRightLeftIcon, BoltIcon, ChartBarIcon, CpuChipIcon, ShieldCheckIcon } from '@heroicons/react/20/solid'
import Background from "@/components/Background"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'llmxy - LLM Token Distribution and Intelligent Routing',
  description: 'llmxy is an LLM token distribution and intelligent routing solution that helps teams manage, balance, and optimize traffic across multiple large language model providers.',
}

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
            alt="llmxy Dashboard"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
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
