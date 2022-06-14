const express = require('express');
const router = express.Router();
const allController= require("../controllers/allController")
const checkToken = require ("../middlewares/auth")



router.post("/createUser", allController.createUser  )

router.post("/login", allController.loginUser)

router.get("/user/:userId", checkToken.checkToken, allController.getUserData)

router.put("/user/:userId", checkToken.checkToken, allController.updateUser)

router.delete("/user/:userId", checkToken.checkToken, allController.deleteUser)

module.exports = router;