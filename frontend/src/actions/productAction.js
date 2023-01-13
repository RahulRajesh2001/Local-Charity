import axios from "axios";
import { ALL_PRODUCT_REQUEST
    ,ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL, 
    NEW_USERPRODUCT_REQUEST,
    NEW_USERPRODUCT_SUCCESS,
    NEW_USERPRODUCT_FAIL,
    CLEAR_ERRORS} from "../constants/productConstants"


    export const getProduct =
    (keyword = "", currentPage = 1,category) =>
    async (dispatch) => {
      try {
        dispatch({ type: ALL_PRODUCT_REQUEST });
  
        let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&category=${category}`;
  
        if(category){

          link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&category=${category}`;
        }else{
          link =`/api/v1/products`
         }
  
  
        const { data } = await axios.get(link);
  
        dispatch({
          type: ALL_PRODUCT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: ALL_PRODUCT_FAIL,
          payload: error.response.data.message,
        });
      }
    };

  //getAll products for admin
  export const getAdminProducts = () => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_PRODUCT_REQUEST });
  
      const {data} = await axios.get(`/api/v1/admin/products`);
  
      dispatch({
        type: ADMIN_PRODUCT_SUCCESS,
        payload: data.products,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
    


// Get Products Details
export const getProductDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });
  
      const {data} = await axios.get(`/api/v1/product/${id}`);
  
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data.product,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
    //action for creating product
    
    export const createProduct = (productData) => async (dispatch) => {
      try {
        dispatch({ type: NEW_PRODUCT_REQUEST });
    
        const config = {
          headers: { "Content-Type": "application/json" },
        };
    
        const { data } = await axios.post(
          `/api/v1/admin/product/new`,
          productData,
          config
        );
    
        dispatch({
          type: NEW_PRODUCT_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: NEW_PRODUCT_FAIL,
          payload: error.response.data.message,
        });
      }
    };

//Action for creating new products for users

export const createNewUserProduct = (productData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_USERPRODUCT_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/user/product/new`,
      productData,
      config
    );

    dispatch({
      type: NEW_USERPRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type:NEW_USERPRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};
    
    
    //for clearing errors

    export const clearErrors=()=>async (dispatch)=>{

        dispatch({type:CLEAR_ERRORS})

    }

