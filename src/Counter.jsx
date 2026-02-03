import { useState } from "react"

const Counter = ({initialvalue}) => {
    const [count, setCount] = useState(initialvalue || 0);
    
    function incriment(){
        setCount(count + 1);
    }
    function decrement(){
        setCount(count -1);
    }
    function reset(){
        setCount(initialvalue || 0);        
    }
    
    return (
        <>
        <h1>Counter Project in React</h1>
        <div id="Counter">
            
            <h1>Counter</h1>
            <h2 key={count} className="animate-pop"> {count} </h2>
            
            <div className="Button">
            <button  onClick={incriment}>Incriment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            </div>
        </div>
        </>
    )

}

export default function Result(){
  return(
    <>
        <Counter/>
    </>
  )
}