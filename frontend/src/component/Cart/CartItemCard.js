import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";


const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="item" />
      <div>
        <Link to={`/product/${item.product}`}>{item.name}</Link>
        
        <p onClick={() => deleteCartItems(item.product)}>Remove</p>
      </div>
      <div className="itemQuantity">
      <span>{`${item.quantity}`}</span>
      </div>
    </div>
  );
};

export default CartItemCard;