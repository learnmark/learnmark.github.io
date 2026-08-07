import Image from 'next/image'
import {
  ArrowRightIcon,
  ArrowTopRightOnSquareIcon,
  CircleStackIcon,
  CodeBracketSquareIcon,
  CreditCardIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import JsonLd from '@/components/JsonLd'
import { createBreadcrumbJsonLd, createPageMetadata, createServiceJsonLd } from '../../seo'

const shopifyDescription = 'Shopify store development for brands that need store configuration, custom theme development, catalog architecture, commerce integrations, and launch support.'
const shopifyKeywords = ['Shopify development services', 'Shopify store setup', 'Shopify theme development', 'Shopify agency', 'ecommerce website development']

export const metadata = createPageMetadata({
  title: 'Shopify Store Development',
  description: shopifyDescription,
  path: '/services/shopify',
  keywords: shopifyKeywords,
})

const shopifyJsonLd = [
  createServiceJsonLd({
    name: 'Shopify Store Development',
    description: shopifyDescription,
    path: '/services/shopify',
    serviceType: 'Shopify store development',
    keywords: shopifyKeywords,
  }),
  createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Shopify Store Development', path: '/services/shopify' },
  ]),
]

const capabilities = [
  {
    name: 'Store strategy & architecture',
    description: 'Shape the storefront around your markets, products, customers, navigation, content, and operational requirements.',
    icon: Squares2X2Icon,
  },
  {
    name: 'Store setup & configuration',
    description: 'Configure markets, domains, payments, shipping, taxes, policies, customer accounts, and the settings behind daily operations.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Custom theme development',
    description: 'Build responsive Shopify theme sections and templates that express your brand and remain practical for your team to manage.',
    icon: PaintBrushIcon,
  },
  {
    name: 'Catalog & merchandising',
    description: 'Structure products, variants, collections, search, filters, product content, recommendations, and personalized purchase paths.',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Apps & integrations',
    description: 'Connect payments, analytics, email, fulfillment, customer service, and custom APIs without weighing down the buying experience.',
    icon: CircleStackIcon,
  },
  {
    name: 'Quality, launch & support',
    description: 'Test responsive behavior, accessibility, performance, SEO, analytics, and critical purchase flows before and after launch.',
    icon: RocketLaunchIcon,
  },
]

const process = [
  { step: '01', name: 'Discover', description: 'Align the brand, catalog, markets, customer journeys, integrations, and definition of launch readiness.' },
  { step: '02', name: 'Design', description: 'Turn the store architecture into a focused visual system and responsive commerce experience.' },
  { step: '03', name: 'Build', description: 'Configure Shopify, develop the theme, migrate content, and connect the services your operation needs.' },
  { step: '04', name: 'Launch', description: 'Validate the full purchase path, train the team, release the store, and support measured iteration.' },
]

const caseFacts = [
  { value: '4', label: 'primary category paths on the homepage' },
  { value: '10', label: 'payment methods presented at checkout' },
  { value: '6', label: 'international service regions' },
  { value: 'End-to-end', label: 'journey from discovery to support' },
]

const caseScope = [
  {
    name: 'Brand-led responsive storefront',
    description: 'A warm, practical visual system carries MooGoo from its first-viewport brand promise through category discovery, editorial content, and mobile navigation.',
  },
  {
    name: 'Catalog built for discovery',
    description: 'Customers can browse by pet and need, including Walk & Travel, Feeding & Hydration, Toys & Enrichment, Beds & Home, Pet Apparel, Personalized, and Gifts.',
  },
  {
    name: 'Detailed product decisions',
    description: 'Product pages combine image galleries, variants, materials, dimensions, care information, shipping guidance, quantity controls, and installment messaging.',
  },
  {
    name: 'Connected customer journey',
    description: 'Search, customer accounts, cart, newsletter signup, contact, support, and policy content form one consistent experience around the catalog.',
  },
  {
    name: 'International commerce foundation',
    description: 'Regional selection, localized currencies, global service information, delivery guidance, and ten visible payment methods support cross-border shopping.',
  },
  {
    name: 'Trust at every stage',
    description: 'Free-shipping messaging, clear product information, customer support, returns, privacy, terms, and legal content reduce uncertainty before purchase.',
  },
]

