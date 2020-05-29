// Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let tempNode = {}
  const result = tempNode
  let temp = 0
  while (l1 && l2) {
    const ob = calcTempNode(tempNode, temp, l1, l2)
    tempNode = ob.tempNode
    temp = ob.temp

    l1 = l1.next
    l2 = l2.next
  }
  while (l1) {
    const ob = calcTempNode(tempNode, temp, l1)
    tempNode = ob.tempNode
    temp = ob.temp
    l1 = l1.next
  }
  while (l2) {
    const ob = calcTempNode(tempNode, temp, l2)
    tempNode = ob.tempNode
    temp = ob.temp
    l2 = l2.next
  }
  if (temp == 1) {
    let node = new ListNode(1)
    tempNode.next = node
  }
  return result
}

function calcTempNode(tempNode, temp, node1, node2) {
  let number = 0
  if (node1 && node2) {
    number = node1.val + node2.val + temp
  } else if (node1) {
    number = node1.val + temp
  }
  if (tempNode.val != undefined) {
    tempNode.next = {}
    tempNode = tempNode.next
  }
  if (number >= 10) {
    tempNode.val = number - 10
    temp = 1
  } else {
    tempNode.val = number
    temp = 0
  }
  return { tempNode, temp }
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

let l1
let l2
const array1 = [5].reverse()
const array2 = [5].reverse()

for (let i = 0; i < 3; i++) {
  let node1 = new ListNode(array1[i])
  if (l1) {
    node1.next = l1
  }
  l1 = node1

  let node2 = new ListNode(array2[i])
  if (l2) {
    node2.next = l2
  }
  l2 = node2
}

const result = addTwoNumbers(l1, l2)

for (let node = result; node != undefined; node = node.next) {
  console.log(node.val)
}
