//  K 个一组反转链表



function reverseLinkListWithKGroup(node, k) {

  let head = null
  let lastHead = node
  let lastTail = null 
  let lastNext = node
  while(lastNext) {
    const current = reverseLinkListWithSingleLoopHelp(lastTail, lastNext,  lastNext, 0, k) 
    if(!head) {
      head = current.head
    } else {
      if(lastTail) {
        lastTail.next = current.head
      }
    }
    lastHead = current.head
    lastTail = current.tail
    lastNext = current.next 
  }
  return head
}

function reverseLinkListWithSingleLoopHelp(pre, next, head, count, k) {

  if(!next) {
    head.next = null
    return {
      head: pre,
      tail: head,  
      next: null
    }
  }
  if(count == k) {
    head.next = null
    return {
      head: pre,
      tail: head,
      next
    }
  }
  const currrentNext = next.next 
  next.next = pre
  return reverseLinkListWithSingleLoopHelp(next, currrentNext, head, count + 1, k)  
}




function createLinkList() {
  let node = null
  const list = [10, 9 ,8, 7, 6, 5, 4, 3, 2, 1]
  for(let index=0; index<10; index++) {
    const currentNode = {
      val: list[index],
      next: node
    }
    node = currentNode
  }
  return node
}

let originHead = createLinkList()

while(originHead)  {
  // console.log(originHead.val)
  originHead = originHead.next
}


originHead = createLinkList()


let node = reverseLinkListWithKGroup(originHead, 4)
let n = 0
while(node && n < 20)  {
  console.log(node.val)
  node = node.next
  n++
}

