const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./routes/route.js');
const app = express();
const multer = require("multer")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any())

mongoose.connect("mongodb+srv://isuzu:Arjun123@cluster0.rs68oil.mongodb.net/group28Database", { 
    UseNewUrlParser : true
})
.then( () => console.log("Mongodb is connected") )
.catch( err => console.log(err));

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express is running on port ' + (process.env.PORT || 3000))
});