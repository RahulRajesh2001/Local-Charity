import React ,{Fragment, useEffect,useState} from 'react'
import Carousel from "react-material-ui-carousel"
import "./ProductDetails.css"
import {useSelector,useDispatch }from "react-redux"
import { getProductDetails, newReview } from '../../actions/productAction'
import ReviewCard from "./ReviewCard.js"
import Loader from "../layout/Loader/Loader"
import {addItemsToCart } from "../../actions/cartActions"
import Footer from "../layout/footer/Footer";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { NEW_REVIEW_RESET } from '../../constants/productConstants'


const ProductDetails = ({match,history}) => {
 

  const dispatch=useDispatch();

const{product,loading}=useSelector((state)=>state.productsDetails)

const {success }=useSelector((state)=>state.newReview)


const [quantity,setQuantity]=useState(1)
const [open,setOpen]=useState(false)
const [comment,setComment]=useState("")

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

const submitReviewToggle=()=>{

  open ? setOpen(false): setOpen(true)

}

const reviewSubmitHandler=()=>{

  const myform=new FormData();

  myform.set("comment",comment);
  myform.set("productId",match.params.id)


  dispatch(newReview(myform));
  history.push(`/product/${match.params.id}`)
  

  setOpen(false);

}

useEffect(() => {
  
  if (success) {
    dispatch({ type: NEW_REVIEW_RESET});
  }


  dispatch(getProductDetails(match.params.id));
}, [dispatch,success, match.params.id]);

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

            <button onClick={submitReviewToggle} className='submitReview'>Submit Review</button>
  
          </div>
  
        </div>
  
        <h3 className='reviewsHeading'>Reviews</h3>
         

        <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
  
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

