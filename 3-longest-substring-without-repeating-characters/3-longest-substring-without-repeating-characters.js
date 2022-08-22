/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let saveStr = []; 
    let len = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (saveStr.includes(s[i])) {
            saveStr = saveStr.slice(saveStr.indexOf(s[i]) + 1)
            
        }
            saveStr.push(s[i]);
            len = saveStr.length > len ? saveStr.length : len;
       }
    
        return len;  
            
};