import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/login'
import Profile from './Components/Profile'


function App() {
  
  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
