import { ArrowRightIcon } from '@heroicons/react/24/outline'

export type SolutionCapability = {
  name: string
  description: string
}

type SolutionLink = {
  label: string
  href: string
}

type SolutionPageProps = {
  eyebrow: string
  title: string
  description: string
  capabilities: SolutionCapability[]
  primaryCta: SolutionLink
  secondaryCta?: SolutionLink
}

export default function SolutionPage({
  eyebrow,
  title,
  description,
  capabilities,
  primaryCta,
  secondaryCta,
}: SolutionPageProps) {
  const gridColumns = capabilities.length === 4 ? 'xl:grid-cols-4' : 'lg:grid-cols-3'

  return (
    <main className="site-page">
      <section className="site-section">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-primary-700">{eyebrow}</p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold text-white! shadow-lg shadow-primary-950/20 transition hover:bg-primary-700"
              >
                {primaryCta.label}
                <ArrowRightIcon aria-hidden="true" className="h-4 w-4" />
              </a>
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          </div>

          <div className={`mt-14 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2 ${gridColumns}`}>
            {capabilities.map((capability, index) => (
              <article key={capability.name} className="bg-white p-6 sm:p-7">
                <span className="text-sm font-bold text-primary-700">{String(index + 1).padStart(2, '0')}</span>
                <h2 className="mt-5 text-lg font-semibold leading-8 text-slate-950">{capability.name}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}