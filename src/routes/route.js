const express = require('express');

const problem1 = require("../logger/logger")
const problem2 = require("../util/helper")
const problem3 = require("../validator/formatter") 


const router = express.Router();

router.get('/test-me', function (req, res) {

    problem1.welcome ()

    problem2.abc ()
    problem2.def ()
    problem2.ghi ()

    problem3.trim ()
    problem3.toLowerCase ()
    problem3.toUpperCase ()

res.send("this is my first api!")

});


module.exports = router;
// adding this comment for no reason