// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

 

// Example 1:


// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
// Example 2:


// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
 

// Constraints:

// The number of nodes in the tree is in the range [1, 3 * 104].
// -1000 <= Node.val <= 1000



// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

let max = Number.NEGATIVE_INFINITY

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  max = Number.NEGATIVE_INFINITY
  traversal(root)
  return max  
};


function traversal(root) {
  let sum = null
  let nodeAmount = null
  if(!root.left && !root.right) {
    sum = root.val
    nodeAmount = sum
  } else if(root.left && root.right) {
    const left = traversal(root.left)
    const right = traversal(root.right)
    const x = left + right + root.val
    const y = left + root.val
    const z = right + root.val
    const a = root.val
    sum = Math.max(x, y, z, a)
    nodeAmount = Math.max(y, z, a)
  } else if(root.left) {
    const left = traversal(root.left)
    sum = Math.max(left + root.val, root.val)
    nodeAmount = sum
  } else if(root.right) {
    const right = traversal(root.right)
    sum = Math.max(right + root.val, root.val)
    nodeAmount = sum
  }
  if(sum > max) {
    max = sum
  }
  return nodeAmount 
}