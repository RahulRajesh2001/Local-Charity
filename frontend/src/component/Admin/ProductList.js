import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import "./ProductList.css"
import {useSelector, useDispatch} from "react-redux";
import {getAdminProducts} from "../../actions/productAction";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from './Sidebar';
import { Fragment } from 'react';
import MetaData from "../layout/metadata";
import Footer from '../layout/footer/Footer'





const ProductList = () => {
  const dispatch=useDispatch();

  const {products}=useSelector((state)=>state.products)

  useEffect(()=>{

   dispatch (getAdminProducts())
  },dispatch)

  
const columns = [
  { field: 'id', headerName: 'Product_ID', width: 220 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
 
  {
    field: 'stock',
    headerName: 'Stock',
    type: 'number',
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
            <Link to={`/admin/product/${params.getValue(params.id, "id")}`}>
            <EditIcon />
          </Link>

        <Button>
          <DeleteIcon/>
        </Button>
        </Fragment>
      

       
      );
    },
  },
];

const rows = [];


products &&
products.forEach((item) => {
  rows.push({
    id: item._id,
    stock: item.Stock,
    price: item.price,
    name: item.name,
  });
});


  return (
<Fragment>
<MetaData title={`ALL PRODUCTS - Admin`} />

<div className="dashboard">
  <Sidebar/>
  
  <div className="productListContainer">
    <h1 id="productListHeading">All Products</h1>

   
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

export default ProductList
