// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 

// Example 1:


// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -100 <= Node.val <= 100
 

// Follow up: Can you flatten the tree in-place (with O(1) extra space)?


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root) {
      return
    }
    flatten(root.left)
    flatten(root.right)
    if(root.left && root.right) {
      const right = root.right
      root.right = root.left
      root.left = null
      let rightNode = root.right
      while(rightNode.right) {
        rightNode = rightNode.right
      }
      rightNode.right = right
    } else if(root.left) {
      root.right = root.left
      root.left = null 
    }
};

/**
 * @param {Array} array
 * @return {TreeNode} 
 */
function createTree(array) {
  const node = new TreeNode()
  node.val = array[0]
  createTreeNode(array, 0, node)
  return node 
} 
/**
 * @param {Array} array
 * @param {number} index
 * @param {TreeNode} node
 * @return {TreeNode} 
 */
function createTreeNode(array, index, node) {
  const max = array.length
  if(index * 2 + 1 >= max ) {
    return
  }
  const leftVal = array[index * 2 + 1]
  if(leftVal) {
    const left = new TreeNode()
    left.val = leftVal
    node.left = left
    createTreeNode(array, index * 2 + 1, left)
  }

  if(index * 2 + 2 >= max) {
    return
  }
  const rightVal = array[index * 2 + 2]
  const right = new TreeNode()
  right.val = rightVal
  node.right = right

  createTreeNode(array, index * 2 + 2, right)
}

const list = [1,2,5,3,4,null,6]
const tree = createTree(list)

console.log(tree)

flatten(tree)

console.log(tree)
