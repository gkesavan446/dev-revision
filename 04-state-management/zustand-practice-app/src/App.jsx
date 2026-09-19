import ConceptCard from './components/ConceptCard.jsx'
import Counter from './features/Counter.jsx'
import TodoList from './features/TodoList.jsx'
import UserList from './features/UserList.jsx'

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-5 py-12">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">State Management Revision</p>
          <h1 className="text-4xl font-black sm:text-5xl">Zustand Practice</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Build small hook-based stores, select only the state a component needs, keep actions beside state, and add persistence with minimal setup.
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-6 px-5 py-8">
        <ConceptCard number="1" title="Store and actions" what="create returns a custom hook containing state and update actions." why="Components can share state without prop drilling or a Provider.">
          <Counter />
        </ConceptCard>

        <ConceptCard number="2" title="Selectors and persistence" what="Selectors subscribe to specific values; persist saves store data." why="Selectors limit unnecessary updates while persistence keeps useful state after refresh.">
          <TodoList />
        </ConceptCard>

        <ConceptCard number="3" title="Async actions" what="An async function can call set whenever request state changes." why="API logic stays simple while the UI receives loading, success, and error values.">
          <UserList />
        </ConceptCard>

        <section className="rounded-2xl bg-emerald-600 p-6 text-white">
          <h2 className="text-xl font-bold">Practice challenge</h2>
          <p className="mt-2 text-emerald-50">Add “Clear completed,” display task totals, and create a theme store that switches the page between light and dark mode.</p>
        </section>
      </main>
    </div>
  )
}

export default App
