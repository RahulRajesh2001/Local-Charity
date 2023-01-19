import React, { Fragment, useEffect} from "react";
import MetaData from "../layout/metadata";
import { Link } from "react-router-dom";
import { Typography } from "react-md";
import SideBar from "./Sidebar";
import {getOrderDetails,updateOrder,} from "../../actions/orderActions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import "./ProcessOrder.css";
import "../Cart/ConfirmOrder.css"


const ProcessOrder = ({ history, match }) => {
  const { order, loading } = useSelector((state) => state.orderDetails);


  const updateOrderSubmitHandler = (e) => {
    e.preventDefault();



    dispatch(updateOrder(match.params.id));
  };

  const dispatch = useDispatch();


  useEffect(() => {

    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, history,match.params.id]);

  return (
    <Fragment>
      <MetaData title="Process Order" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          {loading ? (
            <Loader />
          ) : (
            <div className="confirmOrderPage">
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
                          `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.pinCode}`}
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
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
           <div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default ProcessOrder;