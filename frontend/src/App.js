
import './App.css';
import React from 'react'
import Header from './component/layout/header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './component/layout/footer/Footer';
import {Routes,Route} from "react-router-dom"
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails"


function App() {
  return (
    <>
    <Header/>
    
    <Routes>
      
      <Route exact path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails/>} />
      
      </Routes>
      <Footer/>
      </>
     
  )
}

export default App;
