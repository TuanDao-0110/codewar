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

    for (let i = 0; i < word.length; i++) {
        arrTemp.push(word[i])
    }
    console.log(arrTemp);
    
}


duplicateEncode('string')