import { useContext, useEffect, useState } from "react";
import image from "../../components/assets/1.jpeg";
import "../style.css";
import Adminside from "../Adminside";
import { Link } from "react-router-dom";
import { Authcontext } from "../../components/context/Authcontact";

const Adminproduct = () => {
  const { logout, user } = useContext(Authcontext);
  const [product, setProduct] = useState("list");
  const [productlist, setProductlist] = useState([]);
  const [categorylist, setCategorylist] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [galleryimage, setGalleryimage] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    category_id: "",
    price: "",
    compare_price: "",
    qty: "",
    sku: "",
    description: "",
    status: "1",
    is_featured: "no",
    image: null,
  });
  console.log(formData);
  console.log(gallery);
  
  

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addproduct = async (e) => {
    e.preventDefault();
    const dataToSend = { ...formData, gallery };
    console.log(dataToSend);
    
    

    try {
      const response = await fetch("http://localhost:8000/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(dataToSend),
      });
      const data = await response.json();
      console.log(data);
      
      if (data.status === 200) {
        setProduct("list");
        fetchProducts();
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handlefile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const tempFormData = new FormData();
    tempFormData.append("image", file);

    try {
      const response = await fetch("http://localhost:8000/api/tempimage", {
        method: "POST",
        headers: { Authorization: `Bearer ${user.token}` },
        body: tempFormData,
      });
      const data = await response.json();

      if (data.status === 200) {
        setGallery((prev) => [...prev, data.image.id]);
        setGalleryimage((prev) => [...prev, data.image.image_url]);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const deleteProduct = async (id) => {
  
    try {
      const response = await fetch(`http://localhost:8000/api/product/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
  
      const data = await response.json();
      if (data.status === 200) {
        setProductlist(productlist.filter((product) => product.id !== id));
        // alert("Product deleted successfully");
      } else {
        alert("Failed to delete product: " + data.message);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("An error occurred while deleting the product");
    }
  };
  
  const deleteimage = (item) => {
    setGallery((prev) => prev.filter((id) => id !== item));
    setGalleryimage((prev) =>
      prev.filter((url, index) => gallery[index] !== item)
    );
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/product", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();
      if (data.status === 200) {
        setProductlist(data.product || []);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/category", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();
      if (data.status === 200) {
        setCategorylist(data.data || []);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
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
            <Adminside />
          </div>
        </div>
        <div className="main-content">
          <header className="top">
            <div className="header-content">
              <label htmlFor="menu-toggle">
                <span className="las la-bars" />
              </label>
              <div className="header-menu">
                <label htmlFor="#">
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
              <h2>Product</h2>
              <small>Home / Product</small>
            </div>
            <div className="page-content">
              <div className="records table-responsive">
                {product === "add" ? (
                  <div>
                    <div className="category">
                      <h1>Product Add</h1>
                      <button
                        className="addnew"
                        onClick={() => setProduct("list")}
                      >
                        List
                      </button>
                    </div>

                    <form onSubmit={addproduct}>
                      <label>Title</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                      <label>Category</label>
                      <select name="category_id" onChange={handleChange}>
                        <option value="">Select category</option>
                        {categorylist.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="price">Price</label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                      />
                      <label htmlFor="compare_price">Old_price</label>
                      <input
                        type="number"
                        name="compare_price"
                        value={formData.compare_price}
                        onChange={handleChange}
                      />
                      <label htmlFor="qty">Qty</label>
                      <input
                        type="number"
                        name="qty"
                        value={formData.qty}
                        onChange={handleChange}
                      />
                  
                      <label htmlFor="description">Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        cols="30"
                        rows="10"
                      ></textarea>
                      <label htmlFor="status">Status</label>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                      >
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                      </select>
                      <label htmlFor="is_featured">Is Featured</label>
                      <select
                        name="is_featured"
                        value={formData.is_featured}
                        onChange={handleChange}
                      >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      <label htmlFor="image">Image</label>
                      <input type="file" name="image" onChange={handlefile} />
                      <div className="gallery">
                        {galleryimage.map((item, index) => (
                          <div key={index}>
                            <img src={item} alt="" style={{ width: "200px" }} />
                            <button
                              type="button"
                              onClick={() => deleteimage(gallery[index])}
                            >
                              Delete
                            </button>
                          </div>
                        ))}
                      </div>
                      <button type="submit" style={{ background: "blue" }}>
                        Add Product
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="table-container">
                    <div className="category">
                      <h1 style={{ marginRight: "90px" }}>Product List</h1>
                      <button
                        className="addnew"
                        onClick={() => setProduct("add")}
                      >
                        Add New
                      </button>
                    </div>
                    <table>
                      <thead>
                        <tr>
                          <th style={{ paddingLeft: "20px" }}>ID</th>
                          <th>Image</th>
                          <th>Title</th>
                          <th>Price</th>
                          <th>Qty</th>
                          <th>SKU</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {productlist.map((item) => (
                          <tr key={item.id}>
                            <td style={{ paddingLeft: "20px" }}>{item.id}</td>
                            <td>
                              <img src={item.image_url} alt="" width={70} />
                            </td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                            <td>{item.sku}</td>
                            <td>{item.status === 1 ? "Active" : "Inactive"}</td>
                            <td>
                              <Link to={`/admin/product/edit/${item.id}`} className="edit">
                                Edit
                              </Link>
                              <button onClick={()=> deleteProduct(item.id)} className="delete">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default Adminproduct;
