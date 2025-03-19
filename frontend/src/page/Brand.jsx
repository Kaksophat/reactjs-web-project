import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../components/context/Shopcontext";
import { Authcontext } from "../components/context/Authcontact";

export default function Brand() {
  const param = useParams();
  const navigate = useNavigate();
  const [Brand, setbrand] = useState([]);
  const [list, setlist] = useState("list");
  const [formdata, setformdata] = useState({ name: "", status: "" });

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const { user } = useContext(Authcontext);
  const { api } = useContext(ShopContext);

  const addbrand = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${api}brand`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();
      if (data.status === 201) {
        setlist("list");
        brand();
      }
    } catch (error) {
      console.error("Error adding brand", error);
    }
  };

  const updatebrand = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${api}brand/${param.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();
      if (data.status === 200) {
        setlist("list");
        navigate("/admin/brand");
        brand();
      }
    } catch (error) {
      console.error("Error updating brand", error);
    }
  };

  const deletebrand = async (id) => {
    try {
      const response = await fetch(`${api}brand/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await response.json();
      if (data.status === 200) {
        setlist("list");
        brand();
      }
    } catch (error) {
      console.error("Error deleting brand", error);
    }
  };

  const brand = async () => {
    try {
      const response = await fetch(`${api}brand`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();
      if (data.status === 200) {
        setbrand(data.brand);
      }
    } catch (error) {
      console.error("Error fetching brands", error);
    }
  };

  const showbrand = async () => {
    if (!param.id) return;
    try {
      const response = await fetch(`${api}brand/${param.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();
      if (data.status === 200) {
        setformdata({ name: data.brand.name, status: data.brand.status });
      }
    } catch (error) {
      console.error("Error fetching brand details", error);
    }
  };

  useEffect(() => {
    brand();
    showbrand();
  }, [param.id]);

  return (
    <div className="container-fluid pt-4 px-4">
      <div className="bg-secondary text-center rounded p-4">
        {list === "list" && (
          <div>
            <div className="d-flex justify-content-between  align-items-center">
              <h1 className="text-white flex-grow-1 text-center">List Brand</h1>
              <button
                onClick={() => setlist("add")}
                style={{
                  color: "white",
                  background: "blue",
                  border: "1px solid blue",
                  borderRadius: "7px",
                }}
              >
                New
              </button>
            </div>
            <table className="table table-bordered table-hover text-white">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {Brand.map((item) => (
                  <tr key={item.id} className="text-center">
                    <td className="text-white text-center">{item.id}</td>
                    <td className="text-white text-center">{item.name}</td>
               
                    {item.status == 1 ? (
                      <td className="text-success text-center">Enable</td>
                    ) : (
                      <td className="text-danger text-center">Disable</td>
                    )}
                    <td className='text-center'>
                      <Link to={`/admin/brand/edit/${item.id}`}> <button className="btn btn-success" onClick={()=>setlist("add")} >Edit</button> </Link> 
                     <button className="btn btn-danger"onClick={() => deletebrand(item.id)} >Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {list === "add" && (
          <form
            onSubmit={param.id ? updatebrand : addbrand}
            className="text-white"
          >
             <div className="form-group text-start">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control text-white"
                  id="name"
                  value={formdata.name}
                  onChange={handlechange}
                />
              </div>
             
             
              <div className="form-group text-start">
                <label htmlFor="status">Status</label>
                <select
                  className="form-control bg-secondary text-white "
                  id="status"
                  value={formdata.status}
                  onChange={handlechange}
                >
                   <option value="">Select Status</option>
                  <option value="1">Enable</option>
                  <option value="0">Disable</option>
                </select>
              </div>
            
            <button type="submit" className=" mt-3" style={{
                color: "white",
                background: "blue",
                border: "1px solid blue",
                borderRadius: "7px",
                marginLeft: "-900px",
              }}>
            
              {param.id ? "Update Brand" : "Add Brand"}
            </button>
            <button
              type="button"
              style={{
                color: "white",
                background: "blue",
                border: "1px solid blue",
                borderRadius: "7px",
                marginLeft: "10px",
              }}
              onClick={() => setlist("list")}
              className=" mt-3 "
            >
              Back
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
