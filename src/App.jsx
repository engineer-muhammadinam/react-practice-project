import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { profile, contact } from './data'

export default function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Navbar dark={dark} toggleTheme={() => setDark(!dark)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex gap-5 text-sm font-medium">
            <a href={contact.github} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-indigo-500 dark:text-slate-400">
              GitHub
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-600 hover:text-indigo-500 dark:text-slate-400">
              LinkedIn
            </a>
            <a href="#home" className="text-slate-600 hover:text-indigo-500 dark:text-slate-400">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}