// filter_list([1, 2, 'a', 'b']) == [1, 2]
// filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15]
// filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123]


// const assert = require('chai').assert;
// describe("Tests", () => {
//     it("test", () => {
//         assert.deepEqual(filter_list([1, 2, 'a', 'b']), [1, 2], 'For input [1,2,"a","b"]');
//         assert.deepEqual(filter_list([1, 'a', 'b', 0, 15]), [1, 0, 15], 'For input [1,"a","b",0,15]');
//         assert.deepEqual(filter_list([1, 2, 'aasf', '1', '123', 123]), [1, 2, 123], 'For input [1,2,"aasf","1","123",123]');
//     });
// });

function filter_list(l) {
    // Return a new array with the strings filtered out
    let arr = []
    l.forEach(e => typeof (e) === "number" ? arr.push(e) : '')
    console.log(arr)

    return arr
}


filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15]
