

function mergeSort(list) {
  mergeSortHelp(list, 0, list.length - 1)  
  return list
}

function mergeSortHelp(list, low, high) {
  if(low >= high) {
    return
  }
  if(high == low + 1) {
    if(list[high] < list[low]) {
      swap(list, low, high)
    }
    return
  }
  const mid = Math.ceil( (high + low) / 2)
  mergeSortHelp(list, low, mid - 1)
  mergeSortHelp(list, mid, high)
  merge(list,low, mid, high)
  return list
}

function merge(list, low, mid, high) {
  let tmpList = []
  let i = low
  let j = mid
  while(i<mid && j<=high) {
      if(list[i] < list[j]) {
        tmpList.push(list[i])
        i++
      } else {
        tmpList.push(list[j])
        j++
      }
  }
  if(i == mid) {
    const rest = list.slice(j, high+1)
    tmpList = tmpList.concat(rest)
  } else {
    const rest = list.slice(i, mid)
    tmpList = tmpList.concat(rest)
  }

  // console.log(tmpList)
  list.splice(low, high - low + 1, ...tmpList)
}

function swap(list, p1, p2) {
  const tmp = list[p1]
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

const list = generateList(20)
console.log(list)
const result = mergeSort(list)
console.log(result)







