export type ExpertServicePageMessages = {
  seo: {
    title: string
    description: string
    keywords: string[]
    serviceType: string
  }
  breadcrumbHome: string
  eyebrow: string
  title: string
  description: string
  primaryCta: string
  secondaryCta: string
  panelTitle: string
  panelSubtitle: string
  panelItems: Array<{ label: string; value: string }>
  detailEyebrow: string
  detailTitle: string
  detailDescription: string
  details: Array<{ name: string; description: string }>
  processEyebrow: string
  processTitle: string
  processDescription: string
  steps: Array<{ name: string; description: string }>
  scopeEyebrow: string
  scopeTitle: string
  scopeDescription: string
  scopeItems: string[]
  ctaTitle: string
  ctaDescription: string
}

export type ExpertServiceKey = 'forClients' | 'howItWorks' | 'experts' | 'compliance'
export type ExpertServiceMessages = Record<ExpertServiceKey, ExpertServicePageMessages>
