import ExpertServiceRoute, { createExpertServiceMetadata } from '@/components/ExpertServiceRoute'

const expertInterestHref = '/contact?interest=Expert%20network'

export function generateMetadata() {
  return createExpertServiceMetadata('experts', '/experts')
}

export default function ExpertsPage() {
  return (
    <ExpertServiceRoute
      service="experts"
      path="/experts"
      primaryHref={expertInterestHref}
      secondaryHref="/compliance"
      ctaId="join"
    />
  )
}
