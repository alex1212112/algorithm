// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

  let map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'o', 'n'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }

  if(digits.length == 0) {
    return []
  }

  let result = []
  backtrack('', 0, digits, map, result)

  return result
};

function backtrack (path, index, digits, map, result) {

  if(index == digits.length) {
    result.push(path)
    return
  }

  let digit = digits[index]
  let options = map[digit]

  for(let option of options) {
    let tmpPath = path
    path = `${path}${option}`
    backtrack(path, index + 1 , digits, map, result)
    path = tmpPath
  }
}


const digits = "234"
const res = letterCombinations(digits)

console.log(res)