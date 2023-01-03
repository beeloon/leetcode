// https://leetcode.com/problems/single-number
const singleNumber = (nums) => nums.reduce((total, n) => total ^ n);
