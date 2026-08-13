'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CubeIcon,
  WrenchScrewdriverIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/i18n/config'
import type { CommonMessages, HeaderDirectoryMessages } from '@/i18n/messages/common'
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

const directoryNavigation = [
  {
    key: 'products',
    icon: CubeIcon,
    items: [
      { key: 'letscrum', href: '/letscrum' },
      { key: 'llmxy', href: '/llmxy' },
      { key: 'sello', href: '/sello' },
    ],
  },
  {
    key: 'consulting',
    icon: ChatBubbleLeftRightIcon,
    items: [
      { key: 'ai', href: '/solutions/ai' },
      { key: 'cloud', href: '/solutions/cloud' },
      { key: 'platform', href: '/solutions/devops' },
      { key: 'agileScrum', href: '/solutions/agile-scrum' },
    ],
  },
  {
    key: 'solutions',
    icon: WrenchScrewdriverIcon,
    items: [
      { key: 'microservices', href: '/solutions/microservices' },
      { key: 'gateway', href: '/solutions/gateway' },
      { key: 'shopify', href: '/services/shopify' },
    ],
  },
] as const

function OutsideClickBoundary({ open, close, children }: { open: boolean; close: () => void; children: ReactNode }) {
  const boundaryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !boundaryRef.current?.contains(event.target)) close()
    }

    document.addEventListener('pointerdown', handlePointerDown, true)
    return () => document.removeEventListener('pointerdown', handlePointerDown, true)
  }, [close, open])

  return <div ref={boundaryRef} className="contents">{children}</div>
}

type HeaderProps = {
  locale: Locale
  messages: CommonMessages['header']
  directoryMessages: HeaderDirectoryMessages
  themeToggleLabel: string
  languageSwitcherLabel: string
  showLanguageSwitcher: boolean
}

export default function Header({ locale, messages, directoryMessages, themeToggleLabel, languageSwitcherLabel, showLanguageSwitcher }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const directoryActive = directoryNavigation.some((group) => group.items.some((item) => isCurrentPath(pathname, item.href)))

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

          <Popover>
            {({ open, close }) => (
              <OutsideClickBoundary open={open} close={close}>
                <PopoverButton
                  onClick={(event) => {
                    if (open && event.detail > 0) {
                      const button = event.currentTarget
                      requestAnimationFrame(() => button.blur())
                    }
                  }}
                  aria-current={directoryActive ? 'location' : undefined}
                  className={`group flex items-center gap-1 whitespace-nowrap text-sm font-semibold leading-6 text-slate-900 transition-colors focus:outline-none focus-visible:text-primary-800 focus-visible:underline focus-visible:underline-offset-4 ${open || directoryActive ? activeNavigationClassName : ''}`}
                >
                  {directoryMessages.menuLabel}
                  <ChevronDownIcon aria-hidden="true" className="h-4 w-4 text-slate-500 transition-transform group-data-open:rotate-180" />
                </PopoverButton>

                <PopoverPanel
                  aria-label={directoryMessages.panelLabel}
                  transition
                  className="absolute inset-x-0 top-full z-20 mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-xl shadow-slate-900/10 backdrop-blur-xl transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-leave:duration-150 data-enter:ease-out data-leave:ease-in"
                >
                  <div className="grid grid-cols-3 divide-x divide-slate-200">
                    {directoryNavigation.map((group) => {
                      const groupMessages = directoryMessages.groups[group.key]
                      const GroupIcon = group.icon

                      return (
                        <section key={group.key} className="p-5">
                          <div className="flex items-start gap-3 px-2">
                            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-primary-50 ring-1 ring-primary-100">
                              <GroupIcon aria-hidden="true" className="h-5 w-5 text-primary-700" />
                            </span>
                            <div>
                              <h2 className="text-sm font-bold text-slate-900">{groupMessages.label}</h2>
                              <p className="mt-1 text-xs leading-5 text-slate-600">{groupMessages.description}</p>
                            </div>
                          </div>

                          <div className="mt-4 grid gap-1">
                            {group.items.map((item) => {
                              const linkMessages = directoryMessages.links[item.key]
                              const active = isCurrentPath(pathname, item.href)

                              return (
                                <a
                                  key={`${group.key}-${item.key}`}
                                  href={item.href}
                                  aria-current={active ? 'page' : undefined}
                                  className="group/link block rounded-lg px-3 py-3 transition-colors hover:bg-slate-50"
                                >
                                  <span className={`flex items-center justify-between gap-3 text-sm font-semibold text-slate-800 transition-colors group-hover/link:text-primary-800 ${active ? activeNavigationClassName : ''}`}>
                                    {linkMessages.label}
                                    <ChevronRightIcon aria-hidden="true" className="h-4 w-4 flex-none text-slate-400 transition-transform group-hover/link:translate-x-0.5" />
                                  </span>
                                  <span className="mt-1 block text-xs leading-5 text-slate-600">{linkMessages.description}</span>
                                </a>
                              )
                            })}
                          </div>
                        </section>
                      )
                    })}
                  </div>
                </PopoverPanel>
              </OutsideClickBoundary>
            )}
          </Popover>
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

          <Disclosure as="div" className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/4">
            <DisclosureButton
              aria-current={directoryActive ? 'location' : undefined}
              className={`group flex w-full items-center justify-between px-4 py-4 text-left text-base font-semibold ${directoryActive ? 'text-primary-200 underline underline-offset-4' : 'text-white'}`}
            >
              {directoryMessages.menuLabel}
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-slate-400 transition-transform group-data-open:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel className="border-t border-white/10 px-4 pb-4">
              {directoryNavigation.map((group, index) => {
                const groupMessages = directoryMessages.groups[group.key]
                const GroupIcon = group.icon

                return (
                  <section key={group.key} className={index === 0 ? 'py-4' : 'border-t border-white/10 py-4'}>
                    <div className="flex items-start gap-3">
                      <GroupIcon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-none text-primary-200" />
                      <div>
                        <h2 className="text-sm font-bold text-white">{groupMessages.label}</h2>
                        <p className="mt-1 text-xs leading-5 text-slate-400">{groupMessages.description}</p>
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-1 gap-1 sm:grid-cols-2">
                      {group.items.map((item) => {
                        const linkMessages = directoryMessages.links[item.key]
                        const active = isCurrentPath(pathname, item.href)

                        return (
                          <a
                            key={`${group.key}-${item.key}`}
                            href={item.href}
                            aria-current={active ? 'page' : undefined}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-start justify-between gap-3 rounded-lg px-3 py-3 transition hover:bg-white/8"
                          >
                            <span className="min-w-0">
                              <span className={`block text-sm font-semibold ${active ? 'text-primary-200 underline underline-offset-4' : 'text-slate-100'}`}>{linkMessages.label}</span>
                              <span className="mt-1 block text-xs leading-5 text-slate-400">{linkMessages.description}</span>
                            </span>
                            <ChevronRightIcon aria-hidden="true" className="mt-0.5 h-4 w-4 flex-none text-slate-500" />
                          </a>
                        )
                      })}
                    </div>
                  </section>
                )
              })}
            </DisclosurePanel>
          </Disclosure>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
