import { createPageMetadata } from '../seo'
import { privacyMessages } from '@/i18n/messages/privacy'
import { getLocale } from '@/i18n/server'

export async function generateMetadata() {
  const locale = await getLocale()
  const messages = privacyMessages[locale]

  return createPageMetadata({
    title: messages.seoTitle,
    description: messages.seoDescription,
    path: '/privacy-policy',
    keywords: messages.seoKeywords,
    locale,
  })
}

export default async function PrivacyPolicyPage() {
  const locale = await getLocale()
  const messages = privacyMessages[locale]

  return (
    <main className="site-section relative isolate bg-transparent">
      <div className="site-container">
      <article className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-primary-600">{messages.legalLabel}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{messages.title}</h1>
        <p className="mt-6 text-xl leading-8">
          {messages.effectiveDateLabel}: {messages.effectiveDateValue}
        </p>
        
        <div className="mt-10 max-w-2xl">
          <p>
            {messages.introduction}
          </p>
          
          <div className="mt-10 rounded-lg bg-gray-50 p-8">
            <h2 className="text-lg font-semibold text-gray-900">{messages.tableOfContentsTitle}</h2>
            <ul role="list" className="mt-4 space-y-2 text-sm leading-6 text-gray-600">
              <li><a href="#information-we-collect" className="hover:text-primary-600 hover:underline">{messages.tableOfContents.informationWeCollect}</a></li>
              <li><a href="#how-we-use-your-information" className="hover:text-primary-600 hover:underline">{messages.tableOfContents.howWeUseYourInformation}</a></li>
              <li><a href="#information-sharing" className="hover:text-primary-600 hover:underline">{messages.tableOfContents.informationSharing}</a></li>
              <li><a href="#security" className="hover:text-primary-600 hover:underline">{messages.tableOfContents.security}</a></li>
              <li><a href="#changes" className="hover:text-primary-600 hover:underline">{messages.tableOfContents.changesToThisPrivacyStatement}</a></li>
              <li><a href="#contact" className="hover:text-primary-600 hover:underline">{messages.tableOfContents.contactUs}</a></li>
            </ul>
          </div>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900" id="information-we-collect">{messages.informationWeCollectTitle}</h2>
          <p className="mt-6">
            {messages.informationWeCollectIntro}
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            {messages.collectedInformationItems.map((item) => (
              <li key={item.name} className="flex gap-x-3">
                <span><strong className="font-semibold text-gray-900">{item.name}</strong> {item.description}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900" id="how-we-use-your-information">{messages.howWeUseYourInformationTitle}</h2>
          <p className="mt-6">
            {messages.howWeUseYourInformationBody}
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900" id="information-sharing">{messages.informationSharingTitle}</h2>
          <p className="mt-6">
            {messages.informationSharingBody}
          </p>
          <ul className="mt-4 list-disc pl-8 space-y-2 text-gray-600">
            {messages.informationSharingItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900" id="security">{messages.securityTitle}</h2>
          <p className="mt-6">
            {messages.securityBody}
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900" id="changes">{messages.changesTitle}</h2>
          <p className="mt-6">
            {messages.changesBody}
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900" id="contact">{messages.contactUsTitle}</h2>
          <p className="mt-6">
            {messages.contactUsPrefix} <a href="mailto:privacy@learnmark.com" className="font-semibold text-primary-600 hover:text-primary-500">privacy@learnmark.com</a>.
          </p>
        </div>
      </article>
      </div>
    </main>
  )
}
