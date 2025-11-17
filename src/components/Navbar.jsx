import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#cases', label: 'Cases' },
    { href: '#booking', label: 'Booking' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-slate-700/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-fuchsia-500 shadow-[0_0_18px_rgba(34,211,238,0.6)]" />
          <span className="text-slate-100 font-semibold tracking-tight">clean efficiency</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-slate-300/90 hover:text-white transition-colors text-sm">
              {n.label}
            </a>
          ))}
          <a href="#booking" className="ml-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-slate-900 bg-cyan-300 hover:bg-cyan-200 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.35)]">
            Book intro
          </a>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center text-slate-200" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-700/40">
          <div className="px-4 py-3 space-y-1 bg-slate-900/80">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block px-2 py-2 rounded-md text-slate-200 hover:bg-slate-800">
                {n.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setOpen(false)} className="block mt-2 px-3 py-2 rounded-md text-slate-900 bg-cyan-300 font-medium">
              Book intro
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
