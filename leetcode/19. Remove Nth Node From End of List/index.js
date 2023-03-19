// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// Follow up: Could you do this in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  
  const list = [];
  
  while(head) {
    list.push(head)
    head = head.next
  }

  const currentHead = list[0]

  const index = list.length - n 
  const node = list[index]
  if(index == 0) {
    const next = currentHead.next
    currentHead.next = null
    return next
  }
  const preNode = list[index - 1]
  preNode.next = node.next
  node.next = null 
  return currentHead
}

const list = [1,2,3,4,5]
let node = null 

for(let num of list.reverse()) {
    node = new ListNode(num, node)
}


let testNode = node
console.log('before:')

while(testNode) {
  console.log(testNode.val)
  testNode = testNode.next
}

const head = removeNthFromEnd(node, 2)

testNode = head

console.log('after:')
while(testNode) {
  console.log(testNode.val)
  testNode = testNode.next
}
