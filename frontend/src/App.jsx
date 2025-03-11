import { Routes, Route, useLocation } from "react-router-dom";
// import Navbar from './components/Navbar';

import Customeroute from "./components/Customeroute";

import Adminroute from "./page/include/Adminroute";
import { useEffect } from "react";
import Adminlogin from "./page/adminlogin";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const adminStylesheet = "/admin/style.css";
    const customerStylesheet = "/admin/bootstrap.min.css";
    const login = "/admin/login";
    let linkElement = document.getElementById("admin-style");
    let link = document.getElementById("customer-style");

    if (location.pathname.startsWith("/admin")) {
      if (!linkElement && !link) {
        linkElement = document.createElement("link");
        link = document.createElement("link");
        link.id = "customer-style";
        link.rel = "stylesheet";
        link.href = customerStylesheet;
        document.head.appendChild(link);

        linkElement.id = "admin-style";
        linkElement.rel = "stylesheet";
        linkElement.href = adminStylesheet;
        document.head.appendChild(linkElement);
      }
    } else {
      if (linkElement && link && login) {
        linkElement.remove();
        link.remove();
      }
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        {/* Public Routes */}

        <Route path="/*" element={<Customeroute />} />

        <Route path="/admin/*" element={<Adminroute />} />

        <Route path="/admin/login" element={<Adminlogin />} />
      </Routes>
    </>
  );
};

export default App;
