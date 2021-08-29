// 654. Maximum Binary Tree
// Medium

// 2897

// 281

// Add to List

// Share
// You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:

// Create a root node whose value is the maximum value in nums.
// Recursively build the left subtree on the subarray prefix to the left of the maximum value.
// Recursively build the right subtree on the subarray suffix to the right of the maximum value.
// Return the maximum binary tree built from nums.

// Input: nums = [3,2,1,6,0,5]
// Output: [6,3,5,null,2,0,null,null,1]
// Explanation: The recursive calls are as follow:
// - The largest value in [3,2,1,6,0,5] is 6. Left prefix is [3,2,1] and right suffix is [0,5].
//     - The largest value in [3,2,1] is 3. Left prefix is [] and right suffix is [2,1].
//         - Empty array, so no child.
//         - The largest value in [2,1] is 2. Left prefix is [] and right suffix is [1].
//             - Empty array, so no child.
//             - Only one element, so child is a node with value 1.
//     - The largest value in [0,5] is 5. Left prefix is [0] and right suffix is [].
//         - Only one element, so child is a node with value 0.
//         - Empty array, so no child.

// Constraints:

// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 1000
// All integers in nums are unique.

/**
 * Definition for a binary tree node.
*/
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  const node = maxTreeHelp(nums, 0, nums.length - 1)
  // return treeToArray(node)
  return node
}

function maxTreeHelp(nums, low, high) {
  if (low > high) {
    return
  }
  const p = findPostion(nums, low, high)
  const nodeLeft = maxTreeHelp(nums, low, p - 1)
  const nodeRight = maxTreeHelp(nums, p + 1, high)
  const node = new TreeNode(nums[p], nodeLeft, nodeRight)

  return node
}

function findPostion(nums, low, high) {
  let num = nums[low]
  let p = low
  for (let index = low; index <= high; index++) {
    if (nums[index] > num) {
      num = nums[index]
      p = index
    }
  }
  return p
}

function treeToArray(treeNode) {
  if (!treeNode) {
    return [null]
  }
  const list = []
  const queue = [treeNode]
  while (queue.length != 0) {
    const node = queue.shift()
    if (node) {
      list.push(node.val)
    } else {
      list.push(null)
      continue
    }
    if(node.left && node.right) {
      queue.push(node.left)
      queue.push(node.right)
    } else if (node.left && !node.right) {
      queue.push(node.left)
      queue.push(null)
    } else if (!node.left && node.right) {
      queue.push(null)
      queue.push(node.right)
    }
  }
  return list
}

const nums = [3, 2, 1, 6, 0, 5]
const node = constructMaximumBinaryTree(nums)
const result = treeToArray(node)
console.log(result)
