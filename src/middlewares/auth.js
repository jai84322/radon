const jwt = require("jsonwebtoken");

const checkToken = async function (req,res,next) {

    let token = req.headers["x-auth-token" || "X-Auth-Token"]
    if (!token) {
        return res.send({ error: "no token found" })
    }

    let decodedToken = jwt.verify (token, "functionup-radon");
    
    if (!decodedToken) {
      return res.send({ status: false, msg: "token is invalid" });
    }

        next ()
}

module.exports.checkToken = checkToken