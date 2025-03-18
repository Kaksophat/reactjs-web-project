import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "./context/Shopcontext";

const Navbar = () => {
  const { getqty } = useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        id="header"
        className="fixed-top "
        style={{
          zIndex: 1000,
          top: 0,
          position: "fixed",
          width: "100%",
          left: 0,
          boxSizing: "border-box",
          backgroundColor: "white",
        }}>
        <div id="header-wrap ">
          <nav className="secondary-nav border-bottom ">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-md-4 header-contact " style={{paddingTop:"30px"}}>
                <div className=" shipping-purchase text-center" style={{paddingBottom:'30px'}}>
                <p >
                    Lets talk! <strong>+57 444 11 00 35</strong>
                  </p>
                </div>
                </div>
                <div className="col-md-4 shipping-purchase text-center">
                  <p>Free shipping on a purchase value of $200</p>
                </div>
                <div className="col-md-4 col-sm-12 user-items">
                  <ul className="d-flex justify-content-end list-unstyled">
                    <li>
                      <Link to="/admin/">
                        <i className="icon icon-user" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/cart"}>
                        <div className="cart">
                          <i className="icon icon-shopping-cart" />
                          <div className="cart-count">{getqty()}</div>
                        </div>
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
                    <Link to={"/"}>Ultras</Link>
                  </div>
                </div>
                <div className="col-lg-10 col-md-10">
                  <div className="navbar">
                    {/* Toggle Icon */}
                    <div className="menu-icon" onClick={toggleMenu}>
                      <i className="icon icon-menu" />
                    </div>
                    {/* Menu Items */}
                    <div
                      id="main-nav"
                      className={`stellarnav d-flex justify-content-end right ${
                        isMenuOpen ? "active" : ""
                      }`}>
                      <ul className="menu-list">
                        <li className="menu-item has-sub">
                          <Link
                            to={"/"}
                            className={`nav-item nav-link ${
                              location.pathname === "/" ? "active " : " "
                            }`}>
                            Home
                          </Link>
                          <ul className="submenu">
                            <li>
                              <a
                                href="index.html"
                                className="item-anchor active">
                                Home
                              </a>
                            </li>
                            <li>
                              <a href="home2.html" className="item-anchor">
                                Home v2
                                <span className="text-primary"> (PRO)</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link
                            to={"/about"}
                            className={`nav-item nav-link ${
                              location.pathname === "/about" ? "active" : " "
                            }`}>
                            About
                          </Link>
                        </li>
                        <li className="menu-item has-sub">
                          <Link
                            to={"/shop"}
                            className={`nav-item nav-link ${
                              location.pathname === "/shop" ? "active" : " "
                            }`}>
                            Shop
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/contact"}
                            className={`nav-item nav-link ${
                              location.pathname === "/contact" ? "active" : " "
                            }`}>
                            Contact
                          </Link>
                        </li>
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
  );
};
export default Navbar;
