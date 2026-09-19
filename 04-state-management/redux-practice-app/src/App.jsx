import ConceptCard from './components/ConceptCard.jsx'
import Counter from './features/counter/Counter.jsx'
import TodoList from './features/todos/TodoList.jsx'
import UserList from './features/users/UserList.jsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-5 py-12">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-indigo-400">State Management Revision</p>
          <h1 className="text-4xl font-black sm:text-5xl">Redux Toolkit Practice</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Learn the full Redux flow through small working examples: UI dispatches an action, a slice reducer updates the store, and subscribed components re-render.
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-6 px-5 py-8">
        <ConceptCard number="1" title="Actions and reducers" what="A slice groups state, action creators, and reducer logic." why="It keeps related state changes in one predictable place.">
          <Counter />
        </ConceptCard>

        <ConceptCard number="2" title="Payloads and collections" what="A payload carries data required by an action." why="Real features need values such as an id, form data, or selected item.">
          <TodoList />
        </ConceptCard>

        <ConceptCard number="3" title="Async state" what="createAsyncThunk manages an asynchronous operation's lifecycle actions." why="The UI must represent loading, success, and error states clearly.">
          <UserList />
        </ConceptCard>

        <section className="rounded-2xl bg-indigo-600 p-6 text-white">
          <h2 className="text-xl font-bold">Practice challenge</h2>
          <p className="mt-2 text-indigo-100">Add a “Clear completed” todo action. Then add an input that lets the counter increment by any amount.</p>
        </section>
      </main>
    </div>
  )
}

export default App
