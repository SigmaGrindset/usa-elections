import type { Election } from '#/types'
import { PARTY_COLORS } from '#/constants'

export const useStateColors = (election: Election | undefined) => {
  const getStateColor = (stateName: string) => {
    const undefinedColor = 'rgba(255,255,255,0.05)'
    if (!election) return undefinedColor
    const stateResult = election.state_results.find(s => s.state_name === stateName)
    if (!stateResult) return undefinedColor

    const winner = stateResult.state_result_candidates
      .filter(c => c.election_candidate.role === 'president')
      .sort((a, b) => b.ev_count - a.ev_count)[0]

    if (!winner) return undefinedColor

    const party = winner.election_candidate.party
    return PARTY_COLORS[party as keyof typeof PARTY_COLORS] ?? '#888'
  }

  return { getStateColor }
}
