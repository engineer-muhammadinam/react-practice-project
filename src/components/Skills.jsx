import { useState } from 'react'
import { skills } from '../data'
import Reveal from './Reveal'
import SectionHeading, { SubHeading } from './SectionHeading'

const card =
  'rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/60'

const logos = {
  'Python Development': [{ slug: 'python', color: '3776AB' }],
  'Data Analytics': [{ slug: 'pandas', color: '150458' }],
  'Machine Learning': [{ slug: 'scikitlearn', color: 'F7931E' }],
  'Deep Learning': [{ slug: 'tensorflow', color: 'FF6F00' }],
  'AI Automation with n8n': [{ slug: 'n8n', color: 'EA4B71' }],
  'Git & GitHub': [
    { slug: 'git', color: 'F05032' },
    { slug: 'github', color: '181717' },
  ],
  'Web Technologies': [
    { slug: 'html5', color: 'E34F26' },
    { slug: 'react', color: '61DAFB' },
    { slug: 'tailwindcss', color: '06B6D4' },
  ],
}

function RobotIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="8" width="16" height="11" rx="3" />
      <path d="M12 8V4M9.5 4h5" />
      <circle cx="9" cy="13.5" r="1.2" fill="currentColor" />
      <circle cx="15" cy="13.5" r="1.2" fill="currentColor" />
      <path d="M2 13v2M22 13v2M9.5 17h5" />
    </svg>
  )
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
    </svg>
  )
}

const customIcons = {
  'AI Agents & Agentic AI': <RobotIcon />,
  'Prompt Engineering': <SparkleIcon />,
}

function Logo({ slug, color, size }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color}`}
      alt=""
      loading="lazy"
      className={size}
      onError={() => setFailed(true)}
    />
  )
}

function SkillIcon({ name, emoji }) {
  const group = logos[name]
  const many = group && group.length > 1

  return (
    <div className="mb-4 flex h-14 min-w-14 w-fit items-center justify-center gap-2 rounded-xl bg-white px-3 ring-1 ring-slate-200 dark:ring-slate-700">
      {group ? (
        group.map((l) => (
          <Logo
            key={l.slug}
            slug={l.slug}
            color={l.color}
            size={many ? 'h-6 w-6' : 'h-8 w-8'}
          />
        ))
      ) : (
        customIcons[name] || <span className="text-2xl">{emoji}</span>
      )}
    </div>
  )
}

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
                <SkillIcon name={s.name} emoji={s.icon} />
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