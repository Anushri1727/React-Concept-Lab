import { Menu } from "lucide-react"

function Header({ sidebarOpen, setSidebarOpen, viewMode, setViewMode }) {
  return (
    <header className="h-[72px] border-b border-indigo-100 bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-100 px-4 shadow-sm sm:px-6">
      <div className="flex h-full items-center justify-between">

        <div className="flex items-center gap-3">

          {/* Mobile Menu */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-lg p-2 text-indigo-700 transition hover:bg-white/60 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={2} />
          </button>

          <div 
            className="cursor-pointer hover:opacity-80 transition-opacity" 
            onClick={() => setViewMode('concepts')}
          >
            <h1 className="text-lg font-bold text-indigo-900 sm:text-xl">
              React Concept Lab
            </h1>

            <p className="hidden text-sm text-indigo-600 sm:block">
              Learn • Practice • Explain • Master
            </p>
          </div>

        </div>

        <button 
          onClick={() => setViewMode(viewMode === 'concepts' ? 'interview' : 'concepts')}
          className="hidden rounded-full border border-indigo-200 bg-white/60 px-4 py-2 text-sm font-bold text-indigo-700 shadow-sm transition hover:bg-indigo-50 hover:text-indigo-900 sm:block"
        >
          {viewMode === 'concepts' ? 'React Interview Prep' : 'Back to Concept Lab'}
        </button>

      </div>
    </header>
  )
}

export default Header