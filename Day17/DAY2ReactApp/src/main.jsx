import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Apps from './Components/01Props'
import Greet from './Components/02Props'
import User from './Components/03Props'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Apps/>   {/* This is for Props learning*/}
    <Greet></Greet>
    <User></User>
  </StrictMode>,
)
