// 11. Container With Most Water

// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.

// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0
  for (let beginIndex = 0; beginIndex < height.length - 1; beginIndex++) {
    for (let endIndex = 1; endIndex < height.length; endIndex++) {
      const area =
        Math.min(height[beginIndex], height[endIndex]) * (endIndex - beginIndex)
      max = Math.max(max, area)
    }
  }
  return max
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const result = maxArea(height)
console.log(result)
