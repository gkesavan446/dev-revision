
import type { Todo } from "../src/types/todo.ts";

export async function fetchTodos(): Promise<Todo[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  const data: { id: number; title: string; completed: boolean }[] =
    await response.json();

  return data.map((item) => ({
    id: String(item.id),
    title: item.title,
    completed: item.completed,
    priority: "medium",
    createdAt: Date.now(),
  }));
}