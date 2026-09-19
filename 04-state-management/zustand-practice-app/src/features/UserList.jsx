import { useUsersStore } from '../stores/useUsersStore.js'

function UserList() {
  const users = useUsersStore((state) => state.users)
  const status = useUsersStore((state) => state.status)
  const error = useUsersStore((state) => state.error)
  const fetchUsers = useUsersStore((state) => state.fetchUsers)

  return (
    <div>
      <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 p-4">
        <div>
          <p className="font-semibold text-slate-800">Request status: <span className="text-emerald-600">{status}</span></p>
          <p className="text-sm text-slate-500">Async actions can live directly inside a Zustand store.</p>
        </div>
        <button onClick={fetchUsers} disabled={status === 'loading'}>
          {status === 'loading' ? 'Loading...' : 'Fetch users'}
        </button>
      </div>

      {error && <p className="mt-3 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {users.map((user) => (
          <div key={user.id} className="rounded-xl border border-slate-200 p-3">
            <p className="font-semibold text-slate-800">{user.name}</p>
            <p className="text-sm text-slate-500">{user.email}</p>
          </div>
        ))}
      </div>
      <p className="hint">The action calls set before and after fetch to update loading, data, and error state.</p>
    </div>
  )
}

export default UserList
