// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:


// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]
 

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000
 

// Follow-up: Can you solve the problem in O(1) extra memory space?


// /**
//  * Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
//  */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let dummy = null
    let kPreHead = null
    while(head) {
      let temp = reversePart(head,k)
      const currentHead = temp[0]
      if(kPreHead) {
        kPreHead.next = currentHead
      }
      head = temp[1]
      kPreHead = head
      head = head.next
      if(!dummy) {
        dummy = currentHead
      }
    }
    return dummy
};


function reversePart(head, k) {
  let currentHead = head
  let count = 1
  while(head && head.next && count < k) {
    let temp = head.next 
    head.next = head.next.next
    temp.next = currentHead
    currentHead = temp
    count++
  }

  if(count < k) {
    head = currentHead 
    while(head && head.next) {
      let temp = head.next 
      head.next = head.next.next
      temp.next = currentHead
      currentHead = temp
    } 
  }

  return [currentHead, head]
} 



const list = [1,2,3,4,5,6,7]
let node = null 

for(let item of list.reverse()) {
    node = new ListNode(item, node) 
}

const result = reverseKGroup(node, 5)


let itemNode = result
while(itemNode) {
  console.log(itemNode.val)
  itemNode = itemNode.next
}
