import { useRef, useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

function Child({ label }) {
  const renders = useRef(0);
  renders.current++;
  return <p className="mt-3 text-slate-400">Child: {label} — renders: {renders.current}</p>;
}

function RenderTriggersExample() {
  const [count, setCount] = useState(0);
  return <TopicCard title="Render Triggers" what="A component renders initially and when its state, consumed context, or parent rendering causes work." why="Understanding render triggers helps diagnose unnecessary work and stale UI assumptions." interview="Rendering calls component functions to calculate UI. It does not automatically mean the browser DOM changes; React commits only necessary changes."><p>Parent count: {count}</p><button onClick={() => setCount(value => value + 1)} className="mt-3 rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950">Render parent</button><Child label="same prop" /></TopicCard>;
}
export default RenderTriggersExample;

