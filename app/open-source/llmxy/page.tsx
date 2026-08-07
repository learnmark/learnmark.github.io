import LocalizedOpenSourceProjectPage, { createOpenSourceMetadata } from '@/components/LocalizedOpenSourceProjectPage'

export function generateMetadata() {
  return createOpenSourceMetadata('llmxy')
}

export default function LlmxyOpenSource() {
  return <LocalizedOpenSourceProjectPage project="llmxy" />
}