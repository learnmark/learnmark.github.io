import type { ReactNode } from 'react'

import { createPageMetadata } from '../seo'

export const metadata = createPageMetadata({
  title: 'Example Page',
  description: 'Internal example page for Learnmark.',
  path: '/example1',
  noIndex: true,
})

export default function ExampleLayout({ children }: { children: ReactNode }) {
  return children
}