import { createPageMetadata } from '../seo'
import { careersMessages } from '@/i18n/messages/careers'
import { getLocale } from '@/i18n/server'

export async function generateMetadata() {
  const locale = await getLocale()
  const messages = careersMessages[locale]

  return createPageMetadata({
    title: messages.seoTitle,
    description: messages.seoDescription,
    path: '/careers',
    keywords: messages.seoKeywords,
    locale,
  })
}

export default async function Careers() {
  const locale = await getLocale()
  const messages = careersMessages[locale]
  const openRoles = messages.jobs.map((job) => ({ name: job.title, href: `#${job.id}` }))

    return (
      <main className="site-section site-page bg-transparent">
        <div className="site-container">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{messages.heroTitle}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {messages.heroDescription}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {messages.stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse pl-4 border-l-4 border-primary-600">
                  <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          
          <div className="mt-24 border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" id="open-roles">
              {messages.openRolesTitle}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {messages.openRolesDescription}
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              {openRoles.map((role) => (
                <a 
                  key={role.name} 
                  href={role.href}
                  className="rounded-full bg-primary-50 px-4 py-2.5 text-sm font-semibold text-primary-700 shadow-sm hover:bg-primary-100 transition-colors duration-200"
                >
                  {role.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 space-y-20">
            {messages.jobs.map((job) => (
              <div key={job.id} id={job.id} className="scroll-mt-24 rounded-lg bg-gray-50 p-8 sm:p-10 ring-1 ring-gray-900/5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-x-4 text-sm">
                    <span className="inline-flex items-center rounded-md bg-white px-2 py-1 font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      {job.location}
                    </span>
                    <span className="inline-flex items-center rounded-md bg-white px-2 py-1 font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      {job.employmentType}
                    </span>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-600"></span>
                      {messages.responsibilitiesLabel}
                    </h4>
                    <ul className="mt-4 space-y-3 text-gray-600">
                      {job.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex gap-3">
                          <span className="text-primary-600">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary-600"></span>
                      {messages.qualificationsLabel}
                    </h4>
                    <ul className="mt-4 space-y-3 text-gray-600">
                      {job.qualifications.map((qualification) => (
                        <li key={qualification} className="flex gap-3">
                          <span className="text-primary-600">•</span>
                          <span>{qualification}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200/60">
                  <a 
                    href={`mailto:hr@learnmark.com?subject=${encodeURIComponent(`${messages.applyEmailSubjectPrefix} ${job.title}`)}`}
                    className="text-sm font-semibold leading-6 text-primary-600 hover:text-primary-500"
                  >
                    {messages.applyForRole} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 rounded-2xl bg-primary-900 px-6 py-16 sm:p-16 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                {messages.noMatchTitle}
              </h2>
              <p className="mt-4 text-lg text-primary-100">
                {messages.noMatchDescription}
              </p>
            </div>
            <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
              <a
                href="mailto:hr@learnmark.com"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary-900 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {messages.emailHr}
              </a>
            </div>
          </div>
            
        </div>
      </main>
    )
  }
  