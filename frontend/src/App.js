
import './App.css';
import React from 'react'
import Header from './component/layout/header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails"
import Products from "./component/Product/Products"
import Search from "./component/Product/Search"
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store"
import { loadUser, updateUser } from './actions/userActoin';
import { useEffect } from 'react';
import UserOptions from "./component/layout/header/UserOptions"
import { useSelector } from 'react-redux';
import Profile from './component/User/Profile';
import ProtectedRoute from "./component/Route/ProtectedRoute"
import Cart from "./component/Cart/Cart"
import Shipping from "./component/Cart/Shipping.js";
import ConfirmOrder from "./component/Cart/ConfirmOrder"
import OrderSuccess from "./component/Cart/OrderSuccess"
import MyOrders from "./component/Order/MyOrders";
import Dashboard from "./component/Admin/Dashboard"
import ProductList from "./component/Admin/ProductList"
import NewUserProduct from "./component/Product/NewUserProduct"
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import OrderDetails from "./component/Admin/OrderDetails"
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from './component/User/UpdatePassword';
import ForgotPassword from "./component/User/ForgotPassword"
import ResetPassword from "./component/User/ResetPassword";
import MyOrderDetails from "./component/Order/MyOrderDetails";
import Contact from "./component/layout/Contact/Contact";
import About from './component/layout/About/About';



function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {

    store.dispatch(loadUser());

   
  }, []);
  return (
    <Router>
      <Header/>

      {isAuthenticated && <UserOptions user={user} />}
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products}/>

        <Route  path="/search" component={Search} />
        <Route exact path="/cart" component={Cart}/>

        <ProtectedRoute exact path="/account" component={Profile}/>
        <Route exact path="/login" component={LoginSignUp}/>
        <ProtectedRoute exact path="/shipping" component={Shipping}/>
        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder}/>
        <ProtectedRoute exact path="/success" component={OrderSuccess}/>

        <ProtectedRoute exact path="/orders" component={MyOrders}/>
        <ProtectedRoute  isAdmin={true} exact path="/admin/dashboard" component={Dashboard}/>
        <ProtectedRoute  isAdmin={true} exact path="/admin/products" component={ProductList}/>
        <ProtectedRoute  isAdmin={true} exact path="/admin/product/:id" component={UpdateProduct}/>
        <ProtectedRoute  isAdmin={true} exact path="/admin/orders" component={OrderList}/>
        <ProtectedRoute  isAdmin={true} exact path="/admin/order/:id" component={OrderDetails}/>
        <ProtectedRoute  isAdmin={true} exact path="/admin/users" component={UsersList}/>
        <ProtectedRoute  isAdmin={true} exact path="/admin/user/:id" component={UpdateUser}/>
        <ProtectedRoute  isAdmin={true} exact path="/admin/reviews" component={ProductReviews}/>
        <ProtectedRoute exact path="/me/update" component={UpdateProfile}/>
        <ProtectedRoute exact path="/password/update" component={UpdatePassword}/>
        <Route exact path="/password/forgot" component={ForgotPassword}/>
        <Route exact path="/password/reset/:token" component={ResetPassword}/>
        <ProtectedRoute exact path="/order/:id" component={MyOrderDetails}/>
        <ProtectedRoute exact path="/contact" component={Contact}/>
        <ProtectedRoute exact path="/about" component={About}/>

        <ProtectedRoute exact path="/user/product/new" component={NewUserProduct}/>

      </Switch>
    </Router>
     
  )
}

export default App;
