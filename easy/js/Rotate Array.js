// https://leetcode.com/problems/rotate-array

const reverse = (nums, i, j) => {
  while (i < j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;

    i++;
    j--;
  }
};

const rotate = (nums, k) => {
  if (nums.length < 2) return;

  const len = nums.length;
  k = k % len;

  reverse(nums, 0, len - k - 1);
  reverse(nums, len - k, len - 1);
  reverse(nums, 0, len - 1);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
