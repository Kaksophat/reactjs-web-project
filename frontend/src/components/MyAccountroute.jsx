import { Route, Routes,  } from "react-router-dom";
import MyAccount from "./Myaccount";
import Accountprofile from "./Accountprofile";
import hero from "../../public/images/hero-image.jpg"
import Order from "./Order"
import Orderdetails from "./Orderdetails";

const MyAccountroute = () => {


  return (
    <>
    
      
    <section
        className="site-banner jarallax min-height300 padding-large w-100"  
        style={{
          background: `url(${hero}) no-repeat`,
          backgroundPosition: 'top',
          marginTop: '200px',
          width:"100%"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">My Account</h1>
              <div className="breadcrumbs">
                <span className="item">
                  <a href="#">Home /</a>
                </span>
                <span className="item">My Account</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
   
      <h2 className="text-center mb-4">My Account</h2>
      <div className="row">
        
          <MyAccount />
        
        <Routes>
          <Route path="profile" element={<Accountprofile />} />
          <Route path="order" element={<Order />} />
          <Route path="order/:id" element={<Orderdetails/>} />
        </Routes>
      </div>
      </div>
      
   
      
    </>
  );
};

export default MyAccountroute;
