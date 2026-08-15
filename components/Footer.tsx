import type { CommonMessages } from '@/i18n/messages/common'
import { AnalyticsPreferencesButton } from './AnalyticsConsent'

export default function Footer({ messages, analyticsSettingsLabel }: { messages: CommonMessages['footer']; analyticsSettingsLabel: string }) {
  const footerSections = [
    {
      title: messages.companyLabel,
      links: [
        { name: messages.aboutUs, href: '/about' },
        { name: messages.contactUs, href: '/contact' },
        { name: messages.privacyPolicy, href: '/privacy-policy' },
      ],
    },
    {
      title: messages.clientServicesLabel,
      links: [
        { name: messages.forClients, href: '/for-clients' },
        { name: messages.howItWorks, href: '/how-it-works' },
        { name: messages.compliance, href: '/compliance' },
      ],
    },
    {
      title: messages.expertNetworkLabel,
      links: [
        { name: messages.experts, href: '/experts' },
        { name: messages.expertApplication, href: '/experts#join' },
        { name: messages.compliance, href: '/compliance' },
      ],
    },
  ]

  return (
    <footer className="relative isolate scroll-mt-28 overflow-hidden bg-slate-950 py-16 text-slate-300 sm:py-20">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.10)_1px,transparent_1px)] bg-size-[56px_56px] mask-[linear-gradient(to_top,black,transparent_84%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(136,19,55,0.24),transparent_68%)]" />

      <div className="site-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(22rem,0.9fr)_minmax(0,2.1fr)] lg:gap-10 xl:grid-cols-[minmax(23rem,0.9fr)_minmax(0,2.1fr)] xl:gap-12">
          <div>
            <a href="/" className="theme-light-surface inline-flex rounded-full bg-white px-4 py-3 shadow-sm">
              <span className="sr-only">Learnmark</span>
              <img src="/logo.svg" className="h-9 w-auto" alt={messages.logoAlt} />
            </a>
            <p className="mt-6 max-w-md text-base leading-7 text-slate-400">
              {messages.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-nowrap">
              <a
                href="/contact"
                className="inline-flex shrink-0 justify-center whitespace-nowrap rounded-full bg-primary-700 px-5 py-3 text-sm font-semibold text-white! shadow-lg shadow-primary-950/30 transition hover:bg-primary-600"
              >
                {messages.startProject}
              </a>
              <a
                href="/experts#join"
                className="inline-flex shrink-0 justify-center whitespace-nowrap rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white! transition hover:bg-white/10"
              >
                {messages.joinExperts}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 xl:gap-x-10">
            {footerSections.map((section) => (
              <div key={section.title} className="border-t border-white/10 pt-5 sm:border-t-0 sm:pt-0 xl:border-l xl:pl-5">
                <h2 className="whitespace-nowrap text-sm font-semibold uppercase text-white">{section.title}</h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="whitespace-nowrap transition hover:text-primary-200">
                        {link.name}
                      </a>
                    </li>
                  ))}
                  {section.title === messages.companyLabel && (
                    <li>
                      <AnalyticsPreferencesButton label={analyticsSettingsLabel} />
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © 2009 - {new Date().getFullYear()}{' '}
            <a href="https://learnmark.com" className="transition hover:text-primary-200">
              Learnmark
            </a>
            . {messages.rightsReserved}
          </p>
          <p className="mt-4 text-sm text-slate-500 sm:mt-0">
            {messages.closing}
          </p>
        </div>
      </div>
    </footer>
  )
}