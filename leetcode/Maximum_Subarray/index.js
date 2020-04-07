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

// 初始化的最大值和当前子串的和为 第 0 个元素的值。接下来:

// 从第一个元素开始，循环遍历到最后一个元素，每次去计算当前情况下的子串最大值和是否开始新的子串。

// 是否开始新的子串，取决于前面的子串和是否小于 0, 即 当前数字 x 和之前子串和 sum 是否小于当前数字 x.

// 如果重新开始新的子串，则当前的 sum 值 就从当前数字 x 重新算起.

// 当前子串确定完毕之后，再把当前子串的和当前的最大子串值 max 去做比较，如果当前子串和大于最大

// 子串值，则最大子串值更新为当前字串和。

// 当循环结束之后，最大字串值就是 max
