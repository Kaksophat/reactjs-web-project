import { Link, useLocation, useParams } from "react-router-dom";

const Adminside = () => {
    const location = useLocation();
    const params = useParams();

  return (
    <>
       <div className="side-menu">
            <ul>
                <li>
                  <Link
                    to="/admin/dashboard"
                    className={location.pathname === "/admin/dashboard" ? "active" : ""}
                  >
                    <span className="las la-home" />
                    <small>Dashboard</small>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/product"
                    className={location.pathname === "/admin/product" || location.pathname === `/admin/product/edit/${params.productid}` ? "active" : ""}


                   
                  >
                    <span className="las la-user-alt" />
                    <small>Product</small>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/category"
                    className={location.pathname === "/admin/category" ? "active" : ""}
                  >
                    <span className="las la-envelope" />
                    <small>Category</small>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/projects"
                  >
                    <span className="las la-clipboard-list" />
                    <small>Projects</small>
                  </Link>
                </li>
               
              </ul>
            </div>
    
    </>
  )
}

export default Adminside