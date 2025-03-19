import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../components/context/Shopcontext'
import { Link } from 'react-router-dom';
import { Authcontext } from '../components/context/Authcontact';

export default function Category() {
    const [list, setlist] = useState("list");
    const [listcategory,setlistcategory] = useState([])
    const {user} = useContext(Authcontext)
  

  const {api} = useContext(ShopContext)


  const category = async ()=>{
    const responese = await fetch(`${api}category`,{
      method:'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
         "Authorization": `Bearer ${user.token}`
      }
    })

    const data = await responese.json();
    console.log(data.category);
    setlistcategory(data.category)
    
  }

  useEffect(()=>{
         category()
  },[])
  return (
    <>
      <div className="container-fluid pt-4 px-4">
        <div className="bg-secondary text-center rounded p-4">
          {list === "list" ? (
            <div>
              {" "}
              <div className="d-flex justify-content-between  align-items-center">
                <h1 className="text-white flex-grow-1 text-center">
                  List Product
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
                    <th>ID</th>
                    <th>name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {listcategory.map((product) => (
                    <tr key={product.id} className="text-center">
                      <td className="text-white">{product.id}</td>
                      <td className="text-white">{product.category_id}</td>
                      <td className="text-white">{product.brand_id}</td>
                      <td className="text-white">{product.title}</td>
                      <td className="text-white">{product.price}</td>
                      <td className="text-white">{product.quantity}</td>
                     
                      {product.status == 1 ? (
                        <td className="text-success">Enable</td>
                      ) : (
                        <td className="text-danger">Disable</td>
                      )}
                      <td>
                        <Link to={`/admin/product/edit/${product.id}`}> <button className="btn btn-success" >Edit</button> </Link> 
                      <Link to={`/admin/product/${product.id}`}> <button className="btn btn-danger" onClick={deleteproduct}>Delete</button> </Link> 
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
              <form className="text-white" onSubmit={addproduct}>
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
