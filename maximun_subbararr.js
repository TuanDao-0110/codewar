// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.



//     Example 1:

// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6.


// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5, 4, -1, 7, 8]
// Output: 23


// Constraints:

// 1 <= nums.length <= 105
//     - 104 <= nums[i] <= 104


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (1 <= nums.length <= 105) {
        const maxNum = 0
        let maxArrSum = []
        let sizeArr
        // calculate the total of the arr
        let calSumArr = (arr) => {
            let sumTemp = 0
            arr.map((item, index) => {
                sumTemp += item
            })
            return sumTemp
        }
        // create a biggest arr
        for (i = 0; i < nums.length; i++) {
            maxArrSum.push(i)
            if (maxNum < calSumArr(maxArrSum)) {

            }
        }
    }


}
maxSubArray()