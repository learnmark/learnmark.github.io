'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { LanguageIcon } from '@heroicons/react/24/outline'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

import { localeCookieName, localeOptions, type Locale } from '@/i18n/config'

type LanguageSwitcherProps = {
  locale: Locale
  label: string
}

export default function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const currentOption = localeOptions.find((option) => option.locale === locale) ?? localeOptions[0]

  function changeLocale(nextLocale: Locale) {
    if (nextLocale === locale) return

    const secure = window.location.protocol === 'https:' ? '; secure' : ''
    document.cookie = `${localeCookieName}=${encodeURIComponent(nextLocale)}; path=/; max-age=31536000; samesite=lax${secure}`
    document.documentElement.lang = nextLocale
    startTransition(() => router.refresh())
  }

  return (
    <Menu as="div" className="relative shrink-0">
      <MenuButton
        className="theme-toggle inline-flex h-10 min-w-16 items-center justify-center gap-1 rounded-full border border-slate-200 bg-white/70 px-2.5 text-slate-700 shadow-sm transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 disabled:opacity-60"
        aria-label={`${label}: ${currentOption.label}`}
        title={label}
        disabled={isPending}
      >
        <LanguageIcon aria-hidden="true" className="size-5" />
        <span className="min-w-5 text-center text-xs font-bold leading-none">{currentOption.shortLabel}</span>
        <ChevronDownIcon aria-hidden="true" className="size-3.5 text-slate-400" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="z-[70] mt-2 w-44 origin-top-right rounded-lg border border-slate-200 bg-white p-1.5 text-slate-900 shadow-xl shadow-slate-900/15 outline-none transition duration-150 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      >
        {localeOptions.map((option) => (
          <MenuItem key={option.locale}>
            <button
              type="button"
              lang={option.locale}
              onClick={() => changeLocale(option.locale)}
              className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-medium data-[focus]:bg-primary-50 data-[focus]:text-primary-900 dark:data-[focus]:bg-slate-800 dark:data-[focus]:text-white"
            >
              <span>{option.label}</span>
              <CheckIcon
                aria-hidden="true"
                className={`size-4 text-primary-700 dark:text-primary-300 ${option.locale === locale ? '' : 'invisible'}`}
              />
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}