import { memo, useCallback, useMemo, useRef, useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

const products = ["Phone", "Laptop", "Watch", "Keyboard", "Mouse"];

const ProductList = memo(function ProductList({ products, onSelect }) {
  const renders = useRef(0);
  renders.current++;
  return <div><p className="text-sm text-slate-400">Memoized child renders: {renders.current}</p><div className="mt-2 flex flex-wrap gap-2">{products.map(product => <button key={product} onClick={() => onSelect(product)} className="rounded border border-slate-700 px-3 py-2">{product}</button>)}</div></div>;
});

function MemoizationExample() {
  const [search, setSearch] = useState("");
  const [unrelated, setUnrelated] = useState(0);
  const [selected, setSelected] = useState("");
  const filtered = useMemo(() => products.filter(product => product.toLowerCase().includes(search.toLowerCase())), [search]);
  const selectProduct = useCallback(product => setSelected(product), []);
  return <TopicCard title="React.memo, useMemo and useCallback" what="React.memo can skip a child render when props are shallowly equal; the hooks stabilize calculated values and function references." why="Together they can prevent repeated expensive work or child renders caused only by changing references." interview="Memoization is an optimization, not a correctness requirement. I profile first and use it only when saved work is worth comparison and caching costs."><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Filter products" className="rounded border border-slate-700 bg-slate-900 px-3 py-2" /><button onClick={() => setUnrelated(value => value + 1)} className="ml-2 rounded bg-cyan-400 px-3 py-2 text-slate-950">Unrelated {unrelated}</button><div className="mt-4"><ProductList products={filtered} onSelect={selectProduct} /></div><p className="mt-3">Selected: {selected || "none"}</p></TopicCard>;
}
export default MemoizationExample;

