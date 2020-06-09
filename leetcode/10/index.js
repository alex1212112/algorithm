// 10. Regular Expression Matching
// Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Note:

// s could be empty and contains only lowercase letters a-z.
// p could be empty and contains only lowercase letters a-z, and characters like . or *.
// Example 1:

// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input:
// s = "aa"
// p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input:
// s = "ab"
// p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
// Example 4:

// Input:
// s = "aab"
// p = "c*a*b"
// Output: true
// Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
// Example 5:

// Input:
// s = "mississippi"
// p = "mis*is*p*."
// Output: false

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  if (s == p) {
    return true
  }
  let dp = new Array(s.length + 1)
    .fill(undefined)
    .map((e) => new Array(p.length + 1).fill(false))
  dp[0][0] = true
  for (let pIndex = 1; pIndex <= p.length; pIndex++) {
    dp[0][pIndex] = p[pIndex - 1] == '*' ? dp[0][pIndex - 2] : false
  }
  // console.log(dp)

  for (let sIndex = 1; sIndex <= s.length; sIndex++) {
    for (let pIndex = 1; pIndex <= p.length; pIndex++) {
      if (s[sIndex - 1] == p[pIndex - 1] || p[pIndex - 1] == '.') {
        dp[sIndex][pIndex] = dp[sIndex - 1][pIndex - 1]
      }

      if (p[pIndex - 1] == '*') {
        dp[sIndex][pIndex] = dp[sIndex][pIndex] || dp[sIndex][pIndex - 2]

        if (p[pIndex - 2] == s[sIndex - 1] || p[pIndex - 2] == '.') {
          dp[sIndex][pIndex] = dp[sIndex][pIndex] || dp[sIndex - 1][pIndex]
        }
      }
    }
  }
  return dp[s.length][p.length]
}

const result = isMatch('aaa', 'ab*a*c*a')
console.log(result)
