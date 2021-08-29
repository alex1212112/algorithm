// 105. Construct Binary Tree from Preorder and Inorder Traversal

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Example 1:
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]

// Example 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

// Constraints:

// 1 <= preorder.length <= 3000
// inorder.length == preorder.length
// -3000 <= preorder[i], inorder[i] <= 3000
// preorder and inorder consist of unique values.
// Each value of inorder also appears in preorder.
// preorder is guaranteed to be the preorder traversal of the tree.
// inorder is guaranteed to be the inorder traversal of the tree.

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const indexOb = {
    preorderIndex: 0 
  }
  const node = buildTreeHelp(indexOb,preorder, inorder, 0, inorder.length - 1)
  return node
}

function findPosition(indexOb, preorder, inorder, low, high) {
  const num = preorder[indexOb.preorderIndex]
  for (let index = low; index <= high; index++) {
    if (inorder[index] == num) {
       indexOb.preorderIndex++
       return index
    }
  }
}

function buildTreeHelp(indexOb, preorder, inorder, low, high) {
  if (low > high) {
    return null
  }
  const p = findPosition(indexOb, preorder, inorder, low, high)
  const left = buildTreeHelp(indexOb, preorder, inorder, low, p - 1)
  const right = buildTreeHelp(indexOb, preorder, inorder, p + 1, high)
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

const preorder = [-1]
const inorder = [-1]
const node = buildTree(preorder, inorder)
const result = bfsTree(node)
console.log(result)
