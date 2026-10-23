import { useState } from 'react'
import { contact } from '../data'

function MailIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function CopyIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" />
    </svg>
  )
}

function CheckIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12 5 5L20 7" />
    </svg>
  )
}

function SendIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

const emptyForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle')
  const [errorText, setErrorText] = useState('')

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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (form.botcheck) return

    setStatus('sending')
    setErrorText('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: contact.web3formsKey,
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          from_name: 'Portfolio Website',
        }),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm(emptyForm)
      } else {
        setStatus('error')
        setErrorText(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorText('Network error. Please check your connection and try again.')
    }
  }

  const cardClass =
    'rounded-xl border border-slate-200 p-6 text-center transition hover:-translate-y-1 hover:border-indigo-400 dark:border-slate-800'

  const iconBox =
    'mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/10 text-3xl text-indigo-500'

  const inputClass =
    'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-500'

  const labelClass =
    'mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300'

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
              href="#contact-form"
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

      <form
        id="contact-form"
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-2xl scroll-mt-24 rounded-2xl border border-slate-200 p-6 sm:p-8 dark:border-slate-800"
      >
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
          Send Me a Message
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Fill in the form below and your message will land straight in my inbox.
        </p>

        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          onChange={handleChange}
        />

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="subject" className={labelClass}>
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={form.subject}
            onChange={handleChange}
            placeholder="What is this about?"
            className={inputClass}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className={`${inputClass} resize-y`}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-indigo-500 to-cyan-500 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          <SendIcon />
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        <div aria-live="polite" className="mt-4 text-center text-sm">
          {status === 'success' && (
            <p className="font-medium text-emerald-500">
              Thank you! Your message has been sent successfully.
            </p>
          )}
          {status === 'error' && (
            <p className="font-medium text-red-500">{errorText}</p>
          )}
        </div>
      </form>

      <p className="mt-12 text-center text-lg font-semibold text-slate-900 dark:text-white">
        {contact.closing}
      </p>
    </section>
  )
}