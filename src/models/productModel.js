const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : String,
    category : String,
    price: {
        type : Number,
        required: "price is required(mandatory)"
    }
},{timestamps: true})

module.exports = mongoose.model('product', productSchema)