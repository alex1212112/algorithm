// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

 

// Example 1:


// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]
// Example 2:

// Input: root = []
// Output: []
 

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// -1000 <= Node.val <= 1000



// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) {
      return ''
    }
    const list = []
    const queue = [root]
    bfs(queue, list)
    return list.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data) {
      return null
    }
    const list = data.split(',')
    const nodeList = list.map(e => {
      if(e) {
        return new TreeNode(e)
      } else {
        return null
      }
    })
    let slow = 0
    let fast = 0 
    while(fast < nodeList.length - 1) {
      const root = nodeList[slow]
      if(root) {
        const leftIndex = fast + 1
        const rightIndex = fast + 2
        const left = nodeList[leftIndex]
        const right = nodeList[rightIndex]
        root.left = left
        root.right = right
        slow++
        fast+=2 
      } else {
        slow++
      }
    }
    return nodeList[0]
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


function bfs(queue, list) {
  while(queue.length > 0) {
    const root = queue.shift()
    if(!root) {
      list.push(null)
      continue
    } else {
      list.push(root.val)
    }
    if(root.left) {
      queue.push(root.left)
    } else {
      queue.push(null)
    }
    if(root.right) {
      queue.push(root.right)
    } else {
      queue.push(null)
    }
  }
}


