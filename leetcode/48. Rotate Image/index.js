// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Example 2:


// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 

// Constraints:

// n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const round = Math.floor(matrix.length / 2)
    for(let index = 0; index < round; index++) {
      traverse(matrix, index)
    }
    console.log(matrix)
};

/**
 * @param {number[][]} matrix
 * @param {number} n  第几层
 * @return {void} Do not return anything, modify matrix in-place instead.
 */ 
function traverse(matrix, n) {
  const count = matrix.length
  const start = n
  const end = count - n * 2  + start - 1
  const record = []
  traverseRow(matrix, start, start, end, record)
  traverseCol(matrix, end, start + 1, end, record)
  reverseRow(matrix, end, start, end - 1, record)
  reverseCol(matrix, start, start + 1, end - 1, record)

  // console.log(record)

  const rowLength = count - n * 2
  
  let tag = record.length - (rowLength - 1)

  tag = traverseRowFill(matrix, start, start, end, record, tag)
  tag = traverseColFill(matrix, end, start + 1, end, record, tag)
  tag = reverseRowFill(matrix, end, start, end - 1, record, tag)
  tag = reverseColFill(matrix, start, start + 1, end - 1, record, tag)

  // console.log(`matrix is ${matrix}`)
}

function traverseRow(matrix,n, start, end, record) {
 for(let index = start; index <= end; index++) {
  record.push(matrix[n][index])
 } 
}

function traverseCol(matrix,n, start, end, record) {
  for(let index = start; index <= end; index++) {
    record.push(matrix[index][n])
   } 
}

function reverseRow(matrix,n, start, end, record) {
  for(let index = end; index >= start; index--) {
    record.push(matrix[n][index])
  } 
 }
 
 function reverseCol(matrix,n, start, end, record) {
   for(let index = end; index >= start; index--) {
      record.push(matrix[index][n])
    } 
 }



 function traverseRowFill(matrix,n, start, end, record, tag) {
  for(let index = start; index <= end; index++) {
  //  record.push(matrix[n][index])
   matrix[n][index] = record[tag]
   tag ++
   if(tag == record.length) {
    tag = 0
   }
  } 
  return tag 
 }
 
 function traverseColFill(matrix,n, start, end, record, tag) {
   for(let index = start; index <= end; index++) {
    //  record.push(matrix[index][n])
    matrix[index][n] = record[tag]
     tag++
    } 
    return tag
 }
 
 function reverseRowFill(matrix,n, start, end, record, tag) {
   for(let index = end; index >= start; index--) {
    //  record.push(matrix[n][index])
    matrix[n][index] = record[tag]
     tag++
   } 
   return tag
  }
  
  function reverseColFill(matrix,n, start, end, record, tag) {
    for(let index = end; index >= start; index--) {
      //  record.push(matrix[index][n])
      matrix[index][n] = record[tag]
       tag++
     } 
     return tag
  }

 const m = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
 ]

 rotate(m)