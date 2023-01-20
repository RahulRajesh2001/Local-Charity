import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./productReviews.css"
import {useSelector, useDispatch} from "react-redux";
import {getAllReviews,deleteReviews} from "../../actions/productAction";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from './Sidebar';
import { Fragment } from 'react';
import MetaData from "../layout/metadata";






const ProductReviews = ({history}) => {
  const dispatch=useDispatch();

  
  const {reviews}=useSelector((state)=>state.productReviews)

  const deleteProductHandler=(id)=>{

    //dispatch(deleteProduct(id));
    
  }

  useEffect(()=>{

    history.push("/admin/reviews")

   dispatch (getAllReviews())
  },[dispatch,history])

  
const columns = [
  { field: 'id', headerName: 'Product_ID', width: 220 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'product_name',
    headerName: 'Product Name',
    width: 150,
    editable: true,
  },
 
  {
    field: 'comment',
    headerName: 'Comment',
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

          <Button
              onClick={() =>
                deleteProductHandler(params.getValue(params.id, "id"))
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


reviews &&
reviews.forEach((item) => {
  rows.push({
    id: item._id,
    stock: item.Stock,
    price: item.price,
    name: item.name,
  });
});


  return (
<Fragment>
<MetaData title={"All Reviews"} />

<div className="dashboard">
  <Sidebar/>
  
  <div className="productListContainer">
    <h1 id="productListHeading">All Reviews</h1>

   
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


export default ProductReviews
