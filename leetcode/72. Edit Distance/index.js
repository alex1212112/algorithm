// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character
 

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')
// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')
 

// Constraints:

// 0 <= word1.length, word2.length <= 500
// word1 and word2 consist of lowercase English letters.

const { log } = require("console")
const { execSync } = require('child_process')

function systemSleep(seconds) {
  try {
    execSync(`sleep ${seconds}`);
  } catch (error) {
    console.error('Error:', error);
  }
}



/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const result = []
  const options = [0, 1, 2]
  const path = 0
  backtrack(result, path, options, word1, word2, 0, 0)
  console.log(`${result}`)
  return  Math.min(...result)
};

/**
 * @param {Array}  result
 * @param {number} path
 * @param {Array}  options
 * @param {string} word1
 * @param {string} word2
 * @param {number} index2
 * @param {number} index2
 * @return {number}
 */
function backtrack(result, path, options, word1, word2, index1, index2) {

  // console.log(`word1:${word1}`)
  // console.log(`word2:${word2}`)
  // console.log(`index1:${index1}`)
  // console.log(`index2:${index2}`)

  // systemSleep(0.1)

  if(index1 == word1.length && index2 < word2.length ) {
    path = path + word2.length - (index2 + 1)
    result.push(path)
    // console.log(`${result}`)
    return
  }
  if(index2 == word2.length && index1 < word1.length) {
    path = path + word1.length - (index1 + 1)
    result.push(path)
    // console.log(`${result}`)
    // console.log(`find a solution: ${path}`)
    return
  }
  if(index1 == word1.length && index2 == word2.length) {
    result.push(path)
    // console.log(`${result}`)
    return
  }

  const char1 = word1.charAt(index1)
  const char2 = word2.charAt(index2)
  if(char1 == char2) {
    index1++
    index2++
    backtrack(result, path, options, word1, word2, index1, index2)
    return
  }
  let currentWord1 = ""
  // console.log(`the word1 is :${word1}`);
  for(let item of options) {
    // console.log(`option: ${item}`)
    if(item == 0) {
      currentWord1 = removeCharAt(word1, index1)
    } else if(item == 1) {
      // console.log(`before insert word1:${word1}`);
      const letter = word2.charAt(index2)
      currentWord1 = insertCharAt(word1, index1, letter)
      // console.log(`after insert word1:${currentWord1}`);
      index1++
      index2++
    } else if(item == 2) {
      const letter = word2.charAt(0)
      currentWord1 = removeCharAt(word1, index1)
      currentWord1 = insertCharAt(word1, index1, letter)
      index1++
      index2++
    }
    path++
    backtrack(result, path, options, currentWord1, word2, index1, index2)
    if(item == 1) {
      index1--
      index2--
    } else if(item == 2) {
      index1--
      index2--
    }
    path--
  }
}


function removeCharAt(str, n) {
  // 直接使用 n，假设 n 已经是基于 0 的索引
  return str.slice(0, n) + str.slice(n + 1);
}

function insertCharAt(str, n, s) {
  if(n > str.length) {
    // 如果 n 超出字符串的长度，则直接在末尾添加字符
    return str + s;
  }
  return str.slice(0, n) + s + str.slice(n);
}


function minDistance2(word1, word2) {
  let minOps = Infinity;

  function backtrack(i, j, ops) {
      // 如果达到 word1 或 word2 的末尾
      if (i === word1.length || j === word2.length) {
          // 剩余的操作次数即为剩余的长度差
          minOps = Math.min(minOps, ops + word1.length - i + word2.length - j);
          return;
      }

      // 如果当前字符相等，直接跳到下一个字符
      if (word1[i] === word2[j]) {
          backtrack(i + 1, j + 1, ops);
      } else {
          // 尝试插入
          backtrack(i, j + 1, ops + 1);
          // 尝试删除
          backtrack(i + 1, j, ops + 1);
          // 尝试替换
          backtrack(i + 1, j + 1, ops + 1);
      }
  }

  backtrack(0, 0, 0);
  return minOps;
}

function minDistance3(s, t) {
  const n = s.length,
      m = t.length;
  const dp = new Array(m + 1).fill(0);
  // 状态转移：首行
  for (let j = 1; j <= m; j++) {
      dp[j] = j;
  }
  // 状态转移：其余行
  for (let i = 1; i <= n; i++) {
      // 状态转移：首列
      let leftup = dp[0]; // 暂存 dp[i-1, j-1]
      dp[0] = i;
      // 状态转移：其余列
      for (let j = 1; j <= m; j++) {
          const temp = dp[j];
          if (s.charAt(i - 1) === t.charAt(j - 1)) {
              // 若两字符相等，则直接跳过此两字符
              dp[j] = leftup;
          } else {
              // 最少编辑步数 = 插入、删除、替换这三种操作的最少编辑步数 + 1
              dp[j] = Math.min(dp[j - 1], dp[j], leftup) + 1;
          }
          leftup = temp; // 更新为下一轮的 dp[i-1, j-1]
      }
  }
  return dp[m];
}


const string1 = 'intention'
const string2 = 'execution'

const result = minDistance3(string1, string2)

console.log(`result is ${result}`)