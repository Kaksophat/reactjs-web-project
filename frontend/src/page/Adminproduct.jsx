
import { useContext,  useEffect,  useState } from "react";
import { ShopContext } from "../components/context/Shopcontext";
import {Link,useParams,useNavigate} from "react-router-dom"
import { Authcontext } from "../components/context/Authcontact";

const Adminproduct = () => {
  const   navigator = useNavigate();
  const param = useParams();
  const [list, setlist] = useState("list");
  const [product,setproduct] = useState([])
  const [formdata, setformdata] = useState({
    title: "",
    category_id: "",
    brand_id: "",
    price: "",
    quantity: "",
    status: "",
    description: "",
    image: "",
    old_image: null,
  });
  const {user} = useContext(Authcontext)
  const { category, brand,api } = useContext(ShopContext);

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

  

  const addproduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", formdata.title);
      formData.append("category_id", formdata.category_id);
      formData.append("brand_id", formdata.brand_id);
      formData.append("price", formdata.price);
      formData.append("quantity", formdata.quantity);
      formData.append("status", formdata.status);
      formData.append("description", formdata.description); 
      formData.append("image", formdata.image); 
      console.log(formdata);

      const response = await fetch(`${api}product`, {
        method: "POST",
        headers: {
         
           "Authorization": `Bearer ${user.token}`
        },
        body: formData,
      });

      const json = await response.json();

      if (json.status === 201) {
       getproduct();
        setlist("list"); 
        setformdata({
          title: "",
          category_id: "",
          brand_id: "",
          price: "",
          quantity: "",
          status: "",
          description: "",
          image: "",
        })

      } else if (json.status === 400) {
        console.error("Validation Errors:", json.errors);
      } else {
        console.error("Error:", json.message);
      }
    } catch (error) {
      console.error("Error adding product", error);
    }
  };
  const updateproduct = async (e) => {
    e.preventDefault();
    try {
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
  

      const response = await fetch(`${api}product/${param.id}`, {
        method: "POST",
        headers: {
         
           Authorization: `Bearer ${user.token}`
        },
        body: formData,
      });

      const json = await response.json();

      if (json.status === 200) {
       getproduct();
        setlist("list"); 
        navigator("/admin/product");
      

      } else if (json.status === 400) {
        console.error("Validation Errors:", json.errors);
      } else {
        console.error("Error:", json.message);
      }
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  const deleteproduct = async ()=>{
    try {
    const respone =  await fetch(`${api}product/${param.id}`,{

        method:'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
           "Authorization": `Bearer ${user.token}`
        }
      })
      const data = await respone.json()
      if(data.status == 200){
       getproduct();
        
        setlist("list"); 
        navigator("/admin/product");
      }
    } catch (error) {
      console.error("Error adding product", error);
        
    }
  }

    const getproduct = async()=>{
          const respones = await fetch(`${api}product`,{
              method:"GET",
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  "Authorization": `Bearer ${user.token}`
              }
              
          })
  
          const data = await respones.json();
  
          if(data.status == 200){
              setproduct(data.products)
          }
      }

      const showProducts = async () => {
        try {
          const response = await fetch(`${api}product/${param.id}`,
          {
            method: "GET",
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              Authorization: `Bearer ${user.token}`
            }
          }
          );
          const json = await response.json();
          console.log(json);
          
          
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

      useEffect(()=>{
          getproduct()
          showProducts()
      },[param.id])
      

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
                    <th>Product ID</th>
                    <th>Category ID</th>
                    <th>Brand ID</th>
                    <th>Product Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {product.map((product) => (
                    <tr key={product.id} className="text-center">
                      <td className="text-white">{product.id}</td>
                      <td className="text-white">{product.category_id}</td>
                      <td className="text-white">{product.brand_id}</td>
                      <td className="text-white">{product.title}</td>
                      <td className="text-white">{product.price}</td>
                      <td className="text-white">{product.quantity}</td>
                      <td>
                        <img
                          src={product.image_url}
                          alt={product.title}
                          style={{ width: "50px" }}
                        />
                      </td>
                      {product.status == 1 ? (
                        <td className="text-success">Enable</td>
                      ) : (
                        <td className="text-danger">Disable</td>
                      )}
                      <td>
                        <Link to={`/admin/product/edit/${product.id}`}> <button className="btn btn-success" onClick={()=>setlist("add")} >Edit</button> </Link> 
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
              <form className="text-white" onSubmit={param.id ? updateproduct : addproduct}>
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
                    value={formdata.status}
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
                   {formdata.old_image && (
                      <div>
                        <p>Current Image:</p>
                        <img src={`http://localhost:8000/uploads/${formdata.old_image}`} alt="Current Product" width="350" height={100} />
                      </div>
                    )}
                </div>

                <button type="submit" className=" mt-3" style={{
                color: "white",
                background: "blue",
                border: "1px solid blue",
                borderRadius: "7px",
                marginLeft: "-900px",
              }}>
            
              {param.id ? "Update product" : "Add product"}
            </button>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Adminproduct;
