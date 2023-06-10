/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxProfit = 0;
    let lowPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (maxProfit < Math.max(prices[i] - lowPrice, 0)) {
            maxProfit = prices[i] - lowPrice;
        }
        if (prices[i] < lowPrice) {
            lowPrice = prices[i];
        }
    };
    return maxProfit;
};