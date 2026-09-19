import { useState } from "react";
import TopicCard from "./TopicCard.jsx";

function EventsExample() {
  const [message, setMessage] = useState("No event yet");

  function handleClick(event) {
    setMessage(`Clicked ${event.currentTarget.textContent}`);
  }

  return (
    <TopicCard title="Events" what="React handlers respond to browser interactions." why="They connect user actions to state changes and application logic." interview="Pass a function to an event prop such as onClick. Do not call it during rendering unless returning another handler. React supplies a normalized event object.">
      <button onClick={handleClick} className="rounded-lg bg-violet-400 px-4 py-2 font-semibold text-slate-950">Save</button>
      <p className="mt-3 text-slate-400">{message}</p>
    </TopicCard>
  );
}

export default EventsExample;

