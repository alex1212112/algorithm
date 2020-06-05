// 6. ZigZag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows == 1 || s.length <= numRows) {
    return s
  }
  const arr = []
  let rowIndex = 0
  let goDown = true
  for (let index = 0; index < s.length; index++) {
    let row = arr[rowIndex]
    if (!row) {
      row = []
      arr.push(row)
    }
    row.push(s[index])
    if (rowIndex == 0) {
      goDown = true
    } else if (rowIndex == numRows - 1) {
      goDown = false
    }
    rowIndex += goDown ? 1 : -1
  }
  return arr.flatMap((e) => e).join('')
}

const s = 'PAYPALISHIRING'
const result = convert(s, 3)
console.log(`${result}`)
