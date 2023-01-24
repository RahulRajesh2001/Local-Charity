import React, { Fragment, useEffect } from "react";
import "./MyOrderDetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/metadata";
import { Link } from "react-router-dom";
import { Typography } from "react-md";
import { myOrderDetails, clearErrors } from "../../actions/orderActions";
import Loader from "../layout/Loader/Loader";
import Button from '@mui/material/Button';

const OrderDetails = ({history, match }) => {
  const { order, error, loading } = useSelector((state) => state.myOrderDetails);

  const dispatch = useDispatch();
  
const backToProfile=()=>{

    history.push("/account")
}


  useEffect(() => {
    if (error) {

      dispatch(clearErrors());
    }

    dispatch(myOrderDetails(match.params.id));
  }, [dispatch,  error, match.params.id]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Order Details" />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Order_ID  :{order && order._id}
              </Typography>
              <Typography>Delivering Details
              </Typography>
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

            <div className="orderDetailsCartItems">
              <Typography>Order Items:</Typography>
              <div className="orderDetailsCartItemsContainer">
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} 
                      </span>
                    </div>
                  ))}
                  <Button onClick={backToProfile}>Profile</Button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;