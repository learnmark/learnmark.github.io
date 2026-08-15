import { createPageMetadata } from '../seo'
import { aboutMessages } from '@/i18n/messages/about'
import { getLocale } from '@/i18n/server'

export async function generateMetadata() {
  const locale = await getLocale()
  const messages = aboutMessages[locale]

  return createPageMetadata({
    title: messages.seoTitle,
    description: messages.seoDescription,
    path: '/about',
    keywords: messages.seoKeywords,
    locale,
  })
}

export default async function About() {
  const locale = await getLocale()
  const messages = aboutMessages[locale]

  return (
    <main className="relative isolate overflow-hidden bg-transparent">
      <section className="relative isolate py-20 sm:py-28">
        <div className="site-container grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-primary-700">{messages.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {messages.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {messages.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/contact" className="inline-flex justify-center rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold text-white! shadow-lg shadow-primary-950/20 transition hover:bg-primary-700">
                {messages.workCta}
              </a>
              <a href="/how-it-works" className="inline-flex justify-center rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800">
                {messages.aiCta}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-primary-900/10 blur-2xl" />
            <div className="relative rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm font-semibold text-slate-950">{messages.operatingTitle}</p>
                  <p className="text-xs text-slate-500">{messages.operatingSubtitle}</p>
                </div>
                <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-800 ring-1 ring-primary-700/20">{messages.operatingBadge}</span>
              </div>
              <div className="mt-5 grid gap-3">
                {messages.operatingModel.map((item, index) => (
                  <div key={item.name} className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
                    <div className="flex gap-4">
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-800">{String(index + 1).padStart(2, '0')}</span>
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

      <section className="pb-20">
        <div className="site-container">
        <div className="rounded-2xl bg-slate-950 p-8 shadow-2xl shadow-slate-900/10 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-primary-200">{messages.missionEyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {messages.missionTitle}
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">
                {messages.missionDescription}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {messages.capabilities.map((capability) => (
                <div key={capability.name} className="rounded-lg border border-white/10 bg-white/4 p-5">
                  <h3 className="font-semibold text-white">{capability.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase text-primary-700">{messages.principlesEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{messages.principlesTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {messages.principlesDescription}
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {messages.principles.map((principle) => (
              <div key={principle.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <dt className="font-semibold text-slate-950">{principle.name}</dt>
                <dd className="mt-3 text-sm leading-6 text-slate-600">{principle.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

    </main>
  )
}
