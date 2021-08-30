// 230. Kth Smallest Element in a BST
// Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.
// Example 1:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1

// Example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

// Constraints:

// The number of nodes in the tree is n.
// 1 <= k <= n <= 104
// 0 <= Node.val <= 104

/**
 * Definition for a binary tree node.
**/ 
function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const list = treeToOrderList(root)
  return list[k - 1]    
};

function treeToOrderList(root) {
  const list = []
  treeToOrderListHelp(root, list)
  return list
}

function treeToOrderListHelp(root, list) {
  if(!root) {
    return
  }
  treeToOrderListHelp(root.left, list)
  list.push(root.val)
  treeToOrderListHelp(root.right, list)
}

