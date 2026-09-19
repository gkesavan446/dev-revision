import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice.js'
import todosReducer from '../features/todos/todosSlice.js'
import usersReducer from '../features/users/usersSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    users: usersReducer,
  },
})
