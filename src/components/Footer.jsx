export default function Footer() {
  return (
    <footer className="relative border-t border-slate-700/40 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-fuchsia-500 shadow-[0_0_14px_rgba(34,211,238,0.5)]" />
          <span className="text-slate-400 text-sm">clean efficiency — Future-Ready Enterprise</span>
        </div>
        <div className="text-slate-500 text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  )
}
