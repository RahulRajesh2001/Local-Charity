import React, { Fragment } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import "./OrderSuccess.css";
import { Typography } from "react-md";
import { Link } from "react-router-dom";
import CheckoutSteps from "./CheckoutSteps";
import Footer from "../layout/footer/Footer"


const OrderSuccess = () => {
  return (<Fragment>
      <div className="checksteps">
      <CheckoutSteps activeStep={2} />
    </div>
    <div className="orderSuccess">
      
      <CheckCircleIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
    <Footer/>
  </Fragment>
  
  );
};

export default OrderSuccess;
