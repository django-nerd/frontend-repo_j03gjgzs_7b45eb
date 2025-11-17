import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Cases from './components/Cases'
import Booking from './components/Booking'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Cases />
        <Booking />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} clean efficiency — Future-Ready Enterprise</p>
          <div className="text-xs text-slate-500">Built for speed • Optimized for SEO • Mobile-first</div>
        </div>
      </footer>
    </div>
  )
}

export default App
