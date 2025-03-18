import { ShopContext } from '../components/context/Shopcontext';
import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Admineditproduct = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    title: "",
    category_id: "",
    brand_id: "",
    price: "",
    quantity: "",
    status: "",
    description: "",
    image: null,
    old_image: null,
  });

  const { category, brand,updateProductList } = useContext(ShopContext);

  const handlechange = (e) => {
    setformdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setformdata({
      ...formdata,
      image: e.target.files[0],
    });
  };

  const editproduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", formdata.title);
    formData.append("category_id", formdata.category_id);
    formData.append("brand_id", formdata.brand_id);
    formData.append("price", formdata.price);
    formData.append("quantity", formdata.quantity);
    formData.append("status", formdata.status);
    formData.append("description", formdata.description);
    formData.append("_method", "PUT");

    if (formdata.image) {
      formData.append("image", formdata.image);
    } else {
      formData.append("old_image", formdata.old_image); // Send old image if not updating
    }

    try {
      const response = await fetch(`http://localhost:8000/api/products/${param.id}`, {
        method: "POST",
        body: formData,
      });

      const json = await response.json();

      if (response.ok) {
        
        updateProductList(json.product)
        navigate("/admin/product");
      } else {
        alert("Update failed. Please try again.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("An error occurred while updating the product.");
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/products/${param.id}`);
      const json = await response.json();
      
      setformdata({
        title: json.product.title,
        category_id: json.product.category_id,
        brand_id: json.product.brand_id,
        price: json.product.price,
        quantity: json.product.quantity,
        status: json.product.status,
        description: json.product.description,
        image: null,
        old_image: json.product.image, // Store the old image
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="container-fluid pt-4 px-4">
        <div className="bg-secondary text-center rounded p-4">
          <h1>Edit Product</h1>
          <form onSubmit={editproduct}>
          <div className="form-group text-start">
                <label>Product Title</label>
                <input
                  type="text"
                  className="form-control text-white"
                  id="title"
                  value={formdata.title}
                  onChange={handlechange}
                />
              </div>
              
              <div className="form-group text-start">
                <label>Category</label>
                <select
                  className="form-control bg-secondary text-white"
                  id="category_id"
                  value={formdata.category_id}
                  onChange={handlechange}
                >
                  <option value="">Select Category</option>
                  {category.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group text-start">
                <label>Brand</label>
                <select
                  className="form-control bg-secondary text-white"
                  id="brand_id"
                  value={formdata.brand_id}
                  onChange={handlechange}
                >
                  <option value="">Select Brand</option>
                  {brand.map(brand => (
                    <option key={brand.id} value={brand.id}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group text-start">
                <label>Price</label>
                <input
                  type="text"
                  className="form-control text-white"
                  id="price"
                  value={formdata.price}
                  onChange={handlechange}
                />
              </div>

              <div className="form-group text-start">
                <label>Quantity</label>
                <input
                  type="text"
                  className="form-control text-white"
                  id="quantity"
                  value={formdata.quantity}
                  onChange={handlechange}
                />
              </div>

              <div className="form-group text-start">
                <label>Status</label>
                <select
                  className="form-control bg-secondary text-white"
                  id="status"
                  value={formdata.status}
                  onChange={handlechange}
                >
                  <option value="1">Enable</option>
                  <option value="0">Disable</option>
                </select>
              </div>

              <div className="form-group text-start">
                <label>Description</label>
                <textarea
                  className="form-control text-white"
                  id="description"
                  value={formdata.description}
                  onChange={handlechange}
                />
              </div>
              <div className="form-group text-start">
            <input type="file" onChange={handleImageChange} />
            {formdata.old_image && (
              <div>
                <p>Current Image:</p>
                <img src={`http://localhost:8000/uploads/${formdata.old_image}`} alt="Current Product" width="150" />
              </div>
            )}
            </div>
            <button
                type="submit"
                className="mt-3"
                style={{
                  color: "white",
                  background: "blue",
                  border: "1px solid blue",
                  borderRadius: "7px",
                }}
              >
                Edit Product
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admineditproduct;
