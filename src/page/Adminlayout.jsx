import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../components/context/Authcontact";

const  Adminlayout= () => {
  const navigate = useNavigate();
  const [user,setuser] = useState([]);
  console.log(user);
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {login} = useContext(Authcontext);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    setError("");
    try {
      const response = await fetch("http://localhost:8000/api/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data.name);
      console.log(response);

      

      
      if (data.status == 200) {
        setuser(data)
        const info = {
          token: data.token,
          id:data.id,
          email:data.email,
          name: data.name
        }
        
        login(info)
      navigate("/admin/dashboard")
        localStorage.setItem("token",JSON.stringify(info));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="vh-100 mt-5" style={{background:"white"}}>
      <div className="container  h-100 mt-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10 ">
            <div className="card " style={{ borderRadius: "1rem", border: "1px solid #ddd", padding:"20px" ,marginTop:"30px",background:"white",width:"100%",marginLeft:"0px"}}>
              
               
                  <div className="card-body p-4 p-lg-5 text-black ms-5">
                    <form onSubmit={handleSubmit} className="ms-5">
                  

                      <h1 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                        login
                      </h1>

                      <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="username">
                          email
                        </label>
                        <input
                          type="email"
                          id="username"
                          name="email"
                          className="form-control bg-white form-control-lg"
                          value={formData.email}
                          onChange={handleChange}
                        />
                       
                      </div>

                      <div className="form-outline mb-4 w-100">
                      <label className="form-label" htmlFor="username">
                          password
                        </label>
                        
                        
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control bg-white form-control-lg"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      
                      </div>

                      <div className="pt-1 mb-4">
                        <button className="btn  w-100 btn-lg btn-block " style={{background:"blue",width:"200px"}} type="submit">
                          Login
                        </button>
                      </div>

                      {error && <div className="alert alert-danger">{error}</div>}

                  
                    </form>
                  </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adminlayout;