import './App.css'
import { useState } from "react";
import type { Todo,  TodoFilter, TodoSort} from "./types/todo";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>(
  "typescript-todos",
  [
    {
      id: "1",
      title: "Learn TypeScript",
      completed: false,
      priority: "high",
      createdAt: Date.now(),
    },
  ]
);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState<TodoFilter>("all");
  const [sort, setSort] = useState<TodoSort>("newest");
  const [priority, setPriority] = useState<Todo["priority"]>("medium");

  const priorityOrder = {
        high: 3,
        medium: 2,
        low: 1,
      };

  function handleSaveTodo() {
  const trimmedTitle = title.trim();

  if (!trimmedTitle) return;

  if (editingId !== null) {
  setTodos((prevTodos) => prevTodos.map((todo) => todo.id === editingId ? { ...todo, title: trimmedTitle } : todo ));                        
    setEditingId(null);
  } else {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      completed: false,
      priority: priority,
      createdAt: Date.now(),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }
  setTitle("");
}

function handleEditTodo(todo: Todo) {
  setTitle(todo.title);
  setEditingId(todo.id);
}

function handleCancelEdit() {
  setTitle("");
  setEditingId(null);
}
  function handleToggleTodo(id: string) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function handleDeleteTodo(id: string) {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  }

  const visibleTodos = todos
  .filter((todo) => {
    if (filter === "pending") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  })
  .sort((a, b) => {
    if (sort === "newest") {
      return b.createdAt - a.createdAt;
    }

    if (sort === "oldest") {
      return a.createdAt - b.createdAt;
    }

    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-bold">My Todos</h1>

        <div className="mt-6 flex gap-2">
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") handleSaveTodo();
            }}
            placeholder="Enter a task..."
            className="min-w-0 flex-1 rounded-lg border border-gray-300 bg-white
             px-4 py-2 outline-none focus:border-blue-500"             
          />
          <select
  value={priority}
  onChange={(event) =>
    setPriority(event.target.value as Todo["priority"])
  }
  className="rounded-lg border border-gray-300 bg-white px-3 py-2"
>
  <option value="low">Low</option>
  <option value="medium">Medium</option>
  <option value="high">High</option>
</select>

          <button
  onClick={handleSaveTodo}
  className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
>
  {editingId !== null ? "Save" : "Add"}
</button>

{editingId !== null && (
  <button
    onClick={handleCancelEdit}
    className="rounded-lg border border-gray-300 px-3 py-2"
  >
    Cancel
  </button> )}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
  <select
    value={filter}
    onChange={(event) =>
      setFilter(event.target.value as TodoFilter)
    }
    className="rounded-lg border border-gray-300 bg-white px-3 py-2"
  >
    <option value="all">All todos</option>
    <option value="pending">Pending</option>
    <option value="completed">Completed</option>
  </select>

  <select
    value={sort}
    onChange={(event) =>
      setSort(event.target.value as TodoSort)
    }
    className="rounded-lg border border-gray-300 bg-white px-3 py-2"
  >
    <option value="newest">Newest first</option>
    <option value="oldest">Oldest first</option>
    <option value="priority">Highest priority</option>
  </select>
</div>

<div className="mt-4 flex justify-between text-sm text-gray-600">
  <span>Total: {todos.length}</span>
  <span>
    Completed: {todos.filter((todo) => todo.completed).length}
  </span>
  <span>
    Pending: {todos.filter((todo) => !todo.completed).length}
  </span>
</div>

        <div className="mt-6 space-y-3">
          {visibleTodos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
                className="h-4 w-4"
              />

              <div className="min-w-0 flex-1">
                <h2
                  className={`font-semibold ${
                    todo.completed
                      ? "text-gray-400 line-through"
                      : "text-gray-800"
                  }`}
                >
                  {todo.title}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Priority: {todo.priority} ·{" "}
                  {todo.completed ? "Completed" : "Pending"}
                </p>
              </div>
              <button
                onClick={() => handleEditTodo(todo)}
                disabled={editingId !== null}
                className="rounded px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 disabled:opacity-40"
              >
                Edit
              </button>

              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="rounded px-3 py-1 text-sm text-red-600 hover:bg-red-50"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;