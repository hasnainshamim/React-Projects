import React from 'react'
import useCounter from './useCounter.js'

const Counter = () => {
  const [increment, decrement, count] = useCounter()
  return (
    <div>
      <h1 className='mx-5'>{count}</h1>
      <button onClick={() => { increment() }} className='btn btn-primary mx-2'>plus</button>
      <button onClick={() => { decrement() }} className='btn btn-primary mx-2'>minus</button>
    </div>
  )
}

export default Counter