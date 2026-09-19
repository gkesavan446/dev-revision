import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { id: 'starter-task', text: 'Revise Redux data flow', completed: false },
  ],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded: {
      reducer: (state, action) => {
        state.items.push(action.payload)
      },
      prepare: (text) => ({
        payload: { id: nanoid(), text, completed: false },
      }),
    },
    todoToggled: (state, action) => {
      const todo = state.items.find((item) => item.id === action.payload)
      if (todo) todo.completed = !todo.completed
    },
    todoDeleted: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
  },
})

export const { todoAdded, todoToggled, todoDeleted } = todosSlice.actions
export default todosSlice.reducer
