import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from "./Contact";
import Footer from './Footer';
import Shop from './Shop'
import Displayproduct from './Displayproduct';
import Cart from './Cart';

const Customeroute = () => {
  return (
    <>
       <div>
        <Navbar/>
       </div>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/:productid' element={<Displayproduct/>}/>
        <Route path='/cart' element={<Cart/>}/>

       </Routes>
       <div>
       <Footer />

       </div>
    </>
  )
}

export default Customeroute