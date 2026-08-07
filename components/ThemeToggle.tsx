'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="theme-toggle inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-700 shadow-sm transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
      aria-label="Toggle color theme"
      title="Toggle color theme"
    >
      <MoonIcon aria-hidden="true" className="size-5 dark:hidden" />
      <SunIcon aria-hidden="true" className="hidden size-5 dark:block" />
    </button>
  )
}