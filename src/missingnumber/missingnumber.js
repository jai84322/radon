let problem1=function(){
    let arr = [1, 2, 3, 4, 5, 7, 8, 9]
    let sum = 0;
    let missingNumber;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    missingNumber = (((arr.length + 1) * (arr.length + 2)) / 2) - sum;
    return 'missing number is: '+ missingNumber;
}

let problem2=function() {
    let arr = [33, 34, 35, 37, 38, 39]
    let sum = 0;
    let missingNumber;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    missingNumber = (((arr.length + 1) / 2 * (arr[0] + arr[arr.length - 1]))) - sum;
    return 'missing number is: '+ missingNumber;
    ;
}

module.exports.a=problem1;
module.exports.b=problem2;