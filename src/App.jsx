// import './App.css'

import Home from "./components/Home"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Shop from "./components/Shop"
import Displayproduct from "./components/Displayproduct"
import Cart from "./components/Cart"
import About from "./components/About"
import Contact from "./components/Contact"




function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path='/shop/:productid' element={<Displayproduct/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/cart" element={<Cart/>}/>
     </Routes>
      
       <Footer/>
    </BrowserRouter>



    </>
  )
}

export default App
