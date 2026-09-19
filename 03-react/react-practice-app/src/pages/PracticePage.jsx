import { useMemo, useState } from "react";
import TopicCard from "../topics/core/TopicCard.jsx";
import useDebounce from "../topics/practice/useDebounce.js";
import useLocalStorage from "../topics/practice/useLocalStorage.js";

const products = ["Phone", "Laptop", "Watch", "Keyboard", "Mouse", "Monitor", "Tablet", "Speaker", "Camera", "Charger", "Headphones", "Printer"];

function SearchAndDebounce() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const filtered = useMemo(() => products.filter(item => item.toLowerCase().includes(debouncedSearch.toLowerCase())), [debouncedSearch]);
  return <TopicCard title="Search with Debounce" what="Input updates immediately, but filtering waits until typing pauses." why="The same pattern can reduce search API calls." interview="The effect resets a timer whenever value changes and cleans the old timer. Only the latest value becomes debounced."><input value={search} onChange={event => setSearch(event.target.value)} placeholder="Search products" className="w-full rounded border border-slate-700 bg-slate-900 px-3 py-2" /><p className="mt-2 text-sm text-slate-400">Applied search: {debouncedSearch || "none"}</p><p className="mt-2">{filtered.join(", ") || "No results"}</p></TopicCard>;
}

function PaginationPractice() {
  const [page, setPage] = useState(1);
  const limit = 4;
  const totalPages = Math.ceil(products.length / limit);
  const visible = products.slice((page - 1) * limit, page * limit);
  return <TopicCard title="Client Pagination" what="A page number selects one slice of a collection." why="It demonstrates page boundaries before moving to server-side pagination." interview="Start index is (page - 1) × limit. In production, large datasets should be paginated by the server."><ul className="space-y-2">{visible.map(item => <li key={item} className="rounded bg-slate-900 px-3 py-2">{item}</li>)}</ul><div className="mt-3 flex items-center gap-3"><button disabled={page === 1} onClick={() => setPage(value => value - 1)} className="rounded border border-slate-700 px-3 py-2 disabled:opacity-40">Previous</button><span>{page} / {totalPages}</span><button disabled={page === totalPages} onClick={() => setPage(value => value + 1)} className="rounded border border-slate-700 px-3 py-2 disabled:opacity-40">Next</button></div></TopicCard>;
}

function FetchStatesPractice() {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);
  function load(shouldFail = false) { setStatus("loading"); setData([]); setTimeout(() => { if (shouldFail) setStatus("error"); else { setData(["Transaction A", "Transaction B"]); setStatus("success"); } }, 600); }
  return <TopicCard title="Loading, Error, Empty and Success" what="Async UI should represent every important request state." why="Users need clear feedback instead of blank or misleading screens." interview="I track loading, error and data separately or with a status value, render each state explicitly, and prevent stale requests from updating state."><div className="flex gap-2"><button onClick={() => load(false)} className="rounded bg-cyan-400 px-3 py-2 text-slate-950">Load success</button><button onClick={() => load(true)} className="rounded border border-slate-700 px-3 py-2">Load error</button></div><div className="mt-3">{status === "idle" && <p>Start a request.</p>}{status === "loading" && <p>Loading...</p>}{status === "error" && <p className="text-rose-300">Something went wrong.</p>}{status === "success" && (data.length ? <p>{data.join(", ")}</p> : <p>No results.</p>)}</div></TopicCard>;
}

function LocalStoragePractice() {
  const [note, setNote] = useLocalStorage("react-revision-note", "");
  return <TopicCard title="Custom useLocalStorage Hook" what="Reusable state that initializes from and writes to localStorage." why="It preserves small preferences or drafts across refreshes." interview="The lazy initializer reads storage once. The setter updates React state and storage together, with parsing protected by error handling."><textarea value={note} onChange={event => setNote(event.target.value)} placeholder="Write a note, then refresh" className="w-full rounded border border-slate-700 bg-slate-900 p-3" /></TopicCard>;
}

function PracticePage() {
  return <section><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Module 7</p><h2 className="mt-3 text-3xl font-bold">React Practice</h2><p className="mt-3 text-slate-400">Use the working examples, then rebuild each one without looking.</p><div className="mt-8 space-y-5"><SearchAndDebounce /><PaginationPractice /><FetchStatesPractice /><LocalStoragePractice /></div></section>;
}
export default PracticePage;
