const express=require('express');
const { getAllProducts,createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controller/productController');
const router=express.Router();
const {isAuthenticatedUser, authorizedRoles}=require("../middleware/auth")


router.route('/products').get( getAllProducts);
router.route("/product/new").post(isAuthenticatedUser,authorizedRoles("admin"),createProduct);
router.route("/product/:id").put(isAuthenticatedUser,authorizedRoles("admin"),updateProduct).delete(isAuthenticatedUser,authorizedRoles("admin"),deleteProduct).get(getProductDetails)

module.exports=router;

