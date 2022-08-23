/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let set = 0;
    
    for (let i = 0; i < nums.length; i++) {
        set = set ^ nums[i];
    }
    return set;
    
};