import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from "./Contact";
import Footer from './Footer';
import Shop from './Shop'
import Displayproduct from './Displayproduct';
import Cart from './Cart';
<<<<<<< HEAD
import Checkout from './checkout';
=======
import About from './About';
>>>>>>> 3c1f1bc5e9ab275ac282947d0edf909a921a45ce

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
<<<<<<< HEAD
        <Route path='/checkout' element={<Checkout/>} />

=======
          <Route path='/about' element={<About/>}/>
>>>>>>> 3c1f1bc5e9ab275ac282947d0edf909a921a45ce
       </Routes>
       <div>
       <Footer />

       </div>
    </>
  )
}

export default Customeroute