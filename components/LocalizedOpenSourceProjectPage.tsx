import type { Metadata } from 'next'

import { createBreadcrumbJsonLd, createPageMetadata } from '@/app/seo'
import { getLocale } from '@/i18n/server'
import { letscrumOpenSourceMessages } from '@/i18n/messages/open-source/letscrum'
import { llmxyOpenSourceMessages } from '@/i18n/messages/open-source/llmxy'
import { selloOpenSourceMessages } from '@/i18n/messages/open-source/sello'
import { openSourceTemplateMessages } from '@/i18n/messages/open-source/template'
import type { OpenSourceProjectKey } from '@/i18n/messages/open-source/types'
import JsonLd from './JsonLd'
import OpenSourceProjectPage from './OpenSourceProjectPage'

const projectConfig = {
  llmxy: {
    path: '/open-source/llmxy',
    productHref: '/llmxy',
    keywords: ['llmxy open source', 'self-hosted LLM gateway', 'OpenAI-compatible API', 'Envoy AI gateway', 'LLM usage billing'],
    technology: ['Python 3.11+', 'FastAPI', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'PostgreSQL 16+', 'Redis 7+', 'Envoy', 'gRPC', 'Docker Compose'],
    quickStart: `git clone https://github.com/wilsonwu/llmxy.git
cd llmxy
cp .env.example .env
docker compose up -d --build`,
    repositories: [
      'https://github.com/wilsonwu/llmxy',
      'https://github.com/wilsonwu/llmxy/blob/main/docs/architecture.md',
    ],
    messages: llmxyOpenSourceMessages,
  },
  letscrum: {
    path: '/open-source/letscrum',
    productHref: '/letscrum',
    keywords: ['LetScrum open source', 'open source Scrum software', 'Go project management API', 'Agile sprint management', 'Apache 2.0 Scrum tool'],
    technology: ['Go 1.22+', 'Vue', 'gRPC', 'gRPC-Gateway', 'Protocol Buffers', 'GORM', 'MySQL', 'PostgreSQL', 'Viper', 'Cobra', 'JWT'],
    quickStart: `git clone https://github.com/letscrum/letscrum.git
cd letscrum
make build
make run`,
    repositories: [
      'https://github.com/letscrum/letscrum',
      'https://github.com/letscrum/letscrum-ui',
      'https://github.com/letscrum',
    ],
    messages: letscrumOpenSourceMessages,
  },
  sello: {
    path: '/open-source/sello',
    productHref: '/sello',
    keywords: ['Sello open source', 'e-commerce SaaS starter', 'multi-tenant commerce platform', 'AI seller assistant', 'FastAPI Next.js monorepo'],
    technology: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'pnpm workspace'],
    quickStart: `git clone https://github.com/imoogoo/sellohub.git
cd sellohub
corepack enable pnpm
pnpm install
pnpm dev:all`,
    repositories: [
      'https://github.com/imoogoo/sellohub',
      'https://github.com/imoogoo/sellohub/blob/main/docs/architecture.md',
      'https://github.com/imoogoo/sellohub/blob/main/docs/product-design.md',
    ],
    messages: selloOpenSourceMessages,
  },
} as const

export async function createOpenSourceMetadata(project: OpenSourceProjectKey): Promise<Metadata> {
  const locale = await getLocale()
  const config = projectConfig[project]
  const messages = config.messages[locale]

  return createPageMetadata({
    title: messages.seoTitle,
    description: messages.seoDescription,
    path: config.path,
    keywords: [...config.keywords],
    locale,
  })
}

export default async function LocalizedOpenSourceProjectPage({ project }: { project: OpenSourceProjectKey }) {
  const locale = await getLocale()
  const config = projectConfig[project]
  const messages = config.messages[locale]
  const repositories = config.repositories.map((href, index) => ({
    href,
    label: messages.repositoryLabels[index] ?? href,
  }))
  const jsonLd = createBreadcrumbJsonLd([
    { name: openSourceTemplateMessages[locale].home, path: '/' },
    { name: messages.title, path: config.path },
  ])

  return (
    <>
      <JsonLd data={jsonLd} />
      <OpenSourceProjectPage
        title={messages.title}
        category={messages.category}
        status={messages.status}
        summary={messages.summary}
        description={messages.description}
        facts={messages.facts}
        capabilities={messages.capabilities}
        architecture={messages.architecture}
        technology={[...config.technology]}
        prerequisites={messages.prerequisites}
        quickStart={config.quickStart}
        repositories={repositories}
        productHref={config.productHref}
        labels={openSourceTemplateMessages[locale]}
      />
    </>
  )
}