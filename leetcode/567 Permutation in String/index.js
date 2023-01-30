// 567. Permutation in String
// Medium
// 8K
// 264
// Companies
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

 

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
 

// Constraints:

// 1 <= s1.length, s2.length <= 104
// s1 and s2 consist of lowercase English letters.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {

    let left = 0
    let right = 0
    let window = {}
    let needs = {}
    let valid = 0

    for(let c of s1) {
        if(needs[c]) {
            needs[c]++ 
        } else {
            needs[c] = 1
        }
    }

    while(right < s2.length) {
        let c = s2[right]
        right++
        if(needs[c]) {
            if(window[c]) {
                window[c]++
            } else {
                window[c] = 1
            }
            if(needs[c] == window[c]) {
                valid++
            } 
        } else {
            valid = 0
            left = right - 1
            window = {}
        }
        while(valid == Object.keys(needs).length) {
            let d = s2[left]
            if(needs[d]) {
                if(window[d]) {
                    if(window[d] == needs[d]) {
                        valid--
                    }
                    window[d]--
                }
            }
            if(right - left == s1.length) {
                console.log(`left is ${left}, right is ${right}`)
                return true
            }
            left++
        }
    }
    return false   
};



const s1 = 'qff'
const s2 = 'ifisnoskikfqzrmzlv'

const r = checkInclusion(s1, s2)

console.log(r);