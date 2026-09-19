function ConceptCard({ number, title, what, why, children }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-start gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-600 font-bold text-white">
          {number}
        </span>
        <div>
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
          <p className="mt-1 text-sm text-slate-600"><strong>What:</strong> {what}</p>
          <p className="mt-1 text-sm text-slate-600"><strong>Why:</strong> {why}</p>
        </div>
      </div>
      {children}
    </section>
  )
}

export default ConceptCard
