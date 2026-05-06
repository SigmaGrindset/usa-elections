import { useParams } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { fetchElection } from '#/api/elections'

export const Election = () => {
  const { year } = useParams({ from: '/_app/election/$year' })

  const { data, isLoading, isError } = useQuery({
    queryKey: ['election', year],
    queryFn: () => fetchElection(parseInt(year)),
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error loading election</div>

  const election = data?.data

  return (
    <div>
      <pre>{JSON.stringify(election, null, 2)}</pre>
    </div>
  )
}
