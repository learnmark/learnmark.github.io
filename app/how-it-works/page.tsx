import ExpertServiceRoute, { createExpertServiceMetadata } from '@/components/ExpertServiceRoute'

export function generateMetadata() {
  return createExpertServiceMetadata('howItWorks', '/how-it-works')
}

export default function HowItWorksPage() {
  return (
    <ExpertServiceRoute
      service="howItWorks"
      path="/how-it-works"
      primaryHref="/contact"
      secondaryHref="/for-clients"
    />
  )
}
