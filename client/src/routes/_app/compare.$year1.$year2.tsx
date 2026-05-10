import { createFileRoute, notFound } from '@tanstack/react-router'
import { Compare } from '#/pages/Compare'
import { years } from '#/constants'

export const Route = createFileRoute('/_app/compare/$year1/$year2')({
  component: Compare,
  beforeLoad: ({ params }) => {
    const year1 = parseInt(params.year1, 10)
    const year2 = parseInt(params.year2, 10)
    if (!years.includes(year1) || !years.includes(year2) || year1 === year2) {
      throw notFound()
    }
  }
})
