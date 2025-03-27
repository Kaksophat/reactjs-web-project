import  { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/ShopContext";
import { Authcontext } from "./context/Authcontact";
import "./Order.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const { customer } = useContext(Authcontext);
  const { api } = useContext(ShopContext);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${api}order/customer/${customer.id}`);
      const data = await response.json();
      console.log(data);

      if (data.status === 200) {
        setOrders(data.orders);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div
      className="col-md-9"
      style={{
        backgroundColor: "#ffffff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        width: "80%",
      }}
    >
      <div className="card ms-5" style={{ marginLeft: "10px" }}>
        <div className="card-body">
          <h5 className="card-title">Orders History</h5>
        </div>
        <table className="table-custom">
          <thead>
            <tr>
              <th>OrderNo</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Subtotal</th>
              <th>Total</th>
              <th>Status</th>
              <th>Order Date</th>
              <th>Items</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} style={{color:"black"}}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.mobile}</td>
                <td>${order.subtotal}</td>
                <td>${order.grand_total}</td>
                <td>{order.status}</td>
                <td>{new Date(order.created_at).toLocaleDateString()}</td>
                <td>{order.items.length}</td>
                <td> <Link to={`/myaccount/order/${order.id}`}><button style={{background:"green",border:"none",borderRadius:"10px"}}>View Detail</button></Link></td>
                
              {/* <Link to={`/myaccount/order/${order.id}`} style={{border:"none"}}><td>View detail</td></Link> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;