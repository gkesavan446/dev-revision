import BatchingExample from "../topics/rendering/BatchingExample.jsx";
import KeysReconciliationExample from "../topics/rendering/KeysReconciliationExample.jsx";
import LifecycleExample from "../topics/rendering/LifecycleExample.jsx";
import RenderTriggersExample from "../topics/rendering/RenderTriggersExample.jsx";
import StrictModeExample from "../topics/rendering/StrictModeExample.jsx";

function RenderingPage() {
  return <section><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Module 4</p><h2 className="mt-3 text-3xl font-bold">Rendering and Lifecycle</h2><p className="mt-3 text-slate-400">Rendering calculates UI; committing applies necessary DOM changes.</p><div className="mt-8 space-y-5"><RenderTriggersExample /><LifecycleExample /><KeysReconciliationExample /><BatchingExample /><StrictModeExample /></div></section>;
}
export default RenderingPage;

