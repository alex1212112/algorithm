// Longest Palindromic Substring

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const rs = s.split('').reverse().join('')
  return longestSameSubstring(s, rs)
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string}
 */
function longestSameSubstring(s1, s2) {
  const m = s1.length
  const n = s2.length
  const dp = [new Array(n + 1).fill(0)]
  let longest = 0
  let x = 0
  let y = 0
  for (let i = 1; i <= m; i++) {
    dp[i] = [0]
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        if (dp[i][j] > longest) {
          let tempx = i - 1
          let tempy = j - 1
          const len = tempx + tempy + 2 - s1.length
          if (len > 0) {
            const sub1 = s1.substring(tempx + 1 - len, tempx + 1)
            const sub2 = s2.substring(tempy + 1 - len, tempy + 1)
            console.log(sub1)
            console.log('\n')
            console.log(sub2)
            console.log(len)
            console.log('------------------')
            if (sub1 == sub2) {
              longest = Math.max(longest, dp[i][j])
              x = tempx
              y = tempy
              console.log(`x: ${x}`)
              console.log(`y: ${y}`)
              console.log(`x+1: ${s1[x+1]}`)
              console.log(`y+1: ${s2[y+1]}`)
              // console.log(`sub1: ${sub1}`)
              // console.log(`sub2: ${sub2}`)
              console.log(`t: ${s2.length}`)
              console.log(`longest: ${longest}`)
              console.log(`----------`)
            }
          }
        }
      } else {
        dp[i][j] = 0
      }
    }
  }

  let result = ''
  for (let index = 0; index < longest; index++) {
    result = `${s1[x]}${result}`
    x--
    y--
  }
  return result
}

const s =
  'jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx'
// const s = 'abcdefgfexyz'
const result = longestPalindrome(s)

console.log(`${result}`)
