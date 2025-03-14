import { Routes ,Route} from "react-router-dom"
import Header from "./header"
import AdminDashboard from "../AdminDashboard"
import Adminproduct from "../Adminproduct"
import Admineditproduct from "../Admineditproduct"
const Adminroute = () => {
  return (
    <>
        <div className="content">

     <div>
        <Header/>

     </div>
     <Routes>
      <Route path='/dashboard' element={<AdminDashboard/>}/>
      <Route path="/product" element={<Adminproduct/>}/>
      <Route path="/product/edit/:id" element={<Admineditproduct/>}/>
      <Route path="/product/:id" element={<Adminproduct/>}/>
     </Routes>

        </div>
        <Routes>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/product" element={<Adminproduct />} />
        </Routes>
      
    </>
  );
};

export default Adminroute;
