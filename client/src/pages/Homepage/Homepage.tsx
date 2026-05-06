import { Link } from '@tanstack/react-router'

export const Homepage = () => {
  return (
    <div className="min-h-screen bg-primary text-text font-dm">

      <section className="max-w-5xl mx-auto px-6 md:px-12 pt-24 pb-20">
        <div className="inline-block text-xs font-medium tracking-[0.15em] uppercase text-accent border border-accent/40 px-3 py-1 rounded-sm mb-8">
          Presidential Elections 1789 – 2024
        </div>
        <h1 className="font-playfair text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6 max-w-3xl">
          235 Years of <em className="text-accent">American</em> Democracy
        </h1>
        <p className="text-white/50 text-lg font-light max-w-lg leading-relaxed mb-12">
          Explore every presidential election in U.S. history. View electoral maps, compare candidates, and track how the nation has voted across centuries.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link to="/election/$year" params={{ year: '2024' }}
            className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-7 py-3 rounded-sm tracking-wide hover:bg-accent-hover transition-colors">
            View Election Results →
          </Link>
          <Link to="/compare"
            className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-7 py-3 rounded-sm tracking-wide hover:border-white/50 transition-colors">
            Compare Two Elections
          </Link>
        </div>
      </section>

      <hr className="max-w-5xl mx-auto border-white/5" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-px">
        {[
          { num: '01', title: 'Election Results', desc: 'Browse detailed results for any presidential election from 1789 to 2024. View electoral vote breakdowns by state on an interactive map.' },
          { num: '02', title: 'Side-by-Side Comparison', desc: 'Select any two elections and compare them directly. See how states shifted, which candidates dominated, and how the electoral map changed.' },
          { num: '03', title: 'Historical Depth', desc: 'From George Washington\'s unanimous victories to modern swing-state battles — every election, every state, every electoral vote.' },
        ].map((f) => (
          <div key={f.num} className="p-10 bg-white/2 border border-white/5 hover:bg-white/4 transition-colors">
            <div className="font-playfair text-5xl font-bold text-accent/25 mb-4">{f.num}</div>
            <div className="text-sm font-medium mb-3">{f.title}</div>
            <div className="text-sm text-white/40 leading-relaxed font-light">{f.desc}</div>
          </div>
        ))}
      </div>

      <hr className="max-w-5xl mx-auto border-white/5" />

      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20">
        <div className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-white/25 mb-3">Explainer</div>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12">
          How the Electoral College Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: 'Electors, not popular vote', text: 'Americans don\'t directly elect the president. Each state appoints electors who cast the official votes. The number of electors per state equals its congressional representation.' },
            { title: '270 to win', text: 'There are 538 total electoral votes. A candidate must win an absolute majority — at least 270 — to become president. If no candidate reaches 270, the House of Representatives decides.' },
            { title: 'Winner takes all', text: 'In 48 states, the candidate who wins the popular vote receives all of that state\'s electoral votes. Maine and Nebraska are exceptions — they can split their electors by congressional district.' },
            { title: 'Why it matters', text: 'The Electoral College means a candidate can win the presidency while losing the national popular vote — as happened in 1824, 1876, 1888, 2000, and 2016.' },
          ].map((item) => (
            <div key={item.title} className="pl-5 border-l-2 border-accent/40 bg-accent/[0.03] p-5">
              <div className="text-[0.75rem] font-medium tracking-widest uppercase text-accent mb-2">{item.title}</div>
              <div className="text-sm text-white/45 leading-relaxed font-light">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

