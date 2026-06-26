import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platform Engineering',
  description: 'Platform engineering and cloud operations consulting for CI/CD, infrastructure as code, observability, security, and reliable delivery.',
}

export default function DevOps() {
  return (
    <div className="relative isolate py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-primary-600">Cloud Consulting</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Platform Engineering & Cloud Operations</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Streamline development and operations with secure developer platforms, repeatable infrastructure, and delivery pipelines that make cloud software easier to ship and operate.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">CI/CD Automation</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Build robust continuous integration and deployment pipelines with quality, security, and rollback controls.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Infrastructure as Code</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Manage cloud infrastructure with reusable modules, environment standards, and policy guardrails.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Observability & Reliability</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Improve telemetry, incident response, service-level objectives, and operational confidence.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
