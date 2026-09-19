import ControlledInputExample from "../topics/forms/ControlledInputExample.jsx";
import MultipleFieldsExample from "../topics/forms/MultipleFieldsExample.jsx";
import TransactionFormExample from "../topics/forms/TransactionFormExample.jsx";
import ValidationExample from "../topics/forms/ValidationExample.jsx";

function FormsPage() {
  return <section><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">Module 3</p><h2 className="mt-3 text-3xl font-bold">React Forms</h2><p className="mt-3 text-slate-400">Trace the value → onChange → state → render cycle in every example.</p><div className="mt-8 space-y-5"><ControlledInputExample /><MultipleFieldsExample /><ValidationExample /><TransactionFormExample /></div></section>;
}
export default FormsPage;

