import { memo, useCallback, useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

const ActionButton = memo(function ActionButton({ onAction }) {
  return <button onClick={onAction} className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950">Add item</button>;
});

function UseCallbackExample() {
  const [items, setItems] = useState([]);
  const [themeCount, setThemeCount] = useState(0);
  const addItem = useCallback(() => setItems(current => [...current, `Item ${current.length + 1}`]), []);
  return <TopicCard title="useCallback" what="Caches a function reference until dependencies change." why="It can help memoized children avoid renders caused only by a new callback reference." interview="useCallback does not stop function creation or make every component faster. I use it when stable identity has a measurable purpose, often with React.memo or hook dependencies."><ActionButton onAction={addItem} /><button onClick={() => setThemeCount(value => value + 1)} className="ml-2 rounded border border-slate-700 px-3 py-2">Other state {themeCount}</button><p className="mt-3 text-slate-400">{items.join(", ") || "No items"}</p></TopicCard>;
}
export default UseCallbackExample;

