/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    let index = 0;
    
    console.log(haystack.includes(needle));
    if (haystack.includes(needle)) {
        index = haystack.indexOf(needle);
    } else if (!haystack.includes(needle)) {
        index = -1;
    }
   
    
    if (needle.length === 0) {
        return 0;
    }
    return index;
};