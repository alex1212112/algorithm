// Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.

 

// Example 1:


// Input: n = 3
// Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
// Example 2:

// Input: n = 1
// Output: [[1]]
 

// Constraints:

// 1 <= n <= 8

  // Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  const result = generate(1, n)
  return result
};


function generate(start, end) {
  if(start > end) {
    return [null]
  }

  const list = []

  for(let index = start; index <= end; index++) {
    const leftTrees = generate(start, index - 1)
    const rightTrees = generate(index + 1, end) 
    
    for(let left of leftTrees) {
      for(let right of rightTrees) {
        const node = new TreeNode(index, left, right)
        list.push(node)
      }
    }
  }
  return list
}


const result = generateTrees(5)

console.log(result)
