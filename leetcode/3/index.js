// Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let result = ''
  let longest = 0
  for (let char of s) {
    const index = result.indexOf(char)
    if (index >= 0) {
      result = `${result.substring(index+1)}${char}`
    } else {
      result = `${result}${char}`
      if (result.length > longest) {
        longest = result.length
      }
    }
  }
  return longest
}

const s = 'pwwkew'
const result = lengthOfLongestSubstring(s)
console.log(result)
