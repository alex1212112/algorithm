function printMatrix(matrix) {
  const list = []
  printMatrixHelp(matrix, list)
  return list
}

function printMatrixHelp(matrix, list) {
  if (matrix.length == 0) {
    return
  }
  const firstList = matrix.shift()
  const lastList = matrix.pop()
  for (let index = 0; index < firstList.length; index++) {
    list.push(firstList[index])
  }
  for (let index = 0; index < matrix.length; index++) {
    const tmpList = matrix[index]
    const el = tmpList.pop()
    list.push(el)
  }

  if (!lastList) {
    return
  }

  for (let index = lastList.length - 1; index >= 0; index--) {
    list.push(lastList[index])
  }

  for (let index = matrix.length - 1; index >= 0; index--) {
    const tmpList = matrix[index]
    const el = tmpList.shift()
    list.push(el)
  }
  printMatrixHelp(matrix, list)
}

const matrix = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25],
]

const result = printMatrix(matrix)

for (let el of result) {
  console.log(el)
}
