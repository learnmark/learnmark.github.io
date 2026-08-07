import LocalizedSolutionPage, { createSolutionMetadata } from '@/components/LocalizedSolutionPage'

export function generateMetadata() {
  return createSolutionMetadata('gateway', '/solutions/gateway')
}

export default function Gateway() {
  return <LocalizedSolutionPage solution="gateway" path="/solutions/gateway" secondaryHref="/llmxy" />
}
