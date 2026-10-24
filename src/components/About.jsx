import { useState } from 'react'
import { about } from '../data'
import Reveal from './Reveal'
import SectionHeading, { SubHeading } from './SectionHeading'

const card =
  'rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/60'

const hoverCard =
  'transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10'

const logos = {
  'Machine Learning & Deep Learning': [
    { slug: 'scikitlearn', color: 'F7931E' },
    { slug: 'tensorflow', color: 'FF6F00' },
  ],
  'Data Analytics': [{ slug: 'pandas', color: '150458' }],
  'AI Automation': [{ slug: 'n8n', color: 'EA4B71' }],
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

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
      <circle cx="9" cy="12" r="1" fill="currentColor" />
      <circle cx="12.5" cy="12" r="1" fill="currentColor" />
      <circle cx="16" cy="12" r="1" fill="currentColor" />
    </svg>
  )
}

const customIcons = {
  'AI Agents & Agentic AI': <RobotIcon />,
  'AI Chatbots': <ChatIcon />,
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

function WhatIDoIcon({ name, index }) {
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
        customIcons[name] || (
          <span className="font-bold text-indigo-500">
            {String(index + 1).padStart(2, '0')}
          </span>
        )
      )}
    </div>
  )
}

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
                <WhatIDoIcon name={item.title} index={i} />
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