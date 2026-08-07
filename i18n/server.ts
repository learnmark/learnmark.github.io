import { cookies, headers } from 'next/headers'
import { cache } from 'react'

import { detectLocale, isLocale, localeCookieName, type Locale } from './config'

export const getLocale = cache(async (): Promise<Locale> => {
  const cookieLocale = (await cookies()).get(localeCookieName)?.value
  if (isLocale(cookieLocale)) return cookieLocale

  return detectLocale((await headers()).get('accept-language'))
})