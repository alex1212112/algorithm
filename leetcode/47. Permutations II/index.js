// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

const { log } = require("console");

 

// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// Example 2:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

// Constraints:

// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const result = []
  const path = []
  backtrack(nums, result, path)
  return result
};

/**
 * @param {number[]} nums
 * @param {number[]} path
 * @param {number[][]} result
 * @return {number[][]}
 */
function backtrack(nums, result, path) {
  if(path.length == nums.length) {
    // result.push([...path])
    const elements = path.map(index => nums[index])
    result.push(elements)
    return
  }
  const round = []
  for(let index = 0; index < nums.length; index++) {
      if(!path.includes(index)) {
        if(round.includes(nums[index])) {
          continue
        }
        round.push(nums[index])
        path.push(index)
        console.log(path)
        backtrack(nums, result, path)
        path.pop()
      }
  }
}


const nums = [1, 1, 2]
const result = permuteUnique(nums)
console.log(result)