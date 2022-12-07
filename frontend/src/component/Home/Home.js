import React, { Fragment } from 'react'
import {CgMouse} from "react-icons/all"
import "./Home.css"
import Product from "./Product.js"


const product={
  name:"Blue Tshirt",
  images:[{url:"https://purepng.com/public/uploads/large/purepng.com-sky-blue-t-shirtclothingt-shirtt-shirtdressfashionclothshirt-691522330544ifxvx.png"}],
  _id:"blue tshirt",
  size:"L"
};

const Home = () => {
  return (
   <Fragment>
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

      <Product product={product}/>
      <Product product={product}/>
      <Product product={product}/>
      <Product product={product}/>
      <Product product={product}/>
      <Product product={product}/>
      <Product product={product}/>
      <Product product={product}/>

    </div>

     </Fragment>
  )
}

export default Home
