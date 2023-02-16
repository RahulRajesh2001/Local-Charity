import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./productReviews.css";
import {useSelector, useDispatch} from "react-redux";
import {getAllReviews,deleteReviews} from "../../actions/productAction";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from './Sidebar';
import { Fragment } from 'react';
import MetaData from "../layout/metadata";
import ReviewsIcon from '@mui/icons-material/Reviews';


const ProductReviews= ({history}) => {
  const dispatch=useDispatch();

  
  const {reviews}=useSelector((state)=>state.productReviews)

  const[productId, setProductId]=useState("")

  const deleteReviewsHandler=(reviewId)=>{

    dispatch(deleteReviews(reviewId,productId));
   
  }

  const productReviewsSubmitHandler=(e)=>{
    e.preventDefault();
    dispatch(getAllReviews(productId))
  }

  useEffect(()=>{
if(productId.length ===24){
  dispatch(getAllReviews(productId))
}
  


  },[dispatch,history,productId])

  
const columns = [
  { field: 'id', headerName: 'Review_ID', width: 220 },
  {
    field: 'user',
    headerName: 'User',
    width: 150,
    editable: true,
  },
 
  {
    field: 'Comment',
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
                deleteReviewsHandler(params.getValue(params.id, "id"))
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
    key:item._id,
    id: item._id,
    Comment:item.comment,
    user: item.name,
  });
});


  return (
<Fragment>
<MetaData title={"All Reviews"} />

<div className="dashboard">
  <Sidebar/>
  
  <div className="productReviewContainer">

  <form
              className="productReviewForm"
              onSubmit={productReviewsSubmitHandler}
            >
              <h1 className='productReviewsFormHeading'>All Reviews</h1>

              <div>
                <ReviewsIcon/>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                />
              </div>
              

            </form>

   {reviews && reviews.length >0 ? 
  
    <DataGrid
   rows={rows}
   columns={columns}
   pageSize={10}
   rowsPerPageOptions={[5]}
   disableSelectionOnClick
 className='productListTable'
   autoHeight
   experimentalFeatures={{ newEditingApi: true }}

 />:<h1 className='productReviewsFormHeading'>No reviews found</h1>}


  </div>
  
</div>
</Fragment>


  )
}
export default ProductReviews
