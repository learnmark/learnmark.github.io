import Background from "@/components/Background"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cloud Consulting',
  description: 'Cloud consulting for platform modernization, cloud-native architecture, migration, DevOps, reliability, and cost optimization.',
}

const capabilities = [
  {
    name: 'Cloud Strategy & Architecture',
    description: 'Assess your application portfolio, define a pragmatic cloud roadmap, and design secure landing zones and target architectures.',
  },
  {
    name: 'Migration & Modernization',
    description: 'Move legacy workloads safely with phased migration plans, containerization, service decomposition, and operational readiness checks.',
  },
  {
    name: 'Platform Engineering',
    description: 'Build developer platforms with infrastructure as code, CI/CD, observability, security guardrails, and self-service workflows.',
  },
  {
    name: 'Reliability & Cost Optimization',
    description: 'Improve availability, incident response, performance, and cloud spend through measurable reliability and FinOps practices.',
  },
]

export default function CloudConsulting() {
  return (
    <div className="relative isolate py-24 sm:py-32">
      <Background />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-primary-600">Cloud Consulting</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Modern cloud platforms for reliable delivery</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Learnmark helps teams modernize infrastructure, applications, and delivery workflows so cloud adoption becomes a business capability rather than another operating burden.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <div key={capability.name} className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">{capability.name}</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex items-center gap-x-6">
          <a
            href="/contact"
            className="rounded-md bg-primary-800 px-3.5 py-2.5 text-sm font-semibold !text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900 transition-all duration-300"
          >
            Discuss a cloud project
          </a>
          <a href="/solutions/devops" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-800">
            Explore platform engineering <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}