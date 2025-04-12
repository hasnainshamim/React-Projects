import { useState } from 'react'

const useCounter = () => {
    let [count, setcount] = useState(10)
    function increment() {
        setcount(count + 1)
    }
    function decrement() {
        setcount(count - 1)
    }

    return [increment, decrement, count]
}

export default useCounter