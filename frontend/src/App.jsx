import { Routes, Route} from 'react-router-dom';
// import Navbar from './components/Navbar';


import AdminLayout from './page/Adminlayout';
import AdminDashboard from './page/AdminDashboard';
import Customeroute from './components/Customeroute';
import { Authrequird } from './page/Authrequird';
import Admincategory from './page/Admincategory';
import Adminproduct from './page/product/Adminproduct';
import Editeproduct from './page/product/Edite';


const App = () => {
  // const location = useLocation();

  // // Define routes where Navbar and Footer should not appear
  // const hideNavbarFooter = location.pathname.startsWith('/admin') &&  location.pathname.startsWith('/admin/dashboard');

  return (
    <>
      <Routes>
        {/* Public Routes */}
  
       <Route path='/*' element={
        <Customeroute/>}/>
      

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}/>
        <Route path='/admin/dashboard' element={
          <Authrequird>
            <AdminDashboard/>
          </Authrequird>
        } />
          <Route path='/admin/category' element={
          <Authrequird>
            <Admincategory/>
          </Authrequird>
        } />

         <Route path='/admin/product' element={
          <Authrequird>
            <Adminproduct/>
          </Authrequird>
        } />
           <Route path='/admin/product/edit/:productid' element={
          <Authrequird>
            <Editeproduct/>
          </Authrequird>
        } />


          

         
        </Routes>
    </>
  );
};

export default App;
