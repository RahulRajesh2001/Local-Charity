const express=require('express');
const { getAllProducts,createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controller/productController');
const router=express.Router();
const {isAuthenticatedUser, authorizedRoles}=require("../middleware/auth")


router.route('/products').get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails)

module.exports=router;

