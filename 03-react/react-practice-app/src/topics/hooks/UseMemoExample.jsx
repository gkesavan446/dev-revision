import { useMemo, useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

const products = ["Phone", "Laptop", "Watch", "Keyboard", "Mouse"];

function UseMemoExample() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const filteredProducts = useMemo(() => products.filter(product => product.toLowerCase().includes(search.toLowerCase())), [search]);
  return <TopicCard title="useMemo" what="Caches a calculated value between renders until dependencies change." why="It can avoid repeating an expensive calculation or stabilize a derived reference." interview="useMemo is a performance optimization, not a correctness tool. I add it only when recalculation is meaningfully expensive or reference stability matters."><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search" className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2" /><button onClick={() => setCount(value => value + 1)} className="ml-2 rounded border border-slate-700 px-3 py-2">Other state {count}</button><p className="mt-3 text-slate-400">{filteredProducts.join(", ") || "No matches"}</p></TopicCard>;
}
export default UseMemoExample;

