import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/Shopcontext";

const Selling_product = () => {
  const { addtocart ,api} = useContext(ShopContext);
  const [Products, setProducts] = useState([]);

  const getproduct = async () => {
    try {
      const response = await fetch(`${api}bestSellingProducts`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
      
      if (data.status === 200) {
        setProducts(data.best_selling_products);
      }
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };
     


  useEffect(() => {
    
      getproduct();
  },[]);

 

  return (
    <>
      <section
        id="selling-products"
        className="product-store bg-light-grey padding-large"
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Best selling products</h2>
          </div>
        
          <div className="tab-content">
            <div className="row d-flex flex-wrap">
              {Products.map((item) => (
            
                <div
                  className="product-item col-lg-3 col-md-6 col-sm-6"
                  key={item.id}
                  style={{width:"350px",height:"600px"}}
                >
                  <div className="image-holder">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="product-image"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                        onClick={()=> addtocart(item)}
                      >
                        add to cart <i className="icon icon-arrow-io" />
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip d-flex"
                      >
                        <i className="icon icon-screen-full" />
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn" >
                        <i className="icon icon-heart" />
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">{item.title}</a>
                    </h3>
                    <div className="item-price text-primary">
                      ${item.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Selling_product;