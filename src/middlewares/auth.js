const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const checkToken = async function (req,res,next) {

    let token = req.headers["x-auth-token" || "X-Auth-Token"]
    if (!token) {
        return res.status(400).send({status : false, error: "no token found" })
    }

    let decodedToken = jwt.verify (token, "functionup-radon");
        req.decodedToken = decodedToken
    
    if (!decodedToken) {
      return res.status(400).send({ status: false, msg: "token is invalid" });
    }

        next ()
}

module.exports.checkToken = checkToken

const checkAuthorization = async function (req, res, next) {
    let user = req.params.userId
    
    let checkUser = await userModel.findById(user)
    if(!checkUser) {
        return res.status(404).send({status: false, error : "no such user exists"})
    }

    if (user !== req.decodedToken.userId) {
        return res.status(401).send ({status : false, error : "you are not authorized to modify other user data"})
    }

    next()
}

module.exports.checkAuthorization = checkAuthorization