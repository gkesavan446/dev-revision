import { useEffect, useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => { const id = setInterval(() => setSeconds(value => value + 1), 1000); return () => clearInterval(id); }, []);
  return <p>Mounted timer: {seconds}s</p>;
}

function LifecycleExample() {
  const [visible, setVisible] = useState(true);
  return <TopicCard title="Mount, Update and Unmount" what="Mount adds a component, update renders it with new data, and unmount removes it." why="External synchronization must be started and cleaned up at the correct lifecycle points." interview="Function components express lifecycle behavior through rendering and effects. Effect cleanup runs before the effect reruns and when the component unmounts.">{visible && <Timer />}<button onClick={() => setVisible(value => !value)} className="mt-3 rounded-lg border border-slate-700 px-4 py-2">{visible ? "Unmount" : "Mount"} timer</button></TopicCard>;
}
export default LifecycleExample;

