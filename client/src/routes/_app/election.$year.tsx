import { createFileRoute } from '@tanstack/react-router'
import { Election } from '#/pages/Election'
import { years } from '#/constants'
import { notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/election/$year')({
  component: Election,
  beforeLoad: ({ params }) => {
    const year = parseInt(params.year)
    if (isNaN(year) || !years.includes(year)) {
      throw notFound()
    }
  }
})
