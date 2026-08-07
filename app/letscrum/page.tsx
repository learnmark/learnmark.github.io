import { ChartBarIcon, ClipboardDocumentCheckIcon, LockClosedIcon, ServerIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import JsonLd from '@/components/JsonLd'
import ProductEdition from '@/components/ProductEdition'
import { createBreadcrumbJsonLd, createPageMetadata, createSoftwareApplicationJsonLd } from '../seo'

const letscrumDescription = 'The managed LetScrum product gives delivery teams a hosted Scrum workspace with onboarding, workflow configuration, migration, upgrades, backups, and operational support.'
const letscrumKeywords = ['LetScrum', 'managed Scrum software', 'sprint planning software', 'Scrum taskboard', 'agile project management', 'hosted project management']

export const metadata = createPageMetadata({
  title: 'LetScrum - Managed Scrum Project Delivery',
  description: letscrumDescription,
  path: '/letscrum',
  keywords: letscrumKeywords,
  images: [
    {
      url: '/images/letscrum/sprint-taskboard.png',
      width: 1200,
      height: 750,
      alt: 'LetScrum sprint taskboard screenshot',
    },
  ],
})

const letscrumJsonLd = [
  createSoftwareApplicationJsonLd({
    name: 'LetScrum',
    description: letscrumDescription,
    path: '/letscrum',
    applicationCategory: 'ProjectManagementApplication',
    image: '/images/letscrum/sprint-taskboard.png',
    keywords: letscrumKeywords,
  }),
  createBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'LetScrum', path: '/letscrum' },
  ]),
]

const screenshots = [
  {
    src: '/images/letscrum/project-sprints-overview.png',
    alt: 'LetScrum project sprint overview',
    title: 'Project sprint overview',
    description: 'Show current and upcoming sprints with quick entry points, project ownership, and a clean workspace sidebar.',
  },
  {
    src: '/images/letscrum/sprint-taskboard.png',
    alt: 'LetScrum sprint taskboard',
    title: 'Sprint taskboard',
    description: 'Track work items across To Do, In Progress, and Done columns with status, owners, estimates, bugs, and checklist items.',
  },
  {
    src: '/images/letscrum/sprint-backlog.png',
    alt: 'LetScrum sprint backlog',
    title: 'Structured sprint backlog',
    description: 'Manage epics, stories, tasks, remaining effort, ownership, and workflow state in a focused backlog table.',
  },
  {
    src: '/images/letscrum/user-management.png',
    alt: 'LetScrum user management',
    title: 'User management',
    description: 'Administer users, roles, profiles, and permissions from a simple user center built for small delivery teams.',
  },
]

const features = [
  {
    name: 'Sprint planning',
    description: 'Plan sprint goals, dates, backlog scope, ownership, and delivery commitments without heavyweight process overhead.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Team collaboration',
    description: 'Keep project members, assignees, and work states visible so everyone understands progress and responsibility.',
    icon: UserGroupIcon,
  },
  {
    name: 'Taskboard execution',
    description: 'Move work from To Do to Done with cards, estimates, issue types, state indicators, and release checklist support.',
    icon: ChartBarIcon,
  },
  {
    name: 'Cloud-ready deployment',
    description: 'Run LetScrum as a lightweight system that can fit into modern cloud, container, and internal platform environments.',
    icon: ServerIcon,
  },
  {
    name: 'Role-aware administration',
    description: 'Manage user access, roles, and team membership with a straightforward admin experience.',
    icon: LockClosedIcon,
  },
]

const managedFeatures = [
  {
    name: 'Hosted workspace operations',
    description: 'Run LetScrum in an operated environment with release management, encrypted configuration, backups, recovery procedures, and service monitoring.',
  },
  {
    name: 'Team and workflow onboarding',
    description: 'Set up organizations, projects, roles, sprint conventions, work item structure, and practical delivery workflows with guided implementation.',
  },
  {
    name: 'Migration and integration delivery',
    description: 'Plan imports from existing project tools and connect the API-first platform to selected identity, engineering, reporting, or internal systems.',
  },
  {
    name: 'Operational and delivery support',
    description: 'Get upgrade coordination, issue triage, workflow reviews, and a support path for both platform operation and day-to-day delivery adoption.',
  },
]

export default function LetScrum() {
  return (
    <>
      <JsonLd data={letscrumJsonLd} />
      <div className="relative isolate overflow-hidden bg-transparent px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-primary-700">Managed Delivery Workspace</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">LetScrum</h1>
              <p className="mt-6 text-xl leading-8 text-slate-700">
                A hosted Scrum workspace for teams that need practical sprint planning, clear task execution, guided setup, and dependable operations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Sprint planning', 'Backlogs', 'Taskboards', 'User management'].map((label) => (
                  <span key={label} className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-24 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="LetScrum sprint taskboard"
            src="/images/letscrum/sprint-taskboard.png"
            className="w-3xl max-w-none rounded-2xl bg-white object-cover object-top-left shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/10 sm:w-228"
          />
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-slate-700 lg:max-w-lg">
              <p>
                LetScrum helps small and focused delivery teams manage Scrum work without turning project management into another project. It keeps sprint scope, task status, user ownership, and team administration in one clear interface.
              </p>

              <ul role="list" className="mt-8 space-y-8 text-slate-600">
                {features.map((feature) => (
                  <li key={feature.name} className="flex gap-x-3">
                    <feature.icon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-primary-700" />
                    <span>
                      <strong className="font-semibold text-slate-950">{feature.name}.</strong> {feature.description}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8">
                The product is designed for teams that want the focus of LetScrum without taking on application hosting, upgrades, recovery planning, integration work, and operational support themselves.
              </p>

              <ProductEdition
                projectName="LetScrum"
                description="The Apache-2.0 repositories provide the core service and interface. The Learnmark product adds a maintained workspace and the implementation work needed to fit LetScrum into a real delivery organization."
                features={managedFeatures}
                openSourceHref="/open-source/letscrum"
              />

              <div className="mt-16">
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">Product Screenshots</h2>
                <p className="mt-6">
                  These screenshots show the core LetScrum flow from project planning to sprint execution and user administration.
                </p>
                <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-10">
                  {screenshots.map((screenshot) => (
                    <figure key={screenshot.src} className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-900/10">
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className="aspect-16/10 w-full bg-slate-50 object-cover object-top-left"
                        loading="lazy"
                      />
                      <figcaption className="border-t border-slate-200 p-5">
                        <h3 className="font-semibold text-slate-950">{screenshot.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{screenshot.description}</p>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-slate-950">Open source at the core, operated as a product</h2>
              <p className="mt-6">
                Review or self-host the LetScrum repositories, or choose the Learnmark product for a configured workspace, managed releases, migration help, and ongoing support.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-x-6">
                <a
                  href="/open-source/letscrum"
                  className="inline-flex justify-center rounded-full bg-primary-800 px-5 py-3 text-sm font-semibold text-white! shadow-lg shadow-primary-950/20 transition-all duration-300 hover:bg-primary-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-900"
                >
                  Explore Open Source
                </a>
                <a href="/contact" className="text-sm font-semibold leading-6 text-slate-900 hover:text-primary-800">
                  Discuss delivery tools <span aria-hidden="true">-&gt;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}