import ExpertServiceRoute, { createExpertServiceMetadata } from '@/components/ExpertServiceRoute'

export function generateMetadata() {
  return createExpertServiceMetadata('forClients', '/for-clients')
}

export default function ForClientsPage() {
  return (
    <ExpertServiceRoute
      service="forClients"
      path="/for-clients"
      primaryHref="/contact"
      secondaryHref="/how-it-works"
    />
  )
}
