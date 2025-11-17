import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[88vh] pt-24 overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-100"
            >
              Clean AI. Real Efficiency.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-slate-300 text-base sm:text-lg max-w-xl"
            >
              We partner with scale-ups and enterprises to deliver measurable impact with AI — strategy, agents, and platform engineering.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#booking" className="pointer-events-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-slate-900 bg-cyan-300 hover:bg-cyan-200 font-medium shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-colors">Book intro</a>
              <a href="#services" className="pointer-events-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-slate-200/90 ring-1 ring-white/15 hover:bg-white/5 transition-colors">Explore services</a>
            </motion.div>
          </div>

          <div className="lg:col-span-6" />
        </div>
      </div>
    </section>
  )
}
