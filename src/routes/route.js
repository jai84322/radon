const express = require('express');
const missing = require('../missingnumber/missingnumber')


const router = express.Router();

router.get('/prob1', function (req, res) {
    res.send(missing.a());
});

router.get('/prob2', function (req, res) {
    res.send(missing.b());
    });

module.exports = router;
// adding this comment for no reason