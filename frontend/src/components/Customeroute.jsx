import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from "./Contact";
import Footer from './Footer';
import Shop from './Shop'
import Displayproduct from './Displayproduct';
import Cart from './Cart';
import Checkout from './checkout';
import About from './About';
import Login from './Login';
import MyAccount from './Myaccount';
import { Customerrequird } from './Customerrequird';
import MyAccountroute from './MyAccountroute';
import Comfirmorder from './Comfirmorder';
import FavCart from './FavCart';

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
        <Route path='/favorite' element={<FavCart/>}/>
        <Route path='/checkout' element={
          <Customerrequird>
          <Checkout/>
          </Customerrequird>
          } />
           <Route path='/comfirmorder/:id' element={
          <Customerrequird>
          <Comfirmorder/>
          </Customerrequird>
          } />

          <Route path='/about' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          
        
      <Route 
          path='/myaccount/*' 
          element={
            <Customerrequird>
              <MyAccountroute/>
            </Customerrequird>
          }
        />
          
        
       </Routes>
       <div>
       <Footer />

       </div>
    </>
  )
}

export default Customeroute