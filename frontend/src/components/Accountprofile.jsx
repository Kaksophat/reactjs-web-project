import { useContext } from 'react';
import { Authcontext } from './context/Authcontact';

const Accountprofile = () => {
      const { customer } = useContext(Authcontext);
    
  return (
    <>
      
    <div
            className="col-md-9"
            style={{
              backgroundColor: "#ffffff", 
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              width:"80%"
            }}
          >
           
              <div className="card">
                <div className="card-header">Profile Information</div>
                <div className="card-body">
                  <h5 className="card-title">Hello, {customer.name}</h5>
                  <p className="card-text">
                    <strong>Email:</strong> {customer.email}
                  </p>
                </div>
              </div>
            

</div>
    </>
  )
}

export default Accountprofile