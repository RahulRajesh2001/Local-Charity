import React, { Fragment,useEffect } from 'react'
import {CgMouse} from "react-icons/all"
import "./Home.css"
import ProductCard from "./ProductCard"
import MetaData from '../layout/metadata'
import {getProduct} from "../../actions/productAction"
import{useSelector,useDispatch} from "react-redux";
import Loader from '../layout/Loader/Loader';
import Footer from "../layout/footer/Footer";
import background from "../images/charity.webp"


const Home = () => {

  const dispatch=useDispatch();

  const {loading,products,productsCount}=useSelector(
    (state)=>state.products)

  useEffect(()=>{
   
    dispatch(getProduct())
  },[dispatch]);

  return (
    <Fragment>
      {loading?<Loader/>:   <Fragment>

<MetaData title="Local Charity"/>

<div className='banner' style={{backgroundImage:`url(${background})`,
backgroundSize:"cover"
}}>



    <p>Welcome to local charity</p>

    <a href="#container">
      <button>
        Scroll<CgMouse/>
      </button>
    </a>
   
</div>
<h4 className="homeheading"><u>Recently added donations</u></h4>

<div className='container' id='container'>

{products && products.map(product=>(<ProductCard product={product}/>))}
 
</div>
  <Footer/>
 </Fragment>

      }
    </Fragment>

  )
}

export default Home
