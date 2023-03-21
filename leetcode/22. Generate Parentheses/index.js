// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8



/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

    const result = []
    const options = ['(', ')']

    backtrack('', options, result, n)
    return result

};


function backtrack(path, options, result, pairCount) {

    if(path.length == pairCount * 2) {
        result.push(path)
        return
    }

    for(let index = 0; index < options.length; index++) {

        const item = options[index]         

        if(item == '(' && isNextLeftValid(path, pairCount)) {
            const tmpPath = path
            path = `${path}(`
            backtrack(path, options, result, pairCount)
            path = tmpPath
        } else if( item == ')' && isNextRightValid(path)) {
            const tmpPath = path
            path = `${path})`
            backtrack(path, options, result, pairCount)
            path = tmpPath
        }
    }
}


function isNextRightValid(path) {
    const leftCount = leftCountFromPath(path)
    const righCount = rightCountFromPath(path)
    return leftCount > righCount
}

function isNextLeftValid(path, count) {
    const leftCount = leftCountFromPath(path) 
    return leftCount < count
}


function leftCountFromPath(path) {
    let count = 0
    for(let str of path) {
        if(str == '(') {
            count++
        }
    }
    return count
}

function rightCountFromPath(path) {
    let count = 0
    for(let str of path) {
        if(str == ')') {
            count++
        }
    }
    return count
}


const result = generateParenthesis(4)
console.log(result)