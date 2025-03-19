import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Adminbrand = () => {
    const   navigator = useNavigate();
    const param = useParams();
    const [list, setlist] = useState("list");
    const [formdata, setformdata] = useState({
      title: "",
      category_id: "",
      brand_id: "",
      price: "",
      quantity: "",
      status: "",
      description: "",
      image: "",
    });
    const handlechange = (e) => {
        setformdata({
          ...formdata,
          [e.target.id]: e.target.value,
        });
      };
    const {user} = useContext(Authcontext)
    const { category, brand,api,} = useContext(ShopContext);
  return (
    <>
    <div className="container-fluid pt-4 px-4">
      <div className="bg-secondary text-center rounded p-4">
        {list === "list" ? (
          <div>
            {" "}
            <div className="d-flex justify-content-between  align-items-center">
              <h1 className="text-white flex-grow-1 text-center">
                List Brand
              </h1>
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
            <table className="table table-bordered table-striped table-hover text-white">
              <thead>
                <tr>
                
                  <th>Brand ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {category.map((item) => (
                  <tr key={category.id} className="text-center">
                    <td className="text-white">{item.id}</td>
                    <td className="text-white">{item.name}</td>
               
                    {item.status == 1 ? (
                      <td className="text-success">Enable</td>
                    ) : (
                      <td className="text-danger">Disable</td>
                    )}
                    <td>
                      <Link to={`/admin/product/edit/${item.id}`}> <button className="btn btn-success" >Edit</button> </Link> 
                    <Link to={`/admin/product/${item.id}`}> <button className="btn btn-danger" >Delete</button> </Link> 
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>{" "}
          </div>
        ) : (
          ""
        )}
        {list === "add" ? (
          <div>
            <div className="d-flex justify-content-between  align-items-center">
              <h1 className="text-white flex-grow-1 text-center">
                Add Product
              </h1>
              <button
                onClick={() => setlist("list")}
                style={{
                  color: "white",
                  background: "blue",
                  border: "1px solid blue",
                  borderRadius: "7px",
                }}
              >
                Back
              </button>
            </div>
            <form className="text-white" onSubmit={addbrand}>
              <div className="form-group text-start">
                <label htmlFor="title">Product Title</label>
                <input
                  type="text"
                  className="form-control text-white"
                  id="title"
                  value={formdata.title}
                  onChange={handlechange}
                />
              </div>
              <div className="form-group text-start">
                <label htmlFor="category_id">Category</label>
                <select
                  className="form-control bg-secondary text-white"
                  id="category_id"
                  value={formdata.category_id}
                  onChange={handlechange}
                >
                  <option value="">Select Category</option>
                  {category.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group text-start">
                <label htmlFor="brand_id">Brand</label>
                <select
                  className="form-control bg-secondary text-white"
                  id="brand_id"
                  value={formdata.brand_id}
                  onChange={handlechange}
                >
                  <option value="">Select Brand</option>
                  {brand.map((brand) => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group text-start">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control text-white"
                  id="price"
                  value={formdata.price}
                  onChange={handlechange}
                />
              </div>
              <div className="form-group text-start">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="text"
                  className="form-control text-white"
                  id="quantity"
                  value={formdata.quantity}
                  onChange={handlechange}
                />
              </div>
              <div className="form-group text-start">
                <label htmlFor="status">Status</label>
                <select
                  className="form-control bg-secondary text-white "
                  id="status"
                  onChange={handlechange}
                >
                   <option value="">Select Status</option>
                  <option value="1">Enable</option>
                  <option value="0">Disable</option>
                </select>
              </div>
              <div className="form-group text-start">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control text-white bg-secondary"
                  id="description"
                  value={formdata.description}
                  onChange={handlechange}
                />
              </div>

              <div className="form-group text-start">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  className="form-control text-white"
                  id="image"
                  onChange={handleImageChange}
                />
              </div>

              <button
                type="submit"
                style={{
                  color: "white",
                  background: "blue",
                  border: "1px solid blue",
                  borderRadius: "7px",
                  marginLeft: "-990px",
                }}
                className="mt-3"
                onSubmit={addproduct}
              >
                Add product
              </button>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  </>
  )
}

export default Adminbrand