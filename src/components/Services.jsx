import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch(`${API_BASE}/api/services`).then(r => r.json()).then(setServices).catch(() => {})
  }, [])

  return (
    <section id="services" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_10%_10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(800px_circle_at_90%_20%,rgba(34,211,238,0.07),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">Services</h2>
          <p className="text-sm text-slate-400 max-w-md">Modular engagements designed for velocity, value and control.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.id} className="group rounded-xl border border-slate-700/50 bg-slate-900/40 p-6 hover:border-cyan-300/50 transition-all">
              <div className="h-1 w-10 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full mb-4 group-hover:w-16 transition-all" />
              <h3 className="text-lg font-semibold text-slate-100">{s.title}</h3>
              <p className="mt-1 text-slate-400 text-sm">{s.subtitle}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300/90">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2"><span className="text-cyan-300">•</span><span>{b}</span></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
