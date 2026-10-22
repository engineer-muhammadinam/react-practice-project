import { about } from '../data'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-10 text-3xl font-bold text-slate-900 dark:text-white">
        About Me
      </h2>
      <div className="space-y-4 text-slate-600 dark:text-slate-400">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {about.highlights.map((h) => (
          <div
            key={h.title}
            className="rounded-xl border border-slate-200 p-6 dark:border-slate-800"
          >
            <h3 className="mb-2 font-semibold text-indigo-500">{h.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{h.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}