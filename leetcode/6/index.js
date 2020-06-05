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
  if(numRows == 1) {
    return s
  }
  const len = s.length
  const arr = []
  for (let row = 0; row < numRows; row++) {
    let index = row
    let rowArr = []
    while (index < len) {
      rowArr.push(s[index])
      if (row == 0 || row == numRows - 1) {
        index = index + 2 * numRows - 2
        if (!s[index]) {
          console.log(row)
          console.log(index)
          break
        }
      } else {
        index = index + 2 * numRows - 2 - row * 2
        if (!s[index]) {
          break
        }
        rowArr.push(s[index])
        index = index + row * 2
        if (!s[index]) {
          break
        }
      }
    }
    arr.push(rowArr)
  }
  return arr.flatMap((e) => e).join('')
}

const s = 'A'
const result = convert(s, 1)
console.log(`${result}`)
