import React,{Fragment,useEffect,useState} from 'react'
import "./Products.css";
import {useSelector,useDispatch}  from "react-redux";
import { getProduct} from "../../actions/productAction";
import ProductCard from "../Home/ProductCard"
import Loader from "../layout/Loader/Loader"
import { Typography } from 'react-md';
import Footer from "../layout/footer/Footer"


const categories = [
  "Books",
  "Cloths"
];


const Products = ({match}) => {
  const dispatch=useDispatch();


  const [category, setCategory] = useState("");



  const {products,loading}=useSelector(
    (state)=>state.products
  );


  const keyword=match.params.keyword;


useEffect(()=>{
  dispatch(getProduct(keyword,category))

},[dispatch,keyword,category]);





  return (
    <Fragment>{loading? <Loader/>:
    <Fragment>

      <h2 className='productsHeading'>Donations</h2>
      <div className='products'>

      {products && products.map(product=>(<ProductCard product={product}/>))}
      </div>
      

      <div className='filterBox'>

      <Typography>Categories</Typography>
            <ul className="categoryBox">
              {categories.map((category) => (
                <li
                  className="category-link"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
       
      </div>

          
            
            <Footer/>
</Fragment>
}
</Fragment>
  
  )}

export default Products


