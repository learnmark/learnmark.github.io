import LocalizedSolutionPage, { createSolutionMetadata } from '@/components/LocalizedSolutionPage'

export function generateMetadata() {
  return createSolutionMetadata('delivery', '/solutions/agile-scrum')
}

export default function AgileScrum() {
  return <LocalizedSolutionPage solution="delivery" path="/solutions/agile-scrum" secondaryHref="/letscrum" />
}
