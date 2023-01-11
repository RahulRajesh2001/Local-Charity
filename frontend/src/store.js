import{createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productDetailsReducer, productReducer } from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer=combineReducers({
    products:productReducer,
    productsDetails:productDetailsReducer,
    user:userReducer,
    cart:cartReducer

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