import { useState } from "react";
import TopicCard from "./TopicCard.jsx";

function ConditionalExample() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <TopicCard title="Conditional Rendering" what="Displaying different UI based on a condition." why="Apps need loading, error, authentication, permission, and empty states." interview="Use if statements, ternaries, logical AND, or early returns. I avoid deeply nested ternaries because they reduce readability.">
      <p>{loggedIn ? "Welcome back, Kesavan" : "Please log in"}</p>
      <button onClick={() => setLoggedIn(value => !value)} className="mt-3 rounded-lg border border-slate-700 px-4 py-2">Toggle login</button>
    </TopicCard>
  );
}

export default ConditionalExample;

