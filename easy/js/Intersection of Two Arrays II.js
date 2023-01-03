// https://leetcode.com/problems/intersection-of-two-arrays-ii
const intersect = (nums1, nums2) => {
  const hash = new Map();
  const intersection = [];

  for (const num of nums1) hash.set(num, (hash.get(num) ?? 0) + 1);

  for (const num of nums2)
    if (hash.has(num) && hash.get(num) > 0) {
      intersection.push(num);
      hash.set(num, hash.get(num) - 1);
    }

  return intersection;
};
