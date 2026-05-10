import { useParams } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { fetchElections } from '#/api/elections'
import { PARTY_COLORS } from '#/constants'
import type { Election, ElectionCandidate } from '#/types'
import { ElectionMap } from '#/components/ui/ElectionMap'

export const Compare = () => {
  const { year1, year2 } = useParams({ from: '/_app/compare/$year1/$year2' })
  const y1 = parseInt(year1)
  const y2 = parseInt(year2)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['compare', y1, y2],
    queryFn: () => fetchElections(y1, y2),
  })

  if (isLoading) return (
    <div className="py-24 text-center text-muted text-sm tracking-widest uppercase">Loading...</div>
  )

  if (isError) return (
    <div className="py-24 text-center text-muted text-sm tracking-widest uppercase">Error loading elections</div>
  )

  const { election1, election2 } = data!

  const getWinner = (election: Election) =>
    election.election_candidates.find(c => c.is_winner && c.role === 'president')

  const getPresidents = (election: Election) =>
    election.election_candidates.filter(c => c.role === 'president')

  const winner1 = getWinner(election1)
  const winner2 = getWinner(election2)
  const presidents1 = getPresidents(election1)
  const presidents2 = getPresidents(election2)

  const getSwingStates = () => {
    const swingStates: { state: string; from: string; to: string }[] = []

    for (const sr1 of election1.state_results) {
      const sr2 = election2.state_results.find(s => s.state_name === sr1.state_name)
      if (!sr2) continue

      const stateWinner1 = sr1.state_result_candidates
        .filter(c => c.election_candidate.role === 'president')
        .sort((a, b) => b.ev_count - a.ev_count)[0]

      const stateWinner2 = sr2.state_result_candidates
        .filter(c => c.election_candidate.role === 'president')
        .sort((a, b) => b.ev_count - a.ev_count)[0]

      if (!stateWinner1 || !stateWinner2) continue

      const party1 = stateWinner1.election_candidate.party
      const party2 = stateWinner2.election_candidate.party

      if (party1 !== party2) {
        swingStates.push({ state: sr1.state_name, from: party1, to: party2 })
      }
    }

    return swingStates
  }

  const swingStates = getSwingStates()

  const getCandidateColor = (c: ElectionCandidate) =>
    PARTY_COLORS[c.party as keyof typeof PARTY_COLORS] ?? '#888'

  const getSwingStateColor = (stateName: string): string => {
    const [base, newer] = [election1, election2].sort((a, b) => a.year - b.year)

    const getStateWinner = (election: Election, name: string) => {
      const stateResult = election.state_results.find(s => s.state_name === name)
      if (!stateResult) return null

      return stateResult.state_result_candidates
        .filter(c => c.election_candidate.role === 'president')
        .sort((a, b) => b.ev_count - a.ev_count)[0]
    }

    const baseWinner = getStateWinner(base, stateName)
    const newerWinner = getStateWinner(newer, stateName)

    if (!baseWinner || !newerWinner) return 'rgba(255,255,255,0.05)'

    if (baseWinner.election_candidate.party === newerWinner.election_candidate.party) {
      return 'rgba(255,255,255,0.08)'
    }

    return PARTY_COLORS[newerWinner.election_candidate.party as keyof typeof PARTY_COLORS] ?? '#888'
  }

  return (
    <div className="py-10">

      {/* Title */}
      <div className="text-[0.7rem] tracking-[0.2em] uppercase text-muted mb-1">Election Comparison</div>
      <h1 className="font-playfair text-5xl font-black leading-tight mb-10">
        <em className="text-accent">{year1}</em> vs <em className="text-accent">{year2}</em>
      </h1>

      {/* Winners side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/4 mb-10">
        {[{ election: election1, winner: winner1, year: year1 }, { election: election2, winner: winner2, year: year2 }].map(({ winner, year }) => (
          <div key={year} className="bg-primary p-6">
            <div className="text-[0.65rem] tracking-[0.15em] uppercase text-muted mb-4">{year}</div>
            {winner && (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ background: getCandidateColor(winner) }}
                  />
                  <div>
                    <div className="font-playfair text-2xl font-bold">{winner.candidate.name}</div>
                    <div className="text-sm text-muted font-light">{winner.party}</div>
                  </div>
                </div>
                <div className="font-playfair text-4xl font-black text-accent">{winner.total_ev}
                  <span className="text-sm font-sans font-light text-muted ml-2">EV</span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* EV bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {[{ election: election1, presidents: presidents1, year: year1 }, { election: election2, presidents: presidents2, year: year2 }].map(({ election, presidents, year }) => (
          <div key={year}>
            <div className="text-[0.65rem] tracking-[0.18em] uppercase text-muted mb-3">{year} Electoral Votes</div>
            <div className="h-1.5 flex overflow-hidden mb-3">
              {presidents.map(c => (
                <div
                  key={c.id}
                  style={{
                    width: `${(c.total_ev / election.total_ev) * 100}%`,
                    background: getCandidateColor(c),
                    borderRight: c.party !== 'Unknown' ? '2px solid #0a0a0f' : 'none'
                  }}
                />
              ))}
            </div>
            {presidents.map(c => (
              <div key={c.id} className="flex items-center gap-2 text-sm text-muted mb-1">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: getCandidateColor(c) }} />
                {c.candidate.name} · {c.total_ev} EV
              </div>
            ))}
          </div>
        ))}
      </div>



      {/* Two maps side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {[
          { election: election1, year: year1 },
          { election: election2, year: year2 }
        ].map(({ election, year }) => (
          <div key={year}>
            <div className="text-[0.65rem] tracking-[0.18em] uppercase text-muted mb-4">{year}</div>
            <ElectionMap
              getStateColor={(stateName) => {
                const stateResult = election.state_results.find(s => s.state_name === stateName)
                if (!stateResult) return 'rgba(255,255,255,0.05)'

                const winner = stateResult.state_result_candidates
                  .filter(c => c.election_candidate.role === 'president')
                  .sort((a, b) => b.ev_count - a.ev_count)[0]

                if (!winner) return 'rgba(255,255,255,0.05)'

                return PARTY_COLORS[winner.election_candidate.party as keyof typeof PARTY_COLORS] ?? '#888'
              }}
            />
          </div>
        ))}
      </div>

      {/* Swing state map */}
      <div className="mb-4">
        <div className="text-[0.65rem] tracking-[0.18em] uppercase text-muted mb-1">Swing State Map</div>
        <p className="text-xs text-muted/60 mb-6">
          Colored states changed party between {[y1, y2].sort((a, b) => a - b).join(' and ')}. Color indicates the party that won in {[y1, y2].sort((a, b) => a - b)[1]}.
        </p>
        <ElectionMap getStateColor={getSwingStateColor} />
      </div>

      {/* Swing states */}
      <div className="mb-10">
        <div className="text-[0.65rem] tracking-[0.18em] uppercase text-muted mb-4">
          Swing States ({swingStates.length})
        </div>
        {swingStates.length === 0 ? (
          <div className="text-sm text-muted">No states changed party between these elections.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
            {swingStates.map(s => (
              <div key={s.state} className="bg-primary p-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: PARTY_COLORS[s.from as keyof typeof PARTY_COLORS] ?? '#888' }} />
                <div className="text-sm flex-1">{s.state}</div>
                <div className="w-2 h-2 rounded-full shrink-0" style={{ background: PARTY_COLORS[s.to as keyof typeof PARTY_COLORS] ?? '#888' }} />
              </div>
            ))}
          </div>
        )}
      </div>


    </div>
  )
}
