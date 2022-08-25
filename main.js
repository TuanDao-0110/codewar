



// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// Example: 


// const { assert } = require("chai")

// describe("Basic tests", () => {
//     it("Testing for fixed tests", () => {
//         assert.strictEqual(descendingOrder(0), 0)
//         assert.strictEqual(descendingOrder(1), 1)
//         assert.strictEqual(descendingOrder(111), 111)
//         assert.strictEqual(descendingOrder(15), 51)
//         assert.strictEqual(descendingOrder(1021), 2110)
//         assert.strictEqual(descendingOrder(123456789), 987654321)
//     })
// })
// cách giải: 
//  1. tách ra thành 1 mảng; 
// 2. so sánh từng phần từ trong mảng.

function descendingOrder(n) {
    //...   
    // 1 return decending order
    const arr = (n) => {
        let arr = []
        let text = n.toString()
        for (i = 0; i < text.length; i++) {
            arr.push(text[i])
        }
        for (i = 0; i < arr.length; i++) {

            for (j = i + 1; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    let tempN = arr[i]
                    arr[i] = arr[j]
                    arr[j] = tempN
                }
            }
        }
        return arr
    }

    let orderedArr = arr(n)
    let finalNumber = ''
    orderedArr.map((item, index) => {
        finalNumber += item

    })
    console.log(finalNumber)
    return Number(finalNumber)
    // best solution :   return parseInt(String(n).split('').sort().reverse().join(''))

}

descendingOrder(4356)