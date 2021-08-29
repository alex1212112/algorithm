// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

// Example 1:
// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]

// Example 2:

// Input: inorder = [-1], postorder = [-1]
// Output: [-1]

// Constraints:

// 1 <= inorder.length <= 3000
// postorder.length == inorder.length
// -3000 <= inorder[i], postorder[i] <= 3000
// inorder and postorder consist of unique values.
// Each value of postorder also appears in inorder.
// inorder is guaranteed to be the inorder traversal of the tree.
// postorder is guaranteed to be the postorder traversal of the tree.

/**
 * Definition for a binary tree node.
 * */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const indexOb = {
    orderIndex: postorder.length - 1,
  }
  const node = buildTreeHelp(indexOb, postorder, inorder, 0, inorder.length - 1)
  return node
}

function findPosition(indexOb, postorder, inorder, low, high) {
  const num = postorder[indexOb.orderIndex]
  for (let index = low; index <= high; index++) {
    if (inorder[index] == num) {
      indexOb.orderIndex--
      return index
    }
  }
}

function buildTreeHelp(indexOb, postorder, inorder, low, high) {
  if (low > high) {
    return null
  }
  const p = findPosition(indexOb, postorder, inorder, low, high)
  const right = buildTreeHelp(indexOb, postorder, inorder, p + 1, high)
  const left = buildTreeHelp(indexOb, postorder, inorder, low, p - 1)
  const node = new TreeNode(inorder[p], left, right)
  return node
}

function bfsTree(treeNode) {
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
    if (node.left && node.right) {
      queue.push(node.left)
      queue.push(node.right)
    } else if (node.left && !node.right) {
      queue.push(node.left)
      queue.push(null)
    } else if (!node.left && node.right) {
      queue.push(null)
      queue.push(node.right)
    } else {
      queue.push(null)
      queue.push(null)
    }
  }
  return list
}

const postorder = [9, 15, 7, 20, 3]
const inorder = [9, 3, 15, 20, 7]
const node = buildTree(inorder, postorder)
const result = bfsTree(node)
console.log(result)
