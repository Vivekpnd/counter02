import { useState } from 'react'
import './App.css'
function App(){
const [counter , setCounter] = useState(0);

const addValue = () => {
  if(counter < 21){
    setCounter(counter+1)
  }
}
const decreaseValue = () => {
  if(counter > 0){
    setCounter(counter-1)
  }
 
}


  return (
    <>
     <h1>Counter : {counter}</h1>
     <h2 onClick={addValue}>Addvalue {counter}</h2>
     <p onClick={decreaseValue}>decrease value {counter}</p>
    </>
  )
}

export default App
