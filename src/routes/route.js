const express = require('express');
const router = express.Router();

const allController = require("../controllers/allController")
const allMiddleware = require("../middlewares/allMiddleware")


router.post('/createProduct', allController.createProduct)

router.post('/createUser', allMiddleware.checkHeader, allController.createUser)

router.post('/createOrder', allMiddleware.checkHeader, allController.createOrder)



module.exports = router;