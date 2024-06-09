// Given the root of a complete binary tree, return the number of the nodes in the tree.

// According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

// Design an algorithm that runs in less than O(n) time complexity.

 

// Example 1:


// Input: root = [1,2,3,4,5,6]
// Output: 6
// Example 2:

// Input: root = []
// Output: 0
// Example 3:

// Input: root = [1]
// Output: 1
 

// Constraints:

// The number of nodes in the tree is in the range [0, 5 * 104].
// 0 <= Node.val <= 5 * 104
// The tree is guaranteed to be complete.


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  if(!root) {
    return 0
  }
  const queue = [root]
  const count = bfs(queue)
  return count    
};

/**
 * @param {number[]} queue
 * @return {number}
 */
function bfs(queue) {
  let count = 0
  while(queue.length > 0) {
    const root = queue.shift()
    if(root.left) {
      queue.push(root.left)
    }
    if(root.right) {
      queue.push(root.right)
    }
    count++
  }
  return count
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
function height(root) {
  let h = 0
  if(root) {
    h++
  }
  while(root.left) {
    h++
    root = root.left
  }
  return h
}

/**
 * @param {TreeNode} root
 * @param {number} height
 * @param {number} maxHeight
 * @param {number[]} list
 * @return {number}
 */
function traversal(root, height, maxHeight, list) {
  if(!root) {
    const count = list[0]
    return count
  }
  if(height == maxHeight) {
    let leafCount = list.shift()
    leafCount++
    list.push(leafCount)
  }

  traversal(root.left, height + 1, maxHeight, list)
  traversal(root.right, height + 1, maxHeight, list)
  const count = list[0]
  return count 
}

var countNodes2 = function(root) {
  if(!root) {
    return 0
  }
  const h = height(root)
  const top = Math.pow(2, h - 1) - 1
  const leafCount = traversal(root, 1, h, [0])
  return top + leafCount
};