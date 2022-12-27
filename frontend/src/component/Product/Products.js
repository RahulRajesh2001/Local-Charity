import React,{Fragment,useEffect} from 'react'
import "./Products.css";
import {useSelector,useDispatch}  from "react-redux";
import { getProduct} from "../../actions/productAction";
import ProductCard from "../Home/ProductCard"
import Loader from "../layout/Loader/Loader"

const Donations = ({match}) => {
  const dispatch=useDispatch();
  const {products,loading,productCount}=useSelector(
    (state)=>state.products
  );


  const keyword=match.params.keyword;

useEffect(()=>{
  dispatch(getProduct(keyword))

},[dispatch,keyword]);


  return (
    <Fragment>{loading? <Loader/>:
    <Fragment>

      <h2 className='productsHeading'>Donations</h2>
      <div className='products'>

      {products && products.map(product=>(<ProductCard product={product}/>))}
      </div>
      
      </Fragment>}

    </Fragment>
  )
}

export default Donations
