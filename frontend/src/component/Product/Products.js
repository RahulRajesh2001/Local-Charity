import React,{Fragment,useEffect,useState} from 'react'
import "./Products.css";
import {useSelector,useDispatch}  from "react-redux";
import { getProduct} from "../../actions/productAction";
import ProductCard from "../Home/ProductCard"
import Loader from "../layout/Loader/Loader"
import Pagination from "react-js-pagination"



const Products = ({match}) => {
  const dispatch=useDispatch();

  const[currentPage,setCurrentPage]=useState(1);

  const {products,loading,resultPerPage}=useSelector(
    (state)=>state.products
  );


  const keyword=match.params.keyword;

  const setCurrentPageNo=(e)=>{
    setCurrentPage(e)
  }

useEffect(()=>{
  dispatch(getProduct(keyword,currentPage))

},[dispatch,keyword,currentPage]);





  return (
    <Fragment>{loading? <Loader/>:
    <Fragment>

      <h2 className='productsHeading'>Donations</h2>
      <div className='products'>

      {products && products.map(product=>(<ProductCard product={product}/>))}
      </div>

    



<div className='paginationBox'>
<Pagination 
activePage={currentPage}
itemsCountPerPage={resultPerPage}
totalItemsCount={8}
onChange={setCurrentPageNo}
nextPageText="Next"
prevPageText="Prev"
firstPageText="1st"
lastPageText="Last"
itemClass='page-item'
linkClass='page-link'
activeClass='pageItemActive'
activeLinkClass='pageLinkActive'



/>
</div>



      
      </Fragment>}

    </Fragment>
  )
}

export default Products
