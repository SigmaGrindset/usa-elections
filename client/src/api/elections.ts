import type { ElectionResponse, EvTrendResponse, ExtremesResponse, StatsResponse } from "#/types"
const API_URL = import.meta.env.VITE_API_URL ?? ''

export const fetchStats = async (): Promise<StatsResponse> => {
  const response = await fetch(`${API_URL}/api/stats`)
  if (!response.ok) throw new Error('Failed to fetch stats')
  return response.json()
}

export const fetchEvTrend = async (): Promise<EvTrendResponse> => {
  const response = await fetch(`${API_URL}/api/stats/ev-trend`)
  if (!response.ok) throw new Error('Failed to fetch EV trend')
  return response.json()
}

export const fetchExtremes = async (): Promise<ExtremesResponse> => {
  const response = await fetch(`${API_URL}/api/stats/extremes`)
  if (!response.ok) throw new Error('Failed to fetch extremes')
  return response.json()
}

export const fetchElection = async (year: number): Promise<ElectionResponse> => {
  const response = await fetch(`${API_URL}/api/election/${year}`)
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
