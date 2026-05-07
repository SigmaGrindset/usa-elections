import type { ElectionResponse } from "#/types"
export const fetchElection = async (year: number): Promise<ElectionResponse> => {
  const response = await fetch(`/api/elections/${year}`)
  if (!response.ok) throw new Error('Failed to fetch election')
  return response.json()
}
