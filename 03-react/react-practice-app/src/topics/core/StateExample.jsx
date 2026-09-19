import { useState } from "react";
import TopicCard from "./TopicCard.jsx";

function StateExample() {
  const [count, setCount] = useState(0);

  return (
    <TopicCard title="State" what="Component memory that can change between renders." why="State lets the UI respond to user actions and changing data." interview="Calling a state setter schedules a render. When the next value depends on the previous value, I use the functional updater form.">
      <p className="text-2xl font-bold">{count}</p>
      <div className="mt-3 flex gap-2">
        <button onClick={() => setCount(previous => previous + 1)} className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950">Increase</button>
        <button onClick={() => setCount(0)} className="rounded-lg border border-slate-700 px-4 py-2">Reset</button>
      </div>
    </TopicCard>
  );
}

export default StateExample;

