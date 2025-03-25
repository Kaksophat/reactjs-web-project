import { useContext, useState } from "react";
import { Authcontext } from "./context/Authcontact";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShopContext } from "./context/ShopContext";

const Checkout = () => {
  const { cartitems, shipping, subtotal, grandtotal, api, clearCart } =
    useContext(ShopContext);
  const { customer } = useContext(Authcontext);

  const navigate = useNavigate();

  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    mobile: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    let valid = true;

    Object.keys(formdata).forEach((field) => {
      if (!formdata[field]) {
        errors[field] = `${field} is required.`;
        valid = false;
      }
    });

    setFormErrors(errors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  console.log("cart", cartitems);
  console.log(formdata);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const newformdata = {
        ...formdata,
        customer_id: customer.id,
        subtotal: subtotal(),
        grand_total: grandtotal(),
        shipping: shipping(),
        payment_status: "not paid",
        status: "pending",
        cart: cartitems,
      };
      console.log(newformdata);

      const respones = await fetch(`${api}order`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newformdata),
      });

      const data = await respones.json();
      if (data.status == 200) {
        toast.success("your place order has been success");
        localStorage.removeItem(`cart_${customer.id}`);
        clearCart();
        navigate(`/comfirmorder/${data.id}`);
      } else {
        console.log("error order");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <ToastContainer />
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
              <h1 className="page-title">Checkout page</h1>
              <div className="breadcrumbs">
                <span className="item">
                  <a href="index.html">Home /</a>
                </span>
                <span className="item">Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-7">
            <h2>Billing Details</h2> <hr />
            <form style={{ color: "black" }} onSubmit={handleSubmit}>
              <div className="row" style={{ color: "black" }}>
                <div className="col-md-6 mb-3">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formdata.name}
                    onChange={handleChange}
                    className="form-control"
                    style={{ width: "100%" }}
                  />
                  {formErrors.name && (
                    <p style={{ color: "red" }}>{formErrors.name}</p>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formdata.email}
                    onChange={handleChange}
                    className="form-control"
                    style={{ width: "100%" }}
                  />
                  {formErrors.email && (
                    <p style={{ color: "red" }}>{formErrors.email}</p>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label>Address</label>
                <textarea
                  name="address"
                  value={formdata.address}
                  onChange={handleChange}
                  className="form-control"
                  cols={80}
                ></textarea>
                {formErrors.address && (
                  <p style={{ color: "red" }}>{formErrors.address}</p>
                )}
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formdata.city}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.city && (
                    <p style={{ color: "red" }}>{formErrors.city}</p>
                  )}
                </div>
                <div className="col-md-4 mb-3">
                  <label>State</label>
                  <input
                    type="text"
                    name="state"
                    value={formdata.state}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.state && (
                    <p style={{ color: "red" }}>{formErrors.state}</p>
                  )}
                </div>
                <div className="col-md-4 mb-3">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    name="zip"
                    value={formdata.zip}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {formErrors.zip && (
                    <p style={{ color: "red" }}>{formErrors.zip}</p>
                  )}
                </div>
              </div>
              <div>
                <label>Mobile</label>
                <input
                  type="text"
                  name="mobile"
                  value={formdata.mobile}
                  onChange={handleChange}
                  className="form-control"
                />
                {formErrors.mobile && (
                  <p style={{ color: "red" }}>{formErrors.mobile}</p>
                )}
              </div>
              <button
                type="submit"
                className="btn "
                style={{
                  color: "white",
                  background: "blue",
                  borderRadius: "10px",
                }}
              >
                Proceed to Payment
              </button>
            </form>
          </div>
          <div className="col-md-5" style={{ color: "black" }}>
            <h2>Order Summary</h2> <hr />{" "}
            <div className="card p-3 text-black">
              <div
                className="d-flex justify-content-between text-black"
                style={{ flexDirection: "column", gap: "5px" }}
              >
                {cartitems &&
                  cartitems.map((item) => {
                    return (
                      <div
                        className="d-flex justify-content-between "
                        key={item.id}
                        style={{ gap: "20px" }}
                      >
                        <div className="w-50 h-50">
                          <img
                            src={item.image}
                            alt=""
                            style={{ width: "130px" }}
                          />
                        </div>
                        <div>
                          <p>{item.title}</p>{" "}
                          <div className="d-flex" style={{ gap: "15px" }}>
                            <p>${item.price}</p> <p>x{item.quantity}</p>{" "}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Subtotal</strong> <strong>${subtotal()}</strong>{" "}
              </div>
              <hr />
              <div
                className="d-flex justify-content-between"
                style={{ color: "black" }}
              >
                <strong style={{ color: "black" }}>Shipping</strong>{" "}
                <strong>${shipping()}</strong>{" "}
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Grand Total</strong> <strong>${grandtotal()}</strong>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
