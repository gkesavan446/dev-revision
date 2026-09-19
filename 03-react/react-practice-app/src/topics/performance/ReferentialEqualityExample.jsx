import { useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

function ReferentialEqualityExample() {
  const [renders, setRenders] = useState(0);
  const first = { page: 1 };
  const second = { page: 1 };
  return <TopicCard title="Referential Equality" what="Objects and functions compare by reference, not by matching contents." why="New references can cause dependencies or memoized props to appear changed." interview="An inline object, array, or function is a new reference each render. I stabilize it only when identity matters; otherwise memoization adds unnecessary complexity."><p>{`{ page: 1 } === { page: 1 }`} → {String(first === second)}</p><button onClick={() => setRenders(value => value + 1)} className="mt-3 rounded border border-slate-700 px-3 py-2">Render again {renders}</button></TopicCard>;
}
export default ReferentialEqualityExample;

