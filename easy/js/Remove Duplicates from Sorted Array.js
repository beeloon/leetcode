// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// Runtime 93 ms | Memory 44.4 MB
const removeDuplicates = (nums) => {
  let slow = 1;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast - 1] != nums[fast]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return slow;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
