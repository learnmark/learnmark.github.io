import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Consulting',
  description: 'AI consulting for strategy, product delivery, LLM integration, AI gateways, evaluation, governance, and production readiness.',
}

export default function AI() {
  return (
    <div className="relative isolate py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-primary-600">AI Consulting</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Build AI products that survive production</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We help teams identify high-value AI use cases, design LLM-enabled workflows, integrate model providers, and put evaluation, observability, and governance around the systems they ship.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">AI Strategy & Roadmaps</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Prioritize use cases, assess feasibility, and define an adoption plan grounded in business value and engineering constraints.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">LLM Integration & Gateways</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Integrate model providers, route traffic, manage prompts, and centralize usage, policy, and cost visibility.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Evaluation & Governance</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Design quality checks, safety policies, observability, and operational controls for production AI workflows.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
