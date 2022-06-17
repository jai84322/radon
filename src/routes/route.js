const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")





router.get("/getVaccineSession", CowinController.getVaccine)

router.get("/getLondonWeather", CowinController.londonWeather)

router.get("/getLondonTemp", CowinController.londonTemp)

router.get("/getCitiesTemp", CowinController.getSortedCities)

router.get("/getMemes", CowinController.allMemes)

router.post("/createdMemes", CowinController.createMemes)



module.exports = router;  