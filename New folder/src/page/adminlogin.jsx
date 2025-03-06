import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [Error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError("All fields are required");
      return;
    }

  
    // If no errors
    setError("");
    try {
      const respone = await fetch("http://localhost:4000/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(formData)
      })
      const data = await respone.json()
      if(respone.ok){
         // Extracting only necessary fields from the response
         const { _id, name } = data.user;
         // Storing user details as a JSON string
         localStorage.setItem("auth", JSON.stringify({ _id, name }));
        window.location.replace("/admin/dashboard")
      }
    } catch (error) {
      console.log(error.meesage);
      
    }
    // Proceed with login action, e.g., redirect or fetch user data
  };

  return (
    <>
      <form className="login" onSubmit={handleSubmit}>
      <h1>Login</h1>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="w-50"
          value={formData.password}
          onChange={handleChange}
        />
        <button>Login</button>
        {Error && <p style={{ color: "red" }}>{Error}</p>}
      </form>
    </>
  );
};

export default Login;
