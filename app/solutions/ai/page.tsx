import LocalizedSolutionPage, { createSolutionMetadata } from '@/components/LocalizedSolutionPage'

export function generateMetadata() {
  return createSolutionMetadata('ai', '/solutions/ai')
}

export default function AI() {
  return <LocalizedSolutionPage solution="ai" path="/solutions/ai" secondaryHref="/solutions/gateway" />
}
