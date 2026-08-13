import type { HomeMessages } from '@/i18n/messages/home'

const linkHrefs = ['/contact', '/for-clients', '/how-it-works']

export default function WorkWith({ messages }: { messages: HomeMessages['workWith'] }) {
  return (
    <section className="site-section relative isolate overflow-hidden bg-slate-950">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-size-[64px_64px] mask-[linear-gradient(to_bottom,black,transparent_88%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(ellipse_at_top,rgba(136,19,55,0.28),transparent_65%)]" />
      <div className="site-container">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <p className="text-sm font-semibold uppercase text-primary-300">{messages.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-6xl">{messages.title}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            {messages.description}
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-base font-semibold leading-7 text-white sm:grid-cols-3 lg:max-w-3xl">
            {messages.links.map((label, index) => (
              <a key={linkHrefs[index]} href={linkHrefs[index]} className="flex items-center gap-x-2 text-slate-200 transition-colors duration-300 hover:text-primary-200">
                {label} <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
          <dl className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {messages.services.map((service) => (
              <div key={service.name} className="rounded-lg border border-white/10 bg-white/4 p-6 shadow-lg shadow-black/10 transition-colors duration-300 hover:border-primary-300/50">
                <dd className="text-2xl font-bold text-white">{service.value}</dd>
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
  