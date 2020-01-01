/*=======================================================================
// Question: Given an array of integers, return indices of the two 
// numbers such that they add up to a specific target. You may assume 
// that each input would have exactly one solution, and you may not use 
// the same element twice.
=======================================================================*/
function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] + nums[k] === target) return [i, k];
    }
  }

  return undefined;
}

console.log(twoSum([2, 7, 11, 15], 9));
