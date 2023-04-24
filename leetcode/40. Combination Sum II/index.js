// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]
 

// Constraints:

// 1 <= candidates.length <= 100
// 1 <= candidates[i] <= 50
// 1 <= target <= 30

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const n = candidates.length;
  const result = []
  const path = []
  candidates.sort((a,b) => a - b)
  console.log(candidates)
  dps(0, target, candidates ,result, path)
  return result
}

/**
 * @param {number[]} candidates
 * @param {number[]} path
 * @param {number[][]} result
 * @param {number} start
 * @param {number} target
 */

function dps(start, target, candidates, result, path) {
  if(target == 0) {
    const findOne = [...path]
    result.push(findOne)
    return
  }
  for(let index = start; index < candidates.length; index++) {
     const option = candidates[index]
     if(option > target) {
      break
     }
     if(index > start && option == candidates[index - 1]) {
        continue
     }
     path.push(option)
     dps(index + 1, target - option, candidates, result, path)
     path.pop()
  }
}

const candidates = [10,1,2,7,6,1,5] 
const target = 8
const result = combinationSum2(candidates, target)
console.log(result)