const checkHeader = async function (req,res,next) {

    let checkHeader = req.headers.isfreeappuser

    if (!checkHeader) {
        return res.send({status: false, error : "header is missing"})
    }

    if (checkHeader == 'true') {
        req.checkHeader = true
    } else {
        req.checkHeader = false
    }

    next ()
}

module.exports.checkHeader = checkHeader