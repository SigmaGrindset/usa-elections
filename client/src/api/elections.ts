import type { ElectionResponse } from "#/types"
export const fetchElection = async (year: number): Promise<ElectionResponse> => {
  const response = await fetch(`/api/elections/${year}`)
  if (!response.ok) throw new Error('Failed to fetch election')
  return response.json()
}

export const fetchElections = async (year1: number, year2: number) => {
  const [res1, res2] = await Promise.all([
    fetchElection(year1),
    fetchElection(year2),
  ])
  return { election1: res1.data, election2: res2.data }
}
