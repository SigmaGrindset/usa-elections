import { Link } from '@tanstack/react-router'

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-6 border-b border-white/5">
      <Link to="/" className="font-playfair text-lg tracking-wide text-text">
        USA <span className="text-accent">Elections</span>
      </Link>
      <div className="hidden md:flex gap-8">
        <Link to="/election/$year" params={{ year: '2024' }} className="text-white/50 text-sm font-medium tracking-wide hover:text-white transition-colors">Results</Link>
        {/* <Link to="/compare" className="text-white/50 text-sm font-medium tracking-wide hover:text-white transition-colors">Compare</Link> */}
      </div>
    </nav>
  )
}
