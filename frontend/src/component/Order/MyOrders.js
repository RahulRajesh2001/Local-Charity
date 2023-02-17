import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./MyOrders.css"
import {useSelector, useDispatch} from "react-redux";
import { clearErrors, myOrders } from "../../actions/orderActions";
import {Link} from "react-router-dom";
import { Typography } from 'react-md';
import { Fragment } from 'react';
import MetaData from "../layout/metadata";
import Loader from "../layout/Loader/Loader";
import LaunchIcon from '@mui/icons-material/Launch';
import Footer from "../layout/footer/Footer"




const MyOrders = () => {
    const dispatch = useDispatch();
  
    
  
    const { loading, error, orders } = useSelector((state) => state.myOrder);
    const { user } = useSelector((state) => state.user);
  
    const columns = [
      { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },
  
      {
        field: "itemsQty",
        headerName: "Items Qty",
        type: "number",
        minWidth: 150,
        flex: 0.3,
      },
      {
        field: "product",
        headerName: "Product Name",
        type: "number",
        minWidth: 150,
        flex: 0.3,
      },
  
  
    
  
      {
        field: "actions",
        flex: 0.3,
        headerName: "Actions",
        minWidth: 150,
        type: "number",
        sortable: false,
        renderCell: (params) => {
          return (
            <Link to={`/order/${params.getValue(params.id, "id")}`}>
              <LaunchIcon />
            </Link>
          );
        },
      },
    ];
    const rows = [];
  
    orders &&
      orders.forEach((item, index) => {
        rows.push({
          itemsQty: item.orderItems.length,
          id: item._id,
        });
      });
  
    useEffect(() => {
      if (error) {
       
        dispatch(clearErrors());
      }
  
      dispatch(myOrders());
    }, [dispatch,  error]);
  
    return (
      <Fragment>
        <MetaData title={`${user.name} - Orders`} />
  
        {loading ? (
          <Loader />
        ) : (
          <div className="myOrdersPage">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="myOrdersTable"
              autoHeight
            />
  
            <Typography id="myOrdersHeading">{user.name}'s Orders</Typography>
          </div>
          
        )}
        <Footer/>
      </Fragment>
    );
  };
  
  export default MyOrders;