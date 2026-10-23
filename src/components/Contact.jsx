import { contact } from '../data'

export default function Contact() {
  const channels = [
    {
      icon: '📧',
      name: 'Email',
      text: 'For inquiries, opportunities, and collaborations.',
      label: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: '💼',
      name: 'LinkedIn',
      text: "Let's build professional connections and share ideas.",
      label: 'Connect on LinkedIn',
      href: contact.linkedin,
    },
    {
      icon: '💻',
      name: 'GitHub',
      text: 'Explore my projects, code, and AI experiments.',
      label: 'View my GitHub',
      href: contact.github,
    },
  ]

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
          {contact.title}
        </h2>
        <p className="mt-2 text-lg font-medium text-indigo-500">
          {contact.subtitle}
        </p>
        <div className="mx-auto mt-8 max-w-2xl space-y-4 text-slate-600 dark:text-slate-400">
          {contact.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {channels.map((c) => (
          <a
            key={c.name}
            href={c.href}
            target={c.name === 'Email' ? undefined : '_blank'}
            rel="noreferrer"
            className="rounded-xl border border-slate-200 p-6 text-center transition hover:-translate-y-1 hover:border-indigo-400 dark:border-slate-800"
          >
            <div className="text-3xl">{c.icon}</div>
            <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">
              {c.name}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {c.text}
            </p>
            <p className="mt-4 break-all text-sm font-medium text-indigo-500">
              {c.label}
            </p>
          </a>
        ))}
      </div>

      <p className="mt-12 text-center text-lg font-semibold text-slate-900 dark:text-white">
        {contact.closing}
      </p>
    </section>
  )
}