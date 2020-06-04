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
  let mx = 0
  let id = 0
  let p = []
  s = s.split('').join('#')
  s = `$#${s}#`
  for (let i = 1; i < s.length; i++) {
    p[i] = mx > i ? Math.min(p[2 * id - i], mx - i) : 1
    while (s[i + p[i]] == s[i - p[i]]) {
      p[i]++
    }
    if (i + p[i] > mx) {
      mx = i + p[i]
      id = i
    }
    // console.log(p[i])
  }
  p = p.filter((e) => !isNaN(e))
  let max = Math.max(...p)
  const index = p.indexOf(max)
  max = max - 1
  const sub = s.substring(index - max + 1, index + max + 1).replace(/#/g, '')
  return sub
}

const s =
  'jrjnbctoqgzimtoklkxcknwmhiztomaofwwzjnhrijwkgmwwuazcowskjhitejnvtblqyepxispasrgvgzqlvrmvhxusiqqzzibcyhpnruhrgbzsmlsuacwptmzxuewnjzmwxbdzqyvsjzxiecsnkdibudtvthzlizralpaowsbakzconeuwwpsqynaxqmgngzpovauxsqgypinywwtmekzhhlzaeatbzryreuttgwfqmmpeywtvpssznkwhzuqewuqtfuflttjcxrhwexvtxjihunpywerkktbvlsyomkxuwrqqmbmzjbfytdddnkasmdyukawrzrnhdmaefzltddipcrhuchvdcoegamlfifzistnplqabtazunlelslicrkuuhosoyduhootlwsbtxautewkvnvlbtixkmxhngidxecehslqjpcdrtlqswmyghmwlttjecvbueswsixoxmymcepbmuwtzanmvujmalyghzkvtoxynyusbpzpolaplsgrunpfgdbbtvtkahqmmlbxzcfznvhxsiytlsxmmtqiudyjlnbkzvtbqdsknsrknsykqzucevgmmcoanilsyyklpbxqosoquolvytefhvozwtwcrmbnyijbammlzrgalrymyfpysbqpjwzirsfknnyseiujadovngogvptphuyzkrwgjqwdhtvgxnmxuheofplizpxijfytfabx'
// const s = 'abacd'
const result = longestPalindrome(s)

console.log(`${result}`)
