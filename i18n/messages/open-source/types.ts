import type { Locale } from '../../config'

export type OpenSourceProjectKey = 'llmxy' | 'letscrum' | 'sello'

export type OpenSourceTemplateMessages = {
  home: string
  viewSource: string
  exploreProduct: string
  includedEyebrow: string
  capabilitiesTitle: string
  architectureEyebrow: string
  architectureTitle: string
  technologyEyebrow: string
  technologyTitle: string
  prerequisites: string
  quickStart: string
  repositoriesEyebrow: string
  repositoriesTitle: string
}

export type OpenSourceProjectMessages = {
  seoTitle: string
  seoDescription: string
  title: string
  category: string
  status: string
  summary: string
  description: string
  facts: Array<{ label: string; value: string }>
  capabilities: Array<{ name: string; description: string }>
  architecture: Array<{ name: string; description: string }>
  prerequisites: string[]
  repositoryLabels: string[]
}

export type LocalizedOpenSourceProject = Record<Locale, OpenSourceProjectMessages>