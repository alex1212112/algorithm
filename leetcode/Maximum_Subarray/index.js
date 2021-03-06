/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0]
  let sum = nums[0]
  nums = nums.slice(1)
  for(let x of nums) {
    sum = Math.max(x,sum + x)
    max = Math.max(max, sum)
  }
  return max
};
const arr = [1]
const result = maxSubArray(arr);
console.log(result);


// 说明

// 初始化的字串最大值和当前子串的和为 第 0 个元素的值。接下来:

// 从第一个元素开始，循环遍历到最后一个元素，每次循环做以下 3 件事情：

// 1. 累加当前子串和

// 2. 判断是否开始新的子串

// 3. 计算当前情况下的子串最大值

// 是否开始新的子串，取决于前面的子串和是否小于 0, 即 当前数字 x 与之前子串和 sum 加起来是否小于当前数字 x.

// 如果重新开始新的子串，则当前的 sum 值 就从当前数字 x 重新算起.

// 当前子串确定完毕之后，再把当前子串的和当前的最大子串值 max 去做比较，如果当前子串和大于最大

// 子串值，则最大子串值更新为当前子串和。

// 当循环结束之后，最大子串值就是 max

// 参考 : https://zh.wikipedia.org/wiki/%E6%9C%80%E5%A4%A7%E5%AD%90%E6%95%B0%E5%88%97%E9%97%AE%E9%A2%98
