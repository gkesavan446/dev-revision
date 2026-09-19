import { useState } from "react";
import TopicCard from "./TopicCard.jsx";

const initialSkills = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "React" },
  { id: 3, name: "Node.js" }
];

function ListsKeysExample() {
  const [skills, setSkills] = useState(initialSkills);

  return (
    <TopicCard title="Lists and Keys" what="map renders repeated elements; keys identify items between renders." why="Stable identity helps React update, insert, and remove the correct element." interview="Use a stable unique id from the data. Avoid array indexes when items can be reordered, inserted, or deleted.">
      <ul className="space-y-2">
        {skills.map(skill => (
          <li key={skill.id} className="flex items-center justify-between rounded-lg bg-slate-900 px-3 py-2">
            {skill.name}
            <button onClick={() => setSkills(items => items.filter(item => item.id !== skill.id))} className="text-rose-300">Remove</button>
          </li>
        ))}
      </ul>
      {skills.length === 0 && <p className="text-slate-400">No skills remaining.</p>}
    </TopicCard>
  );
}

export default ListsKeysExample;

