/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trimEnd();
    const str = s.split(" ");
    console.log(str);
    const idx = (str[str.length - 1]).length;
    
    return idx;
};