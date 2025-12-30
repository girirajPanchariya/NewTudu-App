import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import TudoProvider from './Context/TudoProvider.jsx'

createRoot(document.getElementById('root')).render(
  
  
    <BrowserRouter>
    <TudoProvider>

    <App />
    </TudoProvider>
    </BrowserRouter>
  
)
