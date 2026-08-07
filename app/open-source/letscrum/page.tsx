import JsonLd from '@/components/JsonLd'
import OpenSourceProjectPage from '@/components/OpenSourceProjectPage'
import { createBreadcrumbJsonLd, createPageMetadata } from '../../seo'

const description = 'Explore the open-source LetScrum project: an Apache-2.0 Scrum and Agile management system with organization, project, sprint, work item, user, REST, and gRPC capabilities.'

export const metadata = createPageMetadata({
  title: 'LetScrum Open Source - Scrum and Agile Management',
  description,
  path: '/open-source/letscrum',
  keywords: ['LetScrum open source', 'open source Scrum software', 'Go project management API', 'Agile sprint management', 'Apache 2.0 Scrum tool'],
})

const jsonLd = createBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'LetScrum Open Source', path: '/open-source/letscrum' },
])

export default function LetScrumOpenSource() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <OpenSourceProjectPage
        name="LetScrum"
        category="Open Source Delivery Tool"
        status="Apache-2.0"
        summary="A lightweight Scrum and Agile management system with a Go service, REST and gRPC interfaces, and a separate Vue user interface."
        description="LetScrum keeps the open-source core focused on organizations, projects, sprints, structured work items, users, and roles. Teams can operate it against MySQL or PostgreSQL and extend its API-first foundation for their own delivery workflows."
        facts={[
          { label: 'License', value: 'Apache License 2.0' },
          { label: 'Repositories', value: 'Separate Go service and Vue interface' },
          { label: 'Interfaces', value: 'gRPC and REST through gRPC-Gateway' },
          { label: 'Storage', value: 'MySQL or PostgreSQL' },
        ]}
        capabilities={[
          { name: 'Organization management', description: 'Create organizations and keep projects and team activity grouped within a clear organizational boundary.' },
          { name: 'Project management', description: 'Create and manage projects as the long-lived workspace for Scrum planning and execution.' },
          { name: 'Sprint management', description: 'Plan sprints and track the delivery window in which selected work is expected to move forward.' },
          { name: 'Structured work items', description: 'Represent work using Epics, Features, and Tasks so teams can connect strategic scope to executable items.' },
          { name: 'Users and roles', description: 'Authenticate users with JWT and apply role-aware access across the project management service.' },
          { name: 'API-first operation', description: 'Use native gRPC contracts or REST endpoints exposed by gRPC-Gateway for integrations and alternative clients.' },
        ]}
        architecture={[
          { name: 'Service', description: 'Go application with command entry points and separated data, service, and domain logic.' },
          { name: 'API contracts', description: 'Protocol Buffer definitions generate gRPC services and REST gateway bindings.' },
          { name: 'Data layer', description: 'GORM-backed persistence supports either MySQL or PostgreSQL deployments.' },
          { name: 'User interface', description: 'The letscrum-ui repository provides the Vue frontend independently from the server.' },
        ]}
        technology={['Go 1.22+', 'Vue', 'gRPC', 'gRPC-Gateway', 'Protocol Buffers', 'GORM', 'MySQL', 'PostgreSQL', 'Viper', 'Cobra', 'JWT']}
        prerequisites={['Go 1.22 or newer', 'A MySQL or PostgreSQL database', 'Make and Protocol Buffer tooling when regenerating API code']}
        quickStart={`git clone https://github.com/letscrum/letscrum.git
cd letscrum
make build
make run`}
        repositories={[
          { label: 'Server repository', href: 'https://github.com/letscrum/letscrum' },
          { label: 'User interface repository', href: 'https://github.com/letscrum/letscrum-ui' },
          { label: 'LetScrum organization', href: 'https://github.com/letscrum' },
        ]}
        productHref="/letscrum"
      />
    </>
  )
}