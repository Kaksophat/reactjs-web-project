
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./header";
import AdminDashboard from "../AdminDashboard";
import Adminproduct from "../Adminproduct";
import Admineditproduct from "../Admineditproduct";
import Category from "../Category";
import Brand from "../Brand";
import { Authrequird } from "../Authrequird";
const Adminroute = () => {
  return (
    <div>
      <div className="content">
        <div>
          <Header/>
        </div>
        <Routes>
        <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={

            <Authrequird>
            <AdminDashboard/>
            </Authrequird>

            } />
          <Route path="product" element={<Adminproduct />} />
          <Route path="product/:id" element={<Adminproduct />} />
          <Route path="product/edit/:id" element={<Admineditproduct />} />
          <Route path="category" element={<Category/>}/>
          <Route path="brand" element={<Brand/>}/>
          <Route path="brand/edit/:id" element={<Brand/>}/>
        </Routes>
      
      
    </div>
    </div>
  
  );
};

export default Adminroute;
