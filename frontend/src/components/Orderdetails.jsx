import { useContext, useEffect, useState } from "react";
import "./Order.css";
import { ShopContext } from "./context/Shopcontext";
import { Link, useParams } from "react-router-dom";
const Orderdetails = () => {
  const [order, setorder] = useState([]);
  const [items, setitems] = useState([]);
  const { api } = useContext(ShopContext);
  const param = useParams();

  const getorder = async () => {
    const respones = await fetch(`${api}order/${param.id}`);
    const data = await respones.json();
    if (data.status == 200) {
      setorder(data.order);
      setitems(data.order.items);
    }
  };
  console.log(items);

  useEffect(() => {
    getorder();
  });
  return (
    <>
      <div className="container " style={{ marginTop: "30px" }}>
        <div
          className="col-md-9"
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            width: "80%",
            margin: "0px auto",
          }}
        >
          <div className="card shadow">
            <div className="card body">
                <div className="d-flex justify-content-between">
              <h4>Order Detail</h4>
           <Link to={"/myaccount/order"}>  <button
                  style={{
                    color: "white",
                    background: "blue",
                    border: "1px solid blue",
                    borderRadius: "7px",

                  }}
                >
                  Back
                </button>
                </Link> 
                </div>
              <hr />
              <div className="row">
                <div
                  className="col-md-6 "
                  style={{ color: "black", fontWeight: "300" }}
                >
                  <p>
                    <strong style={{ fontWeight: "300" }}>Order ID:</strong>#
                    {order.id}
                  </p>
                  <p>
                    <strong style={{ fontWeight: "300" }}></strong>
                    {new Date(order.created_at).toLocaleDateString()}
                  </p>
                  <p>
                    <strong style={{ fontWeight: "300" }}>Status:</strong>
                    <span
                      className="badge bg-warning"
                      style={{
                        background: "gold",
                        border: "none",
                        borderRadius: "7px",
                        padding: "3px",
                        color: "white",
                      }}
                    >
                      {order.status}
                    </span>
                  </p>
                </div>
                <div
                  className="col-md-6"
                  style={{ color: "black", fontWeight: "300" }}
                >
                  <p>
                    <strong style={{ fontWeight: "300" }}></strong>
                    {order.name}
                  </p>
                  <p>
                    <strong style={{ fontWeight: "300" }}></strong>{" "}
                    {order.address} , {order.city} , {order.state} , {order.zip}
                  </p>
                  <p>
                    <strong style={{ fontWeight: "300" }}></strong>
                    {order.mobile}
                  </p>
                </div>
              </div>
              <div
                className="row"
                style={{ width: "100%", margin: "0px auto" }}
              >
                <h4 className="pb-2 " >
                  <strong>Items</strong>
                </h4>
              {items.map((item) => (
                <div className="row justify-content-end" key={item.id}>
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-between border-bottom mb-3 pb-2" style={{paddingBottom:"20px"}}>
                      <div className="d-flex">
                        <img width={70} src={item.product.image_url} style={{marginRight:"10px"}}/>
                        <div className="d-flex flex-column">
                          <div className="mb-2">
                            <span
                              style={{ color: "black", fontWeight: "300" }}
                            >
                              {item.product.title}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex" style={{ gap: "5px" }}>
                        <div
                          style={{ color: "black", fontWeight: "300" }}
                        >
                          x {item.quantity}
                        </div>
                        <div
                          className="ps-3"
                          style={{ color: "black", fontWeight: "300" }}
                        >
                          ${item.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
           
                <div className="row justify-content-end" style={{paddingTop:"20px"}}>
                  <div className="col-lg-12"
                  style={{ color: "black", fontWeight: "300" }}
                  
                  >
                    <div className="d-flex justify-content-between border-bottom mb-3 pb-2"  style={{paddingBottom:"10px"}}>
                      <div
                  style={{ color: "black", fontWeight: "300" }}
                      
                      >Subtotal</div>
                      <div
                      
                      >${order.subtotal}</div>
                    </div>
                    <div className="d-flex justify-content-between border-bottom mb-3 pb-2"  style={{paddingBottom:"10px"}}>
                      <div>Shipping</div>
                      <div>${order.shipping}</div>
                    </div>
                    <div className="d-flex justify-content-between border-bottom mb-3 pb-2"  style={{paddingBottom:"10px"}}>
                      <div>Grandtotal</div>
                      <div>${order.grand_total}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orderdetails;
