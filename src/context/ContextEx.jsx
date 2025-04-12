import React,{useContext} from 'react'
import { theme } from './store'
const ContextEx = () => {
    const color = useContext(theme)
  return (
    <div>User color is {color}</div>
  )
}

export default ContextEx