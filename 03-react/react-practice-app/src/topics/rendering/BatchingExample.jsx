import { useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

function BatchingExample() {
  const [count, setCount] = useState(0);
  function addIncorrectly() { setCount(count + 1); setCount(count + 1); setCount(count + 1); }
  function addCorrectly() { setCount(value => value + 1); setCount(value => value + 1); setCount(value => value + 1); }
  return <TopicCard title="State Queue and Batching" what="React queues state updates and can batch them into one render." why="Functional updates correctly compose multiple updates based on previous state." interview="Repeated setCount(count + 1) uses the same render snapshot. Functional updaters receive queued prior values, so three updates add three."><p className="text-2xl font-bold">{count}</p><div className="mt-3 flex flex-wrap gap-2"><button onClick={addIncorrectly} className="rounded border border-slate-700 px-4 py-2">Value form ×3</button><button onClick={addCorrectly} className="rounded bg-cyan-400 px-4 py-2 font-semibold text-slate-950">Updater form ×3</button></div></TopicCard>;
}
export default BatchingExample;

