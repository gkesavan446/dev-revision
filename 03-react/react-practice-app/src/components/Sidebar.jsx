import { NavLink } from "react-router";

const links = [
  { path: "/", label: "Dashboard", end: true },
  { path: "/core", label: "Core React" },
  { path: "/hooks", label: "Hooks" },
  { path: "/forms", label: "Forms" },
  { path: "/rendering", label: "Rendering" },
  { path: "/patterns", label: "Patterns" },
  { path: "/performance", label: "Performance" },
  { path: "/practice", label: "Practice" }
];

function Sidebar({ menuOpen, setMenuOpen }) {
  return (
    <>
      {menuOpen && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-40 w-72 border-r border-slate-800 bg-slate-900 p-5 transition-transform lg:translate-x-0 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="mb-8 flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">Revision App</p>
            <h1 className="mt-2 text-2xl font-bold">React Lab</h1>
          </div>
          <button type="button" onClick={() => setMenuOpen(false)} className="text-slate-400 lg:hidden">Close</button>
        </div>

        <nav className="space-y-2">
          {links.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.end}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `block rounded-lg px-4 py-3 text-sm font-medium transition ${isActive ? "bg-cyan-400 text-slate-950" : "text-slate-300 hover:bg-slate-800 hover:text-white"}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;

