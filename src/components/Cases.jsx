import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Cases() {
  const [cases, setCases] = useState([])

  useEffect(() => {
    fetch(`${API_BASE}/api/cases`).then(r => r.json()).then(setCases).catch(() => {})
  }, [])

  return (
    <section id="cases" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_90%_10%,rgba(168,85,247,0.06),transparent_40%),radial-gradient(800px_circle_at_20%_80%,rgba(34,211,238,0.06),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">Selected cases</h2>
          <p className="text-sm text-slate-400 max-w-md">KPI-driven outcomes, shipped to production. No hype, just measurable impact.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <article key={c.id} className="rounded-xl border border-slate-700/50 bg-slate-900/40 p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wide text-slate-400">{c.client}</span>
                <div className="flex gap-2">
                  {c.kpis.map((k, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-slate-800/80 text-cyan-200 ring-1 ring-cyan-400/20">{k}</span>
                  ))}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-100">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{c.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
