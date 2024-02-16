
function knapsack(weights,values,capacity) {
  let n = values.length
  let dp = Array(n+1).fill(0).map(()=>Array(capacity+1).fill(0))
  for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= capacity; j++) {
      if(weights[i - 1] > j) {
        dp[i][j] = dp[i-1][j]
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j - weights[i - 1]] + values[i - 1])
      }
    }
  }
  return dp
}

const weights = [5, 1, 3]
const values = [12, 10, 6]

const capacity = 6

const result = knapsack(weights, values, capacity)
console.log(result)
