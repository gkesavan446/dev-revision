import TopicCard from "./TopicCard.jsx";

function JsxExample() {
  const developer = "Kesavan";
  const skills = 3;

  return (
    <TopicCard title="JSX" what="A syntax extension used to describe UI with JavaScript expressions." why="It keeps rendering logic close to the markup it controls." interview="JSX is transformed into React element creation calls. Use braces for expressions, className for CSS classes, and return one parent element or a Fragment.">
      <p className="font-semibold">Hello, {developer}</p>
      <p className="mt-1 text-slate-400">You are revising {skills} core skills.</p>
    </TopicCard>
  );
}

export default JsxExample;

