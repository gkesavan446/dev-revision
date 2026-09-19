import { useCounterStore } from '../stores/useCounterStore.js'

function Counter() {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  const decrement = useCounterStore((state) => state.decrement)
  const incrementByAmount = useCounterStore((state) => state.incrementByAmount)
  const reset = useCounterStore((state) => state.reset)

  return (
    <div className="rounded-xl bg-slate-50 p-5">
      <p className="mb-4 text-center text-5xl font-black text-emerald-600">{count}</p>
      <div className="flex flex-wrap justify-center gap-2">
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
        <button onClick={() => incrementByAmount(5)}>+5 argument</button>
        <button className="secondary" onClick={reset}>Reset</button>
      </div>
      <p className="hint">The store hook provides state and actions directly—no Provider or dispatch is required.</p>
    </div>
  )
}

export default Counter
