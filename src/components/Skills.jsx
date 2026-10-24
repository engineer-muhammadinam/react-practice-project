import { skills } from '../data'
import Reveal from './Reveal'
import SectionHeading, { SubHeading } from './SectionHeading'

const card =
  'rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/60'

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-24 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Skills"
          title={skills.title}
          subtitle={skills.subtitle}
        />

        <Reveal>
          <div
            className={`${card} space-y-4 border-l-4 border-l-cyan-400 p-6 leading-relaxed text-slate-600 sm:p-10 dark:text-slate-400`}
          >
            {skills.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <SubHeading>{skills.expertiseTitle}</SubHeading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.items.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 90} className="h-full">
              <div
                className={`${card} h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10`}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-500/10 text-3xl">
                  {s.icon}
                </div>
                <h4 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {s.name}
                </h4>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <SubHeading>{skills.philosophyTitle}</SubHeading>
        <Reveal>
          <div className="rounded-2xl border border-indigo-500/30 bg-linear-to-br from-indigo-500/10 to-cyan-500/10 p-6 text-center sm:p-10">
            <p className="mx-auto max-w-3xl leading-relaxed text-slate-700 dark:text-slate-300">
              {skills.philosophy}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {skills.motto.map((word) => (
                <span
                  key={word}
                  className="rounded-full border border-indigo-500/40 bg-white px-6 py-2 font-semibold text-indigo-500 shadow-sm dark:bg-slate-950"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}