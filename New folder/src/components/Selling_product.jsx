import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/Shopcontext";
import { Authcontext } from "./context/Authcontact";

const Selling_product = () => {
  const [product, setProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addtocart } = useContext(ShopContext);
   const { user } = useContext(Authcontext);
    const [categorylist, setcategorylist] = useState([]);
    console.log(categorylist);
    
    console.log(user.token);


  useEffect(() => {
    fetch("http://localhost:8000/api/sellerproduct")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json.product);
      })
      .catch((error) => console.error("Fetch error:", error));
      const category = async () => {
        const respones = await fetch("http://localhost:8000/api/category", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${user.token} `,
          },
        });
  
        const data = await respones.json();
        if (data.status == 200) {
          setcategorylist(data.data);
        }
      };
  
      category();
      
  },[ user.token]);

  const filteredProducts = 
    selectedCategory === "all"
      ? product
      : product.filter((item) => item.category_id === selectedCategory);

  const handleTabClick = (categoryId) => {
    setSelectedCategory(categoryId);
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
  
            {categorylist.map((category) => (
              <li
                key={category.id}
                onClick={() => handleTabClick(category.id)}
                className={`tab ${selectedCategory === category.id ? "active" : ""}`}
              >
                {category.name}
              </li>
            ))}
             

      
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
                      src={item.image_url}
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
                        onClick={()=> addtocart(item.id)}
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