import React, { Fragment,useEffect } from 'react'
import {CgMouse} from "react-icons/all"
import "./Home.css"
import Product from "./Product.js"
import MetaData from '../layout/metadata'
import {getProduct} from "../../actions/productAction"
import{useSelector,useDispatch} from "react-redux";


const Home = () => {
  const dispatch=useDispatch();

  const {loading,error,products,productsCount}=useSelector(
    (state)=>state.products)

  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch]);

  return (
   <Fragment>

    <MetaData title="Local Charity"/>

    <div className='banner'>
        <p>Welcome to local charity</p>
        <h1>Find suitable products below</h1>
        <a href="#container">
          <button>
            Scroll<CgMouse/>
          </button>
        </a>
       
    </div>
    <h4 className="homeheading"><u>Recently added donations</u></h4>

    <div className='container' id='container'>

    {products && products.map(product=>(<Product product={product}/>))}
     
    </div>

     </Fragment>
  )
}

export default Home
