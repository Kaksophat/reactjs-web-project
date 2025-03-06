import { useContext } from "react";
import { Authcontext } from "../components/context/Authcontact";
import "./style.css";
import Adminhome from "./Adminhome";
import image from "../components/assets/1.jpeg";
// import { Link } from "react-router-dom";
import Adminside from "./Adminside";

const AdminDashboard = () => {
  const { logout, user } = useContext(Authcontext);

  return (
    <>
      <div>
        <input type="checkbox" id="menu-toggle" />
        <div className="left">
          <div className="side-header">
            <h3>
              M<span>odern</span>
            </h3>
          </div>
          <div className="side-content">
            <div className="profile">
              <img src={image} alt="" className="profile-img bg-img" />
              <h4>{user.name}</h4>
              <small>{user.email}</small>
            </div>
            <Adminside/>
          </div>
        </div>

        <div className="main-content">
          <header className="top">
            <div className="header-content">
              <label htmlFor="menu-toggle">
                <span className="las la-bars" />
              </label>
              <div className="header-menu">
                <label htmlFor>
                  <span className="las la-search" />
                </label>
                <div className="notify-icon">
                  <span className="las la-envelope" />
                  <span className="notify">4</span>
                </div>
                <div className="notify-icon">
                  <span className="las la-bell" />
                  <span className="notify">3</span>
                </div>
                <div className="user">
                  <div
                    className="bg-img"
                    style={{
                      backgroundImage: "url(../components/assets/3.jpeg)",
                    }}
                  />
                  <span className="las la-power-off" />
                  <span onClick={logout}>Logout</span>
                </div>
              </div>
            </div>
          </header>
          <Adminhome />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
