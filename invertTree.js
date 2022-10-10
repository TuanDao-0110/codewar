/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// Input: root = [4, 2, 7, 1, 3, 6, 9]
// Output: [4, 7, 2, 9, 6, 3, 1]

var invertTree = function (root) {
    let result = []
    let flag = true
    let start = 0
    let end = 1
    let index = 0
    let doubleArray = (arr, start, end) => {
        if (end <= arr.length) {
            return arr.slice(start, end)
        } else {
            return false
        }
    }
    let reOrderArr = (arr) => {
        let result = []
        for (i in arr) {
            result.push(arr[arr.length - 1 - i])

        }
        return result
    }
    while (flag) {
        let temp = doubleArray(root, start, end)
        if (temp) {
            result = result.concat(reOrderArr(temp))
            start = end
            index = index + 2
            end = end + index
        } else {
            flag = false
        }
    }
    console.log(result)
    return result
};


invertTree([4, 2, 7, 1, 3, 6, 9])




