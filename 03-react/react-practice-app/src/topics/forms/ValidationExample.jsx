import { useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

function validate(values) {
  const errors = {};
  if (!values.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email";
  if (values.password.length < 6) errors.password = "Use at least 6 characters";
  return errors;
}

function ValidationExample() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  function submit(event) { event.preventDefault(); const nextErrors = validate(form); setErrors(nextErrors); setMessage(Object.keys(nextErrors).length ? "" : "Form is valid"); }
  return <TopicCard title="Validation and Submit" what="Validation checks values before processing a submission." why="It provides immediate feedback and prevents avoidable invalid requests." interview="I call preventDefault, validate all fields, update an errors object, and continue only when it is empty. The server must still validate again."><form onSubmit={submit} noValidate className="space-y-3"><div><input value={form.email} onChange={e => setForm(current => ({ ...current, email: e.target.value }))} placeholder="Email" className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2" />{errors.email && <p className="mt-1 text-sm text-rose-300">{errors.email}</p>}</div><div><input type="password" value={form.password} onChange={e => setForm(current => ({ ...current, password: e.target.value }))} placeholder="Password" className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2" />{errors.password && <p className="mt-1 text-sm text-rose-300">{errors.password}</p>}</div><button className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950">Submit</button>{message && <p className="text-emerald-300">{message}</p>}</form></TopicCard>;
}
export default ValidationExample;

