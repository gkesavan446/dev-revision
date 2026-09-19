import { useRef, useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

function UseRefExample() {
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const [, forceRender] = useState(0);
  renderCount.current++;

  return (
    <TopicCard title="useRef" what="Stores a mutable value across renders without triggering a render." why="It is useful for DOM access, timer ids and previous or imperative values." interview="Changing ref.current does not re-render. Unlike a normal local variable, the ref object survives renders.">
      <input ref={inputRef} placeholder="Focus me" className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2" />
      <div className="mt-3 flex flex-wrap gap-2">
        <button onClick={() => inputRef.current?.focus()} className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950">Focus input</button>
        <button onClick={() => forceRender(value => value + 1)} className="rounded-lg border border-slate-700 px-4 py-2">Render again</button>
      </div>
      <p className="mt-3 text-slate-400">Render count: {renderCount.current}</p>
    </TopicCard>
  );
}
export default UseRefExample;

