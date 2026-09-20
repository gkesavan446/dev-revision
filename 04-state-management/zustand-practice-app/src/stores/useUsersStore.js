import { create } from 'zustand'

export const useUsersStore = create((set) => ({
  users: [],
  status: 'idle',
  error: null,
  fetchUsers: async () => {
    set({ status: 'loading', error: null })
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
      if (!response.ok) {
        throw new Error('Unable to fetch users')
      }

      const data = await response.json()
      set({ users: data, status: 'succeeded' })
    } catch (error) {
      set({ status: 'failed', error: error.message })
    }
  },
}))
