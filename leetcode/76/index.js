// 76. Minimum Window Substring
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

const e = require("express");
const M = require("minimatch");

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.
 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.
 

// Follow up: Could you find an algorithm that runs in O(m + n) time?


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let left = 0
  let right = 0
  let window = {}
  let min = ''
  let needs = {}
  let valid = 0
  for(let char of t) {
    if(!needs[char]) {
      needs[char] = 1
    } else {
      needs[char]++
    }
  }
  while(right < s.length) {
    const c = s[right]
    right++
    if(needs[c]) {
      if(!window[c]) {
        window[c] = 1
      } else {
        window[c]++
      }
      if(window[c] == needs[c]) {
        valid++
      }
    }
    while(valid == Object.keys(needs).length) {
      const tmp = s.substring(left, right)
      if(!min) {
        min = tmp
      } else {
        min = min.length > tmp.length ? tmp : min
      }
      const c = s[left]
      left++
      if(needs[c]) {
        if(needs[c] == window[c]) {
          valid--
        }
        window[c]--
      }
    }
  }
  return min
};



const s1 = 'a'
const s2 = 'aa'


const result = stringContains(s1, s2)

console.log(result)