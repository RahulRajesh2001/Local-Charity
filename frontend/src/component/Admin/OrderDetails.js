import React, { Fragment, useEffect} from "react";
import MetaData from "../layout/metadata";
import { Typography } from "react-md";
import SideBar from "./Sidebar";
import {getOrderDetails,} from "../../actions/orderActions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import "./orderDetails.css";
import Button from '@mui/material/Button';


const OrderDetails = ({ history, match }) => {
  const { order, loading } = useSelector((state) => state.orderDetails);


const backToDashboard=()=>{

  history.push("/admin/dashboard")
}

  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();


    dispatch(getOrderDetails(match.params.id));
  };

  const dispatch = useDispatch();

 

  useEffect(() => {

    dispatch(getOrderDetails(match.params.id));
  }, [dispatch,match.params.id]);

  return (
    <Fragment>
      <MetaData title="Order Details" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          {loading ? (
            <Loader />
          ) : (
            <div>
              <div>
                <div className="confirmshippingArea">
                  <Typography>Delivering Details</Typography>
                  <div className="orderDetailsContainerBox">
                    <div>
                      <p>Name:</p>
                      <span>{order.user && order.user.name}</span>
                    </div>
                    <div>
                      <p>Phone:</p>
                      <span>
                        {order.shippingInfo && order.shippingInfo.phoneNo}
                      </span>
                    </div>
                    <div>
                      <p>Address:</p>
                      <span>
                        {order.shippingInfo &&
                          `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="confirmCartItems">
                  <Typography>Your Cart Items:</Typography>
                  <div className="confirmCartItemsContainer">
                    {order.orderItems &&
                      order.orderItems.map((item) => (
                        <div key={item.product}>
                          <img src={item.image} alt="Product" />
                          
                            {item.name}
                          
                          <span>
                            {item.quantity} 
                            
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
                <Button onClick={backToDashboard}>Back to dashboard</Button>
              </div>
            
             
            </div>
             
          )}

         
        </div>
      </div>
    </Fragment>
  );
};



export default OrderDetails
