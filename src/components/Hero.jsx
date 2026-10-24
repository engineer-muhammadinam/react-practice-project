import { profile, contact } from '../data'
import TypingRoles from './TypingRoles'
import AnimatedName from './AnimatedName'
import Reveal from './Reveal'

const nodes = [
  [80, 120], [220, 60], [360, 150], [520, 80], [700, 140],
  [140, 300], [300, 260], [450, 320], [620, 260], [740, 380],
  [100, 480], [260, 520], [420, 470], [580, 520], [720, 500],
]

const edges = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 6], [2, 7],
  [3, 8], [4, 8], [5, 6], [6, 7], [7, 8], [8, 9], [5, 10], [6, 11],
  [7, 12], [8, 13], [9, 14], [10, 11], [11, 12], [12, 13], [13, 14],
]

const particles = [
  { left: '8%', top: '20%', delay: '0s', size: 'h-1.5 w-1.5' },
  { left: '18%', top: '70%', delay: '1.2s', size: 'h-1 w-1' },
  { left: '30%', top: '35%', delay: '2.4s', size: 'h-2 w-2' },
  { left: '48%', top: '82%', delay: '0.6s', size: 'h-1 w-1' },
  { left: '62%', top: '15%', delay: '1.8s', size: 'h-1.5 w-1.5' },
  { left: '78%', top: '60%', delay: '3s', size: 'h-2 w-2' },
  { left: '88%', top: '28%', delay: '0.9s', size: 'h-1 w-1' },
  { left: '94%', top: '78%', delay: '2.1s', size: 'h-1.5 w-1.5' },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="animate-float-slow absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="animate-float absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full text-indigo-500 opacity-30 dark:opacity-40"
      >
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a][0]} y1={nodes[a][1]}
            x2={nodes[b][0]} y2={nodes[b][1]}
            stroke="currentColor" strokeWidth="1" opacity="0.5"
          />
        ))}
        {nodes.map(([x, y], i) => (
          <circle
            key={i}
            cx={x} cy={y} r={i % 3 === 0 ? 4 : 3}
            fill="currentColor"
            className={i % 3 === 0 ? 'animate-glow' : ''}
            style={{ transformOrigin: `${x}px ${y}px`, animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>

      {particles.map((p, i) => (
        <span
          key={i}
          className={`animate-float absolute rounded-full bg-cyan-400/60 ${p.size}`}
          style={{ left: p.left, top: p.top, animationDelay: p.delay }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28 pb-24"
    >
      <Background />

      <Reveal className="w-full max-w-6xl">
        <div className="rounded-3xl border border-slate-200 border-t-4 border-t-indigo-500 bg-white/70 p-6 shadow-xl shadow-indigo-500/10 backdrop-blur-md sm:p-10 lg:p-14 dark:border-slate-800 dark:border-t-indigo-500 dark:bg-slate-900/60">
          <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between md:gap-10">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-500 sm:text-base">
                <span className="wave" aria-hidden="true">👋</span>
                Hi, I'm
              </span>

              <h1 className="name-glow mt-5 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                <AnimatedName text={profile.name} />
              </h1>
              <div className="animate-draw-line mx-auto mt-3 h-1 w-24 origin-left rounded-full bg-linear-to-r from-indigo-500 to-cyan-400 md:mx-0" />

              <h2 className="mt-4 text-2xl font-semibold text-slate-800 sm:text-3xl dark:text-slate-100">
                <TypingRoles roles={profile.roles} />
              </h2>

              <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-slate-200 border-l-4 border-l-indigo-500 bg-white/70 p-5 shadow-lg shadow-indigo-500/10 backdrop-blur-md md:mx-0 sm:p-6 dark:border-slate-800 dark:border-l-indigo-500 dark:bg-slate-900/60">
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                  {profile.tagline}
                </p>
              </div>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-indigo-500 to-cyan-500 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:shadow-indigo-500/40"
                >
                  <GithubIcon />
                  Explore My Projects via GitHub
                  <span className="transition group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </a>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 to-indigo-500 px-6 py-3 font-medium text-white shadow-lg shadow-cyan-500/25 transition hover:-translate-y-0.5 hover:shadow-cyan-500/40"
                >
                  <LinkedinIcon />
                  Explore My Projects via LinkedIn
                  <span className="transition group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-200"
                >
                  <MailIcon />
                  Let's Connect
                </a>
              </div>
            </div>

            <div className="relative shrink-0">
              <div className="animate-glow absolute -inset-4 rounded-full bg-linear-to-r from-indigo-500 to-cyan-500 blur-2xl" />
              <img
                src={profile.photo}
                alt={profile.name}
                className="relative h-52 w-52 rounded-full border-4 border-indigo-500/80 object-cover shadow-xl sm:h-64 sm:w-64 lg:h-72 lg:w-72"
              />
            </div>
          </div>
        </div>
      </Reveal>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <span className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-400 pt-2 dark:border-slate-600">
          <span className="animate-scroll-dot h-2 w-1 rounded-full bg-indigo-500" />
        </span>
      </a>
    </section>
  )
}