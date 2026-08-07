import { createPageMetadata } from '../seo'
import ContactForm from './ContactForm'

export const metadata = createPageMetadata({
  title: 'Contact Us',
  description: 'Contact Learnmark to discuss Shopify store development, custom themes, AI consulting, cloud modernization, platform engineering, and software delivery needs.',
  path: '/contact',
  keywords: ['contact Learnmark', 'Shopify development contact', 'AI consulting contact', 'cloud consulting contact', 'software consulting inquiry'],
})

export default function ContactPage() {
  return <ContactForm />
}
