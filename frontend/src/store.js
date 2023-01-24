import{createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
        newUserProductReducer,
        productDetailsReducer, 
        productsReducer,
        productReducer, 
        productReviewsReducer,
        reviewReducer,
        newReviewReducer} from "./reducers/productReducer";


import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";


import {allOrdersReducer,
     myOrderDetailsReducer,
     myOrdersReducer,
      newOrderReducer, 
      orderDetailsReducer, 
      orderReducer} from "./reducers/orderReducer";



const reducer=combineReducers({
    products:productsReducer,
    productsDetails:productDetailsReducer,
    user:userReducer,
    cart:cartReducer, 
    newOrder:newOrderReducer,
    myOrder:myOrdersReducer,
    newUserProduct:newUserProductReducer,
    product:productReducer,
    allOrders:allOrdersReducer,
    order:orderReducer,
    orderDetails:orderDetailsReducer,
    profile: profileReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    productReviews: productReviewsReducer,
    review: reviewReducer,
    forgotPassword: forgotPasswordReducer,
    myOrderDetails:myOrderDetailsReducer,
    newReview: newReviewReducer,
});

let initialState={

    cartItems:localStorage.getItem("cartItems")
?JSON.parse(localStorage.getItem("cartItems")):[],

    shippingInfo:localStorage.getItem("shippingInfo")
    ?JSON.parse(localStorage.getItem("shippingInfo")):{},

};
const middleware=[thunk];

const store= createStore(reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)));


export default store  ;  