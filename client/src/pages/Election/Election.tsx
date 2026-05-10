import { useParams, useNavigate } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { fetchElection } from '#/api/elections'
import { PARTY_COLORS } from '#/constants'
import { years } from '#/constants'
import { ElectionMap } from '#/components/ui/ElectionMap'
import { useStateColors } from '#/hooks/useStateColors'
import { useState } from 'react'
import { StateDetail } from './components/StateDetail'

export const Election = () => {
  const { year } = useParams({ from: '/_app/election/$year' })
  const navigate = useNavigate()
  const yearNum = parseInt(year, 10)
  const [compareOpen, setCompareOpen] = useState(false)
  const [compareYear, setCompareYear] = useState<string>('')

  const { data, isLoading, isError } = useQuery({
    queryKey: ['election', yearNum],
    queryFn: () => fetchElection(yearNum),
  })

  const prevYear = years[years.indexOf(yearNum) - 1]
  const nextYear = years[years.indexOf(yearNum) + 1]
  const [selectedState, setSelectedState] = useState<string | null>(null)

  const election = data?.data
  const { getStateColor } = useStateColors(election)
  const winner = election?.election_candidates.find(c => c.is_winner && c.role === 'president')
  const presidents = election?.election_candidates.filter(c => c.role === 'president') ?? []
  const totalEv = election?.total_ev ?? 0
  const margin = winner ? winner.total_ev - (presidents.find(c => !c.is_winner)?.total_ev ?? 0) : 0

  if (isLoading) return (
    <div className="py-24 text-center text-muted text-sm tracking-widest uppercase">Loading...</div>
  )

  if (isError) return (
    <div className="py-24 text-center text-muted text-sm tracking-widest uppercase">Error loading election</div>
  )

  return (
    <div className="py-10">

      {/* Year navigation */}
      <div className="flex gap-3 mb-8">
        {prevYear && (
          <button
            type='button'
            onClick={() => navigate({ to: '/election/$year', params: { year: String(prevYear) } })}
            className="cursor-pointer text-sm text-muted border border-white/8 px-3 py-1 rounded-sm hover:text-white/70 transition-colors"
          >
            ← {prevYear}
          </button>
        )}
        <button
          type='button'
          className="text-sm text-white border border-white/25 px-3 py-1 rounded-sm"
        >
          {year}
        </button>
        {nextYear && (
          <button
            type='button'
            onClick={() => navigate({ to: '/election/$year', params: { year: String(nextYear) } })}
            className="cursor-pointer text-sm text-muted border border-white/8 px-3 py-1 rounded-sm hover:text-white/70 transition-colors"
          >
            {nextYear} →
          </button>
        )}
      </div>
      <div className="flex items-center gap-3 mb-8">
        <button
          type='button'
          onClick={() => setCompareOpen(prev => !prev)}
          className="cursor-pointer text-sm text-muted border border-white/8 px-3 py-1 rounded-sm hover:text-white/70 transition-colors"
        >
          Compare with another year
        </button>
        {compareOpen && (
          <div className="flex items-center gap-2">
            <select
              value={compareYear}
              onChange={e => setCompareYear(e.target.value)}
              className="bg-primary border border-white/8 text-sm text-muted px-2 py-1 rounded-sm"
            >
              <option value="">Select year</option>
              {years
                .filter(y => y !== yearNum)
                .map(y => (
                  <option key={y} value={y}>{y}</option>
                ))
              }
            </select>
            {compareYear && (
              <button
                type="button"
                onClick={() => navigate({ to: '/compare/$year1/$year2', params: { year1: year, year2: compareYear } })}
                className="cursor-pointer text-sm bg-accent text-white px-3 py-1 rounded-sm hover:bg-accent-hover transition-colors"
              >
                Compare →
              </button>
            )}
          </div>
        )}
      </div>

      {/* Title */}
      <div className="text-[0.7rem] tracking-[0.2em] uppercase text-muted mb-1">Presidential Election</div>
      <h1 className="font-playfair text-5xl font-black text-white leading-tight mb-1">
        United States <em className="text-accent">{year}</em>
      </h1>
      <p className="text-sm text-muted font-light mb-10">
        {totalEv} electoral votes · Majority required: {election?.majority_ev}
      </p>

      {/* Winner bar */}
      {winner && (
        <div className="flex items-center gap-4 mb-10 p-5 border border-white/6 bg-white/2">
          <div className="text-[0.65rem] tracking-[0.15em] uppercase text-accent border border-accent/40 px-2 py-1 rounded-sm whitespace-nowrap">
            Winner
          </div>
          <div>
            <div className="font-playfair text-2xl font-bold">{winner.candidate.name}</div>
            <div className="text-sm text-muted font-light mt-0.5">{winner.party}</div>
          </div>
          <div className="ml-auto text-right">
            <div className="font-playfair text-3xl font-black text-accent">{winner.total_ev}</div>
            <div className="text-[0.7rem] tracking-widest uppercase text-muted">Electoral Votes</div>
          </div>
        </div>
      )}

      {/* EV bar */}
      <div className="mb-10">
        <div className="h-1.5 flex overflow-hidden mb-3">
          {presidents.map(c => (
            <div
              key={c.id}
              style={{
                width: `${(c.total_ev / totalEv) * 100}%`,
                background: PARTY_COLORS[c.party as keyof typeof PARTY_COLORS] ?? '#888',
                borderRight: c.party !== 'Unknown' ? '2px solid #0a0a0f' : 'none'
              }}
            />
          ))}
        </div>
        <div className="flex gap-6 flex-wrap">
          {presidents.map(c => (
            <div key={c.id} className="flex items-center gap-2 text-sm text-muted">
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: PARTY_COLORS[c.party as keyof typeof PARTY_COLORS] ?? '#888' }}
              />
              {c.candidate.name} · {c.total_ev} EV
            </div>
          ))}
        </div>
      </div>

      {/* Map + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">


        {/* Left column - Map + State detail */}
        <div className="flex flex-col gap-6">
          {election && (
            <ElectionMap
              getStateColor={getStateColor}
              onStateClick={(stateName) => setSelectedState(prev => prev === stateName ? null : stateName)}
              selectedState={selectedState}
            />
          )}
          {selectedState && election && (
            <StateDetail
              election={election}
              stateName={selectedState}
            />
          )}
        </div>


        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          {/* Candidates */}
          <div>
            <div className="text-[0.65rem] tracking-[0.18em] uppercase text-muted mb-4">Presidential candidates</div>
            {presidents.map(c => (
              <div key={c.id} className="flex items-center gap-3 py-3.5 border-b border-white/4 last:border-0">
                <div
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: PARTY_COLORS[c.party as keyof typeof PARTY_COLORS] ?? '#888' }}
                />
                <div className="flex-1">
                  <div className="text-sm">{c.candidate.name}</div>
                  <div className="text-xs text-muted font-light">{c.party}</div>
                </div>
                <div
                  className="font-playfair text-lg font-bold"
                  style={{ color: PARTY_COLORS[c.party as keyof typeof PARTY_COLORS] ?? '#888' }}
                >
                  {c.total_ev}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div>
            <div className="text-[0.65rem] tracking-[0.18em] uppercase text-muted mb-4">Election summary</div>
            <div className="grid grid-cols-2 gap-px bg-white/4">
              {[
                { val: totalEv, lbl: 'Total EV' },
                { val: election?.majority_ev, lbl: 'Majority' },
                { val: election?.state_results.length, lbl: 'States + DC' },
                { val: margin, lbl: 'EV margin' },
              ].map(s => (
                <div key={s.lbl} className="bg-primary p-4">
                  <div className="font-playfair text-2xl font-bold mb-0.5">{s.val}</div>
                  <div className="text-[0.7rem] tracking-widest uppercase text-muted">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}
