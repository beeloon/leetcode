// https://leetcode.com/problems/contains-duplicate
const containsDuplicate = (nums) =>
  Array.from(new Set(nums)).length !== nums.length;
