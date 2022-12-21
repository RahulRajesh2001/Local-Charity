
import './App.css';
import React from 'react'
import Header from './component/layout/header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './component/layout/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails"


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
      <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
      </Switch>
      <Footer/>
    </Router>
     
  )
}

export default App;
