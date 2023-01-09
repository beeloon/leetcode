// https://leetcode.com/problems/move-zeroes

// const moveZeroes = (nums) => {
//   let zerosCount = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == 0) zerosCount++;
//     else if (zerosCount > 0) {
//       const temp = nums[i];
//       nums[i] = 0;
//       nums[i - zerosCount] = temp;
//     }
//   }
// };

const moveZeroes = (nums) => {
  if (nums == null || nums.length == 0) return;

  let pos = 0;

  for (let i = 0; i < array.length; i++) if (nums[i] !== 0) nums[pos++] = n;
  while (pos < nums.length) nums[pos++] = 0;
};
