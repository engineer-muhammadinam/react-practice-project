import { profile } from '../data'

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6 pt-20"
    >
      <div className="animate-fade-up flex max-w-5xl flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
        <div className="text-center md:text-left">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-indigo-500">
            Hello, I'm
          </p>
          <h1 className="text-5xl font-bold text-slate-900 sm:text-6xl dark:text-white">
            {profile.name}
          </h1>
          <h2 className="mt-4 bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
            {profile.role}
          </h2>
          <p className="mt-6 max-w-xl text-slate-600 dark:text-slate-400">
            {profile.tagline}
          </p>
          <div className="mt-8 flex justify-center gap-4 md:justify-start">
            <a
              href="#contact"
              className="rounded-lg bg-indigo-500 px-6 py-3 font-medium text-white hover:bg-indigo-600"
            >
              Contact Me
            </a>
            <a
              href="#skills"
              className="rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              My Skills
            </a>
          </div>
        </div>

        <img
          src={profile.photo}
          alt={profile.name}
          className="h-56 w-56 rounded-full border-4 border-indigo-500 object-cover shadow-xl sm:h-72 sm:w-72"
        />
      </div>
    </section>
  )
}