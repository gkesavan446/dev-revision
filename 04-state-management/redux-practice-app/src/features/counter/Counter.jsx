import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './counterSlice.js'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="rounded-xl bg-slate-50 p-5">
      <p className="mb-4 text-center text-5xl font-black text-indigo-600">{count}</p>
      <div className="flex flex-wrap justify-center gap-2">
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5 payload</button>
        <button className="secondary" onClick={() => dispatch(reset())}>Reset</button>
      </div>
      <p className="hint">Read with useSelector → send an action with dispatch → reducer updates the store.</p>
    </div>
  )
}

export default Counter
