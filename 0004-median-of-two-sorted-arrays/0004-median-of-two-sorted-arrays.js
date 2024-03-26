/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let midNum = [];

    const mergedArr = [nums1, nums2].flat().sort((x, y) => x - y);

    if (mergedArr.length % 2 === 1) {
        // 홀수
        midNum.push(mergedArr[Math.floor(mergedArr.length / 2)]);
    }
    if (mergedArr.length % 2 === 0) {
        // 짝수
        midNum.push(mergedArr[(mergedArr.length / 2) - 1]);
        midNum.push(mergedArr[mergedArr.length / 2]);
    }
    
    let res = midNum.reduce((curr, next) => curr += next);
    
    if (midNum.length === 1) {
        return midNum;
    }

    return res / 2;
};