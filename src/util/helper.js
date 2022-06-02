let today = new Date ();


let printDate = function tree () {

    return today.getDate()
}
console.log("date is = " + printDate ())

let printMonth = function branch () {
    return today.getMonth() + 1;
}
console.log("month is = " + printMonth ())

let getBatchInfo = function roots () {
    return "Radon, W3D" + today.getDay ()
}
console.log("Batch name and week and day is = " + getBatchInfo ())

module.exports.abc = printDate
module.exports.def = printMonth
module.exports.ghi = getBatchInfo