

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  createdAt: number;
}


export type TodoFilter = "all" | "pending" | "completed";

export type TodoSort = "newest" | "oldest" | "priority";