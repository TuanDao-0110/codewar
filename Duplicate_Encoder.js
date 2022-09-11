// "din"      => "((("
// "recede"   => "()()()"
// "Success"  => ")())())"
// "(( @"     => "))((" 



// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Duplicate Encoder", () => {
//     it("Testing for fixed tests", () => {
//         a
//         assert.strictEqual(duplicateEncode("din"), "(((");
//         assert.strictEqual(duplicateEncode("recede"), "()()()");
//         assert.strictEqual(duplicateEncode("Success"), ")())())", "should ignore case");
//         assert.strictEqual(duplicateEncode("(( @"), "))((");
//     });
// });


function duplicateEncode(word) {
    // ...
    let value;
    let arrTemp = []
    let arrSame = []
    // create a arr for the string
    for (let i = 0; i < word.length; i++) {
        arrTemp.push(word[i])
    }
    console.log(arrTemp)
    // create arr which have same value
    for (let i = 0; i < arrTemp.length; i++) {
        let count = 0
        let temp = arrTemp[i]
        for (j = i + 1; j < arrTemp.length; j++) {
            if (temp === arrTemp[j] && !arrSame.includes(temp)) {
                arrSame.push(temp)

            }
        }
    }
// now compare 
    for (let i = 0; i < arrSame.length; i++) {
      let temp = arrSame[i]
        for (j = 0; j < arrTemp.length; j++) {
            if (arrTemp[j] === arrSame[i]) {
                arrTemp[j] = '('
            }else {
                // arrTemp[j] = ')'
                console.log(arrSame[i])
                
            }
        }
    }
    console.log(arrSame)

    console.log(arrTemp);

}


duplicateEncode('stringrs')