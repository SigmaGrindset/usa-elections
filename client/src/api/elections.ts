import type { ElectionResponse } from "#/types"
const API_URL = import.meta.env.VITE_API_URL

export const fetchElection = async (year: number): Promise<ElectionResponse> => {
  const response = await fetch(`${API_URL}/api/elections/${year}`)
  if (!response.ok) throw new Error('Failed to fetch election')
  return response.json()
}
