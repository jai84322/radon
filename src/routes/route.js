const express = require('express');
const router = express.Router();

const allController= require("../controllers/allController")


router.post("/createAuthor", allController.createAuthor  )

router.post("/createPublisher", allController.createPublisher  )

router.post("/createBook", allController.createBook  )

router.get("/getBooks", allController.getBooks)

router.put("/updateBooks", allController.updateBooks)

module.exports = router;