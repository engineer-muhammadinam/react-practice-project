export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <span className="inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-500">
        {label}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-linear-to-r from-indigo-500 to-cyan-400" />
      {subtitle && (
        <p className="mt-4 text-lg font-medium text-indigo-500">{subtitle}</p>
      )}
    </div>
  )
}

export function SubHeading({ children }) {
  return (
    <h3 className="mt-16 mb-8 flex items-center gap-4 text-2xl font-semibold text-slate-900 dark:text-white">
      <span className="h-px w-10 bg-linear-to-r from-indigo-500 to-cyan-400" />
      {children}
    </h3>
  )
}