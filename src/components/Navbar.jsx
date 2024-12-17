import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "./context/Shopcontext"
const Navbar = () => {
  const {gettotalcartitem} = useContext(ShopContext)
  return (
    <>
     <header id="header" style={{marginTop:"10px"}}>
  <div id="header-wrap">
    <nav className="secondary-nav border-bottom">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-4 header-contact">
            <p>Lets talk! <strong>+57 444 11 00 35</strong>
            </p>
          </div>
          <div className="col-md-4 shipping-purchase text-center">
            <p>Free shipping on a purchase value of $200</p>
          </div>
          <div className="col-md-4 col-sm-12 user-items">
            <ul className="d-flex justify-content-end list-unstyled">
              <li>
                <a href="login.html">
                  <i className="icon icon-user" />
                </a>
              </li>
              <li>
               <Link to={"/cart"}> <a href="#">
                <div className="cart">
                  <i className="icon icon-shopping-cart" />
                  <div className="cart-count">{gettotalcartitem()}</div>
                  </div>
                  
                </a>
                </Link>
              </li>
              <li>
                <a href="wishlist.html">
                  <i className="icon icon-heart" />
                </a>
              </li>
              <li className="user-items search-item pe-3">
                <a href="#" className="search-button">
                  <i className="icon icon-search" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <nav className="primary-nav padding-small">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-2 col-md-2">
            <div className="main-logo">
             <Link to={"/"}><a href="#">
                {/* <img src="images/main-logo.png" alt="logo" /> */}
                Shop
              </a> </Link> 
            </div>
          </div>
          <div className="col-lg-10 col-md-10">
            <div className="navbar">
              <div id="main-nav" className="stellarnav d-flex justify-content-end right">
                <ul className="menu-list">
                  <li className="menu-item has-sub">
                  <Link to={"/"}><a href="#" className="item-anchor active d-flex align-item-center" data-effect="Home">Home</a> </Link>  
                    <ul className="submenu">
                      <li><a href="index.html" className="item-anchor active">Home</a></li>
                      <li><a href="home2.html" className="item-anchor">Home v2<span className="text-primary"> (PRO)</span></a></li>
                    </ul>
                  </li>
               <li> <Link to={"/about"}><a href="about.html" className="item-anchor" data-effect="About">About</a></Link> </li> 
                  <li className="menu-item has-sub">
                  <Link to={"/shop"}><a href="#" className="item-anchor d-flex align-item-center" data-effect="Shop">Shop</a> </Link>  
                    {/* <ul className="submenu">
                      <li><a href="shop.html" className="item-anchor">Shop</a></li>
                      <li><a href="shop-slider.html" className="item-anchor">Shop slider<span className="text-primary"> (PRO)</span></a></li>
                      <li><a href="shop-grid.html" className="item-anchor">Shop grid<span className="text-primary"> (PRO)</span></a></li>
                      <li><a href="shop-list.html" className="item-anchor">Shop list<span className="text-primary"> (PRO)</span></a></li>
                      <li><a href="single-product.html" className="item-anchor">Single product<span className="text-primary"> (PRO)</span></a></li>
                      <li><a href="cart.html" className="item-anchor">Cart<span className="text-primary"> (PRO)</span></a></li>
                      <li><a href="wishlist.html" className="item-anchor">Wishlist<span className="text-primary"> (PRO)</span></a></li>
                      <li><a href="checkout.html" className="item-anchor">Checkout<span className="text-primary"> (PRO)</span></a></li>
                    </ul> */}
                  </li>
                  {/* <li className="menu-item has-sub">
                    <a href="#" className="item-anchor d-flex align-item-center" data-effect="Pages">Pages<i className="icon icon-chevron-down" /></a>
                    <ul className="submenu">
                      <li><a href="coming-soon.html" className="item-anchor">Coming soon<span className="text-primary"> (PRO)</span></a></li>
                      <li><a href="login.html" className="item-anchor">Login<span className="text-primary"> (PRO)</span></a></li>
                      <li><a href="faqs.html" className="item-anchor">FAQs<span className="text-primary"> (PRO)</span></a></li>
                      <li><a href="styles.html" className="item-anchor">Styles</a></li>
                      <li><a href="thank-you.html" className="item-anchor">Thankyou</a></li>
                      <li><a href="error.html" className="item-anchor">Error page<span className="text-primary"> (PRO)</span></a></li>
                    </ul>
                  </li> */}
                  {/* <li className="menu-item has-sub">
                    <a href="blog.html" className="item-anchor d-flex align-item-center" data-effect="Blog">Blog<i className="icon icon-chevron-down" /></a>
                    <ul className="submenu">
                      <li><a href="blog.html" className="item-anchor">Blog</a></li>
                      <li><a href="blog-sidebar.html" className="item-anchor">Blog with sidebar<span className="text-primary"> (PRO)</span></a></li>
                      <li><a href="blog-masonry.html" className="item-anchor">Blog masonry<span className="text-primary"> (PRO)</span></a></li>
                      <li><a href="single-post.html" className="item-anchor">Single post</a></li>
                    </ul>
                  </li> */}
                 <li> <Link to={"/contact"}> <a href="#" className="item-anchor" data-effect="Contact">Contact</a></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>


    </>
  )
}

export default Navbar