/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const str = (s.trimEnd()).split(" ");
    console.log(str);
    const idx = (str[str.length - 1]).length;
    
    return idx;
};