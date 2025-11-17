import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Booking() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', company: '', website: '', services: [], budget: '', timeframe: '', message: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(`${API_BASE}/api/booking`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, services: form.services ? form.services.split(',').map(s=>s.trim()).filter(Boolean) : [] })
      })
      const data = await res.json()
      if (data.ok) setStatus('success')
      else setStatus('error')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="booking" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_90%_10%,rgba(168,85,247,0.08),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-100">Book an intro call</h2>
            <p className="mt-2 text-slate-400 text-sm max-w-md">Tell us about your objectives. We’ll share relevant cases and a practical next step.</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-300/90">
              <li className="flex gap-2"><span className="text-cyan-300">•</span> 30-minute discovery call</li>
              <li className="flex gap-2"><span className="text-cyan-300">•</span> No slides, no fluff — value in the first meeting</li>
              <li className="flex gap-2"><span className="text-cyan-300">•</span> Signed MNDA available on request</li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-slate-700/50 bg-slate-900/40 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input required name="name" value={form.name} onChange={onChange} className="w-full rounded-md bg-slate-950/60 text-slate-100 px-3 py-2 ring-1 ring-white/10 focus:ring-cyan-400/50 outline-none" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input required type="email" name="email" value={form.email} onChange={onChange} className="w-full rounded-md bg-slate-950/60 text-slate-100 px-3 py-2 ring-1 ring-white/10 focus:ring-cyan-400/50 outline-none" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Company</label>
                <input name="company" value={form.company} onChange={onChange} className="w-full rounded-md bg-slate-950/60 text-slate-100 px-3 py-2 ring-1 ring-white/10 focus:ring-cyan-400/50 outline-none" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Website</label>
                <input name="website" value={form.website} onChange={onChange} className="w-full rounded-md bg-slate-950/60 text-slate-100 px-3 py-2 ring-1 ring-white/10 focus:ring-cyan-400/50 outline-none" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300 mb-1">Services of interest (comma separated)</label>
                <input name="services" value={form.services} onChange={onChange} placeholder="Strategy, Agents, Platform" className="w-full rounded-md bg-slate-950/60 text-slate-100 px-3 py-2 ring-1 ring-white/10 focus:ring-cyan-400/50 outline-none" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Budget</label>
                <select name="budget" value={form.budget} onChange={onChange} className="w-full rounded-md bg-slate-950/60 text-slate-100 px-3 py-2 ring-1 ring-white/10 focus:ring-cyan-400/50 outline-none">
                  <option value="">Select</option>
                  <option>Under $50k</option>
                  <option>$50k–$150k</option>
                  <option>$150k–$500k</option>
                  <option>$500k+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Timeframe</label>
                <select name="timeframe" value={form.timeframe} onChange={onChange} className="w-full rounded-md bg-slate-950/60 text-slate-100 px-3 py-2 ring-1 ring-white/10 focus:ring-cyan-400/50 outline-none">
                  <option value="">Select</option>
                  <option>ASAP</option>
                  <option>1-3 months</option>
                  <option>3-6 months</option>
                  <option>6+ months</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-slate-300 mb-1">Context</label>
                <textarea name="message" value={form.message} onChange={onChange} rows="4" className="w-full rounded-md bg-slate-950/60 text-slate-100 px-3 py-2 ring-1 ring-white/10 focus:ring-cyan-400/50 outline-none" />
              </div>
            </div>

            <button disabled={status==='loading'} className="mt-5 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-slate-900 bg-cyan-300 hover:bg-cyan-200 font-medium shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-colors disabled:opacity-60">
              {status==='loading' ? 'Sending…' : 'Request intro call'}
            </button>
            {status==='success' && <p className="mt-3 text-sm text-emerald-400">Thanks — we’ll be in touch shortly.</p>}
            {status==='error' && <p className="mt-3 text-sm text-rose-400">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
