/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let arr = x.toString().split("");
    let reverseArr = [];

    if (x < 0) {
        arr.reverse().pop();
        arr.unshift("-");
        reverseArr = arr;
    }
    if (x > 0) {
        reverseArr = arr.reverse();
    }

    if (reverseArr[0] === "0") {
        arr.reverse().pop();
        reverseArr = arr.reverse();
    }

    let resNum = Number(reverseArr.join(""));

    if (resNum >= Math.pow(2, 31) - 1 || resNum <= - Math.pow(2, 31)) {
        return 0;
    } else {
       return resNum; 
    }
};