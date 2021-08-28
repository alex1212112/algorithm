function quikSort(list) {
  quikSortHelp(list, 0, list.length - 1)
  return list
}

function quikSortHelp(list, low, high) {
  if(low >= high) {
    return
  }
  const p = findPostion(list, low, high)
  quikSortHelp(list, low, p - 1) 
  quikSortHelp(list, p + 1, high) 
  return list
}

function findPostion(list, low, high) {
  let position = low
  const tmp = list[high]
  for(let index=low; index<high; index++) {
    if(list[index] < tmp) {
      swap(list, position, index)
      position++ 
    }
  }
  swap(list, position, high)
  return position
}

function swap(list, p1, p2) {
  if(p1 == p2) {
    return
  }
  let tmp = list[p1]
  list[p1] = list[p2]
  list[p2] = tmp
}

function generateList(n) {
  const list = []
  for(let index=0; index<n; index++) {
    const number = Math.floor(Math.random() * 100)
    const signedNumber = Math.random() > 0.5 ? number : -number
    list.push(signedNumber)
  }
  return list
}


// const list = [ 8, 7, -3, 11, 421, -23, 98, -25, 24]
// const result = quikSort(list)
// console.log(result)

const list = generateList(100)
console.log(list)
const result = quikSort(list)
console.log(result)


