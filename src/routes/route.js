const express = require('express');
const router = express.Router();


const allController= require("../controllers/allController")


router.post("/createBook", allController.createBook  )

router.post("/createAuthor", allController.createAuthor)

router.get("/allBooks", allController.allBooks)

router.get("/updateBookPrice", allController.updateBookPrice)

router.get("/authorsName", allController.authorsName)


module.exports = router; 