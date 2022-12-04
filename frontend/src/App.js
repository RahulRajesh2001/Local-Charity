
import './App.css';
import React from 'react'
import Header from './component/layout/header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './component/layout/footer/Footer';
import {BrowserRouter as Router} from "react-router-dom"


function App() {
  return (
    <Router>
      <Header/>
      <Footer/>
    </Router>

      
      
    
  
   
  )
}

export default App;
