import { createContext, useContext, useState } from "react";
import TopicCard from "../core/TopicCard.jsx";

const ThemeContext = createContext(null);

function ThemePreview() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return <div className={`rounded-lg p-4 ${theme === "dark" ? "bg-slate-800" : "bg-slate-200 text-slate-900"}`}><p>Theme: {theme}</p><button onClick={toggleTheme} className="mt-2 rounded bg-cyan-400 px-3 py-2 text-slate-950">Toggle</button></div>;
}

function UseContextExample() {
  const [theme, setTheme] = useState("dark");
  const value = { theme, toggleTheme: () => setTheme(current => current === "dark" ? "light" : "dark") };
  return <TopicCard title="useContext" what="Reads the nearest matching context value." why="It avoids repeatedly passing shared data through intermediate components." interview="Context suits broadly shared, relatively simple values. Provider value changes re-render consumers; it does not automatically replace all state management."><ThemeContext.Provider value={value}><ThemePreview /></ThemeContext.Provider></TopicCard>;
}
export default UseContextExample;

