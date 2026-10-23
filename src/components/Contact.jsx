import { useState } from 'react'
import { contact } from '../data'

function MailIcon({ className = 'h-6 w-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function CopyIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" />
    </svg>
  )
}

function CheckIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 5 5L20 7" />
    </svg>
  )
}

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const gmailLink =
    'https://mail.google.com/mail/?view=cm&fs=1' +
    `&to=${encodeURIComponent(contact.email)}` +
    `&su=${encodeURIComponent("Hello Muhammad, let's connect")}`

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
    } catch {
      const input = document.createElement('input')
      input.value = contact.email
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const cardClass =
    'rounded-xl border border-slate-200 p-6 text-center transition hover:-translate-y-1 hover:border-indigo-400 dark:border-slate-800'

  const iconBox =
    'mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/10 text-3xl text-indigo-500'

  const links = [
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
        <div className={cardClass}>
          <div className={iconBox}>
            <MailIcon />
          </div>
          <h3 className="mt-3 font-semibold text-slate-900 dark:text-white">
            Email
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            For inquiries, opportunities, and collaborations.
          </p>
          <p className="mt-4 break-all text-sm font-medium text-indigo-500">
            {contact.email}
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <a
              href={gmailLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-600"
            >
              <MailIcon className="h-4 w-4" />
              Send Email
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-200"
            >
              {copied ? <CheckIcon /> : <CopyIcon />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>

        {links.map((c) => (
          <a
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            className={cardClass}
          >
            <div className={iconBox}>{c.icon}</div>
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