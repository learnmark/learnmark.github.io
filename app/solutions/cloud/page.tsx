import LocalizedSolutionPage, { createSolutionMetadata } from '@/components/LocalizedSolutionPage'

export function generateMetadata() {
  return createSolutionMetadata('cloud', '/solutions/cloud')
}

export default function CloudConsulting() {
  return <LocalizedSolutionPage solution="cloud" path="/solutions/cloud" secondaryHref="/solutions/devops" />
}