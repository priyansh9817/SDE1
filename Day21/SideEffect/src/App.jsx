import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Components/UsestatesPractice'
import Profile from './Components/UseEffect'
import Loder from './Components/LoadingError'
import { UserProvider } from './context/userprovide'

function App() {

  return (
    <>
     {/* <Form></Form> */}
     {/* <Profile></Profile> */}
     <UserProvider><Loder></Loder></UserProvider>
     
    </>
  )
}

export default App
