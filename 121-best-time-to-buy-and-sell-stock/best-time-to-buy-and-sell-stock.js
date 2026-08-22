/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let min = prices[0]
    for(let i = 1; i< prices.length; i++){
        let current = 0
        if(prices[i] < min) min = prices[i]
        else{
            current = prices[i] - min
        }
        if(current > maxProfit) maxProfit = current
    }
    return maxProfit
};