import { useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

function UseStateExample() {
  const [profile, setProfile] = useState({ name: "Kesavan", city: "Chennai" });

  return (
    <TopicCard title="useState" what="Adds local state to a component." why="Changing state schedules a render so the UI reflects new data." interview="State updates may be batched. Use a functional updater when the next value depends on previous state, and replace objects immutably.">
      <p>{profile.name} — {profile.city}</p>
      <button onClick={() => setProfile(current => ({ ...current, city: current.city === "Chennai" ? "Bengaluru" : "Chennai" }))} className="mt-3 rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950">Change city</button>
    </TopicCard>
  );
}
export default UseStateExample;

