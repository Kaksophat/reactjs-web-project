import { useContext, useState } from "react";
import { Authcontext } from "../components/context/Authcontact";
import { ShopContext } from "../components/context/Shopcontext";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Adminlogin = () => {
  const { login } = useContext(Authcontext);
  const { api } = useContext(ShopContext);
  const navigate = useNavigate();
  
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handlechange = (e) => {
    setformdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };
console.log(formdata);

  const adminlogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${api}login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();
      console.log("user",data);
      

      if (data.status === 200) {
       
      
     
        const customerinfo = {
          token: data.token,
          name: data.data.name,
          email: data.data.email,
          id: data.id,
        }
        


        login(customerinfo);
        console.log(data.token);
        
        navigate("/admin/dashboard");
      } else {
        setError(data.message || "Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <div className="container-fluid d-flex min-vh-100 justify-content-center align-items-center bg-dark">
        <div className="container bg-white p-4 rounded w-25">
          <h1 className="text-center text-dark">Login</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={adminlogin}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={formdata.email}
                onChange={handlechange}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={formdata.password}
                onChange={handlechange}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Adminlogin;
