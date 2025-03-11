import { Routes ,Route} from "react-router-dom"
import Header from "./header"
import AdminDashboard from "../AdminDashboard"
import Adminproduct from "../Adminproduct"
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
     </Routes>
        </div>
    </>
  )
}

export default Adminroute