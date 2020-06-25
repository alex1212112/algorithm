// 15. 3Sum

// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((x, y) => x - y)
  const result = []
  for (let index = 0; index <= nums.length - 3; index++) {
    if(nums[index] > 0) {
      break
    }
    if (index > 0 && nums[index] == nums[index - 1]) {
      continue
    }
    let begin = index + 1
    let end = nums.length - 1
    while (begin < end) {
      const sum = nums[begin] + nums[index] + nums[end]
      if (sum > 0) {
        end--
      } else if (sum < 0) {
        begin++
      } else {
        result.push([nums[begin], nums[index], nums[end]])
        while(begin < end && nums[begin + 1] == nums[begin]) {
          begin++
        }
        while(begin < end && nums[end - 1] == nums[end]) {
          end--
        }
        end--
      }
    }
  }
  return result
}

const result = threeSum([-2,0,0,2,2])
console.log(result)
