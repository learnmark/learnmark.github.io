import { getLocale } from '@/i18n/server'
import { letscrumOpenSourceMessages } from '@/i18n/messages/open-source/letscrum'
import { llmxyOpenSourceMessages } from '@/i18n/messages/open-source/llmxy'
import { selloOpenSourceMessages } from '@/i18n/messages/open-source/sello'
import { openSourceTemplateMessages } from '@/i18n/messages/open-source/template'
import type { OpenSourceProjectKey } from '@/i18n/messages/open-source/types'
import OpenSourceProjectPage from './OpenSourceProjectPage'

const projectConfig = {
  llmxy: {
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

export default async function LocalizedOpenSourceDetails({ project }: { project: OpenSourceProjectKey }) {
  const locale = await getLocale()
  const config = projectConfig[project]
  const messages = config.messages[locale]
  const repositories = config.repositories.map((href, index) => ({
    href,
    label: messages.repositoryLabels[index] ?? href,
  }))
  return (
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
      labels={openSourceTemplateMessages[locale]}
    />
  )
}