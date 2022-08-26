/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    n = n.toString(2);
    
    let add = 32 - n.length;
    
    if (n.length !== 32) {
        for (let i = 1; i <= add; i++) {
            n = "0" + n;
        }
    }
    
    let reverse = "";
    
    for (let i = n.length - 1; i >=0; i--) {
        reverse += n[i]; 
    }
    
    return parseInt(reverse, 2)
};