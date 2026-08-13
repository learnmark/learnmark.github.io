import type { OpenSourceTemplateMessages } from '@/i18n/messages/open-source/types'

type ProjectFact = {
  label: string
  value: string
}

type ProjectItem = {
  name: string
  description: string
}

type RepositoryLink = {
  label: string
  href: string
}

type OpenSourceProjectPageProps = {
  title: string
  category: string
  summary: string
  description: string
  status: string
  facts: ProjectFact[]
  capabilities: ProjectItem[]
  architecture: ProjectItem[]
  technology: string[]
  prerequisites: string[]
  quickStart: string
  repositories: RepositoryLink[]
  labels: OpenSourceTemplateMessages
}

export default function OpenSourceDetails({
  title,
  category,
  summary,
  description,
  status,
  facts,
  capabilities,
  architecture,
  technology,
  prerequisites,
  quickStart,
  repositories,
  labels,
}: OpenSourceProjectPageProps) {
  return (
    <div className="relative isolate overflow-hidden bg-transparent">
      <section id="open-source" className="scroll-mt-28 border-t border-slate-200 pb-20 pt-20 sm:pb-28 sm:pt-24">
        <div className="site-container grid gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm font-semibold uppercase text-primary-700">{category}</p>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-600/20">
                {status}
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-5xl">{title}</h2>
            <p className="mt-6 text-xl leading-8 text-slate-700">{summary}</p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">{description}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={repositories[0].href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white! transition-colors hover:bg-primary-800"
              >
                {labels.viewSource}
              </a>
            </div>
          </div>

          <dl className="divide-y divide-slate-200 border-y border-slate-200">
            {facts.map((fact) => (
              <div key={fact.label} className="grid gap-1 py-4 sm:grid-cols-[7rem_1fr] sm:gap-5">
                <dt className="text-sm font-semibold text-slate-950">{fact.label}</dt>
                <dd className="text-sm leading-6 text-slate-600">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="site-section border-y border-slate-200 bg-white/65">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-primary-700">{labels.includedEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">{labels.capabilitiesTitle}</h2>
          </div>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article key={capability.name} className="border-t border-slate-300 pt-6">
                <p className="text-sm font-semibold text-primary-700">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-4 text-lg font-semibold text-slate-950">{capability.name}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid gap-14 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase text-primary-700">{labels.architectureEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950">{labels.architectureTitle}</h2>
          </div>
          <dl className="divide-y divide-slate-200 border-y border-slate-200">
            {architecture.map((item) => (
              <div key={item.name} className="grid gap-2 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <dt className="font-semibold text-slate-950">{item.name}</dt>
                <dd className="text-base leading-7 text-slate-600">{item.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="site-section border-y border-slate-200 bg-slate-950 text-white">
        <div className="site-container grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase text-primary-200">{labels.technologyEyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold">{labels.technologyTitle}</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {technology.map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200">
                  {item}
                </span>
              ))}
            </div>
            <h3 className="mt-10 text-sm font-semibold uppercase text-slate-300">{labels.prerequisites}</h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
              {prerequisites.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase text-primary-200">{labels.quickStart}</p>
            <pre className="mt-5 max-w-full overflow-x-auto rounded-lg border border-white/10 bg-black/30 p-5 text-sm leading-7 text-slate-200">
              <code>{quickStart}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container flex flex-col justify-between gap-10 sm:flex-row sm:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-primary-700">{labels.repositoriesEyebrow}</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">{labels.repositoriesTitle}</h2>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            {repositories.map((repository) => (
              <a
                key={repository.href}
                href={repository.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-900 hover:text-primary-800"
              >
                {repository.label} <span aria-hidden="true">-&gt;</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}