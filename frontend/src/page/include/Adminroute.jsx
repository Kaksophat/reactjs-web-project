import { Routes ,Route} from "react-router-dom"
import Header from "./header"
import AdminDashboard from "../AdminDashboard"
const Adminroute = () => {
  return (
    <>
        <div className="content">

     <div>
        <Header/>

     </div>
     <Routes>
      <Route path='/dashboard' element={<AdminDashboard/>}/>
     </Routes>
        </div>
    </>
  )
}

export default Adminroute