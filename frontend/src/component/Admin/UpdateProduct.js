import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct,getProductDetails} from "../../actions/productAction";
import Button from '@mui/material/Button';
import MetaData from "../layout/metadata";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DescriptionIcon from '@mui/icons-material/Description';
import StorageIcon from '@mui/icons-material/Storage';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import HomeIcon from '@mui/icons-material/Home';
import PlaceIcon from '@mui/icons-material/Place';
import Sidebar from "./Sidebar";
import {UPDATE_PRODUCT_RESET} from "../../constants/productConstants"

const UpdateProduct= ({ history,match }) => {
  const dispatch = useDispatch();

  const { product} = useSelector((state) => state.productDetails);
  const {
    loading,
    isUpdated,
  } = useSelector((state) => state.product);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [oldImages,setOldImages]=useState([])
  const [imagesPreview, setImagesPreview] = useState([]);

//for donator details
const [yourname, setyourname] = useState("");
const [phoneNumber, setphoneNumber] = useState();
const [address, setaddress] = useState("");
const [locality, setlocality] = useState("");
const [city_district_town, setcity_district_town] = useState("");
const [pincode, setpincode] = useState();
const [state, setstate] = useState("");
const [landmark, setlandmark] = useState("");


  const categories = [
   "Cloths",
   "Books"
  ];

  const productId = match.params.id;

  useEffect(() => {
    if (product && product._id !== productId) {
      dispatch(getProductDetails(productId));
    } else {
      setName(product.name);
      setDescription(product.description);
      setCategory(product.category);
      setStock(product.Stock);
      setOldImages(product.images);
      setyourname(product.yourname)
      setphoneNumber(product.phoneNumber)
      setaddress(product.address)
      setlocality(product.locality)
      setcity_district_town(product.city_district_town)
      setpincode(product.pincode)
      setstate(product.state)
      setlandmark(product.landmark)
    }
   

    if (isUpdated) {
      history.push("/admin/products");
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
  }, [dispatch,history,isUpdated,productId,product]);

const updateProductSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);

    myForm.set("yourname", yourname);
    myForm.set("phoneNumber", phoneNumber);
    myForm.set("address", address);
    myForm.set("locality",locality);
    myForm.set("city_district_town", city_district_town);
    myForm.set("pincode", pincode);
    myForm.set("state", state);
    myForm.set("landmark", landmark);


    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(updateProduct(productId, myForm));
  };

  const updateProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);
    setOldImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="Update Product" />
      <div className="dashboard">
        <Sidebar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={updateProductSubmitHandler }
          >
            <h1>Create Product</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Product Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <AccountTreeIcon />
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Stock"
                required
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={updateProductImagesChange}
                multiple
              />
            </div>

            
            <div id="createProductFormImage">
              {oldImages &&
                oldImages.map((image, index) => (
                  <img key={index} src={image.url} alt="Old Product Preview" />
                ))}
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>

                  <p className="donatordetails">Details For YOu</p>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Your Name"
                required
                value={yourname}
                onChange={(e) => setyourname(e.target.value)}
              />
            </div>
            <div>
              <PhoneIphoneIcon/>
              <input
                type="number"
                placeholder="Phone Number"
                required
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
              />
            </div>
            <div>
              <HomeIcon  />
              <input
                type="text"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
            </div>
            <div>
              <PlaceIcon/>
              <input
                type="text"
                placeholder="Locality"
                required
                value={locality}
                onChange={(e) => setlocality(e.target.value)}
              />
            </div>
            <div>
              
              <input
                type="text"
                placeholder="City"
                required
                value={city_district_town}
                onChange={(e) => setcity_district_town(e.target.value)}
              />
            </div>
            <div>
              
              <input
                type="number"
                placeholder="Pincode"
                required
                value={pincode}
                onChange={(e) => setpincode(e.target.value)}
              />
            </div>
            <div>
              
              <input
                type="text"
                placeholder="State"
                required
                value={state}
                onChange={(e) => setstate(e.target.value)}
              />
            </div>
            <div>
              
              <input
                type="text"
                placeholder="Landmark"
                required
                value={landmark}
                onChange={(e) => setlandmark(e.target.value)}
              />
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateProduct;
