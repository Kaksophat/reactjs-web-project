// import AdminDashboard from "./AdminDashboard"
// import Adminnavbar from "./Adminnavbar"
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../components/context/Authcontact";
import image from "../components/assets/1.jpeg";
import "./style.css";
import Adminside from "./Adminside";

const Admincategory = () => {
  const { logout, user } = useContext(Authcontext);
  const [category, setcategory] = useState("add");

  const [categorylist, setcategorylist] = useState([]);
  console.log(categorylist);
  const [formData, setFormData] = useState({
    name: "",
    status: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addcategory = async (e) => {
    e.preventDefault();

    const respones = await fetch("http://localhost:8000/api/category", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${user.token} `,
      },
      body: JSON.stringify(formData),
    });

    const data = await respones.json();
    console.log(data);
    
    if (data.status == 200) {
      alert("add category successful");
    }
  };

  useEffect(() => {
    const category = async () => {
      const respones = await fetch("http://localhost:8000/api/category", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token} `,
        },
      });

      const data = await respones.json();
      if (data.status == 200) {
        setcategorylist(data.data);
      }
    };

    category();
  }, [user.token]);

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
          <main>
            <div className="page-header">
              <h2>Dashboard</h2>
              <small>Home / Dashboard</small>
            </div>
            <div className="page-content">
              <div className="records table-responsive">
                {category == "list" ? (
                

<div className="table-container">
<div className="category">
  <h1>Category List</h1>
  <a href="" className="addnew" onClick={() => setcategory("add")}>
            Add New
      </a>
</div>
<table>
  <thead>
    <tr>
      <th style={{paddingLeft:"20px" }}>ID</th>
      <th>Name</th>
      <th>Status</th>
      <th>Date</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {categorylist.map((item) => (
      <tr key={item.id}>
        <td style={{paddingLeft:"20px" }}>{item.id}</td>
        <td>{item.name}</td>
        <td>
          {item.status == 1 ? "Active" : "Inactive"}
        </td>
        <td>{item.created_at}</td>
        <td>
          <a href="" className="edit">
            Edit
          </a>
          <a href="" className="delete">
            Delete
          </a>
        </td>
      </tr>
    ))}
  </tbody>
</table>
</div>
                ) : (
                  <div>
                  <div className="category">
                      <h1>Category Add</h1>
                      <button
                        className="button"
                        onClick={() => setcategory("list")}
                      >
                        List
                      </button>
                    </div>

                    <form action="" onSubmit={addcategory}>
                      <label >name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <label >status</label>
                      <input
                        type="number"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                      />
                      <button style={{ background: "blue" }}>
                        Add category
                      </button>
                    </form>
                  </div>
                 
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Admincategory;
