
import './App.css';
import React from 'react'
import Header from './component/layout/header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './component/layout/footer/Footer';
import {Routes,Route} from "react-router-dom"
import Home from "./component/Home/Home.js"


function App() {
  return (
    <>
    <Header/>
    
    <Routes>
      
      <Route exact path="/" element={<Home />} />
      
      </Routes>
      <Footer/>
      </>
     
  )
}

export default App;
