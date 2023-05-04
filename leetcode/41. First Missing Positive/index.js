// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.

 

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1

const { execSync } = require('child_process')

function systemSleep(seconds) {
  try {
    execSync(`sleep ${seconds}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  for(let index = 0; index < nums.length; index++) {
    while(nums[index] > 0 && nums[index] < nums.length &&  nums[index] - 1 != nums[nums[index] - 1]) {
      let temp = nums[index]
      let swapValue = nums[temp - 1]
      nums[index] = swapValue
      nums[temp - 1] = temp
    }
  }

  console.log(nums)
   
  for(let index = 0; index < nums.length; index++) {
    if(nums[index] != index + 1) {
      return index + 1
    }
  }
  return nums.length + 1
}

const nums = [1, 1]
const result = firstMissingPositive(nums)
console.log(result) 


