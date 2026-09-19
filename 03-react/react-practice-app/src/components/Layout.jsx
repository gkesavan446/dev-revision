import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar.jsx";

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 flex h-16 items-center border-b border-slate-800 bg-slate-950/90 px-4 backdrop-blur lg:px-8">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="rounded-lg border border-slate-700 px-3 py-2 text-sm lg:hidden"
          >
            Menu
          </button>
          <p className="ml-4 text-sm text-slate-400 lg:ml-0">Learn → Run → Practice → Explain</p>
        </header>

        <main className="mx-auto max-w-6xl p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;

