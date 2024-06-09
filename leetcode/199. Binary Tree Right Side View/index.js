// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

// Example 1:


// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100



//  Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) {
      return []
    }
    const queue = [root]
    const list = []
    bfs(queue, list)
    return list
};

/**
 * @param {number[]} queue
 * @param {number[]} list
 * @return {number[]}
 */
function bfs(queue, list) {
  let currentRange = queue.length
  let nextRange = 0
  let currentIndex = 0
  while(queue.length > 0) {
    const root = queue.shift()
    if(root.left) {
      queue.push(root.left)
      nextRange++
    }
    if(root.right) {
      queue.push(root.right)
      nextRange++
    }
    currentIndex++
    if(currentIndex == currentRange) {
      list.push(root.val)
      currentRange = nextRange
      nextRange = 0
      currentIndex = 0
    }
  }
}