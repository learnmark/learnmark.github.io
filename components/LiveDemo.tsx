import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

import type { LiveDemoMessages } from '@/i18n/messages/letscrum-live-demo'

export type LiveDemoProps = {
  href: string
  username: string
  password: string
  labels: LiveDemoMessages
  className?: string
}

export default function LiveDemo({
  href,
  username,
  password,
  labels,
  className = '',
}: LiveDemoProps) {
  return (
    <section className={`border-y border-slate-200 py-7 ${className}`}>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase text-primary-700">{labels.eyebrow}</p>
          <h2 className="mt-2 text-xl font-bold text-slate-950">{labels.title}</h2>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={labels.openLabel}
            className="mt-3 inline-flex max-w-full items-center gap-2 text-sm font-semibold text-slate-900 hover:text-primary-800"
          >
            <span className="break-all">{href}</span>
            <ArrowTopRightOnSquareIcon aria-hidden="true" className="h-4 w-4 flex-none" />
          </a>
        </div>

        <dl className="grid grid-cols-2 gap-6 sm:min-w-64">
          <div>
            <dt className="text-xs font-semibold uppercase text-slate-500">{labels.usernameLabel}</dt>
            <dd className="mt-2 font-mono text-sm font-semibold text-slate-950">{username}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase text-slate-500">{labels.passwordLabel}</dt>
            <dd className="mt-2 font-mono text-sm font-semibold text-slate-950">{password}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}