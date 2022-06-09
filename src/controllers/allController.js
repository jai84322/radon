const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createAuthor = async function (req, res) {
    let data = req.body
    let savedData = await authorModel.create(data)
    return res.send({data: savedData})
}

module.exports.createAuthor = createAuthor


const createPublisher = async function (req, res) {
    let data = req.body
    let savedData = await publisherModel.create(data)
    return res.send({data: savedData})
}

module.exports.createPublisher = createPublisher


const createBook = async function (req, res) {
    let data = req.body
    let{author, publisher} = req.body 

    if(!author || !publisher) {
        return res.send({status: false, error: "Author ID/Publisher ID is required"})
    }

    let checkAuthor = await authorModel.findById(author)
    if (!checkAuthor) {
        return res.send({status: false, error : "this author dooesnot exist, please enter the correct id"})
    }

    let checkPublisher = await publisherModel.findById(publisher)
    if (!checkPublisher) {
        return res.send({status: false, error : "this publisher dooesnot exist, please enter the correct id"})
    }

    let savedData = await bookModel.create(data)
    return res.send({data: savedData})
}

module.exports.createBook = createBook


const getBooks = async function (req, res) {

    let savedData = await bookModel.find().populate('author').populate('publisher')
    return res.send({data: savedData})
}

module.exports.getBooks = getBooks


const updateBooks = async function(req, res){
    
    let publisherId = await publisherModel.find({$or: [{name : "penguin"},{ name: "harpercollins"}]}).select({_id:1})

    let updateBook = await bookModel.updateMany({publisher: publisherId},{$set: {isHardCover: true}})

    let authorId = await authorModel.find({rating: {$gt: 3.5}}).select({_id:1})
    
    let updatePrice = await bookModel.updateMany({author: authorId},{$inc: {price: 10}})

    return res.send({msg: updateBook, updatePrice})
}

module.exports.updateBooks = updateBooks
