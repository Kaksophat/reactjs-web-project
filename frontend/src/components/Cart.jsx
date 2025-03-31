import { useContext } from "react";
import { ShopContext } from "./context/Shopcontext";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartitems ,shipping,subtotal,grandtotal,removeitem} = useContext(ShopContext);
  console.log("cart",cartitems);
  
  return (
    <>
      <section className="site-banner jarallax min-height300 padding-large" style={{background: 'url(images/hero-image.jpg) no-repeat', backgroundPosition: 'top',marginTop:'200px'}}>
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
              {
              cartitems && cartitems.map(item =>{
                       return (

                        <div key={item.id}>
                          <div className="cartitem-format cartitem-format-main">
                            <div style={{width:"100px"}}>
                            <img src={item.image} alt=""   style={{width:"100px"}}/>
                            </div>
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                            <p>{item.quantity}</p>
                            <CiCircleRemove  className="removecart" onClick={()=>removeitem(item.product_id)} />
                          </div>
                          <hr />
                        </div>
                      );
             })
          
        
          } 
          

        <div className="cartitem-total" style={{color:"black"}}>
          <h1>Cart Total</h1>
          <div className="d-flex "style={{color:"black",gap:"150px"}}>
                            <strong>Subtotal</strong>
                            <strong>${subtotal()}</strong>
                        </div>
                        <hr style={{width:"300px"}}/>

                        <div className="d-flex " style={{color:"black",gap:"150px"}}>
                            <strong style={{color:"black"}}>Shipping</strong>
                            <strong>${shipping()}</strong>
                        </div>
                        <hr style={{width:"300px"}}/>

                        <div className="d-flex "style={{color:"black",gap:"130px"}}>
                            <strong>Grand Total</strong>
                            <strong>${grandtotal()}</strong>
                        </div>
                        <hr style={{width:"300px"}}/>


          
      <Link to={"/checkout"}>   <button className="btn btn-danger">Proceed to checkout</button> </Link> 

          
        </div>
      </div>
    </>
  );
};

export default Cart;
