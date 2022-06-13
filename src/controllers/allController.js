const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const orderModel = require("../models/orderModel")

const createProduct = async function (req, res) {
    let data = req.body 
    if (!data.price) {
        return res.send({status : false, error : "price is required"})
    }

    let savedData = await productModel.create(data)
    return res.send({status: true, data : savedData})
}

module.exports.createProduct = createProduct


const createUser = async function (req,res) {
    let data = req.body

    let savedData = await userModel.create(data)
    return res.send({data : savedData})
}

module.exports.createUser = createUser


const createOrder = async function (req, res) {

    let data = req.body
    
    if (!data.userId || !data.productId) {
        return res.send({status: false, error : "userId or productId is missing"})
    }

    let checkUserId = await userModel.findById(data.userId)
    if (!checkUserId) {
        return res.send({status: false, error : "userId is invalid, we checked in DB it doesn't exists"})
    }

    let checkProductId = await productModel.findById(data.productId)
    if (!checkProductId) {
        return res.send({status: false, error : "productId is invalid, we checked in DB it doesn't exists"})
    }


    
    let savedData = await orderModel.create(data)
    
    if (req.checkHeader === true) {
        let updatedOrder = await orderModel.findOneAndUpdate({userId : data.userId}, {$set:{amount : 0, isFreeAppUser: true}}, {new: true})
        let updateUser = await userModel.findOneAndUpdate({ _id : data.userId },{$set: {isFreeAppUser : true}},{new: true})
        return res.send({data : updatedOrder})
    }
    

    if (req.checkHeader === false) {
        let checkPrice = await productModel.findById(data.productId)
        let checkBalance = await userModel.findById(data.userId)

        if (checkBalance.balance < checkPrice.price) {
            return res.send({status : false, error : "user's balance is insufficient"})
        } else {
            let paidUser =  await userModel.findOneAndUpdate({_id : data.userId}, { $set: { balance : (checkBalance.balance - checkPrice.price), isFreeAppUser : false}}, {new: true} )
            let paidOrder =  await orderModel.findOneAndUpdate({userId : data.userId}, {$set:{amount: checkPrice.price, isFreeAppUser : false}}, {new: true})
            return res.send({data: paidOrder})
        }
    }

}

module.exports.createOrder = createOrder