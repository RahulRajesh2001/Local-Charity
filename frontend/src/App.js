
import './App.css';
import React from 'react'
import Header from './component/layout/header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './component/layout/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails"
import Products from "./component/Product/Products"
import Search from "./component/Product/Search"
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store"
import { loadUser } from './actions/userActoin';
import { useEffect } from 'react';
import UserOptions from "./component/layout/header/UserOptions"
import { useSelector } from 'react-redux';


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
        <Route  path="/search" component={Search} />

        <Route exact path="/login" component={LoginSignUp}/>
      </Switch>
      <Footer/>
    </Router>
     
  )
}

export default App;
