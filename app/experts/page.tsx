import ExpertServiceRoute, { createExpertServiceMetadata } from '@/components/ExpertServiceRoute'

const expertInterestHref = 'mailto:hello@learnmark.com?subject=Join%20the%20Learnmark%20expert%20network'

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
