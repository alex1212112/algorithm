/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.every((e) => e >= 0)) {
    return nums.reduce((a, b) => a + b);
  }
  if (nums.every((e) => e < 0)) {
    return Math.max(...nums);
  }

  const orders = orderedNums(nums);
  const ordersResult = subArray(orders)
  return Math.max(...ordersResult);
};

function subArray(orders) {
  let max = 0;
  let index = 0;
  const maxs = [];
  while (index < orders.length) {
    num = orders[index];
    if (num >= 0) {
      max = max + num;
    } else {
      if (max + num >= 0) {
        if(orders[index + 1] + num < 0) {
          maxs.push(max)
        } 
        max = max + num;
      } else {
        maxs.push(max);
        max = 0;
      }
    }
    index++;
  }
  maxs.push(max);
  return maxs
}

function orderedNums(nums) {
  let orders = [];
  nums = nums.filter(e => e!=0)
  const last = nums.reduce((x, y) => {
    if (x >= 0 && y >= 0) {
      return x + y;
    } else if (x < 0 && y < 0) {
      return x + y;
    }
    orders.push(x);
    return y;
  });
  orders.push(last)
  if (orders[0] <= 0) {
    orders.shift();
  }
  if (orders[orders.length - 1] <= 0) {
    orders.pop();
  }

  return orders;
}

const arr = [-1,-2,-2,-2,3,2,-2,0];
const result = maxSubArray(arr);
console.log(result);
