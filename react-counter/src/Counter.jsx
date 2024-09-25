import React, {useState} from 'react'

export default function Counter() {

    // useState Hook for updating variables or Stateful Variables
    // or Function Components
    const [count, setCount] = useState(0) // default value

    // function to increment state count
    const incrementCount = () => {  
        setCount(c => c + 1)  // all of these are the updater
    }

    // function to reset the state count
    const resetCount = () => {
        setCount(c => c = 0)
    }

    // function to decrement the state count
    const decrementCount = () => {
        setCount(c => c - 1)
    }

    return(
        <>
        <div className="container">
            <p className="counter-container">
                Counter: <br />
                {count}
            </p>
            &nbsp;
            <button className="button-container-decrement" onClick = {decrementCount}> -1 </button>
            <button className="button-container-reset" onClick = {resetCount}> 0 </button>
            <button className="button-container-increment" onClick = {incrementCount}> +1 </button>
        </div>
        </>
    )
}