import { useContext,  } from "react";
import { Authcontext } from "./context/Authcontact";
import { Link } from "react-router-dom";

const MyAccount = () => {
  const {customerlogout} = useContext(Authcontext)

 

  return (
    <>
     
   
          {/* Sidebar */}
          <div
            className="col-md-2"
            style={{
                backgroundColor: "#ffffff", // White background for content area
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                marginRight:"20px"
              }}
          >
            <div className="list-group" style={{ display: "flex", flexDirection: "column" ,alignItems:"center",gap:"20px"}}>
              
               <Link to={"/myaccount/profile"}
                className={`list-group-item list-group-item-action `}
                style={{ background: "white", color: "black" , textDecoration: "none"}}
               >
                    Profile
               </Link>
              
            
              
            <Link to={"/myaccount/order" }className='list-group-item list-group-item-action '
                style={{ background: "white", color: "black" }}
              > 
                
                Orders
              
              </Link> 
              <button
                className='list-group-item list-group-item-action '
                style={{ background: "white", color: "black" }}
              >
                Settings
              </button>
              <button
                className="list-group-item list-group-item-action"
                style={{ background: "white", color: "black" }}
                onClick={()=>customerlogout()}
              >
                Logout
              </button>
            </div>
          </div>

         
          
      
    </>
  );
};

export default MyAccount;
