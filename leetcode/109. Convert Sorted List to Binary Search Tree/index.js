
// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a 
// height-balanced
//  binary search tree.

const { log } = require("console")
const { execSync } = require('child_process')

function systemSleep(seconds) {
  try {
    execSync(`sleep ${seconds}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

 

// Example 1:


// Input: head = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
// Example 2:

// Input: head = []
// Output: []
 

// Constraints:

// The number of nodes in head is in the range [0, 2 * 104].
// -105 <= Node.val <= 105

  // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

  // Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let list = convertLinkListToArray(head)
    const root = convertArrayToBST(list)
    return root
}

/**
 * @param {ListNode} head
 * @return {Array}
 */
function convertLinkListToArray(head) {
  let list = []
  while(head) {
    list = [...list, head.val]
    head = head.next
  }
  return list
}

/**
 * @param {Array} array
 * @return {TreeNode}
 */
function convertArrayToBST(array) {
  if(array.length == 0) {
    return null
  }
  if(array.length == 1) {
    const val = array[0]
    return new TreeNode(val)
  }
  const n = array.length
  const mid = Math.floor( n / 2 )
  const midVal = array[mid]
  const root = new TreeNode(midVal)
  const leftArray = array.slice(0, mid)
  const rightArray = array.slice(mid + 1, n)
  root.left = convertArrayToBST(leftArray)
  root.right = convertArrayToBST(rightArray)
  return root
}

/**
 * @param {Array} array
 * @return {ListNode}
 */
function createLinkList(array) {
  const node = new ListNode()
  let tempNode = node
  array.forEach((ele, index) => {
    tempNode.val = ele
    if(index < array.length - 1) {
      const node = new ListNode()
      tempNode.next = node
      tempNode = node
    }
  })
  return node
}

const list = [-10, -3, 0, 5, 9]

const linkList = createLinkList(list)

let head = linkList

// while(head) {
//   console.log(head.val)
//   head = head.next
// }

const tree = sortedListToBST(head)
console.log(tree)