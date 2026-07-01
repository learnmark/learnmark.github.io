import JsonLd from '@/components/JsonLd'
import { createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from '../../seo'

const deliveryDescription = 'Delivery coaching for AI and cloud teams, including agile practices, product discovery, technical planning, and execution rhythm.'
const deliveryKeywords = ['delivery coaching', 'agile coaching', 'Scrum consulting', 'AI delivery planning', 'cloud delivery coaching']

export const metadata = createPageMetadata({
  title: 'Delivery Coaching',
  description: deliveryDescription,
  path: '/solutions/agile-scrum',
  keywords: deliveryKeywords,
})

const deliveryJsonLd = [
  createServiceJsonLd({
    name: 'Delivery Coaching',
    description: deliveryDescription,
    path: '/solutions/agile-scrum',
    serviceType: 'Delivery coaching',
    keywords: deliveryKeywords,
  }),
  createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Delivery Coaching', path: '/solutions/agile-scrum' },
  ]),
]

export default function AgileScrum() {
  return (
    <>
      <JsonLd data={deliveryJsonLd} />
      <div className="relative isolate py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-primary-600">Delivery Coaching</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Delivery Coaching for AI and Cloud Teams</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Accelerate complex AI and cloud initiatives with practical delivery coaching, product discovery, technical planning, and engineering leadership support.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Delivery Operating Model</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Shape team structure, planning cadence, decision paths, and delivery metrics around real outcomes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Product & Technical Planning</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Turn AI and cloud goals into scoped increments, architecture decisions, and measurable release plans.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-900/5">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">Execution Coaching</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">Coach engineering managers, product owners, and teams through delivery risks and operating friction.</p>
              </div>
           </div>
        </div>
      </div>
      </div>
    </>
  )
}
