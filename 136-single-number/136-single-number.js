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

/*
 풀이를 잘 몰라서 참고해서 풀었다. 
 우선, 비트 XOR 할당으로 풀었으며, 비트 XOR의 경우 같은 수가 붙으면 0이 된다.
 
 잘 설명한 부분 첨부
 Concept of XOR:
 XOR of zero and some bit returns that bit i.e. x^0 = x...
 XOR of two same bits returns 0 i.e. x^x = 0...
 And, x^y^x = (x^x)^y = 0^y = y...
 
 예) input : [2, 2, 1]
 set = 0, nums[i] = 2  =>  0^2 = 2
 set = 2, nums[i] = 2  =>  2^2 = 0
 set = 0, nums[i] = 1  =>  0^1 = 1
 따라서 return 값은 1이 된다.

*/