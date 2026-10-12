
export type Priority = "low" | "medium" | "high";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  priority: Priority;
  createdAt: number;
}


export type TodoFilter = "all" | "pending" | "completed";

export type TodoSort = "newest" | "oldest" | "priority";