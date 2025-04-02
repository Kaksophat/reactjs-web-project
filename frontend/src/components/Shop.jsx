import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShopContext } from "./context/ShopContext";
import "./display.css";

const Shop = () => {
  const { addtocart, api } = useContext(ShopContext);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [products, setProducts] = useState([]);
  const handleTabClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredProducts = products.filter((item) => {
    const categoryMatch = selectedCategory === "all" || item.category_id === selectedCategory;
    const brandMatch = selectedBrand === "all" || item.brand_id === selectedBrand;
      if (selectedBrand === "all") {
        return categoryMatch;      
      }
    return categoryMatch && brandMatch;
  });
  
  
  console.log(filteredProducts);
  



  const handleBrandClick = (brandId) => {
    setSelectedBrand(brandId);
  };
  console.log(selectedBrand);
  

  const handleAddToCart = (item) => {
    addtocart(item,"cart");
  };
  const handleAddToFav = (item) => {
    addtocart(item,"favorite");
  };
  const getProducts = async () => {
 
    try {
      const response = await fetch(`${api}customer/products`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (data.status === 200) {
        setProducts(data.products);

        const categories = Array.from(new Set(data.products.map((item) => item.category_id)))
          .map((id) => {
            const category = data.category.find((cat) => cat.category.id === id)?.category;
            return category && category.status !== 0  ? { id: category.id, name: category.name } : null;
          })
          .filter(Boolean);

        const brands = Array.from(new Set(data.products.map((item) => item.brand_id)))
          .map((id) => {
            const brand = data.brand.find((cat) => cat.brand.id === id)?.brand;
            return brand && brand.status !== 0 ? { id: brand.id, name: brand.name } : null;
          })
          .filter(Boolean);

        setCategoryList(categories);
        setBrandList(brands);
      } else {
        toast.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("An error occurred while fetching products");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ToastContainer />
      <section
        className="site-banner jarallax min-height300 padding-large"
        style={{
          background: "url(images/hero-image.jpg) no-repeat",
          backgroundPosition: "top",
          marginTop: "200px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">Shop Page</h1>
              <div className="breadcrumbs">
                <span className="item">
                  <Link to="/">Home /</Link>
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
                    style={{ color: selectedCategory === "all" ? "blue" : "black" }}
                  >
                    All
                  </li>
                  {categoryList.map((category) => (
                    <li
                      key={category.id}
                      onClick={() => handleTabClick(category.id)}
                      className={`tab ${selectedCategory === category.id ? "active" : ""}`}
                      style={{ color: selectedCategory === category.id ? "blue" : "black" }}
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>

                <div className="tab-content">
                  <div className="row d-flex flex-wrap">
                    {filteredProducts.map((item) => (
                      <div className="product-item col-lg-4 col-md-6 col-sm-6" key={item.id}>
                        <div className="image-holder">
                          <Link to={`/shop/${item.id}`}>
                            <img
                              src={item.image_url}
                              alt={item.title}
                              className="product-image"
                              style={{ height: "400px", objectFit: "cover" }}
                            />
                          </Link>
                        </div>
                        <div className="cart-concern">
                          <div className="cart-button d-flex justify-content-between align-items-center">
                            <button
                              type="button"
                              className="btn-wrap cart-link d-flex align-items-center"
                              onClick={() => handleAddToCart(item)}
                            >
                              Add to Cart <i className="icon icon-arrow-io" />
                            </button>
                            <button
                              type="button"
                              className="view-btn tooltip d-flex"
                              aria-label="Quick view"
                            >
                              <i className="icon icon-screen-full" />
                              <span className="tooltip-text">Quick view</span>
                            </button>
                            <button type="button" className="wishlist-btn" >
                              <i className="icon icon-heart" onClick={()=>handleAddToFav(item)}/>
                            </button>
                          </div>
                        </div>
                        <div className="product-detail">
                          <h3 className="product-title">
                            <Link to={`/shop/${item.id}`}>{item.title}</Link>
                          </h3>
                          <div className="item-price text-primary">${item.price}</div>
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
                      <input
                        className="search-field"
                        placeholder="Search"
                        type="text"
                      />
                      <button className="btn btn-dark">
                        <i className="icon icon-search" />
                      </button>
                    </form>
                  </div>
                </div>

                <div className="widgets widget-product-tags">
                  <h5 className="widget-title">Tags</h5>
                  <ul className="product-tags sidebar-list list-unstyled">
                    <li className="tags-item">White</li>
                    <li className="tags-item">
                      <a href="#">Cheap</a>
                    </li>
                    <li className="tags-item">
                      <a href="#">Branded</a>
                    </li>
                    <li className="tags-item">
                      <a href="#">Modern</a>
                    </li>
                    <li className="tags-item">
                      <a href="#">Simple</a>
                    </li>
                  </ul>
                </div>

                <div className="widgets widget-product-brands">
                  <h5 className="widget-title">Brands</h5>
                  <ul className="product-tags sidebar-list list-unstyled">
                    <li
                      onClick={() => handleBrandClick("all")}
                      className={`tags-item ${selectedBrand === "all" ? "active" : ""}`}
                    >
                      All
                    </li>
                    {brandList.map((brand) => (
      <li
        key={brand.id}
        onClick={() => handleBrandClick(brand.id)}
        className={`tags-item ${selectedBrand === brand.id ? "active" : ""}`}
        style={{ color: selectedBrand === brand.id ? "blue" : "black" }}
      >
        {brand.name}
      </li>
    ))}
                  </ul>
                </div>

                <div className="widgets widget-price-filter">
                  <h5 className="widget-title">Filter By Price</h5>
                  <ul className="product-tags sidebar-list list-unstyled">
                    <li className="tags-item">
                      <a href="#">Less than $10</a>
                    </li>
                    <li className="tags-item">
                      <a href="#">$10 - $20</a>
                    </li>
                    <li className="tags-item">
                      <a href="#">$20 - $30</a>
                    </li>
                    <li className="tags-item">
                      <a href="#">$30 - $40</a>
                    </li>
                    <li className="tags-item">
                      <a href="#">$40 - $50</a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;