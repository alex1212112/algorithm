// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:

// Input: nums = [1]
// Output: [[1]]
 

// Constraints:

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// All the integers of nums are unique.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = []
    const path = []
    backtrack(nums,result,path)
    return result
};

/**
 * @param {number[]} nums
 * @param {number[][]} result
 * @param {number[]} path
 * @return {number[][]}
 */
function backtrack(nums, result, path) {
  if(path.length == nums.length) {
    const elements = path.map(index => nums[index])
    result.push([...elements])
    return
  }
  for(let index = 0; index < nums.length; index++) {
    if(!path.includes(index)) {
      path.push(index)
      backtrack(nums, result, path)
      path.pop()
    }
  }
}

const nums = [1, 2, 3]

const result = permute(nums)
console.log(result)