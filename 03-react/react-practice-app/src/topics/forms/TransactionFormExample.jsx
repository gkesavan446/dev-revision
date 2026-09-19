import { useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

const initialForm = { type: "expense", category: "", amount: "", description: "" };

function TransactionFormExample() {
  const [form, setForm] = useState(initialForm);
  const [saved, setSaved] = useState(null);
  function change(event) { setForm(current => ({ ...current, [event.target.name]: event.target.value })); }
  function submit(event) { event.preventDefault(); if (!form.category.trim() || Number(form.amount) <= 0) return; setSaved({ ...form, amount: Number(form.amount) }); setForm(initialForm); }
  return <TopicCard title="Practical Transaction Form" what="A complete controlled form that normalizes data and resets after success." why="It mirrors the create-transaction flow used in a MERN finance project." interview="I keep inputs as controlled strings, validate before submission, convert numeric values at the boundary, submit a normalized object, and reset only after success."><form onSubmit={submit} className="grid gap-3 sm:grid-cols-2"><select name="type" value={form.type} onChange={change} className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2"><option value="expense">Expense</option><option value="income">Income</option></select><input name="category" value={form.category} onChange={change} placeholder="Category" className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2" /><input name="amount" type="number" value={form.amount} onChange={change} placeholder="Amount" className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2" /><input name="description" value={form.description} onChange={change} placeholder="Description" className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2" /><button className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 sm:col-span-2">Save transaction</button></form>{saved && <p className="mt-4 text-emerald-300">Saved {saved.category}: ₹{saved.amount}</p>}</TopicCard>;
}
export default TransactionFormExample;

