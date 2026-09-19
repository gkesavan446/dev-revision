import { useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

function ControlledInputExample() {
  const [name, setName] = useState("");
  return <TopicCard title="Controlled Input" what="An input whose value comes from React state." why="React becomes the single source of truth for display, validation and submission." interview="A controlled input receives value and onChange. Every edit updates state, and state determines what the input displays."><label className="block text-sm text-slate-400">Name</label><input value={name} onChange={event => setName(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2" placeholder="Enter name" /><p className="mt-3">Preview: {name || "Empty"}</p></TopicCard>;
}
export default ControlledInputExample;

