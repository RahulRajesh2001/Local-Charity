import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./ProductList.css"
import {useSelector, useDispatch} from "react-redux";
import {getAdminProducts,deleteProduct,clearErrors} from "../../actions/productAction";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Sidebar from './Sidebar';
import { Fragment } from 'react';
import MetaData from "../layout/metadata";
import { useAlert } from "react-alert";





const ProductList = ({history}) => {
  const dispatch=useDispatch();
  const alert = useAlert();

  const {error,products}=useSelector((state)=>state.products)
  
  const { error: deleteError, isDeleted } = useSelector((state) => state.product);

  const deleteProductHandler=(id)=>{

    dispatch(deleteProduct(id));
   
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
      alert.success("Product Deleted Successfully");
      history.push("/admin/dashboard");
     
    }

    dispatch(getAdminProducts());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  
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


products &&
products.forEach((item) => {
  rows.push({
    id: item._id,
    stock: item.Stock,
    name: item.name,
  });
});


  return (
<Fragment>
<MetaData title={"All admin products"} />

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
