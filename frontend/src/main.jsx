import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'
import App from './App.jsx'
import ShopContextprovider from './components/context/Shopcontext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Authcontextprovied } from './components/context/Authcontact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Authcontextprovied>
    <ShopContextprovider>
    <App />
    </ShopContextprovider>
    </Authcontextprovied>
    </BrowserRouter>
  </StrictMode>,
)
