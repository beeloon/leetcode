// https://leetcode.com/problems/rotate-array
const rotate = (nums, k) => {
  k %= nums.length;

  const reverse = (start, end) => {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;

      start++;
      end--;
    }
  };

  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
