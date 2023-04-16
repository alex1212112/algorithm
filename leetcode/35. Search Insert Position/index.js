// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

  let left = 0
  let right = nums.length - 1

  if(target > nums[right]) {
    return right + 1 
  }
  if(target < nums[left]) {
    return left
  }

  while(left <= right) {
    const mid = Math.floor(left + (right - left) / 2 )
    if(target == nums[mid]) {
      return mid
    }
    if(target > nums[mid] && target < nums[mid + 1]) {
      return mid + 1
    }
    if(target > nums[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
}

const nums = [1,3,5,6]

const result = searchInsert(nums, 0)

console.log(result)