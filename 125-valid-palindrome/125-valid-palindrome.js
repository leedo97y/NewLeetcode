/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let p = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    
    let left = 0;
    let right = p.length -1;
    
    while(left < right) {
        if (p[left] !== p[right]) {
            return false;
        }
        left++;
        right--;
    }
     return true;
    
 

};