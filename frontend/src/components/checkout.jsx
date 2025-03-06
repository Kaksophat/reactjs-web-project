// BillingAddress.js
import  { useContext, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { ShopContext } from "./context/Shopcontext";
import { CiCircleRemove } from "react-icons/ci";


const  Checkout = () => {
      const { all_product, cartitems, removecart, gettotalcart } = useContext(ShopContext);
      const handlePaymentSuccess = (details) => {
        alert(`Transaction completed by ${details.payer.name.given_name}`);
        // Here, you can handle further backend operations like saving transaction details
      };
    
    
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Billing Address Submitted:", formData);
  };

  return (
    <>
    <section className="site-banner jarallax min-height300 padding-large" style={{background: 'url(images/hero-image.jpg) no-repeat', backgroundPosition: 'top'}}>
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
    <div className="billing-address" style={{marginLeft:"500px"}}>
      <h2>Billing Address</h2>
      <form onSubmit={handleSubmit} className="billing-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="zip">Zip Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    <h3 style={{marginLeft:"100px"}}>Your Oder</h3>
    <div className="cartitem">
        <div className="cartitem-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {all_product.map((e) => {
          if (cartitems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitem-format cartitem-format-main">
                  <img src={e.image} alt="" className="carticon-product-icon" />
                  <p>{e.title}</p>
                  <p>${e.price}</p>
                  <p>${e.price * cartitems[e.id]}</p>
                  <CiCircleRemove onClick={() => removecart(e.id)} className="removecart" />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}

        <div className="cartitem-total">
          <h1>Cart Total</h1>
          <div className="total">
            <h3>Total</h3>
            <p>${gettotalcart()}</p>
          </div>

          {/* PayPal Payment Button */}
          <PayPalScriptProvider options={{ "client-id": "AU-rEuN_1FSpzim5y_HNQZv9-yFGHAroZG8oS_7W8M6e49bjQL2faFDqqvdDKnXKKHi9ien1D1tdnHw9" }}>
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: gettotalcart(), // Total cart value
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  handlePaymentSuccess(details);
                });
              }}
              onError={(err) => {
                console.error("PayPal Checkout Error", err);
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </>
     
  );
};

export default Checkout;
