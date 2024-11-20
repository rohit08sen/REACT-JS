import { useState } from 'react' //heere hooks come
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter]= useState(0)

  // let counter=15;
  const addValue=()=>{
    // console.log("clicked",counter);
    // counter=counter+1;
    if(counter<20){
      setCounter(counter+1)
    }
  }

  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    
   
  }

  return (
    <>
      <h1>Rohit JIII</h1>
      <h2>Counter value:{counter}</h2>

      <button
        onClick={addValue}>Add value</button>
      <br />
      <button
      onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
