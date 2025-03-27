import { FaDollarSign } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";
import { TbChartInfographic } from "react-icons/tb";
import Dashimg from './include/Dashimg.gif'
import Revengimg from './include/Animation.gif'
<<<<<<< HEAD
import ChartBoard from "./ChartBoard";
=======
<<<<<<< HEAD
>>>>>>> ea10ad75c22480dda049779564a1a10fd74adee7

=======
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../components/context/Shopcontext";
import { Authcontext } from "../components/context/Authcontact";
>>>>>>> main
const AdminDashboard = () => {
  const { api } = useContext(ShopContext);
  const { user } = useContext(Authcontext);
  const [data1, setData] = useState({
    sales: 0,
    customers: 0,
    orders: 0,
    products: 0,
    order: [],
  });

  useEffect(() => {
    const getData = async () => {
      if (!user?.token) return; // Ensure user is logged in

      try {
        const response = await fetch(`${api}count`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    getData();
  }, [api, user?.token]);
  return (
    <>
      <div>
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-6 col-xl-3">
              <div className="bg-secondary rounded d-flex align-items-center p-4">
                <i className="fa fa-chart-line fa-3x text-primary" />
                <div className="ms-3">
                  <p className="mb-2" style={{textAlign:'start'}}>Total Sale</p>
                  <h6 className="mb-0">${data1.sales}</h6>
                </div>
                <div style={{marginLeft:'auto'}}>
                <FaDollarSign style={{fontSize:'50'}} />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-secondary rounded d-flex align-items-center p-4">
                <i className="fa fa-chart-line fa-3x text-primary" />
                <div className="ms-3">
                  <p className="mb-2" style={{textAlign:'start'}}>Total User</p>
                  <h6 className="mb-0">{data1.customers}</h6>
                </div>
                <div style={{marginLeft:'auto'}}>
                <FaUser  style={{fontSize:'50'}} />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-secondary rounded d-flex align-items-center p-4">
                <i className="fa fa-chart-line fa-3x text-primary" />
                <div className="ms-3">
                  <p className="mb-2" style={{textAlign:'start'}}>Total Order</p>
                  <h6 className="mb-0">{data1.orders}</h6>
                </div>
                <div style={{marginLeft:'auto'}}>
                <FiActivity  style={{fontSize:'50'}} />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-3">
              <div className="bg-secondary rounded d-flex align-items-center p-4">
                <i className="fa fa-chart-line fa-3x text-primary" />
                <div className="ms-3">
                  <p className="mb-2" style={{textAlign:'start'}}>Total Productsales</p>
                  <h6 className="mb-0">{data1.products}</h6>
                </div>
                <div style={{marginLeft:'auto'}}>
                <TbChartInfographic  style={{fontSize:'50'}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-4 px-4 justify-content-between">
          <div className="row g-4">
            <div className="col-sm-12 col-xl-8">
              <div className="bg-secondary text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">Worldwide Sales</h6>
                  <a href>Show All</a>
                </div>
                <ChartBoard/>
                {/* <img src={Dashimg} alt="graph" style={{height:'100%'}} />
                <img src={Dashimg} alt="graph" style={{height:'100%'}} />
                <img src={Dashimg} alt="graph" style={{height:'100%'}} />  */}
               </div>
            </div>
            {/* <div className="col-sm-12 col-xl-6">
              <div className="bg-secondary text-center rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">Salse &amp; Revenue</h6>
                  <a href>Show All</a>
                </div>
                <img src={Revengimg} alt="graph" style={{height:'100%'}} />
                <img src={Revengimg} alt="graph" style={{height:'100%'}} />
                <img src={Revengimg} alt="graph" style={{height:'100%'}} />
              </div>
            </div> */}
          </div>
        </div>
       
        <div className="container-fluid pt-4 px-4">
          <div className="bg-secondary text-center rounded p-4">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="mb-0">Recent Salse</h6>
              <a href>Show All</a>
            </div>
            <div className="table-responsive">
              <table className="table text-start align-middle table-bordered table-hover mb-0">
                <thead>
                  <tr className="text-white">
                    <th scope="col">
                      <input className="form-check-input" type="checkbox" />
                    </th>
                    <th scope="col">Date</th>
                    <th scope="col">Invoice</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                 {data1.order.map((item) => (
                  
                    <tr key={item.id}>
                      
                    <td>
                      <input className="form-check-input" type="checkbox" />
                    </td>
                    <td>{
                      new Date(item.created_at).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })
                      }</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>${item.grand_total}</td>
                    <td>{item.status}</td>
                    <td>
                      <a className="btn btn-sm btn-primary" href>
                        Detail
                      </a>
                    </td>
                  </tr>
                ))} 
                 
                 
              
               
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-12 col-md-6 col-xl-4">
              <div className="h-100 bg-secondary rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <h6 className="mb-0">Messages</h6>
                  <a href>Show All</a>
                </div>
                <div className="d-flex align-items-center border-bottom py-3">
                  <img
                    className="rounded-circle flex-shrink-0"
                    src="https://i.pinimg.com/736x/fb/e9/36/fbe936b6a763e889137730c0864563ac.jpg"
                    alt
                    style={{ width: 40, height: 40 }}
                  />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-0">Jhon Doe</h6>
                      <small>15 minutes ago</small>
                    </div>
                    <span>Short message goes here...</span>
                  </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-3">
                  <img
                    className="rounded-circle flex-shrink-0"
                    src="https://i.pinimg.com/736x/3b/fa/15/3bfa1556963ffea66c5a95422dede65f.jpg"
                    alt
                    style={{ width: 40, height: 40 }}
                  />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-0">Michel</h6>
                      <small>15 minutes ago</small>
                    </div>
                    <span>Short message goes here...</span>
                  </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-3">
                  <img
                    className="rounded-circle flex-shrink-0"
                    src="https://i.pinimg.com/736x/5b/d2/d4/5bd2d4e4748b8a651a6c27bfd0c5730c.jpg"
                    alt
                    style={{ width: 40, height: 40 }}
                  />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-0">Harry Porter</h6>
                      <small>15 minutes ago</small>
                    </div>
                    <span>Short message goes here...</span>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-3">
                  <img
                    className="rounded-circle flex-shrink-0"
                    src="https://i.pinimg.com/736x/04/2b/ab/042bab02ae09f8daaf2403483c6de265.jpg"
                    alt
                    style={{ width: 40, height: 40 }}
                  />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-0">Sathy </h6>
                      <small>15 minutes ago</small>
                    </div>
                    <span>Short message goes here...</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-4">
              <div className="h-100 bg-secondary rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">Calender</h6>
                  <a href>Show All</a>
                </div>
                <div id="calender" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-xl-4">
              <div className="h-100 bg-secondary rounded p-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h6 className="mb-0">To Do List</h6>
                  <a href>Show All</a>
                </div>
                <div className="d-flex mb-2">
                  <input
                    className="form-control bg-dark border-0"
                    type="text"
                    placeholder="Enter task"
                  />
                  <button type="button" className="btn btn-primary ms-2">
                    Add
                  </button>
                </div>
                <div className="d-flex align-items-center border-bottom py-2">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>Short task goes here...</span>
                      <button className="btn btn-sm">
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-2">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>Short task goes here...</span>
                      <button className="btn btn-sm">
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-2">
                  <input
                    className="form-check-input m-0"
                    type="checkbox"
                    defaultChecked
                  />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>
                        <del>Short task goes here...</del>
                      </span>
                      <button className="btn btn-sm text-primary">
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center border-bottom py-2">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>Short task goes here...</span>
                      <button className="btn btn-sm">
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center pt-2">
                  <input className="form-check-input m-0" type="checkbox" />
                  <div className="w-100 ms-3">
                    <div className="d-flex w-100 align-items-center justify-content-between">
                      <span>Short task goes here...</span>
                      <button className="btn btn-sm">
                        <i className="fa fa-times" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-4 px-4">
          <div className="bg-secondary rounded-top p-4">
            <div className="row">
              <div className="col-12 col-sm-6 text-center text-sm-start">
                © <a href="#">Your Site Name</a>, All Right Reserved.
              </div>
              <div className="col-12 col-sm-6 text-center text-sm-end"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
