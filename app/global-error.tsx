'use client'

import { useEffect, useState } from 'react'
import './globals.css'
import { detectLocale, isLocale, localeCookieName, type Locale } from '@/i18n/config'
import { systemMessages } from '@/i18n/messages/system'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [locale, setLocale] = useState<Locale>('en')

  useEffect(() => {
    const cookieLocale = document.cookie
      .split('; ')
      .find((cookie) => cookie.startsWith(`${localeCookieName}=`))
      ?.split('=')[1]
    const nextLocale = isLocale(cookieLocale ? decodeURIComponent(cookieLocale) : undefined)
      ? decodeURIComponent(cookieLocale!) as Locale
      : detectLocale(navigator.languages.join(','))

    document.documentElement.lang = nextLocale
    setLocale(nextLocale)
  }, [])

  const messages = systemMessages[locale].error

  return (
    <html lang={locale}>
      <body className="site-shell text-slate-900 antialiased">
        <main className="site-section site-page grid min-h-screen place-items-center">
          <div className="site-container text-center">
            <p className="text-sm font-semibold uppercase text-primary-700">{messages.eyebrow}</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">{messages.title}</h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-600">
              {messages.description}
            </p>
            <button
              type="button"
              onClick={() => reset()}
              className="mt-10 rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900"
            >
              {messages.retry}
            </button>
          </div>
        </main>
      </body>
    </html>
  )
}