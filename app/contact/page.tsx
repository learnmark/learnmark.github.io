import { createPageMetadata } from '../seo'
import ContactForm from './ContactForm'

export const metadata = createPageMetadata({
  title: 'Contact Us',
  description: 'Contact Learnmark to discuss AI consulting, cloud modernization, platform engineering, and reliable software delivery needs.',
  path: '/contact',
  keywords: ['contact Learnmark', 'AI consulting contact', 'cloud consulting contact', 'software consulting inquiry'],
})

export default function ContactPage() {
  return <ContactForm />
}
