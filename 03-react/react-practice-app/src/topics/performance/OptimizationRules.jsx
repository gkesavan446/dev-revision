import TopicCard from "../core/TopicCard.jsx";

function OptimizationRules() {
  return <TopicCard title="Practical Optimization Rules" what="A process of measuring a real bottleneck and reducing the expensive work." why="Premature memoization makes dependencies and debugging harder without guaranteed benefit." interview="I first keep state local, avoid unnecessary effects, use stable keys and measure with React DevTools Profiler. Then I memoize expensive calculations or components only when evidence supports it."><ol className="list-decimal space-y-2 pl-5 text-slate-300"><li>Keep state near its consumers.</li><li>Do not store derived values unnecessarily.</li><li>Avoid effects for normal calculations.</li><li>Profile before adding memoization.</li><li>Lazy-load meaningful boundaries.</li></ol></TopicCard>;
}
export default OptimizationRules;

