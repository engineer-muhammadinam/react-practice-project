import { useState } from 'react'
import { contact } from '../data'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function Icon({ children, className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

const MailIcon = (p) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Icon>
)
const CopyIcon = (p) => (
  <Icon {...p}>
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15V6a2 2 0 0 1 2-2h9" />
  </Icon>
)
const CheckIcon = (p) => (
  <Icon {...p}>
    <path d="m5 12 5 5L20 7" />
  </Icon>
)
const SendIcon = (p) => (
  <Icon {...p}>
    <path d="m22 2-7 20-4-9-9-4 20-7Z" />
    <path d="M22 2 11 13" />
  </Icon>
)
const ArrowIcon = (p) => (
  <Icon {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Icon>
)

function GithubIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  )
}

function LinkedinIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  )
}

const emptyForm = { name: '', email: '', subject: '', message: '' }

const card =
  'rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/60'

const hoverCard =
  'transition duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10'

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder-slate-500'

const labelClass =
  'mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300'

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

    const honeypot = e.target.elements.botcheck?.value
    if (honeypot) return

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

  const channels = [
    {
      icon: <LinkedinIcon />,
      name: 'LinkedIn',
      text: "Let's build professional connections and share ideas.",
      href: contact.linkedin,
    },
    {
      icon: <GithubIcon />,
      name: 'GitHub',
      text: 'Explore my projects, code, and AI experiments.',
      href: contact.github,
    },
  ]

  return (
    <section id="contact" className="bg-slate-50 py-24 dark:bg-slate-900/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Contact"
          title={contact.title}
          subtitle={contact.subtitle}
        />

        <Reveal>
          <div
            className={`${card} space-y-5 border-l-4 border-l-indigo-500 p-6 leading-relaxed text-slate-600 sm:p-10 dark:text-slate-400`}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-500 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to opportunities &amp; collaborations
            </span>

            {contact.paragraphs.map((p, i) => (
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

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <Reveal>
              <div className={`${card} ${hoverCard} p-6`}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-cyan-500 text-white">
                    <MailIcon className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Email
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      For inquiries, opportunities, and collaborations.
                    </p>
                    <p className="mt-3 break-all rounded-lg bg-indigo-500/10 px-3 py-2 text-sm font-medium text-indigo-500">
                      {contact.email}
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex gap-2">
                  <a
                    href="#contact-form"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-600"
                  >
                    <MailIcon className="h-4 w-4" />
                    Send Email
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:text-slate-200"
                  >
                    {copied ? (
                      <CheckIcon className="h-4 w-4" />
                    ) : (
                      <CopyIcon className="h-4 w-4" />
                    )}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
            </Reveal>

            {channels.map((c, i) => (
              <Reveal key={c.name} delay={(i + 1) * 90}>
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${card} ${hoverCard} group flex items-start gap-4 p-6`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                    {c.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      {c.text}
                    </p>
                  </div>
                  <span className="text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-500">
                    <ArrowIcon />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal className="lg:col-span-3" delay={120}>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className={`${card} scroll-mt-24 border-t-4 border-t-cyan-400 p-6 sm:p-8`}
            >
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Send Me a Message
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Fill in the form below and your message will land straight in my
                inbox.
              </p>

              <input
                type="text"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
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
                  <p className="rounded-lg bg-emerald-500/10 px-4 py-3 font-medium text-emerald-500">
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
                {status === 'error' && (
                  <p className="rounded-lg bg-red-500/10 px-4 py-3 font-medium text-red-500">
                    {errorText}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-indigo-500/30 bg-linear-to-br from-indigo-500/10 to-cyan-500/10 p-6 text-center sm:flex-row sm:p-8 sm:text-left">
            <p className="text-xl font-semibold text-slate-900 dark:text-white">
              {contact.closing}
            </p>
            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
            >
              Back to Top
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}