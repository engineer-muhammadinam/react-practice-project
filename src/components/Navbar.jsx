import { profile } from '../data'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ dark, toggleTheme }) {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold text-slate-900 dark:text-white">
          {profile.name}
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm text-slate-600 sm:flex dark:text-slate-300">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-indigo-500">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg border border-slate-300 px-3 py-1 text-sm text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </nav>
    </header>
  )
}