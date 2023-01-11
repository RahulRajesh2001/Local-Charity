import React ,{Fragment, useEffect,useState} from 'react'
import Carousel from "react-material-ui-carousel"
import "./ProductDetails.css"
import {useSelector,useDispatch }from "react-redux"
import { getProductDetails } from '../../actions/productAction'
import ReactStars from "react-rating-stars-component";
import ReviewCard from "./ReviewCard.js"
import Loader from "../layout/Loader/Loader"
import {addItemsToCart } from "../../actions/cartActions"


const ProductDetails = ({match}) => {
 

  const dispatch=useDispatch();

const{product,loading}=useSelector(
  (state)=>state.productsDetails)

  const options={
    edit:false,
    color:"rgba(20,20,20,0.1",
    activeColor:"tomato",
    size:window.innerWidth <600 ? 20 : 25,
    value:product.ratings,
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
            <div className='detailsBlock-2'>
              <ReactStars {...options} />
              <span>({product.numOfReviews } Reviews)</span>
            </div>
            <div className='detailsBlock-3'>
              <div className='detailsBlock-3-1'>
                <div className='detailsBlock-3-1-1'>
                  <button onClick={decreaseQuantity}>-</button>
                  <input readOnly value={quantity} type="number"></input>
                  <button onClick={increaseQuantity}>+</button>
                </div>
                <button onClick={addToCartHandler}>To Order</button>
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
              {product.donator_details && 
              product.donator_details.map((user_details)=>(
                
            <>
             <u> <p className='donatorhead'>Donator Details</p></u>
                Name:<p>{user_details.name}</p>
                PhoneNumber:<p>{user_details.phoneNumber}</p>
                Address:<p>{user_details.address}</p>
                Locality:<p>{user_details.locality}</p>
                City:<p>{user_details.city_district_town}</p>
                Pincode:<p>{user_details.pincode}</p>
                State:<p>{user_details.state}</p>
                Landmark:<p>{user_details.landmark}</p>
                Alternative PhoneNumber:<p>{user_details.alternative_phonenumber}</p> 

                </>
              ))}

              
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
  
      </Fragment>)}
    </Fragment>
  )
}

export default ProductDetails

