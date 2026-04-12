export default function Nav() {
  return (
    <nav className="relative w-full max-w-4xl mx-auto py-3 px-6 mt-4 bg-white/10 backdrop-blur-md border border-tertiary/10 rounded-full flex items-center shadow-xl">
      <div className="text-2xl font-[var(--font-heading)] text-primary">BookShelf</div>

      <div className="ml-auto flex items-center space-x-4">
        <div className="hidden sm:flex items-center bg-white/8 backdrop-blur-sm border border-tertiary/10 rounded-full px-2 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary/80 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" />
            <circle cx="11" cy="11" r="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input
            placeholder="Search books..."
            className="bg-transparent placeholder-primary/70 text-primary text-sm focus:outline-none w-40 focus:w-56 transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="flex items-center space-x-6 text-primary">
          <a href="/home" className="transition transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-1 hover:text-[var(--color-tertiary)]">Home</a>
          <a href="/library" className="transition transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-1 hover:text-[var(--color-tertiary)]">Sign In</a>
          <a href="/about" className="transition transform duration-200 ease-in-out hover:scale-105 hover:-translate-y-1 hover:text-[var(--color-tertiary)]">My Library</a>
        </div>
      </div>
    </nav>
  );
}