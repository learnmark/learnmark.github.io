import { cookies, headers } from 'next/headers'
import { cache } from 'react'

import { defaultLocale, detectLocale, disableInternationalization, isLocale, localeCookieName, type Locale } from './config'

export const getLocale = cache(async (): Promise<Locale> => {
  if (disableInternationalization || process.env.BUILD_OUTPUT_MODE === 'export') return defaultLocale

  const cookieLocale = (await cookies()).get(localeCookieName)?.value
  if (isLocale(cookieLocale)) return cookieLocale

  return detectLocale((await headers()).get('accept-language'))
})