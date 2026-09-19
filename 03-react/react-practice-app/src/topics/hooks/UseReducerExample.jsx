import { useReducer } from "react";
import TopicCard from "../core/TopicCard.jsx";

function reducer(state, action) {
  if (action.type === "increment") return { count: state.count + 1 };
  if (action.type === "decrement") return { count: state.count - 1 };
  if (action.type === "reset") return { count: 0 };
  return state;
}

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return <TopicCard title="useReducer" what="Manages state transitions through a reducer and dispatched actions." why="It keeps related complex update rules in one predictable function." interview="A reducer receives current state and an action and returns new state. It should remain pure and must not mutate existing state."><p className="text-2xl font-bold">{state.count}</p><div className="mt-3 flex gap-2"><button onClick={() => dispatch({ type: "decrement" })} className="rounded border border-slate-700 px-4 py-2">−</button><button onClick={() => dispatch({ type: "increment" })} className="rounded bg-cyan-400 px-4 py-2 text-slate-950">+</button><button onClick={() => dispatch({ type: "reset" })} className="rounded border border-slate-700 px-4 py-2">Reset</button></div></TopicCard>;
}
export default UseReducerExample;

