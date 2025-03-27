import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const Authcontext = createContext();

export const Authcontextprovied = ({ children }) => {
  const admininfo = Cookies.get("token");
  const userinfo = Cookies.get("usertoken");

  const [user, setuser] = useState(admininfo ? JSON.parse(admininfo) : null);
  const [customer, setcustomer] = useState(userinfo ? JSON.parse(userinfo) : null);

  const login = (user) => {
    setuser(user);
    Cookies.set("token", JSON.stringify(user), { expires: 7, secure: true, sameSite: "Strict" });
  };

  const logout = () => {
    Cookies.remove("token"); 
    setuser(null);
  };

  const customerlogout = () => {
    Cookies.remove("usertoken");
    setcustomer(null);
  };

  const customerlogin = (customer) => {
    setcustomer(customer);
    Cookies.set("usertoken", JSON.stringify(customer), { expires: 7, secure: true, sameSite: "Strict" });
  };

  useEffect(() => {
    const storedAdminInfo = Cookies.get("token");
    const storedCustomerInfo = Cookies.get("usertoken");

    if (storedAdminInfo) {
      setuser(JSON.parse(storedAdminInfo));
    }

    if (storedCustomerInfo) {
      setcustomer(JSON.parse(storedCustomerInfo));
    }
  }, []);

  return (
    <Authcontext.Provider value={{ login, user, logout, customerlogin, customerlogout, customer }}>
      {children}
    </Authcontext.Provider>
  );
};
