import TopicCard from "../core/TopicCard.jsx";

function StrictModeExample() {
  return <TopicCard title="Strict Mode" what="A development-only tool that performs extra checks for unsafe or impure behavior." why="Extra rendering and effect setup/cleanup can reveal missing cleanup and mutations." interview="Strict Mode does not double-render production output. In development, React may intentionally call rendering logic and effect setup more than once to expose bugs."><p className="text-slate-300">Open the browser console while testing effects. Repeated development logs can be expected when StrictMode wraps the app.</p></TopicCard>;
}
export default StrictModeExample;

