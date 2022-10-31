const e = require("express")

function digitalRoot(n) {
    // ...
    const devideAndSum = (number) => {
        let sum = 0
        String(number).split('').map((item, index) => {
            sum += Number(item)
        })
        return sum
    }
    if (n < 10) {
        return n
    } else {
        let result = n
        while (result > 9) {
            let temp = result
            result = devideAndSum(temp)
        }
        return result
    }

}

// function digitalRoot(n) {
//    // The function should breakdown a number until reaching a single number digit
// A three digit number (or bigger) should be summed up together until reaching a double digit number
// After reaching a double digit number the digits should be summed up to reach a single digit number
// return (n - 1) % 9 + 1;
// }

// O (1 + 1 + 1 + n* (1+ (n+4) ) +1) ===> O(4 + n * (n +5)) ==> O (4 + n^2 +5n) ==> O(n^2)

console.log(digitalRoot(132189))


//  1 divide it each number ==> caculate sum
// 2. check that number <10 
// 3. if not continue to do it 