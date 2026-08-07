import { createPageMetadata } from '../seo'
import { systemMessages } from '@/i18n/messages/system'
import { getLocale } from '@/i18n/server'

export async function generateMetadata() {
  const locale = await getLocale()
  const messages = systemMessages[locale].signIn

  return createPageMetadata({
    title: messages.seoTitle,
    description: messages.seoDescription,
    path: '/signin',
    noIndex: true,
    locale,
  })
}

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default async function SignIn() {
  const locale = await getLocale()
  const messages = systemMessages[locale].signIn

    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-white">
          <body class="h-full">
          ```
        */}
        <main className="site-section flex min-h-full flex-1 flex-col justify-center bg-slate-50">
          <div className="site-container">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Learnmark"
              src="/logo.svg"
              className="mx-auto h-10 w-auto"
            />
            <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              {messages.title}
            </h1>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  {messages.email}
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-xl border-0 bg-white px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    {messages.password}
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-primary-700 hover:text-primary-600">
                      {messages.forgotPassword}
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-xl border-0 bg-white px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800"
                >
                  {messages.submit}
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              {messages.notMember}{' '}
              <a href="#" className="font-semibold leading-6 text-primary-700 hover:text-primary-600">
                {messages.trial}
              </a>
            </p>
          </div>
          </div>
        </main>
      </>
    )
  }
  