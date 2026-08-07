import { createPageMetadata } from '../seo'
import ContactForm from './ContactForm'
import { contactMessages } from '@/i18n/messages/contact'
import { getLocale } from '@/i18n/server'

export async function generateMetadata() {
  const locale = await getLocale()
  const messages = contactMessages[locale]

  return createPageMetadata({
    title: messages.seoTitle,
    description: messages.seoDescription,
    path: '/contact',
    keywords: messages.seoKeywords,
    locale,
  })
}

export default async function ContactPage() {
  const locale = await getLocale()
  return <ContactForm messages={contactMessages[locale]} />
}
