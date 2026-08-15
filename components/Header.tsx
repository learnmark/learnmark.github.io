'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/i18n/config'
import type { CommonMessages } from '@/i18n/messages/common'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'

const navigation = [
  { key: 'howItWorks', href: '/how-it-works' },
  { key: 'forClients', href: '/for-clients' },
  { key: 'experts', href: '/experts' },
  { key: 'compliance', href: '/compliance' },
  { key: 'aboutUs', href: '/about' },
] as const

const activeNavigationClassName = 'text-primary-800 underline underline-offset-4'

function isCurrentPath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

type HeaderProps = {
  locale: Locale
  messages: CommonMessages['header']
  themeToggleLabel: string
  languageSwitcherLabel: string
  showLanguageSwitcher: boolean
}

export default function Header({ locale, messages, themeToggleLabel, languageSwitcherLabel, showLanguageSwitcher }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 px-3 pt-4">
      <nav aria-label={messages.globalNavLabel} className="site-frame relative flex items-center justify-between rounded-full border border-slate-200/80 bg-white/85 px-5 py-3 shadow-sm shadow-slate-900/5 backdrop-blur-xl lg:px-6">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Learnmark</span>
            <img alt={messages.logoAlt} src="/logo.svg" className="theme-logo h-8 w-auto" />
          </a>
        </div>

        <div className="hidden items-center gap-5 xl:gap-8 lg:flex">
          {navigation.map((item) => {
            const active = isCurrentPath(pathname, item.href)

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className="whitespace-nowrap text-sm font-semibold leading-6 text-slate-900 transition-colors hover:text-primary-800"
              >
                <span className={active ? activeNavigationClassName : undefined}>{messages[item.key]}</span>
              </a>
            )
          })}

        </div>

        <div className="hidden items-center gap-2 lg:flex lg:flex-1 lg:justify-end">
          {showLanguageSwitcher && <LanguageSwitcher locale={locale} label={languageSwitcherLabel} />}
          <ThemeToggle label={themeToggleLabel} />
          <a
            href="/contact"
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white! shadow-sm shadow-slate-900/10 transition-colors hover:bg-primary-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900"
          >
            {messages.startProject}
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          {showLanguageSwitcher && <LanguageSwitcher locale={locale} label={languageSwitcherLabel} />}
          <ThemeToggle label={themeToggleLabel} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
          >
            <span className="sr-only">{messages.openMenu}</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-x-3 top-3 z-50 max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-950/40">
          <div aria-hidden="true" className="absolute inset-0 -z-10 rounded-3xl bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-size-[42px_42px] mask-[linear-gradient(to_bottom,black,transparent_88%)]" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-40 rounded-3xl bg-[radial-gradient(ellipse_at_top,rgba(136,19,55,0.32),transparent_68%)]" />

          <div className="flex items-center justify-between">
            <a href="/" className="theme-light-surface rounded-full bg-white px-3 py-2 shadow-sm" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Learnmark</span>
              <img alt={messages.logoAlt} src="/logo.svg" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full bg-white/10 p-2.5 text-slate-100 ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <span className="sr-only">{messages.closeMenu}</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/4 p-5">
            <p className="text-xs font-semibold uppercase text-primary-200">{messages.mobileEyebrow}</p>
            <p className="mt-3 text-xl font-bold leading-7 text-white">{messages.mobilePitch}</p>
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-5 inline-flex w-full justify-center rounded-full bg-primary-700 px-4 py-3 text-sm font-semibold text-white! shadow-lg shadow-primary-950/30 transition hover:bg-primary-600"
            >
              {messages.startProject}
            </a>
          </div>

          <div className="mt-5 grid gap-2">
            {navigation.map((item) => {
              const active = isCurrentPath(pathname, item.href)

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/4 px-4 py-3.5 text-base font-semibold text-white! transition hover:bg-white/8"
                >
                  <span className={active ? 'text-primary-200 underline underline-offset-4' : undefined}>{messages[item.key]}</span>
                </a>
              )
            })}
          </div>

        </DialogPanel>
      </Dialog>
    </header>
  )
}
