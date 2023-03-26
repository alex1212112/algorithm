// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const sorted = [...nums]
    sorted.sort((a, b) => a - b) 
    const list = permutation(sorted)
    const index = list.findIndex(item => {
       return item.every((el, i) => {
        return  el == nums[i]
       })
    })

    let result = null 
    if(index == list.length - 1) {
      result = list[0]
    } else {
      result = list[index + 1] 
    }
    for(let index = 0; index < result.length; index++) {
      nums[index] = result[index]
    } 
};

/**
 * @param {number[]} nums
 * @return {[[]]} 
 */
function permutation(nums) {
  const result = []
  const frequency = {}
  for(let num of nums) {
    frequency[num] = (frequency[num] || 0) + 1
  }

  backtrack(null,nums, nums.length, result, frequency)

  return result
}

/**
 * @param {number[]} path
 * @param {number[]} options
 * @param {number} length
 * @param {[[]]} result
 * @return {void} 
 */

function backtrack(path, options, length,result, frequency) {
  for(let option of options) {
    if(path && path.length == length) {
      const index = result.findIndex(item => {
        return item.every((el, i) => {
         return  el == path[i]
        })
      })
      if(index < 0) {
        result.push([...path])
        // console.log(path)
      }
      return 
    }

    if(path) {
      const itemCount = itemCountInList(path, option) 
      if(itemCount == frequency[option]) {
        continue
      } 
    }
    
    if(!path || path.length == 0) {
      path = [option]
    } else {
      path.push(option)
    }
    backtrack(path, options, length, result, frequency)
    path.pop()
  }
} 

/**
 * @param {number[]} list
 * @param {number} item 
 * @return {number} count 
 */
function itemCountInList(list, item) {
  return list.reduce((a, b) => {
    return a + (b == item ? 1 : 0) 
  }, 0)
}


const nums = [2,2,7,5,4,3,2,2,1]
nextPermutation(nums)

console.log(nums)