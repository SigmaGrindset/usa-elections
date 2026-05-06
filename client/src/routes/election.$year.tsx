import { createFileRoute } from '@tanstack/react-router'
import { Election } from '#/pages/Election'

export const Route = createFileRoute('/election/$year')({
  component: Election,
})
