// Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses 
// substring
// .

 

// Example 1:

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Example 2:

// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
// Example 3:

// Input: s = ""
// Output: 0
 

// Constraints:

// 0 <= s.length <= 3 * 104
// s[i] is '(', or ')'.

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    
  const stack = [-1]
  let maxWindow = 0

  for(let index = 0; index < s.length; index++) {
    const char = s[index]
    if(char == '(') {
      stack.push(index)
    } else {
      stack.pop()
      if(stack.length == 0) {
        stack.push(index)
      } else {
        maxWindow = Math.max(maxWindow,  index - stack[stack.length - 1])
      }
    }
  }
  return maxWindow
  
};


/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses2 = function(s) {
  let maxLength = 0;
  const stack = [-1]; // Initialize stack with -1 to serve as a marker for the base

  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          stack.push(i); // Push the index of the opening parenthesis
      } else {
          stack.pop(); // Pop the last opening parenthesis
          if (stack.length === 0) {
              stack.push(i); // If the stack is empty, push the current index as the new base marker
          } else {
              maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
          }
      }
  }

  return maxLength;
};


const string = '(()(((()'

const result = longestValidParentheses(string)

console.log(result)