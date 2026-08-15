'use client'

import { GoogleAnalytics } from '@next/third-parties/google'
import { useEffect, useState } from 'react'

import type { CommonMessages } from '@/i18n/messages/common'

const consentCookieName = 'learnmark-analytics-consent'
const settingsEventName = 'learnmark:analytics-settings'

type ConsentState = 'accepted' | 'rejected' | 'unset'

function readConsent(): ConsentState {
  const value = document.cookie
    .split(';')
    .map((entry) => entry.trim())
    .find((entry) => entry.startsWith(`${consentCookieName}=`))
    ?.split('=')[1]

  return value === 'accepted' || value === 'rejected' ? value : 'unset'
}

function writeConsent(value: Exclude<ConsentState, 'unset'>) {
  const secure = window.location.protocol === 'https:' ? '; secure' : ''
  document.cookie = `${consentCookieName}=${value}; path=/; max-age=31536000; samesite=lax${secure}`
}

function clearAnalyticsCookies() {
  const domainParts = window.location.hostname.split('.')
  const domains = ['', window.location.hostname, domainParts.length > 1 ? `.${domainParts.slice(-2).join('.')}` : '']

  document.cookie
    .split(';')
    .map((entry) => entry.trim().split('=')[0])
    .filter((name) => name.startsWith('_ga'))
    .forEach((name) => {
      for (const domain of new Set(domains)) {
        const domainAttribute = domain ? `; domain=${domain}` : ''
        document.cookie = `${name}=; path=/; max-age=0; samesite=lax${domainAttribute}`
      }
    })
}

export function AnalyticsPreferencesButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(settingsEventName))}
      className="transition hover:text-primary-200"
    >
      {label}
    </button>
  )
}

export default function AnalyticsConsent({ messages, gaId }: { messages: CommonMessages['analyticsConsent']; gaId: string }) {
  const [consent, setConsent] = useState<ConsentState>('unset')
  const [ready, setReady] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)

  useEffect(() => {
    setConsent(readConsent())
    setReady(true)

    const openSettings = () => setSettingsOpen(true)
    window.addEventListener(settingsEventName, openSettings)
    return () => window.removeEventListener(settingsEventName, openSettings)
  }, [])

  function choose(nextConsent: Exclude<ConsentState, 'unset'>) {
    const wasAccepted = consent === 'accepted'
    writeConsent(nextConsent)
    setConsent(nextConsent)
    setSettingsOpen(false)

    if (nextConsent === 'rejected') {
      clearAnalyticsCookies()
    }

    if (wasAccepted && nextConsent === 'rejected') {
      window.location.reload()
    }
  }

  return (
    <>
      {ready && consent === 'accepted' && <GoogleAnalytics gaId={gaId} />}
      {ready && (consent === 'unset' || settingsOpen) && (
        <section
          aria-labelledby="analytics-consent-title"
          className="fixed inset-x-3 bottom-3 z-70 mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl sm:p-6 dark:border-slate-700 dark:bg-slate-950/95"
        >
          <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div>
              <h2 id="analytics-consent-title" className="text-base font-bold text-slate-950">{messages.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {messages.description}{' '}
                <a href="/privacy-policy#website-processing" className="font-semibold text-primary-700 hover:text-primary-800">
                  {messages.privacyPolicy}
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-2 xs:flex-row">
              <button
                type="button"
                onClick={() => choose('rejected')}
                className="rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-800"
              >
                {messages.reject}
              </button>
              <button
                type="button"
                onClick={() => choose('accepted')}
                className="rounded-full bg-primary-800 px-4 py-2.5 text-sm font-semibold text-white! transition hover:bg-primary-700"
              >
                {messages.accept}
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  )
}