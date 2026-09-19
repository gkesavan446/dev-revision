import ComponentsExample from "../topics/core/ComponentsExample.jsx";
import ConditionalExample from "../topics/core/ConditionalExample.jsx";
import EventsExample from "../topics/core/EventsExample.jsx";
import JsxExample from "../topics/core/JsxExample.jsx";
import ListsKeysExample from "../topics/core/ListsKeysExample.jsx";
import PropsExample from "../topics/core/PropsExample.jsx";
import StateExample from "../topics/core/StateExample.jsx";

function CoreReactPage() {
  return (
    <section>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Module 1</p>
      <h2 className="mt-3 text-3xl font-bold">Core React</h2>
      <p className="mt-3 text-slate-400">Read the source component, interact with its output, then explain the interview note aloud.</p>
      <div className="mt-8 space-y-5">
        <JsxExample />
        <ComponentsExample />
        <PropsExample />
        <StateExample />
        <EventsExample />
        <ConditionalExample />
        <ListsKeysExample />
      </div>
    </section>
  );
}

export default CoreReactPage;

