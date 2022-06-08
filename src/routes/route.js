const express = require('express');
const router = express.Router();


const allController= require("../controllers/allController")


router.post("/createBook", allController.createBook  )

router.post("/createAuthor", allController.createAuthor)

router.get("/allBooks", allController.allBooks)

router.get("/updateBookPrice", allController.updateBookPrice)

router.get("/authorsName", allController.authorsName)

router.get("/getBooksById/:id", allController.getBooksById)

router.get("/getAuthor", allController.getAuthor)


module.exports = router; 