import TopicCard from "./TopicCard.jsx";

function SkillBadge({ name }) {
  return <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-cyan-300">{name}</span>;
}

function ComponentsExample() {
  return (
    <TopicCard title="Components" what="Reusable functions that return React elements." why="They split a UI into understandable, reusable pieces." interview="A React component is a capitalized function that returns UI. Keep it focused on one responsibility and compose small components to build pages.">
      <div className="flex flex-wrap gap-2">
        <SkillBadge name="React" />
        <SkillBadge name="Node.js" />
        <SkillBadge name="MongoDB" />
      </div>
    </TopicCard>
  );
}

export default ComponentsExample;

