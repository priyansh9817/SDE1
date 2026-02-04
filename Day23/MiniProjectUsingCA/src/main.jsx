import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Themeprovider } from './Context/Theam.jsx'
import { AuthProvider } from './Context/Authcontext.jsx'
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Themeprovider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </Themeprovider>
  </StrictMode>,
)
