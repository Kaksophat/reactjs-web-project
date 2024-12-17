import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/Shopcontext";

const Selling_product = () => {
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const {  addtocart } = useContext(ShopContext);


  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        console.log(json);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  const filteredProducts = 
    selectedCategory === "all"
      ? product
      : product.filter((item) => {
          if (selectedCategory === "jewelery") {
            return item.category === "jewelery";
          }
          if (selectedCategory === "men's clothing") {
            return item.category === "men's clothing";
          }
          if (selectedCategory === "electronics") {
            return item.category === "electronics";
          }
          return false;
        });

  const handleTabClick = (category) => {
    setSelectedCategory(category);
    console.log("Selected category:", category);
  };

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
          <ul className="tabs list-unstyled">
            <li
              onClick={() => handleTabClick("all")}
              className={`tab ${selectedCategory === "all" ? "active" : ""}`}
            >
              All
            </li>
  
            <li
              onClick={() => handleTabClick("men's clothing")}
              className={`tab ${selectedCategory === "men's clothing" ? "active" : ""}`}
            >
              men&apos;s clothing
            </li>
            <li
              onClick={() => handleTabClick("jewelery")}
              className={`tab ${selectedCategory === "jewelery" ? "active" : ""}`}
            >
              jewelery
              </li>
              <li
              onClick={() => handleTabClick("electronics")}
              className={`tab ${selectedCategory === "electronics" ? "active" : ""}`}
            >
              electronics
              </li>

      
          </ul>
          <div className="tab-content">
            <div className="row d-flex flex-wrap">
              {filteredProducts.map((item) => (
                <div
                  className="product-item col-lg-3 col-md-6 col-sm-6"
                  key={item.id}
                  style={{ height: "600px" }}
                >
                  <div className="image-holder">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="product-image"
                      style={{ height: "400px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
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
                      <button type="button" className="wishlist-btn"  onClick={()=> addtocart(product.id)}>
                        <i className="icon icon-heart" />
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="single-product.html">{item.title}</a>
                    </h3>
                    <div className="item-price text-primary">
                      ${item.price.toFixed(2)}
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