import LocalizedSolutionPage, { createSolutionMetadata } from '@/components/LocalizedSolutionPage'

export function generateMetadata() {
  return createSolutionMetadata('microservices', '/solutions/microservices')
}

export default function Microservices() {
  return <LocalizedSolutionPage solution="microservices" path="/solutions/microservices" secondaryHref="/solutions/cloud" />
}
