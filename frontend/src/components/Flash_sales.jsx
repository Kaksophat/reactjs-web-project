import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/Shopcontext";


const Flash_sales = () => {
    const [product,setproduct] = useState([])
    const {  addtocart } = useContext(ShopContext);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=4')
        .then(res=>res.json())
        .then(json=>{setproduct(json),console.log(json)})
    },[])
  return (
    <>
      <section id="flash-sales" className="product-store padding-large">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Flash sales</h2>
          </div>
          <div className="swiper product-swiper flash-sales overflow-hidden">
            <div className="swiper-wrapper" >
            {product.map((product)=>(
              <div className="swiper-slide "  style={{width:"350px",marginLeft:"10px",height:"600px"}} key={product.id}>
               
                <div className="product-item" >
                  <img
                    src={product.image}
                    alt="Books"
                    className="product-image" style={{height:"400px"}}
                  />
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                        onClick={()=> addtocart(product.id)}
                      >
                        add to cart <i className="icon icon-arrow-io" />
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                  d-flex"
                      >
                        <i className="icon icon-screen-full" />
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart" />
                      </button>
                    </div>
                  </div>
                  <div className="discount">10% Off</div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">Full sleeve cover shirt</a>
                    </h3>
                    <div className="item-price text-primary">
                      <del className="prev-price">$50.00</del>$40.00
                    </div>
                  </div>
                </div>
               
              </div>
               ))}
           
             
              
             
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Flash_sales;
