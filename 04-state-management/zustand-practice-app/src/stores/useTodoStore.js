import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: [
        { id: 'starter-task', text: 'Revise Zustand selectors', completed: false },
      ],
      addTodo: (text) => {
        const newTodo = {
          id: crypto.randomUUID(),
          text,
          completed: false,
        }

        set((state) => ({ todos: [...state.todos, newTodo] }))
      },
      toggleTodo: (id) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        }))
      },
      deleteTodo: (id) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }))
      },
    }),
    { name: 'zustand-revision-todos' },
  ),
)
