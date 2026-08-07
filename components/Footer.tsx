const footerSections = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Careers', href: '/careers' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'AI Consulting', href: '/solutions/ai' },
      { name: 'Cloud Consulting', href: '/solutions/cloud' },
      { name: 'Platform Engineering', href: '/solutions/devops' },
      { name: 'API & AI Gateway', href: '/solutions/gateway' },
      { name: 'Microservices Modernization', href: '/solutions/microservices' },
      { name: 'Delivery Coaching', href: '/solutions/agile-scrum' },
    ],
  },
  {
    title: 'Products',
    links: [
      { name: 'llmxy', href: '/llmxy' },
      { name: 'LetScrum', href: '/letscrum' },
      { name: 'Sello', href: '/sello' },
    ],
  },
  {
    title: 'Open Source',
    links: [
      { name: 'llmxy Open Source', href: '/open-source/llmxy' },
      { name: 'LetScrum Open Source', href: '/open-source/letscrum' },
      { name: 'Sello Open Source', href: '/open-source/sello' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative isolate scroll-mt-28 overflow-hidden bg-slate-950 px-6 py-16 text-slate-300 sm:py-20 lg:px-8">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.10)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_top,black,transparent_84%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(136,19,55,0.24),transparent_68%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_2.1fr]">
          <div>
            <a href="/" className="inline-flex rounded-full bg-white px-4 py-3 shadow-sm">
              <span className="sr-only">Learnmark</span>
              <img src="/logo.svg" className="h-9 w-auto" alt="Learnmark Logo" />
            </a>
            <p className="mt-6 max-w-md text-base leading-7 text-slate-400">
              AI and Cloud consulting for teams building intelligent products, modern platforms, and reliable software delivery systems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex justify-center rounded-full bg-primary-700 px-5 py-3 text-sm font-semibold !text-white shadow-lg shadow-primary-950/30 transition hover:bg-primary-600"
              >
                Start a project
              </a>
              <a
                href="/solutions/cloud"
                className="inline-flex justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold !text-white transition hover:bg-white/10"
              >
                Explore cloud consulting
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-white">{section.title}</h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="transition hover:text-primary-200">
                        {link.name}
                      </a>
                    </li>
                  ))}
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
            . All Rights Reserved.
          </p>
          <p className="mt-4 text-sm text-slate-500 sm:mt-0">
            AI strategy. Cloud architecture. Reliable delivery.
          </p>
        </div>
      </div>
    </footer>
  )
}