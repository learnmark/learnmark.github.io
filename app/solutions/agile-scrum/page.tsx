import JsonLd from '@/components/JsonLd'
import SolutionPage from '@/components/SolutionPage'
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

const capabilities = [
  {
    name: 'Delivery Operating Model',
    description: 'Shape team structure, planning cadence, decision paths, and delivery metrics around real outcomes.',
  },
  {
    name: 'Product & Technical Planning',
    description: 'Turn AI and cloud goals into scoped increments, architecture decisions, and measurable release plans.',
  },
  {
    name: 'Execution Coaching',
    description: 'Coach engineering managers, product owners, and teams through delivery risks and operating friction.',
  },
]

export default function AgileScrum() {
  return (
    <>
      <JsonLd data={deliveryJsonLd} />
      <SolutionPage
        eyebrow="Delivery Coaching"
        title="Delivery Coaching for AI and Cloud Teams"
        description="Accelerate complex AI and cloud initiatives with practical delivery coaching, product discovery, technical planning, and engineering leadership support."
        capabilities={capabilities}
        primaryCta={{ label: 'Discuss delivery coaching', href: '/contact' }}
        secondaryCta={{ label: 'Explore LetScrum', href: '/letscrum' }}
      />
    </>
  )
}
