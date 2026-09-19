import TopicCard from "./TopicCard.jsx";

function Profile({ name, role, city = "Not provided" }) {
  return <p>{name} — {role} — {city}</p>;
}

function PropsExample() {
  return (
    <TopicCard title="Props" what="Read-only inputs passed from a parent to a child component." why="They make components reusable with different data and callbacks." interview="Props flow from parent to child. A child should not mutate them; it requests changes through a callback or shared state owned elsewhere.">
      <Profile name="Kesavan" role="MERN Developer" city="Chennai" />
    </TopicCard>
  );
}

export default PropsExample;

