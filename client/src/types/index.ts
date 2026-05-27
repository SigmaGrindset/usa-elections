export interface Candidate {
  id: number
  name: string
}

export interface ElectionCandidate {
  id: number
  election_year: number
  candidate_id: number
  role: string
  total_ev: number
  is_winner: boolean
  party: string
  candidate: Candidate
}

export interface StateResultCandidate {
  id: number
  state_result_id: number
  election_candidate_id: number
  ev_count: number
  election_candidate: ElectionCandidate
}

export interface StateResult {
  id: number
  election_year: number
  state_name: string
  total_ev: number
  state_result_candidates: StateResultCandidate[]
}

export interface Election {
  year: number
  total_ev: number
  majority_ev: number
  election_candidates: ElectionCandidate[]
  state_results: StateResult[]
}

export interface ElectionResponse {
  success: boolean
  data: Election
}

export interface Stats {
  democratic: number
  republican: number
  other: number
  total: number
}

export interface StatsResponse {
  success: boolean
  data: Stats
}
