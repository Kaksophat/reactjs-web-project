
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./header";
import AdminDashboard from "../AdminDashboard";
import Adminproduct from "../Adminproduct";
import Category from "../Category";
import Brand from "../Brand";
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
            <AdminDashboard/>
            } />
          <Route path="product" element={<Adminproduct />} />
          <Route path="category" element={<Category/>}/>
          <Route path="brand" element={<Brand/>}/>
        </Routes>
      
      
    </div>
    </div>
  
  );
};

export default Adminroute;
