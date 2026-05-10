import { Link, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { years } from '#/constants'
import { useRef } from 'react'

const DECADE_GROUPS = [
  { label: '1780s – 1800s', years: years.filter(y => y < 1810) },
  { label: '1810s – 1830s', years: years.filter(y => y >= 1810 && y < 1840) },
  { label: '1840s – 1860s', years: years.filter(y => y >= 1840 && y < 1870) },
  { label: '1870s – 1900s', years: years.filter(y => y >= 1870 && y < 1910) },
  { label: '1910s – 1950s', years: years.filter(y => y >= 1910 && y < 1960) },
  { label: '1960s – 2000s', years: years.filter(y => y >= 1960 && y < 2010) },
  { label: '2010s – 2020s', years: years.filter(y => y >= 2010) },
]

export const Homepage = () => {
  const navigate = useNavigate()
  const [compareYear1, setCompareYear1] = useState('')
  const [compareYear2, setCompareYear2] = useState('')
  const electionsRef = useRef<HTMLElement>(null)

  return (
    <div className="min-h-screen bg-primary text-text font-dm">

      <section className="pt-24 pb-20">
        <div className="inline-block text-xs font-medium tracking-[0.15em] uppercase text-accent border border-accent/40 px-3 py-1 rounded-sm mb-8">
          Presidential Elections 1789 – 2024
        </div>
        <h1 className="font-playfair text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6 max-w-3xl">
          235 Years of <em className="text-accent">American</em> Democracy
        </h1>
        <p className="text-muted text-lg font-light max-w-lg leading-relaxed mb-12">
          Explore every presidential election in U.S. history. View electoral maps, compare candidates, and track how the nation has voted across centuries.
        </p>
        <div className='flex gap-4'>
          <Link to="/election/$year" params={{ year: '2024' }}
            className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-7 py-3 rounded-sm tracking-wide hover:bg-accent-hover transition-colors">
            View Latest Election →
          </Link>
          <button
            type='button'
            onClick={() => electionsRef.current?.scrollIntoView({ behavior: 'smooth' })}
            className="cursor-pointer inline-flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-7 py-3 rounded-sm tracking-wide hover:border-white/50 transition-colors"
          >
            Browse All Elections
          </button>
        </div>
      </section>

      <hr className="border-white/5" />

      <div className="py-20 grid grid-cols-1 md:grid-cols-3 gap-px">
        {[
          { num: '01', title: 'Election Results', desc: 'Browse detailed results for any presidential election from 1789 to 2024. View electoral vote breakdowns by state on an interactive map.' },
          { num: '02', title: 'Side-by-Side Comparison', desc: 'Select any two elections and compare them directly. See how states shifted, which candidates dominated, and how the electoral map changed.' },
          { num: '03', title: 'Historical Depth', desc: 'From George Washington\'s unanimous victories to modern swing-state battles - every election, every state, every electoral vote.' },
        ].map((f) => (
          <div key={f.num} className="p-10 bg-white/2 border border-white/5 hover:bg-white/4 transition-colors">
            <div className="font-playfair text-5xl font-bold text-accent/25 mb-4">{f.num}</div>
            <div className="text-sm font-medium mb-3">{f.title}</div>
            <div className="text-sm text-muted leading-relaxed font-light">{f.desc}</div>
          </div>
        ))}
      </div>

      <hr className="border-white/5" />

      {/* All Elections */}
      <section ref={electionsRef} className="py-20">
        <div className="text-[0.65rem] tracking-[0.18em] uppercase text-muted mb-3">Browse Elections</div>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12">All Presidential Elections</h2>
        <div className="flex flex-col gap-8">
          {DECADE_GROUPS.map(group => (
            <div key={group.label}>
              <div className="text-[0.65rem] tracking-[0.15em] uppercase text-muted/60 mb-3">{group.label}</div>
              <div className="flex flex-wrap gap-2">
                {group.years.map(y => (
                  <Link
                    key={y}
                    to="/election/$year"
                    params={{ year: String(y) }}
                    className="text-sm text-muted border border-white/8 px-3 py-1.5 rounded-sm hover:text-white hover:border-white/25 transition-colors"
                  >
                    {y}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-white/5" />

      {/* Compare */}
      <section className="py-20">
        <div className="text-[0.65rem] tracking-[0.18em] uppercase text-muted mb-3">Compare Elections</div>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">Side-by-Side Comparison</h2>
        <div className="flex items-center gap-4 flex-wrap">
          <select
            value={compareYear1}
            onChange={e => setCompareYear1(e.target.value)}
            style={{ backgroundColor: '#0a0a0f', color: '#8a8780' }}
            className="cursor-pointer border border-white/10 text-sm px-4 py-3 rounded-sm min-w-[140px]"
          >
            <option value="">Select year</option>
            {years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <span className="text-muted/50 text-xs tracking-widest">VS</span>
          <select
            value={compareYear2}
            onChange={e => setCompareYear2(e.target.value)}
            style={{ backgroundColor: '#0a0a0f', color: '#8a8780' }}
            className="cursor-pointer border border-white/10 text-sm px-4 py-3 rounded-sm min-w-[140px]"
          >
            <option value="">Select year</option>
            {years.filter(y => y !== parseInt(compareYear1)).map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <button
            type='button'
            disabled={!compareYear1 || !compareYear2}
            onClick={() => navigate({ to: '/compare/$year1/$year2', params: { year1: compareYear1, year2: compareYear2 } })}
            className="cursor-pointer bg-accent text-white text-sm font-medium px-7 py-3 rounded-sm hover:bg-accent-hover transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Compare →
          </button>
        </div>
      </section>

      <hr className="border-white/5" />

      <section className="py-20">
        <div className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-muted mb-3">Explainer</div>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12">
          How the Electoral College Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: 'Electors, not popular vote', text: 'Americans don\'t directly elect the president. Each state appoints electors who cast the official votes. The number of electors per state equals its congressional representation.' },
            { title: '270 to win', text: 'There are 538 total electoral votes. A candidate must win an absolute majority - at least 270 - to become president. If no candidate reaches 270, the House of Representatives decides.' },
            { title: 'Winner takes all', text: 'In 48 states, the candidate who wins the popular vote receives all of that state\'s electoral votes. Maine and Nebraska are exceptions - they can split their electors by congressional district.' },
            { title: 'Why it matters', text: 'The Electoral College means a candidate can win the presidency while losing the national popular vote - as happened in 1824, 1876, 1888, 2000, and 2016.' },
          ].map((item) => (
            <div key={item.title} className="pl-5 border-l-2 border-accent/40 bg-accent/3 p-5">
              <div className="text-[0.75rem] font-medium tracking-widest uppercase text-accent mb-2">{item.title}</div>
              <div className="text-sm text-muted leading-relaxed font-light">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
