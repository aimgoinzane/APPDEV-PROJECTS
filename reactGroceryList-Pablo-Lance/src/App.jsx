import { useState } from 'react'
import Shop from './Shop'

function App() {
  const [count, setCount] = useState(0)

  let items = [
    {id: 1, name: 'Grapes', price: 10},
    {id: 2, name: 'Orange', price: 15},
    {id: 3, name: 'Kiwi', price: 20},
    {id: 4, name: 'Banana', price: 25},
    {id: 4, name: 'Cucumber', price: 30},
  ]

  return (
    <>
    <center>
      <Shop item = {items}/>
    </center>  
    </>
  )
}

export default App
