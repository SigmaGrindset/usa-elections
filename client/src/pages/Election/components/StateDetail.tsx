// components/StateDetail.tsx
import type { Election } from '#/types'
import { PARTY_COLORS } from '#/constants'

interface StateDetailProps {
  election: Election
  stateName: string
}

export const StateDetail = ({ election, stateName }: StateDetailProps) => {
  const stateResult = election.state_results.find(s => s.state_name === stateName)

  if (!stateResult) return (
    <div className="mt-8 p-5 border border-white/6 bg-white/2">
      <div className="text-sm text-muted">{stateName} did not participate in this election.</div>
    </div>
  )

  const candidates = stateResult.state_result_candidates
    .filter(c => c.election_candidate.role === 'president')
    .sort((a, b) => b.ev_count - a.ev_count)

  const winner = candidates[0]

  return (
    <div className="mt-8 border border-white/6 bg-white/2">
      <div className="p-5 border-b border-white/6 flex items-center justify-between">
        <div>
          <div className="text-[0.65rem] tracking-[0.18em] uppercase text-muted mb-1">Selected State</div>
          <div className="font-playfair text-2xl font-bold">{stateName}</div>
        </div>
        <div className="text-right">
          <div className="font-playfair text-3xl font-black text-accent">{stateResult.total_ev}</div>
          <div className="text-[0.7rem] tracking-widest uppercase text-muted">Electoral Votes</div>
        </div>
      </div>

      <div className="p-5 border-b border-white/6">
        <div className="flex items-center gap-3">
          <div
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ background: PARTY_COLORS[winner.election_candidate.party as keyof typeof PARTY_COLORS] ?? '#888' }}
          />
          <div>
            <div className="text-[0.65rem] tracking-[0.18em] uppercase text-muted mb-0.5">Winner</div>
            <div className="font-playfair text-lg font-bold">{winner.election_candidate.candidate.name}</div>
            <div className="text-xs text-muted font-light">{winner.election_candidate.party}</div>
          </div>
          <div
            className="ml-auto font-playfair text-2xl font-bold"
            style={{ color: PARTY_COLORS[winner.election_candidate.party as keyof typeof PARTY_COLORS] ?? '#888' }}
          >
            {winner.ev_count} EV
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="text-[0.65rem] tracking-[0.18em] uppercase text-muted mb-4">All Candidates</div>
        {candidates.map(c => (
          <div key={c.id} className="flex items-center gap-3 py-2.5 border-b border-white/4 last:border-0">
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: PARTY_COLORS[c.election_candidate.party as keyof typeof PARTY_COLORS] ?? '#888' }}
            />
            <div className="flex-1">
              <div className="text-sm">{c.election_candidate.candidate.name}</div>
              <div className="text-xs text-muted font-light">{c.election_candidate.party}</div>
            </div>
            <div
              className="font-playfair text-lg font-bold"
              style={{ color: PARTY_COLORS[c.election_candidate.party as keyof typeof PARTY_COLORS] ?? '#888' }}
            >
              {c.ev_count}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
