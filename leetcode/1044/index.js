// 1044. Longest Duplicate Substring

// Given a string s, consider all duplicated substrings: (contiguous) substrings of s that occur 2 or more times. The occurrences may overlap.

// Return any duplicated substring that has the longest possible length. If s does not have a duplicated substring, the answer is "".

 

// Example 1:

// Input: s = "banana"
// Output: "ana"
// Example 2:

// Input: s = "abcd"
// Output: ""
 

// Constraints:

// 2 <= s.length <= 3 * 104
// s consists of lowercase English letters.


/**
 * @param {string} s
 * @return {string}
 */
 var longestDupSubstring = function(s) {
    const list = suffixArray(s)
    const orderList = list.sort()
    console.log(orderList)
    let tmp = ''
    for(let index = 1; index < orderList.length; index++) {
      let lcsString = lcs(orderList[index], orderList[index - 1])
      if(lcsString.length > tmp.length) {
        tmp = lcsString
      } 
    }
    return tmp

};

function suffixArray(s) {
  const list = []
  for(let index = 0; index < s.length; index++) {
    list.push(s.substring(index, s.length)) 
  }
  return list
}

function lcs(s1, s2) {
  let tmp = ''
  for(let index = 0; index < s1.length; index++) {
    if(index > s2.length - 1) {
      break
    }
    if(s1[index] == s2[index]) {
      tmp = `${tmp}${s1[index]}`
    } else {
      break
    }
  }
  return tmp
}


const s = 'banana'
const result = longestDupSubstring(s)

console.log(result)