import {useState} from "react" 

function App() {
  const [color,setColor]=useState("grey")

  return (
      <div className="w-full h-screen duration-150"
      style={{backgroundColor:color}}>
         <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="btn flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-4 rounded-3xl">

            <button 
            onClick={()=>setColor("red")}
            className="red outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"red"}}>Red</button>

            <button
            onClick={()=>setColor("green")}
            className="red outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"green"}}>Green</button>

            <button 
            onClick={()=>setColor("blue")}
            className="red outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"blue"}}>Blue</button>

            <button 
            onClick={()=>setColor("orange")}
            className="red outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"orange"}}>Orange</button>

            <button 
            onClick={()=>setColor("brown")}
            className="red outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"brown"}}>Brown</button>

          </div>
         </div>
      </div>
    
  )
}

export default App