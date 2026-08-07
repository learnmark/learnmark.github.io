import LocalizedOpenSourceProjectPage, { createOpenSourceMetadata } from '@/components/LocalizedOpenSourceProjectPage'

export function generateMetadata() {
  return createOpenSourceMetadata('letscrum')
}

export default function LetScrumOpenSource() {
  return <LocalizedOpenSourceProjectPage project="letscrum" />
}