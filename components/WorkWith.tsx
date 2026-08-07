const links = [
  { name: 'Start a consulting conversation', href: '/contact' },
  { name: 'AI consulting', href: '/solutions/ai' },
  { name: 'Cloud consulting', href: '/solutions/cloud' },
]
const services = [
  { name: 'AI strategy and delivery', value: 'AI', description: 'Use-case discovery, LLM integration, evaluation, and governance.' },
  { name: 'Cloud architecture and migration', value: 'Cloud', description: 'Landing zones, modernization roadmaps, and cloud-native architecture.' },
  { name: 'Platform engineering and DevOps', value: 'Ops', description: 'CI/CD, infrastructure as code, observability, and reliability practices.' },
  { name: 'Architecture reviews and coaching', value: 'Advisory', description: 'Technical due diligence, roadmap design, and team delivery coaching.' },
]

export default function WorkWith() {
  return (
    <section className="site-section relative isolate overflow-hidden bg-slate-950">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top,rgba(136,19,55,0.28),transparent_65%)]" />
      <div className="site-container">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <p className="text-sm font-semibold uppercase text-primary-300">Engagement model</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with AI and Cloud specialists</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            We partner with engineering and product leaders to assess strategy, design production architecture, and deliver the hard parts of AI-enabled and cloud-native systems.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-base font-semibold leading-7 text-white sm:grid-cols-3 lg:max-w-3xl">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="flex items-center gap-x-2 text-slate-200 transition-colors duration-300 hover:text-primary-200">
                {link.name} <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
          <dl className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/10 transition-colors duration-300 hover:border-primary-300/50">
                <dd className="text-2xl font-bold tracking-tight text-white">{service.value}</dd>
                <dt className="mt-3 text-base font-semibold leading-7 text-slate-100">{service.name}</dt>
                <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
  