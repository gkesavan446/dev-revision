function SectionPlaceholder({ title, description }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Topic Section</p>
      <h2 className="mt-3 text-3xl font-bold">{title}</h2>
      <p className="mt-4 max-w-2xl leading-7 text-slate-400">{description}</p>
      <div className="mt-8 rounded-xl border border-dashed border-slate-700 p-5 text-sm text-slate-400">Topic components will be added here in the next stage.</div>
    </section>
  );
}

export default SectionPlaceholder;

