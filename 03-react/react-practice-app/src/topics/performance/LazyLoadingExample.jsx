import { lazy, Suspense, useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

const LazyPanel = lazy(() => import("./LazyPanel.jsx"));

function LazyLoadingExample() {
  const [show, setShow] = useState(false);
  return <TopicCard title="Lazy Loading and Suspense" what="lazy loads a component module when React first needs to render it; Suspense displays fallback UI while it loads." why="Code splitting can reduce the initial JavaScript bundle for large or infrequently visited screens." interview="I usually lazy-load route-level or heavy components, not every small component. Suspense provides a loading boundary around lazy content."><button onClick={() => setShow(value => !value)} className="rounded bg-cyan-400 px-4 py-2 font-semibold text-slate-950">{show ? "Hide" : "Load"} panel</button>{show && <div className="mt-4"><Suspense fallback={<p className="text-slate-400">Loading module...</p>}><LazyPanel /></Suspense></div>}</TopicCard>;
}
export default LazyLoadingExample;

