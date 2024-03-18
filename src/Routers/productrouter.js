const express = require('express');
const productcontroller = require ('../Controllers/productcontroller');
const router = express.Router();

router.post('/createproduct', productcontroller.createProduct);
router.get('/listproducts/:supermarketId', productcontroller.listProducts);
router.put('/updateproduct/:productId', productcontroller.updateProduct);
router.put('/disableproduct/productId', productcontroller.disableProduct);
router.put('/enableproduct/:productId', productcontroller.enableProduct);

module.exports = router;