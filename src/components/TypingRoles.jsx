import { useState, useEffect } from 'react'

export default function TypingRoles({
  roles,
  typeSpeed = 70,
  deleteSpeed = 40,
  pause = 1600,
}) {
  const [index, setIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reduced) return
    const current = roles[index]
    let delay = deleting ? deleteSpeed : typeSpeed
    if (!deleting && count === current.length) delay = pause
    if (deleting && count === 0) delay = 400

    const timer = setTimeout(() => {
      if (!deleting && count === current.length) {
        setDeleting(true)
      } else if (deleting && count === 0) {
        setDeleting(false)
        setIndex((index + 1) % roles.length)
      } else {
        setCount(count + (deleting ? -1 : 1))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [count, deleting, index, reduced, roles, typeSpeed, deleteSpeed, pause])

  const text = reduced ? roles[0] : roles[index].slice(0, count)

  return (
    <span className="inline-flex min-h-[1.6em] items-center">
      <span className="sr-only">{roles.join(', ')}</span>
      <span aria-hidden="true">{text}</span>
      <span
        aria-hidden="true"
        className="animate-blink ml-1 inline-block h-[1.1em] w-[3px] bg-cyan-400"
      />
    </span>
  )
}