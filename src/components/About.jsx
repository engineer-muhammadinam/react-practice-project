import { about } from '../data'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
        {about.title}
      </h2>
      <p className="mt-2 text-lg font-medium text-indigo-500">{about.subtitle}</p>

      <div className="mt-8 space-y-4 text-slate-600 dark:text-slate-400">
        {about.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <h3 className="mt-14 mb-6 text-2xl font-semibold text-slate-900 dark:text-white">
        What I Do
      </h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {about.whatIDo.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-indigo-400 dark:border-slate-800"
          >
            <h4 className="mb-2 font-semibold text-indigo-500">{item.title}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <h3 className="mt-14 mb-6 text-2xl font-semibold text-slate-900 dark:text-white">
        My Mission
      </h3>
      <div className="space-y-4 text-slate-600 dark:text-slate-400">
        {about.mission.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start gap-4 rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-lg font-semibold text-slate-900 dark:text-white">
          {about.closing}
        </p>
        <a
          href="#contact"
          className="rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white hover:bg-indigo-600"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}