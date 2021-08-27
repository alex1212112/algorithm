

function factorial(n) {

  const list = [1]
  for(let i=2; i<=n; i++) {
    let tmpNum = 0
    for(let j=0; j<list.length; j++) {
      const tmp = list[j] * i + tmpNum
      const rest = tmp % 10
      list[j] = rest
      tmpNum = Math.floor(tmp / 10)
    }
    while(tmpNum > 0) {
      const currentNum =  tmpNum % 10
      tmpNum = Math.floor(tmpNum / 10)
      list.push(currentNum)
    }
  }
  return list
}


const result = factorial(100000)

console.log(result.length);
