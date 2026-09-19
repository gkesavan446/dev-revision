function TopicCard({ title, what, why, interview, children }) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-300 md:grid-cols-2">
        <p><strong className="text-cyan-400">What:</strong> {what}</p>
        <p><strong className="text-cyan-400">Why:</strong> {why}</p>
      </div>
      <div className="mt-5 rounded-xl bg-slate-950 p-4">{children}</div>
      <p className="mt-4 text-sm leading-6 text-slate-400"><strong className="text-slate-200">Interview:</strong> {interview}</p>
    </article>
  );
}

export default TopicCard;

