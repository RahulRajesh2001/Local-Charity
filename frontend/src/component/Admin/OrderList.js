import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./ProductList.css"
import {useSelector, useDispatch} from "react-redux";
import {getAllOrders,deleteOrder} from "../../actions/orderActions";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from './Sidebar';
import { Fragment } from 'react';
import MetaData from "../layout/metadata";






const OrderList = ({history}) => {
  const dispatch=useDispatch();

  const {orders}=useSelector((state)=>state.allOrders)
  

  const deleteOrderHandler=(id)=>{

    dispatch(deleteOrder(id));
    history.push("/admin/dashboard")
  }

  useEffect(()=>{

  

   dispatch (getAllOrders())
  },[dispatch,history])

  
const columns = [
  { field: 'id', headerName: 'Product_ID', width: 220 },
  
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    width: 150,
    renderCell:  (params) =>
     {
      return (
        <Fragment>
            <Link to={`/admin/order/${params.getValue(params.id, "id")}`}>
            <MenuOpenIcon />
          </Link>

          <Button
              onClick={() =>
                deleteOrderHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
        </Fragment>
      

       
      );
    },
  },
];

const rows = [];


orders &&
orders.forEach((item) => {
  rows.push({
    id: item._id,
  
   
  });
});

  return (
<Fragment>
<MetaData title={"All Orders"} />

<div className="dashboard">
  <Sidebar/>
  
  <div className="productListContainer">
    <h1 id="productListHeading">All Orders</h1>

   
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
      className='productListTable'
        autoHeight
        experimentalFeatures={{ newEditingApi: true }}

      />


  </div>
  
</div>
</Fragment>


  )
}

export default OrderList;
