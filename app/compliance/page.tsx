import ExpertServiceRoute, { createExpertServiceMetadata } from '@/components/ExpertServiceRoute'

export function generateMetadata() {
  return createExpertServiceMetadata('compliance', '/compliance')
}

export default function CompliancePage() {
  return (
    <ExpertServiceRoute
      service="compliance"
      path="/compliance"
      primaryHref="/contact"
      secondaryHref="/how-it-works"
    />
  )
}
