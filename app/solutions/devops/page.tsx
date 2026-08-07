import LocalizedSolutionPage, { createSolutionMetadata } from '@/components/LocalizedSolutionPage'

export function generateMetadata() {
  return createSolutionMetadata('devops', '/solutions/devops')
}

export default function DevOps() {
  return <LocalizedSolutionPage solution="devops" path="/solutions/devops" secondaryHref="/solutions/cloud" />
}
