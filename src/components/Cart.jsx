import { useContext } from "react";
import { ShopContext } from "./context/Shopcontext";
import { CiCircleRemove } from "react-icons/ci";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Cart = () => {
  const { all_product, cartitems, removecart, gettotalcart } = useContext(ShopContext);

  const handlePaymentSuccess = (details) => {
    alert(`Transaction completed by ${details.payer.name.given_name}`);
    // Here, you can handle further backend operations like saving transaction details
  };

  return (
    <>
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

export default Cart;
