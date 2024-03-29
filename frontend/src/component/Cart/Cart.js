import React, { Fragment} from 'react'
import "./Cart.css"
import CartItemCard from "./CartItemCard";
import {useSelector,useDispatch} from "react-redux"
import {removeItemsFromCart } from '../../actions/cartActions';
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Typography } from 'react-md';
import Footer from "../layout/footer/Footer"

const Cart = ({ history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);


  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };


  return (
    <Fragment>
      {cartItems.length ===0 ? (
        <Fragment>
          <div className="emptyCart">
         <RemoveShoppingCartIcon />

         <Typography>No Product in Your Cart</Typography>
         <Link to="/products">View Products</Link>
        
       </div>
        <Footer/>
        </Fragment>
         
      ) :(<Fragment>
        <div className='cartPage'>
            <div className='cartHeader'>
                <p>Item</p>
                <p>Quantity</p>
            </div>
            


{cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemCard item={item} 
                  deleteCartItems={deleteCartItems} />
            
           
                </div>
              ))}


                
                  <div className='cartItemTotalBox'>

                  </div>
                  
                  <div className='checkOutBtn'>
                    <button onClick={checkoutHandler}>Check Out</button>
                  </div>
                
                </div>


                <Footer/>
       
    </Fragment>
    )}
    </Fragment>
  )
}

export default Cart
