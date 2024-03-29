// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

  const kv = {}  
  for(let str of strs) {
    const sortedStr = str.split('').sort().join('')
    if(!kv[sortedStr]) {
      const list = [str]
      kv[sortedStr] = list
    } else {
      const list = kv[sortedStr]
      list.push(str)
    }
  }
  return Object.values(kv)
};

const strs = ["eat","tea","tan","ate","nat","bat"]
const result = groupAnagrams(strs)
console.log(result)