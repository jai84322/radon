const express = require('express');

const problem1 = require("../logger/logger")
const problem2 = require("../util/helper")
const problem3 = require("../validator/formatter") 


const router = express.Router();

router.get('/test-me', function (req, res) {

    problem1.welcome ()

    problem2.printDate ()
    problem2.printMonth ()
    problem2.getBatchInfo ()

    problem3.trim ()
    problem3.toLowerCase ()
    problem3.toUpperCase ()

res.send("this is my first api!")
});




router.get('/hello', function (req, res) {
    let months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    let getLoad = require("lodash");
    console.log(getLoad.chunk(months, months.length / 4));

    let oddNoArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    console.log(getLoad.tail(oddNoArray))

    let unionFx = function (...a) {
        return getLoad.union(...a);
    }
    let array1 = [1, 2, 3, 4];
    let array2 = [5, 6, 3, 1];
    let array3 = [7, 9, 6, 1];
    let array4 = [13, 8, 5, 4];
    let array5 = [8, 13, 9, 2];
    console.log(unionFx(array1, array2, array3, array4, array5));

    let movies = [["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"]]
    console.log(getLoad.fromPairs(movies));
    res.send('this is my first api and I am solving lodash question')
});





module.exports = router;
// adding this comment for no reason