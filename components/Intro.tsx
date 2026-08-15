import type { HomeMessages } from '@/i18n/messages/home'

export default function Intro({ messages, availabilityNotice = messages.availabilityNotice }: { messages: HomeMessages['intro']; availabilityNotice?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-transparent pb-20 pt-20 sm:pb-28 sm:pt-28">
      <div className="site-container grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.92fr]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-primary-700">{messages.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-bold text-slate-950 sm:text-5xl lg:text-6xl">
              {messages.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {messages.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="inline-flex justify-center rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold text-white! shadow-lg shadow-primary-900/20 transition-all duration-300 hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
              >
                {messages.primaryCta}
              </a>
              <a href="/how-it-works" className="text-sm font-semibold leading-6 text-slate-900 transition-colors hover:text-primary-800">
                {messages.secondaryCta} <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {messages.capabilities.map((capability) => (
                <span key={capability} className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  {capability}
                </span>
              ))}
            </div>
            <p className="mt-7 max-w-2xl border-l-2 border-primary-300 pl-4 text-sm leading-6 text-slate-500">
              {availabilityNotice}
            </p>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm font-semibold text-slate-950">{messages.modelTitle}</p>
                  <p className="text-xs text-slate-500">{messages.modelSubtitle}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-600/20 dark:bg-emerald-950/60 dark:text-emerald-300 dark:ring-emerald-400/30">{messages.live}</span>
              </div>

              <div className="mt-5 grid gap-3">
                {messages.layers.map((layer, index) => (
                  <div key={layer.name} className="rounded-lg border border-slate-200 bg-slate-50/80 p-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-800">{index + 1}</span>
                      <div>
                        <p className="font-semibold text-slate-950">{layer.name}</p>
                        <p className="text-sm text-slate-600">{layer.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {messages.signals.map((signal) => (
                  <div key={signal.label} className="rounded-lg bg-slate-950 p-4 text-white">
                    <p className="text-xs text-slate-400">{signal.label}</p>
                    <p className="mt-2 text-sm font-semibold">{signal.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
