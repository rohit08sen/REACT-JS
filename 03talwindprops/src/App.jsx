import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-500 mb-4'>Talwind Test</h1>
      <Card username="Rohit"/>
      <Card  username="Senapati"/>
    </>
  )
}

export default App
