import React, { Fragment} from 'react'
import "./Cart.css"
import CartItemCard from "./CartItemCard";
import {useSelector,useDispatch} from "react-redux"
import { addItemsToCart,removeItemsFromCart } from '../../actions/cartActions';
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Typography } from 'react-md';

const Cart = (id) => {

  const dispatch=useDispatch();
  
  const { cartItems } = useSelector((state) => state.cart);
  
 dispatch(addItemsToCart(id))

const deleteCartItems=(id)=>{
  dispatch(removeItemsFromCart(id))
}

  return (
    <Fragment>
      {cartItems.length ===0 ? (
         <div className="emptyCart">
         <RemoveShoppingCartIcon />

         <Typography>No Product in Your Cart</Typography>
         <Link to="/products">View Products</Link>
       </div>
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
                    <button>Check Out</button>
                  </div>
                </div>


           
        
    </Fragment>
    )};
    </Fragment>
  )
}

export default Cart
