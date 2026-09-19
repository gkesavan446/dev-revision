import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './usersSlice.js'

function UserList() {
  const { items, status, error } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  return (
    <div>
      <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 p-4">
        <div>
          <p className="font-semibold text-slate-800">Request status: <span className="text-indigo-600">{status}</span></p>
          <p className="text-sm text-slate-500">Handles pending, fulfilled, and rejected states.</p>
        </div>
        <button onClick={() => dispatch(fetchUsers())} disabled={status === 'loading'}>
          {status === 'loading' ? 'Loading...' : 'Fetch users'}
        </button>
      </div>

      {error && <p className="mt-3 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((user) => (
          <div key={user.id} className="rounded-xl border border-slate-200 p-3">
            <p className="font-semibold text-slate-800">{user.name}</p>
            <p className="text-sm text-slate-500">{user.email}</p>
          </div>
        ))}
      </div>
      <p className="hint">createAsyncThunk creates lifecycle actions automatically for an async request.</p>
    </div>
  )
}

export default UserList
