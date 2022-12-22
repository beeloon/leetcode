// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

// Runtime 79 ms | Memory 42.2 MB
const getMaxProfit = (prices) => {
  let maxProfit = 0;

  prices.forEach((price, idx) => {
    if (price > prices[idx - 1]) maxProfit += price - prices[idx - 1];
  });

  return maxProfit;
};

// Runtime 59 ms | Memory 41.7 MB
const _getMaxProfit = (prices) => {
  let maxProfit = 0;

  for (let price = 1; price < prices.length; price++)
    maxProfit += Math.max(prices[price] - prices[price - 1], 0);

  return maxProfit;
};

getMaxProfit([7, 1, 5, 3, 6, 4]);
getMaxProfit([1, 2, 3, 4, 5]);
