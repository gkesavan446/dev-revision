import { useState } from "react";
import TopicCard from "../topics/core/TopicCard.jsx";
import useToggle from "../topics/patterns/useToggle.js";

function TemperatureInput({ label, value, onChange }) {
  return <label className="block"><span className="text-sm text-slate-400">{label}</span><input type="number" value={value} onChange={event => onChange(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2" /></label>;
}

function LiftingStateExample() {
  const [celsius, setCelsius] = useState(0);
  const fahrenheit = (Number(celsius) * 9 / 5 + 32).toFixed(1);
  return <TopicCard title="Lifting State" what="Moving shared state to the closest common parent." why="Sibling components receive one source of truth through props." interview="When multiple components need coordinated data, the common parent owns it and passes values and callbacks down."><div className="grid gap-3 sm:grid-cols-2"><TemperatureInput label="Celsius" value={celsius} onChange={setCelsius} /><TemperatureInput label="Fahrenheit (derived)" value={fahrenheit} onChange={value => setCelsius(((Number(value) - 32) * 5 / 9).toFixed(1))} /></div></TopicCard>;
}

function Panel({ title, children, footer }) {
  return <div className="rounded-xl border border-slate-700 p-4"><h4 className="font-semibold">{title}</h4><div className="mt-3 text-slate-300">{children}</div>{footer && <div className="mt-4 border-t border-slate-700 pt-3">{footer}</div>}</div>;
}

function CompositionExample() {
  return <TopicCard title="Composition and children" what="Building flexible components by placing components inside other components." why="It reuses structure without adding many special-purpose props." interview="The children prop represents nested content. Composition is usually clearer than inheritance for sharing React UI behavior."><Panel title="Revision Note" footer={<button className="rounded bg-cyan-400 px-3 py-2 text-slate-950">Mark complete</button>}><p>Explain the concept, run the example, then practice it.</p></Panel></TopicCard>;
}

function StatusBadge({ status }) {
  const styles = { completed: "bg-emerald-400/15 text-emerald-300", revising: "bg-amber-400/15 text-amber-300", weak: "bg-rose-400/15 text-rose-300" };
  return <span className={`rounded-full px-3 py-1 text-sm ${styles[status] ?? "bg-slate-700"}`}>{status}</span>;
}

function ReusableComponentExample() {
  return <TopicCard title="Reusable Components" what="A focused component configured through clear props." why="It reduces duplication while preserving readable usage." interview="I extract a component when UI or behavior is genuinely repeated. I avoid overly generic components with too many unrelated props."><div className="flex flex-wrap gap-2"><StatusBadge status="completed" /><StatusBadge status="revising" /><StatusBadge status="weak" /></div></TopicCard>;
}

function CustomHookExample() {
  const { value: visible, toggle, reset } = useToggle(false);
  return <TopicCard title="Custom Hooks" what="Functions beginning with use that combine reusable stateful logic." why="They share logic between components without sharing component state itself." interview="Each custom-hook call receives independent state. Custom hooks may call other hooks and must follow the Rules of Hooks."><button onClick={toggle} className="rounded bg-cyan-400 px-4 py-2 font-semibold text-slate-950">Toggle details</button><button onClick={reset} className="ml-2 rounded border border-slate-700 px-4 py-2">Reset</button>{visible && <p className="mt-3 text-slate-300">Custom-hook state is working.</p>}</TopicCard>;
}

function PatternsPage() {
  return <section><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Module 5</p><h2 className="mt-3 text-3xl font-bold">React Patterns</h2><p className="mt-3 text-slate-400">Patterns organize ownership and reuse; apply them only when they make the code clearer.</p><div className="mt-8 space-y-5"><LiftingStateExample /><CompositionExample /><ReusableComponentExample /><CustomHookExample /></div></section>;
}

export default PatternsPage;

