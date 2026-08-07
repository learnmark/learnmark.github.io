import { createPageMetadata } from '../seo'

export const metadata = createPageMetadata({
  title: 'Privacy Policy',
  description: 'Read our privacy policy to understand how we collect, use, and protect your data.',
  path: '/privacy-policy',
  keywords: ['Learnmark privacy policy', 'privacy statement', 'data protection'],
})

export default function Example() {
  return (
    <main className="site-section relative isolate bg-transparent">
      <div className="site-container">
      <article className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-primary-600">Legal</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-6 text-xl leading-8">
          Effective Date: August 7th, 2024
        </p>
        
        <div className="mt-10 max-w-2xl">
          <p>
            Learnmark is committed to protecting your privacy. This Privacy Statement describes Learnmark‘s privacy practices and how we treat the personal information that we collect from you when you use our products and services, including our website. This Privacy Statement applies to all of the services offered by Learnmark, including our website, but excludes services that have separate privacy statements that do not incorporate this Privacy Statement.
          </p>
          
          <div className="mt-10 rounded-lg bg-gray-50 p-8">
            <h2 className="text-lg font-semibold text-gray-900">Table of Contents</h2>
            <ul role="list" className="mt-4 space-y-2 text-sm leading-6 text-gray-600">
              <li><a href="#information-we-collect" className="hover:text-primary-600 hover:underline">Information We Collect</a></li>
              <li><a href="#how-we-use-your-information" className="hover:text-primary-600 hover:underline">How We Use Your Information</a></li>
              <li><a href="#information-sharing" className="hover:text-primary-600 hover:underline">Information Sharing</a></li>
              <li><a href="#security" className="hover:text-primary-600 hover:underline">Security</a></li>
              <li><a href="#changes" className="hover:text-primary-600 hover:underline">Changes to this Privacy Statement</a></li>
              <li><a href="#contact" className="hover:text-primary-600 hover:underline">Contact Us</a></li>
            </ul>
          </div>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900" id="information-we-collect">Information We Collect</h2>
          <p className="mt-6">
            Learnmark collects information from you when you use our products and services, including our website. This information may include:
          </p>
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <span><strong className="font-semibold text-gray-900">Contact Information.</strong> Your name, email address, and other contact details provided when you register or contact us.</span>
            </li>
            <li className="flex gap-x-3">
              <span><strong className="font-semibold text-gray-900">Usage Data.</strong> Information about how you use our products and services, including feature usage and interaction data.</span>
            </li>
            <li className="flex gap-x-3">
              <span><strong className="font-semibold text-gray-900">Device Information.</strong> Information about your device, such as IP address, browser type, operating system, and device identifiers.</span>
            </li>
          </ul>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900" id="how-we-use-your-information">How We Use Your Information</h2>
          <p className="mt-6">
            Learnmark uses the information we collect to provide, maintain, protect, and improve our products and services, and to protect Learnmark and our users. We may also use this information to provide you with information about our products and services, and to communicate with you regarding updates, security alerts, and support messages.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900" id="information-sharing">Information Sharing</h2>
          <p className="mt-6">
            Learnmark does not sell, rent, or share your personal information with third parties, except as described in this Privacy Statement. We may share your personal information with third parties in the following circumstances:
          </p>
          <ul className="mt-4 list-disc pl-8 space-y-2 text-gray-600">
            <li>With your consent.</li>
            <li>To comply with legal obligations or respond to lawful requests.</li>
            <li>To protect the rights and safety of Learnmark, our users, and others.</li>
            <li>With service providers who perform services on our behalf (e.g., hosting, analytics).</li>
          </ul>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900" id="security">Security</h2>
          <p className="mt-6">
            Learnmark takes reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900" id="changes">Changes to this Privacy Statement</h2>
          <p className="mt-6">
            Learnmark may update this Privacy Statement from time to time. We will notify you of any changes by posting the new Privacy Statement on this page. You are advised to review this Privacy Statement periodically for any changes.
          </p>

          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900" id="contact">Contact Us</h2>
          <p className="mt-6">
            If you have any questions about this Privacy Statement, please contact us at <a href="mailto:privacy@learnmark.com" className="font-semibold text-primary-600 hover:text-primary-500">privacy@learnmark.com</a>.
          </p>
        </div>
      </article>
      </div>
    </main>
  )
}
