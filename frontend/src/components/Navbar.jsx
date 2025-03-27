import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "./context/Shopcontext";
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Authcontext } from "./context/Authcontact";
// import logo from "../../public/images/main-logo.png"

const Navbar = () => {
  const { getqty ,setting} = useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const location = useLocation();
  const {customer} = useContext(Authcontext);
console.log("image",setting.email);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserDropdown = (e) => {
    e.stopPropagation(); // Prevent event propagation
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  // Close dropdown when clicking outside
  const closeDropdown = () => {
    setIsUserDropdownOpen(false);
  };

  return (
    <>
      <header
        id="header"
        style={{
          zIndex: 100,
          top: 0,
          position: "fixed",
          width: "100%",
          left: 0,
          boxSizing: "border-box",
          backgroundColor: "white",
        }}
      >
        <div id="header-wrap">
          <nav className="secondary-nav border-bottom">
            <div className="container" >
              <div className="row d-flex align-items-center"  style={{ paddingTop: "30px" }}>
                <div className="col-md-4 header-contact" >
                  <div className="shipping-purchase " >
                    <p>
                      Lets talk! <strong>+57 444 11 00 35</strong>
                    </p>
                  </div>
                </div>
                <div className="col-md-4 shipping-purchase text-center">
                  <p>Free shipping on a purchase value of $200</p>
                </div>
                <div className="col-md-4 col-sm-12 user-items">
                  <ul className="d-flex justify-content-end list-unstyled">
                  <li style={{ position: "relative" }}>
                      <div
                        onClick={toggleUserDropdown}
                        style={{ cursor: "pointer" }}
                      >
                        <i className="icon icon-user" /> <ChevronDown size={16} />
                      </div>
                      {isUserDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="dropdown-menu show"
                          style={{
                            position: "absolute",
                            top: "100%",
                            right: "0", 
                            zIndex: 1150,
                            display: "flex",
                            flexDirection: "column",
                            background: "black",
                            padding: "10px",
                            borderRadius: "8px",
                            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                            minWidth: "100px",
                          }}
                        >
                          {!customer ?  <Link
                            to="/login"
                            className="dropdown-item"
                            style={{  color: "white", textDecoration: "none" }}
                            onClick={closeDropdown} // Close dropdown on click
                          >
                            Login
                          </Link>
                          :
                          <>
                            <Link
                          to="/myaccount/profile"
                          className="dropdown-item"
                          style={{  color: "white", textDecoration: "none",paddingBottom:"5px" }}
                          onClick={closeDropdown} // Close dropdown on click
                        >
                          myaccount
                        </Link> 
                        <Link
                        to="/"
                        className="dropdown-item"
                        style={{  color: "white", textDecoration: "none",paddingBottom:"5px" }}
                        onClick={closeDropdown} // Close dropdown on click
                      >
                        logout
                      </Link>
                     </>}
                       
                        </motion.div>
                      )}
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
          <nav className="primary-nav padding-small mt-5 ">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-lg-2 col-md-2">
                  <div className="main-logo">
                    <Link to={"/"}>  <img src={setting?.image_url} alt="" /> </Link>
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
                      }`}
                    >
                      <ul className="menu-list">
                        <li className="menu-item has-sub">
                          <Link
                            to={"/"}
                            className={`nav-item nav-link ${
                              location.pathname === "/" ? "active " : " "
                            }`}
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/about"}
                            className={`nav-item nav-link ${
                              location.pathname === "/about" ? "active" : " "
                            }`}
                          >
                            About
                          </Link>
                        </li>
                        <li className="menu-item has-sub">
                          <Link
                            to={"/shop"}
                            className='nav-item nav-link' 
                          >
                            Shop
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"/contact"}
                            className='nav-item nav-link '
                          >
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