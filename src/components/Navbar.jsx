import { useState } from 'react'
import { profile } from '../data'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ dark, toggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="bg-linear-to-r from-indigo-500 to-cyan-500 bg-clip-text text-lg font-bold text-transparent"
        >
          {profile.name}
        </a>

        <div className="flex items-center gap-3">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-indigo-500/10 hover:text-indigo-500 dark:text-slate-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-200"
          >
            {dark ? 'Light' : 'Dark'}
          </button>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-lg border border-slate-300 p-2 text-slate-700 md:hidden dark:border-slate-700 dark:text-slate-200"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-slate-200 px-6 py-3 md:hidden dark:border-slate-800">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 font-medium text-slate-700 hover:bg-indigo-500/10 hover:text-indigo-500 dark:text-slate-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}