import { useContext, useState } from "react";
import { ShopContext } from "./context/Shopcontext";
import { Link } from "react-router-dom";


const Shop = () => {
    const {all_product,addtocart} = useContext(ShopContext)
  const [selectedCategory, setSelectedCategory] = useState("all");
  // const { productid } = useParams();
  // const product = all_product.find((e) => e.id === Number(productid));
  

    const filteredProducts = 
    selectedCategory === "all"
      ? all_product
      : all_product.filter((item) => {
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
       <section className="site-banner jarallax min-height300 padding-large" style={{background: 'url(images/hero-image.jpg) no-repeat', backgroundPosition: 'top'}}>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="page-title">Shop page</h1>
        <div className="breadcrumbs">
          <span className="item">
            <a href="index.html">Home /</a>
          </span>
          <span className="item">Shop</span>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="shopify-grid padding-large">
  <div className="container">
    <div className="row">
      <section id="selling-products" className="col-md-9 product-store">
        <div className="container">
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
                  className="product-item col-lg-4 col-md-6 col-sm-6"
                  key={item.id}
                  style={{ height: "600px" }}
                >
                  <div className="image-holder">
                  <Link to={`/shop/${item.id}`}> <img
                      src={item.image}
                      alt={item.title}
                      className="product-image"
                      style={{ height: "400px", objectFit: "contain" }}
                    />
                    </Link> 
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                        onClick={() => { addtocart(item.id) }}
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
                      <button type="button" className="wishlist-btn">
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
        <aside className="col-md-3">
  <div className="sidebar">
    <div className="widgets widget-menu">
      <div className="widget-search-bar">
        <form role="search" method="get" className="d-flex">
          <input className="search-field" placeholder="Search" type="text" />
          <button className="btn btn-dark"><i className="icon icon-search" /></button>
        </form>
      </div> 
    </div>
    <div className="widgets widget-product-tags">
      <h5 className="widget-title">Tags</h5>
      <ul className="product-tags sidebar-list list-unstyled">
        <li className="tags-item">
          <a href>White</a>
        </li>
        <li className="tags-item">
          <a href>Cheap</a>
        </li>
        <li className="tags-item">
          <a href>Branded</a>
        </li>
        <li className="tags-item">
          <a href>Modern</a>
        </li>
        <li className="tags-item">
          <a href>Simple</a>
        </li>
      </ul>
    </div>
    <div className="widgets widget-product-brands">
      <h5 className="widget-title">Brands</h5>
      <ul className="product-tags sidebar-list list-unstyled">
        <li className="tags-item">
          <a href>Nike</a>
        </li>
        <li className="tags-item">
          <a href>Adidas</a>
        </li>
        <li className="tags-item">
          <a href>Puma</a>
        </li>
        <li className="tags-item">
          <a href>Spike</a>
        </li>
      </ul>
    </div>
    <div className="widgets widget-price-filter">
      <h5 className="widget-title">Filter By Price</h5>
      <ul className="product-tags sidebar-list list-unstyled">
        <li className="tags-item">
          <a href>Less than $10</a>
        </li>
        <li className="tags-item">
          <a href>$10- $20</a>
        </li>
        <li className="tags-item">
          <a href>$20- $30</a>
        </li>
        <li className="tags-item">
          <a href>$30- $40</a>
        </li>
        <li className="tags-item">
          <a href>$40- $50</a>
        </li>
      </ul>
    </div>
  </div>
</aside>

  </div>      
</div>
</div>


</>

  )
}

export default Shop