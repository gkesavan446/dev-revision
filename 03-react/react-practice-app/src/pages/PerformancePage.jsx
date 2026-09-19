import LazyLoadingExample from "../topics/performance/LazyLoadingExample.jsx";
import MemoizationExample from "../topics/performance/MemoizationExample.jsx";
import OptimizationRules from "../topics/performance/OptimizationRules.jsx";
import ReferentialEqualityExample from "../topics/performance/ReferentialEqualityExample.jsx";

function PerformancePage() {
  return <section><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Module 6</p><h2 className="mt-3 text-3xl font-bold">React Performance</h2><p className="mt-3 text-slate-400">Correct, readable code comes first. Measure before optimizing.</p><div className="mt-8 space-y-5"><MemoizationExample /><ReferentialEqualityExample /><LazyLoadingExample /><OptimizationRules /></div></section>;
}
export default PerformancePage;

