// https://leetcode.com/problems/two-sum

// brute force
const twoSum = (nums, target) => {
  let slow = 0;
  let fast = 1;

  while (slow < nums.length - 1) {
    if (nums[slow] + nums[fast] === target) return [slow, fast];

    if (fast === nums.length - 1) {
      slow++;
      fast = slow + 1;
    } else {
      fast++;
    }
  }
};

// hash
const twoSumHash = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const key = target - nums[i];
    if (map.has(key)) return [i, map.get(key)];

    map.set(nums[i], i);
  }
};

twoSumHash([2, 7, 11, 15], 9);
