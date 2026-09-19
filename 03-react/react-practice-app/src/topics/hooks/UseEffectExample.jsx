import { useEffect, useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

function UseEffectExample() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return undefined;
    const timerId = setInterval(() => setSeconds(value => value + 1), 1000);
    return () => clearInterval(timerId);
  }, [running]);

  return (
    <TopicCard title="useEffect" what="Synchronizes a component with an external system after rendering." why="It handles timers, subscriptions, browser APIs and network synchronization." interview="The dependency array lists reactive values used by the effect. Cleanup runs before re-execution and on unmount. I do not use effects for values that can be calculated during render.">
      <p className="text-2xl font-bold">{seconds}s</p>
      <button onClick={() => setRunning(value => !value)} className="mt-3 rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950">{running ? "Pause" : "Start"}</button>
      <button onClick={() => setSeconds(0)} className="ml-2 rounded-lg border border-slate-700 px-4 py-2">Reset</button>
    </TopicCard>
  );
}
export default UseEffectExample;

