export const supportedLocales = ['en', 'zh-CN', 'zh-TW', 'ja', 'fr', 'de'] as const

export type Locale = (typeof supportedLocales)[number]

export const defaultLocale: Locale = 'en'
export const localeCookieName = 'learnmark-locale'

export const localeOptions: ReadonlyArray<{
  locale: Locale
  label: string
  shortLabel: string
}> = [
  { locale: 'en', label: 'English', shortLabel: 'EN' },
  { locale: 'zh-CN', label: '简体中文', shortLabel: '简' },
  { locale: 'zh-TW', label: '繁體中文', shortLabel: '繁' },
  { locale: 'ja', label: '日本語', shortLabel: '日' },
  { locale: 'fr', label: 'Français', shortLabel: 'FR' },
  { locale: 'de', label: 'Deutsch', shortLabel: 'DE' },
]

export function isLocale(value: string | undefined): value is Locale {
  return supportedLocales.includes(value as Locale)
}

function localeFromLanguageTag(languageTag: string): Locale | undefined {
  const normalized = languageTag.trim().replace('_', '-').toLowerCase()

  if (normalized === 'zh-tw' || normalized === 'zh-hk' || normalized === 'zh-mo' || normalized.startsWith('zh-hant')) {
    return 'zh-TW'
  }

  if (normalized === 'zh' || normalized === 'zh-cn' || normalized === 'zh-sg' || normalized.startsWith('zh-hans')) {
    return 'zh-CN'
  }

  const language = normalized.split('-')[0]
  return supportedLocales.find((locale) => locale.toLowerCase() === language)
}

export function detectLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale

  const candidates = acceptLanguage
    .split(',')
    .map((entry, index) => {
      const [languageTag, ...parameters] = entry.trim().split(';')
      const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith('q='))
      const quality = qualityParameter ? Number.parseFloat(qualityParameter.split('=')[1]) : 1

      return { languageTag, quality: Number.isNaN(quality) ? 0 : quality, index }
    })
    .sort((left, right) => right.quality - left.quality || left.index - right.index)

  for (const candidate of candidates) {
    const locale = localeFromLanguageTag(candidate.languageTag)
    if (locale) return locale
  }

  return defaultLocale
}