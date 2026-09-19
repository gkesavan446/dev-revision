import { useState } from 'react'
import { useTodoStore } from '../stores/useTodoStore.js'

function TodoList() {
  const [text, setText] = useState('')
  const todos = useTodoStore((state) => state.todos)
  const addTodo = useTodoStore((state) => state.addTodo)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const deleteTodo = useTodoStore((state) => state.deleteTodo)

  function handleSubmit(event) {
    event.preventDefault()
    const cleanText = text.trim()
    if (!cleanText) return
    addTodo(cleanText)
    setText('')
  }

  return (
    <div>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Add a persistent task"
        />
        <button type="submit">Add</button>
      </form>

      <div className="mt-4 space-y-2">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
            <input
              className="h-4 w-4 accent-emerald-600"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span className={`flex-1 text-sm ${todo.completed ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
              {todo.text}
            </span>
            <button className="danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
      <p className="hint">The persist middleware stores this slice in localStorage. Refresh the page to test it.</p>
    </div>
  )
}

export default TodoList
