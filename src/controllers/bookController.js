const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    return res.send({msg: savedData})
}

const getBookData= async function (req, res) {
    let allUsers= await UserModel.find()
    return res.send({msg: allUsers})
}

module.exports.createBook= createBook
module.exports.getBookData= getBookData 