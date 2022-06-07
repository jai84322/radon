const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data) 
    return res.send({msg: savedData})
}

const bookList= async function (req, res) { 
let allBooks= await bookModel.find().select({ bookName: 1, authorName: 1, _id: 0 }) 
    return res.send({msg: allBooks})
}

const getBooksInYear= async function (req, res) { 
    let publishingYear = req.body.year
let allBooks= await bookModel.find({ year: publishingYear }) 
    return res.send({msg: allBooks})
}

const getParticularBooks = async function (req, res) {
    let fetch = req.body
    let allBooks = await bookModel.find({ $or:[ { bookName: fetch.bookName}, {tags : fetch.tags}, { totalPages: fetch.totalPages }, {year: fetch.year}, {authorName: fetch.authorName}, {stockAvailable: fetch.stockAvailable}] } )
    return res.send({ msg: allBooks })        
}

const getXINRBooks= async function (req, res) { 
let inrBooks= await bookModel.find({ $or: [{"price.indianPrice" : {$eq: "200INR"} }, {"price.indianPrice" : {$eq: "500INR"} }, {"price.indianPrice" : {$eq: "100INR"} }] } ) 
    return res.send({msg: inrBooks})
}

const getRandomBooks = async function (req, res) { 
let allBooks= await bookModel.find({ $or:[{totalPages:{$gt: "500"}}, {stockAvailable:true }]}) 
      return res.send({msg: allBooks})
}

const getBooksData= async function (req, res) {

    let allUsers= await bookModel.find().count()  
    return res.send({msg: allUsers})
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.getBooksInYear= getBooksInYear
module.exports.getParticularBooks= getParticularBooks 
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks
module.exports.getBooksData= getBooksData