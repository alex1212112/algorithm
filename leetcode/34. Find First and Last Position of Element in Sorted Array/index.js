// 34. Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

function systemSleep(seconds) {
  try {
    execSync(`sleep ${seconds}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  
  let left = 0
  let right = nums.length - 1

  while(left <= right) {
    const mid =  Math.floor(left + (right - left) / 2 )
    if(nums[mid] == target) {
      let midLeft = mid
      let midRight = mid
      while(nums[midLeft] == target && midLeft >= 0) {
        midLeft--
      }
      while(nums[midRight] ==  target && midRight <= nums.length - 1) {
        midRight ++
      }
      return [midLeft + 1 , midRight - 1]
    } 

    if(nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return [-1, -1]
};


const nums = [5,7,7,8,8,10] 

const result = searchRange(nums, 8)

console.log(result)