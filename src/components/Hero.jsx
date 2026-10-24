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
                Hi, Hello! I'm
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

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-indigo-500 to-cyan-500 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:shadow-indigo-500/40"
                >
                  Explore My Projects
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