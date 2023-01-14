import React, { Fragment, useEffect } from 'react'
import "./Dashboard.css"
import Sidebar from "./Sidebar";
import { Typography } from 'react-md';
import MetaData from "../layout/metadata"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminProducts } from '../../actions/productAction';



const Dashboard = () => {

  const dispatch=useDispatch()

  const {products}=useSelector((state)=>state.products)

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });
  

  useEffect(()=>{
    dispatch(getAdminProducts())
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
            <p>33</p>
          </Link>
          <Link to="/admin/users">
            <p>Users</p>
            <p>77</p>
          </Link>
        </div>
      </div>
    </div>
   
  </div>
 
  
  </Fragment>
 
);
};

export default Dashboard;

