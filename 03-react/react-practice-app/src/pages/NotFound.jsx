import { Link } from "react-router";

function NotFound() {
  return (
    <section className="py-20 text-center">
      <p className="text-6xl font-bold text-cyan-400">404</p>
      <h2 className="mt-4 text-2xl font-semibold">Topic not found</h2>
      <Link to="/" className="mt-6 inline-block rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950">Return to dashboard</Link>
    </section>
  );
}

export default NotFound;

