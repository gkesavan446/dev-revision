import { Link } from "react-router";

const sections = [
  ["Core React", "Components, JSX, props, state and events", "/core"],
  ["Hooks", "Built-in hooks and custom hooks", "/hooks"],
  ["Forms", "Inputs, validation and submission", "/forms"],
  ["Rendering", "Lifecycle, reconciliation and keys", "/rendering"],
  ["Patterns", "Composition and state sharing", "/patterns"],
  ["Performance", "Memoization and lazy loading", "/performance"],
  ["Practice", "Small runnable React problems", "/practice"]
];

function Dashboard() {
  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">React Revision</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Understand it. Run it. Explain it.</h2>
      <p className="mt-4 max-w-2xl text-slate-400">Each section will contain a focused example, explanation, interview answer and practice task.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {sections.map(([title, description, path]) => (
          <Link key={path} to={path} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 transition hover:-translate-y-1 hover:border-cyan-500/60">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Dashboard;

