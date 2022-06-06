const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    return res.send({msg: savedData})
}

const getBookData= async function (req, res) {
    let allUsers= await bookModel.find()
    return res.send({msg: allUsers})
}

module.exports.createBook= createBook
module.exports.getBookData= getBookData 