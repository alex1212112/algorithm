

// 101. Symmetric Tree

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false
 

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
 

// Follow up: Could you solve it both recursively and iteratively?


 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

var isSymmetric = function(root) {
  const leftList = leftNodes(root.left)
  const rightList = rightNodes(root.right)
  if(leftList.length != rightList.length) {
    return false
  }
  for(let index = 0; index < leftList.length; index++) {
    if(leftList[index] != rightList[index]) {
      return false
    }
  }
  return true
    
};

function leftNodes(root) {
  if(!root) {
    return [null]
  }
  return [...leftNodes(root.left), ...leftNodes(root.right), root.val]
}

function rightNodes(root) {
  if(!root) {
    return [null]
  }
  return [...rightNodes(root.right), ...rightNodes(root.left), root.val]
}


const root = new TreeNode(1,   new TreeNode(2, new TreeNode(3, null, null),  new TreeNode(4, null, null)), new TreeNode(2,   new TreeNode(4, null, null),  new TreeNode(3, null, null)))

const result = isSymmetric(root)

console.log(result)