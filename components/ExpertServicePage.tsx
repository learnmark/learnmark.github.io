import Image from 'next/image'
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  ClipboardDocumentCheckIcon,
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import type { ExpertServicePageMessages } from '@/i18n/messages/expert-services/types'

type ExpertServicePageProps = {
  messages: ExpertServicePageMessages
  imageSrc: string
  primaryHref: string
  secondaryHref: string
  ctaId?: string
}

const panelIcons = [ClipboardDocumentCheckIcon, MagnifyingGlassIcon, CalendarDaysIcon]
const detailIcons = [UserGroupIcon, CheckBadgeIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon]

export default function ExpertServicePage({ messages, imageSrc, primaryHref, secondaryHref, ctaId }: ExpertServicePageProps) {
  return (
    <main className="site-page">
      <section className="pb-20 pt-20 sm:pb-28 sm:pt-28">
        <div className="site-container grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-primary-700">{messages.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">{messages.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{messages.description}</p>
            <p className="mt-6 max-w-2xl border-l-2 border-primary-300 pl-4 text-sm leading-6 text-slate-500">{messages.availabilityNotice}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={primaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold text-white! shadow-lg shadow-primary-950/20 transition hover:bg-primary-700"
              >
                {messages.primaryCta}
                <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800"
              >
                {messages.secondaryCta}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/85 shadow-2xl shadow-slate-900/10 backdrop-blur-xl">
            <div className="border-b border-slate-200 px-6 py-5 sm:px-7">
              <p className="font-semibold text-slate-950">{messages.panelTitle}</p>
              <p className="mt-1 text-sm leading-6 text-slate-500">{messages.panelSubtitle}</p>
            </div>
            <dl className="divide-y divide-slate-200">
              {messages.panelItems.map((item, index) => {
                const Icon = panelIcons[index % panelIcons.length]
                return (
                  <div key={item.label} className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-4 px-6 py-5 sm:px-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-50 text-primary-800 ring-1 ring-primary-100">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <dt className="text-xs font-semibold uppercase text-slate-500">{item.label}</dt>
                      <dd className="mt-1 wrap-break-word text-sm font-semibold leading-6 text-slate-950">{item.value}</dd>
                    </div>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-primary-700">{messages.detailEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">{messages.detailTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{messages.detailDescription}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {messages.details.map((detail, index) => {
              const Icon = detailIcons[index % detailIcons.length]
              return (
                <article key={detail.name} className="rounded-lg border border-slate-200 bg-slate-50/80 p-6">
                  <Icon aria-hidden="true" className="h-6 w-6 text-primary-700" />
                  <h3 className="mt-5 text-base font-semibold leading-7 text-slate-950">{detail.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{detail.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="site-section relative isolate overflow-hidden bg-slate-950 text-white">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-size-[64px_64px] mask-[linear-gradient(to_bottom,black,transparent_90%)]" />
        <div className="site-container grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase text-primary-200">{messages.processEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{messages.processTitle}</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">{messages.processDescription}</p>
            <div className="mt-8 overflow-hidden rounded-lg border border-white/10 bg-slate-900 shadow-2xl shadow-black/25">
              <Image
                src={imageSrc}
                alt={messages.imageAlt}
                width={1536}
                height={1024}
                className="aspect-3/2 w-full object-cover"
                sizes="(min-width: 1024px) 35vw, calc(100vw - 3rem)"
              />
            </div>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2">
            {messages.steps.map((step, index) => (
              <li key={step.name} className="bg-slate-950/90 p-6 sm:p-7">
                <span className="text-sm font-bold text-primary-200">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-semibold text-white">{step.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="site-section bg-white">
        <div className="site-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase text-primary-700">{messages.factsEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">{messages.factsTitle}</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">{messages.factsDescription}</p>
          </div>
          <dl className="border-y border-slate-200">
            {messages.facts.map((fact, index) => (
              <div key={fact.name} className="grid gap-2 border-b border-slate-200 py-6 last:border-b-0 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-6">
                <dt className="flex items-start gap-3 text-sm font-bold text-slate-950">
                  <span className="text-primary-700">{String(index + 1).padStart(2, '0')}</span>
                  {fact.name}
                </dt>
                <dd className="text-sm leading-6 text-slate-600">{fact.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="site-section bg-slate-50">
        <div className="site-container grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-primary-700">{messages.scopeEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">{messages.scopeTitle}</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">{messages.scopeDescription}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {messages.scopeItems.map((item) => (
              <li key={item} className="flex min-h-16 items-center gap-3 rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm font-semibold leading-6 text-slate-800 shadow-sm">
                <span aria-hidden="true" className="h-2 w-2 flex-none rounded-full bg-primary-700" />
                <span className="wrap-break-word">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id={ctaId} className="site-section scroll-mt-28 bg-white">
        <div className="site-container text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">{messages.ctaTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{messages.ctaDescription}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={primaryHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold text-white! shadow-lg shadow-primary-950/20 transition hover:bg-primary-700">
                {messages.primaryCta}
                <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
              </a>
              <a href={secondaryHref} className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800">
                {messages.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
