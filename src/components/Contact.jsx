import { contact } from '../data'

export default function Contact() {
  const btn =
    'rounded-lg border border-slate-300 px-6 py-3 font-medium text-slate-700 hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-200'

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 text-center">
      <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
        Get In Touch
      </h2>
      <p className="mx-auto max-w-lg text-slate-600 dark:text-slate-400">
        Whether it's an AI project, a collaboration, or an opportunity, feel free
        to reach out.
      </p>
      <a
        href={`mailto:${contact.email}`}
        className="mt-8 inline-block rounded-lg bg-indigo-500 px-8 py-3 font-medium text-white hover:bg-indigo-600"
      >
        {contact.email}
      </a>
      <div className="mt-6 flex justify-center gap-4">
        <a href={contact.github} target="_blank" rel="noreferrer" className={btn}>
          GitHub
        </a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer" className={btn}>
          LinkedIn
        </a>
      </div>
    </section>
  )
}