// import React,{Fragment,useEffect} from 'react'
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';
// import {Link} from "react-router-dom";
// import { Typography } from 'react-md';
// import MetaData from "../layout/metadata"
// import LaunchIcon from '@mui/icons-material/Launch';
// import {useDispatch, useSelector} from "react-redux"
// import Loader from "../layout/Loader/Loader"



// const MyOrders = () => {

// const dispatch=useDispatch();

// const {loading,orders}=useSelector((state)=>state.MyOrders)
// const {user}=useSelector((state)=>state.user)

// const columns=[];
// const rows=[];


// useEffect(()=>{


//   dispatch(myOrders())
// },[dispatch])

// // it returns a table
//   return (

//     <Fragment>
//       <MetaData title={`${user.name} - Orders`} />

//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="myOrdersPage">
//           <DataGrid
//             rows={rows}
//             columns={columns}
//             pageSize={10}
//             disableSelectionOnClick
//             className="myOrdersTable"
//             autoHeight
//           />

//           <Typography id="myOrdersHeading">{user.name}'s Orders</Typography>
//         </div>
//       )}
//     </Fragment>
//   );
// };

// export default MyOrders


import React from 'react'

const MyOrders = () => {
  return (
    <div>
      
    </div>
  )
}

export default MyOrders
