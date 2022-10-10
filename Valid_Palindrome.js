// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non - alphanumeric characters, it reads the same forward and backward.Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



//     Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
//     Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
//     Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non - alphanumeric characters.Since an empty string reads the same forward and backward, it is a palindrome.
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.



/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let result = true
    const word = s.replace(/[^0-9a-zA-Z]+/gim, '')
    console.log(word)
    for (i = 0; i < word.toLowerCase().length; i++) {
        if (word[i] !== word[word.length - i]) {
            result = false
            return result
        }
    }


    return result

};
console.log(

    isPalindrome("0 9 : ,")
)

function Box(value) {
    this.value = value;
}

// Properties all boxes created from the Box() constructor
// will have
Box.prototype.getValue = function () {
    return 9;
};

const boxes = [
    new Box(1),
    new Box(2),
    new Box(3),
];
console.log(boxes[1].getValue())