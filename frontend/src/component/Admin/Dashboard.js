import React, { Fragment, useEffect } from 'react'
import "./Dashboard.css"
import Sidebar from "./Sidebar";
import { Typography } from 'react-md';
import MetaData from "../layout/metadata"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminProducts } from '../../actions/productAction';
import {getAllOrders} from "../../actions/orderActions"
import {getAllUsers} from "../../actions/userActoin";
import Footer from "../layout/footer/Footer";


const Dashboard = () => {

  const dispatch=useDispatch()

  const {products}=useSelector((state)=>state.products)


  const {orders}=useSelector((state)=>state.allOrders)

  const {users}=useSelector((state)=>state.allUsers)

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });
  

  useEffect(()=>{
    dispatch(getAdminProducts())
    dispatch(getAllOrders())
    dispatch(getAllUsers())
  },[dispatch])

return (
  <Fragment>
    <div className="dashboard">
    <MetaData title="Dashboard - Admin Panel" />
    <Sidebar />

    <div className="dashboardContainer">
      <Typography component="h1">Dashboard</Typography>

      <div className="dashboardSummary">
        <div>
        </div>
        <div className="dashboardSummaryBox2">
          <Link to="/admin/products">
            <p>Product</p>
            <p>{products && products.length}</p>
          </Link>
          <Link to="/admin/orders">
            <p>Orders</p>
            <p>{orders && orders.length}</p>
          </Link>
          <Link to="/admin/users">
            <p>Users</p>
            <p>{ users && users.length}</p>
          </Link>
        </div>
      </div>
    </div>
   
  </div>
  <Footer/>
 
  
  </Fragment>
 
);
};

export default Dashboard;

