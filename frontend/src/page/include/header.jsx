import { BsClipboard2Fill } from "react-icons/bs";
import { MdCategory } from "react-icons/md";
import { TbBrand4Chan } from "react-icons/tb";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../../components/context/Authcontact";
const Header = () => {
  const {user} = useContext(Authcontext)
  console.log("user",user.name);
  
  const location=useLocation()
  return (
    <>
      <div className="sidebar pe-4 pb-3">
  <nav className="navbar bg-secondary navbar-dark">
    <Link to="/admin/dashboard" className="navbar-brand mx-4 mb-3">
      <h3 className="text-primary"><i className="fa fa-user-edit me-2" />DarkPan</h3>
    </Link>
    <div className="d-flex align-items-center ms-4 mb-4">
      <div className="position-relative">
        <img className="rounded-circle" src="img/user.jpg" alt style={{width: 40, height: 40}} />
        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
      </div>
      <div className="ms-3">
        <h6 className="mb-0">{user.name}</h6>
        <span>{user.email}</span>
      </div>
    </div>
    <div className="navbar-nav w-100">
      <Link to="/admin/dashboard" className={`nav-item nav-link ${location.pathname==="/admin/dashboard" ? "active":" "}`}> {<BsClipboard2Fill className="me-2 fa"/>} Dashboard</Link>
      <div className="nav-item dropdown">
        <Link to="/admin/category" className={`nav-item nav-link ${location.pathname === "/admin/category" ? "active" : ""}`}> {<MdCategory style={{fontSize:'24px'}} />} Category </Link> 
      </div>
      <Link to="/admin/brand" className={`nav-item nav-link ${location.pathname === "/admin/brand" ? "active" : ""}`}>{<TbBrand4Chan style={{fontSize:'24px'}}/>} Brand </Link>
      <Link to="/admin/product" className={`nav-item nav-link ${location.pathname === "/admin/product" ? "active" : ""}`}>{<MdOutlineProductionQuantityLimits style={{fontSize:'24px'}} />}Product</Link>
    
    </div>
  </nav>
</div>

<nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
  <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
    <h2 className="text-primary mb-0"><i className="fa fa-user-edit" /></h2>
  </a>
  <a href="#" className="sidebar-toggler flex-shrink-0">
    <i className="fa fa-bars" />
  </a>
  <form className="d-none d-md-flex ms-4">
    <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
  </form>
  <div className="navbar-nav align-items-center ms-auto">
    <div className="nav-item dropdown">
      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
        <i className="fa fa-envelope me-lg-2" />
        <span className="d-none d-lg-inline-flex">Message</span>
      </a>
      <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
        <a href="#" className="dropdown-item">
          <div className="d-flex align-items-center">
            <img className="rounded-circle" src="img/user.jpg" alt style={{width: 40, height: 40}} />
            <div className="ms-2">
              <h6 className="fw-normal mb-0">Jhon send you a message</h6>
              <small>15 minutes ago</small>
            </div>
          </div>
        </a>
        <hr className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          <div className="d-flex align-items-center">
            <img className="rounded-circle" src="img/user.jpg" alt style={{width: 40, height: 40}} />
            <div className="ms-2">
              <h6 className="fw-normal mb-0">Jhon send you a message</h6>
              <small>15 minutes ago</small>
            </div>
          </div>
        </a>
        <hr className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          <div className="d-flex align-items-center">
            <img className="rounded-circle" src="img/user.jpg" alt style={{width: 40, height: 40}} />
            <div className="ms-2">
              <h6 className="fw-normal mb-0">Jhon send you a message</h6>
              <small>15 minutes ago</small>
            </div>
          </div>
        </a>
        <hr className="dropdown-divider" />
        <a href="#" className="dropdown-item text-center">See all message</a>
      </div>
    </div>
    <div className="nav-item dropdown">
      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
        <i className="fa fa-bell me-lg-2" />
        <span className="d-none d-lg-inline-flex">Notificatin</span>
      </a>
      <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
        <a href="#" className="dropdown-item">
          <h6 className="fw-normal mb-0">Profile updated</h6>
          <small>15 minutes ago</small>
        </a>
        <hr className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          <h6 className="fw-normal mb-0">New user added</h6>
          <small>15 minutes ago</small>
        </a>
        <hr className="dropdown-divider" />
        <a href="#" className="dropdown-item">
          <h6 className="fw-normal mb-0">Password changed</h6>
          <small>15 minutes ago</small>
        </a>
        <hr className="dropdown-divider" />
        <a href="#" className="dropdown-item text-center">See all notifications</a>
      </div>
    </div>
    <div className="nav-item dropdown">
      <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
        <img className="rounded-circle me-lg-2" src="img/user.jpg" alt style={{width: 40, height: 40}} />
        <span className="d-none d-lg-inline-flex">{user.name}</span>
      </a>
      <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
        <a href="#" className="dropdown-item">My Profile</a>
        <a href="#" className="dropdown-item">Settings</a>
        <a href="#" className="dropdown-item">Log Out</a>
      </div>
    </div>
  </div>
</nav>


    </>
  )
}

export default Header