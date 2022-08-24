/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    // [7,1,5,3,6,4] 를 예시로 들었을 경우
    
    let profit = 0;
    let min = prices[0]; 
    // 7
    
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        // 7과 7을 제외한 i들을 비교해서 최솟값을 찾음
        profit = Math.max(profit, prices[i] - min);
        // 0과 i에서 min 값을 뺀 값 중에 가장 큰 gap 차이를 찾아서 저장함
    }
    
    if (prices.length <= 1 || prices == null) {
        profit = 0;
        // 주어진 배열의 길이가 1 이하거나, 주어진 배열의 값이 비었을때  return 0
    }
    
    return profit;
};