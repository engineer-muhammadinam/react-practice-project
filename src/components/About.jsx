import { about } from '../data'
import Reveal from './Reveal'
import SectionHeading, { SubHeading } from './SectionHeading'

const card =
  'rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/60'

const hoverCard =
  'transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="About" title={about.title} subtitle={about.subtitle} />

        <Reveal>
          <div
            className={`${card} space-y-5 border-l-4 border-l-indigo-500 p-6 text-base leading-relaxed text-slate-600 sm:p-10 dark:text-slate-400`}
          >
            {about.intro.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-lg font-medium text-slate-800 dark:text-slate-100'
                    : ''
                }
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <SubHeading>What I Do</SubHeading>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {about.whatIDo.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="h-full">
              <div className={`${card} ${hoverCard} h-full p-6`}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-cyan-500 text-lg font-bold text-white">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <SubHeading>My Mission</SubHeading>
        <Reveal>
          <div className="space-y-4 rounded-2xl border border-indigo-500/30 bg-linear-to-br from-indigo-500/10 to-cyan-500/10 p-6 leading-relaxed text-slate-700 sm:p-10 dark:text-slate-300">
            {about.mission.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div className={`${card} flex flex-col items-center justify-between gap-5 p-6 text-center sm:flex-row sm:p-8 sm:text-left`}>
            <p className="text-xl font-semibold text-slate-900 dark:text-white">
              {about.closing}
            </p>
            <a
              href="#contact"
              className="rounded-lg bg-linear-to-r from-indigo-500 to-cyan-500 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}