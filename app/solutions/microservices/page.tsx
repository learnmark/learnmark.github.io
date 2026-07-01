import JsonLd from '@/components/JsonLd'
import { createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from '../../seo'

const microservicesDescription = 'Microservices modernization consulting for cloud-native architecture, incremental migration, observability, and resilient distributed systems.'
const microservicesKeywords = ['microservices consulting', 'microservices modernization', 'cloud-native architecture', 'distributed systems', 'service decomposition']

export const metadata = createPageMetadata({
  title: 'Microservices Modernization',
  description: microservicesDescription,
  path: '/solutions/microservices',
  keywords: microservicesKeywords,
})

const microservicesJsonLd = [
  createServiceJsonLd({
    name: 'Microservices Modernization',
    description: microservicesDescription,
    path: '/solutions/microservices',
    serviceType: 'Microservices modernization consulting',
    keywords: microservicesKeywords,
  }),
  createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Microservices Modernization', path: '/solutions/microservices' },
  ]),
]

export default function Microservices() {
  return (
    <>
      <JsonLd data={microservicesJsonLd} />
      <div className="relative isolate py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-primary-600">Cloud Consulting</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Microservices Modernization</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Modernize monolithic applications into cloud-ready services with clear boundaries, resilient integration patterns, and observability from day one.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Architecture Design</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Design service boundaries, contracts, data ownership, and integration patterns for scalable cloud systems.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Migration Strategy</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Create safe, incremental migration plans from legacy monoliths without freezing product delivery.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Service Mesh & Observability</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Implement tracing, metrics, service mesh, and reliability practices for distributed systems.</p>
              </div>
           </div>
        </div>
      </div>
      </div>
    </>
  )
}
