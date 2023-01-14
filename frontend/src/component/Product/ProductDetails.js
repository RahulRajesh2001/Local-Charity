import React ,{Fragment, useEffect,useState} from 'react'
import Carousel from "react-material-ui-carousel"
import "./ProductDetails.css"
import {useSelector,useDispatch }from "react-redux"
import { getProductDetails } from '../../actions/productAction'
import ReviewCard from "./ReviewCard.js"
import Loader from "../layout/Loader/Loader"
import {addItemsToCart } from "../../actions/cartActions"
import Footer from "../layout/footer/Footer"


const ProductDetails = ({match,history}) => {
 

  const dispatch=useDispatch();

const{product,loading}=useSelector(
  (state)=>state.productsDetails)

  const options={
    edit:false,
    color:"rgba(20,20,20,0.1",
    activeColor:"tomato",
    size:window.innerWidth <600 ? 20 : 25,
    isHalf:true,
}

const [quantity,setQuantity]=useState(1)

    const increaseQuantity=()=>{
      
        if (product.Stock<=quantity)return;

      const qty=quantity+1;
      setQuantity(qty)
    }

const decreaseQuantity=()=>{

  if (1>=quantity)return;
  
  const qty=quantity-1;
  setQuantity(qty)

}


const addToCartHandler=()=>{

   dispatch(addItemsToCart(match.params.id,quantity))
   
   history.push("/cart")

}





  useEffect(()=>{
    dispatch(getProductDetails(match.params.id))

},[dispatch,match.params.id])

  return (
    <Fragment>
      {loading ? <Loader/>:
      (<Fragment>
        <div className='ProductDetails'>
          <div>
            <Carousel>
              {product.images && 
              product.images.map((item,i)=>(
              <img 
                className="CarouselImage"
                key={item.url}
                src={item.url}
                alt={`${i}Slide`}
                />
              ))}
  
            </Carousel>
          </div>
  
          <div>
            <div className='detailsBlock-1'>
              <h2>{product.name}</h2>
              <p>Product # {product._id}</p>
              
  
            </div>
            <div className='detailsBlock-3'>
              <div className='detailsBlock-3-1'>
                <div className='detailsBlock-3-1-1'>
                  <button onClick={decreaseQuantity}>-</button>
                  <input readOnly value={quantity} type="number"></input>
                  <button onClick={increaseQuantity}>+</button>
                </div>
                <button onClick={addToCartHandler }>To Order</button>
              </div>
              <p>
                    Status:
                    <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                      {product.Stock < 1 ? "OutOfStock" : "InStock"}
                    </b>
              </p>
  
            </div>
            <div className='detailsBlock-4'>
               Description:<p>{product.description}</p>
              Catogory:<p>{product.category}</p>
              <p className='donatorhead'>Donator Details</p>
              Name:<p>{product.yourname}</p>
              Phone Number:<p>{product.phoneNumber}</p>
              Address:<p>{product.address}</p>
              Locality:<p>{product.locality}</p>
              City:<p>{product.city_district_town}</p>
              Pincode:<p>{product.pincode}</p>
              State:<p>{product.state}</p>
              Landmark:<p>{product.landmark}</p>
             
                
         
            

              
            </div>

            <button className='submitReview'>Submit Review</button>
  
          </div>
  
        </div>
  
        <h3 className='reviewsHeading'>Reviews</h3>
  
        {product.reviews && product.reviews[0] ? (
              <div className="reviews">
                {product.reviews &&
                  product.reviews.map((review) => (
                    <ReviewCard key={review._id} review={review} />
                  ))}
              </div>
            ) : (
              <p className="noReviews">No Reviews Yet</p>
            )}
            <Footer/>
  
      </Fragment>)}
    </Fragment>
  )
}

export default ProductDetails

