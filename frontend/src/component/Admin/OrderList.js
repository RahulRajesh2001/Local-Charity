import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./ProductList.css"
import {useSelector, useDispatch} from "react-redux";
import {getAllOrders,deleteOrder,  clearErrors} from "../../actions/orderActions";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from './Sidebar';
import { Fragment } from 'react';
import MetaData from "../layout/metadata";
import Footer from "../layout/footer/Footer";
import { useAlert } from "react-alert";




const OrderList = ({history}) => {
  const dispatch=useDispatch();
  const alert = useAlert();

  const {error,orders}=useSelector((state)=>state.allOrders)
  const { error: deleteError, isDeleted } = useSelector((state) => state.order);
  

  const deleteOrderHandler=(id)=>{

    dispatch(deleteOrder(id));
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Order Deleted Successfully");
      history.push("/admin/orders");
     
    }

    dispatch(getAllOrders());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  
const columns = [
  { field: 'id', headerName: 'Product_ID', width: 220 },

  {
    field: 'user',
    headerName: 'User_id',
    width: 150,
    editable: true,
  },
  
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
    user: item.user,
  
   
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
<Footer/>
</Fragment>


  )
}

export default OrderList;
