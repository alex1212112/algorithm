// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let sorted = nums.sort((a, b) => a - b)
  let length = nums.length
  let diff = Number.MAX_VALUE
  let result
  for (let index = 0; index < length - 2; index++) {
    let left = index + 1
    let right = length - 1
    while (left < right) {
      let sum = sorted[index] + sorted[left] + sorted[right]
      let tmpDiff = Math.abs(target - sum)
      if (tmpDiff < diff) {
        diff = tmpDiff
        result = sum
      }
      if (sum > target) {
        right--
      } else {
        left++
      }
    }
  }
  return result
}
