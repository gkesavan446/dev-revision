import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoAdded, todoDeleted, todoToggled } from './todosSlice.js'

function TodoList() {
  const [text, setText] = useState('')
  const todos = useSelector((state) => state.todos.items)
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault()
    const cleanText = text.trim()
    if (!cleanText) return
    dispatch(todoAdded(cleanText))
    setText('')
  }

  return (
    <div>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Add a revision task"
        />
        <button type="submit">Add</button>
      </form>

      <div className="mt-4 space-y-2">
        {todos.map((todo) => (
          <div key={todo.id} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
            <input
              className="h-4 w-4 accent-indigo-600"
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(todoToggled(todo.id))}
            />
            <span className={`flex-1 text-sm ${todo.completed ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
              {todo.text}
            </span>
            <button className="danger" onClick={() => dispatch(todoDeleted(todo.id))}>Delete</button>
          </div>
        ))}
      </div>
      <p className="hint">The action payload carries the task text or id to the slice reducer.</p>
    </div>
  )
}

export default TodoList
