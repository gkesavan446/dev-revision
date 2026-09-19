import { useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

const initial = [{ id: 1, name: "React" }, { id: 2, name: "Node" }, { id: 3, name: "MongoDB" }];

function KeysReconciliationExample() {
  const [items, setItems] = useState(initial);
  return <TopicCard title="Reconciliation and Keys" what="React compares previous and next element trees to decide which DOM updates are needed." why="Keys give list items stable identity across insertions, removals and reordering." interview="A changed element type usually replaces that subtree. Stable unique keys preserve the correct component identity; indexes are risky for dynamic lists."><button onClick={() => setItems(current => [...current].reverse())} className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950">Reverse order</button><ul className="mt-3 space-y-2">{items.map(item => <li key={item.id} className="rounded bg-slate-900 px-3 py-2">{item.id}: {item.name}</li>)}</ul></TopicCard>;
}
export default KeysReconciliationExample;

