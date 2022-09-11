// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


//     Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false


// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

var isValid = function (s) {
    let opens = { '{': '}', '(': ')', '[': ']' }
    let closes = { '}': '{', ')': '(', ']': '[' }
    let opening = []
    let a = 0
    let b = 0
    if (s.length % 2 !== 0) return false
    if (s.length % 2 === 0) {
        for (i of s) {
            if (opens[i]) {
                a++
                opening.push(i)
            }
            if (closes[i]) {
                let popped = opening.pop()
                b++
                if (i !== opens[popped]) return false
            }


        }
    }
    if (a === b && opening.length === 0) return true
    return false

};


console.log(isValid("(){}"))