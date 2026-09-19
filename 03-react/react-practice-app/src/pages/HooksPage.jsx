import UseCallbackExample from "../topics/hooks/UseCallbackExample.jsx";
import UseContextExample from "../topics/hooks/UseContextExample.jsx";
import UseEffectExample from "../topics/hooks/UseEffectExample.jsx";
import UseMemoExample from "../topics/hooks/UseMemoExample.jsx";
import UseReducerExample from "../topics/hooks/UseReducerExample.jsx";
import UseRefExample from "../topics/hooks/UseRefExample.jsx";
import UseStateExample from "../topics/hooks/UseStateExample.jsx";

function HooksPage() {
  return <section><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Module 2</p><h2 className="mt-3 text-3xl font-bold">React Hooks</h2><p className="mt-3 text-slate-400">Hooks must be called at the top level of React components or custom hooks—not inside loops, conditions, or normal JavaScript functions.</p><div className="mt-8 space-y-5"><UseStateExample /><UseEffectExample /><UseRefExample /><UseContextExample /><UseReducerExample /><UseMemoExample /><UseCallbackExample /></div></section>;
}
export default HooksPage;

