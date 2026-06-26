import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'API and AI Gateway Consulting',
  description: 'Gateway consulting for API and LLM traffic, authentication, rate limiting, routing, observability, and governance.',
}

export default function Gateway() {
  return (
    <div className="relative isolate py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-primary-600">AI and Cloud Consulting</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">API & AI Gateway Consulting</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Secure, route, observe, and govern traffic across APIs, microservices, and LLM providers with gateway patterns built for production operations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Security & Policy</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Centralize authentication, authorization, key management, and policy enforcement.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Traffic Management</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Implement rate limiting, load balancing, failover, routing, and provider-level traffic controls.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Observability & Governance</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Track usage, latency, cost, errors, and compliance signals across API and AI workloads.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
