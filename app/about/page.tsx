import { createPageMetadata } from '../seo'

export const metadata = createPageMetadata({
  title: 'About Us',
  description: 'Learn about Learnmark, an AI and Cloud consulting company helping teams build intelligent products and modern cloud platforms.',
  path: '/about',
  keywords: ['Learnmark company', 'AI consulting company', 'cloud consulting company', 'technology consulting team'],
})

const people = [
  {
    name: 'WW',
    role: 'Founder / Chief Solution Consultant',
    bio: 'Expert in AI-enabled product architecture, cloud-native systems, and enterprise technology modernization.',
  },
  {
    name: 'YY',
    role: 'Co-Founder / Chief Architect',
    bio: 'Specializes in distributed systems, platform engineering, microservices, and cloud reliability.',
  },
  {
    name: 'LL',
    role: 'Co-Founder / Chief Product Specialist',
    bio: 'Passionate about AI product strategy, user experience, and practical delivery management.',
  },
]

const capabilities = [
  { name: 'AI Product Delivery', description: 'From opportunity discovery to LLM integration, evaluation, governance, and production rollout.' },
  { name: 'Cloud Modernization', description: 'Cloud architecture, landing zones, migration planning, platform engineering, and operational readiness.' },
  { name: 'Architecture Advisory', description: 'System reviews, technical roadmaps, engineering coaching, and pragmatic modernization decisions.' },
]

const principles = [
  { name: 'Production over prototypes', description: 'We care about reliability, security, cost, observability, and maintainability from the beginning.' },
  { name: 'Architecture with delivery', description: 'We connect strategy to executable increments so teams can ship while modernizing.' },
  { name: 'Clear technical judgment', description: 'We help leaders make tradeoffs across platforms, models, teams, and operating constraints.' },
  { name: 'Partnership with teams', description: 'We work alongside product and engineering groups instead of handing over abstract slide decks.' },
]

const operatingModel = [
  { step: '01', name: 'Assess', description: 'Clarify goals, constraints, architecture risks, and business context.' },
  { step: '02', name: 'Design', description: 'Shape AI and cloud architecture into an implementation-ready roadmap.' },
  { step: '03', name: 'Deliver', description: 'Build foundations, coach teams, and move production systems forward.' },
]

export default function Example() {
  return (
    <main className="relative isolate overflow-hidden bg-transparent">
      <section className="relative isolate px-6 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-primary-700">About Learnmark</p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Practical AI and Cloud consulting for teams that need to ship.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Learnmark helps organizations navigate AI adoption and cloud modernization, turning complex technology decisions into secure, scalable, and maintainable software systems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/contact" className="inline-flex justify-center rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold !text-white shadow-lg shadow-primary-950/20 transition hover:bg-primary-700">
                Work with us
              </a>
              <a href="/solutions/ai" className="inline-flex justify-center rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800">
                Explore AI consulting
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-primary-900/10 blur-2xl" />
            <div className="relative rounded-3xl border border-slate-200 bg-white/85 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm font-semibold text-slate-950">Operating model</p>
                  <p className="text-xs text-slate-500">How we move from strategy to production</p>
                </div>
                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-800 ring-1 ring-primary-700/20">AI / Cloud</span>
              </div>
              <div className="mt-5 grid gap-3">
                {operatingModel.map((item) => (
                  <div key={item.step} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                    <div className="flex gap-4">
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-800">{item.step}</span>
                      <div>
                        <p className="font-semibold text-slate-950">{item.name}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 p-8 shadow-2xl shadow-slate-900/10 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-primary-200">Our mission</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Make every application intelligent, reliable, and cloud-ready.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">
                We combine senior engineering judgment with hands-on delivery support, helping teams make clear technical decisions and build durable systems.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {capabilities.map((capability) => (
                <div key={capability.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <h3 className="font-semibold text-white">{capability.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase text-primary-700">Working principles</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">What guides our consulting work</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              We focus on the decisions, platforms, and delivery habits that make AI and cloud systems useful after launch.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <div key={principle.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <dt className="font-semibold text-slate-950">{principle.name}</dt>
                <dd className="mt-3 text-sm leading-6 text-slate-600">{principle.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-sm font-semibold uppercase text-primary-700">Leadership</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Experienced across AI, Cloud, and product engineering</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our leadership team brings deep experience across AI delivery, cloud-native architecture, distributed systems, and product engineering.
            </p>
          </div>
          <ul role="list" className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {people.map((person) => (
              <li key={person.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-x-4">
                  <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-primary-100 text-lg font-bold text-primary-800">
                    {person.name}
                  </div>
                  <div>
                    <h3 className="font-semibold tracking-tight text-slate-950">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-primary-700">{person.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-600">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
