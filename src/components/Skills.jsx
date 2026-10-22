import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-24 dark:bg-slate-900/50">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-10 text-3xl font-bold text-slate-900 dark:text-white">
          Skills
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div
              key={s.name}
              className="rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-400 dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                {s.name}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}