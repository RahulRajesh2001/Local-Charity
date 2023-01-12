import React, { Fragment } from 'react';
import CheckoutSteps from "../Cart/CheckoutSteps";
import {useDispatch,useSelector} from "react-redux";
import MetaData from "../layout/metadata";
import "./ConfirmOrder.css";
import { Link } from 'react-md';
import { Typography } from 'react-md';
import { createOrder } from '../../actions/orderActions';




const ConfirmOrder = ({history}) => {
    
  const dispatch = useDispatch();

    const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);



    const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;


    const Order={

      shippingInfo,
    orderItems:cartItems

    }

    // the order details are add on the here
    const placeOrder = () => {
        const data = {
         
        };
        if(Order){
          sessionStorage.setItem("orderInfo", JSON.stringify(data));
          history.push("/success");
          dispatch(createOrder(Order))

        }
    
        
      };

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Delivering Details</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
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
            </div>
          </div>
        </div>
    
        
          <div className='orderSummary'>
             <button onClick={placeOrder}>Place Order</button>
             </div>
           
          </div>
          
        
      
    </Fragment>
  )
}

export default ConfirmOrder