const categoryImages = [
  { name: 'Walk & Travel', description: 'Out-the-door essentials', src: '/images/shopify/moogoo-walk-travel.webp' },
  { name: 'Feeding & Hydration', description: 'Practical bowls and drinkware', src: '/images/shopify/moogoo-feeding.webp' },
  { name: 'Toys & Enrichment', description: 'Products made for busy paws', src: '/images/shopify/moogoo-toys.webp' },
  { name: 'Beds & Home', description: 'Soft places to land', src: '/images/shopify/moogoo-beds.webp' },
]

export default function ShopifyStoreDevelopmentPage() {
  return (
    <>
      <JsonLd data={shopifyJsonLd} />
      <main className="relative isolate overflow-hidden">
        <section className="relative flex min-h-[calc(100svh-8rem)] max-h-[760px] min-h-150 items-end overflow-hidden sm:items-center">
          <Image
            priority
            fill
            src="/images/shopify/moogoo-hero.webp"
            alt="MooGoo Shopify storefront featuring a dog and cat with everyday pet products"
            className="object-cover object-[62%_center]"
            sizes="100vw"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.94)_0%,rgba(15,23,42,0.82)_43%,rgba(15,23,42,0.2)_78%,rgba(15,23,42,0.08)_100%)]" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/55 to-transparent" />

          <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-24 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-emerald-300">Shopify Store Development</p>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Shopify stores built for how your brand sells.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                From store configuration and custom theme development to catalogs, integrations, and launch, we build commerce experiences customers can trust and teams can operate.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact?interest=Shopify%20Store%20Development"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-6 py-3 text-sm font-semibold !text-white shadow-lg shadow-slate-950/30 transition hover:bg-primary-600"
                >
                  Discuss your Shopify store
                  <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
                </a>
                <a
                  href="#moogoo-case-study"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold !text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  See the MooGoo case study
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white/85 px-6 py-8 backdrop-blur-xl lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-7 lg:grid-cols-4">
            {['Store configuration', 'Custom Shopify themes', 'Commerce integrations', 'Launch & optimization'].map((item, index) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 text-sm font-bold text-primary-700">0{index + 1}</span>
                <p className="text-sm font-semibold leading-6 text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-20 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-primary-700">What we deliver</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">A complete Shopify build, not just a theme install.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                We connect the visible storefront to the configuration, content, integrations, and operating model that make it useful after launch.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((capability) => (
                <article key={capability.name} className="bg-white p-6 sm:p-7">
                  <capability.icon aria-hidden="true" className="h-7 w-7 text-primary-700" />
                  <h3 className="mt-6 text-lg font-semibold text-slate-950">{capability.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-20 text-white sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase text-primary-200">How we work</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">From commerce idea to launch-ready store.</h2>
                <p className="mt-5 text-base leading-7 text-slate-400">
                  One delivery path keeps customer experience, Shopify configuration, theme code, and operational readiness aligned.
                </p>
              </div>
              <ol className="border-t border-white/15">
                {process.map((item) => (
                  <li key={item.step} className="grid gap-3 border-b border-white/15 py-6 sm:grid-cols-[4rem_10rem_1fr] sm:items-start">
                    <span className="text-sm font-semibold text-primary-200">{item.step}</span>
                    <h3 className="font-semibold text-white">{item.name}</h3>
                    <p className="text-sm leading-6 text-slate-400">{item.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="moogoo-case-study" className="scroll-mt-24 px-6 py-20 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase text-emerald-700">Success story · MooGoo</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">Turning everyday pet care into a clear, global shopping experience.</h2>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  MooGoo needed a storefront that could make a broad pet-accessory catalog feel approachable while supporting product detail, personalized ranges, international customers, and the trust signals shoppers expect from a modern store.
                </p>
              </div>
              <a
                href="https://imoogoo.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-800 transition hover:text-primary-700"
              >
                Visit the live store
                <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>

            <div className="relative mt-12 aspect-[16/9] min-h-80 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10">
              <Image
                fill
                src="/images/shopify/moogoo-hero.webp"
                alt="MooGoo homepage hero for everyday pet essentials"
                className="object-cover"
                sizes="(min-width: 1280px) 1216px, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 bg-gradient-to-t from-slate-950/80 to-transparent px-5 pb-5 pt-24 sm:px-8 sm:pb-8">
                <div>
                  <p className="text-xs font-semibold uppercase text-emerald-200">MooGoo</p>
                  <p className="mt-2 max-w-xl text-lg font-semibold text-white sm:text-2xl">Everyday essentials for life with pets</p>
                </div>
                <span className="hidden rounded-full border border-white/25 bg-slate-950/30 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm sm:inline-flex">Live Shopify store</span>
              </div>
            </div>

            <dl className="mt-10 grid grid-cols-2 border-y border-slate-200 lg:grid-cols-4">
              {caseFacts.map((fact) => (
                <div key={fact.label} className="border-slate-200 px-4 py-7 first:pl-0 odd:border-r lg:border-r lg:last:border-r-0 lg:px-7">
                  <dt className="text-2xl font-bold text-slate-950 sm:text-3xl">{fact.value}</dt>
                  <dd className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">{fact.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-20 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase text-primary-700">The delivered experience</p>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">Every customer-facing detail works as one store.</h3>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  The storefront joins merchandising and operations rather than treating them as separate layers. Customers can understand the brand, find the right range, evaluate a product, complete a purchase, and get support without leaving the same visual and content system.
                </p>
              </div>
              <div className="grid border-t border-slate-200 sm:grid-cols-2">
                {caseScope.map((item, index) => (
                  <article key={item.name} className={`border-b border-slate-200 py-6 sm:px-6 ${index % 2 === 0 ? 'sm:border-r sm:pl-0' : 'sm:pr-0'}`}>
                    <h4 className="font-semibold text-slate-950">{item.name}</h4>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-20">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase text-primary-700">Merchandising system</p>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">Multiple ways into the catalog, one coherent brand.</h3>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  Need-based category imagery helps customers move quickly from the homepage into focused collections while preserving the practical, companionable MooGoo identity.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
                {categoryImages.map((category) => (
                  <figure key={category.name}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100">
                      <Image fill src={category.src} alt={`${category.name} category on the MooGoo Shopify store`} className="object-cover" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                    </div>
                    <figcaption className="mt-4">
                      <p className="font-semibold text-slate-950">{category.name}</p>
                      <p className="mt-1 text-sm text-slate-500">{category.description}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="mt-20 grid items-center gap-10 border-y border-slate-200 py-12 lg:grid-cols-2 lg:gap-16 lg:py-16">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-100">
                  <Image fill src="/images/shopify/moogoo-product-hammock.jpg" alt="MooGoo product photography for a hanging cat hammock" className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-100">
                  <Image fill src="/images/shopify/moogoo-personalized.webp" alt="MooGoo personalized pet accessories collection" className="object-cover" sizes="(min-width: 1024px) 25vw, 50vw" />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase text-emerald-700">From product to relationship</p>
                <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">Detailed products, personalized paths, and reasons to return.</h3>
                <p className="mt-5 text-base leading-7 text-slate-600">
                  Rich product media and structured specifications support confident decisions. A dedicated personalized collection path creates room for made-for-your-pet offers, while customer accounts and email updates extend the relationship beyond a single order.
                </p>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="flex gap-3">
                    <MagnifyingGlassIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-primary-700" />
                    <p className="text-sm leading-6 text-slate-600"><strong className="text-slate-950">Clear evaluation:</strong> imagery, variants, dimensions, materials, care, and delivery information.</p>
                  </div>
                  <div className="flex gap-3">
                    <CreditCardIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-primary-700" />
                    <p className="text-sm leading-6 text-slate-600"><strong className="text-slate-950">Flexible checkout:</strong> regional currencies, installment messaging, and familiar payment methods.</p>
                  </div>
                  <div className="flex gap-3">
                    <GlobeAltIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-primary-700" />
                    <p className="text-sm leading-6 text-slate-600"><strong className="text-slate-950">Global readiness:</strong> clear international coverage and destination-aware delivery.</p>
                  </div>
                  <div className="flex gap-3">
                    <CodeBracketSquareIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-primary-700" />
                    <p className="text-sm leading-6 text-slate-600"><strong className="text-slate-950">Manageable system:</strong> reusable theme sections keep content changes practical.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white/75 px-6 py-20 dark:bg-slate-950 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-primary-700">Start your store</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Build a Shopify store your customers and team can rely on.</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">Tell us about your brand, catalog, launch goals, and the Shopify capabilities you need.</p>
            </div>
            <a
              href="/contact?interest=Shopify%20Store%20Development"
              className="inline-flex flex-none items-center gap-2 rounded-full bg-primary-800 px-6 py-3 text-sm font-semibold !text-white shadow-lg shadow-primary-950/20 transition hover:bg-primary-700"
            >
              Start a Shopify conversation
              <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
    </>
  )
}