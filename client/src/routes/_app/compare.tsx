import { createFileRoute } from '@tanstack/react-router'
import { Compare } from '#/pages/Compare'
export const Route = createFileRoute('/_app/compare')({
  component: Compare,
})
