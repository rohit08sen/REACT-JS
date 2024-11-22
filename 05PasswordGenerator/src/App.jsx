import { useState,useCallback ,useEffect,useRef } from 'react'
// import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [numAllowed,setNumAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("")

  //useRef
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed){
      str+="0123456789"
    }
    if (charAllowed){
      str+="!@#$%^&*()<>?{}~"
    }

    for(let i=1;i<=length;i++){
      let char =Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }

    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])

  const copyPasswordToclipboard=useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className=" w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600 h-200">
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className="flex shadow overflow-hidden outline-none">
          <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3 mb-1 '
          placeholder='password' 
          readOnly
          ref={passwordRef}
          />

          <button type="button" 
            onClick={copyPasswordToclipboard}
           className=' mb-1 outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>copy</button>


        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={numAllowed}
            id="numberIP"
            onChange={()=>{setNumAllowed((prev)=>!prev);
            }}/>
            <label htmlFor="numberIp">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={charAllowed}
            id="numberIP"
            onChange={()=>{setCharAllowed((prev)=>!prev);
            }}/>
            <label htmlFor="numberIp">Characters</label>
          </div>
           
        </div>
      </div>
    </>
  )
}

export default App
