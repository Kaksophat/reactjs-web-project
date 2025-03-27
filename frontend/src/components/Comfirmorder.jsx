import { useContext, useEffect, useState } from "react"
import "./Order.css"
import { ShopContext } from "./context/Shopcontext";
import { Link, useParams } from "react-router-dom";
const Comfirmorder = () => {
    const [order,setorder] = useState([]);
    const [items,setitems] = useState([]);
    const {api} = useContext(ShopContext)
    const param = useParams()

    const getorder = async()=>{
        const respones = await fetch(`${api}order/${param.id}`)
        const data = await respones.json();
         if(data.status == 200)
            {
                setorder(data.order);
                setitems(data.order.items)
            }        
    }
    console.log(items);
    
    useEffect(()=>{
        getorder()
    })
  return (
    <>
      <div className="container " style={{marginTop:"250px"}}>
      <div className="row "style={{width:"80%",margin:"0px auto"}}>
              <h1 className="text-center fw-bold "style={{color:"green"}}>Thank you!!</h1>
              <p className=" text-center">Your Order has been successful place</p>
            </div>
       <div
            style={{
              backgroundColor: "#ffffff", 
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              width:"80%",
              margin:"0px auto"
            }}
          >
            <div className="card shadow">
            <div className="card body">
               <h4 className="fw-bold">Order Summary</h4>
               <hr />
               <div className="row" >
                <div className="col-md-6 "  style={{color:"black",fontWeight:"300"}}>
                    <p><strong  style={{fontWeight:"300"}}>Order ID:</strong>#{order.id}</p>
                    <p><strong style={{fontWeight:"300"}}>Date:</strong>{new Date(order.created_at).toLocaleDateString()}</p>
                    <p><strong style={{fontWeight:"300"}}>Status:</strong>
                       <span className="badge bg-warning" style={{background:"gold",border:"none",
                        borderRadius:"7px",padding:"3px" ,color:"white"
                       }}>{order.status}</span>
                    </p>
                </div>
                <div className="col-md-6" style={{color:"black",fontWeight:"300"}}>
                    <p><strong style={{fontWeight:"300"}}>Customer:</strong>{order.name}</p>
                    <p><strong style={{fontWeight:"300"}}>Address:</strong> {order.address} , {order.city} , {order.state} , {order.zip}</p>
                    <p><strong style={{fontWeight:"300"}}>Contact:</strong>{order.mobile}</p>
                </div>
               </div>
               <div className="row">
                <div className="col-md-12">
                <table className="table-custom">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th width="150">Price</th>
              <th width="150">Total</th>
             
            </tr>
          </thead>
          <tbody style={{color:"black",fontWeight:"300"}}>
            {items.map((item)=>(
                  <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.unit_price}</td>
                  <td>${item.price}</td>
                 </tr>
            ))}
         
          </tbody>
          <tfoot style={{color:"black",fontWeight:"300"}}>
            <tr>
                <td colSpan={3} className="text-end" style={{textAlign:"end"}}>Subtotal</td>
                <td>${order.subtotal}</td>
            </tr>
            <tr>
                <td colSpan={3} className="text-end" style={{textAlign:"end"}}>Shipping</td>
                <td>${order.shipping}</td>
            </tr>
            <tr>
                <td colSpan={3} className="text-end" style={{textAlign:"end"}}>Grand total</td>
                <td>${order.grand_total}</td>
            </tr>
          </tfoot>
        </table>
                </div>
                <div className="text-center">
                   <Link to={"/myaccount/order"}><button className="btn btn-primary ">Order Details</button> </Link> 
                  <Link to={"/shop"}> <button className="btn btn-outline-primary" style={{marginLeft:"10px"}}>Continue Shopping</button> </Link> 
                </div>
               </div>
            </div>
         </div>
        </div>
        
          </div>
    </>
  )
}

export default Comfirmorder