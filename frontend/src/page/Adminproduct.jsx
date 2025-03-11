import { useEffect, useState } from "react"

const Adminproduct = () => {
  const [product,setproduct] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products');
        const json = await response.json();
        setproduct(json.products);
        console.log("data", json.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, [])
  return (
    <>
       <div className="container-fluid pt-4 px-4">
       <div className="bg-secondary text-center rounded p-4">
        <h1 className="text-white">List Product</h1>
        <table className="table table-bordered table-striped table-hover">
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
        <tbody>
         {product.map((product) => (

          <tr key={product.id} className="text-center">
            <td>{product.id}</td>
            <td>{product.category_id}</td>
            <td>{product.brand_id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td><img src={product.image_url} alt={product.title} style={{width:"50px"}}/></td>
            {product.status ==1 ? <td className="text-success">Enable</td> : <td className="text-danger">Disable</td>}
            <td>
              <button className="btn btn-success">Edit</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          ))}
        
        </tbody>
        
        </table>
        </div>
        </div>
    </>
  )
}

export default Adminproduct