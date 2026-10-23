import { skills } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-24 dark:bg-slate-900/50">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {skills.title}
        </h2>
        <p className="mt-2 text-lg font-medium text-indigo-500">
          {skills.subtitle}
        </p>

        <div className="mt-8 space-y-4 text-slate-600 dark:text-slate-400">
          {skills.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <h3 className="mt-14 mb-6 text-2xl font-semibold text-slate-900 dark:text-white">
          {skills.expertiseTitle}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.items.map((s) => (
            <div
              key={s.name}
              className="rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-indigo-400 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="text-3xl">{s.icon}</div>
              <h4 className="mt-3 mb-2 font-semibold text-slate-900 dark:text-white">
                {s.name}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        <h3 className="mt-14 mb-4 text-2xl font-semibold text-slate-900 dark:text-white">
          {skills.philosophyTitle}
        </h3>
        <p className="text-slate-600 dark:text-slate-400">{skills.philosophy}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.motto.map((word) => (
            <span
              key={word}
              className="rounded-full border border-indigo-500/40 bg-indigo-500/10 px-5 py-2 font-semibold text-indigo-500"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}