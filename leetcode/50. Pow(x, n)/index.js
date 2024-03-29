// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:

// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
 

// Constraints:

// -100.0 < x < 100.0
// -231 <= n <= 231-1
// n is an integer.
// -104 <= xn <= 104

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if(x == 1) {
    return 1
  }
  if(x == -1) {
    return n % 2 == 0 ? 1 : -1
  }

  let result = 1;
  if(n > 0) {
    for(let index = 1; index <= n; index++) {
      result = result * x
    }
  } else if(n < 0) {
    for(let index = 1; index <= -n; index++) {
      result = result * x
    }
    result =  1 / result
  }
  return result
};