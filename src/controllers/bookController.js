const userModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await userModel.create(data)
    return res.send({msg: savedData})
}

const getBookData= async function (req, res) {
    let allUsers= await userModel.find()
    return res.send({msg: allUsers})
}

module.exports.createBook= createBook
module.exports.getBookData= getBookData 