import { useContext,  useState } from "react"
import { ShopContext } from "./context/Shopcontext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Featureproduct = () => {
    const {  addtocart,all_product } = useContext(ShopContext);
    // const {addTofav,setfav}=useContext(ShopContext);
    const handleAddToCart = (item) => {
       addtocart(item);
       toast.success("Added to cart successfully!");
     };
     
    //  const handleAddToFav = (item) => {
    //   addTofav(item);
    //   toast.success("Added to cart successfully!");
    // };
  return (
    <>
    <ToastContainer/>
       <section id="featured-products" className="product-store padding-large">
  <div className="container">
    <div className="section-header d-flex flex-wrap align-items-center justify-content-between">
      <h2 className="section-title">Featured Products</h2>            
      <div className="btn-wrap">
        <a href="shop.html" className="d-flex align-items-center">View all products <i className="icon icon icon-arrow-io" /></a>
      </div>            
    </div>
    <div className="swiper product-swiper overflow-hidden">
      <div className="swiper-wrapper" style={{height:"100%",width:"100%"}}>
        {all_product.map((product)=>(
        <div className="swiper-slide" style={{width:"350px",marginLeft:"10px",height:"600px"}} key={product.id}>
          <div className="product-item">
            <div className="image-holder">
            <Link to={`/shop/${product.id}`}> <img src={product.image_url} alt="Books" className="product-image"style={{height:"400px"}}/> </Link>  
             
            </div>
            <div className="cart-concern">
              <div className="cart-button d-flex justify-content-between align-items-center">
                <button type="button" className="btn-wrap cart-link d-flex align-items-center"  onClick={()=> handleAddToCart(product)}>add to cart <i className="icon icon-arrow-io" />
                </button>
                <button type="button" className="view-btn tooltip
                  d-flex">
                  <i className="icon icon-screen-full" />
                  <span className="tooltip-text">Quick view</span>
                </button>
                <button type="button" className="wishlist-btn">
                  <i className="icon icon-heart" />
                </button>
              </div>
            </div>
            <div className="product-detail">
              <h3 className="product-title">
                <a href="single-product.html">{product.title}</a>
              </h3>
              <span className="item-price text-danger">${product.price}</span>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
    <div className="swiper-pagination" />

  </div>
</section>
    </>
  )
}

export default Featureproduct