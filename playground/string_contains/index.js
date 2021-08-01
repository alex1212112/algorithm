// 字符串包含

// 题目描述

// 给定两个分别由字母组成的字符串A和字符串B，字符串B的长度比字符串A短。请问，如何最快地判断字符串B中所有字母是否都在字符串A里？

// 为了简单起见，我们规定输入的字符串只包含大写英文字母，请实现函数bool stringContains(string a, string b)

// 比如，如果是下面两个字符串：

// String 1：ABCD

// String 2：BAD

// 答案是true，即String2里的字母在String1里也都有，或者说String2是String1的真子集。

// 如果是下面两个字符串：

// String 1：ABCD

// String 2：BCE

// 答案是false，因为字符串String2里的E字母不在字符串String1里。

// 同时，如果string1：ABCD，string 2：AA，同样返回true。


function stringContains(a, b) {

  const list = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,61, 67, 71, 73, 79, 83, 89, 97, 101]
  let sum = 1

  for(let i = 0; i < a.length; i++ ) {
    const index = a.charCodeAt(i) - 'A'.charCodeAt(0);
    sum = sum * list[index]
  }
  
  for(let i = 0; i < b.length; i++) {

    const index = b.charCodeAt(i) - 'A'.charCodeAt(0);
    const num = list[index];

    if(sum % num != 0) {
      return false
    }
  }
  return true;
}


function stringContainsWithBit(a, b) {
  let hash = 0;
  for(let i = 0; i < a.length; i++) {
    let count = a.charCodeAt(i) - 'A'.charCodeAt(0)
    hash = hash | 1 << count
  }
  for(let i = 0; i < b.length; i++) {
    let count = b.charCodeAt(i) - 'A'.charCodeAt(0)
    let num = 1 << count
    if((num & hash) == 0) {
      return false
    }
  }
  return true
}


const a = 'ABCDEFG'
const b = 'CDE'

const result = stringContainsWithBit(a, b)

console.log(`result is ${result}`)