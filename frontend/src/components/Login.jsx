import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "./context/Authcontact";
import { ShopContext } from "./context/Shopcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { customerlogin } = useContext(Authcontext);
  const { api } = useContext(ShopContext);
  const navigate = useNavigate();

  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setformdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const errors = { email: "", password: "" };

    if (!formdata.email) {
      errors.email = "Email is required.";
      valid = false;
    } 
    if (!formdata.password) {
      errors.password = "Password is required.";
      valid = false;
    } 

    setFormErrors(errors);
    return valid;
  };

  const userlogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; 
    }

    try {
      const response = await fetch(`${api}customer/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();

      if (data.status === 200) {
        toast.success("Login Successful!")
        const customerinfo = {
          token: data.token,
          name: data.data.name,
          email: data.data.email,
          id:data.data.id
        };

        customerlogin(customerinfo);
        navigate("/");
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
    <ToastContainer/>
      <section
        className="site-banner jarallax min-height300 padding-large"
        style={{
          background: "url(images/hero-image.jpg) no-repeat",
          backgroundPosition: "top",
          marginTop: "200px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">Login page</h1>
              <div className="breadcrumbs">
                <span className="item">
                  <a href="index.html">Home /</a>
                </span>
                <span className="item">Login</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Login</h2>

          <form onSubmit={userlogin}>
            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="email"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formdata.email}
                onChange={handlechange}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: formErrors.email || error ? "1px solid red" : "1px solid #ccc",
                }}
                placeholder="Enter your email"
              />
              {formErrors.email && (
                <p style={{ color: "red", fontSize: "0.875rem" }}>
                  {formErrors.email}
                </p>
              )}
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="password"
                style={{ display: "block", marginBottom: "0.5rem" }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formdata.password}
                onChange={handlechange}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: formErrors.password || error ? "1px solid red" : "1px solid #ccc",
                }}
                placeholder="Enter your password"
              />
              {formErrors.password && (
                <p style={{ color: "red", fontSize: "0.875rem" }}>
                  {formErrors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "0.75rem",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Login
            </button>
          </form>

          {error && (
            <strong style={{ color: "red", textAlign: "center", display: "block", marginTop: "1rem" }}>
              {error}
            </strong>
          )}

          <p style={{ textAlign: "center", marginTop: "1rem" }}>
            Dont have an account? <Link to="/register">Register here</Link>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
