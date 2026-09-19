import { useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

function MultipleFieldsExample() {
  const [form, setForm] = useState({ category: "", amount: "", type: "expense", recurring: false });
  function handleChange(event) { const { name, value, type, checked } = event.target; setForm(current => ({ ...current, [name]: type === "checkbox" ? checked : value })); }
  return <TopicCard title="Multiple Fields" what="One object stores related form fields." why="A shared change handler reduces repeated state code while keeping field names explicit." interview="I use the input name as a computed property key. Checkboxes use checked, while text, number and select controls use value."><div className="grid gap-3 sm:grid-cols-2"><input name="category" value={form.category} onChange={handleChange} placeholder="Category" className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2" /><input name="amount" type="number" value={form.amount} onChange={handleChange} placeholder="Amount" className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2" /><select name="type" value={form.type} onChange={handleChange} className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2"><option value="expense">Expense</option><option value="income">Income</option></select><label className="flex items-center gap-2"><input name="recurring" type="checkbox" checked={form.recurring} onChange={handleChange} /> Recurring</label></div><pre className="mt-4 overflow-auto text-xs text-slate-400">{JSON.stringify(form, null, 2)}</pre></TopicCard>;
}
export default MultipleFieldsExample;

