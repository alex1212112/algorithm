// Merge Sorted Array
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

// Example:

// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (m == 0) {
    for (let index = 0; index < n; index++) {
      nums1[index] = nums2[index]
    }
    return
  }
  let num1Index = 0
  let num2Index = 0
  let num1Tag = 0
  while (num2Index < n) {
    while (num1Index < n + m && num1Tag < m) {
      // console.log(nums2[num2Index], nums1[num1Index]);
      if (nums2[num2Index] <= nums1[num1Index]) {
        for (let index = m + n - 1; index > num1Index; index--) {
          nums1[index] = nums1[index - 1]
        }
        // 插入
        nums1[num1Index] = nums2[num2Index]
        num1Index++
        break
      } else {
        num1Index++
        num1Tag++
      }
    }
    // console.log(num2Index);

    if (num1Tag == m) {
      // console.log('tag' + num1Tag);
      break
    }
    num2Index++
  }
  // num2Index--;
  while (num2Index < n) {
    nums1[m + num2Index] = nums2[num2Index]
    num2Index++
  }
}

const nums1 = [2, 0]
const nums2 = [1]
merge(nums1, 1, nums2, 1)
console.log(nums1)
