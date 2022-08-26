/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    n = n.toString(2);
    
    let reverse = n.split("").reverse().join("");
    let answer = reverse.padEnd(32, "0");
    
    return parseInt(answer, 2);
};