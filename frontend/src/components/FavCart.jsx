import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./context/Shopcontext";
import { CiCircleRemove } from "react-icons/ci";
import { toast } from "react-toastify";

export default function FavCart() {
  const { cartitems, shipping, subtotal, grandtotal, removeitem,  addtocart} =
    useContext(ShopContext);
  console.log("cart", cartitems);
   const handleAddToCart = (item) => {
      addtocart(item);
      toast.success("Added to cart successfully!");
    };
  return (
    <>
      <section
        className="site-banner jarallax min-height300 padding-large"
        style={{
          background: "url(images/hero-image.jpg) no-repeat",
          backgroundPosition: "top",
          marginTop: "200px",
        }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">Cart page</h1>
              <div className="breadcrumbs">
                <span className="item">
                  <a href="index.html">Home /</a>
                </span>
                <span className="item">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cartitem">
        <div className="cartitem-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Remove</p>
        </div>
        <hr />
        {cartitems &&
          cartitems.map((item) => {
            return (
              <div key={item.id}>
                <div className="cartitem-format cartitem-format-main">
                  <div style={{ width: "100px" }}>
                    <img src={item.image} alt="" style={{ width: "100px" }} />
                  </div>
                  <p>{item.title}</p>
                  <p>${item.price}</p>
                  <p>{item.quantity}</p>
                  <CiCircleRemove
                    className="removecart"
                    onClick={() => removeitem(item.product_id)}
                  />
                </div>
                <hr />
                <Link to={" "}>
                {" "}
                <button className="btn btn-danger" onClick={() => handleAddToCart(item)}>Add to Cart</button>{" "}
              </Link>
              </div>
                
            );
          })}

      
      </div>
    </>
  );
}
