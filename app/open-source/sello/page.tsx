import LocalizedOpenSourceProjectPage, { createOpenSourceMetadata } from '@/components/LocalizedOpenSourceProjectPage'

export function generateMetadata() {
  return createOpenSourceMetadata('sello')
}

export default function SelloOpenSource() {
  return <LocalizedOpenSourceProjectPage project="sello" />
}