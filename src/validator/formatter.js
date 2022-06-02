let str = " FunctionUp "

let Trim = function welcome (x) {
    return str.trim()
}
console.log(Trim ())

let toLowerCase = function myfxn (x) {
    return str.toLowerCase().trim()
}
console.log(toLowerCase ())

let toUpperCase = function somi (x) {
    return str.toUpperCase().trim()
}
console.log(toUpperCase ())



module.exports.trim = Trim
module.exports.toLowerCase = toLowerCase
module.exports.toUpperCase = toUpperCase