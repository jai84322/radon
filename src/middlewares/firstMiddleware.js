const mid1 = function (req,res,next) {
    console.log("I am inside middleware 1");
    next()
}

module.exports.mid1 = mid1