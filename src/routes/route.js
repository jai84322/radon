const express = require('express');
const router = express.Router();


const commonMW = require('../middlewares/firstMiddleware')
const allController = require('../controllers/allController')

router.get('/checkApi', commonMW.mid1, allController.dateIpRoute )


module.exports = router;